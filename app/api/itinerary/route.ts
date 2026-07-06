import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.SUMOPOD_API_KEY,
  baseURL: "https://ai.sumopod.com/v1",
});

const SYSTEM_PROMPT = `
You are a Yogyakarta travel itinerary planner AI. You MUST respond ONLY with valid JSON — no markdown, no code fences, no explanation text before or after.

Your response must be a JSON object with this exact structure:
{
  "title": "short creative title",
  "summary": "one sentence overview",
  "days": [
    {
      "dayNumber": 1,
      "date": "the date",
      "theme": "short theme",
      "transportation": {
        "mode": "car | motorbike | grab/gojek | walking | public transport",
        "note": "short recommendation, e.g. 'Rent a motorbike, area is spread out'"
      },
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
          "tips": "short tip",
          "transportToNext": "short transport suggestion to reach the next destination, e.g. 'Grab car, ~20 min'"
        }
      ]
    }
  ]
}

RULES:
1. Use REAL GPS coordinates for REAL places in Yogyakarta (DIY province).
2. Plan max 5 destinations per day to keep the response compact.
3. Keep descriptions to ONE short sentence max.
4. Keep tips to a few words.
5. category must be one of: temple, palace, nature, food, art, shopping, spiritual, nightlife, photography, museum, park, beach, village.
6. Order destinations geographically to minimize travel.
7. TRANSPORTATION:
   - For each day, include a "transportation" object recommending the best mode of transport for that day's route (consider distance between destinations, terrain, and traffic in Yogyakarta).
   - For each destination (except the last one of the day), include "transportToNext" with a brief, practical suggestion (mode + estimated time) for getting to the next stop.
   - Base recommendations on realistic Yogyakarta conditions (e.g. motorbike/Grab for city areas, car for longer inter-district trips like to Borobudur or Gunungkidul, walking for compact areas like Malioboro or Kraton complex).
8. NO EMOJI: Do not use emojis or emoji-like symbols anywhere in the output — not in titles, themes, descriptions, tips, or transportation notes. Text only.
9. CATEGORY-TO-DAY MAPPING: If the user selects more categories than the number of days in the trip, only use as many categories as there are days, taking them in the order the user listed them (first N categories, where N = number of days). Do not attempt to fit all selected categories if they exceed the day count.
   - Example: if the user picks 4 categories but the trip is 2 days, only use the first 2 categories from their list — one (or more) as the dominant theme for each day.
   - If the number of categories is less than or equal to the number of days, distribute all selected categories across the days as evenly and sensibly as possible.

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

Respond with ONLY the JSON object. Keep descriptions very short (one sentence). Plan max 5 destinations per day.`;

    const completion = await openai.chat.completions.create({
      model: "gemini/gemini-3.5-flash",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 8097,
      temperature: 0.7,
    });

    const raw = completion.choices[0]?.message?.content || "{}";

    // Strip potential markdown code fences
    const cleaned = raw
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
