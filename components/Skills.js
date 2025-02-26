"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faBootstrap,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

export default function App() {
  const [progress, setProgress] = useState(Array(8).fill(0)); // State for progress bars
  const [color, setColor] = useState(Array(8).fill("teal")); // State for dynamic colors

  const technologies = [
    { name: "HTML", progress: 90, color: "bg-orange-500", icon: faHtml5 },
    { name: "CSS", progress: 85, color: "bg-blue-500", icon: faCss3 },
    {
      name: "JavaScript",
      progress: 80,
      color: "bg-yellow-500",
      icon: faJsSquare,
    },
    { name: "React", progress: 75, color: "bg-teal-500", icon: faReact },
    { name: "Node.js", progress: 70, color: "bg-green-500", icon: faNodeJs },
    {
      name: "Bootstrap",
      progress: 65,
      color: "bg-purple-500",
      icon: faBootstrap,
    },
    { name: "MySQL", progress: 60, color: "bg-indigo-500", icon: faGithub },
    { name: "GitHub", progress: 55, color: "bg-gray-500", icon: faDatabase },
  ];

  // Set progress and color immediately when the component mounts
  useEffect(() => {
    const newProgress = [...progress];
    const newColor = [...color];
    technologies.forEach((tech, index) => {
      newProgress[index] = tech.progress;
      newColor[index] = tech.color;
    });
    setProgress(newProgress);
    setColor(newColor);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <section className="relative py-10 bg-gray-900 text-white" id="skills">
      <h1 className="text-center mb-9 text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
        My Development Toolkit
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* First Column */}
        <div className="container skills-popup top-9 flex flex-col gap-8 mx-4 md:mx-36">
          {technologies.slice(0, 4).map((tech, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Button */}
              <ul>
                <li>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-css3-alt">
                      <FontAwesomeIcon
                        icon={tech.icon}
                        className="text-4xl"
                        style={{ color: tech.color.replace("bg-", "text-") }}
                      />
                    </span>
                  </a>
                </li>
              </ul>

              {/* Progress Bar and Text */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{tech.name}</span>
                  <span className="text-sm font-medium">{tech.progress}%</span>
                </div>
                <div className="w-48 md:w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${tech.color} transition-all duration-300`}
                    style={{ width: `${tech.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div className="container skills-popup top-9 flex flex-col gap-8 mx-4 md:mx-16">
          {technologies.slice(4, 8).map((tech, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Button */}
              <ul>
                <li>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-css3-alt">
                      <FontAwesomeIcon
                        icon={tech.icon}
                        className="text-4xl"
                        style={{ color: tech.color.replace("bg-", "text-") }}
                      />
                    </span>
                  </a>
                </li>
              </ul>

              {/* Progress Bar and Text */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{tech.name}</span>
                  <span className="text-sm font-medium">{tech.progress}%</span>
                </div>
                <div className="w-48 md:w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${tech.color} transition-all duration-300`}
                    style={{ width: `${tech.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
