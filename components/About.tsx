import { Brain, Target } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { profile } from "@/data/profile";

export function About() {
  return (
    <MotionSection id="about" className="section-container py-16 sm:py-20" aria-labelledby="about-title">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="section-title">Building practical AI and robotics experience</h2>
        </div>
        <div className="glass-card p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-200">{profile.summary}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-5">
              <Brain className="text-sky-300" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-white">Technical focus</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Machine learning, deep learning, computer vision, reinforcement learning, robotics, IoT, and intelligent systems.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-5">
              <Target className="text-emerald-300" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-white">Current goal</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Contribute as a junior AI/Data Science candidate through internships and applied technical projects.</p>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
