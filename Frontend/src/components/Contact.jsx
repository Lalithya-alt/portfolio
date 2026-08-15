import React, { useState } from "react";
import { sendMessage, pingBackend } from "../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    warming: false,   // true while waiting for Render cold-start wake-up
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, warming: false, success: false, error: "" });

    try {
      // ── Step 1: Wake up the Render backend if it's sleeping ──────────────
      setStatus((s) => ({ ...s, warming: true }));
      await pingBackend(); // fire-and-forget warm-up ping (ignores failure)
      setStatus((s) => ({ ...s, warming: false }));

      // ── Step 2: Send the actual contact email ─────────────────────────────
      await sendMessage(formData);

      setStatus({ submitting: false, warming: false, success: true, error: "" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("[Contact] Submit error:", err);

      let errorMsg = "Something went wrong. Please try again later.";

      if (err.code === "ECONNABORTED" || err.message?.includes("timeout")) {
        errorMsg =
          "The server is taking too long to respond. Please wait a moment and try again.";
      } else if (err.response?.data?.message) {
        errorMsg = err.response.data.message;
      } else if (!err.response) {
        errorMsg =
          "Unable to reach the server. Please check your connection and try again.";
      }

      setStatus({ submitting: false, warming: false, success: false, error: errorMsg });
    }
  };

  const isSubmitting = status.submitting;
  const buttonLabel = status.warming
    ? "Connecting to server…"
    : status.submitting
    ? "Sending Message…"
    : "Send Message";

  return (
    <section
      id="contact"
      className="px-6 py-16 flex flex-col items-center scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center max-w-4xl mb-14">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          &lt;Contact Me/&gt;
        </h1>
        <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed">
          I am currently open to internship and part-time software engineering opportunities.
          Feel free to reach out for collaborations or questions!

          Have a project idea, opportunity, or inquiry? Feel free to contact me directly using the
          information below or by filling out the form.
        </p>
      </div>

      {/* Contact Form Container (Centered) */}
      <div className="flex justify-center w-full max-w-6xl">

        {/* Contact Form */}
        <div className="w-full lg:w-7/12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
            <h2 className="text-xl font-bold text-teal-400 mb-6">
              Send Me A Message
            </h2>

            {/* ── Success Banner ── */}
            {status.success && (
              <div className="mb-6 p-4 rounded-xl bg-teal-400/20 border border-teal-400 text-teal-300 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* ── Error Banner ── */}
            {status.error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/60 text-red-300 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Lalithya Rasingolla"
                    className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@mail.com"
                    className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Opportunity / Collaboration"
                  className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Hello Lalithya, I'd like to discuss..."
                  className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-400 hover:bg-teal-300 text-black font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg shadow-teal-400/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>{buttonLabel}</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2.2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
