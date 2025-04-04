"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Script from "next/script";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white p-8"
    >
      {/* Left Side - Let&apos;s Connect and Social Media Buttons */}
      <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:ml-52">
        {/* Personal Information */}
        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
          Bereket Mengaw
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center md:text-left">
          Fullstack Developer | Tech Enthusiast
        </p>
        <div className="mb-8 text-center md:text-left">
          <p className="text-gray-700 mb-2">
            📧 Email:{" "}
            <a
              href="mailto:Bereketmengaw111@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Bereketmengaw111@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            📞 Phone:{" "}
            <a
              href="tel:+251947328262"
              className="text-blue-500 hover:underline"
            >
              +251947328262
            </a>
          </p>
          <p className="text-gray-700">🌍 Location: Addis Ababa, Ethiopia</p>
        </div>

        {/* Social Media Links */}
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
          Let&apos;s Connect
        </h2>
        <ul className="flex gap-4 flex-wrap justify-center">
          {[
            {
              href: "https://github.com/BereketMengaw", // Replace with your GitHub profile link
              icon: "logo-github",
              label: "GitHub",
              color: "bg-gray-700", // GitHub&apos;s color
            },
            {
              href: "https://t.me/Berketmengaw", // Replace with your Telegram profile link
              icon: "paper-plane-outline",
              label: "Telegram",
              color: "bg-blue-400", // Telegram&apos;s color
            },
            {
              href: "https://www.upwork.com/freelancers/~01d919908808489a42?viewMode=1", // Replace with your Upwork profile link
              icon: "briefcase-outline",
              label: "Upwork",
              color: "bg-green-500", // Upwork&apos;s color
            },
            {
              href: "https://www.linkedin.com/in/bereket-mengaw-demle-543358316/", // Replace with your LinkedIn profile link
              icon: "logo-linkedin",
              label: "LinkedIn",
              color: "bg-blue-600", // LinkedIn&apos;s color
            },
            {
              href: "https://wa.me/+251947328262", // Replace with your WhatsApp link
              icon: "logo-whatsapp",
              label: "WhatsApp",
              color: "bg-green-400", // WhatsApp&apos;s color
            },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-all duration-500 hover:w-32 ${item.color}`}
              >
                {/* Icon */}
                <span className="absolute transition-transform duration-300 text-white text-xl group-hover:scale-0">
                  <ion-icon name={item.icon}></ion-icon>
                </span>

                {/* Text */}
                <span className="absolute opacity-0 text-white text-xs uppercase tracking-wide transition-opacity duration-300 group-hover:opacity-100">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 w-full max-w-md md:mr-32">
        {/* Heading */}
        <h2 className="text-xl font-bold text-center w-full mb-4 md:mb-12">
          Let’s Keep in Touch
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Ionicons Script */}
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        strategy="lazyOnload"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        strategy="lazyOnload"
      />
    </section>
  );
};

export default ContactSection;
