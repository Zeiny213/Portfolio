import { MotionSection } from "@/components/MotionSection";
import { honors } from "@/data/profile";

export function Honors() {
  return (
    <MotionSection id="awards" className="section-container py-16 sm:py-20" aria-labelledby="awards-title">
      <p className="eyebrow">Recognition</p>
      <h2 id="awards-title" className="section-title">Honors and awards</h2>
      <p className="section-copy">Robotics competition results and participation recognized in my CV.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {honors.map(({ title, organization, date, icon: Icon }) => (
          <article key={`${title}-${date}`} className="glass-card p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300/12 text-emerald-200 ring-1 ring-emerald-300/20">
              <Icon size={21} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{organization}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">{date}</p>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
