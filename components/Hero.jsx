"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sifanashajahan@gmail.com",
    icon: Mail,
  },
];

const technologies = [
  {
    name: "React",
    icon: "/images/skills/react.svg",
    position: "left-[-10px] top-8",
  },
  {
    name: "JavaScript",
    icon: "/images/skills/javascript.svg",
    position: "left-[-20px] top-1/2 -translate-y-1/2",
  },
  {
    name: "Django",
    icon: "/images/skills/django.svg",
    position: "left-[-10px] bottom-8",
  },
  {
    name: "Next.js",
    icon: "/images/skills/nextjs.svg",
    position: "right-[-10px] top-8",
  },
  {
    name: "Python",
    icon: "/images/skills/python.svg",
    position: "right-[-20px] top-1/2 -translate-y-1/2",
  },
  {
    name: "Node.js",
    icon: "/images/skills/nodejs.png",
    position: "right-[-10px] bottom-8",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pt-36"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-white/50 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-violet-500 shadow-sm shadow-violet-500/50" />
            Open to opportunities
          </div>

          <p className="mb-4 text-lg font-medium text-violet-600">
            Hi, I&apos;m Sifana Shajahan 👋
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#241B35] sm:text-6xl lg:text-7xl">
            Full Stack
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-violet-800 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#5B5368] sm:text-lg">
            I build modern, responsive, and scalable web applications using
            React, Next.js, Python, Django and REST APIs.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              style={{ color: "#ffffff" }}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-300/40"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume/Sifana_Shajahan_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 bg-white/55 px-6 py-3.5 text-sm font-semibold text-[#241B35] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-lg"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-3">
            <span className="mr-2 text-sm text-[#7A7188]">Connect with me</span>

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/50 text-[#4B4357] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:text-violet-700 hover:shadow-md"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Developer Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Decorative glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/20 blur-3xl" />

          {/* Main Glass Card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto aspect-square max-w-[400px] overflow-hidden rounded-[2rem] border border-white/60 bg-white/45 p-5 shadow-2xl shadow-purple-900/10 backdrop-blur-xl"
          >
            {/* Inner gradient */}
            <div className="absolute inset-5 rounded-[1.5rem] bg-gradient-to-br from-violet-100/80 via-white/50 to-purple-200/60" />

            {/* Developer profile placeholder */}
            <div className="relative flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-white/60 bg-white/30 px-6 text-center backdrop-blur-sm">
              <div className="flex h-28 w-55 items-center justify-center rounded-full border-4 border-white/70 bg-gradient-to-br from-violet-500 to-purple-800 text-3xl font-bold text-white shadow-xl shadow-purple-500/20">
                <div className="relative mx-auto w-full max-w-[320px]">
                  <div className="absolute -inset-4 rounded-[2rem] bg-violet-300/20 blur-3xl" />

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 p-3 shadow-[0_25px_80px_rgba(91,60,130,0.16)] backdrop-blur-xl">
                    <img
                      src="/images/profile-pic.png"
                      alt="Sifana Shajahan"
                      className="h-[320px] w-full rounded-[1.5rem] object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Technology Cards */}
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, index % 2 === 0 ? -6 : 6, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                },
                scale: {
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                },
                y: {
                  duration: 4 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className={`absolute ${technology.position} z-10 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/65 px-3 py-2 shadow-lg shadow-purple-900/5 backdrop-blur-xl`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-6 w-6 object-contain"
                />
              </span>

              <span className="text-xs font-semibold text-[#403749]">
                {technology.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-[#7A7188] transition-colors hover:text-violet-600 sm:flex"
      >
        <span>Scroll to explore</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
