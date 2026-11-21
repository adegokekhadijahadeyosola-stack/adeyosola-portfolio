import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Linkedin, Mail, Github } from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { CONTACT } from '@/data/portfolio';

type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY: FormState = { fullName: '', email: '', subject: '', message: '' };

function validate(form: FormState): Partial<FormState> {
  const errors: Partial<FormState> = {};
  if (form.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (form.subject.trim().length < 3) errors.subject = 'Please add a short subject.';
  if (form.message.trim().length < 10) errors.message = 'Your message should be at least 10 characters.';
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    setServerError('');

    try {
      const { supabase } = await import('@/lib/supabase');
      const { error } = await supabase.from('contact_messages').insert({
        full_name: form.fullName.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      setServerError(
        err instanceof Error && err.message
          ? `Your message could not be sent: ${err.message}`
          : 'Your message could not be sent. Please try again or email me directly.'
      );
    }
  }

  return (
    <section id="contact" className="section bg-ink-50/60">
      <div className="container-site">
        <SectionHeading
          kicker="Contact"
          title={<>Have an Idea? Let&apos;s Build Something.</>}
          intro="I'm always interested in meaningful technology projects, innovative ideas and opportunities to create useful digital solutions."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="card card-hover flex items-center gap-4 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-white">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">Email</p>
                  <p className="mt-1 text-sm font-semibold text-ink-950">{CONTACT.emailDisplay}</p>
                </div>
              </a>

              {CONTACT.linkedin ? (
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover flex items-center gap-4 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-white">
                    <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">LinkedIn</p>
                    <p className="mt-1 text-sm font-semibold text-ink-950">Connect on LinkedIn</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-2xl border border-dashed border-ink-200 p-5 opacity-70">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-400">
                    <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">LinkedIn</p>
                    <p className="mt-1 text-sm text-ink-500">Profile link coming soon</p>
                  </div>
                </div>
              )}

              {CONTACT.github ? (
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover flex items-center gap-4 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-white">
                    <Github className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">GitHub</p>
                    <p className="mt-1 text-sm font-semibold text-ink-950">View repositories</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-2xl border border-dashed border-ink-200 p-5 opacity-70">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-400">
                    <Github className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">GitHub</p>
                    <p className="mt-1 text-sm text-ink-500">Profile link coming soon</p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="card p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="fullName"
                  label="Full Name"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={set('fullName')}
                  error={errors.fullName}
                />
                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set('email')}
                  error={errors.email}
                />
              </div>
              <div className="mt-5">
                <Field
                  id="subject"
                  label="Subject"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={set('subject')}
                  error={errors.subject}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink-900">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or idea…"
                  value={form.message}
                  onChange={set('message')}
                  aria-invalid={!!errors.message}
                  className={`field field-focus ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <FieldError message={errors.message} />}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-dark mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {status === 'success' && (
                <p
                  role="status"
                  className="mt-5 flex items-start gap-2.5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  Thank you — your message has been sent. I will get back to you as soon as possible.
                </p>
              )}
              {status === 'error' && (
                <p
                  role="alert"
                  className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  {serverError}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink-900">
        {label} <span className="text-red-600">*</span>
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`field field-focus ${error ? 'border-red-500' : ''}`}
      />
      {error && <FieldError message={error} />}
    </div>
  );
}

function FieldError({ message }: { message: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
      <AlertCircle className="h-3.5 w-3.5" />
      {message}
    </p>
  );
}
