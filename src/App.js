import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLaptopCode,
  FaShieldAlt,
  FaBug,
} from "react-icons/fa";

import Earth from "./components/Earth";
import GlowingCube from "./components/GlowingCube";
import ProjectSlider from "./components/ProjectSlider";

const skills = [
  "Kali Linux",
  "NMap",
  "Burp Suite",
  "Metasploit",
  "Sqlmap",
  "Acunetix",
  "Zphisher",
  "Wireshark",
  "Threat Analysis",
  "Penetration Testing",
  "GitHub",
  "Vulnerability Assessment",
];

const projects = [
  {
    name: "Online Inward-Outward System (Live Academic Project)",
    tech: "HTML, CSS, Asp .Net, C#, MS-SQL",
    desc: "Developed a document and public relations management system specifically for the Department of Computer Science and Engineering, Amravati. The system streamlines the processing and tracking of inward and outward correspondence within the department. Built using HTML, CSS, ASP.NET, C#, and MS-SQL, this project enhanced my skills in secure data flow, role-based access, and database-driven web applications.",
    images: [
      "/projects/oios1.jpg",
      "/projects/oios2.jpg",
      "/projects/oios3.jpg",
      "/projects/oios4.jpg",
      "/projects/oios5.jpg",
      "/projects/oios6.jpg",
      "/projects/oios7.jpg",
      "/projects/oios8.jpg",
      "/projects/oios9.jpg",
    ],
  },
  {
    name: "Student Management System (Internship Project)",
    tech: "Java, SpringBoot, Oracle, REST APIs",
    desc: "Led the end-to-end development of a comprehensive student management platform, from gathering requirements to deployment. I independently designed and developed two major modules — Login/Registration and Assignment/Result — ensuring secure user authentication and smooth data processing. Technologies used include Core Java, J2SE, Spring Boot, Oracle 10g, Apache Tomcat, and REST APIs. This project not only solidified my backend development experience but also gave me practical exposure to user data protection and access control — key concerns in cybersecurity.",
    images: ["/projects/sms1.jpg", "/projects/sms2.jpg"],
  },
  {
    name: "Cybersecurity Labs and Practical Exercises (Ongoing)",
    tech: "Burp Suite, Acunetix, Kali Linux, Nmap",
    desc: "Currently working on real-world cybersecurity scenarios as part of a structured training program. Practicing web and network vulnerability testing using tools such as Kali Linux, sqlmap, Nmap, Burp Suite, and Metasploit Framework. Labs include web app exploitation, reconnaissance, password attacks, and traffic analysis with Wireshark, helping me build a strong technical foundation in offensive and defensive security strategies.",
  },
];

const services = [
  {
    icon: <FaLaptopCode size={40} />,
    title: "Backend Development",
    desc: "Building robust and scalable websites and web applications.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Penetration Testing",
    desc: "Ethical hacking to find vulnerabilities and secure systems.",
  },
  {
    icon: <FaBug size={40} />,
    title: "Vulnerability Assessment",
    desc: "Comprehensive security analysis to protect your assets.",
  },
];

export default function App() {
  const particlesInit = async (main) => await loadFull(main);

  // Scroll spy to highlight navbar link
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "services", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sec);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative bg-black text-white font-sans scroll-smooth">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="fixed inset-0 -z-10"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
          },
          particles: {
            color: { value: "#00ffcc" },
            links: {
              color: "#00ffcc",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              directions: "none",
              enable: true,
              outModes: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-md z-50 flex justify-between items-center px-8 py-4 text-green-400 font-semibold text-sm select-none">
        <div className="text-lg font-bold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Saurabh
        </div>
        <div className="space-x-8 hidden md:flex">
          {["hero", "about", "skills", "projects", "services", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`hover:text-green-500 transition-colors ${
                activeSection === section ? "text-green-300 font-bold underline underline-offset-4" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        {/* Mobile nav */}
        <MobileNav activeSection={activeSection} />
      </nav>

      <section
  id="hero"
  className="relative flex flex-col items-center justify-center h-screen px-6 text-center select-none overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('images/bg.jpg')" }}
>
  {/* 3D Canvas */}
  <Canvas
    className="absolute inset-0 -z-20"
    camera={{ position: [0, 0, 6], fov: 45 }}
    shadows
    gl={{ antialias: true }}
  >
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <Earth />
    <GlowingCube position={[2, 0, 0]} />
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
  </Canvas>

  {/* Main Content - Portrait + Info */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 translate-y-[-8rem] z-10">
    {/* Portrait with outer glow */}
    <div className="relative">
      <div className="absolute -inset-3 rounded-full bg-green-400 blur-2xl opacity-40 scale-125 -z-10" />
      <img
        src="images/portrait.jpg"
        alt="Saurabh Mohurle"
        className="w-56 h-56 rounded-full border-4 border-green-400 shadow-xl object-cover"
      />
    </div>

    {/* Text & Social Info */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-5xl md:text-6xl font-extrabold z-10 bg-gradient-to-r from-green-500 via-green-300 to-red-500 bg-clip-text text-transparent"
        style={{
          fontFamily: "'Dancing Script', cursive",
          textShadow: "0 0 4px #00ff00, 0 0 4px #ff0000", // green & red glow
          WebkitTextStroke: "2px #000", // text border
        }}
      >
        Saurabh Mohurle
      </motion.h1>

      <TypingAnimation
        texts={[
          "Cybersecurity Enthusiast",
          "Full Stack Java Developer",
          "Ethical Hacker & Penetration Tester",
        ]}
        className="mt-4 text-lg md:text-xl text-gray-200 z-10 min-h-[1.5rem] bg-gradient-to-r from-red-400 via-green-300 to-green-500 bg-clip-text text-transparent"
        style={{
          WebkitTextStroke: "2px #000", // border effect on subtext
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-6 flex space-x-6 text-green-400 text-2xl z-10"
      >
        <a href="https://github.com/saurabhmohurle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="hover:text-green-300 transition" />
        </a>
        <a href="https://linkedin.com/in/saurabh-mohurle/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="hover:text-green-300 transition" />
        </a>
        <a href="mailto:saurabhmohurle000@gmail.com" aria-label="Email">
          <FaEnvelope className="hover:text-green-300 transition" />
        </a>
      </motion.div>
    </div>
  </div>
</section>




      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-green-400 mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-300 text-lg max-w-3xl mx-auto text-justify"
        >
          Hi, I’m Saurabh Mohurle, a passionate and motivated cybersecurity enthusiast dedicated to protecting digital systems and uncovering vulnerabilities. 
          After beginning my career journey in backend development, I discovered my true interest lies in cybersecurity, where I can combine my analytical mindset with hands-on technical skills to safeguard information and build resilient defenses.
          I have been actively developing expertise in cybersecurity tools and methodologies such as Kali Linux, Burp Suite, Nmap, and Metasploit, focusing on ethical hacking, penetration testing, and threat analysis. 
          My approach is rooted in continuous learning and practical experimentation, participating in projects and challenges to sharpen my skills.
          With a Master’s in Computer Applications and prior exposure to software development, I bring a well-rounded perspective to cybersecurity challenges, understanding both how systems are built and how they can be protected.
          I’m committed to growing as a cybersecurity professional, eager to tackle real-world security problems, and driven to contribute to safer digital environments through innovative and effective solutions.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-900 py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-green-400 mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 204, 0.15)" }}
              className="bg-white/10 rounded-xl p-5 text-center text-green-300 font-semibold cursor-default select-none transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-green-400 mb-12"
        >
          Projects
        </motion.h2>

        <div className="space-y-16">
          {projects.map(({ name, tech, desc, images }) => (
            <div
              key={name}
              className="bg-gray-900 rounded-xl p-6 border border-green-600 shadow-lg shadow-green-800/30"
            >
              <h3 className="text-2xl font-semibold text-green-300 mb-2">{name}</h3>
              <p className="text-sm text-gray-400 mb-4">{tech}</p>
              <p className="text-gray-200 mb-6 text-justify">{desc}</p>
              <ProjectSlider images={images} />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-900 py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-green-400 mb-12"
        >
          Services
        </motion.h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px 3px #00ffcc" }}
              className="bg-black border border-green-400 rounded-xl p-8 text-center text-green-300 cursor-pointer select-none"
            >
              <div className="mx-auto mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
        <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-green-400 mb-6"
        >
          Contact Me
        </motion.h2>
        <motion.p className="text-yellow-700 mb-2 text-center leading-relaxed">
    Let&apos;s collaborate to build something amazing together. <br />
    Whether you have a project in mind or just want to connect, <br />
    feel free to drop me a message!
  </motion.p>
  

        <motion.form
          action="https://formspree.io/f/xgvkavjp"
          method="POST"
          className="max-w-md mx-auto flex flex-col gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="rounded-md px-4 py-2 bg-gray-800 border border-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="_replyto"
            required
            placeholder="Your Email"
            className="rounded-md px-4 py-2 bg-gray-800 border border-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="rounded-md px-4 py-2 bg-gray-800 border border-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition rounded-md py-3 font-semibold text-white"
          >
            Send Message
          </button>
        </motion.form>

        
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-black/50 select-none">
        © 2025 Saurabh Mohurle. Built with ❤️ using React, Tailwind CSS, Three.js, Framer Motion & tsparticles
      </footer>
    </div>
  );
}

// Typing Animation Component
function TypingAnimation({ texts, className }) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && displayedText.length < texts[index].length) {
      timeout = setTimeout(() => setDisplayedText(texts[index].slice(0, displayedText.length + 1)), 100);
    } else if (!deleting && displayedText.length === texts[index].length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && displayedText.length > 0) {
      timeout = setTimeout(() => setDisplayedText(texts[index].slice(0, displayedText.length - 1)), 60);
    } else if (deleting && displayedText.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, deleting, index, texts]);

  return <p className={`${className} font-mono`}>{displayedText}&nbsp;</p>;
}

// Mobile Nav with hamburger toggle
function MobileNav({ activeSection }) {
  const [open, setOpen] = useState(false);

  const sections = ["hero", "about", "skills", "projects", "services", "contact"];

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={() => setOpen(!open)}
        className="md:hidden text-green-400 focus:outline-none z-50"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-64 h-full bg-black/90 backdrop-blur-md p-6 flex flex-col space-y-8 z-40"
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setOpen(false)}
                className={`text-green-400 font-semibold text-lg ${
                  activeSection === section ? "underline" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
