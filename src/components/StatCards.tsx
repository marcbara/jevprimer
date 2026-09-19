const stats = [
  { value: '~100 ms', label: 'latency' },
  { value: '$42', label: 'per billion tokens' },
  { value: '20-200x', label: 'faster' },
  { value: '40-400x', label: 'cheaper' },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
        >
          <div className="text-2xl font-bold text-cyan-300">{s.value}</div>
          <div className="mt-1 text-xs text-slate-400">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
