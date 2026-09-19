import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ComparisonTable from './components/ComparisonTable';
import StatCards from './components/StatCards';
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
            Jev is an AI model released on September 15, 2026 by TypeSafe AI, the startup
            founded by Diogo Almeida (co-inventor of ChatGPT). It's not just another LLM:
            it's the first public model in a category TypeSafe calls a "System One Model" —
            a model built exclusively for fast, structured decisions, not for generating
            text.
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <Section title="How it differs from a normal LLM">
          <ComparisonTable />
          <p>
            Jev doesn't write prose or code. It receives a "state" (a description of the
            situation) and a set of typed questions, and responds with calibrated values
            and probabilities.
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <Section title="Why it made so much noise">
          <p>
            Within 24 hours, Diogo Almeida's announcement on X surpassed 4 million views
            and stayed at the top of Hacker News for a full day.{' '}
            <strong className="text-slate-300">
              These numbers are TypeSafe's own claims, not an independent audit:
            </strong>
          </p>
          <StatCards />
          <p className="text-sm text-slate-500">
            Training is based on a proprietary technique called RLCD (calibrated
            decisions) — described only in TypeSafe's own docs so far.
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <Section title="What critics are actually saying">
          <p>
            Not everyone is convinced this is a new AGI frontier. From the Hacker News
            thread on the launch:
          </p>
          <blockquote className="border-l-2 border-cyan-400/40 pl-4 italic text-slate-400">
            "This isn't even remotely comparable to LLMs, so why compare? [...] The video
            is 100% marketing slop [...] I'm sure there is a niche for this, but please
            let's not hype this as if it's the next big thing in AI."
            <footer className="mt-1 text-xs text-slate-500 not-italic">
              — kypro, Hacker News
            </footer>
          </blockquote>
          <p>
            On the other side, early independent testing on Reddit reported Jev
            outperforming other solutions on public benchmarks for grading harmful
            content — while being dramatically cheaper. So the honest read is split:
            real efficiency gains on narrow classification tasks, real skepticism about
            whether the "System One" framing deserves the AGI-adjacent attention it's
            getting.
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <Section title="Real use cases already circulating">
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
