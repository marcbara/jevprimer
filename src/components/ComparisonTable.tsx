const rows = [
  {
    label: 'Output',
    llm: 'Free-form text/strings (must be parsed, can hallucinate)',
    jev: 'Typed, structured values defined in advance',
  },
  {
    label: 'Speed',
    llm: 'Seconds',
    jev: '~100 milliseconds',
  },
  {
    label: 'Cost',
    llm: 'High (per generated token)',
    jev: '40-400x cheaper; output tokens are free',
  },
  {
    label: 'Ideal use',
    llm: 'Open-ended reasoning, code, conversation',
    jev: 'Classification, routing, scoring, binary/probabilistic decisions',
  },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 text-slate-300">
            <th className="px-4 py-3 font-medium"> </th>
            <th className="px-4 py-3 font-medium">Traditional LLMs</th>
            <th className="px-4 py-3 font-medium text-cyan-300">Jev (System One)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-white/5 last:border-0">
              <td className="px-4 py-3 font-medium text-slate-200">{row.label}</td>
              <td className="px-4 py-3 text-slate-400">{row.llm}</td>
              <td className="px-4 py-3 text-slate-300">{row.jev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
