import { LayoutGrid, Workflow, MessageSquareText, Check } from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/Reveal';

const EXPERTISE = [
  {
    icon: LayoutGrid,
    number: '01',
    title: 'Full-Stack Development',
    description:
      'Building functional digital products, web applications, mobile applications and business platforms using AI-assisted development tools and backend technologies.',
    capabilities: [
      'Web application development',
      'Mobile application development',
      'Database integration',
      'Authentication and user management',
      'Backend integrations',
      'API connectivity',
      'Application deployment',
    ],
  },
  {
    icon: Workflow,
    number: '02',
    title: 'AI Automation Engineering',
    description:
      'Designing intelligent automation workflows that reduce repetitive tasks, improve business processes and connect different applications.',
    capabilities: [
      'Workflow automation',
      'AI-powered business processes',
      'Application integrations',
      'Automated email notifications',
      'Data processing',
      'Business process automation',
      'Make.com integrations',
    ],
  },
  {
    icon: MessageSquareText,
    number: '03',
    title: 'AI Chatbot Development',
    description:
      'Creating conversational AI solutions that help businesses communicate with customers and automate interactions.',
    capabilities: [
      'AI chatbot development',
      'Conversational AI',
      'Voice AI integrations',
      'Customer support automation',
      'AI-powered assistants',
      'ElevenLabs integrations',
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="container-site">
        <SectionHeading
          kicker="Professional Expertise"
          title={<>Three Disciplines, One Goal: Working Products.</>}
          intro="Every engagement blends product thinking, AI-assisted building and reliable integrations to deliver solutions businesses can actually run on."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {EXPERTISE.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="h-full">
              <article className="card card-hover group flex h-full flex-col p-8">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950 text-white transition-transform duration-300 group-hover:scale-105">
                    <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-sm text-ink-300">{item.number}</span>
                </div>

                <h3 className="mt-7 font-display text-2xl tracking-tight text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.description}</p>

                <div className="my-6 h-px bg-ink-100" />

                <ul className="space-y-2.5">
                  {item.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2.5 text-sm text-ink-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink-900" strokeWidth={2} />
                      {capability}
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
