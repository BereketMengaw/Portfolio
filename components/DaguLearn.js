"use client";

import React, { useState } from "react";
import Image from "next/image";
import myimg from "../pubilc/assets/img/projectTwo.jpg";

const ProjectDetails = () => {
  const [activeSection, setActiveSection] = useState("database");

  // Hardcoded project details
  const project = {
    title: "E-Commerce Website",
    image: { myimg }, // Replace with your image path
    databaseDetails:
      "The database is organized using a relational model with PostgreSQL. Tables include Users, Products, Orders, and Reviews. Relationships are managed using foreign keys.",
    backendDetails:
      "The backend is built with Node.js and Express. It includes RESTful APIs for user authentication, product management, and order processing.",
    frontendDetails:
      "The frontend is developed using React and Next.js. It features a responsive design, state management with Redux, and integration with the backend APIs.",
    deploymentDetails:
      "The application is deployed on AWS using EC2 for the backend, S3 for static assets, and RDS for the database. CI/CD is managed with GitHub Actions.",
  };

  // Define the content for each section
  const sections = {
    database: {
      title: "Database Model",
      content: project.databaseDetails,
    },
    backend: {
      title: "Backend Architecture",
      content: project.backendDetails,
    },
    frontend: {
      title: "Frontend Integration",
      content: project.frontendDetails,
    },
    deployment: {
      title: "Deployment Process",
      content: project.deploymentDetails,
    },
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Project Photo */}
      <div className="relative h-64">
        <Image
          src={myimg}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Buttons for Sections */}
      <div className="flex flex-wrap justify-center gap-2 p-4 bg-gray-100">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeSection === key
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      {/* Display Active Section Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          {sections[activeSection].title}
        </h2>
        <p className="text-gray-700">{sections[activeSection].content}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
