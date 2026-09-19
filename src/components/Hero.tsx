export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl">
        <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
          Published September 2026
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          Jev, Explained <span className="text-cyan-400">From Scratch</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          A technical primer on TypeSafe's viral "System One Model": how it actually
          works, the real accuracy/cost tradeoff behind the big numbers, and who's
          already building with it, in about 5 minutes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#what-is-jev"
            className="rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-[#05070f] transition hover:bg-cyan-400"
          >
            Start reading
          </a>
          <a
            href="#how-to-try-it"
            className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
          >
            How to try it
          </a>
        </div>
      </div>
    </section>
  );
}
