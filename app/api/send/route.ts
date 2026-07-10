import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, itinerary } = await request.json();

    if (!email || !itinerary) {
      return Response.json(
        { error: "Email and itinerary are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Explore Jogja <onboarding@resend.dev>",
      to: [email],
      subject: `Your Jogja Itinerary: ${itinerary.title}`,
      react: EmailTemplate({ itinerary }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return Response.json({ error: message }, { status: 500 });
  }
}
