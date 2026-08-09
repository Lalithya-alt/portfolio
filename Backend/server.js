import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────────────────────

// Allow requests from the Vite dev server and the production domain
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite default dev port
      "http://localhost:4173", // Vite preview port
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json({ limit: "10kb" })); // Parse JSON; limit body size

// ── Routes ──────────────────────────────────────────────────────────────────

app.use("/api/contact", contactRoutes);

// Health-check endpoint — useful for deployment probes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 404 fallback for any unmatched API route
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// ── Start ────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`✅  Portfolio backend running on http://localhost:${PORT}`);
  console.log(`   POST http://localhost:${PORT}/api/contact`);
});
