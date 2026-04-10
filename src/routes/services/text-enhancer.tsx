import {
  Sparkles,
  ArrowRight,
  ClipboardPaste,
  Wand2,
  BookOpen,
  Type,
  CheckCircle2,
  PenLine,
  Columns2,
} from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

/* ─── Data ─────────────────────────────────────────────────────────────── */

const steps = [
  {
    num: '01',
    icon: ClipboardPaste,
    title: 'Paste Your Text',
    desc: 'Copy and paste your IELTS writing response — Task 1 or Task 2. Our editor accepts any length and format.',
  },
  {
    num: '02',
    icon: Wand2,
    title: 'AI Enhances It',
    desc: 'Our AI upgrades vocabulary, fixes grammar, improves sentence structure, and adjusts the tone to academic register.',
  },
  {
    num: '03',
    icon: BookOpen,
    title: 'Review & Learn',
    desc: 'Compare your original with the enhanced version side by side. Understand every change and learn patterns for your exam.',
  },
];

const features = [
  {
    icon: Type,
    title: 'Vocabulary Upgrade',
    desc: 'Replaces basic words with Band 7+ alternatives while keeping your intended meaning intact.',
  },
  {
    icon: CheckCircle2,
    title: 'Grammar Polish',
    desc: 'Fixes grammatical errors, improves sentence variety, and refines your writing without changing its meaning.',
  },
  {
    icon: PenLine,
    title: 'Style Improvement',
    desc: 'Adjusts tone and register to match the academic writing style expected by IELTS examiners.',
  },
  {
    icon: Columns2,
    title: 'Side-by-Side View',
    desc: 'Compare your original text alongside the enhanced version so you can see exactly what changed and why.',
  },
];

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function TextEnhancerPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2A2A45 100%)' }}
        aria-labelledby="enhancer-hero-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,119,58,0.15),transparent_50%)]" />
        <div className="container-main relative z-10 pt-20 md:pt-28 pb-16 md:pb-24 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1
              id="enhancer-hero-heading"
              className="text-white text-[30px] sm:text-[40px] md:text-[50px] leading-[1.1] font-heading font-extrabold italic max-w-3xl mx-auto"
            >
              AI Text Enhancer
            </h1>
            <p className="mt-5 text-white/65 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
              Transform your IELTS writing from Band 5&ndash;6 to Band 7+ with AI-powered vocabulary upgrades, grammar corrections, and style improvements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://app.ieltstop.com/signup"
                className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
              >
                Try Text Enhancer
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://app.ieltstop.com/signup"
                className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white/80 text-[15px] font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                See Examples
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="enhancer-steps-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">How It Works</span>
              <h2
                id="enhancer-steps-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Three Simple Steps
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                Upgrade your writing in seconds, not hours.
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
      <section className="py-16 md:py-24 bg-bg-alt" aria-labelledby="enhancer-features-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">What You Get</span>
              <h2
                id="enhancer-features-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Powerful Enhancement Tools
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                Every tool you need to transform your writing into examiner-ready responses.
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

      {/* ── Before & After ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="enhancer-comparison-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">See the Difference</span>
              <h2
                id="enhancer-comparison-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Before &amp; After
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                See how our AI transforms basic writing into Band 7+ quality responses.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Before */}
              <div className="bg-bg-alt rounded-2xl border border-border p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-600 text-[12px] font-bold tracking-wide">
                    Before
                  </span>
                  <span className="text-muted-foreground text-[13px]">Band 5&ndash;6</span>
                </div>
                <p className="text-body text-[15px] leading-relaxed">
                  The graph shows that sales{' '}
                  <span className="bg-red-100 text-red-700 px-1 rounded">went up a lot</span>{' '}
                  between 2010 and 2020.
                </p>
              </div>

              {/* After */}
              <div className="bg-bg-alt rounded-2xl border border-primary/20 p-8 ring-1 ring-primary/10">
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-bold tracking-wide">
                    After
                  </span>
                  <span className="text-muted-foreground text-[13px]">Band 7+</span>
                </div>
                <p className="text-body text-[15px] leading-relaxed">
                  The graph{' '}
                  <span className="bg-primary/10 text-primary font-semibold px-1 rounded">illustrates</span>{' '}
                  a{' '}
                  <span className="bg-primary/10 text-primary font-semibold px-1 rounded">significant upward trend</span>{' '}
                  in sales figures{' '}
                  <span className="bg-primary/10 text-primary font-semibold px-1 rounded">over the decade spanning</span>{' '}
                  2010 to 2020.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="bg-bg-alt rounded-2xl border border-border p-6">
                <h4 className="text-heading text-[14px] font-bold mb-3">What changed:</h4>
                <ul className="space-y-2">
                  {[
                    { before: '"shows"', after: '"illustrates"', why: 'More academic and precise verb choice' },
                    { before: '"went up a lot"', after: '"significant upward trend"', why: 'Band 7+ academic phrasing' },
                    { before: '"between"', after: '"over the decade spanning"', why: 'Demonstrates range of expression' },
                  ].map((change) => (
                    <li key={change.before} className="flex items-start gap-2 text-[13px]">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-body">
                        <span className="line-through text-muted-foreground">{change.before}</span>
                        {' '}
                        <span className="text-primary font-semibold">{change.after}</span>
                        {' '}
                        <span className="text-muted-foreground">&mdash; {change.why}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-5 md:px-10 py-6 md:py-8" aria-labelledby="enhancer-cta-heading">
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-2xl py-16 md:py-24 px-6 md:px-10 text-center"
            style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2A2A45 100%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,119,58,0.2),transparent_50%)]" />
            <div className="relative z-10 max-w-xl mx-auto">
              <h2
                id="enhancer-cta-heading"
                className="text-white text-[30px] md:text-[38px] leading-[1.15] font-heading font-extrabold italic"
              >
                Upgrade Your Writing Today
              </h2>
              <p className="mt-4 text-white/55 text-[16px] leading-relaxed">
                Stop guessing what Band 7+ writing looks like. Paste your text and see the transformation instantly.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.ieltstop.com/signup"
                  className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
                >
                  Try Text Enhancer Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://app.ieltstop.com/signup"
                  className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white/80 text-[15px] font-semibold rounded-lg hover:bg-white/5 transition-all"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
