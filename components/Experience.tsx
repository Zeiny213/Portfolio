import { MotionSection } from "@/components/MotionSection";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <MotionSection id="experience" className="section-container py-16 sm:py-20" aria-labelledby="experience-title">
      <p className="eyebrow">Experience</p>
      <h2 id="experience-title" className="section-title">Competition and team-based technical experience</h2>
      <p className="section-copy">Experience is positioned honestly as student competition work, emphasizing technical contribution, teamwork, and applied problem-solving.</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {experience.map(({ role, organization, date, icon: Icon, highlights }) => (
          <article key={`${organization}-${role}`} className="glass-card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-400/12 text-sky-300 ring-1 ring-sky-300/20">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">{role}</h3>
                <p className="mt-1 text-sky-100">{organization}</p>
                <p className="mt-1 text-sm text-slate-400">{date}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}