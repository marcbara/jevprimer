import useCountUp from '../hooks/useCountUp';

function Stat({ target, decimals, prefix = '', suffix = '', label }: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const { ref, display } = useCountUp(target, decimals);
  return (
    <div className="glow-border rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
      <div className="text-2xl font-bold text-cyan-300">
        {prefix}
        <span ref={ref}>{display}</span>
        {suffix}
      </div>
      <div className="mt-1 text-xs text-slate-400">{label}</div>
    </div>
  );
}

export default function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <Stat target={100} suffix=" ms" label="latency" />
      <Stat target={42} prefix="$" label="per billion tokens" />
      <Stat target={200} prefix="20-" suffix="x" label="faster" />
      <Stat target={400} prefix="40-" suffix="x" label="cheaper" />
    </div>
  );
}
