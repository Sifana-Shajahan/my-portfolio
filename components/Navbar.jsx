"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Training", href: "#experience" },
  { name: "What I Do", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/40 bg-white/45 px-4 py-3 shadow-lg shadow-purple-900/5 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center gap-2"
            aria-label="Go to homepage"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 text-sm font-bold text-white shadow-md shadow-purple-500/20">
              SN
            </span>

            <span className="hidden text-sm font-semibold tracking-tight text-[#241B35] sm:block">
              Sifana | Full Stack Developer
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`relative rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-violet-700"
                      : "text-[#4B4357] hover:bg-white/50 hover:text-violet-700"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-600"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Resume Button */}
          <a
            href="/resume/Sifana_Shajahan_Resume.pdf"
            download
            style={{ color: "#ffffff" }}
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-300/40"
          >
            <Download size={17} />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-white/50 text-[#241B35] transition hover:bg-white/80 md:hidden"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 border-t border-white/40 pt-3">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);

                          setTimeout(() => {
                            document.querySelector(item.href)?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }, 100);
                        }}
                        className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-violet-100/70 text-violet-700"
                            : "text-[#4B4357] hover:bg-white/60 hover:text-violet-700"
                        }`}
                      >
                        {item.name}
                      </a>
                    );
                  })}

                  <a
                    href="/resume/Sifana_Shajahan_Resume.pdf"
                    download
                    onClick={handleNavClick}
                    style={{ color: "#ffffff" }}
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
