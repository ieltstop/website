import { Link } from 'react-router';
import {
  Check,
  X,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

/* ─── Comparison data ───────────────────────────────────────────────────── */

interface ComparisonRow {
  feature: string;
  ieltstop: string | boolean;
  writing9: string | boolean;
  chatgpt: string | boolean;
  grammarly: string | boolean;
}

const ROWS: ComparisonRow[] = [
  {
    feature: 'Price',
    ieltstop: '$9.99/mo',
    writing9: '$14.99/mo',
    chatgpt: '$20/mo',
    grammarly: '$12/mo',
  },
  {
    feature: 'Band Accuracy',
    ieltstop: 'Within 0.5 band',
    writing9: 'Within 1 band',
    chatgpt: 'No band scoring',
    grammarly: 'No band scoring',
  },
  {
    feature: 'Task Types Supported',
    ieltstop: 'Task 1 & 2, Letters, Reports',
    writing9: 'Task 1 & 2 only',
    chatgpt: 'General writing',
    grammarly: 'General writing',
  },
  {
    feature: 'Feedback Depth',
    ieltstop: 'Criterion-by-criterion',
    writing9: 'Basic summary',
    chatgpt: 'General suggestions',
    grammarly: 'Grammar only',
  },
  {
    feature: 'Speed',
    ieltstop: '< 10 seconds',
    writing9: '~30 seconds',
    chatgpt: '~15 seconds',
    grammarly: 'Real-time',
  },
  {
    feature: 'Free Tier',
    ieltstop: true,
    writing9: false,
    chatgpt: true,
    grammarly: true,
  },
  {
    feature: 'IELTS-Specific',
    ieltstop: true,
    writing9: true,
    chatgpt: false,
    grammarly: false,
  },
  {
    feature: 'Speaking Assessment',
    ieltstop: true,
    writing9: false,
    chatgpt: false,
    grammarly: false,
  },
];

const COMPETITORS = [
  { key: 'ieltstop', label: 'IELTS Top', highlight: true },
  { key: 'writing9', label: 'Writing9', highlight: false },
  { key: 'chatgpt', label: 'ChatGPT', highlight: false },
  { key: 'grammarly', label: 'Grammarly', highlight: false },
] as const;

/* ─── Benefits ──────────────────────────────────────────────────────────── */

const BENEFITS = [
  {
    icon: Target,
    title: 'IELTS-Specific AI',
    description:
      'Trained exclusively on IELTS criteria and thousands of scored samples. Every piece of feedback maps directly to the official band descriptors.',
  },
  {
    icon: Zap,
    title: 'Instant Detailed Feedback',
    description:
      'Get criterion-by-criterion scores and actionable improvement tips in under 10 seconds. No waiting for human reviewers.',
  },
  {
    icon: ShieldCheck,
    title: 'All Four Skills Covered',
    description:
      'Writing Task 1 & 2, formal and informal letters, academic reports, and speaking assessments all in one platform.',
  },
];

/* ─── Cell renderer ─────────────────────────────────────────────────────── */

function CellValue({ value, highlight }: { value: string | boolean; highlight: boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
        <Check aria-hidden="true" className="w-4.5 h-4.5 text-green-600" strokeWidth={3} />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
        <X aria-hidden="true" className="w-4.5 h-4.5 text-red-500" strokeWidth={3} />
      </span>
    );
  }

  return (
    <span className={`text-[14px] ${highlight ? 'font-bold text-heading' : 'text-body'}`}>
      {value}
    </span>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function ComparePage() {
  return (
    <div className="bg-bg-alt min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="container-main pt-16 md:pt-20 pb-16 md:pb-20 text-center">
          <ScrollReveal>
            <span className="section-label">Comparison</span>
            <h1 className="mt-4 text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] font-heading font-bold text-heading">
              How We Compare
            </h1>
            <p className="mt-4 text-muted-foreground text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
              See why thousands of IELTS test-takers choose IELTS Top over other tools for their exam preparation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <ScrollReveal>
            <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-card">
              <table className="w-full min-w-[720px]" aria-label="Product comparison table">
                <thead>
                  <tr>
                    <th scope="col" className="text-left text-[11px] font-bold text-muted-foreground uppercase tracking-[1.5px] px-6 py-5 w-[200px] border-b border-border">
                      Feature
                    </th>
                    {COMPETITORS.map((c) => (
                      <th
                        key={c.key}
                        scope="col"
                        className={`text-center px-6 py-5 border-b ${
                          c.highlight
                            ? 'bg-heading text-white'
                            : 'text-heading border-border'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-1.5">
                          {c.highlight && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-heading bg-white px-2.5 py-1 rounded-full">
                              <Sparkles className="w-3 h-3 text-primary" aria-hidden="true" /> Best Value
                            </span>
                          )}
                          <span className="text-[15px] font-bold">{c.label}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-bg-alt/40'}
                    >
                      <td className="px-6 py-5 text-[14px] font-semibold text-heading border-b border-border/60">
                        {row.feature}
                      </td>
                      {COMPETITORS.map((c) => (
                        <td
                          key={c.key}
                          className={`px-6 py-5 text-center border-b border-border/60 ${
                            c.highlight ? 'bg-primary/[0.03]' : ''
                          }`}
                        >
                          <div className="flex justify-center">
                            <CellValue
                              value={row[c.key as keyof ComparisonRow] as string | boolean}
                              highlight={c.highlight}
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose IELTS Top */}
      <section className="pb-16 md:pb-24">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="section-label">Why Choose Us</span>
              <h2 className="mt-4 text-[24px] sm:text-[30px] md:text-[36px] leading-[1.15] font-heading font-bold text-heading">
                Built for IELTS Success
              </h2>
              <p className="mt-3 text-muted-foreground text-[15px] max-w-lg mx-auto">
                Purpose-built features that generic writing tools simply cannot offer.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <ScrollReveal key={benefit.title} delay={idx * 0.1}>
                <div className="group bg-white rounded-xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-5 transition-colors duration-300">
                    <benefit.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-heading mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container-main">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-heading to-heading/90 p-10 md:p-16 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,119,58,0.15),transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-white text-[24px] md:text-[32px] font-heading font-bold leading-tight">
                  Ready to Boost Your Band Score?
                </h2>
                <p className="mt-3 text-white/70 text-[15px] max-w-md mx-auto">
                  Join thousands of students who improved their IELTS scores with AI-powered feedback.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://app.ieltstop.com/signup"
                    className="group inline-flex items-center justify-center gap-2 bg-primary text-white text-[14px] font-bold h-[48px] px-8 rounded-lg hover:bg-primary-hover transition-colors duration-200 shadow-lg shadow-primary/25"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <Link
                    to="/pricing"
                    className="text-white/80 text-sm font-medium hover:text-white transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
