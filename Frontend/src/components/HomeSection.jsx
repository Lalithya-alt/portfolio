import { useState, useEffect } from "react";

export default function HomeSection() {
  const [displayedText, setDisplayedText] = useState("");
  const roles = ["Full Stack Developer", "MERN Stack Developer", "ICT Undergraduate"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* ── Typewriter effect ── */
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayedText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-[68px]"
    >
      {/* ── Decorative background blobs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #2dd4bf 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-8"
        style={{
          background: "radial-gradient(circle, #818cf8 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[calc(100vh-68px)] py-12 lg:py-0">

          {/* ───── RIGHT (image) — first on mobile ───── */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[560px] xl:h-[560px]">

              {/* Soft glow ring behind image */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(45,212,191,0.18) 0%, rgba(129,140,248,0.10) 55%, transparent 75%)",
                }}
              />

              {/* Rotating dashed orbit */}
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full border border-dashed border-teal-400/25"
                style={{ animation: "spin 18s linear infinite" }}
              />

              {/* Static outer ring */}
              <div
                aria-hidden="true"
                className="absolute inset-8 rounded-full border border-white/[0.07]"
              />

              {/* Profile photo */}
              <div className="absolute inset-5 rounded-full overflow-hidden border-2 border-teal-400/40 shadow-2xl shadow-teal-400/10">
                <img
                  src="/assets/me.jpeg"
                  alt="Lalithya Rasingolla — Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Floating badge — Available */}
              <div
                className="absolute bottom-14 -left-6 lg:-left-8 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/15 rounded-xl px-3 py-2 shadow-xl"
                aria-label="Currently available for opportunities"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400" />
                </span>
                <span className="text-xs text-white/80 font-medium whitespace-nowrap">
                  Open to Opportunities
                </span>
              </div>

            </div>
          </div>

          {/* ───── LEFT (text content) — second on mobile ───── */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

            {/* Greeting chip */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-sm font-medium">
              <span>👋</span>
              <span>Hi, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight">
              Lalithya
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #2dd4bf 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Rasingolla
              </span>
            </h1>

            {/* Typewriter role */}
            <div className="h-9 flex items-center">
              <span className="text-xl md:text-2xl font-mono font-semibold text-white/80">
                {displayedText}
                <span className="animate-pulse text-teal-400 ml-0.5">|</span>
              </span>
            </div>

               {/* Info Items */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/30 flex items-center justify-center text-teal-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider">Email</h3>
                    <p className="text-sm font-medium text-white mt-0.5">lalithyarasingolla@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/30 flex items-center justify-center text-teal-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider">Location</h3>
                    <p className="text-sm font-medium text-white mt-0.5">University of Ruhuna, Sri Lanka</p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/30 flex items-center justify-center text-teal-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider">Availability</h3>
                    <p className="text-sm font-medium text-teal-400 mt-0.5">Open to Internship & Part-Time Roles</p>
                  </div>
                </div>
              </div>


            {/* Scroll cue */}
            <div className="hidden lg:flex flex-col items-start gap-1.5 mt-6">
              <span className="text-xs text-white/25 tracking-widest uppercase">
                Scroll to explore
              </span>
              <div className="w-px h-10 bg-gradient-to-b from-teal-400/50 to-transparent ml-[3px]" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for the orbit spin */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
