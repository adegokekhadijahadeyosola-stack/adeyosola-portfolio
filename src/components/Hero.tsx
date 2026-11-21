import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { HERO_LABELS, PORTRAITS, SITE } from '@/data/portfolio';

export function Hero() {
  const hasPhoto = PORTRAITS.hero.trim().length > 0;

  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full border border-ink-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[8%] hidden h-64 w-64 rounded-full border border-ink-100 lg:block"
      />

      <div className="container-site relative grid items-center gap-14 pb-20 md:pb-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-950 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink-950" />
              </span>
              Available for new opportunities
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 font-display text-5xl leading-[1.05] tracking-tight text-ink-950 sm:text-6xl md:text-7xl">
              Building Intelligent
              <br />
              Digital <span className="italic text-ink-500">Experiences.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-500 md:text-lg">
              I&apos;m Adeyosola, a Full-Stack Engineer, AI Automation Engineer and AI Chatbot
              Developer passionate about building digital products, intelligent systems and
              technology solutions that solve real-world problems.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {HERO_LABELS.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-ink-200 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-600 transition-colors duration-200 hover:border-ink-950 hover:text-ink-950"
                >
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-dark">
                Explore My Work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-light">
                Let&apos;s Connect
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] border border-ink-100"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-ink-200 bg-ink-50 shadow-[0_24px_60px_-24px_rgba(14,14,16,0.25)]">
              {hasPhoto ? (
                <img
                  src={PORTRAITS.hero}
                  alt={`Portrait of ${SITE.name}`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  <span className="flex h-24 w-24 items-center justify-center rounded-full border border-ink-200 bg-white font-display text-3xl text-ink-900">
                    A
                  </span>
                  <p className="px-8 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                    Portrait placeholder — add a photo in the content file
                  </p>
                </div>
              )}
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-ink-100 bg-white px-5 py-4 shadow-[0_12px_32px_-12px_rgba(14,14,16,0.18)] sm:block">
              <p className="font-display text-2xl text-ink-950">AI-First</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                Product Engineering
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-site pb-10">
        <Reveal delay={500} className="flex items-center justify-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-400">
            Scroll
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-ink-300 p-1.5">
            <span className="h-1.5 w-1.5 animate-scroll-dot rounded-full bg-ink-500" />
          </span>
        </Reveal>
      </div>
    </section>
  );
}
