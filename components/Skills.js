"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import img from "../pubilc/assets/img/hero.jpg";

export default function App() {
  const [progress, setProgress] = useState(Array(8).fill(0)); // State for progress bars (one for each button)
  const [color, setColor] = useState(Array(8).fill("teal")); // State for dynamic colors (one for each button)

  const technologies = [
    { name: "HTML/CSS", progress: 90, color: "bg-orange-500" },
    { name: "JavaScript", progress: 85, color: "bg-yellow-500" },
    { name: "React", progress: 80, color: "bg-blue-500" },
    { name: "Node.js", progress: 30, color: "bg-green-500" },
    { name: "Next.js", progress: 70, color: "bg-purple-500" },
    { name: "Next.js", progress: 70, color: "bg-purple-500" },
    { name: "Next.js", progress: 70, color: "bg-purple-500" },
    { name: "Next.js", progress: 70, color: "bg-purple-500" },
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
    <section className="relative py-10 bg-gray-900 text-white">
      <h1 className="text-center mb-9">The skills I have</h1>
      <div className="flex flex-row justify-between">
        <div className="container skills-popup top-9 flex flex-col gap-8 mx-16">
          {Array.from({ length: 4 }).map((_, index) => (
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
                      <Image
                        src={img}
                        alt="My Image"
                        width={100}
                        height={100}
                        className="shadow-lg"
                      />
                    </span>
                  </a>
                </li>
              </ul>

              {/* Progress Bar */}
              <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${color[index]} transition-all duration-300`}
                  style={{ width: `${progress[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="container skills-popup top-9 flex flex-col gap-8 mx-16">
          {Array.from({ length: 4 }).map((_, index) => (
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
                      <Image
                        src={img}
                        alt="My Image"
                        width={100}
                        height={100}
                        className="shadow-lg"
                      />
                    </span>
                  </a>
                </li>
              </ul>

              {/* Progress Bar */}
              <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    color[index + 4]
                  } transition-all duration-300`}
                  style={{ width: `${progress[index + 4]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
