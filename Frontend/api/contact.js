import nodemailer from "nodemailer";

/**
 * Vercel Serverless Function — POST /api/contact
 *
 * Validates the incoming contact-form payload, then sends a formatted
 * HTML email via Gmail SMTP using Nodemailer.
 *
 * Required Vercel Environment Variables:
 *   EMAIL_USER      — Gmail address used as sender / SMTP login
 *   EMAIL_PASS      — Gmail App Password
 *   RECEIVER_EMAIL  — Destination address for contact messages
 */

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());

export default async function handler(req, res) {
  // ── Only accept POST ────────────────────────────────────────────────────
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed." });
  }

  const { name, email, subject, message } = req.body ?? {};

  // ── 1. Validate required fields ─────────────────────────────────────────
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required fields.",
    });
  }

  if (String(name).trim().length < 2) {
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

  if (String(message).trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: "Message must be at least 10 characters long.",
    });
  }

  // ── 2. Sanitise ─────────────────────────────────────────────────────────
  const safeName    = String(name).trim();
  const safeEmail   = String(email).trim().toLowerCase();
  const safeSubject = subject ? String(subject).trim() : "Portfolio Contact Form";
  const safeMessage = String(message).trim();

  // ── 3. Build the transporter ─────────────────────────────────────────────
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // ── 4. Compose the email ─────────────────────────────────────────────────
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: safeEmail,
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

  // ── 5. Send ──────────────────────────────────────────────────────────────
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("[Contact] Nodemailer error:", error.message);
    return res.status(500).json({
      success: false,
      message:
        "Failed to send your message due to a server error. Please try again later.",
    });
  }
}
