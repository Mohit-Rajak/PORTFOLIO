import React from "react";

const About = () => {
  return (
    <section className="w-full bg-slate-50 py-16 px-4 border border-gray-200 rounded-lg">

      <div className="mt-10 max-w-6xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-12 space-y-6 shadow-md">

        <p className="text-slate-700 leading-relaxed md:leading-loose">
          I am a passionate and detail-oriented{" "}
          <span className="font-medium text-indigo-600">
            MERN Stack Developer
          </span>{" "}
          with a strong foundation in MongoDB, Express.js, React.js, and Node.js,
          focused on building <span className="font-medium text-indigo-600">responsive, scalable, and user-friendly</span> web applications.
          I have hands-on experience developing full-stack solutions with authentication, CRUD operations, and REST API integrations, and continuously strive to write clean, efficient, and maintainable code while strengthening my problem-solving skills as a{" "}
          <span className="font-medium text-indigo-600">Java & DSA enthusiast</span>.
        </p>

        <p className="text-slate-700 leading-relaxed md:leading-loose">
          I completed my{" "}
          <strong className="text-slate-800">
            B.Tech in Electronics and Communication Engineering (2024)
          </strong>{" "}
          and am currently pursuing{" "}
          <strong className="text-slate-800">
            M.Tech in Artificial Intelligence & Machine Learning
          </strong>{" "}
          to deepen my understanding of intelligent and data-driven systems.
        </p>

        <p className="text-slate-700 leading-relaxed md:leading-loose">
          I have built{" "}
          <strong className="text-slate-800">
            50+ web development projects
          </strong>
          , including full-stack MERN applications like{" "}
          <strong className="text-slate-800">E-commerce Website</strong>,{" "}
          <strong className="text-slate-800">Chat App</strong>, and an{" "}
          <strong className="text-slate-800">Airbnb-style platform</strong>.
        </p>

        <p className="text-slate-700 leading-relaxed md:leading-loose">
          I enjoy solving real-world problems (
          <span className="font-medium text-indigo-600">
            300+ LeetCode problems
          </span>{" "}
         )Solved. Writing clean and scalable code, and continuously learning new technologies.
        </p>

        <p className="font-medium text-slate-800">
          Currently seeking internship or full-time opportunities as a{" "}
          <span className="text-indigo-600">
            MERN Stack / Full Stack Developer
          </span>.
        </p>
      </div>

      {/* What I'm Doing */}
      <div className="mt-20 max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-800 mb-12">
          What I’m Doing
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "MERN Stack Developer",
              desc: "I specialize in building dynamic and responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
            },
            {
              title: "Frontend Development",
              desc: "Creating responsive, user-friendly UI with HTML, CSS, JavaScript, React.js, and Bootstrap.",
            },
            {
              title: "Problem Solving",
              desc: "Solving DSA problems using Java and improving algorithmic thinking.",
            },
            {
              title: "AI & ML Learning",
              desc: "Exploring basic machine learning concepts and AI-powered solutions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg md:text-xl text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
