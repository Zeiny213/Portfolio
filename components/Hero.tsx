import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { ProfileImage } from "@/components/ProfileImage";
import { profile } from "@/data/profile";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin }
].filter((item) => Boolean(item.href));

export function Hero() {
  return (
    <section id="top" className="relative py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-grid-pattern bg-[size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <MotionSection className="max-w-3xl" aria-labelledby="hero-title">
          <p className="eyebrow">AI • Machine Learning • Robotics</p>
          <h1 id="hero-title" className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-sky-200 sm:text-2xl">{profile.headline}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.intro}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <MapPin size={16} aria-hidden="true" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-emerald-100">
              {profile.seeking}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">
              View Projects <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a href={profile.cvPath} download className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              <Download size={18} aria-hidden="true" /> Download CV
            </a>
            <a href={`mailto:${profile.email}`} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              <Mail size={18} aria-hidden="true" /> Contact Me
            </a>
          </div>

          {socialLinks.length > 0 && (
            <div className="mt-7 flex items-center gap-3" aria-label="Social links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-sky-300/50 hover:text-sky-200"
                  aria-label={label}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </MotionSection>

        <MotionSection className="relative mx-auto w-full max-w-md lg:max-w-lg" aria-label="Profile image">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-400/20 via-transparent to-emerald-300/20 blur-2xl" />
          <div className="glass-card relative p-3">
            <ProfileImage />
          </div>
        </MotionSection>
      </div>
    </section>
  );
}