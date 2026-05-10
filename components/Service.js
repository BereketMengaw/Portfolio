"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description:
        "End-to-end product engineering with React, Next.js, Node.js, and cloud-native architectures. Built for scale, polished for users.",
      icon: "💻",
      highlight: "Built DaguLearn — Ethiopia's first YouTube course monetization platform",
    },
    {
      title: "SaaS Consultancy",
      description:
        "From idea validation to subscription growth — proven frameworks for shipping a profitable software product.",
      icon: "📈",
      highlight: "Specialized in education-tech platforms",
    },
    {
      title: "Problem Solving",
      description:
        "Debugging, performance tuning, and untangling complex systems. I dig until the root cause is gone.",
      icon: "🔧",
      highlight: "Dubbed 'The Solution Architect' by previous clients",
    },
    {
      title: "API Security & Protection",
      description:
        "Hardening APIs and web apps with industry best practices — OAuth 2.0, JWT, rate limiting, and defense-in-depth.",
      icon: "🔒",
      highlight: "Implemented OAuth 2.0 + JWT across multiple production platforms",
    },
  ];

  return (
    <div className="relative bg-black text-white py-24 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[40rem] h-[40rem] bg-purple-700/15 rounded-full blur-[140px]" />
        <div className="absolute -right-1/4 bottom-0 w-[36rem] h-[36rem] bg-fuchsia-700/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-purple-200 mb-5">
            What I Do
          </span>
          <h2 className="section-heading">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            Comprehensive solutions tailored to your technical needs — from
            architecture to launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative glass glass-hover rounded-3xl p-6 h-full flex flex-col"
            >
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-purple-300" />
              </div>

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600/30 to-fuchsia-600/20 border border-purple-500/30 flex items-center justify-center text-2xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="mt-5 pt-4 border-t border-white/5">
                <p className="text-xs text-purple-300/90 leading-snug">
                  {service.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-medium shadow-purple-glow transition-all"
            onClick={() =>
              window.open(
                "https://www.upwork.com/freelancers/~01d919908808489a42",
                "_blank"
              )
            }
          >
            Let&apos;s build something amazing
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
