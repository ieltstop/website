import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const stats = [
  { value: '25 K+', label: 'Monthly Evaluations' },
  { value: '100 %', label: 'Satisfaction Focused' },
];

export default function Stats() {
  return (
    <section className="section-padding bg-bg-warm" aria-labelledby="stats-heading">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left content */}
          <ScrollReveal>
            <span className="section-label">Why IELTS Top</span>
            <h2 id="stats-heading" className="mt-5">
              Measurable results<br />
              backed by advanced AI
            </h2>
            <p className="mt-5 text-body text-[16px] leading-[1.75] max-w-[460px]">
              Our platform focuses on delivering transparent, data-driven
              feedback for your IELTS essays, letters, reports, and
              speaking responses — helping you track real progress toward
              your target band score.
            </p>

            {/* Stat counters */}
            <div className="mt-9 flex items-center gap-12">
              {stats.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 0.1 + 0.1}>
                  <span className="text-[32px] md:text-[48px] font-extrabold text-heading font-heading tracking-tight leading-none">
                    {s.value}
                  </span>
                  <p className="mt-2 text-[13px] text-muted-foreground font-medium tracking-wide uppercase">{s.label}</p>
                </ScrollReveal>
              ))}
            </div>

            <Link
              to="/pricing"
              className="group mt-9 inline-flex items-center gap-2 h-[46px] px-6 bg-primary text-white text-[13px] font-bold rounded-md hover:bg-primary-hover transition-colors shadow-[0_4px_12px_rgba(232,119,58,0.25)]"
              aria-label="View service fees and pricing"
            >
              Service fees
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>

          {/* Right images — staggered */}
          <ScrollReveal delay={0.2} direction="right" className="grid grid-cols-2 gap-5" aria-hidden="true">
            <div className="rounded-xl overflow-hidden shadow-md bg-bg-placeholder">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=520&fit=crop"
                alt="Student reviewing IELTS feedback"
                className="w-full h-[260px] md:h-[320px] object-cover"
                loading="lazy"
                width="400"
                height="520"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-bg-placeholder mt-10">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=520&fit=crop"
                alt="Student writing an IELTS essay"
                className="w-full h-[260px] md:h-[320px] object-cover"
                loading="lazy"
                width="400"
                height="520"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
