import { Boxes, Database, Plug, Rocket, Workflow, AudioLines } from 'lucide-react';
import type { ProjectMockup } from '@/types/portfolio';

const iconMap = {
  boxes: Boxes,
  db: Database,
  plug: Plug,
  rocket: Rocket,
  workflow: Workflow,
  audio: AudioLines,
} as const;

export type TechIconName = keyof typeof iconMap;

export function TechIcon({ name, className = 'h-5 w-5' }: { name: TechIconName; className?: string }) {
  const Icon = iconMap[name];
  return <Icon className={className} strokeWidth={1.5} />;
}

/* ------------------------------------------------------------------ */
/* Typographic project mockups — pure CSS/SVG, no external images.     */
/* Replace with real screenshots any time inside the Project component */
/* by swapping the <ProjectMockup /> usage for an <img />.             */
/* ------------------------------------------------------------------ */

export function ProjectMockup({ kind }: { kind: ProjectMockup }) {
  if (kind === 'dashboard') return <DashboardMockup />;
  if (kind === 'map') return <MapMockup />;
  if (kind === 'chat') return <ChatMockup />;
  return <AutomationMockup />;
}

function MockupChrome({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white">
      <div className="flex items-center gap-1.5 border-b border-ink-100 bg-ink-50 px-3 py-2">
        <span className="h-2 w-2 rounded-full border border-ink-300" />
        <span className="h-2 w-2 rounded-full border border-ink-300" />
        <span className="h-2 w-2 rounded-full border border-ink-300" />
        <span className="ml-2 font-mono text-[10px] tracking-wider text-ink-400">{label}</span>
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <MockupChrome label="carepulse — dashboard">
      <div className="flex h-full">
        <div className="hidden w-16 flex-col gap-2 border-r border-ink-100 p-2 sm:flex">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-6 rounded-md ${i === 0 ? 'bg-ink-900' : 'bg-ink-100'}`} />
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2.5 w-20 rounded bg-ink-900" />
            <div className="h-2 w-12 rounded bg-ink-100" />
          </div>
          <div className="mb-3 grid grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-md border border-ink-100 p-2">
                <div className="mb-1.5 h-1.5 w-6 rounded bg-ink-200" />
                <div className="h-2 w-10 rounded bg-ink-900" />
              </div>
            ))}
          </div>
          <div className="rounded-md border border-ink-100">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 border-b border-ink-100 p-2 last:border-0">
                <div className="h-5 w-5 rounded-full bg-ink-200" />
                <div className="h-1.5 flex-1 rounded bg-ink-100" />
                <div className={`h-3 w-10 rounded-full ${i === 0 ? 'bg-ink-900' : 'bg-ink-200'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupChrome>
  );
}

function AutomationMockup() {
  return (
    <MockupChrome label="nexaflow — scenario">
      <div className="grid h-full place-items-center p-4">
        <div className="flex w-full max-w-[280px] items-center justify-between gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-1 items-center">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-[10px] font-semibold ${
                  i === 1 ? 'border-ink-900 bg-ink-900 text-white' : 'border-ink-200 bg-white text-ink-500'
                }`}
              >
                {['IN', 'AI', 'SHEET', 'MAIL'][i]}
              </div>
              {i < 3 && <div className="mx-1 h-px flex-1 border-t border-dashed border-ink-300" />}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 pt-0">
        <div className="space-y-1.5">
          <div className="h-1.5 w-3/4 rounded bg-ink-100" />
          <div className="h-1.5 w-1/2 rounded bg-ink-100" />
        </div>
      </div>
    </MockupChrome>
  );
}

function MapMockup() {
  return (
    <MockupChrome label="naija flow ai — map">
      <div className="relative h-full min-h-[140px] overflow-hidden bg-ink-50">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 300 150">
          <path d="M0 40 L90 40 L90 90 L200 90 L200 30 L300 30" fill="none" stroke="#d9d9dc" strokeWidth="6" />
          <path d="M40 0 L40 150 M200 90 L200 150 M0 110 L300 110" fill="none" stroke="#ededee" strokeWidth="6" />
          <path
            d="M0 40 L90 40 L90 90 L200 90 L200 30 L300 30"
            fill="none"
            stroke="#0e0e10"
            strokeWidth="2.5"
            strokeDasharray="1 0"
          />
          <circle cx="90" cy="40" r="5" fill="#0e0e10" />
          <circle cx="200" cy="90" r="5" fill="white" stroke="#0e0e10" strokeWidth="2.5" />
        </svg>
        <div className="absolute bottom-2 left-2 rounded-md border border-ink-200 bg-white px-2.5 py-1.5">
          <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Route</p>
          <p className="text-[11px] font-semibold text-ink-900">Ikeja → Victoria Island</p>
        </div>
      </div>
    </MockupChrome>
  );
}

function ChatMockup() {
  return (
    <MockupChrome label="assistant — voice ai">
      <div className="flex h-full flex-col justify-end gap-2 p-3">
        <div className="max-w-[75%] self-start rounded-xl rounded-bl-sm border border-ink-100 bg-ink-50 px-3 py-2 text-[11px] text-ink-700">
          Hello, how can I help you today?
        </div>
        <div className="max-w-[75%] self-end rounded-xl rounded-br-sm bg-ink-950 px-3 py-2 text-[11px] text-white">
          I would like to book a consultation.
        </div>
        <div className="mt-1 flex items-center gap-1.5 self-start rounded-full border border-ink-100 px-3 py-1.5">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="w-0.5 rounded-full bg-ink-900"
              style={{ height: [6, 12, 8, 14, 7][i] }}
            />
          ))}
          <span className="ml-1 font-mono text-[9px] uppercase tracking-wider text-ink-400">Listening…</span>
        </div>
      </div>
    </MockupChrome>
  );
}
