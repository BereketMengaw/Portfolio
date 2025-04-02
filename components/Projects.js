"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faArrowLeft,
  faArrowRight,
  faExternalLinkAlt,
  faCode,
  faDatabase,
  faServer,
  faLock,
  faVideo,
  faCreditCard,
  faShieldAlt,
  faChartLine,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faPython,
  faVuejs,
  faJs,
  faDocker,
  faAws,
  faGoogle,
  faCss3Alt,
  faHtml5,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

// Project Images
import daguLearnMain from "../pubilc/assets/img/dagu.jpg";
import daguDashboard from "../pubilc/assets/dagu/creatorDash.jpg";
import daguCourseList from "../pubilc/assets/dagu/coursePag.jpg";
import daguChapterPage from "../pubilc/assets/dagu/chapterPage.jpg";
import daguPayment from "../pubilc/assets/dagu/redirectChapa.jpg";
import daguEarnings from "../pubilc/assets/dagu/checkEarning.jpg";
import daguAdmin from "../pubilc/assets/dagu/adminControl.jpg";

import banchiMain from "../pubilc/assets/img/projectThree.jpg";
import banchiTracking from "../pubilc/assets/banchi/two.jpg";

import misaleMain from "../pubilc/assets/misale/first.jpg";
import misaleParents from "../pubilc/assets/misale/parents.jpg";
import misaleTutors from "../pubilc/assets/misale/tutors.jpg";

import appleMain from "../pubilc/assets/img/ProjectFour.png";
import appleProduct from "../pubilc/assets/img/ProjectFour.png";

import udemyMain from "../pubilc/assets/img/udemy.jpg";
import udemyPlayer from "../pubilc/assets/img/udemy.jpg";

const projectsData = [
  {
    id: 1,
    title: "DaguLearn",
    description:
      "A comprehensive e-learning platform with creator monetization, course management, payment integration, and detailed analytics.",
    screenshots: [
      {
        image: daguLearnMain,
        caption: "Homepage featuring featured courses and categories",
      },
      {
        image: daguDashboard,
        caption: "Creator dashboard with analytics and course management",
      },
      {
        image: daguCourseList,
        caption: "Course browsing page with filters and search",
      },
      {
        image: daguChapterPage,
        caption: "Interactive course chapter with progress tracking",
      },
      {
        image: daguPayment,
        caption: "Secure payment integration with Chapa",
      },
      {
        image: daguEarnings,
        caption: "Earnings dashboard for content creators",
      },
      {
        image: daguAdmin,
        caption: "Admin control panel with user management",
      },
    ],
    githubLink: "https://github.com/BereketMengaw/dagulearnBackend.git",
    liveLink: "https://dagulearn.vercel.app",
    techStack: [
      { icon: faReact, name: "Next.js" },
      { icon: faCss3Alt, name: "Tailwind CSS" },
      { icon: faNodeJs, name: "Node.js" },
      { icon: faDatabase, name: "PostgreSQL" },
      { icon: faCreditCard, name: "Chapa Payment" },
      { icon: faVideo, name: "YouTube API" },
      { icon: faLock, name: "JWT Auth" },
      { icon: faShieldAlt, name: "Access Control" },
      { icon: faServer, name: "REST API" },
      { icon: faChartLine, name: "Analytics" },
    ],
    features: [
      "Next.js frontend with SSR capabilities",
      "Tailwind CSS for responsive design",
      "Node.js backend with Express",
      "PostgreSQL database management",
      "Chapa payment gateway integration",
      "YouTube API for video content",
      "JWT authentication system",
      "Role-based access control",
      "Comprehensive REST API",
      "Detailed analytics dashboard",
    ],
  },
  {
    id: 2,
    title: "Banchi Delivery",
    description:
      "A complete delivery management system with real-time tracking, order management, and customer portal.",
    screenshots: [
      {
        image: banchiMain,
        caption: "Main landing page with service offerings",
      },
      {
        image: banchiTracking,
        caption: "Real-time package tracking interface",
      },
    ],
    githubLink: "https://github.com/BereketMengaw/Delivery-Website.git",
    liveLink: "https://banchi-delivery-website.vercel.app/",
    techStack: [
      { icon: faReact, name: "Next.js" },
      { icon: faCss3Alt, name: "Tailwind CSS" },
      { icon: faPython, name: "Python" },
      { icon: faNodeJs, name: "Node.js" },
      { icon: faDatabase, name: "MongoDB" },
      { icon: faDocker, name: "Docker" },
      { icon: faAws, name: "AWS" },
      { icon: faMapMarkerAlt, name: "Geolocation" },
    ],
    features: [
      "Next.js frontend with responsive design",
      "Tailwind CSS for modern UI",
      "Python backend services",
      "Node.js API middleware",
      "MongoDB for flexible data storage",
      "Docker containerization",
      "AWS cloud deployment",
      "Real-time geolocation tracking",
    ],
  },
  {
    id: 3,
    title: "Misale Tutors",
    description:
      "Tutor matching platform with integrated scheduling, video conferencing, and management system.",
    screenshots: [
      {
        image: misaleMain,
        caption: "Homepage showcasing tutor specialties",
      },
      {
        image: misaleParents,
        caption: "Parent dashboard with booking interface",
      },
      {
        image: misaleTutors,
        caption: "Tutor profile and schedule management",
      },
    ],
    githubLink:
      "https://github.com/BereketMengaw/new-misale-tutor-website-.git",
    liveLink: "https://misaletutors.com",
    techStack: [
      { icon: faReact, name: "Next.js" },
      { icon: faGoogle, name: "Google API" },
      { icon: faNodeJs, name: "Node.js" },
      { icon: faCss3Alt, name: "Tailwind CSS" },
      { icon: faDatabase, name: "MongoDB" },
      { icon: faAws, name: "AWS" },
      { icon: faCalendarAlt, name: "Scheduling" },
      { icon: faBootstrap, name: "Bootstrap" },
    ],
    features: [
      "Next.js for server-side rendering",
      "Google Calendar API integration",
      "Node.js backend services",
      "Tailwind CSS with Bootstrap components",
      "MongoDB database",
      "AWS hosting and storage",
      "Advanced scheduling system",
      "Tutor-parent matching algorithm",
    ],
  },
  {
    id: 4,
    title: "Apple Website Clone",
    description:
      "Pixel-perfect responsive clone of Apple's official website with smooth animations and transitions.",
    screenshots: [
      {
        image: appleMain,
        caption: "Main product showcase section",
      },
      {
        image: appleProduct,
        caption: "Product detail page with specifications",
      },
    ],
    githubLink:
      "https://github.com/BereketMengaw/Apple-Website-React---replica-.git",
    liveLink: "#",
    techStack: [
      { icon: faReact, name: "React" },
      { icon: faHtml5, name: "HTML5" },
      { icon: faCss3Alt, name: "CSS3" },
      { icon: faJs, name: "JavaScript" },
      { icon: faBootstrap, name: "Bootstrap" },
    ],
    features: [
      "React component architecture",
      "Semantic HTML5 markup",
      "Advanced CSS3 animations",
      "Vanilla JavaScript interactions",
      "Bootstrap grid system",
      "Responsive design",
      "Cross-browser compatibility",
      "Performance optimized",
    ],
  },
  {
    id: 5,
    title: "Udemy Clone",
    description:
      "Online learning platform with course management, video streaming, and student progress tracking.",
    screenshots: [
      {
        image: udemyMain,
        caption: "Course catalog page with categories",
      },
      {
        image: udemyPlayer,
        caption: "Video lesson player interface",
      },
    ],
    githubLink: "https://github.com/yourusername/project-five",
    liveLink: "#",
    techStack: [
      { icon: faVuejs, name: "Vue.js" },
      { icon: faNodeJs, name: "Node.js" },
      { icon: faDatabase, name: "PostgreSQL" },
      { icon: faAws, name: "AWS S3" },
      { icon: faVideo, name: "Video Streaming" },
    ],
    features: [
      "Vue.js frontend framework",
      "Node.js backend API",
      "PostgreSQL database",
      "AWS S3 for media storage",
      "Video streaming capabilities",
      "Course management system",
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
      className="px-4 md:px-16 py-12 bg-gradient-to-b from-purple-900/50 to-black overflow-hidden"
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
                <h3 className="text-xl font-bold text-white">
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

      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative max-w-6xl mx-auto my-8 px-4">
            <div className="relative bg-gray-900 rounded-xl border border-purple-900/50 overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-all"
              >
                <FontAwesomeIcon icon={faTimes} className="text-white" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <Image
                    fill
                    src={selectedProject.screenshots[currentImageIndex].image}
                    alt={selectedProject.screenshots[currentImageIndex].caption}
                    className="w-full h-full object-cover object-center object-scale-down"
                  />

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

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/80 px-3 py-1 rounded-full text-sm text-white">
                    {currentImageIndex + 1} /{" "}
                    {selectedProject.screenshots.length}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                    <p className="text-white text-sm">
                      {selectedProject.screenshots[currentImageIndex].caption}
                    </p>
                  </div>
                </div>

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
