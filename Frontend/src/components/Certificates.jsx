import React, { useState, useRef } from "react";

const certificatesData = [
  {
    id: 1,
    title: "Web Design for Beginners",
    issuer: "Centre for Open & Distance Learning (CODL), University of Moratuwa",
    image: "/assets/Certificates/Web_design_for_beginners.png",
  },
  {
    id: 2,
    title: "Python for Beginners",
    issuer: "Centre for Open & Distance Learning (CODL), University of Moratuwa",
    image: "/assets/Certificates/Python_fro_beginners.png",
  },
  {
    id: 3,
    title: "AI/ML Engineer - Stage 01",
    issuer: "Centre for Open and Distance Education, Faculty of computing, SLIIT",
    image: "/assets/Certificates/AI_ML_Course.png",
  },
  {
    id: 4,
    title: "HackTrail 2.0 - overnight hackathon",
    issuer: " ICT Students' Circle - University of Ruhuna.",
    image: "/assets/Certificates/Hackothon_2.0.jpeg",
  },
  {
    id: 5,
    title: "Full Stack Web Development(MERN)",
    issuer: "SKYREK(PVT) Ltd",
    image: "/assets/Certificates/MERN.png",
  },
];

function CertCard({ cert, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white p-3 rounded-2xl border border-white/20 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-teal-400 hover:shadow-teal-400/30 overflow-hidden"
    >
      <div className="w-full h-52 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="pt-3 text-center">
        <h3 className="text-sm font-bold text-gray-900 line-clamp-1">
          {cert.title}
        </h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-1">
          {cert.issuer}
        </p>
      </div>
    </div>
  );
}

/* ── Mobile/Tablet Paginated Carousel ── */
function CertificatesCarousel({ onSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = certificatesData.length;

  const goTo = (index) => {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Card Wrapper */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="select-none"
      >
        <CertCard
          cert={certificatesData[currentIndex]}
          onClick={() => onSelect(certificatesData[currentIndex])}
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Prev */}
        <button
          onClick={() => goTo(currentIndex - 1)}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
          aria-label="Previous certificate"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {certificatesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-5 h-2.5 bg-teal-400"
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to certificate ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => goTo(currentIndex + 1)}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
          aria-label="Next certificate"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Counter */}
      <p className="text-center text-white/50 text-xs mt-3">
        {currentIndex + 1} / {total}
      </p>
    </div>
  );
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const topCertificates = certificatesData.slice(0, 3);
  const bottomCertificates = certificatesData.slice(3, 5);

  return (
    <section
      id="certificates"
      className="px-6 py-16 flex flex-col items-center scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center max-w-4xl mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          &lt;Certifications &amp; Courses/&gt;
        </h1>
        <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed">
          These are the certifications and courses I have completed to strengthen my knowledge and skills in software development, IT, and related technologies. They reflect my continuous learning and practical growth throughout my academic and professional journey.
        </p>
      </div>

      {/* Mobile & Tablet: Paginated Carousel (hidden on lg+) */}
      <div className="lg:hidden w-full flex justify-center">
        <CertificatesCarousel onSelect={setSelectedCert} />
      </div>

      {/* Desktop: Original grid layout (hidden below lg) */}
      <div className="hidden lg:flex w-full max-w-6xl flex-col items-center gap-8">
        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-3 gap-8 w-full">
          {topCertificates.map((cert) => (
            <CertCard
              key={cert.id}
              cert={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>

        {/* Bottom Row - 2 Cards Centered */}
        <div className="grid grid-cols-2 gap-8 w-full max-w-[67%]">
          {bottomCertificates.map((cert) => (
            <CertCard
              key={cert.id}
              cert={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>
      </div>

      {/* Modal Preview for Full Certificate */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white p-5 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col items-center overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold bg-gray-100 hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              ✕
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[70vh] object-contain rounded-xl border border-gray-200"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-900">
                {selectedCert.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {selectedCert.issuer}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
