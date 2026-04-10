import { useState } from 'react';

import ScrollReveal from '../components/ui/ScrollReveal';
import {
  Check,
  X,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Zap,
  Clock,
} from 'lucide-react';

/* -- Default Plans -- */
interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  _id: string;
  name: string;
  price: number;
  recommended: boolean;
  period: string;
  subtitle: string;
  description: string;
  features: PlanFeature[];
}

const defaultPlans: Plan[] = [
  {
    _id: 'free',
    name: 'Free',
    price: 0,
    recommended: false,
    period: 'forever',
    subtitle: 'For getting started',
    description: 'Try our core AI features with limited daily checks.',
    features: [
      { text: '3 essay checks per day', included: true },
      { text: '1 letter check per day', included: true },
      { text: 'Basic band score estimate', included: true },
      { text: 'General feedback summary', included: true },
      { text: 'Speech analysis', included: false },
      { text: 'Report analysis', included: false },
      { text: 'Detailed criterion breakdown', included: false },
      { text: 'Progress tracking & analytics', included: false },
      { text: 'Sample answers library', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    _id: 'premium',
    name: 'Premium',
    price: 9.99,
    recommended: true,
    period: 'per month',
    subtitle: 'Most popular',
    description: 'Full AI power for serious IELTS preparation.',
    features: [
      { text: 'Unlimited essay checks', included: true },
      { text: 'Unlimited letter checks', included: true },
      { text: 'Precise band score prediction', included: true },
      { text: 'Detailed criterion-by-criterion feedback', included: true },
      { text: 'Speech analysis with audio upload', included: true },
      { text: 'Academic report analysis', included: true },
      { text: 'Full scoring breakdown (TR, CC, LR, GRA)', included: true },
      { text: 'Progress tracking & analytics dashboard', included: true },
      { text: 'Full sample answers library', included: true },
      { text: 'Priority email support', included: true },
    ],
  },
];

/* -- Trust Points -- */
const trustPoints = [
  { icon: ShieldCheck, text: '7-day money-back guarantee' },
  { icon: Zap, text: 'Instant access after signup' },
  { icon: Clock, text: 'Cancel anytime, no lock-in' },
];

/* -- FAQ Data -- */
const faqs = [
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes, you can cancel your Premium subscription at any time from your account settings. Your access will continue until the end of your billing period.',
  },
  {
    q: 'Is there a free trial for Premium?',
    a: 'We offer a generous free plan that lets you try the core features. You can upgrade to Premium anytime to unlock unlimited access and advanced features.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. All payments are processed securely through Stripe.',
  },
  {
    q: 'How accurate are the AI band scores?',
    a: 'Our AI scores are within 0.5 bands of actual IELTS examiner scores in 95% of cases. The model is trained on thousands of examiner-scored essays and continuously improved.',
  },
  {
    q: 'Can I switch between plans?',
    a: 'Yes. You can upgrade from Free to Premium at any time. If you downgrade, your Premium features will remain active until the end of your current billing cycle.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes, we offer a 7-day money-back guarantee for Premium subscriptions. If you are not satisfied, contact our support team within 7 days of purchase for a full refund.',
  },
];

/* -- FAQ Item -- */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
        open
          ? 'border-primary/30 bg-white shadow-card-hover'
          : 'border-border bg-white shadow-card hover:shadow-card-hover'
      }`}
    >
      <button
        type="button"
        id={`pricing-faq-btn-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
        aria-expanded={open}
        aria-controls={`pricing-faq-panel-${index}`}
      >
        <div className="flex items-center gap-4">
          <span
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors duration-300 ${
              open ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`text-[15px] font-semibold transition-colors duration-200 ${open ? 'text-primary' : 'text-heading'}`}>
            {q}
          </span>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? 'bg-primary text-white rotate-180' : 'bg-bg-alt text-muted-foreground'
          }`}
        >
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </div>
      </button>
      {open && (
        <div id={`pricing-faq-panel-${index}`} role="region" aria-labelledby={`pricing-faq-btn-${index}`} className="px-6 pb-6 pl-14 md:pl-[72px]">
          <p className="text-[14px] text-body leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

/* -- Page -- */
export default function Pricing() {
  const [plans] = useState<Plan[]>(defaultPlans);

  return (
    <div>
      {/* -- Hero + Plans -- */}
      <section
        className="bg-white pt-12 md:pt-16 pb-14 md:pb-16"
        aria-labelledby="pricing-heading"
      >
        <div className="container-main">
          {/* Heading */}
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
              <h1
                id="pricing-heading"
                className="text-heading text-[34px] sm:text-[42px] md:text-[50px] leading-[1.1] font-heading font-extrabold italic"
              >
                Choose Your Plan
              </h1>
              <p className="mt-4 text-muted-foreground text-[16px] leading-relaxed">
                Affordable and adaptable pricing to suit your goals.
              </p>

              {/* Trust points */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
                {trustPoints.map((t) => (
                  <div key={t.text} className="flex items-center gap-1.5 text-body text-[13px]">
                    <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Plan cards */}
          <h2 className="sr-only">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            {plans.map((plan, i) => {
              const isPremium = plan.recommended || plan.name?.toLowerCase() === 'premium';
              const price = plan.price === 0 ? '0' : (plan.price?.toFixed?.(2) ?? plan.price);
              return (
                <ScrollReveal key={plan._id || i} delay={i * 0.15}>
                  <div
                    className={`rounded-2xl flex flex-col relative h-full transition-all duration-300 ${
                      isPremium
                        ? 'bg-white border-2 border-heading shadow-[0_20px_60px_rgba(26,26,46,0.12)] p-8 md:p-10'
                        : 'bg-white border border-border shadow-card hover:shadow-card-hover p-8 md:p-10'
                    }`}
                  >
                    {isPremium && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center px-5 py-1.5 rounded-full text-[12px] font-bold tracking-wide bg-heading text-white whitespace-nowrap">
                        Recommended for you
                      </span>
                    )}

                    <h3 className="text-heading text-[24px] font-bold" style={{ fontStyle: 'italic' }}>
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>

                    <div className="mt-5 flex items-baseline gap-1.5 pb-5 border-b border-border">
                      <span className="text-[32px] md:text-[44px] font-extrabold text-heading leading-none">
                        ${price}
                      </span>
                      <span className="text-muted-foreground text-[14px] font-medium">
                        /{plan.period || (plan.price === 0 ? 'forever' : 'month')}
                      </span>
                    </div>

                    <div className="mt-5 flex-1">
                      <p className="text-[13px] font-bold text-heading mb-3.5">
                        What&apos;s included:
                      </p>
                      <ul className="space-y-2.5" role="list">
                        {(plan.features || []).map((f, j) => {
                          const text = typeof f === 'string' ? f : f.text;
                          const included = typeof f === 'string' ? true : f.included;
                          return (
                            <li key={j} className="flex items-start gap-2.5">
                              {included ? (
                                <Check className="w-[18px] h-[18px] text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                              ) : (
                                <X className="w-[18px] h-[18px] text-muted-foreground/30 flex-shrink-0 mt-0.5" aria-hidden="true" />
                              )}
                              <span className={`text-[14px] leading-snug ${included ? 'text-body' : 'text-muted-foreground/50'}`}>
                                {text}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <Link
                      to={isPremium ? '/signup?plan=premium' : '/signup'}
                      className={`group mt-7 inline-flex items-center justify-center gap-2 h-[50px] text-[14px] font-bold rounded-lg transition-all duration-200 text-center w-full ${
                        isPremium
                          ? 'bg-heading text-white hover:bg-heading/90'
                          : 'border border-border text-heading hover:border-heading'
                      }`}
                    >
                      {isPremium ? 'Start with Premium' : 'Get started'}
                    </Link>

                    {isPremium && (
                      <div className="mt-3 flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                        <span className="text-[13px] text-muted-foreground">7-day money-back guarantee</span>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- FAQ -- */}
      <section className="py-16 md:py-20 bg-bg-alt" aria-labelledby="pricing-faq-heading">
        <div className="container-main max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">FAQ</span>
              <h2 id="pricing-faq-heading" className="mt-5" style={{ fontStyle: 'italic' }}>
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-muted-foreground text-[16px]">
                Everything you need to know about our pricing and plans.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.05}>
                <FAQItem {...faq} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- Bottom CTA -- */}
      <section className="px-5 md:px-10 py-6 md:py-8" aria-labelledby="pricing-cta-heading">
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-2xl py-16 md:py-24 px-6 md:px-10 text-center"
            style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2A2A45 100%)' }}
          >
            <div className="relative z-10 max-w-xl mx-auto">
              <h2
                id="pricing-cta-heading"
                className="text-white text-[30px] md:text-[38px] leading-[1.15]"
                style={{ fontStyle: 'italic' }}
              >
                Ready to Improve Your IELTS Score?
              </h2>
              <p className="mt-4 text-white/55 text-[16px] leading-relaxed">
                Join 10,000+ students who improved their band scores.
                Start with a free essay check — no credit card needed.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.ieltstop.com/signup"
                  className="group inline-flex items-center gap-2.5 h-[52px] px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(232,119,58,0.35)]"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white/80 text-[15px] font-semibold rounded-lg hover:bg-white/5 transition-all"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
