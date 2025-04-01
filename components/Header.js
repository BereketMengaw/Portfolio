"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import myImg from "../pubilc/assets/img/hero.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Adjust offset as needed

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transparet ">
      <nav className="flex justify-between items-center h-16 mt-3 px-6 text-white">
        <a href="#" className="text-second-color font-semibold text-xl">
          {currentSection === "home" ? (
            <h1 className="black slide-top">Bereket M.</h1>
          ) : (
            <Image
              src={myImg}
              alt="My Image"
              width={50} // Adjust width for smaller image size
              height={50} // Adjust height for smaller image size
              className="moving-circle shadow-lg" // Rounded shape with shadow
            />
          )}
        </a>

        {/* ✅ Desktop Navigation */}
        <ul className="hidden menu md:flex space-x-6 justify-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <li
                key={item}
                className="menu justify-center opacity-0 nav-item-down animate-[slide-top-nav_0.5s_ease-out_both]"
                style={{ animationDelay: `${index * 100}ms` }} // ✅ Corrected animation delay
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-second-color hover:text-primary"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* ✅ Mobile Menu Button  (Only Visible on Small Screens) */}
        <button
          className="md:hidden mobile-menu text-second-color text-2xl"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
      </nav>

      {/* ✅ Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 flex justify-end transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* ✅ Overlay (Click to Close) */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>

        {/* ✅ Sidebar Menu */}
        <div className="w-4/5 h-full bg-[#1a1a2e] text-white shadow-lg p-6 relative right-0">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl text-gray-300"
            onClick={toggleMenu}
          >
            <X />
          </button>

          <ul className="flex flex-col space-y-6 text-center mt-10">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium hover:text-gray-400"
                  onClick={toggleMenu} // Close menu when clicking a link
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
