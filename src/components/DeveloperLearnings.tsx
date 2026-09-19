const learnings = [
  {
    label: 'Correctness',
    title: 'Schema-safe is not the same as correct',
    body: 'Jev cannot escape the answer shape you define, but it can still pick the wrong allowed answer. Early testing has found cases where a wrong answer arrived with very high confidence.',
    takeaway: 'Treat type safety as interface safety, not truth.',
    href: 'https://x.com/0bserver/status/2100395569889906793',
  },
  {
    label: 'State quality',
    title: 'Give it constraint evidence, not just options',
    body: 'In a real PR review, Jev first recommended a clean refactor. After receiving the actual tests and ownership constraints, it reversed to the safer two-line fix at 0.99 confidence.',
    takeaway: 'A better state can matter more than a cleverer question.',
    href: 'https://x.com/StudioXRadio/status/2101058125784621377',
  },
  {
    label: 'Control logic',
    title: 'Your threshold is part of the product',
    body: 'A 0.82 probability is not an instruction to act. Production systems need explicit, logged thresholds for acting, escalating, or asking a stronger model.',
    takeaway: 'Keep the final policy in deterministic code.',
    href: 'https://x.com/schwentker/status/2100339989867586029',
  },
];

export default function DeveloperLearnings() {
  return (
    <div className="space-y-3">
      {learnings.map((item, index) => (
        <a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="glow-border group grid gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.045] sm:grid-cols-[auto_1fr]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 text-sm font-bold text-cyan-300">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/60">
              {item.label}
            </span>
            <h3 className="mt-1 text-base font-semibold text-slate-100">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
            <p className="mt-3 text-xs font-medium text-cyan-300/80">
              {item.takeaway} <span className="ml-1">Source →</span>
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
