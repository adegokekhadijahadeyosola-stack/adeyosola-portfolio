import { Reveal, SectionHeading } from '@/components/Reveal';

const STAGES = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the problem, requirements and objectives.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Plan the solution, user experience and application structure.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop the product using AI-assisted tools, backend platforms and integrations.',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Test, deploy and improve the solution.',
  },
];

export function Approach() {
  return (
    <section id="approach" className="section bg-ink-50/60">
      <div className="container-site">
        <SectionHeading
          kicker="My Development Approach"
          title={<>From Idea to Deployed Product.</>}
          intro="A simple, disciplined process — applied the same way to a chatbot, a platform or an automation workflow."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.number} delay={i * 90} className="h-full">
              <article className="card card-hover group relative h-full overflow-hidden p-8">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-6 font-display text-[7rem] leading-none text-ink-100 transition-colors duration-300 group-hover:text-ink-200"
                >
                  {stage.number}
                </span>
                <p className="relative font-mono text-[11px] uppercase tracking-[0.24em] text-ink-400">
                  Stage {stage.number}
                </p>
                <h3 className="relative mt-4 font-display text-2xl tracking-tight text-ink-950">
                  {stage.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-500">
                  {stage.description}
                </p>
                <div
                  aria-hidden
                  className="relative mt-8 h-0.5 w-10 bg-ink-950 transition-all duration-300 group-hover:w-full"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
