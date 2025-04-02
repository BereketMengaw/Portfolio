"use client";

import React, { useState } from "react";

const experiences = [
  {
    title: "Full-Stack Developer & Student",
    company: "Addis Ababa University",
    date: "Present",
    year: "Now",
    description: [
      "Pursuing my studies at Addis Ababa University while working as a full-stack developer.",
      "Exploring the intersection of technology and business to create innovative solutions.",
      "Studying relentlessly to bridge the gap between digital transformation and entrepreneurship.",
    ],
  },
  {
    title: "Founder of DaguLearn",
    company: "DaguLearn",
    date: "2025",
    year: "2025",
    description: [
      "Created DaguLearn to provide monetization access for Ethiopian creators.",
      "Aimed to bridge the gap in digital content monetization, as YouTube has not yet introduced monetization in Ethiopia.",
      "Empowered creators by providing an accessible platform for learning and earning.",
    ],
  },
  {
    title: "Passionate Innovator",
    company: "Self-Initiated",
    date: "Ongoing",
    year: "2020+",
    description: [
      "Dedicated to building impactful digital solutions for businesses and individuals.",
      "Constantly learning and refining skills to stay ahead in the tech industry.",
      "Believing that technology isn't just a tool—it's a means to create change and opportunities.",
    ],
  },
];

function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="about"
      className="py-16 px-4 md:px-16 bg-gradient-to-b from-purple-900/50 to-black text-white w-screen-lg-screen m-0 relative overflow-hidden"
    >
      {/* Purple background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20 z-0"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-purple-800/10 blur-3xl -z-10"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl -z-10"></div>

      <div className="relative z-10">
        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg border border-purple-900/50 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-purple-300">
                {exp.title}
              </h2>
              <p className="text-purple-200">{exp.company}</p>
              <p className="text-purple-400 mb-4">{exp.date}</p>
              <ul className="space-y-2 text-gray-200">
                {exp.description.map((desc, i) => (
                  <li
                    key={i}
                    className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-purple-500"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative w-full mx-auto">
          {/* Year Buttons - Centered above timeline */}
          <div className="flex justify-center mb-12 space-x-8">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-purple-600 border-purple-400 text-white transform scale-110 shadow-lg shadow-purple-500/30"
                    : "bg-gray-800/70 border-gray-600 text-gray-300 hover:bg-gray-700/70 hover:border-purple-400/50"
                }`}
              >
                {exp.year}
              </button>
            ))}
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500/30 via-purple-600/50 to-purple-500/30"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-16 ${
                  index % 2 === 0 ? "pr-12" : "pl-12"
                }`}
              >
                {/* Connector Dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full border-4 transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-purple-500 border-purple-300 scale-125 shadow-lg shadow-purple-500/50"
                      : "bg-gray-800 border-gray-600 hover:border-purple-400/50"
                  }`}
                ></div>

                {/* Experience Card */}
                <div
                  className={`bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-lg transition-all duration-300 ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  } ${
                    activeIndex === index
                      ? "border-purple-400/70 shadow-purple-500/20 transform scale-[1.02]"
                      : "opacity-90 hover:opacity-100 hover:border-purple-500/30"
                  }`}
                  style={{ maxWidth: "calc(50% - 2rem)" }}
                  onClick={() => setActiveIndex(index)}
                >
                  <h2 className="text-2xl font-semibold text-purple-300 mb-1">
                    {exp.title}
                  </h2>
                  <p className="text-purple-200 mb-1">{exp.company}</p>
                  <p className="text-purple-400 mb-4">{exp.date}</p>
                  <ul className="space-y-3 text-gray-200">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-purple-500"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
