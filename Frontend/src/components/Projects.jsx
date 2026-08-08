import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Hotel & Restaurant Management System",
    description:
      "A comprehensive MERN stack web application featuring room booking, online food ordering, reception hall packages, and liquor inventory management with analytical admin dashboards.",
    image: "/assets/bg.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Lalithya-alt",
    linkedin: "https://www.linkedin.com/in/lalithya-rasingolla-039b62292/",
  },
  {
    id: 2,
    title: "Software Engineer Portfolio",
    description:
      "A modern, responsive personal portfolio website showcasing projects, skills, education, and contact features with dark glassmorphic UI design and smooth navigation.",
    image: "/assets/bg.jpg",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Lalithya-alt",
    linkedin: "https://www.linkedin.com/in/lalithya-rasingolla-039b62292/",
  },
  {
    id: 3,
    title: "E-Commerce Web Platform",
    description:
      "Full-stack online shopping platform with product categorization, interactive cart system, customer order management, and secure backend integration.",
    image: "/assets/bg.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Lalithya-alt",
    linkedin: "https://www.linkedin.com/in/lalithya-rasingolla-039b62292/",
  },
  {
    id: 4,
    title: "Task & Project Management Tool",
    description:
      "Collaborative project tracking dashboard with interactive task assignment, status updates, deadlines, and responsive UI performance.",
    image: "/assets/bg.jpg",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/Lalithya-alt",
    linkedin: "https://www.linkedin.com/in/lalithya-rasingolla-039b62292/",
  },
  {
    id: 5,
    title: "Student Management Portal",
    description:
      "Academic web portal for managing student registrations, course enrollments, grade records, and department updates with secure REST APIs.",
    image: "/assets/bg.jpg",
    technologies: ["React", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Lalithya-alt",
    linkedin: "https://www.linkedin.com/in/lalithya-rasingolla-039b62292/",
  },
  {
    id: 6,
    title: "Smart Inventory & Sales Dashboard",
    description:
      "Business management web app providing real-time stock monitoring, sales analytics visualization, and order report generation.",
    image: "/assets/bg.jpg",
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/Lalithya-alt",
    linkedin: "https://www.linkedin.com/in/lalithya-rasingolla-039b62292/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 flex flex-col items-center scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center max-w-4xl mb-16">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          &lt;Projects/&gt;
        </h1>
        <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed">
          Here are some of the key software engineering projects I have built,
          demonstrating full-stack web development, REST API design, and modern UI architectures.
        </p>
      </div>

      {/* Projects Grid: 2 Rows x 3 Columns on Large Screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-between shadow-lg transition duration-500 hover:-translate-y-2 hover:border-teal-400 hover:shadow-teal-400/20"
          >
            <div>
              {/* Image */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-5 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-teal-400 mb-3">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-md bg-teal-400/10 border border-teal-400/30 text-teal-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: GitHub & LinkedIn */}
            <div className="flex gap-3 pt-4 border-t border-white/10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-white/30 bg-white/5 hover:bg-teal-400 hover:border-teal-400 hover:text-black text-white text-xs font-semibold transition duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-teal-400/40 bg-teal-400/20 hover:bg-teal-400 hover:text-black text-white text-xs font-semibold transition duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}