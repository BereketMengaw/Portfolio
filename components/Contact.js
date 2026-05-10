"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Script from "next/script";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("sent");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 3500);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3500);
        }
      );
  };

  const socials = [
    {
      href: "https://github.com/BereketMengaw",
      icon: "logo-github",
      label: "GitHub",
    },
    {
      href: "https://t.me/Berketmengaw",
      icon: "paper-plane-outline",
      label: "Telegram",
    },
    {
      href: "https://www.upwork.com/freelancers/~01d919908808489a42?viewMode=1",
      icon: "briefcase-outline",
      label: "Upwork",
    },
    {
      href: "https://www.linkedin.com/in/bereket-mengaw-demle-543358316/",
      icon: "logo-linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://wa.me/+251947328262",
      icon: "logo-whatsapp",
      label: "WhatsApp",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full mesh-bg text-white py-24 px-4 sm:px-8 overflow-hidden"
    >
      <div className="absolute -left-32 top-1/4 w-[28rem] h-[28rem] rounded-full bg-purple-700/20 blur-[140px] pointer-events-none" />
      <div className="absolute -right-32 bottom-0 w-[32rem] h-[32rem] rounded-full bg-fuchsia-700/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-purple-200 mb-5">
            Contact
          </span>
          <h2 className="section-heading">
            Let&apos;s <span className="gradient-text">build</span> something
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Got an idea or a project in mind? Drop a message — I usually reply
            within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: contact info */}
          <div className="lg:col-span-2 glass rounded-3xl p-7 flex flex-col">
            <h3 className="text-2xl font-semibold tracking-tight mb-1">
              Bereket Mengaw
            </h3>
            <p className="text-purple-200/80 mb-7">
              Full-Stack Developer · Tech Enthusiast
            </p>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="mailto:Bereketmengaw111@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <Mail className="w-4 h-4 text-purple-300" />
                  </span>
                  Bereketmengaw111@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+251947328262"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <Phone className="w-4 h-4 text-purple-300" />
                  </span>
                  +251 947 328 262
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-300" />
                </span>
                Addis Ababa, Ethiopia
              </li>
            </ul>

            <div className="neon-divider my-7" />

            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200 mb-4">
              Let&apos;s connect
            </h4>
            <ul className="flex flex-wrap gap-3">
              {socials.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="group relative w-11 h-11 flex items-center justify-center rounded-xl glass glass-hover text-white"
                  >
                    <ion-icon name={item.icon}></ion-icon>
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-widest uppercase text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              <div className="inline-flex items-center gap-2 text-xs text-gray-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to freelance & full-time roles
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 glass rounded-3xl p-7">
            <h3 className="text-xl font-semibold mb-1">Send a message</h3>
            <p className="text-sm text-gray-400 mb-6">
              I&apos;ll get back to you with next steps and a quick plan.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-300 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder:text-gray-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder:text-gray-500"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium text-gray-300 mb-1.5"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder:text-gray-500"
                  placeholder="+251 ..."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder:text-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 disabled:opacity-60 text-white py-3 px-4 rounded-xl font-medium shadow-purple-glow transition-all"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "Message sent ✓"
                ) : status === "error" ? (
                  "Failed — try again"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-14 text-xs text-gray-500">
          © {new Date().getFullYear()} Bereket Mengaw. Crafted with care.
        </div>
      </div>

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
