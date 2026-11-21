import { ArrowUp } from 'lucide-react';
import { SITE } from '@/data/portfolio';
import { useScrolled } from '@/hooks/useReveal';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { label: 'Email', href: '#contact' },
  { label: 'LinkedIn', href: '#contact' },
  { label: 'GitHub', href: '#contact' },
];

export function Footer() {
  const showTop = useScrolled(600);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-site py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-sm font-semibold tracking-[0.22em] text-ink-950">
              {SITE.name}
            </p>
            <p className="mt-3 text-sm text-ink-400">
              Full-Stack Engineer | AI Automation Engineer | AI Chatbot Developer
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-500 transition-colors hover:text-ink-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 transition-colors hover:text-ink-950"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-ink-100 pt-8">
          <p className="text-xs text-ink-400">© {year} {SITE.name}. All rights reserved.</p>
          <a
            href="#home"
            aria-label="Back to top"
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-all duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-white ${
              showTop ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
