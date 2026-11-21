import { Briefcase, MapPin } from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { EXPERIENCE } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="section bg-ink-50/60">
      <div className="container-site">
        <SectionHeading
          kicker="Professional Experience"
          title={<>Where I&apos;ve Built and Shipped.</>}
        />

        <div className="relative mt-14">
          <div aria-hidden className="absolute left-[19px] top-2 bottom-2 w-px bg-ink-200 md:left-1/2" />

          <div className="space-y-10">
            {EXPERIENCE.map((job) => (
              <Reveal key={`${job.company}-${job.role}`}>
                <article className="relative pl-14 md:pl-0">
                  <span
                    aria-hidden
                    className="absolute left-2.5 top-6 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-ink-950 bg-white" />
                  </span>

                  <div className="md:grid md:grid-cols-2 md:gap-14">
                    <div className="md:pr-2 md:text-right">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
                        {job.period}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-ink-950 md:text-3xl">
                        {job.role}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3 md:justify-end">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700">
                          <Briefcase className="h-3.5 w-3.5 text-ink-400" />
                          {job.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-ink-400">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <div className="card mt-6 p-6 md:mt-0">
                      <p className="text-sm leading-relaxed text-ink-600">{job.summary}</p>
                      <ul className="mt-5 space-y-2.5">
                        {job.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2.5 text-sm text-ink-600">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-950" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
