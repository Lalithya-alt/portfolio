import Navbar       from "../components/Navbar";
import About        from "../components/About";
import Education    from "../components/Education";
import Skills       from "../components/Skills";
import Projects     from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact      from "../components/Contact";

export default function Home() {
  return (
    <div className="relative text-white min-h-screen">

      {/* Fixed background — always covers viewport while scrolling */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url("/assets/bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Navbar />

      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
