import { useState } from 'react';

import { ArrowRight, Headphones, BookOpen, PenLine, Mic, TrendingUp, Target, GraduationCap } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

const SKILLS = [
  { key: 'Listening', label: 'Listening', icon: Headphones, gradient: 'from-blue-500 to-blue-600', dot: 'bg-blue-500', light: 'bg-blue-50 text-blue-600' },
  { key: 'Reading', label: 'Reading', icon: BookOpen, gradient: 'from-emerald-500 to-emerald-600', dot: 'bg-emerald-500', light: 'bg-emerald-50 text-emerald-600' },
  { key: 'Writing', label: 'Writing', icon: PenLine, gradient: 'from-primary to-primary-hover', dot: 'bg-primary', light: 'bg-primary/10 text-primary' },
  { key: 'Speaking', label: 'Speaking', icon: Mic, gradient: 'from-purple-500 to-purple-600', dot: 'bg-purple-500', light: 'bg-purple-50 text-purple-600' },
] as const;

function roundHalf(n: number) { return Math.round(n * 2) / 2; }

function bandColor(s: number) {
  if (s < 5) return '#ef4444';
  if (s <= 6) return '#E8773A';
  if (s <= 7) return '#16a34a';
  return '#059669';
}

function bandColorClass(s: number) {
  if (s < 5) return 'text-red-500';
  if (s <= 6) return 'text-primary';
  if (s <= 7) return 'text-green-600';
  return 'text-emerald-600';
}

function bandLabel(s: number) {
  if (s >= 8.5) return 'Expert User';
  if (s >= 7.5) return 'Very Good User';
  if (s >= 6.5) return 'Competent User';
  if (s >= 5.5) return 'Modest User';
  if (s >= 4.5) return 'Limited User';
  return 'Below Average';
}

const REQUIREMENTS = [
  { icon: GraduationCap, label: 'Top Universities', band: '7.0 – 7.5' },
  { icon: Target, label: 'Most Universities', band: '6.0 – 6.5' },
  { icon: TrendingUp, label: 'Immigration (Canada/UK)', band: '6.5 – 7.5' },
];

export default function BandCalculatorPage() {
  const [scores, setScores] = useState<Record<string, number>>({
    Listening: 6.5, Reading: 6.5, Writing: 6.0, Speaking: 6.0,
  });

  const avg = (scores.Listening + scores.Reading + scores.Writing + scores.Speaking) / 4;
  const overall = roundHalf(avg);
  const circumference = 2 * Math.PI * 72;
  const progress = (overall / 9) * circumference;

  return (
    <div className="bg-bg-alt min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="container-main pt-10 md:pt-14 pb-10 md:pb-14">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="section-label">Free Tool</span>
                <h1
                  id="calc-heading"
                  className="mt-4 text-[26px] sm:text-[32px] md:text-[38px] leading-[1.15] font-heading font-extrabold italic text-heading"
                >
                  Band Score Calculator
                </h1>
                <p className="mt-2 text-muted-foreground text-[15px] max-w-md">
                  Drag the sliders to calculate your overall IELTS band score using the official formula.
                </p>
              </div>
              {/* Quick requirement badges */}
              <div className="flex flex-wrap gap-3">
                {REQUIREMENTS.map((r) => (
                  <div key={r.label} className="flex items-center gap-2 bg-bg-alt rounded-full px-4 py-2.5 border border-border">
                    <r.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="text-[12px] text-muted-foreground">{r.label}</span>
                    <span className="text-[12px] font-bold text-heading">{r.band}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Calculator body */}
      <section className="py-10 md:py-14" aria-labelledby="calc-heading">
        <div className="container-main max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">

              {/* Left — Sliders */}
              <div className="bg-white rounded-2xl border border-border shadow-card p-6 md:p-8">
                <div className="space-y-8">
                  {SKILLS.map((skill) => {
                    const Icon = skill.icon;
                    const val = scores[skill.key];
                    const pct = (val / 9) * 100;
                    return (
                      <div key={skill.key}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-sm`} aria-hidden="true">
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <label htmlFor={`s-${skill.key}`} className="text-[15px] font-semibold text-heading">
                              {skill.label}
                            </label>
                          </div>
                          <div className={`min-w-[56px] h-9 rounded-lg ${skill.light} flex items-center justify-center`}>
                            <span className="text-[16px] font-extrabold tabular-nums">{val.toFixed(1)}</span>
                          </div>
                        </div>

                        {/* Slider */}
                        <div className="relative h-2">
                          <div className="absolute inset-0 bg-border rounded-full" />
                          <div
                            className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-150`}
                            style={{ width: `${pct}%` }}
                          />
                          <input
                            type="range"
                            id={`s-${skill.key}`}
                            aria-label={`${skill.label} band score`}
                            min={0} max={9} step={0.5}
                            value={val}
                            onChange={(e) => setScores((p) => ({ ...p, [skill.key]: parseFloat(e.target.value) }))}
                            className="absolute inset-0 w-full opacity-0 cursor-pointer"
                          />
                          <div
                            className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-white border-[3px] shadow-md pointer-events-none transition-all duration-150"
                            style={{ left: `calc(${pct}% - 9px)`, borderColor: bandColor(val) }}
                          />
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] text-muted-foreground/60 select-none">
                          {[0, 3, 5, 6, 7, 8, 9].map((n) => (
                            <span key={n}>{n}</span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right — Sticky result */}
              <div className="lg:sticky lg:top-20 space-y-5">
                {/* Score ring */}
                <div className="bg-white rounded-2xl border border-border shadow-card p-6 text-center">
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[1.5px] mb-5">Overall Score</p>
                  <div className="relative w-[160px] h-[160px] mx-auto">
                    <svg width="160" height="160" viewBox="0 0 160 160" aria-hidden="true">
                      <circle cx="80" cy="80" r="72" fill="none" stroke="#EAEAF0" strokeWidth="5" />
                      <circle
                        cx="80" cy="80" r="72" fill="none"
                        stroke={bandColor(overall)}
                        strokeWidth="5" strokeLinecap="round"
                        strokeDasharray={`${progress} ${circumference}`}
                        transform="rotate(-90 80 80)"
                        className="transition-all duration-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-[44px] font-extrabold font-heading leading-none ${bandColorClass(overall)} transition-colors duration-300`}>
                        {overall.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-[15px] font-bold text-heading">{bandLabel(overall)}</p>
                  <p className="mt-1 text-[12px] text-muted-foreground">
                    Average {avg.toFixed(2)} → {overall.toFixed(1)}
                  </p>

                  {/* Mini breakdown */}
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {SKILLS.map((skill) => (
                      <div key={skill.key} className="text-center">
                        <span className={`w-2 h-2 rounded-full ${skill.dot} inline-block mb-1`} aria-hidden="true" />
                        <p className="text-[11px] text-muted-foreground leading-none">{skill.label.charAt(0)}</p>
                        <p className="text-[14px] font-bold text-heading mt-0.5">{scores[skill.key].toFixed(1)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2A2A45 100%)' }}
                >
                  <p className="text-white/50 text-[12px] uppercase tracking-wider font-semibold mb-2">Next Step</p>
                  <p className="text-white text-[17px] font-bold leading-snug mb-4" style={{ fontStyle: 'italic' }}>
                    Get detailed AI feedback on your writing
                  </p>
                  <a
                    href="https://app.ieltstop.com/essays"
                    className="group inline-flex items-center gap-2 h-[44px] px-6 bg-primary text-white text-[13px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_12px_rgba(232,119,58,0.3)]"
                  >
                    Check My Essay
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* How it works — clean inline */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 bg-white rounded-2xl border border-border shadow-card p-6 md:p-8">
              <h2 className="text-[18px] font-bold text-heading mb-4" style={{ fontStyle: 'italic' }}>
                How IELTS scoring works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] text-body leading-[1.7]">
                <div>
                  <p className="font-semibold text-heading mb-1">Step 1 — Four skills</p>
                  <p>Each skill (Listening, Reading, Writing, Speaking) is scored independently on a 0–9 scale by trained examiners.</p>
                </div>
                <div>
                  <p className="font-semibold text-heading mb-1">Step 2 — Average</p>
                  <p>Your four scores are added and divided by 4 to get a raw average. For example: (7 + 6.5 + 6 + 6.5) / 4 = 6.5.</p>
                </div>
                <div>
                  <p className="font-semibold text-heading mb-1">Step 3 — Round</p>
                  <p>The average is rounded to the nearest 0.5. If it ends in .25, it rounds up. If it ends in .75, it also rounds up.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
