import { useState } from 'react';

import Section from '../components/ui/Section';
import { PlusCircle, MinusCircle, ArrowRight } from 'lucide-react';

/* -- FAQ Data -- */
const faqs = [
  {
    q: 'What is IELTS Top?',
    a: 'IELTS Top is an AI-powered IELTS preparation platform that provides instant, detailed feedback on your writing and speaking. Our AI engine evaluates your essays, letters, reports, and speech recordings against official IELTS criteria, giving you band score estimates and actionable improvement tips.',
  },
  {
    q: 'How accurate is the AI scoring?',
    a: 'Our AI has been trained on thousands of IELTS-scored samples and calibrated against official IELTS band descriptors. While no AI can replace an official IELTS examiner, our scoring is highly accurate and provides reliable estimates within half a band score. The detailed feedback and improvement suggestions are invaluable for targeted practice.',
  },
  {
    q: 'Can I use it for both Academic and General Training?',
    a: 'Yes, IELTS Top supports both Academic and General Training modules. When submitting your work, you can specify which module you are preparing for, and our AI will evaluate it against the appropriate criteria. This includes Task 1 (letters for General, reports for Academic) and Task 2 essays for both modules.',
  },
  {
    q: 'How does the speaking analysis work?',
    a: 'Simply upload an audio recording of your speaking practice. Our AI analyzes your pronunciation, fluency, grammatical range and accuracy, and lexical resource. You will receive a detailed breakdown with a band score estimate for each criterion, along with specific tips on areas to improve, such as intonation patterns, filler word usage, and grammatical errors.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. All data transmitted to and from our platform is encrypted using industry-standard TLS encryption. Your essays, recordings, and personal information are stored securely and are never shared with third parties. You can delete your data at any time from your account settings.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes, you can cancel your Premium subscription at any time from your account settings. When you cancel, you will continue to have access to Premium features until the end of your current billing period. There are no cancellation fees or penalties.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes, we offer a full refund within 7 days of purchase. If you are not satisfied with IELTS Top Premium for any reason, simply contact our support team within 7 days of your purchase, and we will process a full refund -- no questions asked.',
  },
  {
    q: 'How many essays can I check on the free plan?',
    a: 'The free plan includes 3 essay checks and 1 letter check per day. This is a great way to try out the platform before committing to Premium, which offers unlimited checks and additional features like speech analysis and progress tracking.',
  },
];

/* -- FAQ Item -- */
function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        id={`faq-btn-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left cursor-pointer group"
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="text-heading font-semibold text-base group-hover:text-primary transition-colors">
          {item.q}
        </span>
        <span className="flex-shrink-0">
          {open ? (
            <MinusCircle className="w-6 h-6 text-primary" aria-hidden="true" />
          ) : (
            <PlusCircle className="w-6 h-6 text-primary" aria-hidden="true" />
          )}
        </span>
      </button>
      {open && (
        <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-btn-${index}`} className="px-6 pb-5 pr-14">
          <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

/* -- Page -- */
export default function FAQ() {
  return (
    <div>
      {/* -- Hero + FAQ -- */}
      <section className="bg-white pb-20 md:pb-28 pt-24 md:pt-32" aria-labelledby="faq-heading">
        <div className="container-main max-w-3xl mx-auto">
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h1
              id="faq-heading"
              className="mt-5 text-heading"
              style={{ fontStyle: 'italic' }}
            >
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Find answers to common questions about IELTS Top and how it can help
              you prepare for your exam.
            </p>
          </div>

          <div className="mt-14 bg-bg-alt rounded-lg overflow-hidden">
            {faqs.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Still have questions?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Contact us <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* -- Bottom CTA -- */}
      <Section bg="bg-heading" aria-labelledby="faq-cta-heading">
        <div className="container-main text-center max-w-2xl mx-auto">
          <h2
            id="faq-cta-heading"
            className="text-white text-3xl md:text-4xl"
            style={{ fontStyle: 'italic' }}
          >
            Ready to improve your IELTS score?
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Start practicing with AI-powered feedback today.
          </p>
          <a
            href="https://app.ieltstop.com/signup"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary text-sm font-bold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </Section>
    </div>
  );
}
