import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_FILES = 3;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const address = String(formData.get("address") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const photos = formData
      .getAll("photos")
      .filter(
        (item): item is File =>
          item instanceof File && item.size > 0
      );

    if (photos.length > MAX_FILES) {
      return NextResponse.json(
        { error: "Please upload no more than 3 photos." },
        { status: 400 }
      );
    }

    for (const photo of photos) {
      if (!allowedTypes.includes(photo.type)) {
        return NextResponse.json(
          { error: "Unsupported image type." },
          { status: 400 }
        );
      }

      if (photo.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Each photo must be 5 MB or smaller." },
          { status: 400 }
        );
      }
    }

    const attachments = await Promise.all(
      photos.map(async (photo) => ({
        filename: photo.name,
        content: Buffer.from(await photo.arrayBuffer()),
      }))
    );

    const { error } = await resend.emails.send({
      from: "Winnett Fence <leads@winnettoutdoor.services>",
      to: ["robert@winnettoutdoor.services"],
      replyTo: email,
      subject: `New Fence Quote Request - ${service || "General Inquiry"}`,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Address:</strong> ${escapeHtml(address || "(none)")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "(none)")}</p>

        <p>
          <strong>Message:</strong><br/>
          ${escapeHtml(message || "(none)").replaceAll("\n", "<br/>")}
        </p>

        <p>
          <strong>Photos attached:</strong> ${photos.length}
        </p>
      `,
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send quote request." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote request error:", error);

    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
