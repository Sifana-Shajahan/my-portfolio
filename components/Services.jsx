import {
  Code2,
  Database,
  Globe2,
  ServerCog,
} from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and user-friendly interfaces using React, Next.js, JavaScript, TypeScript, and modern CSS frameworks.",
  },
  {
    icon: ServerCog,
    title: "Backend Development",
    description:
      "Developing reliable backend systems and business logic using Python, Django, Django REST Framework, and REST APIs.",
  },
  {
    icon: Code2,
    title: "REST API Development",
    description:
      "Creating and integrating RESTful APIs with authentication, CRUD operations, validation, and frontend-backend communication.",
  },
  {
    icon: Database,
    title: "Database Development",
    description:
      "Working with PostgreSQL and relational database systems to design schemas, manage data, and build database-driven applications.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            What I Do
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#241B35] sm:text-4xl">
            Building solutions across the full stack.
          </h2>

          <p className="mt-5 leading-8 text-[#5f566d]">
            I work across frontend, backend, API, and database development to
            build complete and practical web applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/50 bg-white/45 p-7 shadow-[0_20px_60px_rgba(91,60,130,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(91,60,130,0.14)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-[#241B35]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6b6278]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}