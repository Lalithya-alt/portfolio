import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Digital Mart | E-Commerce Web Application",
    description:
      "A MERN stack e-commerce application for browsing and purchasing electronic products, with a React frontend, Node.js backend, and MongoDB database.",
    image: "/assets/Projects/digital_Mart.png",
    technologies: ["MERN", "Tailwind CSS"],
    github: "https://github.com/Lalithya-alt/SKYREK_Course_Project.git",
    linkedin: "https://www.linkedin.com/posts/activity-7491719864051556352-i8gX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcBl60B4OMP_7jMlvUfBHNHsyc_ng-4d1Y",
  },
  {
    id: 2,
    title: " New Sirini Hotel Web Application",
    description:
      "A full-stack MERN web application developed to manage hotel rooms, restaurant orders, liquor inventory, reception hall services, user management, notifications, and analytics through a centralized platform.",
    image: "/assets/Projects/client_project.png",
    technologies: ["MERN", "Tailwind CSS"],
    github: "https://github.com/Sadeepa-D/New-Sirini-Hotel-and-Restaurant-Project.git",
    linkedin: "https://www.linkedin.com/posts/activity-7488151379077656578-FB99?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcBl60B4OMP_7jMlvUfBHNHsyc_ng-4d1Y",
  },
  {
    id: 3,
    title: "FOT-Event Management System ",
    description:
      "A web-based event management system built with Spring Boot, Thymeleaf, and MySQL, enabling students to register for events while organizers and administrators manage events, participants, and locations.",
    image: "/assets/Projects/FOT_EMS.png",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/Sadeepa-D/FOT-Event_Managment_System.git",
    linkedin: "https://www.linkedin.com/posts/sadeepa-dinakara-790968364_springboot-fullstackdevelopment-webdevelopment-ugcPost-7473503140470738944-L1N8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcBl60B4OMP_7jMlvUfBHNHsyc_ng-4d1Y",
  },
  {
    id: 4,
    title: "BOOK HEAVEN - online bookstore",
    description:
      "A PHP and MySQL-based online bookstore where users can browse, purchase, and read books online, with premium membership features and an admin panel for managing users, books, inventory, carts, and feedback.",
    image: "/assets/Projects/Book_Heaven.png",
    technologies: ["PHP", "MySQL"],
    github: "https://github.com/Lalithya-alt/E-Commerce-Book-Store.git",
    linkedin: "https://www.linkedin.com/posts/lalithya-rasingolla-039b62292_webdevelopment-onlinebookstore-bookheaven-activity-7337023392585326592-87pL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcBl60B4OMP_7jMlvUfBHNHsyc_ng-4d1Y",
  },
  {
    id: 5,
    title: "TecSys Management System",
    description:
      "A Java and MySQL-based faculty management system with modules for admins, lecturers, technical officers, and undergraduates. Developed with attendance, grades, timetables, and course materials, notices.",
    image: "/assets/Projects/TecSys_Management_System.png",
    technologies: ["Java", "MySQL", "Swing UI"],
    github: "https://github.com/chira0001/TecSys-Student-Management-System.git",
    linkedin: "https://www.linkedin.com/posts/lalithya-rasingolla-039b62292_java-oop-universityproject-activity-7330136528163078144-_4FM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcBl60B4OMP_7jMlvUfBHNHsyc_ng-4d1Y",
  },
  {
    id: 6,
    title: "Tecmis (Management Information System) - Database",
    description:
      "A database-driven Management Information System developed to support and manage academic information and administrative activities within the Faculty of Technology",
    image: "/assets/Projects/LMS.png",
    technologies: ["MySQL"],
    github: "https://github.com/chavi-gif/DBMS-mini-projecr-Group-19.git",
    linkedin: "https://www.linkedin.com/posts/lalithya-rasingolla-039b62292_excited-to-share-our-latest-mini-project-activity-7261382958098374656-_Htw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcBl60B4OMP_7jMlvUfBHNHsyc_ng-4d1Y",
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
            className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-lg transition duration-500 hover:-translate-y-2 hover:border-teal-400 hover:shadow-teal-400/20"
          >
            <div>
              {/* Image */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-5 border border-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-navy-800 mb-3 text-center" style={{color: '#0a1a4e'}}>
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4 text-justify" style={{color: '#1e3a8a'}}>
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-md font-mono"
                    style={{background: '#e8f0fe', border: '1px solid #93c5fd', color: '#1e3a8a'}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: GitHub & LinkedIn */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border text-xs font-semibold transition duration-300 hover:bg-teal-500 hover:border-teal-500 hover:text-white"
                style={{borderColor: '#1e3a8a', color: '#1e3a8a', background: 'transparent'}}
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
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border text-xs font-semibold transition duration-300 hover:bg-teal-500 hover:border-teal-500 hover:text-white"
                style={{borderColor: '#1d4ed8', background: '#dbeafe', color: '#1e3a8a'}}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 012.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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