import React from "react";

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
      "Participated as a mentor in the ICTSC mentorship program, supporting and guiding the 8th batch of the Faculty of Technology, University of Ruhuna.",  },

];


function ActivityCard({ activity }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-lg flex flex-col transition duration-500 hover:-translate-y-2 hover:border-teal-400 hover:shadow-teal-400/20">
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

      {/* Cards — centered, fixed width per card so 2 cards sit in the middle */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {activitiesData.map((activity) => (
          <div key={activity.id} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm">
            <ActivityCard activity={activity} />
          </div>
        ))}
      </div>
    </section>
  );
}
