import { ArrowRight, CheckCircle, Lightbulb } from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

/* ─── Hero feedback card visual ──────────────────────────────────────── */

function HeroFeedbackCard() {
  const criteria = [
    { label: 'Task Achievement', pct: 83, color: '#E8773A' },
    { label: 'Coherence & Cohesion', pct: 78, color: '#23A09C' },
    { label: 'Lexical Resource', pct: 72, color: '#3B82F6' },
    { label: 'Grammatical Range', pct: 78, color: '#8B5CF6' },
  ];
  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      <div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl backdrop-blur-sm overflow-hidden">
        {/* Card header */}
        <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[11px] text-white/40 font-medium tracking-wide uppercase">
              Overall Band
            </span>
          </div>
          <span className="text-[28px] font-extrabold text-white">7.0</span>
        </div>
        {/* Criteria bars */}
        <div className="px-5 py-5 space-y-4">
          {criteria.map((c) => (
            <div key={c.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-white/45 font-medium">{c.label}</span>
              </div>
              <div className="h-[6px] rounded-full bg-white/[0.08] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${c.pct}%`,
                    backgroundColor: c.color,
                    transition: 'width 1.2s ease',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 bg-primary text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg">
        +2.5 band improvement
      </div>
    </div>
  );
}

/* ─── Mock feedback snippet component ────────────────────────────────── */

function MockFeedbackPanel() {
  const criteria = [
    { label: 'Task Achievement', score: '7.5', pct: 83, color: '#E8773A' },
    { label: 'Coherence & Cohesion', score: '7.0', pct: 78, color: '#23A09C' },
    { label: 'Lexical Resource', score: '6.5', pct: 72, color: '#3B82F6' },
    { label: 'Grammatical Range', score: '7.0', pct: 78, color: '#8B5CF6' },
  ];

  const strengths = [
    'Clear thesis with a consistent position throughout',
    'Well-developed main ideas with supporting examples',
    'Good range of linking devices used naturally',
  ];

  const improvements = [
    'Use more academic collocations instead of repeating common words',
    'Vary complex sentence structures to boost grammar score',
    'Strengthen your conclusion with a clearer summary of key arguments',
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#EAEAF0] shadow-card overflow-hidden">
      {/* macOS-style header bar */}
      <div className="px-6 py-4 bg-heading flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-white text-[14px] font-bold ml-2">
            Essay Feedback Report
          </span>
        </div>
        <span className="text-primary text-[20px] font-extrabold">Band 7.0</span>
      </div>

      {/* Report body */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#EAEAF0]">
        {/* Left — scores */}
        <div className="p-6 space-y-4">
          <h4 className="text-[11px] font-bold text-[#555568] uppercase tracking-widest mb-4">
            Criteria Scores
          </h4>
          {criteria.map((c) => (
            <div key={c.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[13px] text-[#555568]">{c.label}</span>
                <span className="text-[14px] font-extrabold text-[#1A1A2E]">
                  {c.score}
                </span>
              </div>
              <div className="h-2 rounded-full bg-[#F7F7FB] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${c.pct}%`,
                    backgroundColor: c.color,
                    transition: 'width 1s ease',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right — strengths & improvements */}
        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-[11px] font-bold text-[#555568] uppercase tracking-widest mb-3">
              Strengths
            </h4>
            <ul className="space-y-2.5">
              {strengths.map((s) => (
                <li
                  key={s}
                  className="flex gap-2 text-[13px] text-[#555568] leading-[1.7]"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-[#555568] uppercase tracking-widest mb-3">
              Areas to Improve
            </h4>
            <ul className="space-y-2.5">
              {improvements.map((s) => (
                <li
                  key={s}
                  className="flex gap-2 text-[13px] text-[#555568] leading-[1.7]"
                >
                  <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── How-it-works steps ─────────────────────────────────────────────── */

const steps = [
  {
    title: 'Paste your essay',
    desc: 'Drop in your Task 1 or Task 2 essay — no formatting or setup required. We detect the task type automatically.',
  },
  {
    title: 'AI scores instantly',
    desc: 'Our engine evaluates your writing against all four official IELTS criteria in seconds, calibrated to real examiner standards.',
  },
  {
    title: 'Read your feedback',
    desc: 'Get a detailed band score breakdown with strengths, targeted improvements, and actionable tips to push your score higher.',
  },
];

/* ─── Scoring criteria ───────────────────────────────────────────────── */

const criteria = [
  {
    name: 'Task Achievement',
    desc: 'Addresses all parts of the task with a clear, well-developed position.',
    score: '7.0',
  },
  {
    name: 'Coherence & Cohesion',
    desc: 'Logical progression of ideas with effective paragraphing and cohesive devices.',
    score: '7.0',
  },
  {
    name: 'Lexical Resource',
    desc: 'Wide vocabulary range with precise word choice and natural collocations.',
    score: '6.5',
  },
  {
    name: 'Grammatical Range',
    desc: 'Complex structures used accurately with a mix of sentence types.',
    score: '7.0',
  },
];

/* ─── FAQ data ───────────────────────────────────────────────────────── */

const faqs = [
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
];

/* ═══════════════════════════════════════════════════════════════════════ */

export default function EssayCheckerPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section className="bg-heading section-padding overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[12px] text-white/50 font-semibold tracking-wide uppercase mb-6">
                Writing Task 1 & 2
              </span>
              <h1 className="text-white text-[34px] sm:text-[42px] md:text-[50px] font-extrabold leading-[1.08]">
                Get your essay
                <br />
                <span className="text-primary">scored</span> in seconds
              </h1>
              <p className="mt-5 text-[17px] text-[#9999AD] leading-relaxed max-w-lg">
                Paste your IELTS Task 1 or Task 2 essay and receive examiner-level
                feedback instantly — band score, criteria breakdown, and actionable
                suggestions to push your score higher.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://app.ieltstop.com/essays"
                  className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-[0_4px_20px_rgba(232,119,58,0.3)]"
                >
                  Check Your Essay
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://app.ieltstop.com/signup"
                  className="inline-flex items-center h-[52px] px-8 border-2 border-white/15 text-white/80 text-[15px] font-semibold rounded-lg hover:bg-white/[0.06] transition-colors"
                >
                  Sign Up Free
                </a>
              </div>
            </ScrollReveal>

            {/* Right — decorative feedback card */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <HeroFeedbackCard />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. Trust Strip ─────────────────────────────────────────── */}
      <section className="border-y border-[#EAEAF0] bg-white">
        <div className="container-main py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { value: '10,000+', label: 'essays checked' },
              { value: '94%', label: 'accuracy rate' },
              { value: '50+', label: 'countries represented' },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="text-[28px] font-extrabold text-[#1A1A2E]">
                  {stat.value}
                </span>
                <p className="mt-1 text-[14px] text-[#555568]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. How It Works ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label">Process</span>
              <h2 className="mt-5 text-[#1A1A2E] text-[28px] md:text-[36px] font-extrabold leading-tight">
                Three steps. No waiting.
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-20">
            {steps.map((step, i) => {
              const isReversed = i % 2 === 1;
              return (
                <ScrollReveal key={step.title} delay={0.1}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                      isReversed ? 'md:direction-rtl' : ''
                    }`}
                    style={isReversed ? { direction: 'rtl' } : undefined}
                  >
                    <div style={isReversed ? { direction: 'ltr' } : undefined}>
                      <div className="text-primary text-[12px] font-bold tracking-widest uppercase mb-3">
                        Step {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-[22px] font-bold text-[#1A1A2E]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[14px] text-[#555568] leading-[1.8]">
                        {step.desc}
                      </p>
                    </div>
                    <div style={isReversed ? { direction: 'ltr' } : undefined}>
                      <div className="bg-white rounded-xl border border-[#EAEAF0] p-5 shadow-card">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="text-primary text-[14px] font-extrabold">
                              {i + 1}
                            </span>
                          </div>
                          <span className="text-[14px] font-bold text-[#1A1A2E]">
                            {step.title}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {[1, 2, 3].map((line) => (
                            <div
                              key={line}
                              className="h-2.5 rounded-full bg-[#F7F7FB]"
                              style={{
                                width: `${85 - line * 15}%`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Scoring Deep-Dive ───────────────────────────────────── */}
      <section className="section-padding bg-[#F7F7FB]">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-4">
              <span className="section-label">Scoring</span>
            </div>
            <div className="text-center mb-14">
              <div className="text-primary text-[56px] md:text-[72px] font-extrabold leading-none">
                4 Criteria
              </div>
              <p className="mt-4 text-[16px] text-[#555568] max-w-lg mx-auto leading-relaxed">
                Your essay is scored against the same four dimensions IELTS examiners
                use, so your estimated band reflects the real test.
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
                    <h3 className="text-[16px] font-bold text-[#1A1A2E]">
                      {c.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-[#555568] leading-[1.7]">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Live Preview ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Preview</span>
              <h2 className="mt-5 text-[#1A1A2E] text-[28px] md:text-[36px] font-extrabold leading-tight">
                See what your feedback looks like
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <MockFeedbackPanel />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6. FAQ ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#F7F7FB]">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">FAQ</span>
              <h2 className="mt-5 text-[#1A1A2E] text-[28px] md:text-[36px] font-extrabold leading-tight">
                Common questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-8">
            {faqs.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div>
                  <h3 className="text-[16px] font-bold text-[#1A1A2E]">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-[14px] text-[#555568] leading-[1.8]">
                    {item.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-heading">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-white text-[28px] md:text-[38px] font-extrabold leading-tight">
              Ready to check your essay?
            </h2>
            <p className="mt-4 text-[16px] text-[#9999AD] max-w-xl mx-auto leading-relaxed">
              Join thousands of IELTS students who improved their writing score
              with instant, criteria-level feedback.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://app.ieltstop.com/essays"
                className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-[0_4px_20px_rgba(232,119,58,0.3)]"
              >
                Check Your Essay Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://app.ieltstop.com/signup"
                className="inline-flex items-center h-[52px] px-8 border-2 border-white/15 text-white/80 text-[15px] font-semibold rounded-lg hover:bg-white/[0.06] transition-colors"
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
