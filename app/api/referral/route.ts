import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const body = await req.json();

    const referrerName = String(body.referrerName || "").trim();
    const referrerContact = String(body.referrerContact || "").trim();
    const customerName = String(body.customerName || "").trim();
    const customerContact = String(body.customerContact || "").trim();
    const notes = String(body.notes || "").trim();

    // Required fields
    if (
      !referrerName ||
      !referrerContact ||
      !customerName ||
      !customerContact
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const safeReferrerName = escapeHtml(referrerName);
    const safeReferrerContact = escapeHtml(referrerContact);
    const safeCustomerName = escapeHtml(customerName);
    const safeCustomerContact = escapeHtml(customerContact);
    const safeNotes = notes
      ? escapeHtml(notes).replaceAll("\n", "<br />")
      : "None provided";

    const { error } = await resend.emails.send({
      from: "Winnett Fence Referral <referral@winnettoutdoor.services>",
      to: robert@winnettoutdoor.services,
      subject: `New Referral: ${customerName}`,
      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #111827;
          "
        >
          <div
            style="
              background: #020617;
              color: #ffffff;
              padding: 28px;
              border-radius: 12px 12px 0 0;
            "
          >
            <div
              style="
                color: #fbbf24;
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 8px;
              "
            >
              Winnett Fence Referral Program
            </div>

            <h1
              style="
                margin: 0;
                font-size: 26px;
              "
            >
              New Customer Referral
            </h1>
          </div>

          <div
            style="
              border: 1px solid #e5e7eb;
              border-top: 0;
              padding: 28px;
              border-radius: 0 0 12px 12px;
            "
          >
            <h2
              style="
                margin-top: 0;
                font-size: 18px;
                color: #111827;
              "
            >
              Referred Customer
            </h2>

            <table
              style="
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 28px;
              "
            >
              <tr>
                <td
                  style="
                    padding: 10px 0;
                    width: 160px;
                    color: #6b7280;
                    vertical-align: top;
                  "
                >
                  Name
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${safeCustomerName}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #6b7280;
                    vertical-align: top;
                  "
                >
                  Email / Phone
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${safeCustomerContact}
                </td>
              </tr>
            </table>

            <h2
              style="
                font-size: 18px;
                color: #111827;
              "
            >
              Referred By
            </h2>

            <table
              style="
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 28px;
              "
            >
              <tr>
                <td
                  style="
                    padding: 10px 0;
                    width: 160px;
                    color: #6b7280;
                    vertical-align: top;
                  "
                >
                  Name
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${safeReferrerName}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #6b7280;
                    vertical-align: top;
                  "
                >
                  Email / Phone
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${safeReferrerContact}
                </td>
              </tr>
            </table>

            <h2
              style="
                font-size: 18px;
                color: #111827;
              "
            >
              Notes
            </h2>

            <div
              style="
                background: #f8fafc;
                padding: 16px;
                border-radius: 8px;
                line-height: 1.6;
              "
            >
              ${safeNotes}
            </div>

            <div
              style="
                margin-top: 28px;
                padding: 16px;
                background: #fffbeb;
                border: 1px solid #fde68a;
                border-radius: 8px;
              "
            >
              <strong>Referral Reward:</strong>
              $50 gift card after the referred customer's qualifying project
              is completed and paid in full.
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend referral error:", error);

      return NextResponse.json(
        { error: "Unable to send referral." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Referral submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Referral submission error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
