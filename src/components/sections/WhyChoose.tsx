import {
  Zap,
  ShieldCheck,
  Clock,
  GraduationCap,
  Lock,
} from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function WhyChoose() {
  return (
    <section className="section-padding bg-bg-warm-alt" aria-labelledby="why-heading">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* -- Left: Pills -- */}
          <ScrollReveal direction="left" className="grid gap-7 max-w-[600px]" aria-label="Key features">

            {/* Pill 1 — white */}
            <div className="flex items-center justify-between w-full min-h-[76px] rounded-full border border-gray-200 bg-white px-6 py-4">
              <div className="flex items-center gap-3 flex-shrink-0">
                <Zap className="w-[34px] h-[34px] text-primary flex-shrink-0" aria-hidden="true" />
                <p className="font-bold text-heading text-[18px] leading-[22px] whitespace-nowrap">Instant Feedback</p>
              </div>
              <p className="text-body-alt text-[15px] leading-[23px] text-left max-w-[55%]">
                Get detailed analysis of your essay within seconds, no waiting required.
              </p>
            </div>

            {/* Pill 2 — orange bg */}
            <div className="flex items-center justify-between w-full min-h-[76px] rounded-full bg-primary px-6 py-4">
              <div className="flex items-center gap-3 flex-shrink-0">
                <ShieldCheck className="w-[34px] h-[34px] text-white flex-shrink-0" aria-hidden="true" />
                <p className="font-bold text-white text-[18px] leading-[22px] whitespace-nowrap">Accurate<br />Band Scores</p>
              </div>
              <p className="text-white/90 text-[15px] leading-[23px] text-left max-w-[55%]">
                Get reliable band score estimations based on official IELTS criteria.
              </p>
            </div>

            {/* Pill 3 — white + floating circle */}
            <div className="grid grid-cols-[1fr_auto] items-center gap-5">
              <div className="flex items-center justify-between w-full min-h-[76px] rounded-full border border-gray-200 bg-white px-6 py-4">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Clock className="w-[34px] h-[34px] text-primary flex-shrink-0" aria-hidden="true" />
                  <p className="font-bold text-heading text-[18px] leading-[22px] whitespace-nowrap">Save Time</p>
                </div>
                <p className="text-body-alt text-[15px] leading-[23px] text-left max-w-[55%]">
                  No waiting for human teachers. Get feedback instantly, anytime.
                </p>
              </div>
              <div className="hidden md:flex w-[56px] h-[56px] rounded-full bg-white border-2 border-primary items-center justify-center flex-shrink-0" aria-hidden="true">
                <Lock className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Bottom pill buttons */}
            <div className="grid grid-cols-[1.3fr_1fr] gap-4">
              <span className="inline-flex items-center justify-center gap-2 min-h-[55px] rounded-full bg-primary text-white text-[15px] font-bold" role="text">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
                Improvement Suggestions
              </span>
              <span className="inline-flex items-center justify-center gap-2 min-h-[55px] rounded-full bg-white text-heading text-[15px] font-bold border border-gray-200" role="text">
                <Lock className="w-5 h-5" aria-hidden="true" />
                Privacy Focused
              </span>
            </div>
          </ScrollReveal>

          {/* -- Right: Copy -- */}
          <ScrollReveal direction="right" delay={0.1}>
            <h2 id="why-heading" className="text-[40px] md:text-[48px]">
              Why Choose<br />
              <span className="text-primary" style={{ textDecoration: 'underline', textDecorationColor: '#E8773A40', textUnderlineOffset: '6px' }}>IELTS Top</span>
            </h2>
            <p className="mt-8 text-body-alt text-[16px] leading-[1.8]">
              At IELTS Top, we go beyond ordinary test prep. Our AI-powered feedback
              system analyzes your strengths and weaknesses in real time, giving you
              personalized guidance that helps you improve faster. With expertly designed
              practice tests, smart insights, and clear progress tracking.
            </p>
            <p className="mt-5 text-heading text-[16px] leading-[1.8] font-bold">
              Why settle for generic practice when you can learn smarter? We deliver
              tailored feedback that helps scoring.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
