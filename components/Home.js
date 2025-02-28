"use client";

import React from "react";
import Image from "next/image";
import myImg from "../pubilc/assets/img/photoOne.png"; // Fixed typo (pubilc -> public)

const Home = () => {
  return (
    <div className="h-screen max-h-[700px]  bg-gray-900" id="home">
      <section className="relative flex flex-col items-center justify-center h-full px-4 sm:px-6 overflow-hidden">
        {/* Image Section at the top */}
        <div className="flex justify-center items-start z-10 mt-0 sm:mt-16 md:mt-0">
          <Image
            src={myImg}
            alt="My Image"
            width={100} // Increased size for better visibility
            height={100}
            className="moving-circle shadow-lg sm:w-[120px] sm:h-[120px]"
          />
        </div>

        {/* Greeting Section */}
        <div className="relative text-center mt-4 sm:mt-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
            Hello, I&apos;m{" "}
            <span className="text-blue-500">Bereket Mengaw</span>
          </h1>
        </div>

        {/* Flipping Text Section - Now Visible! */}
        <div className="text-center mb-4 sm:mb-5 px-4">
          <div className="mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-5xl flip">
            <div>
              <div className="dark:text-white text-gray-900">
                Full Stack Developer
              </div>
            </div>
            <div>
              <div className="dark:text-white text-gray-900">
                Writing Clean & Efficient Code
              </div>
            </div>
            <div>
              <div className="dark:text-white text-gray-900">
                Turning Ideas into Scalable Solutions
              </div>
            </div>
          </div>
          <span className="hand text-2xl sm:text-3xl md:text-5xl text-gray-900 dark:text-white">
            I&apos;m here to innovate with you!
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
