
const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "C", "Java", "MySQL"],
  },
  {
    title: "Development Tools",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "IntelliJ IDEA",
      "VS Code",
      "Spring Boot",
      "Java Swing",
      "Packet Tracer",
      "Canva",
    ],
  },
  {
    title: "Professional Skills",
    icon: "🌟",
    skills: [
      "Problem-Solving & Analytical Thinking",
      "Effective Communication & Teamwork",
      "Leadership",
      "Time Management",
    ],
  },
];

function SkillCard({ title, icon, skills }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-teal-400/40">
      <div className="mb-1.5 flex items-center gap-2">
        <span className="text-base" aria-hidden="true">
          {icon}
        </span>
        <h2 className="text-s font-semibold text-white">{title}</h2>
        <br/>
      </div>

      <p className="text-[15px] leading-7 text-white/80">{skills.join(" ,  ")};</p>
    </div>
  );
}

const htmlLogo = "/assets/html.png";
const cssLogo = "/assets/css.png";
const jsLogo = "/assets/javascript.png";
const reactLogo = "/assets/react.png";
const nodeLogo = "/assets/node.png";
const mongoLogo = "/assets/mongo.png";
const gitLogo = null;
const githubLogo = null;
const tailwindLogo = null;

const Skills = () => {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
  ];

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center px-3 py-6 md:px-4">
      {/* Background Image */}
      <img
        src="/assets/bg.jpg"
        alt="Skills Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      />

      {/* Skills Container */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide">
            Technical Skills
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-6 items-start">
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center"
              >
                {/* Skill Logo */}
                <div className="w-12 h-12 mb-1.5 flex items-center justify-center">
                  {skill.logo ? (
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full border border-white/30 bg-white/10 text-white font-bold text-xs flex items-center justify-center">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Skill Name */}
                <p className="text-white font-semibold text-xs text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {/* Description */}
            <div className="flex items-center">
              <p className="text-white/70 text-sm md:text-base leading-relaxed text-left">
                I specialize in building modern web applications using the MERN stack
                (MongoDB, Express.js, React, Node.js) with expertise in both
                front-end and back-end development.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
              {skillCategories.map((category) => (
                <SkillCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
