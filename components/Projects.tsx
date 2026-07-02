import { ExternalLink } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { projects } from "@/data/profile";

export function Projects() {
  return (
    <MotionSection id="projects" className="section-container py-16 sm:py-20" aria-labelledby="projects-title">
      <p className="eyebrow">Projects</p>
      <h2 id="projects-title" className="section-title">Applied AI, robotics, and intelligent systems work</h2>
      <p className="section-copy">Project cards are based on CV evidence and written to highlight practical contribution without overstating experience.</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="glass-card flex h-full flex-col p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-sky-400/12 px-3 py-1 text-sky-200">{project.type}</span>
              <span className="text-slate-400">{project.period}</span>
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <p><span className="font-semibold text-slate-100">Problem: </span>{project.problem}</p>
              <p><span className="font-semibold text-slate-100">Built: </span>{project.built}</p>
              <p><span className="font-semibold text-slate-100">Outcome: </span>{project.outcome}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1.5 text-xs font-medium text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-7">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                  View link <ExternalLink size={15} aria-hidden="true" />
                </a>
              ) : (
                <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">No public repository listed in CV</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}