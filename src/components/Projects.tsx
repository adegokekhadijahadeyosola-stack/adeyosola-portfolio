import { useEffect, useState } from 'react';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { ProjectMockup } from '@/components/TechIcon';
import { PROJECTS } from '@/data/portfolio';
import type { Project } from '@/types/portfolio';

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="projects" className="section">
      <div className="container-site">
        <SectionHeading
          kicker="Featured Projects"
          title={<>Selected Work, Built With AI-First Engineering.</>}
          intro="A collection of platforms, automation systems and conversational AI products — each designed around a real problem."
        />

        <div className="mt-14 space-y-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={60}>
              <article
                className={`card card-hover overflow-hidden ${
                  project.accent === 'dark' ? 'bg-ink-950 text-white' : 'bg-white'
                }`}
              >
                <div
                  className={`grid items-stretch gap-0 lg:grid-cols-[0.95fr_1.05fr] ${
                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div
                    className={`flex min-h-[260px] items-center p-6 md:p-10 ${
                      project.accent === 'dark' ? 'bg-ink-900' : 'bg-ink-50'
                    }`}
                  >
                    <div className="w-full">
                      <ProjectMockup kind={project.mockup} />
                    </div>
                  </div>

                  <div className="flex flex-col p-8 md:p-12">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                          project.accent === 'dark' ? 'text-ink-300' : 'text-ink-400'
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3
                      className={`mt-4 font-display text-3xl tracking-tight md:text-4xl ${
                        project.accent === 'dark' ? 'text-white' : 'text-ink-950'
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm font-medium ${
                        project.accent === 'dark' ? 'text-ink-200' : 'text-ink-600'
                      }`}
                    >
                      {project.tagline}
                    </p>
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        project.accent === 'dark' ? 'text-ink-300' : 'text-ink-500'
                      }`}
                    >
                      {project.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${
                            project.accent === 'dark'
                              ? 'border-ink-700 text-ink-300'
                              : 'border-ink-200 text-ink-500'
                          }`}
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setActive(project)}
                        className={
                          project.accent === 'dark'
                            ? 'btn bg-white text-ink-950 hover:bg-ink-100 active:scale-[0.98]'
                            : 'btn-dark'
                        }
                      >
                        View Project
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            project.accent === 'dark'
                              ? 'btn border border-ink-700 text-white hover:border-white'
                              : 'btn-light'
                          }
                        >
                          Live Demo
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            project.accent === 'dark'
                              ? 'btn border border-ink-700 text-white hover:border-white'
                              : 'btn-light'
                          }
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink-950/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ink-100 px-6 py-4 sm:px-8">
          <div>
            <p className="kicker">{project.category}</p>
            <h3 className="mt-1 font-display text-2xl text-ink-950">{project.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-ink-950 hover:text-ink-950"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
            <ProjectMockup kind={project.mockup} />
          </div>

          <p className="mt-6 text-sm leading-relaxed text-ink-600">{project.description}</p>

          {project.conceptNote && (
            <p className="mt-4 rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-xs leading-relaxed text-ink-500">
              {project.conceptNote}
            </p>
          )}

          <p className="kicker mt-8">Key capabilities</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-lg border border-ink-100 px-4 py-3 text-sm text-ink-700"
              >
                {feature}
              </li>
            ))}
          </ul>

          <p className="kicker mt-8">Technologies</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="tech-tag">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
