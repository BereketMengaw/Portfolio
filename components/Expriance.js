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
      "Passionate about technology, I laid the groundwork for my journey into software development.",
    ],
  },
  {
    title: "Student & Full-Stack Developer Trainee",
    company: "Addis Ababa University & Evangadi Networks (USA)",
    date: "2022 - 2023",
    year: "2022 ",
    description: [
      "Joined Addis Ababa University to further my education in technology and business.",
      "Enrolled in Evangadi Networks, a USA-based academy, where I mastered full-stack development.",
      "Gained hands-on experience in web development, strengthening both front-end and back-end skills.",
      "Balanced academic studies with practical coding, reinforcing my commitment to digital innovation.",
    ],
  },
  {
    title: "Junior Full-Stack Engineer",
    company: "Kelal Tech",
    date: "2023 - 2024",
    year: "2023 ",
    description: [
      "Worked as a junior full-stack engineer, focusing on debugging and backend development.",
      "Contributed to various projects, refining my expertise in scalable web applications.",
      "Gained experience in solving complex technical problems in a fast-paced environment.",
      "Collaborated with teams to enhance software functionality and improve performance.",
    ],
  },
  {
    title: "Founder of DaguLearn",
    company: "DaguLearn",
    date: "2024 - Present",
    year: "2024 ",
    description: [
      "Created Ethiopia's first YouTube course monetization platform for local creators.",
      "Enabled content creators to sell courses at affordable prices due to the absence of YouTube monetization in Ethiopia.",
      "Focused on bridging the gap between digital education and monetization opportunities.",
      "Empowered Ethiopian educators and learners by providing an accessible and profitable platform.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Upwork & Global Clients",
    date: "Ongoing",
    year: "2024+",
    description: [
      "Providing high-quality full-stack development services to clients worldwide through Upwork.",
      "Combining technical expertise with business acumen to deliver scalable and impactful digital solutions.",
      "Helping startups and businesses optimize their web platforms for growth and efficiency.",
      "Staying ahead in the tech industry by continuously learning and adapting to global market trends.",
      "Committed to delivering innovative solutions that drive business success in a competitive landscape.",
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
      <h2 className="text-5xl md:text-6xl font-bold mb-8 mt-2 font-['Organiez'] tracking-tight text-center ">
        My <span className="text-purple-900"> Experience</span>
      </h2>
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
        <div className="hidden md:block relative w-full mx-auto mt-2">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Vertical Line with clickable circles */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500/30 via-purple-600/50 to-purple-500/30">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 transition-all duration-300 flex items-center justify-center ${
                    activeIndex === index
                      ? "bg-purple-600 border-purple-400 text-white transform scale-110 shadow-lg shadow-purple-500/30"
                      : "bg-gray-800/70 border-gray-600 text-gray-300 hover:bg-gray-700/70 hover:border-purple-400/50"
                  }`}
                  style={{
                    top: `${(index / (experiences.length - 1)) * 100}%`,
                  }}
                >
                  {exp.year}
                </button>
              ))}
            </div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-16 ${
                  index % 2 === 0 ? "pr-12" : "pl-12"
                }`}
              >
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
