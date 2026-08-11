import transporter from "../config/emailConfig.js";
import dotenv from "dotenv";

dotenv.config();

/**
 * Validates that a string is a well-formed email address.
 * Simple RFC-compliant check — no external libraries required.
 */
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());

/**
 * POST /api/contact
 *
 * Accepts: { name, email, subject, message }
 * Validates all required fields and the email format.
 * Sends a formatted HTML email to RECEIVER_EMAIL via Nodemailer.
 * Sets the visitor's email as the Reply-To address.
 *
 * Responses:
 *   200  — Email sent successfully
 *   400  — Validation error (bad/missing input)
 *   500  — SMTP / server error (no sensitive details exposed)
 */
export const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // ── 1. Validate required fields ──────────────────────────────────────────
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required fields.",
    });
  }

  if (name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name must be at least 2 characters long.",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: "Message must be at least 10 characters long.",
    });
  }

  // ── 2. Sanitise values (strip leading/trailing whitespace) ───────────────
  const safeName    = name.trim();
  const safeEmail   = email.trim().toLowerCase();
  const safeSubject = subject ? subject.trim() : "Portfolio Contact Form";
  const safeMessage = message.trim();

  // ── 3. Build the email ───────────────────────────────────────────────────
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: safeEmail,                    // Reply directly to the visitor
    subject: `[Portfolio] ${safeSubject}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;
                  background:#0f172a;color:#e2e8f0;border-radius:12px;
                  overflow:hidden;border:1px solid #1e293b;">

        <!-- Header -->
        <div style="background:linear-gradient(135deg,#0d9488,#0891b2);
                    padding:28px 32px;">
          <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">
            📬 New Portfolio Message
          </h1>
          <p style="margin:6px 0 0;font-size:13px;color:#ccfbf1;opacity:0.9;">
            Submitted via your portfolio contact form
          </p>
        </div>

        <!-- Body -->
        <div style="padding:32px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;
                         width:110px;color:#94a3b8;font-size:13px;
                         font-weight:600;text-transform:uppercase;
                         letter-spacing:0.05em;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;
                         color:#f1f5f9;font-size:14px;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;
                         color:#94a3b8;font-size:13px;font-weight:600;
                         text-transform:uppercase;letter-spacing:0.05em;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;
                         color:#f1f5f9;font-size:14px;">
                <a href="mailto:${safeEmail}"
                   style="color:#2dd4bf;text-decoration:none;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;
                         color:#94a3b8;font-size:13px;font-weight:600;
                         text-transform:uppercase;letter-spacing:0.05em;">Subject</td>
              <td style="padding:10px 0;border-bottom:1px solid #1e293b;
                         color:#f1f5f9;font-size:14px;">${safeSubject}</td>
            </tr>
          </table>

          <!-- Message -->
          <div style="margin-top:24px;">
            <p style="margin:0 0 10px;color:#94a3b8;font-size:13px;
                      font-weight:600;text-transform:uppercase;
                      letter-spacing:0.05em;">Message</p>
            <div style="background:#1e293b;border-left:3px solid #0d9488;
                        border-radius:6px;padding:16px 20px;
                        color:#e2e8f0;font-size:14px;line-height:1.7;
                        white-space:pre-wrap;">${safeMessage}</div>
          </div>

          <!-- Reply note -->
          <p style="margin:24px 0 0;font-size:12px;color:#64748b;">
            💡 Hit <strong>Reply</strong> in your email client to respond directly
            to ${safeName} at ${safeEmail}.
          </p>
        </div>

        <!-- Footer -->
        <div style="padding:16px 32px;background:#0a0f1e;
                    border-top:1px solid #1e293b;text-align:center;">
          <p style="margin:0;font-size:11px;color:#475569;">
            Sent from your portfolio website · lalithyarasingolla.dev
          </p>
        </div>
      </div>
    `,
  };

  // ── 4. Send and respond ──────────────────────────────────────────────────
  try {
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    // Log the full error on the server but never expose it to the client
    console.error("[Contact] Nodemailer error:", error.message);

    return res.status(500).json({
      success: false,
      message:
        "Failed to send your message due to a server error. Please try again later.",
    });
  }
};
