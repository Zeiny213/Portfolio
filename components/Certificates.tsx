import { Award } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { certificates } from "@/data/profile";

export function Certificates() {
  return (
    <MotionSection id="certificates" className="section-container py-16 sm:py-20" aria-labelledby="certificates-title">
      <p className="eyebrow">Qualifications</p>
      <h2 id="certificates-title" className="section-title">Professional qualifications</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <article key={`${certificate.name}-${certificate.date}`} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
            <Award className="text-emerald-300" size={23} aria-hidden="true" />
            <h3 className="mt-4 font-semibold leading-6 text-white">{certificate.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{certificate.provider}</p>
            {certificate.date && <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">{certificate.date}</p>}
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
