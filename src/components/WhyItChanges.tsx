const points = [
  {
    label: 'The work',
    title: 'Most AI work is already a decision',
    body: 'Spam or not. Churn or not. Which model to call. How risky a tool use is. Once you zoom out, a surprising share of enterprise and agent-harness work is classification and labeling at scale, not conversation.',
  },
  {
    label: 'The economics',
    title: 'Almost free and almost instant changes the architecture',
    body: 'At $42 per billion input tokens and no charge for outputs, tens of thousands of judgments can cost cents. Round trips land in the hundreds of milliseconds. That is not a cheaper chatbot. It is a new layer you can put in front of almost every pipeline.',
  },
  {
    label: 'The pattern',
    title: 'Retool the judgments, keep the LLM for the rest',
    body: 'Decompose the job into thousands of small classifications, run those through a decision model, and only hand off to an LLM when generation or slow reasoning is actually required. Some stacks go LLM then Jev. Others go Jev then LLM. The point is they compose.',
  },
];

export default function WhyItChanges() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {points.map((point) => (
          <article
            key={point.title}
            className="glow-border rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/60">
              {point.label}
            </span>
            <h3 className="mt-3 text-sm font-semibold leading-snug text-slate-100">
              {point.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{point.body}</p>
          </article>
        ))}
      </div>

      <div className="glow-border rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/60">
          The evals example
        </span>
        <h3 className="mt-3 text-sm font-semibold text-slate-100">
          Rubrics and tournaments were the expensive half of evaluation
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Evals split into two branches. Deterministic asserts are already fast. Judgment
          is not: rubrics (pick a level on a scale) and tournaments (pick A or B) have
          been done with LLMs, which are slow and expensive. That judgment work is
          exactly Choice, Score, and Noul. The emerging pattern is multi-stage evals:
          Jev handles the bulk instantly, and an LLM is called only when it is needed.
        </p>
        <a
          href="https://danielmiessler.com/blog/early-thoughts-on-jev"
          target="_blank"
          rel="noreferrer"
          className="link-underline mt-4 inline-block text-xs font-medium text-cyan-300"
        >
          Daniel Miessler, Early thoughts on Jev →
        </a>
      </div>
    </div>
  );
}
