const links = [
  {
    label: 'Official documentation',
    type: 'Build',
    description: 'Start here when you have an API key. The primitives, request format, confidence model, patterns, and quickstart are all documented directly by TypeSafe.',
    href: 'https://docs.typesafe.ai',
  },
  {
    label: 'Workflow evaluations',
    type: 'Verify',
    description: 'The source behind TypeSafe’s performance claims, including full queries, disagreements, comparison models, costs, and the caveats most summaries omit.',
    href: 'https://evals.typesafe.ai',
  },
  {
    label: 'LangChain integration guide',
    type: 'Integrate',
    description: 'The clearest practical explanation of where Jev fits inside an agent loop, with model routing and risky-tool gating examples.',
    href: 'https://www.langchain.com/blog/building-a-harness-with-jev',
  },
];

export default function TryItLinks() {
  return (
    <div id="how-to-try-it" className="grid gap-4 sm:grid-cols-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="glow-border group flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/60">
            {link.type}
          </span>
          <h3 className="mt-3 text-sm font-semibold text-slate-100">{link.label}</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">{link.description}</p>
          <span className="mt-auto pt-4 text-xs font-medium text-cyan-300">
            Open resource →
          </span>
        </a>
      ))}
    </div>
  );
}
