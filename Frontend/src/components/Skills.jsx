
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
    <section id="skills" className="relative min-h-screen flex items-center justify-center p-6">
      {/* Background Image */}
      <img
        src="/assets/bg.jpg"
        alt="Skills Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      />

      {/* Skills Container */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Technical Skills
          </h1>
          <p className="mt-6 text-white/60 text-sm md:text-base max-w-3xl mx-auto">
            I specialize in building modern web applications using the MERN stack
            (MongoDB, Express.js, React, Node.js) with expertise in both
            front-end and back-end development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg transition duration-500 hover:-translate-y-4 hover:border-teal-400 hover:shadow-teal-400/20"
            >
              {/* Skill Logo */}
              <div className="w-20 h-20 mb-4 transition duration-500 group-hover:scale-110 flex items-center justify-center">
                {skill.logo ? (
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full rounded-full border border-white/30 bg-white/10 text-white font-bold text-xl flex items-center justify-center">
                    {skill.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>

              {/* Skill Name */}
              <p className="text-white font-semibold text-lg text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
