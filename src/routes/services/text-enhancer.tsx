import {
  Sparkles,
  ArrowRight,
  ClipboardPaste,
  Wand2,
  BookOpen,
  Type,
  CheckCircle2,
  PenLine,
  ChevronRight,
} from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function TextEnhancerPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-bg-alt overflow-hidden" aria-labelledby="enhancer-hero-heading">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="section-label">Text Enhancer</span>
                <h1
                  id="enhancer-hero-heading"
                  className="mt-5 text-heading text-[32px] sm:text-[42px] md:text-[52px] leading-[1.08] font-heading font-extrabold italic max-w-xl"
                >
                  Transform Band&nbsp;5 writing into Band&nbsp;7+
                </h1>
                <p className="mt-5 text-body text-[17px] md:text-[19px] max-w-lg leading-relaxed">
                  Paste any IELTS response and watch our AI upgrade your vocabulary, fix grammar errors, and shift your tone to the academic register examiners reward.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
                  <a
                    href="https://app.ieltstop.com/signup"
                    className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
                  >
                    Try Text Enhancer
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="https://app.ieltstop.com/signup"
                    className="inline-flex items-center h-[52px] px-8 border border-[#EAEAF0] text-heading text-[15px] font-semibold rounded-lg hover:bg-white transition-all"
                  >
                    See Examples
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Arrow visual */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="hidden lg:flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[320px]">
                  {/* Basic label */}
                  <div className="bg-white rounded-xl border border-[#EAEAF0] px-6 py-4 shadow-card">
                    <span className="text-[12px] font-bold tracking-widest uppercase text-body/60">Your writing</span>
                    <p className="mt-1.5 text-body text-[14px] leading-relaxed">
                      "The graph shows that sales went up a lot between 2010 and 2020."
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="flex items-center justify-center py-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #E8773A 0%, #F5A623 100%)' }}
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Advanced label */}
                  <div
                    className="rounded-xl px-6 py-4 border border-primary/20"
                    style={{ background: 'linear-gradient(135deg, rgba(232,119,58,0.06) 0%, rgba(245,166,35,0.06) 100%)' }}
                  >
                    <span className="text-[12px] font-bold tracking-widest uppercase text-primary">Enhanced</span>
                    <p className="mt-1.5 text-heading text-[14px] leading-relaxed font-medium">
                      "The graph <span className="text-primary">illustrates</span> a <span className="text-primary">significant upward trend</span> in sales figures <span className="text-primary">over the decade spanning</span> 2010 to 2020."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── The Transformation ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="enhancer-transform-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="section-label">See the Difference</span>
              <h2
                id="enhancer-transform-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                One click. Completely transformed.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-5xl mx-auto rounded-2xl border border-[#EAEAF0] overflow-hidden shadow-card">
              {/* Two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before column */}
                <div className="border-b md:border-b-0 md:border-r border-[#EAEAF0]">
                  <div className="px-6 py-3.5 border-b border-[#EAEAF0]" style={{ background: '#FEF2F2' }}>
                    <span className="text-[13px] font-bold tracking-wide text-[#B91C1C] uppercase">Before &mdash; Band 5&ndash;6</span>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-body text-[15px] leading-[1.85]">
                      Nowadays, many people think that technology is very important in education. Computers and the internet have changed the way students learn. Some people believe that online learning is good because students can study at home. However, other people think that going to school is better. I think both ways of learning are useful. In this essay, I will talk about the advantages and disadvantages of online learning.
                    </p>
                  </div>
                </div>

                {/* After column */}
                <div>
                  <div className="px-6 py-3.5 border-b border-[#EAEAF0]" style={{ background: 'rgba(232,119,58,0.08)' }}>
                    <span className="text-[13px] font-bold tracking-wide text-primary uppercase">After &mdash; Band 7+</span>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-body text-[15px] leading-[1.85]">
                      <mark className="bg-primary/10 text-heading px-0.5 rounded">In the contemporary era</mark>, <mark className="bg-primary/10 text-heading px-0.5 rounded">it is widely acknowledged</mark> that technology <mark className="bg-primary/10 text-heading px-0.5 rounded">plays a pivotal role</mark> in education. <mark className="bg-primary/10 text-heading px-0.5 rounded">Digital tools and connectivity</mark> have <mark className="bg-primary/10 text-heading px-0.5 rounded">fundamentally transformed</mark> pedagogical approaches. <mark className="bg-primary/10 text-heading px-0.5 rounded">Proponents of</mark> online learning <mark className="bg-primary/10 text-heading px-0.5 rounded">contend that</mark> it offers students the <mark className="bg-primary/10 text-heading px-0.5 rounded">flexibility to engage with materials</mark> remotely. <mark className="bg-primary/10 text-heading px-0.5 rounded">Conversely</mark>, <mark className="bg-primary/10 text-heading px-0.5 rounded">advocates of traditional education argue that</mark> classroom attendance <mark className="bg-primary/10 text-heading px-0.5 rounded">remains indispensable</mark>. This essay <mark className="bg-primary/10 text-heading px-0.5 rounded">examines both the merits and drawbacks</mark> of virtual learning <mark className="bg-primary/10 text-heading px-0.5 rounded">environments</mark>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="border-t border-[#EAEAF0] bg-[#F7F7FB] px-6 md:px-8 py-5">
                <div className="flex flex-wrap items-center gap-6 md:gap-10">
                  <span className="text-[13px] font-bold text-heading uppercase tracking-wide">Changes made</span>
                  <div className="flex flex-wrap gap-5 md:gap-8">
                    {[
                      { num: '12', label: 'vocabulary upgrades' },
                      { num: '4', label: 'grammar fixes' },
                      { num: '3', label: 'style improvements' },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-[13px] font-extrabold">{stat.num}</span>
                        <span className="text-body text-[13px]">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What Gets Enhanced ── */}
      <section className="py-16 md:py-24 bg-bg-alt" aria-labelledby="enhancer-what-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">What Gets Enhanced</span>
              <h2
                id="enhancer-what-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Three dimensions of improvement
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Type,
                title: 'Vocabulary',
                desc: 'Basic, repetitive words are swapped for precise Band 7+ alternatives that demonstrate lexical range, without changing your intended meaning.',
                before: '"good"  "a lot of"',
                after: '"beneficial"  "a substantial amount of"',
              },
              {
                icon: CheckCircle2,
                title: 'Grammar',
                desc: 'Simple sentence patterns are restructured into complex and compound-complex forms that showcase grammatical range and accuracy.',
                before: '"People think..."',
                after: '"It is widely believed that..."',
              },
              {
                icon: PenLine,
                title: 'Style',
                desc: 'Informal, conversational phrases are refined into the academic register that IELTS examiners expect and reward with higher scores.',
                before: '"This essay will talk about..."',
                after: '"This essay examines..."',
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.12}>
                <div className="bg-white rounded-2xl border border-[#EAEAF0] p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-heading text-[20px] font-bold">{card.title}</h3>
                  <p className="mt-2.5 text-body text-[14px] leading-relaxed flex-1">{card.desc}</p>
                  {/* Example transformation */}
                  <div className="mt-6 rounded-lg bg-[#F7F7FB] border border-[#EAEAF0] px-4 py-3.5 font-mono text-[13px] leading-relaxed">
                    <div className="text-body/60 line-through">{card.before}</div>
                    <div className="mt-1 text-primary font-semibold">{card.after}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                Three steps to better writing
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0">
              {[
                { num: '1', icon: ClipboardPaste, title: 'Paste', desc: 'Copy your IELTS Task 1 or Task 2 response into the editor.' },
                { num: '2', icon: Wand2, title: 'Enhance', desc: 'Our AI upgrades vocabulary, grammar, and style in seconds.' },
                { num: '3', icon: BookOpen, title: 'Learn', desc: 'Review changes side by side and absorb the patterns.' },
              ].map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.12} className="flex-1 flex items-center">
                  <div className="flex items-center gap-0 flex-1">
                    <div className="flex-1 text-center px-4 py-6">
                      <div
                        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                        style={{ background: 'linear-gradient(135deg, rgba(232,119,58,0.12) 0%, rgba(232,119,58,0.04) 100%)' }}
                      >
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-heading text-[18px] font-bold">{step.title}</h3>
                      <p className="mt-2 text-body text-[14px] leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                    </div>
                    {i < 2 && (
                      <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                        <ChevronRight className="w-5 h-5 text-[#EAEAF0]" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-24 bg-bg-alt" aria-labelledby="enhancer-cta-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto">
              <h2
                id="enhancer-cta-heading"
                className="text-heading text-[28px] md:text-[36px] leading-[1.15] font-heading font-extrabold italic"
              >
                Ready to upgrade your writing?
              </h2>
              <p className="mt-4 text-body text-[16px] leading-relaxed">
                Paste your text, see the transformation, and learn the patterns that examiners reward. No guesswork required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.ieltstop.com/signup"
                  className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
                >
                  Try the Text Enhancer
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://app.ieltstop.com/signup"
                  className="inline-flex items-center h-[52px] px-8 border border-[#EAEAF0] text-heading text-[15px] font-semibold rounded-lg hover:bg-white transition-all"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
