import React from "react";
import Title from "../components/Title";

const Skills = () => {
  return (
    <section className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto mt-10 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-md">
        
        <Title text1={"My"} text2={"Skills"} />

        <div className="mt-10 grid gap-8 sm:grid-cols-2">

          <div className="p-6 border rounded-2xl hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Frontend
            </h2>
            <div className="flex flex-wrap gap-3">
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
              <img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" />
              <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
              <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
            </div>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Backend
            </h2>
            <div className="flex flex-wrap gap-3">
              <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
              <img src="https://img.shields.io/badge/Express.js-lightgrey?style=for-the-badge&logo=express&logoColor=black" />
            </div>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Database
            </h2>
            <div className="flex flex-wrap gap-3">
              <img src="https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white" />
              <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
            </div>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Programming & Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" />
              <img src="https://img.shields.io/badge/Python-306998?style=for-the-badge&logo=python&logoColor=green" />
              <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
              <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
              <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
              <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
