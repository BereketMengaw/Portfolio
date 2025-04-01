"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Dummy data for projects
const projects = [
  {
    id: 1,
    title: "Project Name",
    date: "May 2024",
    img: "/projects/proj1.png",
    category: "Website Development",
  },
  {
    id: 2,
    title: "Project Name",
    date: "March 2024",
    img: "/projects/proj2.png",
    category: "Website Development",
  },
  {
    id: 3,
    title: "Project Name",
    date: "Jan 2024",
    img: "/projects/proj3.png",
    category: "Website Development",
  },
  {
    id: 4,
    title: "Project Name",
    date: "Sep 2023",
    img: "/projects/proj4.png",
    category: "Website Development",
  },
  {
    id: 5,
    title: "Project Name",
    date: "Aug 2023",
    img: "/projects/proj5.png",
    category: "IOS Development",
  },
];

// Tabs for filtering
const categories = [
  "IOS Development",
  "Website Development",
  "Android Development",
  "Backend Development",
  "Webflow Development",
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Website Development");

  return (
    <div className="relative bg-black text-white py-16 px-6 overflow-hidden">
      {/* Purple Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -right-32 bottom-0 w-64 h-64 bg-purple-800 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute left-1/2 top-1/3 w-96 h-96 bg-purple-700 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm rounded-full ${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300"
              } hover:bg-purple-500 transition-all duration-300 shadow-lg`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-10 place-items-center">
          {projects
            .filter((project) => project.category === activeCategory)
            .map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 flex flex-col items-center justify-center rounded-full overflow-hidden border-2 border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 shadow-xl"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={250}
                  height={250}
                  className="rounded-full brightness-75 hover:brightness-100 transition duration-300 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-full"></div>
                <div className="absolute top-6 left-6 text-xs sm:text-sm font-semibold bg-purple-600/80 px-2 py-1 rounded">
                  {project.date}
                </div>
                <div className="absolute bottom-6 text-lg font-semibold text-white group-hover:text-purple-300 transition">
                  {project.title} →
                </div>
              </motion.div>
            ))}
        </div>

        {/* See All Projects Button */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            SEE ALL PROJECTS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
