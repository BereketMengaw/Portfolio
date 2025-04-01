"use client";
import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description:
        "End-to-end web application development with modern architectures. I build scalable, performant solutions with React, Next.js, Node.js, and cloud technologies.",
      icon: "💻",
      highlight:
        "Built DaguLearn - Ethiopia's first YouTube course monetization platform",
      accentColor: "bg-purple-600",
    },
    {
      title: "SaaS Consultancy",
      description:
        "From ideation to scaling, I help transform your software vision into a profitable subscription business with proven growth frameworks.",
      icon: "📈",
      highlight: "Specialized in education technology platforms",
      accentColor: "bg-purple-700",
    },
    {
      title: "Problem Solving",
      description:
        "Technical debugging and system optimization. I love untangling complex problems and fixing performance bottlenecks.",
      icon: "🔧",
      highlight: "Dubbed 'The Solution Architect' by previous clients",
      accentColor: "bg-purple-800",
    },
    {
      title: "API Security & Protection",
      description:
        "Specialized in securing APIs and web applications, ensuring robust protection against threats. I implement best practices to safeguard data and prevent unauthorized access.",
      icon: "🔒",
      highlight:
        "Implemented OAuth 2.0 and JWT for secure API authentication across multiple platforms.",
      accentColor: "bg-blue-900",
    },
  ];

  return (
    <div className="relative bg-black text-white py-10 px-0 overflow-hidden">
      {/* Purple gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-purple-900 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute -right-1/4 bottom-0 w-[600px] h-[600px] bg-purple-800 rounded-full filter blur-[120px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-['Organiez'] tracking-tight">
            My <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your technical needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative group overflow-hidden rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-500 h-full ${service.accentColor} bg-opacity-10 backdrop-blur-sm`}
            >
              {/* Service Card Content */}
              <div className="p-8 h-full flex flex-col">
                {/* Icon Header */}
                <div className="mb-6 flex items-center">
                  <div
                    className={`text-3xl mr-4 ${service.accentColor} w-14 h-14 rounded-lg flex items-center justify-center`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-['Organiez'] tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Highlight */}
                <div className="mt-auto">
                  <div className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-3 before:w-1 before:bg-purple-500">
                    <p className="text-sm text-purple-300 font-medium">
                      {service.highlight}
                    </p>
                  </div>
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full ${service.accentColor} filter blur-[60px] opacity-20 group-hover:opacity-40 transition-all duration-500`}
                ></div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-2xl pointer-events-none transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-semibold text-lg shadow-xl group">
            <span className="relative z-10 flex items-center">
              Let&apos;s Build Something Amazing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
