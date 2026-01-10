import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/assets";

const Home = () => {
  return (
    <div className="bg-slate-50">

      {/* HERO SECTION */}
      <section className="py-28 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

          {/* Left */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl text-gray-900">
              Hello, I’m
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-indigo-600">
              Mohit Rajak
            </h1>

            <h2 className="text-lg md:text-2xl font-medium text-gray-700">
              Full-Stack <span className="text-indigo-600">MERN Developer</span>
              <br />
              <span className="text-gray-500 text-base md:text-lg">
                Java & DSA Focused
              </span>
            </h2>

            <p className="text-gray-600 max-w-xl leading-relaxed">
              I build scalable, production-ready web applications using the MERN
              stack and solve real-world problems leveraging strong Java & DSA
              fundamentals.
            </p>

            <div className="flex gap-4 pt-4">
              <Link to="/projects">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  View Projects
                </button>
              </Link>
              <Link to="/resume">
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
                  Resume
                </button>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={profile}
              alt="Mohit Rajak"
              className="w-64 md:w-96 h-64 md:h-96 rounded-full object-cover shadow-xl border-4 border-indigo-100"
            />
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 bg-white border rounded-3xl p-8 md:p-12 shadow-md space-y-6">

          <Title text1="About" text2="Me" />

          <p className="text-slate-700 leading-relaxed">
            I am a passionate{" "}
            <span className="font-medium text-indigo-600">MERN Stack Developer</span>{" "}
            with hands-on experience in building scalable, responsive, and
            user-friendly web applications using modern technologies.
          </p>

          <p className="text-slate-700 leading-relaxed">
            I completed my{" "}
            <strong>B.Tech in Electronics and Communication Engineering (2024)</strong>{" "}
            and am currently pursuing{" "}
            <strong>M.Tech in Artificial Intelligence & Machine Learning</strong>.
          </p>

          <p className="text-slate-700 leading-relaxed">
            I have built <strong>50+ web development projects</strong>, including
            full-stack MERN applications like E-commerce platforms, Chat Apps,
            and Airbnb-style websites.
          </p>

          <p className="font-medium text-slate-800">
            Currently seeking internship or full-time opportunities as a{" "}
            <span className="text-indigo-600">
              MERN Stack / Full Stack Developer
            </span>.
          </p>
        </div>
      </section>

      {/* WHAT I'M DOING */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            What I’m Doing
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "MERN Stack Development",
                desc: "Building full-stack applications using MongoDB, Express, React, and Node.js.",
              },
              {
                title: "Frontend Development",
                desc: "Creating responsive and user-friendly interfaces with React and Tailwind CSS.",
              },
              {
                title: "Problem Solving",
                desc: "Solving DSA problems using Java to improve algorithmic thinking.",
              },
              {
                title: "AI & ML Learning",
                desc: "Exploring artificial intelligence and machine learning fundamentals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">

          <Title text1="My" text2="Projects" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 bg-white border rounded-3xl p-8 md:p-12 shadow-md">

          <Title text1="Get In" text2="Touch" />

          <p className="text-slate-600 max-w-2xl mt-2">
            Have a project idea, internship opportunity, or just want to connect?
            Feel free to reach out.
          </p>

          <form className="mt-8 grid gap-6 sm:grid-cols-2">
            <input className="p-3 border rounded-lg" placeholder="Full Name" />
            <input className="p-3 border rounded-lg" placeholder="Email Address" />
            <input
              className="p-3 border rounded-lg sm:col-span-2"
              placeholder="Subject"
            />
            <textarea
              rows="3"
              className="p-3 border rounded-lg sm:col-span-2"
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              className="sm:col-span-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;
