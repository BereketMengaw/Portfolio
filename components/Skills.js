"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// Brand Icons (Logos)
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faBootstrap,
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
  faBug,
  faShieldAlt,
  faSearch,
  faShieldVirus,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

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
      progress: 93,
      color: "bg-blue-500",
      icon: faCss3,
      category: "frontend",
    },
    {
      name: "JavaScript (ES6+)",
      progress: 97,
      color: "bg-yellow-500",
      icon: faJsSquare,
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      progress: 90,
      color: "bg-teal-500",
      icon: faWind,
      category: "frontend",
    },
    {
      name: "Bootstrap",
      progress: 86,
      color: "bg-purple-500",
      icon: faBootstrap,
      category: "frontend",
    },
    {
      name: "API Integration",
      progress: 98,
      color: "bg-indigo-500",
      icon: faGlobe,
      category: "frontend",
    },
    {
      name: "Next.js Routing",
      progress: 94,
      color: "bg-gray-500",
      icon: faReact,
      category: "frontend",
    },

    // Backend Technologies
    {
      name: "Node.js",
      progress: 94,
      color: "bg-green-500",
      icon: faNodeJs,
      category: "backend",
    },
    {
      name: "Express.js",
      progress: 95,
      color: "bg-blue-700",
      icon: faServer,
      category: "backend",
    },
    {
      name: "JWT Authentication",
      progress: 97,
      color: "bg-red-500",
      icon: faLock,
      category: "backend",
    },
    {
      name: "Payment Integration",
      progress: 95,
      color: "bg-green-500",
      icon: faCreditCard,
      category: "backend",
    },
    {
      name: "Access Control & RBAC",
      progress: 98,
      color: "bg-gray-200",
      icon: faUserShield,
      category: "backend",
    },
    {
      name: "API Development (RESTful)",
      progress: 94,
      color: "bg-yellow-600",
      icon: faCode,
      category: "backend",
    },

    // Database Technologies
    {
      name: "Database Modeling",
      progress: 90,
      color: "bg-green-500",
      icon: faDatabase,
      category: "database",
    },
    {
      name: "SQL",
      progress: 94,
      color: "bg-blue-700",
      icon: faDatabase,
      category: "database",
    },
    {
      name: "MongoDB",
      progress: 90,
      color: "bg-green-600",
      icon: faDatabase,
      category: "database",
    },
    {
      name: "Mongoose ODM",
      progress: 85,
      color: "bg-red-600",
      icon: faDatabase,
      category: "database",
    },

    // DevOps & Deployment
    {
      name: "CI/CD",
      progress: 90,
      color: "bg-yellow-600",
      icon: faCogs,
      category: "devops",
    },
    {
      name: "Docker",
      progress: 85,
      color: "bg-blue-600",
      icon: faDocker,
      category: "devops",
    },
    {
      name: "Vercel Deployment",
      progress: 95,
      color: "bg-black",
      icon: faCloud,
      category: "devops",
    },

    // Version Control

    // Debugging Skills
    {
      name: "Chrome DevTools",
      progress: 90,
      color: "bg-blue-400",
      icon: faBug,
      category: "debugging",
    },
    {
      name: "React DevTools",
      progress: 85,
      color: "bg-cyan-500",
      icon: faBug,
      category: "debugging",
    },
    {
      name: "Node.js Debugger",
      progress: 80,
      color: "bg-green-400",
      icon: faBug,
      category: "debugging",
    },
    {
      name: "Next.js Error Handling",
      progress: 85,
      color: "bg-gray-400",
      icon: faBug,
      category: "debugging",
    },
    {
      name: "API Testing (Postman)",
      progress: 85,
      color: "bg-orange-500",
      icon: faSearch,
      category: "debugging",
    },
    {
      name: "Logging & Monitoring",
      progress: 70,
      color: "bg-purple-400",
      icon: faSearch,
      category: "debugging",
    },

    // Security Skills
    {
      name: "JWT Security",
      progress: 80,
      color: "bg-red-500",
      icon: faShieldAlt,
      category: "security",
    },
    {
      name: "CORS Implementation",
      progress: 75,
      color: "bg-blue-500",
      icon: faShieldAlt,
      category: "security",
    },
    {
      name: "Helmet.js (Secure Headers)",
      progress: 80,
      color: "bg-green-600",
      icon: faShieldVirus,
      category: "security",
    },
    {
      name: "CSRF Protection",
      progress: 70,
      color: "bg-yellow-500",
      icon: faShieldAlt,
      category: "security",
    },
    {
      name: "Rate Limiting",
      progress: 75,
      color: "bg-purple-500",
      icon: faShieldVirus,
      category: "security",
    },
    {
      name: "Input Validation/Sanitization",
      progress: 85,
      color: "bg-indigo-500",
      icon: faShieldAlt,
      category: "security",
    },
  ];

  // Filter technologies based on the selected category
  const filteredTechnologies = technologies.filter(
    (tech) => tech.category === selectedCategory
  );

  // Category titles mapping
  const categoryTitles = {
    frontend: "Frontend Technologies",
    backend: "Backend Technologies",
    database: "Database Technologies",
    devops: "DevOps & Deployment",

    debugging: "Debugging & Troubleshooting",
    security: "Security Practices",
  };

  return (
    <section
      className="relative py-16 bg-gray-900 text-white w-full overflow-hidden"
      id="skills"
    >
      {/* Subtle purple background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-purple-900/5 z-0"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-purple-800/10 blur-3xl -z-10"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl -z-10"></div>

      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 font-['Organiez'] tracking-tight text-center">
          My <span className="text-purple-400">Toolkit</span>
        </h2>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {Object.keys(categoryTitles).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-purple-600 text-white shadow-purple-glow"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {categoryTitles[category].split(" ")[0]}
            </button>
          ))}
        </div>

        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-purple-300">
            {categoryTitles[selectedCategory]}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${tech.color}/20`}>
                    <FontAwesomeIcon
                      icon={tech.icon}
                      className={`text-3xl ${tech.color.replace(
                        "bg-",
                        "text-"
                      )}`}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-100">
                        {tech.name}
                      </span>
                      <span className="font-medium text-purple-300">
                        {tech.progress}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tech.color} transition-all duration-500`}
                        style={{ width: `${tech.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
