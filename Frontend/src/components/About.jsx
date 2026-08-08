const meImg = "/assets/me.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20 md:px-16 scroll-mt-20"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Profile Image + Name */}
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src={meImg}
            alt="Lalithya Rasingolla"
            className="w-52 h-52 md:w-80 md:h-80 rounded-full border-2 border-dashed border-teal-400 p-3 object-cover object-top"
          />
          <div className="text-center">
            <p className="text-white text-lg md:text-xl font-semibold">
              Hello, I'm <span className="text-teal-400">Lalithya Rasingolla</span>
            </p>
            <p className="text-white/60 text-sm md:text-base mt-1">ICT Undergratuate | FOT - UOR </p>
          </div>
        </div>

        {/* About Content */}
        <div className="flex flex-col items-center text-center gap-6">

          <h1 className="text-2xl md:text-4xl font-bold text-white">
            &lt;About Me/&gt;
          </h1>

          <p className="text-white text-sm md:text-base italic leading-relaxed text-justify">
            Hi there 👋, I’m Lalithya Rasingolla, an Information and Communication 
            Technology undergraduate at the University of Ruhuna with a 
            passion for building practical software solutions through technology. 
            I specialize in MERN stack development, creating responsive user 
            interfaces, scalable backend systems, and user-friendly digital 
            experiences.

            <br /><br />
           I enjoy transforming ideas into practical applications by combining creativity, 
           problem-solving, and technology. Through academic projects and personal development, 
           I have gained experience in designing and building software solutions while
           continuously improving my understanding of software engineering principles.
            
            <br /><br />
           I’m currently open to internship and part-time opportunities where I can 
           apply my skills, gain industry experience, contribute to meaningful 
           projects, and continue growing as a software engineer.
          </p>

          {/* Resume Button */}
          <a
            href="YOUR_RESUME_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-md border-2 border-teal-400 bg-teal-400/20 text-white font-medium hover:bg-teal-400 transition duration-300"
          >
            View Resume
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-10 mt-5">

            {/* GitHub */}
            <a
              href="https://github.com/Lalithya-alt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-teal-400 hover:scale-150 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lalithya-rasingolla-039b62292/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-teal-400 hover:scale-150 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-teal-400 hover:scale-150 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
