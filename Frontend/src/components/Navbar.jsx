import { useState, useEffect } from "react";

const navLinks = [
  { id: "about",        label: "About" },
  { id: "education",    label: "Education" },
  { id: "skills",       label: "Skills" },
  { id: "projects",     label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact",      label: "Contact" },
];

export default function Navbar() {
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled,     setScrolled]     = useState(false);

  /* ── Glassmorphism trigger on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: "-70px 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ── Smooth scroll + close mobile menu ── */
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/50 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)] shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="relative max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-center"
      >

        {/* ── Desktop Links ── */}
        <ul
          className="hidden md:flex items-center gap-0.5"
          role="list"
        >
          {navLinks.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  aria-label={`Navigate to ${label}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-[14px] py-2 text-[15px] font-medium rounded-lg transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white/90"
                  }`}
                >
                  {/* active background pill */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/[0.12] transition-all duration-300"
                    />
                  )}

                  <span className="relative z-10">{label}</span>

                  {/* active underline dot */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 -translate-x-1/2 -bottom-[3px] w-1 h-1 rounded-full bg-violet-400"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* ── Hamburger (mobile) ── */}
        <button
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden absolute right-5 w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <span
            className={`block w-[18px] h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-[18px] h-[1.5px] bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-[18px] h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile Slide-down Menu ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden overflow-hidden transition-all duration-350 ease-in-out ${
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className="px-5 pt-2 pb-6 flex flex-col gap-1 bg-black/75 backdrop-blur-2xl border-t border-white/[0.07]"
          role="list"
        >
          {navLinks.map(({ id, label }, i) => {
            const isActive = activeSection === id;
            return (
              <li
                key={id}
                style={{ transitionDelay: menuOpen ? `${i * 35}ms` : "0ms" }}
                className={`transition-all duration-300 ${
                  menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
              >
                <button
                  onClick={() => handleNavClick(id)}
                  aria-label={`Navigate to ${label}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                    isActive
                      ? "bg-white/10 text-white border border-white/[0.12]"
                      : "text-white/55 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {/* Arrow indicator */}
                  <span
                    aria-hidden="true"
                    className={`w-1 h-4 rounded-full flex-shrink-0 transition-all duration-200 ${
                      isActive ? "bg-violet-400" : "bg-transparent"
                    }`}
                  />
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
