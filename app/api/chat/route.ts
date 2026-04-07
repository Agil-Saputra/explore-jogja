import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.SUMOPOD_API_KEY,
  baseURL: "https://ai.sumopod.com/v1",
});

const SYSTEM_PROMPT = `You are a friendly and knowledgeable travel assistant for Yogyakarta, Indonesia — a city rich in Javanese culture, heritage, and history. Your name is "Jogja Heritage Guide".

You help visitors with:
- Recommendations for temples (Prambanan, Borobudur), palaces (Kraton), and historical sites
- Local food and culinary experiences (gudeg, bakpia, wedang ronde)
- Cultural events, festivals, and traditional performances (Ramayana ballet, batik workshops)
- Practical travel tips (transportation, best times to visit, safety)
- Hidden gems and off-the-beaten-path destinations
- Accommodation suggestions for various budgets
- District information (Sleman, Bantul, Gunung Kidul, Kulon Progo, Kota Yogyakarta)

Always be warm, enthusiastic, and culturally respectful. Use occasional Javanese or Indonesian phrases where appropriate. Keep responses concise but informative. If you don't know something specific, suggest the visitor check with local tourism offices.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again.";

    return Response.json({ reply });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return Response.json(
      { error: message },
      { status: 500 }
    );
  }
}
