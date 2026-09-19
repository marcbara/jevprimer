const cases = [
  {
    title: 'Browser agents at scale',
    body: 'Kyle Jeong (Browserbase) is powering browser-use agents for fractions of a cent per decision, using Jev for the classify/route steps instead of a full LLM call.',
    href: 'https://x.com/kylejeong/status/2100622054945095934',
  },
  {
    title: 'Live trading agent',
    body: 'Jarrod Watts built a real-time trading agent around Jev, leaning on its ~100ms latency for decisions that need to happen inside a live market window.',
    href: 'https://x.com/jarrodwatts/status/2100356151468585346',
  },
  {
    title: 'Email triage at scale',
    body: "Ryan Vogel ran about 1,500 of his own emails through Jev and sorted them by what each one needed, at roughly 18 cents total.",
    href: 'https://x.com/ryanvogel/status/2100042788851101842',
  },
  {
    title: 'Agent guardrails (Auto Mode)',
    body: "LangChain's AutoModeMiddleware uses Jev to screen risky tool calls (e.g. bash commands) before they execute, moving a step that used to be closed-source harness logic into the open.",
    href: 'https://www.langchain.com/blog/building-a-harness-with-jev',
  },
];

export default function UseCaseGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cases.map((c) => (
        <a
          key={c.title}
          href={c.href}
          target="_blank"
          rel="noreferrer"
          className="glow-border block rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
        >
          <h3 className="link-underline text-sm font-semibold text-slate-100">
            {c.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.body}</p>
          <span className="mt-3 inline-block text-xs text-cyan-400/70">Source →</span>
        </a>
      ))}
    </div>
  );
}
