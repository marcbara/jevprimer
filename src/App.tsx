import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ComparisonTable from './components/ComparisonTable';
import StatCards from './components/StatCards';
import Primitives from './components/Primitives';
import TradeoffTable from './components/TradeoffTable';
import CodeSample from './components/CodeSample';
import UseCaseGrid from './components/UseCaseGrid';
import TryItLinks from './components/TryItLinks';
import Unknowns from './components/Unknowns';
import Footer from './components/Footer';
import Reveal from './components/Reveal';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-200 antialiased overflow-x-clip">
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-grid opacity-[0.5]" />

      <Header />
      <Hero />

      <Reveal>
        <Section id="what-is-jev" title="What is Jev">
          <p>
            Jev is an AI model released on September 15, 2026 by TypeSafe AI, a startup
            founded by Diogo Almeida (who helped build the RLHF methods behind ChatGPT
            at OpenAI). It belongs to a new category TypeSafe calls a{' '}
            <strong className="text-slate-300">"System One Model"</strong>: instead of
            generating text token by token, it evaluates a situation and returns typed,
            probabilistic answers in one parallel pass, closer to a very fast, very
            cheap function call than to a chatbot.
          </p>
          <p>
            The name is a double reference: to Kahneman's fast, intuitive "System 1"
            thinking (as opposed to the slow, deliberate reasoning of "System 2" LLMs),
            and to economist William Stanley Jevons. TypeSafe's bet is that, like coal
            after the steam engine, cheaper intelligence unlocks far more use cases than
            it replaces.
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <Section title="The three question types it actually answers">
          <p>
            Jev doesn't take open-ended prompts. Every call sends a{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-cyan-300">
              state
            </code>{' '}
            (the situation, as text or structured data) plus one or more typed{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-cyan-300">
              questions
            </code>
            . There are exactly three kinds:
          </p>
          <Primitives />
          <p>
            All questions in a request are evaluated in parallel against the same state.
            adding a fourth question barely changes latency, unlike chaining more LLM
            calls.
          </p>
          <CodeSample />
        </Section>
      </Reveal>

      <Reveal>
        <Section title="How it differs from a chat LLM">
          <ComparisonTable />
        </Section>
      </Reveal>

      <Reveal>
        <Section title="The tradeoff nobody puts in the headline">
          <p>
            TypeSafe's own published workflow evals are the most useful number in this
            whole launch, and it's the one most coverage skips: Jev is much faster and
            cheaper, but it is <strong className="text-slate-300">less accurate</strong>{' '}
            than a top-tier reasoning model on the same task. Here's TypeSafe's own
            comparison against Claude Opus 5 on a production-style decision workflow:
          </p>
          <TradeoffTable />
          <p>
            That's the actual pitch: give up 5 accuracy points to cut cost by ~440x and
            latency by ~94x. For a single high-stakes decision, that trade is a bad idea.
            For scoring, routing, or triaging millions of low-stakes cases where you'd
            never afford a frontier model anyway, it can be the difference between
            "we can't automate this" and "we can."
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <Section title="Why it made so much noise">
          <p>
            Within 24 hours, Diogo Almeida's announcement on X surpassed 4 million views
            and stayed at the top of Hacker News for a full day. The headline claims:
          </p>
          <StatCards />
          <p className="text-sm text-slate-500">
            These are TypeSafe's own published benchmarks, not a third-party audit. See
            the tradeoff above for the context that usually gets cut from the numbers.
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <Section title="What's genuinely credible, and what to watch" eyebrow="Balanced view">
          <p>
            To TypeSafe's credit, their launch post is unusually candid for a startup
            announcement: they flag their own demo as "simplified" and shorter-input than
            typical, note their reference model choice (GPT-6 Astra / Claude Fable 5.1)
            biases results toward those labs, and say outright that they{' '}
            <em>"can't prove pricing isn't subsidized."</em> Sustainability will only be
            provable over time.
          </p>
          <p>
            The open questions worth tracking: whether $42/billion-token pricing holds up
            long-term, whether RLCD-trained calibration degrades on messy real-world state
            outside the curated eval set, and whether the 255-option cardinality limit on
            Choice questions becomes a real constraint at scale.
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <Section title="Who's actually building with it" eyebrow="In the wild">
          <UseCaseGrid />
        </Section>
      </Reveal>

      <Reveal>
        <Section title="How to try it">
          <TryItLinks />
        </Section>
      </Reveal>

      <Reveal>
        <Section title="What we still don't know">
          <Unknowns />
        </Section>
      </Reveal>

      <Footer />
    </div>
  );
}
