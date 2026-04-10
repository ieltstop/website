import { ArrowRight, CheckCircle, Lightbulb } from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

export default function LetterCheckerPage() {
  return (
    <>
      {/* Hero — Centered with letter type pills */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-label">Letter Checker</span>
              <h1
                className="mt-5 text-heading font-bold leading-[1.08] tracking-tight"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)' }}
              >
                Perfect your IELTS
                <br />
                Task 1 letters
              </h1>
              <p className="mt-5 text-[17px] text-body leading-[1.75] max-w-xl mx-auto">
                Instant AI feedback on tone, structure, and scoring — so you know
                exactly where your letter stands before exam day.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://app.ieltstop.com/letters"
                  className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-colors"
                >
                  Check Your Letter <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://app.ieltstop.com/signup"
                  className="inline-flex items-center gap-2 h-12 px-8 border-2 border-border text-heading text-[15px] font-bold rounded-lg hover:bg-bg-alt transition-colors"
                >
                  Sign Up Free
                </a>
              </div>

              {/* Letter type pills */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <span
                  className="px-4 py-1.5 rounded-full text-[13px] font-semibold"
                  style={{ backgroundColor: '#E8F5F4', color: '#23A09C' }}
                >
                  Formal
                </span>
                <span
                  className="px-4 py-1.5 rounded-full text-[13px] font-semibold"
                  style={{ backgroundColor: '#FEF0E6', color: '#E8773A' }}
                >
                  Semi-formal
                </span>
                <span
                  className="px-4 py-1.5 rounded-full text-[13px] font-semibold"
                  style={{ backgroundColor: '#EEF2FF', color: '#3B82F6' }}
                >
                  Informal
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Letter types explained — 3 large cards */}
      <section className="section-padding bg-bg-alt">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Letter Types</span>
              <h2 className="mt-5 text-heading">Three tones. One scoring system.</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
                example: '"I am writing to express my concern regarding the recent changes to..."',
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
                example: '"I am writing to let you know about a situation that has come up at..."',
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
                example: '"Hey! I just heard the great news and I had to write to you straight away..."',
              },
            ].map((card, i) => (
              <ScrollReveal key={card.type} delay={i * 0.1}>
                <div
                  className="bg-white rounded-xl border border-border h-full flex flex-col overflow-hidden"
                  style={{ borderTop: `3px solid ${card.accent}` }}
                >
                  <div className="p-6 flex-1">
                    <h3 className="text-[18px] font-bold text-heading">{card.type}</h3>
                    <p className="mt-3 text-[13px] text-body leading-[1.7]">{card.when}</p>

                    <h4 className="mt-5 text-[13px] font-bold text-heading uppercase tracking-wider">
                      Key Elements
                    </h4>
                    <ul className="mt-2 space-y-1.5">
                      {card.elements.map((el) => (
                        <li key={el} className="flex gap-2 text-[13px] text-body leading-[1.6]">
                          <span style={{ color: card.accent }} className="shrink-0 mt-0.5">
                            --
                          </span>
                          {el}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 text-[13px] italic text-body leading-[1.7]">{card.example}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we check — 2-column */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <div>
                <span className="section-label">Analysis</span>
                <h2 className="mt-5 text-heading">
                  Every detail of your letter,
                  <br className="hidden lg:block" /> examined
                </h2>
                <p className="mt-5 text-[15px] text-body leading-[1.8] max-w-md">
                  Our AI doesn't just check grammar. It reads your letter the way an
                  IELTS examiner would — evaluating tone, format, task completion, and
                  language quality against the official marking rubric.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="bg-bg-alt rounded-xl border border-border p-6">
                <ul className="space-y-4">
                  {[
                    'Appropriate tone & register',
                    'Greeting & sign-off format',
                    'Task completion',
                    'Paragraph structure',
                    'Vocabulary range',
                    'Grammatical accuracy',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-[15px] text-heading font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scoring criteria — Horizontal bars */}
      <section className="section-padding bg-bg-alt">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Scoring</span>
              <h2 className="mt-5 text-heading">Evaluated on all 4 IELTS criteria</h2>
              <p className="mt-4 text-[15px] text-body max-w-2xl mx-auto">
                Your letter is assessed against the same rubric IELTS examiners use for
                General Training Task 1.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-5">
            {[
              { label: 'Task Achievement', pct: 82, color: '#E8773A' },
              { label: 'Coherence & Cohesion', pct: 76, color: '#23A09C' },
              { label: 'Lexical Resource', pct: 70, color: '#3B82F6' },
              { label: 'Grammatical Range & Accuracy', pct: 74, color: '#8B5CF6' },
            ].map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 0.08}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[14px] font-bold text-heading">{c.label}</span>
                  </div>
                  <div className="h-3 rounded-full bg-white border border-border overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${c.pct}%`,
                        background: `linear-gradient(90deg, ${c.color}CC, ${c.color})`,
                        transition: 'width 1s ease',
                      }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample feedback mock */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Preview</span>
              <h2 className="mt-5 text-heading">See what your feedback looks like</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-border shadow-card overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 bg-heading flex items-center justify-between">
                <span className="text-white text-[14px] font-bold">
                  Letter Feedback — Formal
                </span>
                <span className="text-primary text-[20px] font-bold">Band 7.0</span>
              </div>

              <div className="p-6 space-y-5">
                {/* Tone badge */}
                <div className="flex items-center gap-2">
                  <span className="text-[13px] text-body">Tone detected:</span>
                  <span
                    className="px-3 py-1 rounded-full text-[12px] font-bold"
                    style={{ backgroundColor: '#E8F5F4', color: '#23A09C' }}
                  >
                    Formal &#10003;
                  </span>
                </div>

                {/* Criteria scores */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Task Achievement', score: '7.0' },
                    { label: 'Coherence & Cohesion', score: '7.0' },
                    { label: 'Lexical Resource', score: '7.0' },
                    { label: 'Grammatical Range', score: '7.0' },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center justify-between p-3 bg-bg-alt rounded-lg">
                      <span className="text-[12px] text-body">{c.label}</span>
                      <span className="text-[14px] font-bold text-heading">{c.score}</span>
                    </div>
                  ))}
                </div>

                {/* Key points */}
                <div className="border-t border-border pt-5">
                  <h4 className="text-[13px] font-bold text-body uppercase tracking-wider mb-3">
                    Key Points
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex gap-2 text-[13px] text-body leading-[1.7]">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      All three bullet points fully addressed with relevant detail.
                    </li>
                    <li className="flex gap-2 text-[13px] text-body leading-[1.7]">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      Tone is consistently formal and appropriate for the task.
                    </li>
                    <li className="flex gap-2 text-[13px] text-body leading-[1.7]">
                      <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Vary opening phrases — "I am writing to" appears twice. Try "I wish to bring to your attention" as an alternative.
                    </li>
                    <li className="flex gap-2 text-[13px] text-body leading-[1.7]">
                      <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Consider using more complex sentence structures in the second paragraph to demonstrate grammatical range.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-bg-alt">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-heading text-[28px] md:text-[36px] font-bold">
              Start checking your letters today
            </h2>
            <p className="mt-4 text-[16px] text-body max-w-lg mx-auto">
              Get instant, examiner-level feedback on your IELTS General Training
              letters and walk into exam day with confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://app.ieltstop.com/letters"
                className="inline-flex items-center gap-2 h-12 px-10 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-colors"
              >
                Check Your Letter <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://app.ieltstop.com/signup"
                className="inline-flex items-center gap-2 h-12 px-8 border-2 border-border text-heading text-[15px] font-bold rounded-lg hover:bg-white transition-colors"
              >
                Create Free Account
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
