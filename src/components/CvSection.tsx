import { Download, FileText } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CV } from '@/data/portfolio';

export function CvSection() {
  const hasCv = CV.url.trim().length > 0;

  return (
    <section id="cv" className="section">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-8 py-14 text-center md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-ink-800"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full border border-ink-800"
            />

            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-ink-700 bg-ink-900 text-white">
              <FileText className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <h2 className="relative mt-7 font-display text-3xl tracking-tight text-white md:text-5xl">
              Interested in My Professional Journey?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300">
              Explore my professional experience, technical capabilities and projects.
            </p>
            <div className="relative mt-9">
              {hasCv ? (
                <a href={CV.url} download className="btn bg-white text-ink-950 hover:bg-ink-100 active:scale-[0.98]">
                  {CV.label}
                  <Download className="h-4 w-4" />
                </a>
              ) : (
                <span
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-ink-700 px-7 py-3.5 text-sm font-semibold text-ink-400"
                  title="CV will be available once uploaded"
                >
                  {CV.label}
                  <Download className="h-4 w-4" />
                </span>
              )}
              {!hasCv && (
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                  CV PDF coming soon
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
