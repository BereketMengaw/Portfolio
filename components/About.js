import React from "react";
import bgImg from "../pubilc/assets/img/bgAddis.jpg";
import Service from "../components/Service";

function About() {
  return (
    <section id="about" className="relative w-full">
      {/* Quote / hero */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.18),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-purple-200 mb-6">
            About
          </span>
          <p className="handwritten text-3xl sm:text-4xl md:text-5xl text-white leading-snug">
            &ldquo;Building scalable solutions, one line of code at a time —
            turning ideas into{" "}
            <span className="gradient-text">SaaS products</span> that empower
            businesses to thrive.&rdquo;
          </p>
          <div className="neon-divider mx-auto mt-10 w-40" />
          <p className="text-gray-400 mt-6 text-sm sm:text-base">
            Bereket Mengaw — Full-Stack Engineer · Addis Ababa, Ethiopia
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="bg-black">
        <Service />
      </div>
    </section>
  );
}

export default About;
