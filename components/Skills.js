"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Brand Icons (Logos)
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faBootstrap,
  faGithub,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

// Solid Icons (General UI icons)
import {
  faDatabase,
  faWind,
  faGlobe,
  faServer,
  faLock,
  faCreditCard,
  faUserShield,
  faCode,
  faCogs,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

export default function App() {
  const [progress, setProgress] = useState(Array(8).fill(0)); // State for progress bars
  const [color, setColor] = useState(Array(8).fill("teal")); // State for dynamic colors
  const [selectedCategory, setSelectedCategory] = useState("frontend"); // State for selected category

  const technologies = [
    // Frontend Technologies
    {
      name: "HTML",
      progress: 95,
      color: "bg-orange-500",
      icon: faHtml5,
      category: "frontend",
    },
    {
      name: "CSS",
      progress: 90,
      color: "bg-blue-500",
      icon: faCss3,
      category: "frontend",
    },
    {
      name: "JavaScript (ES6+)",
      progress: 85,
      color: "bg-yellow-500",
      icon: faJsSquare,
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      progress: 85,
      color: "bg-teal-500",
      icon: faWind,
      category: "frontend",
    },
    {
      name: "Bootstrap",
      progress: 75,
      color: "bg-purple-500",
      icon: faBootstrap,
      category: "frontend",
    },
    {
      name: "API Integration",
      progress: 80,
      color: "bg-indigo-500",
      icon: faGlobe,
      category: "frontend",
    },
    {
      name: "Next.js Routing",
      progress: 85,
      color: "bg-gray-500",
      icon: faReact,
      category: "frontend",
    },

    // Backend Technologies
    {
      name: "Node.js",
      progress: 80,
      color: "bg-green-500",
      icon: faNodeJs,
      category: "backend",
    },
    {
      name: "Express.js",
      progress: 80,
      color: "bg-gray-700",
      icon: faServer,
      category: "backend",
    },
    {
      name: "JWT Authentication",
      progress: 75,
      color: "bg-red-500",
      icon: faLock,
      category: "backend",
    },
    {
      name: "Payment Integration",
      progress: 70,
      color: "bg-blue-500",
      icon: faCreditCard,
      category: "backend",
    },
    {
      name: "Access Control & RBAC",
      progress: 80,
      color: "bg-gray-700",
      icon: faUserShield,
      category: "backend",
    },

    {
      name: "API Development (RESTful)",
      progress: 80,
      color: "bg-blue-600",
      icon: faCode,
      category: "backend",
    },

    {
      name: "Google Cloud Platform (GCP)",
      progress: 60,
      color: "bg-blue-500",
      icon: faCloud,
      category: "backend",
    },

    {
      name: "APM (Application Performance Monitoring)",
      progress: 60,
      color: "bg-blue-500",
      icon: faServer,
      category: "backend",
    },

    // Database Technologies
    {
      name: "Database Modeling",
      progress: 75,
      color: "bg-green-500",
      icon: faDatabase,
      category: "database",
    },
    {
      name: "SQL",
      progress: 80,
      color: "bg-blue-700",
      icon: faDatabase,
      category: "database",
    },
    {
      name: "MySQL",
      progress: 85,
      color: "bg-indigo-600",
      icon: faDatabase,
      category: "database",
    },
    {
      name: "Sequelize ORM",
      progress: 75,
      color: "bg-purple-600",
      icon: faCode,
      category: "database",
    },

    // DevOps & Deployment
    {
      name: "CI/CD",
      progress: 70,
      color: "bg-yellow-600",
      icon: faCogs,
      category: "devops",
    },
    {
      name: "Docker",
      progress: 65,
      color: "bg-blue-600",
      icon: faDocker,
      category: "devops",
    },
    {
      name: "Railway & Vercel",
      progress: 80,
      color: "bg-gray-600",
      icon: faCloud,
      category: "devops",
    },

    // Version Control
    {
      name: "Git & GitHub",
      progress: 85,
      color: "bg-gray-500",
      icon: faGithub,
      category: "version-control",
    },
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

  // Filter technologies based on the selected category
  const filteredTechnologies = technologies.filter(
    (tech) => tech.category === selectedCategory
  );

  return (
    <section className="relative py-10 bg-gray-900 text-white" id="skills">
      <h1 className="text-center mb-9 text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
        My Development Toolkit
      </h1>
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory("frontend")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "frontend" ? "bg-teal-500" : "bg-gray-700"
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setSelectedCategory("backend")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "backend" ? "bg-green-500" : "bg-gray-700"
          }`}
        >
          Backend
        </button>
        <button
          onClick={() => setSelectedCategory("database")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "database" ? "bg-indigo-500" : "bg-gray-700"
          }`}
        >
          Database
        </button>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          {selectedCategory === "frontend" && (
            <span className="text-teal-400">Frontend</span>
          )}
          {selectedCategory === "backend" && (
            <span className="text-green-400">Backend</span>
          )}
          {selectedCategory === "database" && (
            <span className="text-indigo-400">Database</span>
          )}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-10 lg:mx-36">
          {filteredTechnologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Icon */}
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
