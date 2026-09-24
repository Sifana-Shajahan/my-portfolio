"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "sifanashajahan@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sifanashajahan@gmail.com",
    type: "icon",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sifana-shajahan",
    href: "https://www.linkedin.com/in/sifana-shajahan",
    type: "image",
    icon: "/images/skills/linkedin.png",
  },
  {
    label: "GitHub",
    value: "github.com/Sifana-Shajahan",
    href: "https://github.com/Sifana-Shajahan",
    type: "image",
    icon: "/images/skills/github.svg",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#241B35] sm:text-4xl">
            Let’s build something together.
          </h2>

          <p className="mt-5 leading-8 text-[#5f566d]">
            If you have a project, an opportunity, or simply want to connect, feel
            free to send me a message.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/50 bg-white/45 p-7 shadow-[0_20px_60px_rgba(91,60,130,0.08)] backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-[#241B35]">
              Get in touch
            </h3>

            <div className="mt-6 space-y-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/50 bg-white/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                      {item.type === "image" ? (
                        <img
                          src={item.icon}
                          alt=""
                          className="h-5 w-5 object-contain"
                        />
                      ) : (
                        <Icon size={21} />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#241B35]">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-sm text-[#6b6278]">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/50 bg-white/45 p-7 shadow-[0_20px_60px_rgba(91,60,130,0.08)] backdrop-blur-xl"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#241B35]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-violet-100 bg-white/70 px-4 py-3 text-sm text-[#241B35] outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#241B35]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-violet-100 bg-white/70 px-4 py-3 text-sm text-[#241B35] outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-[#241B35]"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-violet-100 bg-white/70 px-4 py-3 text-sm text-[#241B35] outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                placeholder="How can I help?"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#241B35]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full resize-none rounded-xl border border-violet-100 bg-white/70 px-4 py-3 text-sm text-[#241B35] outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-300/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              style={{ color: "#ffffff" }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}

              {status !== "sending" && <Send size={17} />}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm font-medium text-green-600">
                Thanks! Your message has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-600">
                Something went wrong. Please try again or contact me directly by
                email.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
