import {
  ArrowRight,
  GraduationCap,
  Monitor,
  Leaf,
  Heart,
  Users,
  Landmark,
  CheckCircle2,
} from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

/* ─── Decorative page-divider lines ──────────────────────────────────── */

function PageLines({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: 40 }).map((_, i) => {
        const w = 6 + Math.round(Math.sin(i * 0.4) * 12 + Math.cos(i * 0.25) * 8);
        return (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: Math.max(3, w),
              height: 3,
              background: `rgba(232,119,58,${0.18 + (w / 28) * 0.45})`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─── Data ────────────────────────────────────────────────────────────── */

const bandLevels = [
  {
    band: 7,
    color: '#E8773A',
    bgColor: 'rgba(232,119,58,0.08)',
    borderColor: 'rgba(232,119,58,0.2)',
    title: 'Band 7 Level',
    desc: 'Demonstrates good control of grammar and vocabulary with occasional errors. Clear position throughout with well-developed main ideas and effective use of cohesive devices.',
    count: '120+ samples',
  },
  {
    band: 8,
    color: '#23A09C',
    bgColor: 'rgba(35,160,156,0.08)',
    borderColor: 'rgba(35,160,156,0.2)',
    title: 'Band 8 Level',
    desc: 'Wide range of vocabulary used fluently with rare errors. Complex sentence structures handled with confidence. Skillful paragraphing and progression of ideas throughout.',
    count: '120+ samples',
  },
  {
    band: 9,
    color: '#16A34A',
    bgColor: 'rgba(22,163,74,0.08)',
    borderColor: 'rgba(22,163,74,0.2)',
    title: 'Band 9 Level',
    desc: 'Full flexibility and precision in language use. Sophisticated vocabulary with natural, effortless control. Seamless cohesion that never draws attention to itself.',
    count: '120+ samples',
  },
];

const topics = [
  { icon: GraduationCap, name: 'Education', count: '85 essays' },
  { icon: Monitor, name: 'Technology', count: '72 essays' },
  { icon: Leaf, name: 'Environment', count: '68 essays' },
  { icon: Heart, name: 'Health', count: '54 essays' },
  { icon: Users, name: 'Society', count: '91 essays' },
  { icon: Landmark, name: 'Government', count: '64 essays' },
];

const stats = [
  { value: '500+', label: 'Sample answers' },
  { value: '20+', label: 'Topics covered' },
  { value: 'Band 7\u20139', label: 'Score coverage' },
  { value: 'Expert', label: 'Commentary' },
];

const annotations = [
  { label: 'Strong thesis', color: '#16A34A' },
  { label: 'Good cohesion', color: '#23A09C' },
  { label: 'Band 7+ vocabulary', color: '#E8773A' },
];

/* ═══════════════════════════════════════════════════════════════════════ */

export default function SampleAnswersPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section className="bg-bg-alt overflow-hidden" aria-labelledby="samples-hero-heading">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="section-label">Sample Answers</span>
                <h1
                  id="samples-hero-heading"
                  className="mt-5 text-heading text-[32px] sm:text-[42px] md:text-[52px] leading-[1.08] font-heading font-bold max-w-xl"
                >
                  High-scoring <span className="text-primary">sample answers</span>
                </h1>
                <p className="mt-5 text-body text-[17px] md:text-[19px] max-w-lg leading-relaxed">
                  Study Band 7, 8, and 9 essays with detailed examiner commentary.
                  Learn exactly what makes a top-scoring IELTS Writing response.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
                  <a
                    href="https://app.ieltstop.com/samples"
                    className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
                  >
                    Browse Sample Answers
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="https://app.ieltstop.com/samples"
                    className="inline-flex items-center h-[52px] px-8 border border-[#EAEAF0] text-heading text-[15px] font-semibold rounded-lg hover:bg-white transition-all"
                  >
                    View Free Samples
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — sample essay preview */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="hidden lg:flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[320px]">
                  <div className="bg-white rounded-xl border border-border px-6 py-5 shadow-card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-[14px] font-extrabold">9</span>
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-heading">Band 9 Sample</p>
                        <p className="text-[11px] text-body">Education & Technology</p>
                      </div>
                    </div>
                    <p className="text-[13px] text-body leading-relaxed border-t border-border pt-3">
                      "The proliferation of digital technology in educational institutions has fundamentally <span className="text-primary font-semibold">transformed pedagogical approaches</span>..."
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-green-50 text-green-600">Strong thesis &#10003;</span>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary/10 text-primary">Band 9 vocab &#10003;</span>
                    </div>
                  </div>
                  <div className="rounded-xl px-6 py-4 border border-border mt-3 shadow-card bg-white">
                    <p className="text-[12px] font-bold text-heading mb-1">Examiner Commentary</p>
                    <p className="text-[12px] text-body leading-relaxed">
                      "Excellent use of <span className="text-primary font-semibold">cohesive devices</span> and <span className="text-primary font-semibold">topic-specific vocabulary</span>."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. Band Showcase ───────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="samples-bands-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Band Levels</span>
              <h2
                id="samples-bands-heading"
                className="mt-5 text-[#1A1A2E] text-[28px] md:text-[36px] font-bold leading-tight"
              >
                Samples at every target score
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {bandLevels.map((level, i) => (
              <ScrollReveal key={level.band} delay={i * 0.12}>
                <div className="relative bg-white rounded-2xl border border-[#EAEAF0] p-8 h-full shadow-card hover:border-primary/25 transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Faded band number */}
                  <div
                    className="absolute top-4 right-5 text-[88px] font-extrabold leading-none select-none"
                    style={{ color: `${level.color}08` }}
                  >
                    {level.band}
                  </div>

                  <span
                    className="inline-flex items-center self-start px-3 py-1 rounded-full text-[12px] font-bold tracking-wide mb-4"
                    style={{ background: `${level.color}15`, color: level.color }}
                  >
                    Band {level.band}
                  </span>

                  <h3 className="text-[20px] font-bold text-[#1A1A2E] mb-1">
                    {level.title}
                  </h3>

                  <p className="mt-3 text-[13px] text-[#555568] leading-[1.7] flex-1">
                    {level.desc}
                  </p>

                  <p
                    className="mt-5 text-[13px] font-semibold"
                    style={{ color: level.color }}
                  >
                    {level.count}
                  </p>

                  <a
                    href="https://app.ieltstop.com/samples"
                    className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold hover:gap-2.5 transition-all duration-200"
                    style={{ color: level.color }}
                  >
                    Browse Band {level.band}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Topic Categories ────────────────────────────────────── */}
      <section className="section-padding bg-[#F7F7FB]" aria-labelledby="samples-topics-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Topic Library</span>
              <h2
                id="samples-topics-heading"
                className="mt-5 text-[#1A1A2E] text-[28px] md:text-[36px] font-bold leading-tight"
              >
                Browse by topic
              </h2>
              <p className="mt-4 text-[15px] text-[#555568] max-w-xl mx-auto leading-relaxed">
                Find sample essays organized by the most common IELTS Writing Task 2 topics.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {topics.map((topic, i) => (
              <ScrollReveal key={topic.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-[#EAEAF0] p-6 md:p-7 text-center shadow-card hover:shadow-card-hover hover:border-primary/25 transition-all duration-300 cursor-pointer group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#F7F7FB] border border-[#EAEAF0] mb-4 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                    <topic.icon className="w-5 h-5 text-[#1A1A2E] group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-[#1A1A2E] text-[16px] font-bold">{topic.name}</h3>
                  <p className="mt-1 text-[#555568] text-[13px]">{topic.count}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. What You'll Learn ───────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="samples-learn-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Left: text */}
            <ScrollReveal direction="left">
              <div>
                <span className="section-label">Deep Analysis</span>
                <h2
                  id="samples-learn-heading"
                  className="mt-5 text-[#1A1A2E] text-[28px] md:text-[36px] font-bold leading-tight"
                >
                  Every sample includes examiner commentary
                </h2>
                <p className="mt-4 text-[#555568] text-[16px] leading-relaxed">
                  Our expert annotations explain exactly why each paragraph scores highly. You
                  will see which vocabulary choices impress examiners, how cohesive devices link
                  ideas, and what grammatical structures demonstrate true range. It is not just
                  reading &mdash; it is structured learning.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: mock essay card */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-white rounded-2xl border border-[#EAEAF0] shadow-card overflow-hidden">
                {/* Question bar */}
                <div className="px-6 py-4 border-b border-[#EAEAF0] bg-[#F7F7FB]">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#555568]/60">
                    Essay Question
                  </span>
                  <p className="mt-1 text-[#1A1A2E] text-[13px] font-medium leading-relaxed">
                    Some people believe that technology has made our lives more complicated. To
                    what extent do you agree or disagree?
                  </p>
                </div>

                {/* Essay excerpt */}
                <div className="relative px-6 py-5">
                  <p className="text-[#555568] text-[13px] leading-[1.9]">
                    In recent decades, technological advancements have fundamentally reshaped the
                    fabric of daily life. While some commentators argue that these innovations
                    have introduced unnecessary complexity, I firmly believe that, on balance,
                    technology has simplified and enriched human existence in measurable ways.
                    This essay will examine how digital tools have streamlined communication and
                    access to information...
                  </p>
                  {/* Fade gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Annotation callouts */}
                <div className="px-6 pb-5 flex flex-wrap gap-2">
                  {annotations.map((tag) => (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold"
                      style={{ background: `${tag.color}12`, color: tag.color }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 5. Numbers Strip ───────────────────────────────────────── */}
      <section className="bg-[#F7F7FB] border-y border-[#EAEAF0]" aria-label="Statistics">
        <div className="container-main py-12 md:py-14">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[26px] md:text-[32px] font-extrabold text-[#1A1A2E]">
                    {stat.value}
                  </p>
                  <p className="text-[13px] text-[#555568] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6. Final CTA ───────────────────────────────────────────── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1A1A2E 0%, #2A2A44 100%)' }}
        aria-labelledby="samples-cta-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(232,119,58,0.1),transparent_60%)]" />
        <div className="container-main relative z-10 text-center">
          <ScrollReveal>
            <h2
              id="samples-cta-heading"
              className="text-white text-[28px] md:text-[38px] font-bold leading-tight"
            >
              Start studying top-scoring essays
            </h2>
            <p className="mt-4 text-[16px] text-white/45 max-w-xl mx-auto leading-relaxed">
              Stop wondering what a Band 8 essay looks like. Read real examples, study the
              commentary, and apply those techniques to your own writing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://app.ieltstop.com/samples"
                className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-[0_4px_20px_rgba(232,119,58,0.35)]"
              >
                Browse Sample Answers
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://app.ieltstop.com/samples"
                className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white/70 text-[15px] font-semibold rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                Try Free Samples
              </a>
            </div>

            <PageLines className="mt-12 opacity-40" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
