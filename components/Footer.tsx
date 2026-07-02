import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        <div className="flex items-center gap-3">
          {profile.links.github && (
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="focus-ring rounded-full p-2 text-slate-300 transition hover:text-sky-200" aria-label="GitHub">
              <Github size={18} aria-hidden="true" />
            </a>
          )}
          {profile.links.linkedin && (
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="focus-ring rounded-full p-2 text-slate-300 transition hover:text-sky-200" aria-label="LinkedIn">
              <Linkedin size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}