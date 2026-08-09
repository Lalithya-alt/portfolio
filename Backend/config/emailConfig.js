import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

/**
 * Nodemailer transporter configured from environment variables.
 *
 * Uses Gmail SMTP on port 587 with STARTTLS (opportunistic TLS).
 * Credentials are loaded exclusively from .env — never hard-coded.
 *
 * Required .env variables:
 *   EMAIL_USER  — Gmail address used as the sender / SMTP login
 *   EMAIL_PASS  — Gmail App Password (not your regular password)
 */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // STARTTLS — upgrades to TLS automatically
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default transporter;
