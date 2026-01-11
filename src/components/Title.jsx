import React from "react";

const Title = ({ text1, text2, center = false }) => {
  return (
    <div
      className={`flex items-center gap-4 mb-10 ${
        center ? "justify-center text-center" : ""
      }`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
        <span className="text-slate-700">{text1}</span>{" "}
        <span className="text-indigo-600 font-bold">{text2}</span>
      </h2>

      <span className="hidden sm:block w-12 h-[3px] bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full"></span>
    </div>
  );
};

export default Title;
