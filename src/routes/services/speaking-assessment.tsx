import { ArrowRight, Mic } from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

/* ─── Circular progress ring (CSS conic-gradient) ─────────────────────── */

function ProgressRing({
  label,
  value,
  color = '#E8773A',
}: {
  label: string;
  value: number;
  color?: string;
}) {
  const bg = `conic-gradient(${color} ${value * 3.6}deg, #EAEAF0 ${value * 3.6}deg)`;
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center"
        style={{ background: bg }}
      >
        <div className="absolute inset-[6px] rounded-full bg-white flex items-center justify-center">
          <span className="text-[20px] font-extrabold text-[#1A1A2E]">{value}%</span>
        </div>
      </div>
      <span className="text-[14px] font-semibold text-[#1A1A2E]">{label}</span>
    </div>
  );
}

/* ─── Waveform decoration ─────────────────────────────────────────────── */

function Waveform({ barCount = 32, className = '' }: { barCount?: number; className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-[2px] ${className}`} aria-hidden="true">
      {Array.from({ length: barCount }).map((_, i) => {
        const h = 8 + Math.round(Math.sin(i * 0.55) * 16 + Math.cos(i * 0.3) * 10);
        return (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: 3,
              height: Math.max(4, h),
              background: `rgba(232,119,58,${0.25 + (h / 40) * 0.6})`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─── Data ────────────────────────────────────────────────────────────── */

const parts = [
  {
    num: 1,
    name: 'Introduction & Interview',
    time: '4 - 5 minutes',
    tested: 'Ability to communicate opinions and information on everyday topics and common experiences.',
    questions: [
      'Do you work or are you a student?',
      'What do you enjoy doing in your free time?',
      'Tell me about your hometown.',
    ],
  },
  {
    num: 2,
    name: 'Long Turn / Cue Card',
    time: '3 - 4 minutes',
    tested: 'Ability to speak at length on a topic, organize ideas coherently, and use appropriate language.',
    questions: [
      'Describe a book that had a major influence on you.',
      'Talk about a place you would like to visit in the future.',
    ],
  },
  {
    num: 3,
    name: 'Discussion',
    time: '4 - 5 minutes',
    tested: 'Ability to express and justify opinions, analyze, discuss, and speculate on abstract issues.',
    questions: [
      'Do you think reading habits have changed over time?',
      'Why is travel important for personal growth?',
      'How might tourism change in the next 50 years?',
    ],
  },
];

const metrics = [
  { label: 'Pronunciation', value: 82 },
  { label: 'Fluency', value: 75 },
  { label: 'Grammar', value: 80 },
  { label: 'Vocabulary', value: 78 },
];

const howItWorks = [
  {
    step: 1,
    title: 'Record your response',
    desc: 'Choose any IELTS speaking topic and record your audio directly in the browser. Supports Parts 1, 2, and 3 with built-in timers to simulate real exam conditions.',
  },
  {
    step: 2,
    title: 'AI processes your speech',
    desc: 'Our engine transcribes your audio and analyzes pronunciation accuracy, fluency patterns, grammatical structures, and lexical range against IELTS band descriptors.',
  },
  {
    step: 3,
    title: 'Get detailed feedback',
    desc: 'Receive criterion-level scores, highlighted strengths, specific weaknesses, and actionable practice tips tailored to help you reach your target band.',
  },
];

const scoringCriteria = [
  {
    name: 'Fluency & Coherence',
    lookFor:
      'Sustained speech without noticeable effort. Uses connectives and discourse markers naturally. Topics are developed logically with clear progression.',
    tips: 'Practice thinking in English rather than translating. Record yourself and count hesitations per minute — aim to reduce them over time.',
  },
  {
    name: 'Lexical Resource',
    lookFor:
      'Wide vocabulary used flexibly and precisely. Paraphrases effectively. Uses less common and idiomatic items to discuss abstract topics.',
    tips: 'Learn vocabulary in collocations, not isolated words. Replace generic words like "good" and "bad" with precise alternatives.',
  },
  {
    name: 'Grammatical Range & Accuracy',
    lookFor:
      'Variety of complex structures produced naturally. Majority of sentences are error-free. Errors do not impede communication.',
    tips: 'Mix simple and complex sentences intentionally. Practice conditional, passive, and relative clause structures in speaking drills.',
  },
  {
    name: 'Pronunciation',
    lookFor:
      'Full range of features used flexibly — word stress, sentence stress, intonation, connected speech. Accent does not affect intelligibility.',
    tips: 'Shadow native speakers using podcasts. Focus on stressed vs. unstressed syllables — this matters more than individual sounds.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════ */

export default function SpeakingAssessmentPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden section-padding"
        style={{ background: 'linear-gradient(160deg, #1A1A2E 0%, #2A2A44 100%)' }}
      >
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(232,119,58,0.12),transparent_60%)]" />

        <div className="container-main relative z-10 text-center">
          <ScrollReveal>
            {/* Mic */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/15 border border-primary/20 mb-7">
              <Mic className="w-9 h-9 text-primary" />
            </div>

            <h1 className="text-white text-[34px] sm:text-[44px] md:text-[54px] font-extrabold leading-[1.08] max-w-3xl mx-auto">
              AI Speaking
              <br />
              <span className="text-primary">Assessment</span>
            </h1>

            <p className="mt-5 text-white/55 text-[17px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
              Record your IELTS speaking responses and receive instant, criterion-level
              feedback on pronunciation, fluency, grammar, and vocabulary.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://app.ieltstop.com/speaking"
                className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-[0_4px_20px_rgba(232,119,58,0.35)]"
              >
                Try Speaking Assessment
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://app.ieltstop.com/signup"
                className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white/70 text-[15px] font-semibold rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                Sign Up Free
              </a>
            </div>

            {/* Part badges */}
            <div className="mt-10 flex items-center justify-center gap-3">
              {['Part 1', 'Part 2', 'Part 3'].map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[12px] text-white/45 font-semibold tracking-wide"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Waveform */}
            <Waveform barCount={48} className="mt-10 opacity-60" />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. The 3 Parts ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Full Test Coverage</span>
              <h2 className="mt-5 text-[#1A1A2E] text-[28px] md:text-[36px] font-extrabold leading-tight">
                The 3 parts of the speaking test
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parts.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 0.12}>
                <div className="relative bg-white rounded-2xl border border-[#EAEAF0] p-8 h-full shadow-card hover:border-primary/25 transition-all duration-300 overflow-hidden">
                  {/* Faded part number */}
                  <div className="absolute top-4 right-5 text-[72px] font-extrabold text-[#1A1A2E]/[0.04] leading-none select-none">
                    {p.num}
                  </div>

                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-bold tracking-wide mb-4">
                    Part {p.num}
                  </span>
                  <h3 className="text-[20px] font-bold text-[#1A1A2E] mb-1">
                    {p.name}
                  </h3>
                  <span className="text-[13px] text-primary font-semibold">{p.time}</span>
                  <p className="mt-3 text-[13px] text-[#555568] leading-[1.7]">
                    {p.tested}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#EAEAF0] space-y-2">
                    {p.questions.map((q, qi) => (
                      <p
                        key={qi}
                        className="text-[12px] text-[#555568]/80 italic leading-[1.6]"
                      >
                        "{q}"
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. What We Analyze ─────────────────────────────────────── */}
      <section className="section-padding bg-[#F7F7FB]">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Analysis</span>
              <h2 className="mt-5 text-[#1A1A2E] text-[28px] md:text-[36px] font-extrabold leading-tight">
                What we analyze
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {metrics.map((m) => (
                <ProgressRing key={m.label} label={m.label} value={m.value} />
              ))}
            </div>
          </ScrollReveal>

          {/* Waveform accent */}
          <Waveform barCount={64} className="mt-12 opacity-30" />
        </div>
      </section>

      {/* ── 4. How It Works ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Process</span>
              <h2 className="mt-5 text-[#1A1A2E] text-[28px] md:text-[36px] font-extrabold leading-tight">
                How it works
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-0">
            {howItWorks.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.12}>
                <div className="flex gap-6 md:gap-8">
                  {/* Step number + connector line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-[16px] font-extrabold">
                      {item.step}
                    </div>
                    {i < howItWorks.length - 1 && (
                      <div className="w-[2px] flex-1 bg-[#EAEAF0] my-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-12 ${i === howItWorks.length - 1 ? 'pb-0' : ''}`}>
                    <h3 className="text-[18px] font-bold text-[#1A1A2E] mt-2.5">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] text-[#555568] leading-[1.8]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Scoring Criteria ────────────────────────────────────── */}
      <section className="section-padding bg-[#F7F7FB]">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Official IELTS Criteria</span>
              <h2 className="mt-5 text-[#1A1A2E] text-[28px] md:text-[36px] font-extrabold leading-tight">
                Scoring criteria
              </h2>
              <p className="mt-4 text-[15px] text-[#555568] max-w-xl mx-auto leading-relaxed">
                Your assessment mirrors the exact four criteria used by IELTS examiners
                worldwide.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {scoringCriteria.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-[#EAEAF0] p-7 h-full shadow-card hover:border-primary/25 transition-all duration-300">
                  <h3 className="text-[18px] font-bold text-[#1A1A2E] mb-3">
                    {c.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-primary tracking-widest uppercase">
                      What examiners look for
                    </span>
                    <p className="mt-1.5 text-[13px] text-[#555568] leading-[1.7]">
                      {c.lookFor}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#EAEAF0]">
                    <span className="text-[11px] font-bold text-[#1A1A2E]/50 tracking-widest uppercase">
                      Tip to improve
                    </span>
                    <p className="mt-1.5 text-[13px] text-[#555568] leading-[1.7]">
                      {c.tips}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ─────────────────────────────────────────────────── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1A1A2E 0%, #2A2A44 100%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(232,119,58,0.1),transparent_60%)]" />
        <div className="container-main relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-white text-[28px] md:text-[38px] font-extrabold leading-tight">
              Start your speaking practice
            </h2>
            <p className="mt-4 text-[16px] text-white/45 max-w-xl mx-auto leading-relaxed">
              Get instant AI feedback on pronunciation, fluency, grammar, and
              vocabulary. Walk into your exam with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://app.ieltstop.com/speaking"
                className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-[0_4px_20px_rgba(232,119,58,0.35)]"
              >
                Start Speaking Practice
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://app.ieltstop.com/signup"
                className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white/70 text-[15px] font-semibold rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                Create Free Account
              </a>
            </div>

            <Waveform barCount={40} className="mt-12 opacity-40" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
