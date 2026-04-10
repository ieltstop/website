import {
  BookOpen,
  ArrowRight,
  Search,
  FileText,
  MessageSquareQuote,
  GraduationCap,
  Layers,
  PenLine,
  Lightbulb,
  CheckCircle2,
  Leaf,
  Monitor,
  Heart,
  Users,
  Landmark,
} from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

/* ─── Data ─────────────────────────────────────────────────────────────── */

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Browse Topics',
    desc: 'Explore our library organized by common IELTS essay themes. Filter by band score, task type, or topic category.',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Read Samples',
    desc: 'Study full-length Band 7, 8, and 9 sample essays with clear structure and academic vocabulary highlighted.',
  },
  {
    num: '03',
    icon: MessageSquareQuote,
    title: 'Study Commentary',
    desc: 'Read line-by-line examiner-style commentary explaining what makes each response score highly on all four criteria.',
  },
];

const features = [
  {
    icon: GraduationCap,
    title: 'Band 7\u20139 Examples',
    desc: 'Authentic, high-scoring sample responses for both Task 1 and Task 2 across a wide variety of question types.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Examiner Commentary',
    desc: 'Line-by-line analysis explaining exactly why each paragraph, sentence, and vocabulary choice scores highly.',
  },
  {
    icon: Layers,
    title: 'Topic Categories',
    desc: 'Organized by common IELTS themes so you can focus on the topics most likely to appear in your exam.',
  },
  {
    icon: PenLine,
    title: 'Writing Techniques',
    desc: 'Highlighted patterns, strategies, and templates you can adapt and apply to your own writing responses.',
  },
];

const categories = [
  { icon: GraduationCap, name: 'Education', count: '20+ essays', color: 'from-blue-500 to-blue-600' },
  { icon: Monitor, name: 'Technology', count: '18+ essays', color: 'from-violet-500 to-violet-600' },
  { icon: Leaf, name: 'Environment', count: '15+ essays', color: 'from-emerald-500 to-emerald-600' },
  { icon: Heart, name: 'Health', count: '14+ essays', color: 'from-rose-500 to-rose-600' },
  { icon: Users, name: 'Society', count: '22+ essays', color: 'from-amber-500 to-amber-600' },
  { icon: Landmark, name: 'Government', count: '16+ essays', color: 'from-teal-500 to-teal-600' },
];

const learnings = [
  'How to structure arguments logically and persuasively',
  'Advanced vocabulary used naturally in context',
  'Cohesive device usage for Band 7+ coherence scores',
  'Common IELTS question patterns and how to approach them',
];

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function SampleAnswersPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2A2A45 100%)' }}
        aria-labelledby="samples-hero-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,119,58,0.15),transparent_50%)]" />
        <div className="container-main relative z-10 pt-20 md:pt-28 pb-16 md:pb-24 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1
              id="samples-hero-heading"
              className="text-white text-[30px] sm:text-[40px] md:text-[50px] leading-[1.1] font-heading font-extrabold italic max-w-3xl mx-auto"
            >
              High-Scoring Sample Answers
            </h1>
            <p className="mt-5 text-white/65 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
              Study Band 7, 8, and 9 sample essays with detailed examiner commentary. Understand what makes a top-scoring response and apply those techniques to your own writing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://app.ieltstop.com/samples"
                className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
              >
                Browse Sample Answers
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://app.ieltstop.com/samples"
                className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white/80 text-[15px] font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                View Free Samples
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="samples-steps-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">How It Works</span>
              <h2
                id="samples-steps-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Three Simple Steps
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                Learn what examiners look for by studying real high-scoring responses.
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
      <section className="py-16 md:py-24 bg-bg-alt" aria-labelledby="samples-features-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">What You Get</span>
              <h2
                id="samples-features-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                More Than Just Sample Essays
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                Every sample comes with expert analysis to help you understand and replicate success.
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

      {/* ── Sample Categories ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="samples-categories-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Topic Library</span>
              <h2
                id="samples-categories-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Sample Categories
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                Browse high-scoring essays organized by the most common IELTS writing themes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 h-full group">
                  <div className={`h-1.5 bg-gradient-to-r ${cat.color}`} />
                  <div className="p-7">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bg-alt mb-4 group-hover:bg-primary/10 transition-colors">
                      <cat.icon className="w-6 h-6 text-heading group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-heading text-[18px] font-bold">{cat.name}</h3>
                    <p className="mt-1 text-primary text-[13px] font-semibold">{cat.count}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You'll Learn ── */}
      <section className="py-16 md:py-24 bg-bg-alt" aria-labelledby="samples-learn-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Key Takeaways</span>
              <h2
                id="samples-learn-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                What You&apos;ll Learn
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px] max-w-xl mx-auto">
                Skills and techniques you can apply directly to your own IELTS writing.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-border p-8 shadow-card">
              <ul className="space-y-4">
                {learnings.map((item, i) => (
                  <ScrollReveal key={item} delay={i * 0.08}>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-body text-[15px] leading-relaxed">{item}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
              {[
                { value: '100+', label: 'Sample essays' },
                { value: '6', label: 'Topic categories' },
                { value: 'Band 7\u20139', label: 'Score range' },
                { value: 'Line-by-line', label: 'Commentary' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[24px] md:text-[28px] font-heading font-extrabold italic text-heading">
                    {stat.value}
                  </p>
                  <p className="text-[13px] text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-5 md:px-10 py-6 md:py-8" aria-labelledby="samples-cta-heading">
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-2xl py-16 md:py-24 px-6 md:px-10 text-center"
            style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2A2A45 100%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,119,58,0.2),transparent_50%)]" />
            <div className="relative z-10 max-w-xl mx-auto">
              <h2
                id="samples-cta-heading"
                className="text-white text-[30px] md:text-[38px] leading-[1.15] font-heading font-extrabold italic"
              >
                Learn from the Best Responses
              </h2>
              <p className="mt-4 text-white/55 text-[16px] leading-relaxed">
                Stop guessing what a Band 8 essay looks like. Study real examples with expert commentary and apply those techniques to your next practice essay.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.ieltstop.com/samples"
                  className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
                >
                  Browse Sample Answers
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://app.ieltstop.com/samples"
                  className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white/80 text-[15px] font-semibold rounded-lg hover:bg-white/5 transition-all"
                >
                  Try Free Samples
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
