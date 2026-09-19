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
            and stayed at the top of Hacker News for a full day. Numbers claimed by
            TypeSafe:
          </p>
          <StatCards />
          <p>
            Training is based on a proprietary technique called RLCD (calibrated
            decisions).
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
