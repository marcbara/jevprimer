const claims = [
  {
    claim: 'No output type errors',
    status: 'Verified by construction',
    tone: 'good',
    note: 'Jev can only return values allowed by the declared Choice, Score, or Noul schema. This does not guarantee the chosen value is correct.',
    href: 'https://typesafe.ai/blog/introducing-system-one-models-and-jev',
  },
  {
    claim: '70-500ms service latency',
    status: 'Directly testable',
    tone: 'good',
    note: 'Early users broadly report that it is fast. Exact latency still depends on geography, state size, and service load.',
    href: 'https://typesafe.ai/blog/introducing-system-one-models-and-jev',
  },
  {
    claim: '20-200x faster, 40-400x cheaper',
    status: 'Vendor benchmark',
    tone: 'warn',
    note: 'The comparison comes from TypeSafe workflows and its chosen reference models. TypeSafe says the largest gains are likely the high end of real-world results.',
    href: 'https://evals.typesafe.ai/',
  },
  {
    claim: 'Confidence is reliably calibrated',
    status: 'Mixed early evidence',
    tone: 'warn',
    note: 'Some testers report useful low-confidence signals. Others found wrong answers with confidence as high as 1.00.',
    href: 'https://x.com/0bserver/status/2100395569889906793',
  },
  {
    claim: '$42 per billion tokens is sustainable',
    status: 'Unknown',
    tone: 'unknown',
    note: 'TypeSafe explicitly says it cannot yet prove that launch pricing is not subsidized.',
    href: 'https://typesafe.ai/blog/introducing-system-one-models-and-jev',
  },
];

const toneStyles = {
  good: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300',
  warn: 'border-amber-400/25 bg-amber-400/10 text-amber-300',
  unknown: 'border-slate-400/25 bg-slate-400/10 text-slate-300',
};

export default function ClaimsTracker() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.025]">
      {claims.map((item) => (
        <a
          key={item.claim}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="grid gap-3 border-b border-white/[0.06] p-4 transition last:border-b-0 hover:bg-white/[0.025] sm:grid-cols-[1.1fr_auto_1.6fr] sm:items-center"
        >
          <span className="text-sm font-medium text-slate-200">{item.claim}</span>
          <span
            className={`w-fit rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${toneStyles[item.tone as keyof typeof toneStyles]}`}
          >
            {item.status}
          </span>
          <span className="text-xs leading-relaxed text-slate-500">{item.note}</span>
        </a>
      ))}
    </div>
  );
}
