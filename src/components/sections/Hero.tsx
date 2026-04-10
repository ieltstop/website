import { useState, useEffect, useRef } from 'react';

import { ArrowRight, Zap, BarChart3, ShieldCheck, Star } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

/* ── Animated counter stats ── */
const stats = [
  { value: 10000, suffix: '+', label: 'Students' },
  { value: 500000, suffix: '+', label: 'Essays Checked' },
  { value: 94, suffix: '%', label: 'Accuracy Rate' },
  { value: 4.8, suffix: '★', label: 'User Rating', decimals: 1 },
];

function useCountUp(target: number, duration = 2000, decimals = 0, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, decimals, start]);

  return value;
}

function formatNumber(n: number, decimals = 0): string {
  if (decimals > 0) return n.toFixed(decimals);
  if (n >= 1000) return n.toLocaleString('en-US');
  return String(Math.round(n));
}

function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
      { rootMargin: '-40px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
      {stats.map((s, _i) => (
        <StatItem key={s.label} {...s} started={inView} />
      ))}
    </div>
  );
}

function StatItem({ value, suffix, label, decimals = 0, started }: { value: number; suffix: string; label: string; decimals?: number; started: boolean }) {
  const current = useCountUp(value, 2000, decimals, started);
  return (
    <div className="text-center sm:text-left">
      <p className="text-white text-[22px] sm:text-[26px] font-extrabold font-heading leading-none tabular-nums">
        {formatNumber(current, decimals)}{suffix}
      </p>
      <p className="mt-1 text-white/40 text-[12px] font-medium">{label}</p>
    </div>
  );
}

const rotatingLines = [
  { text: 'Band Score', highlight: 'in Seconds' },
  { text: 'Essay Feedback', highlight: 'Instantly' },
  { text: 'Speaking Score', highlight: 'with AI' },
  { text: 'Writing Tips', highlight: 'that Work' },
];

const features = [
  { icon: Zap, title: 'Instant Band Scores', description: 'Paste your essay, get an accurate IELTS band score within seconds — not days.', link: '/essays' },
  { icon: BarChart3, title: 'Detailed Feedback', description: 'Task Achievement, Coherence, Vocabulary, and Grammar — scored on all 4 criteria.', link: '/essays' },
  { icon: ShieldCheck, title: 'Track Your Progress', description: 'See your scores improve over time with personalized analytics and tips.', link: '/signup' },
];

/* Mock band score card shown on the right */
function BandScoreCard() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-6 md:p-8 w-[min(320px,85vw)] md:w-[360px]">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[12px] font-bold text-muted-foreground uppercase tracking-wider">Overall Band Score</p>
            <p className="text-[48px] font-extrabold text-heading font-heading leading-none mt-1">7.5</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary text-[24px] font-extrabold font-heading">A</span>
          </div>
        </div>

        {/* Criteria scores */}
        <div className="space-y-3">
          {[
            { name: 'Task Achievement', score: 8.0, pct: 80 },
            { name: 'Coherence & Cohesion', score: 7.5, pct: 75 },
            { name: 'Lexical Resource', score: 7.0, pct: 70 },
            { name: 'Grammar Range', score: 7.5, pct: 75 },
          ].map((c) => (
            <div key={c.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] font-medium text-body">{c.name}</span>
                <span className="text-[13px] font-bold text-heading">{c.score}</span>
              </div>
              <div className="h-[6px] bg-progress-bg rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${c.pct}%`,
                    background: c.pct >= 80 ? '#10B981' : c.pct >= 70 ? '#E8773A' : '#EF4444',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-primary fill-primary' : 'text-[#E0E0E0]'}`} />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-muted-foreground">AI Evaluated</span>
        </div>
      </div>

      {/* Floating mini badge */}
      <div className="absolute -top-3 -right-3 bg-success text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
        +1.5 improvement
      </div>
    </div>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingLines.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = rotatingLines[currentIndex];

  return (
    <section className="relative" aria-labelledby="hero-heading">
      <div className="relative bg-bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop&crop=faces"
            alt=""
            role="presentation"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-[#1A1A2E]/90 to-[#1A1A2E]/60" />
        </div>

        <div className="container-main relative z-10 pt-14 md:pt-20 lg:pt-28 pb-36 md:pb-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            {/* Left — Text */}
            <ScrollReveal direction="up">
              <span className="section-label-dark">
                Free AI-Powered IELTS Scoring
              </span>

              <h1
                id="hero-heading"
                className="mt-6 text-white text-[34px] sm:text-[42px] md:text-[50px] leading-[1.1] font-heading font-extrabold italic"
              >
                Get Your IELTS<br />
                <span
                  className="inline-block transition-all duration-300"
                  style={{
                    opacity: isAnimating ? 0 : 1,
                    transform: isAnimating ? 'translateY(12px)' : 'translateY(0)',
                  }}
                >
                  {current.text}{' '}
                  <span className="text-primary">{current.highlight}</span>
                </span>
              </h1>

              {/* sr-only text for screen readers */}
              <span className="sr-only">
                Get Your IELTS Band Score in Seconds, Essay Feedback Instantly, Speaking Score with AI, Writing Tips that Work
              </span>

              <p className="mt-5 text-text-light text-[17px] max-w-[480px] leading-[1.75]">
                Paste your essay. Our AI scores it on all 4 IELTS criteria and tells you
                exactly how to improve. No signup required for your first check.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
                <a
                  href="https://app.ieltstop.com/essays"
                  className="group inline-flex items-center gap-2.5 h-[54px] px-9 bg-primary text-white text-[16px] font-bold rounded-lg hover:bg-primary-hover transition-all duration-200 shadow-[0_4px_16px_rgba(232,119,58,0.35)] hover:shadow-[0_8px_24px_rgba(232,119,58,0.45)] hover:-translate-y-0.5"
                >
                  Check My Essay Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://app.ieltstop.com/samples"
                  className="inline-flex items-center h-[54px] px-8 border border-white/25 text-white/90 text-[15px] font-semibold rounded-lg hover:bg-white/8 hover:border-white/40 transition-all duration-200"
                >
                  View Sample Scores
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-text-dim text-[13px]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>7-day money-back guarantee &middot; No credit card needed</span>
              </div>

              <AnimatedStats />
            </ScrollReveal>

            {/* Right — Mock band score card (desktop only) */}
            <ScrollReveal direction="up" delay={0.2} className="hidden lg:flex justify-center">
              <BandScoreCard />
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Floating benefit cards */}
      <div className="container-main relative z-20 -mt-20 md:-mt-24 mb-4">
        <ul className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.08)] overflow-hidden border border-border" role="list">
          {features.map((f, i) => (
            <li
              key={f.title}
              className={`p-7 md:p-9 ${i < features.length - 1 ? 'md:border-r border-b md:border-b-0 border-border' : ''} group/card hover:bg-bg-alt transition-colors duration-200`}
            >
              <div className="w-[52px] h-[52px] rounded-lg bg-bg-alt flex items-center justify-center mb-5 group-hover/card:bg-primary group-hover/card:scale-105 transition-all duration-300" aria-hidden="true">
                <f.icon className="w-6 h-6 text-heading group-hover/card:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-[17px] font-bold text-heading leading-snug">{f.title}</h3>
              <p className="mt-2.5 text-[14px] text-body leading-[1.7]">{f.description}</p>
              <a
                href={`https://app.ieltstop.com${f.link}`}
                className="group/cta mt-4 inline-flex items-center text-[13px] font-bold text-heading hover:text-primary transition-colors duration-200 overflow-hidden"
                aria-label={`Learn more about ${f.title}`}
              >
                <span className="w-0 overflow-hidden group-hover/cta:w-5 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span>Learn more</span>
                <span className="w-5 overflow-hidden group-hover/cta:w-0 transition-all duration-300 flex justify-end ml-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
