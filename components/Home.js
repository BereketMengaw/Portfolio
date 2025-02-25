"use client";

import React from "react";
import Image from "next/image";
import myImg from "../pubilc/assets/img/photoOne.png";

const Home = () => {
  return (
    <div className=" h-screen max-h-[700px] bg-gray-100 dark:bg-gray-900">
      <section className="relative flex flex-col items-center justify-start h-full px-6 overflow-hidden">
        {/* Background Image Section */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(/assets/img/hero.jpg)", // Background image for the section
            filter: "brightness(50%)", // Apply brightness filter to background
          }}
        ></div>

        {/* Image Section at the top */}
        <div className="flex  justify-center items-start z-10 mt-20">
          <Image
            src={myImg}
            alt="My Image"
            width={100} // Adjust width for smaller image size
            height={100} // Adjust height for smaller image size
            className=" moving-circle shadow-lg" // Rounded shape with shadow
          />
        </div>

        {/* Greeting Section */}
        <div className="relative  text-center mt-6 ">
          <h1 className="md:text-6xl font-bold text-gray-800 dark:text-white  ">
            Hello, I'm <span className="text-blue-500">Bereket Mengaw</span>
          </h1>
        </div>

        <div id="container" className="text-center mb-5 text-white">
          <div id="flip" className="mb-3 text-3xl sm:text-4xl md:text-5xl ">
            <div>
              <div>Full Stack Developer</div>
            </div>
            <div>
              <div>Writing Clean & Efficient Code</div>
            </div>
            <div>
              <div>Turning Ideas into Scalable Solutions</div>
            </div>
          </div>
          <span className="hand text-3xl sm:text-4xl md:text-5xl">
            {" "}
            I'm here to innovate with you!
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
