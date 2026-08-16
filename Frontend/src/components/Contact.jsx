import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

/* ─────────────────────────── helpers ─────────────────────────── */

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/your-profile",
    Icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lalithya_razi/",
    Icon: FaInstagram,
  },
];

const CONTACT_ITEMS = [
  {
    Icon: FaMapMarkerAlt,
    title: "Location",
    detail: "Matara, Sri Lanka",
  },
  {
    Icon: FaEnvelope,
    title: "Email Address",
    detail: "lalithyarasingolla@gmail.com",
  },
];

/* ─────────────────────────── sub-components ──────────────────── */

function ContactInfoItem({ Icon, title, detail }) {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md transition duration-300 hover:-translate-y-1 hover:border-teal-400/50">
      {/* Icon bubble */}
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-teal-400/10 group-hover:border-teal-400/50 transition duration-300">
        <Icon size={19} className="text-teal-400" />
      </div>

      {/* Text */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-0.5">
          {title}
        </p>
        <p className="text-sm text-white/70 leading-relaxed break-all">
          {detail}
        </p>
      </div>
    </div>
  );
}

function SocialButton({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-teal-400 hover:border-teal-400 hover:scale-110 transition duration-300"
    >
      <Icon size={16} />
    </a>
  );
}

/* ─────────────────────────── main component ──────────────────── */

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center px-6 py-16 md:px-10 scroll-mt-20"
    >
      {/* Background image — matches Skills/HomeSection pattern */}
      <img
        src="/assets/bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            &lt;Contact Me/&gt;
          </h1>
          <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Have a project idea, opportunity, or inquiry? Feel free to reach
            out — I'd love to hear from you!
          </p>
        </div>

        {/* Contact Info + Hire Me */}
        <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">

          {/* Contact Info Items */}
          <div className="flex flex-col gap-4 w-full">
            {CONTACT_ITEMS.map(({ Icon, title, detail }) => (
              <ContactInfoItem
                key={title}
                Icon={Icon}
                title={title}
                detail={detail}
              />
            ))}
          </div>

          {/* Hire Me Card */}
          <div className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-5 shadow-md transition duration-300 hover:-translate-y-1 hover:border-teal-400/50">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
              <span aria-hidden="true">🚀</span>
              Hire Me For Your Project
            </h3>

            <p className="text-sm text-white/70 leading-relaxed mb-5">
              I’m available for software development projects and collaborations. 
              Let’s discuss how I can contribute to your project.
            </p>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-5" />

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <SocialButton key={label} href={href} label={label} Icon={Icon} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}