import { Code2, Layers3, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Development",
    description: "Writing maintainable and reusable code with modern development practices.",
  },
  {
    icon: Layers3,
    title: "Full Stack Focus",
    description: "Building responsive interfaces, backend APIs, and database-driven applications.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description: "Turning ideas and requirements into practical, user-friendly web solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#241B35] sm:text-4xl">
            Building modern web experiences with purpose.
          </h2>

          <p className="mt-5 leading-8 text-[#5f566d]">
            I’m a Full Stack Developer focused on building modern,
            responsive, and user-friendly web applications. I enjoy working
            across both frontend and backend development, creating interfaces
            with React and Next.js while developing APIs and backend systems
            with Python and Django.
          </p>

          <p className="mt-4 leading-8 text-[#5f566d]">
            I’m continuously improving my skills through practical projects and exploring better ways to build reliable and maintainable software.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/50 bg-white/45 p-7 shadow-[0_20px_60px_rgba(91,60,130,0.08)] backdrop-blur-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-[#241B35]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6b6278]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}