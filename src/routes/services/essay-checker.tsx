import { ArrowRight, CheckCircle, Lightbulb } from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

export default function EssayCheckerPage() {
  return (
    <>
      {/* Hero — Split editorial layout */}
      <section className="bg-bg-alt section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <span className="section-label">Essay Checker</span>
                <h1
                  className="mt-5 text-heading font-bold leading-[1.08] tracking-tight"
                  style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
                >
                  Get your essay
                  <br />
                  scored in seconds
                </h1>
                <p className="mt-6 text-[17px] text-body leading-[1.75] max-w-md">
                  Paste your IELTS Task 1 or Task 2 essay and receive examiner-level
                  feedback instantly — band score, criteria breakdown, and actionable
                  suggestions to push your score higher.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://app.ieltstop.com/essays"
                    className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    Check Your Essay <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://app.ieltstop.com/signup"
                    className="inline-flex items-center gap-2 h-12 px-8 border-2 border-border text-heading text-[15px] font-bold rounded-lg hover:bg-white transition-colors"
                  >
                    Sign Up Free
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Feedback card mock */}
            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
                <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                  <span className="text-[13px] font-bold text-body uppercase tracking-wider">
                    Instant Feedback
                  </span>
                  <span className="text-[28px] font-bold text-heading">
                    7.0
                  </span>
                </div>
                <div className="p-6 space-y-5">
                  {[
                    { label: 'Task Achievement', score: '7.5', pct: 83 },
                    { label: 'Coherence & Cohesion', score: '7.0', pct: 78 },
                    { label: 'Lexical Resource', score: '6.5', pct: 72 },
                    { label: 'Grammatical Range', score: '7.0', pct: 78 },
                  ].map((c) => (
                    <div key={c.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[13px] text-body font-medium">{c.label}</span>
                        <span className="text-[14px] font-bold text-heading">{c.score}</span>
                      </div>
                      <div className="h-2 rounded-full bg-bg-alt overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${c.pct}%`, transition: 'width 1s ease' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-white">
        <div className="container-main py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { value: '10,000+', label: 'essays checked' },
              { value: '94%', label: 'accuracy rate' },
              { value: '50+', label: 'countries represented' },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="text-[28px] font-bold text-heading">{stat.value}</span>
                <p className="mt-1 text-[14px] text-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — Horizontal timeline */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label">How It Works</span>
              <h2 className="mt-5 text-heading">Three steps. No waiting.</h2>
            </div>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-[2px] bg-border" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
              {[
                {
                  num: '1',
                  title: 'Paste your essay',
                  desc: 'Drop in your Task 1 or Task 2 essay — no formatting or setup required.',
                },
                {
                  num: '2',
                  title: 'AI scores instantly',
                  desc: 'Our engine evaluates your writing against all four official IELTS criteria.',
                },
                {
                  num: '3',
                  title: 'Read your feedback',
                  desc: 'Get a detailed band score breakdown with strengths and targeted improvements.',
                },
              ].map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.12}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-[16px] font-bold mx-auto relative z-10">
                      {step.num}
                    </div>
                    <h3 className="mt-5 text-[17px] font-bold text-heading">{step.title}</h3>
                    <p className="mt-2 text-[14px] text-body leading-[1.7] max-w-[260px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scoring deep-dive — Asymmetric 2-col */}
      <section className="section-padding bg-bg-alt">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <span className="section-label">Scoring</span>
                <h2 className="mt-5 text-heading">
                  Scored on all 4 official
                  <br className="hidden lg:block" /> IELTS criteria
                </h2>
                <p className="mt-5 text-[15px] text-body leading-[1.8] max-w-md">
                  Every essay is measured against the same rubric real IELTS examiners
                  use — Task Achievement, Coherence & Cohesion, Lexical Resource, and
                  Grammatical Range & Accuracy. No guesswork, just the scoring system
                  that determines your band.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-5">
              {[
                {
                  label: 'Task Achievement',
                  pct: 85,
                  color: '#E8773A',
                  desc: 'How well you address the task, develop your position, and support arguments with relevant examples.',
                },
                {
                  label: 'Coherence & Cohesion',
                  pct: 78,
                  color: '#23A09C',
                  desc: 'Logical organization of ideas, effective paragraphing, and skillful use of cohesive devices.',
                },
                {
                  label: 'Lexical Resource',
                  pct: 70,
                  color: '#3B82F6',
                  desc: 'Range and precision of vocabulary, including collocations, word choice, and spelling accuracy.',
                },
                {
                  label: 'Grammatical Range & Accuracy',
                  pct: 75,
                  color: '#8B5CF6',
                  desc: 'Variety and control of sentence structures, tense usage, and grammatical precision.',
                },
              ].map((c, i) => (
                <ScrollReveal key={c.label} delay={i * 0.08}>
                  <div className="bg-white rounded-xl border border-border p-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[15px] font-bold text-heading">{c.label}</span>
                      <span className="text-[13px] font-bold text-body">{c.pct}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-bg-alt overflow-hidden mb-3">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${c.pct}%`,
                          backgroundColor: c.color,
                          transition: 'width 1s ease',
                        }}
                      />
                    </div>
                    <p className="text-[13px] text-body leading-[1.7]">{c.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live preview mock */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Preview</span>
              <h2 className="mt-5 text-heading">See what your feedback looks like</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-border shadow-card overflow-hidden">
              {/* Mock header bar */}
              <div className="px-6 py-4 bg-heading flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-white text-[14px] font-bold ml-2">Essay Feedback Report</span>
                </div>
                <span className="text-primary text-[20px] font-bold">Band 7.0</span>
              </div>

              {/* Report body */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* Left — scores */}
                <div className="p-6 space-y-4">
                  <h4 className="text-[13px] font-bold text-body uppercase tracking-wider mb-4">
                    Criteria Scores
                  </h4>
                  {[
                    { label: 'Task Achievement', score: '7.5', pct: 83, color: '#E8773A' },
                    { label: 'Coherence & Cohesion', score: '7.0', pct: 78, color: '#23A09C' },
                    { label: 'Lexical Resource', score: '6.5', pct: 72, color: '#3B82F6' },
                    { label: 'Grammatical Range', score: '7.0', pct: 78, color: '#8B5CF6' },
                  ].map((c) => (
                    <div key={c.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[13px] text-body">{c.label}</span>
                        <span className="text-[14px] font-bold text-heading">{c.score}</span>
                      </div>
                      <div className="h-2 rounded-full bg-bg-alt overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${c.pct}%`,
                            backgroundColor: c.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right — strengths & improvements */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-[13px] font-bold text-body uppercase tracking-wider mb-3">
                      Strengths
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        'Clear thesis with a consistent position throughout',
                        'Well-developed main ideas with supporting examples',
                        'Good range of linking devices used naturally',
                      ].map((s) => (
                        <li key={s} className="flex gap-2 text-[13px] text-body leading-[1.7]">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-body uppercase tracking-wider mb-3">
                      Areas to Improve
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        'Use more academic collocations instead of repeating common words',
                        'Vary complex sentence structures to boost grammar score',
                        'Strengthen your conclusion with a clearer summary of key arguments',
                      ].map((s) => (
                        <li key={s} className="flex gap-2 text-[13px] text-body leading-[1.7]">
                          <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-alt">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">FAQ</span>
              <h2 className="mt-5 text-heading">Common questions</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-8">
            {[
              {
                q: 'How accurate is the band score prediction?',
                a: 'Our AI has been trained on thousands of examiner-scored essays and achieves a 94% agreement rate with official IELTS scores. While no tool replaces a human examiner, our predictions give you a reliable benchmark before test day.',
              },
              {
                q: 'Does it work for both Task 1 and Task 2?',
                a: 'Yes. The checker handles both Academic Task 1 (reports, charts, diagrams) and Task 2 (opinion, discussion, problem-solution essays). Just paste your essay and we detect the task type automatically.',
              },
              {
                q: 'How is this different from a grammar checker?',
                a: 'Grammar checkers only flag errors. Our tool scores your essay on all four IELTS criteria — Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range — and gives you targeted feedback to move up a band level, not just fix mistakes.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div>
                  <h3 className="text-[16px] font-bold text-heading">{item.q}</h3>
                  <p className="mt-2 text-[14px] text-body leading-[1.8]">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-heading text-[28px] md:text-[36px] font-bold">
              Ready to check your essay?
            </h2>
            <p className="mt-4 text-[16px] text-body max-w-lg mx-auto">
              Join thousands of IELTS students who improved their writing score with
              instant, criteria-level feedback.
            </p>
            <div className="mt-8">
              <a
                href="https://app.ieltstop.com/essays"
                className="inline-flex items-center gap-2 h-12 px-10 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-colors"
              >
                Check Your Essay <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
