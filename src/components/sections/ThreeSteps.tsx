
import { ArrowRight, Check } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const checks = [
  'Detailed reports',
  'Data analytics',
  'Cloud-based tools',
  'Clear scoring',
  'Real-time access',
  'Band predictions',
];

export default function ThreeSteps() {
  return (
    <section className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=560&fit=crop"
                  alt="Student working on IELTS preparation with a notebook and laptop on a desk"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="560"
                />
              </div>
              <div className="hidden lg:block absolute -bottom-5 -right-5 w-40 h-40 rounded-xl bg-primary/8 -z-10" aria-hidden="true" />
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <span className="section-label">About IELTS Top</span>
              <h2 id="about-heading" className="mt-5" style={{ fontStyle: 'italic' }}>
                AI scoring built for<br />
                modern IELTS prep
              </h2>
              <p className="mt-5 text-body text-[16px] leading-[1.75]">
                We combine IELTS expertise with modern AI technology to give you
                complete control over your preparation. Get instant feedback on
                essays, letters, reports, and speaking responses.
              </p>

              {/* Checkmark grid */}
              <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4" role="list">
                {checks.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-heading flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="text-[15px] font-medium text-heading">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.ieltstop.com/essays"
                className="group mt-9 inline-flex items-center gap-2.5 h-[48px] px-7 bg-primary text-white text-[14px] font-bold rounded-md hover:bg-primary-hover transition-all shadow-[0_4px_12px_rgba(232,119,58,0.25)]"
              >
                Read about us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
