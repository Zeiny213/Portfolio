import { MotionSection } from "@/components/MotionSection";
import { skillGroups } from "@/data/profile";

export function Skills() {
  return (
    <MotionSection id="skills" className="section-container py-16 sm:py-20" aria-labelledby="skills-title">
      <p className="eyebrow">Skills</p>
      <h2 id="skills-title" className="section-title">Technical skills grouped for AI and data roles</h2>
      <p className="section-copy">A practical foundation across programming, AI concepts, data analysis, robotics, and tools used in coursework and competition projects.</p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <article key={title} className="glass-card p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/12 text-sky-300 ring-1 ring-sky-300/20">
                <Icon size={21} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}