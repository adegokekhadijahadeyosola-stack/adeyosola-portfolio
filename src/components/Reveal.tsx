import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Tag = as as 'div';
  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}

interface SectionHeadingProps {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ kicker, title, intro, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <Reveal className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="kicker">{kicker}</p>
      <h2 className="mt-4 font-display text-4xl leading-[1.15] tracking-tight text-ink-950 md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-ink-500 md:text-lg">{intro}</p>}
    </Reveal>
  );
}
