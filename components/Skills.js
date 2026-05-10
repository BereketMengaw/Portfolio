"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faBootstrap,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
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

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const technologies = [
    { name: "HTML", progress: 95, color: "bg-orange-500", icon: faHtml5, category: "frontend" },
    { name: "CSS", progress: 93, color: "bg-blue-500", icon: faCss3, category: "frontend" },
    { name: "JavaScript (ES6+)", progress: 97, color: "bg-yellow-500", icon: faJsSquare, category: "frontend" },
    { name: "Tailwind CSS", progress: 90, color: "bg-teal-500", icon: faWind, category: "frontend" },
    { name: "Bootstrap", progress: 86, color: "bg-purple-500", icon: faBootstrap, category: "frontend" },
    { name: "API Integration", progress: 98, color: "bg-indigo-500", icon: faGlobe, category: "frontend" },
    { name: "Next.js Routing", progress: 94, color: "bg-gray-500", icon: faReact, category: "frontend" },

    { name: "Node.js", progress: 94, color: "bg-green-500", icon: faNodeJs, category: "backend" },
    { name: "Express.js", progress: 95, color: "bg-blue-700", icon: faServer, category: "backend" },
    { name: "JWT Authentication", progress: 97, color: "bg-red-500", icon: faLock, category: "backend" },
    { name: "Payment Integration", progress: 95, color: "bg-green-500", icon: faCreditCard, category: "backend" },
    { name: "Access Control & RBAC", progress: 98, color: "bg-gray-200", icon: faUserShield, category: "backend" },
    { name: "API Development (RESTful)", progress: 94, color: "bg-yellow-600", icon: faCode, category: "backend" },

    { name: "Database Modeling", progress: 90, color: "bg-green-500", icon: faDatabase, category: "database" },
    { name: "SQL", progress: 94, color: "bg-blue-700", icon: faDatabase, category: "database" },
    { name: "MongoDB", progress: 90, color: "bg-green-600", icon: faDatabase, category: "database" },
    { name: "Mongoose ODM", progress: 85, color: "bg-red-600", icon: faDatabase, category: "database" },

    { name: "CI/CD", progress: 90, color: "bg-yellow-600", icon: faCogs, category: "devops" },
    { name: "Docker", progress: 85, color: "bg-blue-600", icon: faDocker, category: "devops" },
    { name: "Vercel Deployment", progress: 95, color: "bg-black", icon: faCloud, category: "devops" },

    { name: "Chrome DevTools", progress: 90, color: "bg-blue-400", icon: faBug, category: "debugging" },
    { name: "React DevTools", progress: 85, color: "bg-cyan-500", icon: faBug, category: "debugging" },
    { name: "Node.js Debugger", progress: 80, color: "bg-green-400", icon: faBug, category: "debugging" },
    { name: "Next.js Error Handling", progress: 85, color: "bg-gray-400", icon: faBug, category: "debugging" },
    { name: "API Testing (Postman)", progress: 85, color: "bg-orange-500", icon: faSearch, category: "debugging" },
    { name: "Logging & Monitoring", progress: 70, color: "bg-purple-400", icon: faSearch, category: "debugging" },

    { name: "JWT Security", progress: 80, color: "bg-red-500", icon: faShieldAlt, category: "security" },
    { name: "CORS Implementation", progress: 75, color: "bg-blue-500", icon: faShieldAlt, category: "security" },
    { name: "Helmet.js (Secure Headers)", progress: 80, color: "bg-green-600", icon: faShieldVirus, category: "security" },
    { name: "CSRF Protection", progress: 70, color: "bg-yellow-500", icon: faShieldAlt, category: "security" },
    { name: "Rate Limiting", progress: 75, color: "bg-purple-500", icon: faShieldVirus, category: "security" },
    { name: "Input Validation/Sanitization", progress: 85, color: "bg-indigo-500", icon: faShieldAlt, category: "security" },
  ];

  const filteredTechnologies = technologies.filter(
    (tech) => tech.category === selectedCategory
  );

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
      id="skills"
      className="relative py-24 px-4 sm:px-8 mesh-bg text-white w-full overflow-hidden"
    >
      <div className="absolute -right-24 -top-24 w-[28rem] h-[28rem] rounded-full bg-purple-700/15 blur-[140px] pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 w-[28rem] h-[28rem] rounded-full bg-fuchsia-700/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-purple-200 mb-5">
            Skills
          </span>
          <h2 className="section-heading">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            The technologies I use to design, build, and ship modern products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {Object.keys(categoryTitles).map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active
                    ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-purple-glow"
                    : "glass glass-hover text-gray-300"
                }`}
              >
                {categoryTitles[category].split(" ")[0]}
              </button>
            );
          })}
        </div>

        <h3 className="text-lg font-medium text-center mb-8 text-purple-200/90">
          {categoryTitles[selectedCategory]}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={`${selectedCategory}-${index}`}
              className="glass glass-hover rounded-2xl p-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl ${tech.color}/20 border border-white/10 flex items-center justify-center w-12 h-12`}
                >
                  <FontAwesomeIcon
                    icon={tech.icon}
                    className={`text-2xl ${tech.color.replace("bg-", "text-")}`}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="font-medium text-white text-sm">
                      {tech.name}
                    </span>
                    <span className="text-xs font-mono text-purple-300">
                      {tech.progress}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-700"
                      style={{ width: `${tech.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
