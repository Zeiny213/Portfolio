import { GraduationCap } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { education } from "@/data/profile";

export function Education() {
  return (
    <MotionSection id="education" className="section-container py-16 sm:py-20" aria-labelledby="education-title">
      <p className="eyebrow">Education</p>
      <h2 id="education-title" className="section-title">Academic foundation</h2>
      <div className="mt-10 glass-card p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-300/12 text-emerald-200 ring-1 ring-emerald-300/20">
              <GraduationCap aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-2xl font-bold text-white">{education.institution}</h3>
              <p className="mt-2 text-lg text-sky-100">{education.degree}</p>
              <p className="mt-2 text-sm text-slate-400">{education.status} • {education.location}</p>
            </div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">{education.expected}</span>
        </div>
        <div className="mt-8">
          <h4 className="font-semibold text-white">Relevant coursework</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span key={course} className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1.5 text-sm text-slate-200">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}