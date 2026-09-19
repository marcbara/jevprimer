type Demo = {
  category: string;
  metric: string;
  title: string;
  body: string;
  insight: string;
  source: string;
  code?: string;
  demo?: string;
};

const demos: Demo[] = [
  {
    category: 'Browser agent',
    metric: '7 sec',
    title: 'Book a flight before a normal agent finishes thinking',
    body: 'Browser Use built a tiny agent where Jev chooses each action from the live DOM. A Google Flights flow completed in roughly seven seconds at a reported cost of $0.0039.',
    insight: 'Why it clicks: browser control is mostly a rapid sequence of bounded choices, exactly the shape Jev is optimized for.',
    source: 'https://x.com/i/status/2100411066966749359',
    code: 'https://github.com/browser-use/jev-ultrafast',
  },
  {
    category: 'Trading agent',
    metric: 'Live',
    title: 'Turn an order book into buy, sell, or hold probabilities',
    body: 'Zade built a live trading experiment that feeds market state into Jev and executes from its directional probabilities. The published demo includes both good and bad decisions.',
    insight: 'Why it clicks: Jev makes the fast judgment; deterministic code still owns position sizing and risk.',
    source: 'https://x.com/zadescoxp/status/2100675952317792734',
    code: 'https://github.com/zadescoxp/Jev-Trades',
    demo: 'https://jevtrades.zadescoxp.com',
  },
  {
    category: 'Email screener',
    metric: 'Always on',
    title: 'Classify every inbound email before it reaches the inbox',
    body: 'Larry Gadea runs Jev as a spam and screening layer on all incoming email through Google Pub/Sub, automatically labeling or archiving messages before delivery.',
    insight: 'Why it clicks: high-volume, repetitive classification is where sub-cent cost and calibrated scores matter most.',
    source: 'https://x.com/lg/status/2100858358383481309',
  },
];

function Link({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-underline text-xs font-medium text-cyan-300"
    >
      {children} →
    </a>
  );
}

export default function FeaturedDemos() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {demos.map((demo, index) => (
        <article
          key={demo.title}
          className="glow-border group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_0_35px_rgba(34,211,238,0.14)]"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/65">
              {String(index + 1).padStart(2, '0')} · {demo.category}
            </span>
            <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-300">
              {demo.metric}
            </span>
          </div>

          <h3 className="mt-5 text-lg font-semibold leading-snug text-slate-100">
            {demo.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{demo.body}</p>
          <p className="mt-4 border-l border-cyan-400/35 pl-3 text-xs leading-relaxed text-slate-500">
            {demo.insight}
          </p>

          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-5">
            <Link href={demo.source}>Watch source</Link>
            {demo.code && <Link href={demo.code}>View code</Link>}
            {demo.demo && <Link href={demo.demo}>Open demo</Link>}
          </div>
        </article>
      ))}
    </div>
  );
}
