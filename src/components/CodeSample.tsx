const code = `{
  "model": "jev-latest",
  "state": "Hi, I've been trying to connect my Stripe account
    for 3 days and it keeps failing. I'm losing sales. Help ASAP.",
  "questions": {
    "is_urgent": {
      "type": "noul",
      "instructions": "The message conveys urgency or time-sensitivity"
    }
  }
}

// Response:
{
  "is_urgent": { "type": "noul", "noul": 0.999 }
}`;

export default function CodeSample() {
  return (
    <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-relaxed text-slate-300">
      <code>{code}</code>
    </pre>
  );
}
