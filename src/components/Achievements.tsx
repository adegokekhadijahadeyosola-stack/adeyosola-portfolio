import { Award, Sparkles } from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { ACHIEVEMENTS } from '@/data/portfolio';

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-site">
        <SectionHeading kicker="Achievements" title={<>Moments Worth Mentioning.</>} />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="h-full">
              <article
                className={`card card-hover flex h-full flex-col p-8 ${
                  item.placeholder ? 'border-dashed border-ink-200 bg-ink-50/50' : ''
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    item.placeholder ? 'border border-ink-200 bg-white text-ink-400' : 'bg-ink-950 text-white'
                  }`}
                >
                  {item.placeholder ? (
                    <Sparkles className="h-5 w-5" strokeWidth={1.5} />
                  ) : (
                    <Award className="h-5 w-5" strokeWidth={1.5} />
                  )}
                </span>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
                  {item.context}
                </p>
                <h3 className="mt-2 font-display text-xl leading-snug text-ink-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
