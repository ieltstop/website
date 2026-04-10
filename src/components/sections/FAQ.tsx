import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

const faqs = [
  { q: 'What is IELTS?', a: 'IELTS stands for the International English Language Testing System — an English Language proficiency test. Globally, there are more than 4 million test takers a year, making IELTS the world\'s most popular English language proficiency test for higher education and global migration.' },
  { q: 'How does the automatic essay correction work?', a: 'Our system uses AI to analyze grammar, coherence, vocabulary, and structure to give precise IELTS-style feedback. It evaluates your work against official IELTS band descriptors.' },
  { q: 'How long does it take to get my essay corrected?', a: 'Usually within a few seconds. Our AI provides instant feedback so you can improve your writing in real time without waiting.' },
  { q: 'What type of feedback will I receive?', a: 'You\'ll get feedback on Task Achievement, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy — the four official IELTS scoring criteria.' },
  { q: 'Is my data secure?', a: 'Yes, all essays and user data are encrypted and handled with complete confidentiality. We never share your data with third parties.' },
  { q: 'What sets IELTS Top apart?', a: 'We combine AI precision with expert-designed evaluation criteria. Our system is trained on thousands of IELTS essays to deliver the most accurate band score predictions.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section bg="bg-white">
      <div className="container-main">
        <SectionHeading
          label="FAQ"
          title="Great questions, important answers."
          description="Everything you need to know about our AI-powered IELTS preparation platform."
        />

        <div className="mt-14 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? 'border-primary/30 bg-white shadow-card-hover'
                    : 'border-border bg-white shadow-card hover:shadow-card-hover'
                }`}
              >
                <button
                  id={`faq-btn-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 md:p-7 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? 'bg-primary text-white' : 'bg-primary-light text-primary'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[15px] md:text-[16px] font-semibold transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-heading'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-primary text-white rotate-180' : 'bg-bg-alt text-muted-foreground'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="px-6 md:px-7 pb-6 md:pb-7 pl-14 md:pl-[84px]">
                    <p className="text-[14px] md:text-[15px] text-body leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
