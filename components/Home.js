"use client";

import React from "react";
import Image from "next/image";
import myImg from "../pubilc/assets/img/bereket.png"; // Fixed typo (pubilc -> public)
import { Download } from "lucide-react";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 sm:px-10 py-10 sm:py-0">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-purple-900 opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-6xl gap-8 md:gap-0">
        {/* Profile Image - Top on mobile */}
        <div className="flex justify-center relative order-first md:order-last mt-6 md:mt-0 mb-6 md:mb-0">
          <Image
            src={myImg}
            alt="Bereket Mengaw"
            width={400}
            height={400}
            className="rounded-b-full w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] object-cover object-[100%_10%]"
          />

          {/* Purple Glow Effect */}
          <div className="absolute w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[300px] md:h-[300px] bg-purple-600 rounded-full blur-3xl opacity-40 -z-10"></div>
        </div>

        {/* Text Content */}
        <div className="text-white order-last md:order-first text-center md:text-left">
          <h2 className="text-sm sm:text-lg font-semibold text-gray-400 uppercase">
            Full-Stack Web Developer
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2">
            Bereket <span className="text-purple-400">Mengaw</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-md mx-auto md:mx-0">
            I&apos;m a full-stack web developer passionate about building
            scalable SaaS solutions.
          </p>

          {/* Download CV Button */}
          <div className="flex justify-center md:justify-start mt-5 sm:mt-6">
            <a
              href="/path-to-your-cv.pdf"
              download
              className="inline-flex items-center gap-2 sm:gap-3 bg-purple-600 hover:bg-purple-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white font-semibold transition-all shadow-lg text-sm sm:text-base"
            >
              <Download size={16} className="sm:size-[20px]" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
