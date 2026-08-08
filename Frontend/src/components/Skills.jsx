
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
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 shadow-md backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-teal-400/50">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">
          {icon}
        </span>
        <h2 className="text-base font-semibold text-white">{title}</h2>
      </div>

      <p className="text-sm leading-7 text-white/80">{skills.join("  •  ")}</p>
    </div>
  );
}

const htmlLogo = "/assets/Tools/html.png";
const cssLogo = "/assets/Tools/css.png";
const jsLogo = "/assets/Tools/javascript.png";
const reactLogo = "/assets/Tools/react.png";
const nodeLogo = "/assets/Tools/node.png";
const mongoLogo = "/assets/Tools/mongo.png";
const mysqlLogo = "/assets/Tools/mysql.png";
const githubLogo = "/assets/Tools/github.png";
const tailwindLogo = "/assets/Tools/tailwind.png";
const springbootLogo = "/assets/Tools/springboot.png";
const javaLogo = "/assets/Tools/java.png";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "MongoDB", logo: mongoLogo },
     { name: "MySQL", logo: mysqlLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "Spring Boot", logo: springbootLogo },
    { name: "Java", logo: javaLogo },
   
  
  ];

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center px-6 py-16 md:px-10">
      {/* Background Image */}
      <img
        src="/assets/bg.jpg"
        alt="Skills Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      />

      {/* Skills Container */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            &lt;Technical Skills/&gt;
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-16 items-start">
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center"
              >
                {/* Skill Logo */}
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  {skill.logo ? (
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full border border-white/30 bg-white/10 text-white font-bold text-sm flex items-center justify-center">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Skill Name */}
                <p className="text-white font-semibold text-sm text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {/* Description */}
            <div className="flex items-center">
              <p className="text-white/70 text-sm md:text-base leading-relaxed text-left">
              A selection of the technologies, programming languages, frameworks, databases, and development tools
              I have worked with through academic projects, coursework, and practical software development experience.

              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
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
