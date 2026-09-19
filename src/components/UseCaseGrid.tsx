const cases = [
  {
    title: 'Real-time game agents',
    body: "Dozens of agents playing \"endless runner\" style games simultaneously on a single screen, without the usual \"thinking\" pauses.",
  },
  {
    title: 'Classification / triage',
    body: 'Detecting urgency in support tickets without calling a full LLM.',
  },
  {
    title: 'Agent routing & guardrails',
    body: 'Integration with LangChain (langchain_typesafe), including an "Auto Mode" middleware.',
  },
  {
    title: 'Short web tasks',
    body: 'A task that used to take 3 minutes was completed in 7 seconds.',
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
