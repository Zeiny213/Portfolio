import { Github, Linkedin, Mail } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { contactCards, profile } from "@/data/profile";

export function Contact() {
  const links = [
    { label: "GitHub", href: profile.links.github, icon: Github },
    { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
  ].filter((item) => Boolean(item.href));

  return (
    <MotionSection id="contact" className="section-container py-16 sm:py-24" aria-labelledby="contact-title">
      <div className="glass-card overflow-hidden">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">Let’s discuss AI and data opportunities</h2>
            <p className="section-copy">I’m open to internship opportunities and junior-level applied projects in AI, machine learning, data science, computer vision, robotics, and intelligent systems.</p>
            <a href={`mailto:${profile.email}`} className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">
              <Mail size={18} aria-hidden="true" /> Send Email
            </a>
          </div>

          <div className="space-y-4">
            {contactCards.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/35 p-4 transition hover:bg-white/[0.07]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-sky-300">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="font-medium text-white">{value}</p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} className="focus-ring block rounded-2xl">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}

            <div className="flex gap-3 pt-2">
              {links.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"} className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:text-sky-200" aria-label={label}>
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}