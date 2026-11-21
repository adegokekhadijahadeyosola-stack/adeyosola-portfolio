import { ArrowUpRight, Globe, Smartphone, Bot, MessagesSquare, Plug2, Workflow, Package } from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { PORTRAITS } from '@/data/portfolio';

const ENJOYS = [
  { icon: Globe, label: 'Building websites and web applications' },
  { icon: Smartphone, label: 'Developing mobile applications' },
  { icon: Bot, label: 'Creating AI-powered solutions' },
  { icon: MessagesSquare, label: 'Building intelligent chatbots' },
  { icon: Plug2, label: 'Connecting applications through APIs' },
  { icon: Workflow, label: 'Automating business processes' },
  { icon: Package, label: 'Turning business ideas into functional digital products' },
];

export function About() {
  const hasAboutPhoto = PORTRAITS.about.trim().length > 0;

  return (
    <section id="about" className="section bg-ink-50/60">
      <div className="container-site">
        <SectionHeading kicker="About Me" title={<>More Than Just Building Applications.</>} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-ink-200 bg-white shadow-[0_16px_48px_-20px_rgba(14,14,16,0.2)]">
              {hasAboutPhoto ? (
                <img
                  src={PORTRAITS.about}
                  alt="Adeyosola at work"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-ink-200 bg-ink-50 font-display text-2xl text-ink-900">
                    A
                  </span>
                  <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                    Photograph placeholder — add a photo in the content file
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="space-y-5 text-base leading-relaxed text-ink-600 md:text-lg">
                <p>
                  I&apos;m a technology professional who combines AI-assisted development, backend
                  integrations, application development and automation to create useful digital
                  products. My work sits at the intersection of ideas and execution — taking a
                  business problem and turning it into a working, polished solution.
                </p>
                <p>
                  At <span className="font-semibold text-ink-900">Nuvanta Africa</span>, I work as a
                  Software Engineer, building digital products and exploring how AI-driven
                  development can dramatically shorten the distance between an idea and a shipped
                  product. Rather than writing every line by hand, I design systems, orchestrate AI
                  development tools, and connect backend platforms and APIs to deliver results that
                  are fast, reliable and genuinely useful.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="kicker mt-10">What I enjoy working on</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {ENJOYS.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3.5 text-sm text-ink-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-950 text-white">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10">
                <a href="#contact" className="btn-dark">
                  Let&apos;s Work Together
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
