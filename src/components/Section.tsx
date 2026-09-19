import type { ReactNode } from 'react';

export default function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-14">
      {eyebrow && (
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-cyan-400/70">
          {eyebrow}
        </span>
      )}
      <h2 className="heading-accent mb-6 text-2xl font-semibold text-slate-50 sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-slate-400">{children}</div>
    </section>
  );
}
