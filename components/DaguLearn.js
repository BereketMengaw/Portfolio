"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import One from "../pubilc/assets/img/projectTwo.jpg"; // ✅ Fixed 'pubilc' typo

import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const ProjectDetails = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = {
    title: "E-Commerce Website",
    images: [One, One, One, One, One],
    overview: (
      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <p className="font-semibold text-white">
          This project is a platform built around{" "}
          <span className="text-blue-600">YouTube</span>, designed to help
          content creators in Ethiopia and similar regions monetize their
          educational content effectively.
        </p>
        <p className="bg-blue-50 p-4 rounded-lg shadow-md border-l-4 border-blue-600">
          Since{" "}
          <span className="font-bold">
            YouTube does not support monetization
          </span>{" "}
          for creators in Ethiopia, this platform provides an innovative
          solution: creators can make their YouTube videos private and share
          access through private links.
        </p>
        <p className="italic text-white">
          Students who want to view the content can purchase access, ensuring
          creators are paid for their work while learners receive affordable,
          high-quality education.
        </p>
      </div>
    ),
    functionality: (
      <div className="text-white text-lg leading-relaxed space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">Key Features:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-gray-500">
              ✅ User Authentication:
            </span>{" "}
            Secure login/signup for users and creators.
          </li>
          <li>
            <span className="font-bold text-gray-100">
              💳 Payment Integration:
            </span>{" "}
            Accepts payments via <span className="text-blue-600">Chapa</span>{" "}
            for course access.
          </li>
          <li>
            <span className="font-bold text-gray-900">
              🔒 Course Access Control:
            </span>{" "}
            Only enrolled users can view private YouTube videos.
          </li>
          <li>
            <span className="font-bold text-gray-900">🎥 Creator Tools:</span>
            <ul className="list-[circle] list-inside pl-4 space-y-1">
              <li>Upload courses & set prices.</li>
              <li>Monitor enrollments & earnings.</li>
              <li>Define creator profiles (bio, expertise, etc.).</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-gray-900">📊 Dashboards:</span>
            <ul className="list-[circle] list-inside pl-4 space-y-1">
              <li>
                <span className="text-blue-600">Creator Dashboard</span>: Manage
                courses & track earnings.
              </li>
              <li>
                <span className="text-blue-600">User Dashboard</span>: Access
                purchased courses.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
    technologyStack: (
      <div className="text-gray-700 text-lg leading-relaxed">
        <h3 className="text-xl font-semibold text-blue-600">
          🚀 Tech Stack Used:
        </h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold text-gray-900">Frontend</h4>

            <FaReact className="text-blue-600" />
            <p className="text-blue-600">React, Next.js</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold text-gray-900">Backend</h4>
            <div className="flex flex-row">
              <FaNodeJs className="text-blue-600 mx-4" />
              <SiExpress className="text-blue-600 " />
            </div>

            <p className="text-blue-600">Node.js, Express</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold text-gray-900">Database</h4>
            <div className="flex flex-row">
              <FaNodeJs className="text-blue-600 mx-4" />
              <SiExpress className="text-blue-600 " />
            </div>
            <p className="text-blue-600">PostgreSQL</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold text-gray-900">Deployment</h4>
            <div className="flex flex-row">
              <FaNodeJs className="text-blue-600 mx-4" />
              <SiExpress className="text-blue-600 " />
            </div>
            <p className="text-blue-600">AWS (EC2, S3, RDS)</p>
          </div>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const sections = {
    overview: { title: "📌 What is the Project?", content: project.overview },
    functionality: {
      title: "⚙️ Functionality",
      content: project.functionality,
    },
    technology: {
      title: "🛠️ Technology Stack",
      content: project.technologyStack,
    },
  };

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Project Image Slideshow */}
        <div className="relative h-[400px] w-full bg-white">
          <Image
            src={project.images[currentImageIndex]}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg transition-opacity duration-1000 bg-white"
          />
        </div>

        {/* Section Buttons */}
        <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-900">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                activeSection === key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-200 hover:shadow-md"
              }`}
            >
              {sections[key].title}
            </button>
          ))}
        </div>

        {/* Display Active Section Content */}
        <div className="p-8 bg-gray-800">
          <h2 className="text-3xl font-bold mb-4 text-white">
            {sections[activeSection].title}
          </h2>
          <div>{sections[activeSection].content}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
