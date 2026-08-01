import universityLogo from "../assets/university-logo.png";
import schoolLogo from "../assets/school-logo.png";

const educationData = [
  {
    id: 1,
    logo: universityLogo,
    title: "BICT (Hons) Degree",
    details: [
      "Current GPA: 3.59",
      "University of Ruhuna",
      "Faculty of Technology",
      "Department of ICT",
    ],
  },
  {
    id: 2,
    logo: schoolLogo,
    title: "GCE Advanced Level",
    details: [
      "Engineering Technology Stream",
      "Z-Score: 1.6152",
      "District Rank : 18th of NuwaraEliya",
      "Sri Sumanagala National College",
    ],
  },
  {
    id: 3,
    logo: schoolLogo,
    title: "GCE Ordinary Level",
    details: [
      "6A & 3B's Passes",
      "Index No: XXXXXXX",
      "Sri Sumanagala National College",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 py-16 flex flex-col items-center scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center max-w-4xl mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
          Educational Background
        </h1>
        <p className="mt-6 text-white/60 text-sm md:text-base leading-relaxed">
          I hold a Bachelor of Information and Communication Technology Honours
          Degree from the University of Ruhuna, building a strong foundation in
          software engineering, information technology, and modern computing
          concepts. My academic journey has helped me develop problem-solving
          skills and a passion for creating technology-driven solutions.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {educationData.map((education) => (
          <div
            key={education.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow-lg transition duration-500 hover:-translate-y-3 hover:border-teal-400 hover:shadow-teal-400/20"
          >
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src={education.logo}
                alt={education.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-teal-400 mb-4">
              {education.title}
            </h2>

            {/* Details */}
            <div className="text-white/70 space-y-2 text-sm">
              {education.details.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
