import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Java",
    "Data Structures & Algorithms",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub",
  ];

  const experience = [
    {
      role: "Full Stack Developer (Projects)",
      company: "Self Projects",
      time: "2023 – Present",
      points: [
        "Built 50+ full-stack projects using MERN stack.",
        "Designed REST APIs and implemented authentication & authorization.",
        "Focused on clean UI, performance optimization, and scalability.",
      ],
    },
    {
      role: "Java & DSA Practitioner",
      company: "Self Learning",
      time: "2022 – Present",
      points: [
        "Solved 500+ DSA problems on LeetCode & other platforms.",
        "Strong grasp of arrays, strings, trees, graphs, and DP.",
      ],
    },
  ];

  const projects = [
    {
      title: "Stock Sphere",
      desc: "MERN-based stock management system with authentication and dashboards.",
      link: "https://github.com/your-github/stock-sphere",
    },
    {
      title: "Airbnb Clone",
      desc: "Property booking platform with listings, images, and user login.",
      link: "https://github.com/your-github/airbnb-clone",
    },
    {
      title: "Real-Time Chat App",
      desc: "Real-time chat app using WebSockets with secure authentication.",
      link: "https://github.com/your-github/chat-app",
    },
  ];

  return (
    <main className="mt-14 min-h-screen bg-gray-50 text-gray-800 px-4 py-14">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto space-y-8"
      >
        {/* HEADER */}
        <header className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-900">Mohit Rajak</h1>
            <p className="text-blue-600 font-medium">
              Full Stack Developer (MERN) | Java | DSA
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2"><MapPin size={16} /> Bhopal, India</span>
              <span className="flex items-center gap-2"><Mail size={16} /> mohitrajak022004@gmail.com</span>
              <span className="flex items-center gap-2"><Phone size={16} /> +91-8349355140</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://github.com/Mohit-Rajak" className="btn-primary">
                <Github size={16} /> GitHub
              </a>
              <a href="https://linkedin.com/in/mohit-rajak" className="btn-secondary">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </header>


        <section className="bg-white rounded-2xl p-6 border shadow-sm">
          <h2 className="section-title">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Full Stack Developer skilled in MERN stack and Java with strong
            problem-solving abilities. Experienced in building scalable web
            applications, REST APIs, and modern UIs. Actively seeking
            software development roles.
          </p>
        </section>


        <section className="bg-white rounded-2xl p-6 border shadow-sm">
          <h2 className="section-title">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>


        <section className="bg-white rounded-2xl p-6 border shadow-sm">
          <h2 className="section-title">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.role} className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-lg">{exp.role}</h3>
                <p className="text-sm text-gray-600">{exp.company} • {exp.time}</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  {exp.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 border shadow-sm">
          <h2 className="section-title">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <article key={project.title} className="border rounded-xl p-4 hover:shadow transition">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  {project.title}
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600">
                    <ExternalLink size={16} />
                  </a>
                </h3>
                <p className="text-gray-600">{project.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 border shadow-sm">
          <h2 className="section-title">Education</h2>

          <div className="space-y-3">
            <div>
              <p className="font-semibold">M.Tech – CSE-Artificial Intelligence and Machine Learning (Running)</p>
              <p className="text-gray-600">2025 – Currently Pursuing</p>
            </div>

            <div>
              <p className="font-semibold">B.Tech – Electronics & Communication Engineering</p>
              <p className="text-gray-600">Technocrats Institute of Technology, Bhopal • 2024</p>
            </div>
          </div>
        </section>
      </motion.section>

      {/* Utility classes */}
      <style>{`
        .section-title { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem; }
        .skill-badge { padding: 0.25rem 0.75rem; background: #eff6ff; color: #1d4ed8; border-radius: 0.5rem; font-size: 0.875rem; }
        .btn-primary { display: inline-flex; align-items: center; gap: 0.5rem; background: #111827; color: #fff; padding: 0.5rem 0.75rem; border-radius: 0.75rem; font-size: 0.875rem; }
        .btn-secondary { display: inline-flex; align-items: center; gap: 0.5rem; background: #2563eb; color: #fff; padding: 0.5rem 0.75rem; border-radius: 0.75rem; font-size: 0.875rem; }
        .btn-outline { display: inline-flex; align-items: center; gap: 0.5rem; border: 1px solid #d1d5db; padding: 0.5rem 0.75rem; border-radius: 0.75rem; font-size: 0.875rem; }
      `}</style>
    </main>
  );
}
