"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faArrowLeft,
  faArrowRight,
  faExternalLinkAlt,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faPython,
  faVuejs,
  faAngular,
  faJs,
  faDocker,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

// Import for dagulearn
import img1 from "../pubilc/assets/img/dagu.jpg";
import dashboard from "../pubilc/assets/dagu/creatorDash.jpg";
import courseList from "../pubilc/assets/dagu/coursePag.jpg";
import chapterPage from "../pubilc/assets/dagu/chapterPage.jpg";
import chapa from "../pubilc/assets/dagu/redirectChapa.jpg";
import earning from "../pubilc/assets/dagu/checkEarning.jpg";
import admin from "../pubilc/assets/dagu/adminControl.jpg";

//Import for banchi

import foods from "../pubilc/assets/banchi/two.jpg";

//Import for misale

import misale from "../pubilc/assets/misale/first.jpg";
import parents from "../pubilc/assets/misale/parents.jpg";
import tutors from "../pubilc/assets/misale/tutors.jpg";

// Import your project images

import img3 from "../pubilc/assets/img/projectThree.jpg";
import img4 from "../pubilc/assets/img/ProjectFour.png";
import img5 from "../pubilc/assets/img/udemy.jpg";

// Complete projects data with multiple screenshots
const projectsData = [
  {
    id: 1,
    title: "DaguLearn",
    description:
      "An Ethiopian-based paid course-sharing platform designed for creators, offering full access control and powerful management tools.",
    screenshots: [
      {
        image: img1,
        caption: "Homepage featuring featured courses and categories",
      },
      {
        image: dashboard, // Add your actual dashboard image path
        caption: "Creator dashboard with analytics and course management",
      },
      {
        image: courseList, // Add your actual course page image path
        caption: "Course player with progress tracking",
      },
      {
        image: chapterPage, // Add your actual course page image path
        caption: "Course player with progress tracking",
      },
      {
        image: chapa, // Add your actual course page image path
        caption: "Course player with progress tracking",
      },
      {
        image: earning, // Add your actual course page image path
        caption: "Course player with progress tracking",
      },
      {
        image: admin, // Add your actual course page image path
        caption: "Course player with progress tracking",
      },
      {
        image: earning, // Add your actual course page image path
        caption: "Course player with progress tracking",
      },
    ],
    githubLink: "https://github.com/BereketMengaw/dagulearnBackend.git",
    liveLink: "https://dagulearn.vercel.app",
    techStack: [
      { icon: faReact, name: "React" },
      { icon: faNodeJs, name: "Node.js" },
      { icon: faJs, name: "JavaScript" },
      { icon: faDocker, name: "Docker" },
    ],
    features: [
      "Creator monetization platform",
      "Course management system",
      "Payment integration",
      "User progress tracking",
      "Full access control for creators",
    ],
  },
  {
    id: 2,
    title: "Banchi Delivery",
    description:
      "A practice project centered on delivery services. Though still in development, it has been successfully deployed with core functionality.",
    screenshots: [
      {
        image: img3,
        caption: "Main landing page with service offerings",
      },
      {
        image: foods, // Add your actual tracker image path
        caption: "Package tracking interface",
      },
    ],
    githubLink: "https://github.com/BereketMengaw/Delivery-Website.git",
    liveLink: "https://banchi-delivery-website.vercel.app/",
    techStack: [
      { icon: faPython, name: "Python" },
      { icon: faDocker, name: "Docker" },
      { icon: faAws, name: "AWS" },
    ],
    features: [
      "Delivery request system",
      "Package tracking functionality",
      "Admin dashboard",
      "User authentication",
    ],
  },
  {
    id: 3,
    title: "Misale Tutors",
    description:
      "A tutor agency website powered by Google API, optimizing functionality and user experience to connect students with qualified tutors.",
    screenshots: [
      {
        image: misale,
        caption: "Homepage showcasing tutor specialties",
      },
      {
        image: parents, // Add your actual booking image path
        caption: "Session booking interface",
      },
      {
        image: tutors, // Add your actual booking image path
        caption: "Session booking interface",
      },
    ],
    githubLink:
      "https://github.com/BereketMengaw/new-misale-tutor-website-.git",
    liveLink: "https://misaletutors.com",
    techStack: [
      { icon: faNodeJs, name: "Node.js" },
      { icon: faJs, name: "JavaScript" },
      { icon: faAws, name: "AWS" },
    ],
    features: [
      "Tutor matching algorithm",
      "Google Calendar integration",
      "Session booking system",
      "Review and rating functionality",
    ],
  },
  {
    id: 4,
    title: "Apple Website Clone",
    description:
      "A React-based clone of Apple's official website, replicating the modern design and smooth animations with custom implementations.",
    screenshots: [
      {
        image: img4,
        caption: "Main product showcase section",
      },
      {
        image: "/assets/img/apple-product.jpg", // Add your actual product page image path
        caption: "Product detail page with specifications",
      },
    ],
    githubLink:
      "https://github.com/BereketMengaw/Apple-Website-React---replica-.git",
    liveLink: "#", // Add your live link if available
    techStack: [
      { icon: faReact, name: "React" },
      { icon: faJs, name: "JavaScript" },
      { icon: faVuejs, name: "Vue" },
      { icon: faDocker, name: "Docker" },
    ],
    features: [
      "Responsive Apple-like design",
      "Smooth scroll animations",
      "Product showcase sections",
      "Mobile-first approach",
    ],
  },
  {
    id: 5,
    title: "Udemy Clone",
    description:
      "An online learning platform inspired by Udemy, featuring course management and student progress tracking.",
    screenshots: [
      {
        image: img5,
        caption: "Course catalog page",
      },
      {
        image: "/assets/img/udemy-player.jpg", // Add your actual player image path
        caption: "Video lesson player interface",
      },
    ],
    githubLink: "https://github.com/yourusername/project-five",
    liveLink: "#", // Add your live link if available
    techStack: [
      { icon: faAngular, name: "Angular" },
      { icon: faJs, name: "JavaScript" },
      { icon: faAws, name: "AWS" },
    ],
    features: [
      "Course management system",
      "Video content delivery",
      "Student progress tracking",
      "Instructor dashboard",
    ],
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % selectedProject.screenshots.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.screenshots.length) %
        selectedProject.screenshots.length
    );
  };

  return (
    <div
      id="projects"
      className="px-4 md:px-16 py-12 bg-gradient-to-b from-purple-900/50 to-black  overflow-hidden"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-12 font-['Organiez'] tracking-tight text-center text-white">
        My <span className="text-purple-700">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="group relative overflow-hidden rounded-xl border border-purple-900/50 hover:border-purple-500/70 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.screenshots[0].image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white ">
                  {project.title}
                </h3>
                <p className="text-purple-300 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <div key={i} className="bg-gray-800/80 p-2 rounded-full">
                  <FontAwesomeIcon
                    icon={tech.icon}
                    className="text-lg text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative max-w-6xl mx-auto my-8 px-4">
            <div className="relative bg-gray-900 rounded-xl border border-purple-900/50 overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-all"
              >
                <FontAwesomeIcon icon={faTimes} className="text-white" />
              </button>

              {/* Modal Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Gallery Section */}
                <div className="relative h-96 lg:h-auto">
                  <Image
                    fill
                    src={selectedProject.screenshots[currentImageIndex].image}
                    alt={selectedProject.screenshots[currentImageIndex].caption}
                    className="w-full h-full object-cover object-center object-scale-down"
                  />

                  {/* Navigation Arrows */}
                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-purple-600/80 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                      >
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="text-white"
                        />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-purple-600/80 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white"
                        />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/80 px-3 py-1 rounded-full text-sm text-white">
                    {currentImageIndex + 1} /{" "}
                    {selectedProject.screenshots.length}
                  </div>

                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                    <p className="text-white text-sm">
                      {selectedProject.screenshots[currentImageIndex].caption}
                    </p>
                  </div>
                </div>

                {/* Text Content Section */}
                <div className="p-8 overflow-y-auto max-h-[32rem]">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>

                  <p className="text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center bg-gray-800/50 px-3 py-2 rounded-lg"
                        >
                          <FontAwesomeIcon
                            icon={tech.icon}
                            className="text-lg mr-2"
                          />
                          <span className="text-gray-300 text-sm">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.liveLink &&
                      selectedProject.liveLink !== "#" && (
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="mr-2"
                          />
                          Live Demo
                        </a>
                      )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <FontAwesomeIcon icon={faCode} className="mr-2" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
