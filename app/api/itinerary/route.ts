import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.SUMOPOD_API_KEY,
  baseURL: "https://ai.sumopod.com/v1",
});

const SYSTEM_PROMPT = `You are a Yogyakarta travel itinerary planner AI. You MUST respond ONLY with valid JSON — no markdown, no code fences, no explanation text before or after.

Your response must be a JSON object with this exact structure:
{
  "title": "short creative title",
  "summary": "one sentence overview",
  "days": [
    {
      "dayNumber": 1,
      "date": "the date",
      "theme": "short theme",
      "destinations": [
        {
          "name": "place name",
          "description": "one sentence about what to do",
          "time": "09:00",
          "endTime": "11:00",
          "duration": "2 hours",
          "category": "temple",
          "lat": -7.6079,
          "lng": 110.2038,
          "tips": "short tip"
        }
      ]
    }
  ]
}

RULES:
1. Use REAL GPS coordinates for REAL places in Yogyakarta (DIY province).
2. Plan exactly 3 destinations per day to keep the response compact.
3. Keep descriptions to ONE short sentence max.
4. Keep tips to a few words.
5. category must be one of: temple, palace, nature, food, art, shopping, spiritual, nightlife, photography, museum, park, beach, village
6. Order destinations geographically to minimize travel.
7. Reference coordinates:
   - Borobudur: -7.6079, 110.2038
   - Prambanan: -7.7520, 110.4914
   - Kraton: -7.8052, 110.3642
   - Taman Sari: -7.8100, 110.3592
   - Malioboro: -7.7925, 110.3660
   - Ratu Boko: -7.7706, 110.4896
   - Parangtritis Beach: -8.0253, 110.3289
   - Jomblang Cave: -7.9537, 110.6399
   - Kalibiru: -7.8266, 110.0670
   - Tebing Breksi: -7.7625, 110.5005

OUTPUT ONLY THE JSON. NOTHING ELSE.`;

/**
 * Attempt to repair truncated JSON by closing open brackets/braces.
 */
function repairTruncatedJSON(raw: string): string {
  let s = raw.trim();

  // Remove trailing commas before we add closers
  s = s.replace(/,\s*$/, "");

  // Count open vs close brackets/braces
  let braces = 0;
  let brackets = 0;
  let inString = false;
  let escape = false;

  for (const ch of s) {
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;

    if (ch === "{") braces++;
    else if (ch === "}") braces--;
    else if (ch === "[") brackets++;
    else if (ch === "]") brackets--;
  }

  // If we're inside a string, close it
  if (inString) {
    s += '"';
  }

  // Close any unclosed brackets/braces
  while (brackets > 0) {
    // Remove trailing comma
    s = s.replace(/,\s*$/, "");
    s += "]";
    brackets--;
  }
  while (braces > 0) {
    s = s.replace(/,\s*$/, "");
    s += "}";
    braces--;
  }

  return s;
}

export async function POST(request: Request) {
  try {
    const { preferences } = await request.json();

    if (!preferences) {
      return Response.json(
        { error: "Preferences are required" },
        { status: 400 }
      );
    }

    const {
      startDate,
      endDate,
      startHour,
      endHour,
      companion,
      budget,
      interests,
    } = preferences;

    const userPrompt = `Create a travel itinerary for Yogyakarta:
- Dates: ${startDate} to ${endDate}
- Hours: ${startHour}:00 to ${endHour}:00
- With: ${companion}
- Budget: ${budget}
- Interests: ${interests.join(", ")}

Respond with ONLY the JSON object. Keep descriptions very short (one sentence). Plan exactly 3 destinations per day.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 4096,
      temperature: 0.7,
    });

    const raw = completion.choices[0]?.message?.content || "{}";

    // Strip potential markdown code fences
    let cleaned = raw
      .replace(/```json\s*/gi, "")
      .replace(/```\s*/g, "")
      .trim();

    // First attempt: parse as-is
    let itinerary;
    try {
      itinerary = JSON.parse(cleaned);
    } catch {
      // Second attempt: try to repair truncated JSON
      console.warn("First JSON parse failed, attempting repair...");
      try {
        const repaired = repairTruncatedJSON(cleaned);
        itinerary = JSON.parse(repaired);
        console.log("JSON repair succeeded");
      } catch {
        console.error("Failed to parse AI response even after repair:", cleaned.slice(0, 500));
        return Response.json(
          { error: "The AI response was incomplete. Please try again." },
          { status: 500 }
        );
      }
    }

    // Validate basic structure
    if (!itinerary.days || !Array.isArray(itinerary.days) || itinerary.days.length === 0) {
      return Response.json(
        { error: "The itinerary was generated but has no days. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ itinerary });
  } catch (error: unknown) {
    console.error("Itinerary API error:", error);
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return Response.json({ error: message }, { status: 500 });
  }
}
