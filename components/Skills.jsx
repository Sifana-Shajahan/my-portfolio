import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

const categories = [
  {
    key: "frontend",
    title: "Frontend",
  },
  {
    key: "backend",
    title: "Backend",
  },
  {
    key: "database",
    title: "Database",
  },
  {
    key: "tools",
    title: "Tools & Technologies",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#241B35] sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 leading-8 text-[#5f566d]">
            A collection of technologies and tools I use to build modern,
            responsive, and full-stack web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.key}
              className="rounded-3xl border border-white/50 bg-white/45 p-7 shadow-[0_20px_60px_rgba(91,60,130,0.08)] backdrop-blur-xl"
            >
              <h3 className="mb-5 text-xl font-semibold text-[#241B35]">
                {category.title}
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {skills[category.key].map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}