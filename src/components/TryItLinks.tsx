const links = [
  { label: 'Official docs', href: 'https://docs.typesafe.ai' },
  { label: 'Public evals', href: 'https://evals.typesafe.ai' },
  { label: 'LangChain integration', href: 'https://www.langchain.com/blog/building-a-harness-with-jev' },
];

export default function TryItLinks() {
  return (
    <ul id="how-to-try-it" className="space-y-2">
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cyan-300 underline-offset-4 hover:underline"
          >
            {l.label} →
          </a>
        </li>
      ))}
    </ul>
  );
}
