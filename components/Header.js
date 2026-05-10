"use client";

import React, { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

      const sections = NAV_ITEMS.map((s) => s.toLowerCase());
      const scrollPosition = window.scrollY + 120;
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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`mx-auto mt-3 max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "translate-y-0" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "glass-strong shadow-purple-glow"
              : "glass"
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-2 text-white font-semibold tracking-tight"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
            </span>
            <span className="text-base sm:text-lg">
              Bereket<span className="text-purple-400">.M</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase();
              const active = currentSection === id;
              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      active
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {active && (
                      <span className="absolute inset-0 rounded-full bg-purple-500/20 border border-purple-400/40 shadow-purple-glow" />
                    )}
                    <span className="relative">{item}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white shadow-purple-glow transition-all"
          >
            Hire me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={toggleMenu}
        />
        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm glass-strong p-6 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="text-white font-semibold">
              Bereket<span className="text-purple-400">.M</span>
            </span>
            <button
              className="text-gray-300 p-2 rounded-full hover:bg-white/10"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>

          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase();
              const active = currentSection === id;
              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    onClick={toggleMenu}
                    className={`block px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                      active
                        ? "bg-purple-500/15 border border-purple-400/30 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
            <li className="mt-4">
              <a
                href="#contact"
                onClick={toggleMenu}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium shadow-purple-glow"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
