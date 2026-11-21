import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useReveal';
import { SITE } from '@/data/portfolio';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const scrolled = useScrolled(12);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-ink-100 bg-white/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-[72px]">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-[0.22em] text-ink-950 transition-opacity hover:opacity-70"
        >
          {SITE.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-500 transition-colors duration-200 hover:text-ink-950"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-ink-800 active:scale-[0.98]"
          >
            Let&apos;s Talk
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-ink-100 bg-white px-6 pb-8 pt-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-ink-100 last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg text-ink-900 transition-colors hover:text-ink-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-dark mt-4 w-full"
          >
            Let&apos;s Talk
          </a>
        </nav>
      )}
    </header>
  );
}
