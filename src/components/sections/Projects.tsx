import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionTitle } from "../ui/SectionTitle";

type ProjectsProps = {
  fullPage?: boolean;
};

export function Projects({ fullPage = false }: ProjectsProps) {
  const visibleProjects = fullPage ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className={`section-padding relative overflow-hidden ${fullPage ? "pt-32" : ""}`}
    >
      <div className="absolute inset-0 blueprint-grid opacity-25" />
      <div className="safe-container relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow={fullPage ? "Project Portfolio" : "Featured Projects"}
            title={fullPage ? "Selected Work Across America" : "Structures With Presence"}
          >
            <p>
              A sample portfolio of commercial, residential, industrial, retail,
              infrastructure, and office work built for ambitious clients.
            </p>
          </SectionTitle>
          {!fullPage && (
            <Link
              to="/projects"
              className="mb-10 text-sm font-black uppercase tracking-[0.22em] text-iron-orange transition hover:text-white"
            >
              View All Projects
            </Link>
          )}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <div key={project.title} id={project.slug}>
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
