import {
  BookOpen,
  ArrowRight,
  GraduationCap,
  Monitor,
  Leaf,
  Heart,
  Users,
  Landmark,
  CheckCircle2,
  MessageSquareQuote,
} from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

/* ─── Data ─────────────────────────────────────────────────────────────── */

const bandLevels = [
  {
    band: 7,
    color: '#E8773A',
    bgColor: 'rgba(232,119,58,0.08)',
    borderColor: 'rgba(232,119,58,0.2)',
    title: 'Band 7 Sample',
    desc: 'Demonstrates good control of grammar and vocabulary with occasional errors. Clear position throughout with well-developed main ideas and effective use of cohesive devices.',
    count: '180+ samples',
  },
  {
    band: 8,
    color: '#23A09C',
    bgColor: 'rgba(35,160,156,0.08)',
    borderColor: 'rgba(35,160,156,0.2)',
    title: 'Band 8 Sample',
    desc: 'Wide range of vocabulary used fluently with rare errors. Complex sentence structures handled with confidence. Skillful paragraphing and progression of ideas throughout.',
    count: '200+ samples',
  },
  {
    band: 9,
    color: '#16A34A',
    bgColor: 'rgba(22,163,74,0.08)',
    borderColor: 'rgba(22,163,74,0.2)',
    title: 'Band 9 Sample',
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

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function SampleAnswersPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-white" aria-labelledby="samples-hero-heading">
        <div className="container-main section-padding text-center">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1
              id="samples-hero-heading"
              className="text-heading text-[32px] sm:text-[42px] md:text-[52px] leading-[1.08] font-heading font-extrabold italic max-w-3xl mx-auto"
            >
              High-Scoring Sample Answers
            </h1>
            <p className="mt-5 text-body text-[17px] md:text-[19px] max-w-2xl mx-auto leading-relaxed">
              Study Band 7, 8, and 9 essays with detailed examiner commentary. Learn what makes a top-scoring response.
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
                className="inline-flex items-center h-[52px] px-8 border border-[#EAEAF0] text-heading text-[15px] font-semibold rounded-lg hover:bg-[#F7F7FB] transition-all"
              >
                View Free Samples
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Band Level Showcase ── */}
      <section className="py-16 md:py-24 bg-bg-alt" aria-labelledby="samples-bands-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Band Levels</span>
              <h2
                id="samples-bands-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Samples at every target score
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {bandLevels.map((level, i) => (
              <ScrollReveal key={level.band} delay={i * 0.12}>
                <div className="bg-white rounded-2xl border border-[#EAEAF0] p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Band circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: level.bgColor, border: `2px solid ${level.borderColor}` }}
                  >
                    <span className="text-[28px] font-heading font-extrabold italic" style={{ color: level.color }}>
                      {level.band}
                    </span>
                  </div>
                  <h3 className="text-heading text-[20px] font-bold">{level.title}</h3>
                  <p className="mt-3 text-body text-[14px] leading-relaxed flex-1">{level.desc}</p>
                  <p className="mt-4 text-[13px] font-semibold" style={{ color: level.color }}>{level.count}</p>
                  <a
                    href="https://app.ieltstop.com/samples"
                    className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold hover:gap-2.5 transition-all duration-200"
                    style={{ color: level.color }}
                  >
                    View samples
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Topic Categories ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="samples-topics-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Topic Library</span>
              <h2
                id="samples-topics-heading"
                className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
              >
                Browse by topic
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {topics.map((topic, i) => (
              <ScrollReveal key={topic.name} delay={i * 0.08}>
                <div className="bg-bg-alt rounded-2xl border border-[#EAEAF0] p-6 md:p-7 text-center shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-[#EAEAF0] mb-4 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                    <topic.icon className="w-5 h-5 text-heading group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-heading text-[16px] font-bold">{topic.name}</h3>
                  <p className="mt-1 text-body text-[13px]">{topic.count}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You'll Learn ── */}
      <section className="py-16 md:py-24 bg-bg-alt" aria-labelledby="samples-learn-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Left: text */}
            <ScrollReveal direction="left">
              <div>
                <span className="section-label">Deep Analysis</span>
                <h2
                  id="samples-learn-heading"
                  className="mt-5 text-heading text-[28px] md:text-[36px] font-heading font-extrabold italic leading-tight"
                >
                  Every sample includes detailed commentary
                </h2>
                <p className="mt-4 text-body text-[16px] leading-relaxed">
                  Our expert annotations explain exactly why each paragraph scores highly. You will see which vocabulary choices impress examiners, how cohesive devices link ideas, and what grammatical structures demonstrate true range. It is not just reading &mdash; it is structured learning.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: mock essay card */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-white rounded-2xl border border-[#EAEAF0] shadow-card overflow-hidden">
                {/* Question bar */}
                <div className="px-6 py-4 border-b border-[#EAEAF0] bg-[#F7F7FB]">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-body/60">Essay Question</span>
                  <p className="mt-1 text-heading text-[13px] font-medium leading-relaxed">
                    Some people believe that technology has made our lives more complicated. To what extent do you agree or disagree?
                  </p>
                </div>
                {/* Essay excerpt */}
                <div className="relative px-6 py-5">
                  <p className="text-body text-[13px] leading-[1.9]">
                    In recent decades, technological advancements have fundamentally reshaped the fabric of daily life. While some commentators argue that these innovations have introduced unnecessary complexity, I firmly believe that, on balance, technology has simplified and enriched human existence in measurable ways...
                  </p>
                  {/* Fade gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>
                {/* Commentary callouts */}
                <div className="px-6 pb-5 flex flex-wrap gap-2">
                  {[
                    { label: 'Strong thesis', color: '#16A34A' },
                    { label: 'Good cohesion', color: '#23A09C' },
                    { label: 'Band 7+ vocabulary', color: '#E8773A' },
                  ].map((tag) => (
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

      {/* ── Numbers ── */}
      <section className="bg-white border-y border-[#EAEAF0]" aria-label="Statistics">
        <div className="container-main py-12 md:py-14">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '500+', label: 'Sample answers' },
                { value: '20+', label: 'Topics covered' },
                { value: 'Band 7\u20139', label: 'Score coverage' },
                { value: 'Expert', label: 'Commentary' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[26px] md:text-[32px] font-heading font-extrabold italic text-heading">
                    {stat.value}
                  </p>
                  <p className="text-[13px] text-body mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="samples-cta-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto">
              <h2
                id="samples-cta-heading"
                className="text-heading text-[28px] md:text-[36px] leading-[1.15] font-heading font-extrabold italic"
              >
                Start studying top-scoring essays
              </h2>
              <p className="mt-4 text-body text-[16px] leading-relaxed">
                Stop wondering what a Band 8 essay looks like. Read real examples, study the commentary, and apply those techniques to your own writing.
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
                  className="inline-flex items-center h-[52px] px-8 border border-[#EAEAF0] text-heading text-[15px] font-semibold rounded-lg hover:bg-[#F7F7FB] transition-all"
                >
                  Try Free Samples
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
