import { BrainCircuit, Download } from "lucide-react";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="focus-ring flex items-center gap-2 rounded-full text-sm font-semibold text-white" aria-label="Go to top">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-400/15 text-sky-300 ring-1 ring-sky-300/25">
            <BrainCircuit size={18} aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={profile.cvPath}
          download
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
        >
          <Download size={16} aria-hidden="true" />
          CV
        </a>
      </nav>
    </header>
  );
}