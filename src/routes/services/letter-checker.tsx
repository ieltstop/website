import { ArrowRight, CheckCircle, Lightbulb, Mail } from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

/* ─── Letter type data ───────────────────────────────────────────────── */

const letterTypes = [
  {
    type: 'Formal',
    accent: '#23A09C',
    when: 'Writing to someone you do not know, or in a professional / official context — complaints, applications, requests to authorities.',
    elements: [
      'Full greeting (Dear Sir/Madam)',
      'Formal sign-off (Yours faithfully)',
      'No contractions or slang',
      'Objective, polite tone',
    ],
    example:
      '"I am writing to express my concern regarding the recent changes to..."',
  },
  {
    type: 'Semi-formal',
    accent: '#E8773A',
    when: 'Writing to someone you know by name but do not have a close relationship with — a teacher, a landlord, a neighbour you have met.',
    elements: [
      'Named greeting (Dear Mr. Smith)',
      'Polite but warmer tone',
      'Some contractions acceptable',
      'Sign-off: Yours sincerely',
    ],
    example:
      '"I am writing to let you know about a situation that has come up at..."',
  },
  {
    type: 'Informal',
    accent: '#3B82F6',
    when: 'Writing to a close friend or family member — invitations, updates, congratulations, advice.',
    elements: [
      'Casual greeting (Dear/Hi + first name)',
      'Contractions and idioms welcome',
      'Conversational, friendly tone',
      'Sign-off: Best wishes / Take care',
    ],
    example:
      '"Hey! I just heard the great news and I had to write to you straight away..."',
  },
];

/* ─── Scoring criteria ───────────────────────────────────────────────── */

const criteria = [
  {
    name: 'Task Achievement',
    desc: 'All bullet points addressed with clear purpose, appropriate tone, and sufficient detail.',
    score: '7.0',
  },
  {
    name: 'Coherence & Cohesion',
    desc: 'Logical paragraph flow with smooth transitions between ideas and requests.',
    score: '7.0',
  },
  {
    name: 'Lexical Resource',
    desc: 'Varied vocabulary suited to the letter type — formal, semi-formal, or informal register.',
    score: '6.5',
  },
  {
    name: 'Grammatical Range',
    desc: 'Mix of simple and complex structures with consistent accuracy throughout.',
    score: '7.0',
  },
];

/* ─── What we check items ────────────────────────────────────────────── */

const checkItems = [
  'Appropriate tone & register',
  'Greeting & sign-off format',
  'Task completion',
  'Paragraph structure',
  'Vocabulary range',
  'Grammatical accuracy',
];

/* ═══════════════════════════════════════════════════════════════════════ */

export default function LetterCheckerPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section className="bg-bg-alt overflow-hidden" aria-labelledby="letter-hero-heading">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="section-label">General Training Task 1</span>
                <h1
                  id="letter-hero-heading"
                  className="mt-5 text-heading text-[32px] sm:text-[42px] md:text-[52px] leading-[1.08] font-heading font-bold max-w-xl"
                >
                  Perfect your IELTS{' '}
                  <span className="text-primary">letters</span>
                </h1>
                <p className="mt-5 text-body text-[17px] md:text-[19px] max-w-lg leading-relaxed">
                  Instant AI feedback on tone, structure, and scoring — so you
                  know exactly where your letter stands before exam day.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
                  <a
                    href="https://app.ieltstop.com/letters"
                    className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
                  >
                    Check Your Letter
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="https://app.ieltstop.com/signup"
                    className="inline-flex items-center h-[52px] px-8 border border-[#EAEAF0] text-heading text-[15px] font-semibold rounded-lg hover:bg-white transition-all"
                  >
                    Sign Up Free
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — letter feedback visual */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="hidden lg:flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[320px]">
                  <div className="bg-white rounded-xl border border-border px-6 py-4 shadow-card">
                    <span className="text-[12px] font-bold tracking-widest uppercase text-body/60">Your letter</span>
                    <p className="mt-1.5 text-body text-[14px] leading-relaxed">
                      "Dear Sir, I want to complain about the bad service I got at your hotel last week."
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="rounded-xl px-6 py-4 border border-primary/20" style={{ background: 'rgba(232,119,58,0.04)' }}>
                    <span className="text-[12px] font-bold tracking-widest uppercase text-primary">AI Feedback</span>
                    <p className="mt-1.5 text-heading text-[14px] leading-relaxed font-medium">
                      Tone: <span className="text-primary font-bold">Formal &#10003;</span> — Use "<span className="text-primary">I am writing to express my dissatisfaction</span>" for a stronger Band 7+ opening.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. Letter Types ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="letter-types-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Letter Types</span>
              <h2
                id="letter-types-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-bold leading-tight"
              >
                Three tones. One scoring system.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {letterTypes.map((card, i) => (
              <ScrollReveal key={card.type} delay={i * 0.1}>
                <div
                  className="group bg-white rounded-2xl border border-[#EAEAF0] h-full flex flex-col overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                  style={{ borderTop: `3px solid ${card.accent}` }}
                >
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="text-[20px] font-bold text-heading">
                      {card.type}
                    </h3>

                    <h4 className="mt-5 text-[12px] font-bold text-body/60 uppercase tracking-widest">
                      When to use it
                    </h4>
                    <p className="mt-2 text-[14px] text-body leading-[1.75]">
                      {card.when}
                    </p>

                    <h4 className="mt-5 text-[12px] font-bold text-body/60 uppercase tracking-widest">
                      Key Elements
                    </h4>
                    <ul className="mt-2.5 space-y-2 flex-1">
                      {card.elements.map((el) => (
                        <li
                          key={el}
                          className="flex items-start gap-2.5 text-[13px] text-body leading-[1.65]"
                        >
                          <CheckCircle
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: card.accent }}
                          />
                          {el}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 rounded-lg bg-[#F7F7FB] border border-[#EAEAF0] px-4 py-3">
                      <p className="text-[13px] italic text-body leading-[1.7]">
                        {card.example}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. What We Check ───────────────────────────────────────── */}
      <section className="section-padding bg-[#F7F7FB]" aria-labelledby="letter-check-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="section-label">Analysis</span>
                <h2
                  id="letter-check-heading"
                  className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-bold leading-tight"
                >
                  Every detail of your letter,
                  <br className="hidden lg:block" /> examined
                </h2>
                <p className="mt-5 text-[15px] text-body leading-[1.8] max-w-md">
                  Our AI doesn't just check grammar. It reads your letter the
                  way an IELTS examiner would — evaluating tone, format, task
                  completion, and language quality against the official marking
                  rubric.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.12}>
              <div className="bg-white rounded-2xl border border-[#EAEAF0] p-7 shadow-card">
                <ul className="space-y-4">
                  {checkItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-[15px] text-heading font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 4. Scoring Criteria ────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="letter-scoring-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-4">
              <span className="section-label">Scoring</span>
            </div>
            <div className="text-center mb-14">
              <div className="text-primary text-[56px] md:text-[72px] font-extrabold leading-none">
                4 Criteria
              </div>
              <p className="mt-4 text-[16px] text-body max-w-lg mx-auto leading-relaxed">
                Your letter is scored against the same four dimensions IELTS
                examiners use for General Training Task 1, so your estimated
                band reflects the real test.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {criteria.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-[#EAEAF0] p-6 flex items-start gap-5 shadow-card">
                  <div className="shrink-0 w-[58px] h-[58px] rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-[22px] font-extrabold">
                      {c.score}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-heading">
                      {c.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-body leading-[1.7]">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Sample Feedback Mock ────────────────────────────────── */}
      <section className="section-padding bg-[#F7F7FB]" aria-labelledby="letter-preview-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Preview</span>
              <h2
                id="letter-preview-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-bold leading-tight"
              >
                See what your feedback looks like
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-[#EAEAF0] shadow-card overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 bg-heading flex items-center justify-between">
                <span className="text-white text-[14px] font-bold">
                  Letter Feedback — Formal
                </span>
                <span className="text-primary text-[22px] font-extrabold">
                  Band 7.0
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {/* Tone badge */}
                <div className="flex items-center gap-3">
                  <span className="text-[13px] text-body font-medium">
                    Tone detected:
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[12px] font-bold"
                    style={{
                      backgroundColor: 'rgba(35,160,156,0.10)',
                      color: '#23A09C',
                    }}
                  >
                    Formal &#10003;
                  </span>
                </div>

                {/* Criteria scores */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Task Achievement', score: '7.0' },
                    { label: 'Coherence & Cohesion', score: '7.0' },
                    { label: 'Lexical Resource', score: '6.5' },
                    { label: 'Grammatical Range', score: '7.0' },
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center justify-between p-3.5 bg-[#F7F7FB] rounded-xl border border-[#EAEAF0]"
                    >
                      <span className="text-[12px] text-body">{c.label}</span>
                      <span className="text-[15px] font-extrabold text-heading">
                        {c.score}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Strengths */}
                <div className="border-t border-[#EAEAF0] pt-5">
                  <h4 className="text-[12px] font-bold text-body/60 uppercase tracking-widest mb-3">
                    Strengths
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex gap-2.5 text-[13px] text-body leading-[1.7]">
                      <CheckCircle className="w-4 h-4 text-[#23A09C] shrink-0 mt-0.5" />
                      All three bullet points fully addressed with relevant
                      detail.
                    </li>
                    <li className="flex gap-2.5 text-[13px] text-body leading-[1.7]">
                      <CheckCircle className="w-4 h-4 text-[#23A09C] shrink-0 mt-0.5" />
                      Tone is consistently formal and appropriate for the task.
                    </li>
                  </ul>
                </div>

                {/* Improvements */}
                <div className="border-t border-[#EAEAF0] pt-5">
                  <h4 className="text-[12px] font-bold text-body/60 uppercase tracking-widest mb-3">
                    Improvements
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex gap-2.5 text-[13px] text-body leading-[1.7]">
                      <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Vary opening phrases — "I am writing to" appears twice.
                      Try "I wish to bring to your attention" as an alternative.
                    </li>
                    <li className="flex gap-2.5 text-[13px] text-body leading-[1.7]">
                      <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Consider using more complex sentence structures in the
                      second paragraph to demonstrate grammatical range.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6. Final CTA ───────────────────────────────────────────── */}
      <section className="section-padding bg-bg-alt" aria-labelledby="letter-cta-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto">
              <h2
                id="letter-cta-heading"
                className="text-heading text-[28px] md:text-[36px] leading-[1.15] font-heading font-bold"
              >
                Start checking your letters
              </h2>
              <p className="mt-4 text-body text-[16px] leading-relaxed">
                Get instant, examiner-level feedback on your IELTS General
                Training letters and walk into exam day with confidence.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.ieltstop.com/letters"
                  className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
                >
                  Check Your Letter
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://app.ieltstop.com/signup"
                  className="inline-flex items-center h-[52px] px-8 border border-[#EAEAF0] text-heading text-[15px] font-semibold rounded-lg hover:bg-white transition-all"
                >
                  Create Free Account
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
