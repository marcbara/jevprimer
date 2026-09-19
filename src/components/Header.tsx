export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" fill="currentColor" />
          </svg>
          <span className="text-sm font-semibold tracking-wide text-slate-100">JevPrimer</span>
        </div>
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
          Published September 2026
        </span>
      </div>
    </header>
  );
}
