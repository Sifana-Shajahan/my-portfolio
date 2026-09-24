import { ArrowUp, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Training", href: "#experience" },
  { name: "What I Do", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Sifana-Shajahan",
    icon: "/images/skills/github.svg",
    type: "image",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sifana-shajahan",
    icon: "/images/skills/linkedin.png",
    type: "image",
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sifanashajahan@gmail.com",
    icon: Mail,
    type: "lucide",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-violet-200/50 px-6 pb-8 pt-16">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_0.8fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block text-2xl font-bold tracking-tight text-[#241B35] transition-colors duration-300 hover:text-violet-600"
            >
              Sifana Shajahan
            </a>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-500" />

              <p className="text-sm font-medium text-violet-600">
                Full Stack Developer
              </p>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#6b6278]">
              I build modern, responsive, and practical web applications across
              frontend, backend, APIs, and databases.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === "Email" ? undefined : "_blank"}
                    rel={
                      social.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-200/60 bg-white/50 text-violet-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-white hover:text-violet-700 hover:shadow-md"
                  >
                    {social.type === "image" ? (
                      <img
                        src={social.icon}
                        alt=""
                        className="h-5 w-5 object-contain"
                      />
                    ) : (
                      <Icon size={18} />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#241B35]">
              Navigation
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center text-sm text-[#6b6278] transition-colors duration-200 hover:text-violet-600"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-violet-300 transition-all duration-200 group-hover:w-2 group-hover:bg-violet-600" />

                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#241B35]">
              Get In Touch
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#6b6278]">
              Have an opportunity or project in mind?
              <br />
              Let’s connect.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sifanashajahan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-all duration-300 hover:gap-3 hover:text-violet-700"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs text-[#7b7187] sm:text-left">
            © 2026 Sifana Shajahan. All rights reserved.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-xl border border-violet-200/60 bg-white/50 px-4 py-2 text-xs font-semibold text-violet-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
          >
            Back to top
            <ArrowUp
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
