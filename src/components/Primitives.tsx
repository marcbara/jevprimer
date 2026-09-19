const primitives = [
  {
    name: 'Choice',
    goal: 'Pick from a list of options',
    returns: 'choice, probabilities, confidence',
  },
  {
    name: 'Score',
    goal: 'Rate the state on a rubric (e.g. low/medium/high)',
    returns: 'score, probability distribution, confidence',
  },
  {
    name: 'Noul',
    goal: 'Is this statement true?',
    returns: 'noul: a 0 to 1 probability',
  },
];

export default function Primitives() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {primitives.map((p) => (
        <div key={p.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="text-sm font-semibold text-cyan-300">{p.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.goal}</p>
          <p className="mt-3 text-xs text-slate-500">Returns: {p.returns}</p>
        </div>
      ))}
    </div>
  );
}
