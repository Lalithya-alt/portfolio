import { Router } from "express";
import rateLimit from "express-rate-limit";
import { sendContactEmail } from "../controllers/contactController.js";

const router = Router();

/**
 * Rate limiter for the contact endpoint.
 * Allows a maximum of 5 submissions per IP address per 15-minute window.
 * Prevents spam and basic abuse without requiring a CAPTCHA.
 */
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,   // Return rate-limit info in RateLimit-* headers
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Too many messages sent from this IP. Please wait 15 minutes before trying again.",
  },
});

// POST /api/contact
router.post("/", contactLimiter, sendContactEmail);

export default router;
