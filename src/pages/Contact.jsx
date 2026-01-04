import React from "react";
import Title from "../components/Title";

const Contact = () => {
  return (
    <section className="w-full bg-slate-50 py-16 px-4 mt-4">
      <div className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-md">

        <Title text1={"Get In"} text2={"Touch"} />

        <p className="text-slate-600 max-w-2xl mt-2">
          Have a project idea, internship opportunity, or just want to connect?
          Feel free to drop a message. I’ll get back to you as soon as possible.
        </p>

        <form className="mt-8 grid gap-6 sm:grid-cols-2">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm font-medium text-slate-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="Internship / Project / Hiring"
              className="px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              rows="3"
              placeholder="Write your message here..."
              className="px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="px-8 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row gap-6 md:gap-12 text-slate-600">
          <p>📧 Email: <span className="font-medium text-slate-800">your@email.com</span></p>
          <p>📍 Location: <span className="font-medium text-slate-800">India</span></p>
          <p>💼 Open to: <span className="font-medium text-indigo-600">Internships & Full-Time Roles</span></p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
