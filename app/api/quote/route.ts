import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
  from: "Winnett Fence <onboarding@resend.dev>",
  to: ["robert@winnettoutdoor.services"],
  subject: "New Fence Quote Request",
  html: `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong><br/>${message || "(none)"}</p>
  `,
});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
