import {
  Mic,
  ArrowRight,
  AudioWaveform,
  MessageSquareText,
  BarChart3,
  BookOpenCheck,
  Users,
  Lightbulb,
  Target,
  Volume2,
} from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

/* ─── Data ─────────────────────────────────────────────────────────────── */

const steps = [
  {
    num: '01',
    icon: Mic,
    title: 'Record Audio',
    desc: 'Record your speaking response directly in the browser or upload an audio file. Supports all three parts of the IELTS speaking test.',
  },
  {
    num: '02',
    icon: AudioWaveform,
    title: 'AI Analyzes Speech',
    desc: 'Our AI engine evaluates your pronunciation, fluency, grammar usage, and vocabulary range against official IELTS criteria.',
  },
  {
    num: '03',
    icon: MessageSquareText,
    title: 'Get Detailed Feedback',
    desc: 'Receive a comprehensive breakdown of your performance with actionable suggestions to improve each scoring criterion.',
  },
];

const features = [
  {
    icon: Volume2,
    title: 'Pronunciation Score',
    desc: 'Get precise feedback on individual sounds, word stress, intonation patterns, and connected speech features.',
  },
  {
    icon: AudioWaveform,
    title: 'Fluency Analysis',
    desc: 'Measure your speech rate, pause patterns, hesitation frequency, and overall coherence in real time.',
  },
  {
    icon: BookOpenCheck,
    title: 'Grammar Feedback',
    desc: 'Identify grammatical errors, track sentence complexity, and learn how to use a wider range of structures.',
  },
  {
    icon: BarChart3,
    title: 'Vocabulary Range',
    desc: 'Assess your lexical diversity, topic-specific vocabulary usage, and suggestions for Band 7+ alternatives.',
  },
];

const parts = [
  {
    part: 'Part 1',
    title: 'Introduction & Interview',
    desc: 'Practice answering familiar topic questions about your home, work, studies, and interests. Build confidence with everyday topics.',
  },
  {
    part: 'Part 2',
    title: 'Long Turn (Cue Card)',
    desc: 'Prepare and deliver a 1-2 minute talk on a given topic. Master planning, structure, and extended speaking under timed conditions.',
  },
  {
    part: 'Part 3',
    title: 'Discussion',
    desc: 'Engage with abstract questions linked to Part 2. Develop your ability to express and justify opinions on complex issues.',
  },
];

const criteria = [
  {
    icon: AudioWaveform,
    title: 'Fluency & Coherence',
    desc: 'Speaks at length without noticeable effort or loss of coherence. Uses a range of connectives and discourse markers.',
  },
  {
    icon: Lightbulb,
    title: 'Lexical Resource',
    desc: 'Uses a wide vocabulary resource readily and flexibly to convey precise meaning. Uses less common and idiomatic vocabulary.',
  },
  {
    icon: Target,
    title: 'Grammatical Range & Accuracy',
    desc: 'Uses a wide range of structures flexibly. Produces majority of sentences error-free with only occasional inaccuracies.',
  },
  {
    icon: Volume2,
    title: 'Pronunciation',
    desc: 'Uses a wide range of pronunciation features. Sustains flexible use of features with only occasional lapses.',
  },
];

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function SpeakingAssessmentPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2A2A45 100%)' }}
        aria-labelledby="speaking-hero-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,119,58,0.15),transparent_50%)]" />
        <div className="container-main relative z-10 pt-20 md:pt-28 pb-16 md:pb-24 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 mb-6">
              <Mic className="w-8 h-8 text-primary" />
            </div>
            <h1
              id="speaking-hero-heading"
              className="text-white text-[30px] sm:text-[40px] md:text-[50px] leading-[1.1] font-heading font-extrabold italic max-w-3xl mx-auto"
            >
              AI Speaking Assessment
            </h1>
            <p className="mt-5 text-white/65 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
              Record your IELTS speaking responses and get instant feedback on pronunciation, fluency, grammar, and vocabulary. Practice for all three parts of the speaking test.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://app.ieltstop.com/speaking"
                className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
              >
                Try Speaking Assessment
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://app.ieltstop.com/speaking"
                className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white/80 text-[15px] font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                See a Demo
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="speaking-steps-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">How It Works</span>
              <h2
                id="speaking-steps-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Three Simple Steps
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                Get AI-powered feedback on your speaking in minutes, not days.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className="relative bg-white rounded-2xl border border-border p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary text-[13px] font-bold mb-5">
                    {step.num}
                  </span>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-bg-alt mb-4">
                    <step.icon className="w-7 h-7 text-heading" />
                  </div>
                  <h3 className="text-heading text-[18px] font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="py-16 md:py-24 bg-bg-alt" aria-labelledby="speaking-features-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">What You Get</span>
              <h2
                id="speaking-features-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Comprehensive Speaking Analysis
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                Every aspect of your speaking performance, measured and explained.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-7 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <feat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-heading text-[16px] font-bold">{feat.title}</h3>
                  <p className="mt-2 text-muted-foreground text-[13px] leading-relaxed">{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice All 3 Parts ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="speaking-parts-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Full Test Coverage</span>
              <h2
                id="speaking-parts-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Practice All 3 Parts
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                Our assessment covers every section of the IELTS speaking test so you can prepare comprehensively.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {parts.map((p, i) => (
              <ScrollReveal key={p.part} delay={i * 0.12}>
                <div className="bg-white rounded-2xl border border-border p-8 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 h-full">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-bold tracking-wide mb-4">
                    {p.part}
                  </span>
                  <h3 className="text-heading text-[18px] font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scoring Criteria ── */}
      <section className="py-16 md:py-24 bg-bg-alt" aria-labelledby="speaking-criteria-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Official IELTS Criteria</span>
              <h2
                id="speaking-criteria-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Scored on All 4 Criteria
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                Your assessment mirrors the exact criteria used by IELTS examiners worldwide.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {criteria.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="flex gap-4 bg-white rounded-2xl border border-border p-7 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-heading text-[16px] font-bold">{c.title}</h3>
                    <p className="mt-1.5 text-muted-foreground text-[13px] leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-5 md:px-10 py-6 md:py-8" aria-labelledby="speaking-cta-heading">
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-2xl py-16 md:py-24 px-6 md:px-10 text-center"
            style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2A2A45 100%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,119,58,0.2),transparent_50%)]" />
            <div className="relative z-10 max-w-xl mx-auto">
              <h2
                id="speaking-cta-heading"
                className="text-white text-[30px] md:text-[38px] leading-[1.15] font-heading font-extrabold italic"
              >
                Ready to Ace Your Speaking Test?
              </h2>
              <p className="mt-4 text-white/55 text-[16px] leading-relaxed">
                Get instant AI feedback on your pronunciation, fluency, and grammar. Start practicing today and walk into your exam with confidence.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.ieltstop.com/speaking"
                  className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
                >
                  Start Speaking Practice
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://app.ieltstop.com/speaking"
                  className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white/80 text-[15px] font-semibold rounded-lg hover:bg-white/5 transition-all"
                >
                  View Sample Feedback
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
