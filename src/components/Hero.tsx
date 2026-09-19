export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4]" />
      <div
        aria-hidden
        className="orb pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="orb pointer-events-none absolute right-10 top-16 h-40 w-40 rounded-full bg-cyan-400/30 blur-2xl"
        style={{ animationDelay: '2s' }}
      />
      <div className="relative mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Published September 2026
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-50 sm:text-6xl">
          Jev, Explained{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            From Scratch
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          A technical primer on TypeSafe's viral System One Model: how it actually
          works, the real accuracy/cost tradeoff behind the big numbers, and who's
          already building with it, in about 5 minutes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#what-is-jev"
            className="rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-[#05070f] transition hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
          >
            Start reading
          </a>
          <a
            href="#how-to-try-it"
            className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:scale-105 hover:border-white/30 hover:bg-white/5"
          >
            How to try it
          </a>
        </div>
      </div>
    </section>
  );
}
