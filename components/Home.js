"use client";

import React from "react";
import Image from "next/image";
import myImg from "../app/image.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen mesh-bg flex items-center justify-center px-4 sm:px-8 py-24 overflow-hidden"
    >
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-purple-700/30 blur-[140px] animate-pulse-soft" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-fuchsia-700/20 blur-[160px] animate-pulse-soft" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.18),transparent_60%)]" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-6xl gap-10 md:gap-12">
        {/* Text Content */}
        <div className="text-white order-last md:order-first text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs sm:text-sm text-gray-200 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>

          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-purple-300 uppercase mb-3">
            Full-Stack Web Developer
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text neon-text">Bereket</span>
            <br />
            <span className="text-white/90">Mengaw</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mt-5 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build scalable SaaS products and high-performance web apps —
            focused on clean architecture, polished UX, and shipping fast.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-medium shadow-purple-glow transition-all"
            >
              View my work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass glass-hover text-white font-medium"
            >
              <Sparkles className="w-4 h-4 text-purple-300" />
              Let&apos;s talk
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-md mx-auto md:mx-0">
            {[
              { label: "Years", value: "3+" },
              { label: "Projects", value: "20+" },
              { label: "Stack", value: "Full" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl px-3 py-3 text-center"
              >
                <div className="text-xl font-bold text-white">{s.value}</div>
                <div className="text-[11px] uppercase tracking-widest text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center relative order-first md:order-last">
          <div className="relative">
            {/* Outer rotating gradient ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-cyan-400 blur-md opacity-60 animate-shimmer-bg" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500/60 via-fuchsia-500/60 to-cyan-400/60" />

            <div className="relative rounded-full overflow-hidden neon-ring bg-black">
              <Image
                src={myImg}
                alt="Bereket Mengaw"
                width={420}
                height={420}
                priority
                className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover object-[65%_40%]"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -left-4 top-10 hidden sm:flex glass rounded-2xl px-3 py-2 items-center gap-2 animate-float">
              <span className="text-xl">⚡</span>
              <div className="text-xs">
                <div className="text-white font-semibold">Fast iterations</div>
                <div className="text-gray-400">Ship weekly</div>
              </div>
            </div>
            <div
              className="absolute -right-4 bottom-10 hidden sm:flex glass rounded-2xl px-3 py-2 items-center gap-2 animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <span className="text-xl">🚀</span>
              <div className="text-xs">
                <div className="text-white font-semibold">SaaS builder</div>
                <div className="text-gray-400">DaguLearn</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-400 text-xs">
        <span>Scroll</span>
        <div className="h-8 w-[2px] bg-gradient-to-b from-purple-400 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Home;
