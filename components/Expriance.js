"use client";

import React, { useState } from "react";

const experiences = [
  {
    title: "High School & Coding Club Founder",
    company: "NCA (Neway Challenge Academy)",
    date: "2018 - 2022",
    year: "2018",
    description: [
      "Developed a strong foundation in computer science and problem-solving.",
      "Founded the school's first coding club, inspiring students to explore programming.",
      "Achieved a remarkable 98/100 in Mathematics, a nationally recognized achievement.",
      "Laid the groundwork for my journey into software development.",
    ],
  },
  {
    title: "Student & Full-Stack Developer Trainee",
    company: "Addis Ababa University & Evangadi Networks (USA)",
    date: "2022 - 2023",
    year: "2022",
    description: [
      "Joined Addis Ababa University to further my education in technology and business.",
      "Mastered full-stack development at Evangadi Networks, a USA-based academy.",
      "Gained hands-on experience in front-end and back-end engineering.",
      "Balanced academics with practical coding to deepen real-world skills.",
    ],
  },
  {
    title: "Junior Full-Stack Engineer",
    company: "Kelal Tech",
    date: "2023 - 2024",
    year: "2023",
    description: [
      "Worked as a junior full-stack engineer focusing on debugging and backend development.",
      "Contributed to several projects, refining my expertise in scalable web applications.",
      "Solved complex technical problems in a fast-paced environment.",
      "Collaborated with teams to enhance functionality and performance.",
    ],
  },
  {
    title: "Founder of DaguLearn",
    company: "DaguLearn",
    date: "2024 - Present",
    year: "2024",
    description: [
      "Created Ethiopia's first YouTube course monetization platform for local creators.",
      "Enabled creators to sell affordable courses despite limited YouTube monetization in Ethiopia.",
      "Bridged the gap between digital education and monetization opportunities.",
      "Empowered Ethiopian educators and learners with an accessible, profitable platform.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Upwork & Global Clients",
    date: "Ongoing",
    year: "2024+",
    description: [
      "Delivering high-quality full-stack development services to clients worldwide via Upwork.",
      "Pairing technical expertise with business sense to ship scalable digital solutions.",
      "Helping startups optimize their web platforms for growth and efficiency.",
      "Continuously learning and adapting to global tech trends.",
    ],
  },
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className="relative w-full py-24 px-4 sm:px-8 overflow-hidden mesh-bg text-white"
    >
      <div className="absolute -right-32 -top-32 w-[36rem] h-[36rem] rounded-full bg-purple-700/20 blur-[140px] pointer-events-none" />
      <div className="absolute -left-32 -bottom-32 w-[32rem] h-[32rem] rounded-full bg-fuchsia-700/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-purple-200 mb-5">
            Journey
          </span>
          <h2 className="section-heading">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            From founding a coding club in high school to building Ethiopia&apos;s
            first YouTube course monetization platform.
          </p>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-5 relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent" />
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[25px] top-5 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20 shadow-purple-glow" />
              <div className="glass glass-hover rounded-2xl p-5">
                <div className="text-xs font-semibold tracking-wider text-purple-300 uppercase mb-1">
                  {exp.date}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-purple-200/90 mb-3">
                  {exp.company}
                </p>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const active = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`relative grid grid-cols-2 gap-12 items-center ${
                    isLeft ? "" : ""
                  }`}
                >
                  {/* Year node */}
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full font-semibold text-xs flex items-center justify-center transition-all duration-300 z-10 ${
                      active
                        ? "bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white scale-110 shadow-purple-glow"
                        : "glass-strong text-gray-300 hover:scale-105 hover:text-white"
                    }`}
                  >
                    {exp.year}
                  </button>

                  {/* Card */}
                  <div
                    className={`${
                      isLeft ? "col-start-1 pr-12 text-right" : "col-start-2 pl-12 text-left"
                    }`}
                  >
                    <div
                      onClick={() => setActiveIndex(index)}
                      className={`glass glass-hover rounded-3xl p-6 cursor-pointer transition-all ${
                        active ? "border-purple-400/50 bg-purple-500/5" : ""
                      }`}
                    >
                      <div className="text-xs font-semibold tracking-wider text-purple-300 uppercase mb-1">
                        {exp.date}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-purple-200/90 mb-3">
                        {exp.company}
                      </p>
                      <ul
                        className={`space-y-1.5 text-sm text-gray-300 ${
                          isLeft ? "text-right" : "text-left"
                        }`}
                      >
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
