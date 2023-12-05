import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          About Me
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4">
          Former NCAA Division 1 athlete passionate about languages, traveling,
          cars, and football (both kinds). During my 6+ years tenure as a
          practice manager for a multi-site optometry practice, I led end-to-end
          implementation of our practice management and patient outreach
          software.
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-4">
          My enjoyment of this experience, combined with my deep interest in
          technology, recently led me to make a career switch to software
          engineering. I am currently pursuing software development roles at an
          innovative company. Open to remote roles or hybrid / onsite roles in
          the Greater Boston Area.
        </p>
        <p className="text-base sm:text-lg text-gray-700">
          Specialties: TypeScript, Node, NextJs, React, Python, SQL.
        </p>
      </div>
    </div>
  );
};

export default About;
