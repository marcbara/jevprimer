const rows = [
  { model: 'Jev (TypeSafe)', accuracy: '67.8%', cost: '$0.0004', latency: '0.4s' },
  { model: 'Claude Opus 5', accuracy: '73.1%', cost: '$0.1761', latency: '37.8s' },
];

export default function TradeoffTable() {
  return (
    <div className="glow-border overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition hover:border-cyan-400/20">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 text-slate-300">
            <th className="px-4 py-3 font-medium">Model</th>
            <th className="px-4 py-3 font-medium">Decision accuracy</th>
            <th className="px-4 py-3 font-medium">Cost per case</th>
            <th className="px-4 py-3 font-medium">Latency</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.model} className="border-b border-white/5 last:border-0">
              <td className="px-4 py-3 font-medium text-slate-200">{r.model}</td>
              <td className="px-4 py-3 text-slate-300">{r.accuracy}</td>
              <td className="px-4 py-3 text-slate-300">{r.cost}</td>
              <td className="px-4 py-3 text-slate-300">{r.latency}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-white/10 px-4 py-2 text-xs text-slate-500">
        Source: TypeSafe's own production-workflow evals (evals.typesafe.ai), not an
        independent benchmark.
      </p>
    </div>
  );
}
