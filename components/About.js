import React from "react";
import bgImg from "../pubilc/assets/img/bgAddis.jpg"; // Make sure path is correct
import Service from "../components/Service";

function About() {
  return (
    <div id="about" className="relative min-h-screen">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>{" "}
        {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* About text section */}
        <div className="content h-1/2 flex items-center justify-center">
          <p className="subtitle handwritten text-2xl text-white mx-4 md:mx-32 text-center">
            &quot;Building scalable solutions, one line of code at a time.
            Turning innovative ideas into SaaS products that empower businesses
            to thrive.&quot;
          </p>
        </div>

        {/* Services section - now properly overlayed */}
        <div className="bg-black/70 backdrop-blur-sm">
          {" "}
          {/* Semi-transparent with blur */}
          <Service />
        </div>
      </div>
    </div>
  );
}

export default About;
