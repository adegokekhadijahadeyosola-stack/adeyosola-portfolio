import { Reveal, SectionHeading } from '@/components/Reveal';
import { TechIcon } from '@/components/TechIcon';
import { TECH_CATEGORIES } from '@/data/portfolio';

export function TechStack() {
  return (
    <section id="stack" className="section bg-ink-50/60">
      <div className="container-site">
        <SectionHeading
          kicker="Technology Stack"
          title={<>Tools I Use to Build and Ship.</>}
          intro="A practical toolkit of AI-assisted development environments, backend platforms, integrations and deployment services — chosen for speed and reliability."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_CATEGORIES.map((category, i) => (
            <Reveal key={category.title} delay={i * 70} className="h-full">
              <article className="card card-hover flex h-full flex-col p-7">
                <p className="kicker">{category.title}</p>
                <ul className="mt-6 space-y-3">
                  {category.tools.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex items-center gap-4 rounded-xl border border-ink-100 bg-white px-4 py-3.5 transition-colors duration-200 hover:border-ink-300"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-100 bg-ink-50 text-ink-900">
                        <TechIcon name={tool.icon} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink-950">{tool.name}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-ink-400">{tool.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
