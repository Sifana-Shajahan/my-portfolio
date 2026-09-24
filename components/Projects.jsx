import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#241B35] sm:text-4xl">
            Projects I’ve built.
          </h2>

          <p className="mt-5 leading-8 text-[#5f566d]">
            A selection of full-stack and frontend projects demonstrating
            practical experience across modern web technologies.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
              features={project.features}
              images={project.images}
              liveUrl={project.liveUrl}
              repositoryUrl={project.repositoryUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}