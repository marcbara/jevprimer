const cases = [
  {
    title: 'Browser agents at scale',
    body: 'Kyle Jeong (Browserbase) is powering browser-use agents for fractions of a cent per decision, using Jev for the classify/route steps instead of a full LLM call.',
  },
  {
    title: 'Live trading agent',
    body: 'Jarrod Watts built a real-time trading agent around Jev, leaning on its ~100ms latency for decisions that need to happen inside a live market window.',
  },
  {
    title: 'Email triage at scale',
    body: "Ryan Vogel is running high-volume email triage — the kind of per-message classification that's normally too cheap to justify a frontier-model call.",
  },
  {
    title: 'Agent guardrails (Auto Mode)',
    body: 'LangChain\'s AutoModeMiddleware uses Jev to screen risky tool calls (e.g. bash commands) before they execute, moving a step that used to be closed-source harness logic into the open.',
  },
];

export default function UseCaseGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cases.map((c) => (
        <div
          key={c.title}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30"
        >
          <h3 className="text-sm font-semibold text-slate-100">{c.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.body}</p>
        </div>
      ))}
    </div>
  );
}
