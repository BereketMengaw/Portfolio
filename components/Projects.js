"use client";

import React, { useState, useEffect, useCallback } from "react";
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

import niceyardMain from "../app/niceyard.png";
import niceyardOne from "../app/niceyard one.png";
import brhanMain from "../app/brhan.png";

const projectsData = [
  {
    id: 1,
    title: "NiceYard",
    description:
      "Mobile-first payment platform built for lawn care professionals. Snap a photo of finished work and get paid instantly — no invoices, no chasing receipts.",
    screenshots: [
      {
        image: niceyardOne,
        caption: "Snap a photo. Get paid — proof-based payment flow",
      },
      {
        image: niceyardMain,
        caption: "Receipts via SMS and securely stored cards on file",
      },
    ],
    githubLink: "",
    liveLink: "https://niceyard.app",
    techStack: [
      { icon: faReact, name: "Next.js" },
      { icon: faCss3Alt, name: "Tailwind CSS" },
      { icon: faNodeJs, name: "Node.js" },
      { icon: faCreditCard, name: "Stripe" },
      { icon: faLock, name: "Apple Pay" },
      { icon: faServer, name: "REST API" },
    ],
    features: [
      "Photo-based proof of work triggers instant charge",
      "Stripe-powered secure payments and card-on-file",
      "Automatic SMS receipts sent to clients",
      "In-text tipping for added gratuity",
      "Searchable client and receipt history",
      "Zero monthly subscription, guaranteed payout rates",
      "Mobile-first iOS experience with Apple Pay",
      "Bank-level security and instant deposits",
    ],
  },
  {
    id: 2,
    title: "Brhan",
    description:
      "Ethiopian-focused e-commerce marketplace featuring Habesha traditional dresses, cultural goods, food, books, and wellness products curated for the diaspora.",
    screenshots: [
      {
        image: brhanMain,
        caption: "Marketplace homepage with categories and top-rated products",
      },
    ],
    githubLink: "",
    liveLink: "https://brhan.io",
    techStack: [
      { icon: faReact, name: "Next.js" },
      { icon: faCss3Alt, name: "Tailwind CSS" },
      { icon: faNodeJs, name: "Node.js" },
      { icon: faDatabase, name: "MongoDB" },
      { icon: faCreditCard, name: "Stripe" },
      { icon: faServer, name: "REST API" },
    ],
    features: [
      "Curated marketplace for Habesha and Ethiopian goods",
      "Categories spanning gifts, books, food & spices, clothing, and wellness",
      "Top-rated products and seller storefronts",
      "Search across the full product catalog",
      "Wishlist and saved-items support",
      "Secure checkout with Stripe",
      "Responsive Next.js frontend",
      "Optimized product imagery and listings",
    ],
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  }, []);

  const nextImage = useCallback(() => {
    setSelectedProject((current) => {
      if (!current) return current;
      setCurrentImageIndex((prev) => (prev + 1) % current.screenshots.length);
      return current;
    });
  }, []);

  const prevImage = useCallback(() => {
    setSelectedProject((current) => {
      if (!current) return current;
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + current.screenshots.length) % current.screenshots.length
      );
      return current;
    });
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject, closeModal, nextImage, prevImage]);

  return (
    <section
      id="projects"
      className="relative px-4 sm:px-8 py-24 mesh-bg overflow-hidden"
    >
      <div className="absolute -left-24 top-1/3 w-[28rem] h-[28rem] rounded-full bg-purple-700/15 blur-[140px] pointer-events-none" />
      <div className="absolute -right-24 bottom-0 w-[32rem] h-[32rem] rounded-full bg-fuchsia-700/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-purple-200 mb-5">
            Selected Work
          </span>
          <h2 className="section-heading text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A handful of products I&apos;ve designed, built, and shipped — from
            education platforms to delivery systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group relative overflow-hidden rounded-3xl glass glass-hover cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.screenshots[0].image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-1.5">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full glass-strong flex items-center justify-center"
                    >
                      <FontAwesomeIcon
                        icon={tech.icon}
                        className="text-sm text-white"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="text-purple-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 whitespace-nowrap">
                    View
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[10px]"
                    />
                  </span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            onClick={closeModal}
          />

          <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-[#0b0612]/95 shadow-[0_30px_120px_-20px_rgba(168,85,247,0.45)]">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent z-10" />

            <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-white/10 bg-black/30 backdrop-blur-md">
              <div className="min-w-0 flex items-center gap-3">
                <span className="hidden sm:inline-flex w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.9)]" />
                <h2 className="text-lg sm:text-xl font-semibold text-white truncate tracking-tight">
                  {selectedProject.title}
                </h2>
                <span className="hidden md:inline-block text-xs font-mono text-purple-300/80 px-2 py-0.5 rounded-full border border-purple-400/30">
                  {String(selectedProject.id).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {selectedProject.liveLink &&
                  selectedProject.liveLink !== "#" && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-3.5 py-1.5 rounded-full text-xs font-medium shadow-purple-glow transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="mr-1.5 text-[11px]"
                      />
                      Visit
                    </a>
                  )}
                <button
                  onClick={closeModal}
                  aria-label="Close preview"
                  className="glass-strong hover:bg-purple-600/40 w-9 h-9 rounded-full flex items-center justify-center transition-all"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-white text-sm" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 relative bg-gradient-to-br from-[#15091f] via-[#1a0c28] to-[#0b0612] flex flex-col">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      fill
                      src={selectedProject.screenshots[currentImageIndex].image}
                      alt={selectedProject.screenshots[currentImageIndex].caption}
                      className="object-contain"
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      priority
                    />

                    {selectedProject.screenshots.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          aria-label="Previous screenshot"
                          className="absolute left-3 top-1/2 -translate-y-1/2 glass-strong hover:bg-purple-600/40 w-10 h-10 rounded-full flex items-center justify-center transition-all"
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
                          aria-label="Next screenshot"
                          className="absolute right-3 top-1/2 -translate-y-1/2 glass-strong hover:bg-purple-600/40 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-white"
                          />
                        </button>
                      </>
                    )}

                    <div className="absolute top-3 right-3 glass-strong px-2.5 py-1 rounded-full text-[11px] font-mono text-white/90">
                      {currentImageIndex + 1} /{" "}
                      {selectedProject.screenshots.length}
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 py-3 border-t border-white/5">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedProject.screenshots[currentImageIndex].caption}
                    </p>
                  </div>

                  {selectedProject.screenshots.length > 1 && (
                    <div className="px-5 sm:px-6 pb-4 pt-1">
                      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scroll-smooth">
                        {selectedProject.screenshots.map((shot, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            aria-label={`Show screenshot ${i + 1}`}
                            className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border transition-all ${
                              i === currentImageIndex
                                ? "border-purple-400 ring-2 ring-purple-400/50 scale-[1.03]"
                                : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={shot.image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-2 p-6 sm:p-7 lg:border-l border-white/10 bg-black/20">
                  <p className="text-gray-300 text-[15px] leading-relaxed mb-7">
                    {selectedProject.description}
                  </p>

                  <div className="mb-7">
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-300 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2.5">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400 shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-7">
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-300 mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center glass px-2.5 py-1.5 rounded-lg border border-white/5"
                        >
                          <FontAwesomeIcon
                            icon={tech.icon}
                            className="text-xs mr-1.5 text-purple-300"
                          />
                          <span className="text-gray-200 text-[11px]">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-2 border-t border-white/5">
                    {selectedProject.liveLink &&
                      selectedProject.liveLink !== "#" && (
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-purple-glow transition-all"
                        >
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="mr-2 text-xs"
                          />
                          Live Demo
                        </a>
                      )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center glass glass-hover text-white px-4 py-2.5 rounded-full text-sm font-medium border border-white/10"
                      >
                        <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />
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
    </section>
  );
}

export default Projects;
