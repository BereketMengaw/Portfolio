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
    <div id="about" className="py-16 px-4 md:px-16 bg-dark text-white">
      {/* Mobile View */}
      <div className="md:hidden">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-gray-500 mb-2">{exp.date}</p>
              <ul className="list-disc pl-4 text-gray-300">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative max-w-4xl mx-auto">
        {/* Year Buttons - Centered above timeline */}
        <div className="flex justify-center mb-8 space-x-6">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all ${
                activeIndex === index
                  ? "bg-primary border-primary text-white transform scale-110"
                  : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {exp.year}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-10 ${
                index % 2 === 0 ? "pr-12" : "pl-12"
              }`}
            >
              {/* Connector Dot - Highlighted when active */}
              <div
                className={`absolute left-1/2  transform -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all ${
                  activeIndex === index
                    ? "bg-primary border-primary scale-125"
                    : "bg-gray-800 border-gray-600"
                }`}
              ></div>

              {/* Experience Card - Highlighted when active */}
              <div
                className={`bg-gray-800 slide-fwd-center p-6 rounded-lg shadow-lg transition-all ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                } ${
                  activeIndex === index
                    ? "ring-2 ring-primary transform scale-[1.02]"
                    : "opacity-90 hover:opacity-100"
                }`}
                style={{ maxWidth: "calc(50% - 2rem)" }}
                onClick={() => setActiveIndex(index)}
              >
                <h2 className="text-2xl font-semibold">{exp.title}</h2>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-gray-500 mb-2">{exp.date}</p>
                <ul className="list-disc pl-4 text-gray-300">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
