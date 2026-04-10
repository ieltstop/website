import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

/* ─── CSS-only chart visuals ──────────────────────────────────────────── */

function BarChartVisual() {
  const bars = [
    { h: '60%', color: '#E8773A' },
    { h: '85%', color: '#E8773A' },
    { h: '45%', color: 'rgba(232,119,58,0.5)' },
    { h: '72%', color: '#E8773A' },
  ];
  return (
    <div className="flex items-end gap-3 h-full w-full px-2 pb-2">
      {bars.map((b, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-md transition-all duration-700"
          style={{ height: b.h, background: b.color, minWidth: 18 }}
        />
      ))}
    </div>
  );
}

function LineGraphVisual() {
  return (
    <svg viewBox="0 0 120 60" fill="none" className="w-full h-full">
      <polyline
        points="5,50 30,35 55,42 80,18 115,10"
        stroke="#E8773A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <polyline
        points="5,50 30,35 55,42 80,18 115,10"
        stroke="none"
        fill="url(#lineGrad)"
        opacity="0.15"
      />
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8773A" />
          <stop offset="100%" stopColor="#E8773A" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[
        [5, 50],
        [30, 35],
        [55, 42],
        [80, 18],
        [115, 10],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#E8773A" />
      ))}
    </svg>
  );
}

function PieChartVisual() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <circle cx="40" cy="40" r="36" fill="rgba(232,119,58,0.12)" />
      <circle
        cx="40"
        cy="40"
        r="18"
        fill="none"
        stroke="#E8773A"
        strokeWidth="36"
        strokeDasharray="40 113"
        strokeDashoffset="0"
        transform="rotate(-90 40 40)"
      />
      <circle
        cx="40"
        cy="40"
        r="18"
        fill="none"
        stroke="rgba(232,119,58,0.55)"
        strokeWidth="36"
        strokeDasharray="28 125"
        strokeDashoffset="-40"
        transform="rotate(-90 40 40)"
      />
      <circle
        cx="40"
        cy="40"
        r="18"
        fill="none"
        stroke="rgba(232,119,58,0.3)"
        strokeWidth="36"
        strokeDasharray="22 131"
        strokeDashoffset="-68"
        transform="rotate(-90 40 40)"
      />
      <circle cx="40" cy="40" r="14" fill="white" />
    </svg>
  );
}

function TableVisual() {
  const cells = [
    ['', '#E8773A', 'rgba(232,119,58,0.4)', '#E8773A'],
    ['rgba(232,119,58,0.2)', '', 'rgba(232,119,58,0.6)', 'rgba(232,119,58,0.2)'],
    ['#E8773A', 'rgba(232,119,58,0.4)', '', 'rgba(232,119,58,0.5)'],
  ];
  return (
    <div className="grid grid-rows-3 gap-[3px] w-full h-full p-1">
      {cells.map((row, ri) => (
        <div key={ri} className="grid grid-cols-4 gap-[3px]">
          {row.map((c, ci) => (
            <div
              key={ci}
              className="rounded-[3px]"
              style={{
                background: c || 'rgba(232,119,58,0.12)',
                minHeight: 10,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ─── Hero bar chart decoration ───────────────────────────────────────── */

function HeroBarChart() {
  const bars = [
    { h: 48, label: 'Q1' },
    { h: 72, label: 'Q2' },
    { h: 56, label: 'Q3' },
    { h: 88, label: 'Q4' },
  ];
  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      <div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-[11px] text-white/40 font-medium tracking-wide uppercase">
            Annual Revenue ($M)
          </span>
        </div>
        <div className="flex items-end justify-between gap-4 h-[120px]">
          {bars.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-2 flex-1">
              <span className="text-[11px] text-white/50 font-semibold">{b.h}</span>
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-primary to-primary/60"
                style={{ height: `${b.h}%` }}
              />
              <span className="text-[10px] text-white/35 font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Floating annotation */}
      <div className="absolute -top-3 -right-3 bg-primary text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg">
        +22% growth
      </div>
    </div>
  );
}

/* ─── Mock text snippet component ─────────────────────────────────────── */

function MockSnippet({
  lines,
}: {
  lines: { text: string; highlight?: boolean }[];
}) {
  return (
    <div className="bg-white rounded-xl border border-[#EAEAF0] p-5 font-mono text-[13px] leading-[1.85] text-[#555568] shadow-card">
      {lines.map((line, i) => (
        <span key={i}>
          {line.highlight ? (
            <mark className="bg-primary/15 text-[#1A1A2E] font-semibold px-1 rounded">
              {line.text}
            </mark>
          ) : (
            line.text
          )}
        </span>
      ))}
    </div>
  );
}

/* ─── Chart type data ─────────────────────────────────────────────────── */

const chartTypes = [
  {
    title: 'Bar Charts',
    desc: 'Compare quantities across categories with grouped or stacked bar representations.',
    Visual: BarChartVisual,
  },
  {
    title: 'Line Graphs',
    desc: 'Track changes over time and identify upward, downward, or fluctuating trends.',
    Visual: LineGraphVisual,
  },
  {
    title: 'Pie Charts',
    desc: 'Describe proportions and percentage breakdowns of a whole.',
    Visual: PieChartVisual,
  },
  {
    title: 'Tables & Diagrams',
    desc: 'Interpret raw data, processes, maps, and multi-variable comparisons.',
    Visual: TableVisual,
  },
];

/* ─── Scoring criteria ────────────────────────────────────────────────── */

const criteria = [
  {
    name: 'Task Achievement',
    desc: 'Covers all key features with a clear overview and accurate data.',
    score: '7.0',
  },
  {
    name: 'Coherence & Cohesion',
    desc: 'Logical grouping with smooth transitions between data points.',
    score: '7.0',
  },
  {
    name: 'Lexical Resource',
    desc: 'Precise data vocabulary — comparisons, approximations, trends.',
    score: '6.5',
  },
  {
    name: 'Grammatical Range',
    desc: 'Complex structures, passive voice, and accurate tense usage.',
    score: '7.0',
  },
];

/* ─── Key skills data ─────────────────────────────────────────────────── */

const skills = [
  {
    title: 'Overview Statement',
    desc: 'The overview is the single most important paragraph in your report. It demonstrates your ability to identify the main trend, the biggest difference, or the most striking feature without citing specific numbers.',
    snippet: [
      { text: 'The bar chart illustrates the amount of waste produced by three countries. ' },
      {
        text: 'Overall, it is clear that Country A generated the highest volume of waste throughout the period, while Country C consistently produced the least.',
        highlight: true,
      },
    ],
  },
  {
    title: 'Data Comparison',
    desc: 'Examiners look for your ability to make meaningful comparisons rather than just listing numbers. Group similar data points and highlight contrasts using comparative and superlative structures.',
    snippet: [
      { text: 'In 2020, ' },
      {
        text: 'spending on education was approximately twice as high as that on defense',
        highlight: true,
      },
      { text: ', at $40 billion and $21 billion respectively. ' },
      {
        text: 'By contrast, healthcare expenditure exceeded both categories combined',
        highlight: true,
      },
      { text: ', reaching $68 billion.' },
    ],
  },
  {
    title: 'Trend Description',
    desc: 'Describing how data changes over time is essential for line graphs and dynamic charts. Use precise language for the direction, speed, and magnitude of changes rather than vague terms.',
    snippet: [
      { text: 'Between 2005 and 2015, the number of international students ' },
      {
        text: 'rose sharply from 12,000 to 31,000',
        highlight: true,
      },
      { text: '. After peaking in 2015, enrolment ' },
      {
        text: 'declined gradually before levelling off at around 25,000',
        highlight: true,
      },
      { text: ' in 2020.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════ */

export default function ReportCheckerPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section className="bg-heading section-padding overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[12px] text-white/50 font-semibold tracking-wide uppercase mb-6">
                Academic Task 1
              </span>
              <h1 className="text-white text-[34px] sm:text-[42px] md:text-[50px] font-extrabold leading-[1.08]">
                Master Academic
                <br />
                <span className="text-primary">Task 1 Reports</span>
              </h1>
              <p className="mt-5 text-[17px] text-[#9999AD] leading-relaxed max-w-lg">
                Sharpen your data description, chart analysis, and trend identification
                skills with AI feedback calibrated to real IELTS examiner standards.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://app.ieltstop.com/reports"
                  className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-[0_4px_20px_rgba(232,119,58,0.3)]"
                >
                  Check Your Report
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

            {/* Right — decorative bar chart */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <HeroBarChart />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. What You'll Analyze ──────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Chart Types</span>
              <h2 className="mt-5 text-heading text-[28px] md:text-[36px] font-extrabold leading-tight">
                What you'll analyze
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {chartTypes.map((ct, i) => (
              <ScrollReveal key={ct.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl border border-[#EAEAF0] p-6 h-full shadow-card hover:border-primary/30 transition-all duration-300">
                  <div className="w-full aspect-square rounded-xl bg-[#F7F7FB] flex items-center justify-center p-4 mb-5 overflow-hidden">
                    <ct.Visual />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#1A1A2E]">{ct.title}</h3>
                  <p className="mt-2 text-[13px] text-[#555568] leading-[1.7]">
                    {ct.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. How We Score ─────────────────────────────────────────── */}
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
                Your report is scored against the same four dimensions IELTS examiners
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
                    <h3 className="text-[16px] font-bold text-[#1A1A2E]">{c.name}</h3>
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

      {/* ── 4. Key Skills We Evaluate ──────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label">Skills</span>
              <h2 className="mt-5 text-heading text-[28px] md:text-[36px] font-extrabold leading-tight">
                Key skills we evaluate
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-20">
            {skills.map((skill, i) => {
              const isReversed = i % 2 === 1;
              return (
                <ScrollReveal key={skill.title} delay={0.1}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                      isReversed ? 'md:direction-rtl' : ''
                    }`}
                    style={isReversed ? { direction: 'rtl' } : undefined}
                  >
                    <div style={isReversed ? { direction: 'ltr' } : undefined}>
                      <div className="text-primary text-[12px] font-bold tracking-widest uppercase mb-3">
                        Skill {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-[22px] font-bold text-[#1A1A2E]">
                        {skill.title}
                      </h3>
                      <p className="mt-3 text-[14px] text-[#555568] leading-[1.8]">
                        {skill.desc}
                      </p>
                    </div>
                    <div style={isReversed ? { direction: 'ltr' } : undefined}>
                      <MockSnippet lines={skill.snippet} />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-heading">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-white text-[28px] md:text-[38px] font-extrabold leading-tight">
              Start analyzing your reports
            </h2>
            <p className="mt-4 text-[16px] text-[#9999AD] max-w-xl mx-auto leading-relaxed">
              Get examiner-level feedback on every chart, graph, and table you
              describe. Know your band score before exam day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://app.ieltstop.com/reports"
                className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-[0_4px_20px_rgba(232,119,58,0.3)]"
              >
                Check Your Report Now
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
