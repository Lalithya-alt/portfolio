import React, { useState, useRef } from "react";

const activitiesData = [
  {
    id: 1,
    image: "/assets/Activities/Hackothon.jpeg",
    title: "Participate Hacktrail 2.0 - 2025",
    description:
      "Participated in HackTrail 2.0, an overnight hackathon organized by the ICT Student Circle, strengthening my problem-solving, teamwork, and technical skills.",
  },
  {
    id: 2,
    image: "/assets/Activities/mentor.png",
    title: "Student mentor in ICT Student Circle",
    description:
      "Participated as a mentor in the ICTSC mentorship program, supporting and guiding the 8th batch of the Faculty of Technology, University of Ruhuna.",
  },
];

function ActivityCard({ activity }) {
  return (
    <div className="h-full bg-white border border-gray-200 rounded-2xl p-3 shadow-lg flex flex-col transition duration-500 hover:-translate-y-2 hover:border-teal-400 hover:shadow-teal-400/20">
      {/* Image with inner padding from border */}
      <div className="w-full h-52 overflow-hidden rounded-xl">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="p-4 flex flex-col flex-1">
        <h2
          className="text-lg font-bold mb-3 text-center"
          style={{ color: "#0a1a4e" }}
        >
          {activity.title}
        </h2>
        <p
          className="text-sm leading-relaxed text-justify"
          style={{ color: "#1e3a8a" }}
        >
          {activity.description}
        </p>
      </div>
    </div>
  );
}

/* ── Mobile/Tablet Paginated Carousel ── */
function ActivitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = activitiesData.length;

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
        <ActivityCard activity={activitiesData[currentIndex]} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Prev */}
        <button
          onClick={() => goTo(currentIndex - 1)}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
          aria-label="Previous activity"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {activitiesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-5 h-2.5 bg-teal-400"
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to activity ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => goTo(currentIndex + 1)}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
          aria-label="Next activity"
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

/* ── Section ── */
export default function Extracurricular() {
  return (
    <section
      id="extracurricular"
      className="px-6 py-16 flex flex-col items-center scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center max-w-4xl mb-14">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          &lt;Extra Curricular/&gt;
        </h1>
        <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed">
          Beyond academics and coding, I actively engage in leadership, creative
          work, and community service — experiences that shape both my character
          and collaborative skills.
        </p>
      </div>

      {/* Mobile & Tablet: Paginated Carousel (hidden on lg+) */}
      <div className="lg:hidden w-full flex justify-center">
        <ActivitiesCarousel />
      </div>

      {/* Desktop: Original flex-wrap layout (hidden below lg) */}
      <div className="hidden lg:flex flex-wrap justify-center items-stretch gap-8 w-full max-w-6xl">
        {activitiesData.map((activity) => (
          <div key={activity.id} className="flex w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm">
            <ActivityCard activity={activity} />
          </div>
        ))}
      </div>
    </section>
  );
}
