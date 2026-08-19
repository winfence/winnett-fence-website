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

    const preferredContact = String(
      formData.get("preferredContact") || ""
    ).trim();

    const address = String(formData.get("address") || "").trim();

    const streetAddress = String(
      formData.get("streetAddress") || ""
    ).trim();

    const city = String(formData.get("city") || "").trim();
    const state = String(formData.get("state") || "").trim();
    const zip = String(formData.get("zip") || "").trim();

    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const nameParts = name.split(/\s+/);

    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ");

    if (
      !name ||
      !email ||
      !phone ||
      !preferredContact ||
      !address ||
      !service
    ) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const allowedContactMethods = [
      "Text Message",
      "Phone Call",
      "Email",
    ];

    if (!allowedContactMethods.includes(preferredContact)) {
      return NextResponse.json(
        {
          error: "Invalid preferred contact method.",
        },
        {
          status: 400,
        }
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
        {
          error: "Please upload no more than 3 photos.",
        },
        {
          status: 400,
        }
      );
    }

    for (const photo of photos) {
      if (!allowedTypes.includes(photo.type)) {
        return NextResponse.json(
          {
            error: "Unsupported image type.",
          },
          {
            status: 400,
          }
        );
      }

      if (photo.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            error: "Each photo must be 5 MB or smaller.",
          },
          {
            status: 400,
          }
        );
      }
    }

    const attachments = await Promise.all(
      photos.map(async (photo) => {
        const bytes = Buffer.from(
          await photo.arrayBuffer()
        );

        return {
          filename: photo.name,
          content: bytes.toString("base64"),
        };
      })
    );

    /*
     * Email #1
     * Normal readable email sent to you
     */
    const ownerEmail = await resend.emails.send({
      from: "Winnett Fence <leads@winnettoutdoor.services>",

      to: [
        "robert@winnettoutdoor.services",
      ],

      reply_to: email,

      subject: `New Fence Quote Request - ${
        service || "General Inquiry"
      }`,

      html: `
        <h2>New Quote Request</h2>

        <p>
          <strong>Name:</strong>
          ${escapeHtml(name)}
        </p>

        <p>
          <strong>Email:</strong>
          ${escapeHtml(email)}
        </p>

        <p>
          <strong>Phone:</strong>
          ${escapeHtml(phone)}
        </p>

        <p>
          <strong>Preferred Contact:</strong>
          ${escapeHtml(preferredContact)}
        </p>

        <p>
          <strong>Address:</strong><br/>
          ${escapeHtml(streetAddress || address)}
          ${
            city
              ? `<br/>${escapeHtml(city)}, ${escapeHtml(
                  state
                )} ${escapeHtml(zip)}`
              : ""
          }
        </p>

        <p>
          <strong>Service:</strong>
          ${escapeHtml(service)}
        </p>

        <p>
          <strong>Message:</strong>
          <br/>
          ${escapeHtml(
            message || "(none)"
          ).replaceAll("\n", "<br/>")}
        </p>

        <p>
          <strong>Photos attached:</strong>
          ${photos.length}
        </p>

        <hr/>

        <p style="font-size:12px;color:#777;">
          Lead Source: Winnett Fence Website
        </p>
      `,

      attachments,
    });

    if (ownerEmail.error) {
      console.error(
        "Owner email Resend error:",
        ownerEmail.error
      );

      return NextResponse.json(
        {
          error: "Failed to send quote request.",
        },
        {
          status: 500,
        }
      );
    }

    /*
     * Email #2
     * Simple plain-text email sent only to Zapier Email Parser
     *
     * Replace the address below with the actual parser
     * address Zapier gives you.
     */
    const parserEmail = await resend.emails.send({
      from: "Winnett Fence <leads@winnettoutdoor.services>",

      to: [
        "iscwhg0u@robot.zapier.com",
      ],

      subject: "Winnett Fence Website Lead",

      text: `
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Preferred Contact: ${preferredContact}
Street Address: ${streetAddress}
City: ${city}
State: ${state}
Zip: ${zip}
Service: ${service}
Message: ${message || "(none)"}
Photos Attached: ${photos.length}
Lead Source: Winnett Fence Website
      `.trim(),
    });

    if (parserEmail.error) {
      console.error(
        "Zapier parser email error:",
        parserEmail.error
      );

      /*
       * Your customer still successfully submitted,
       * and your owner email was already delivered.
       *
       * So I would not return a 500 here.
       * We log the parser failure instead.
       */
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Quote request error:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to send",
      },
      {
        status: 500,
      }
    );
  }
}
