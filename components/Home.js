"use client";

import React from "react";
import Image from "next/image";
import myImg from "../pubilc/assets/img/photoOne.png";

const Home = () => {
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900">
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
        <div className="flex moving-circle justify-center items-start z-10 mt-20">
          <Image
            src={myImg}
            alt="My Image"
            width={100} // Adjust width for smaller image size
            height={100} // Adjust height for smaller image size
            className="rounded-full shadow-lg" // Rounded shape with shadow
          />
        </div>

        {/* Greeting Section */}
        <div className="relative z-10 text-center mt-6 ">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white  ">
            Hello, I'm <span className="text-blue-500">Bereket Mengaw</span> 👋
          </h1>
        </div>
        <div id="container " className="text-center my-5 text-white">
          <div id="flip" className="mb-3">
            <div>
              <div>Full Stack Developer</div>
            </div>
            <div>
              <div>Building Scalable Solutions</div>
            </div>
            <div>
              <div>Crafting the Web's Future</div>
            </div>
          </div>
          and I'm here to innovate with you!
        </div>
      </section>
    </div>
  );
};

export default Home;
