import { ArrowRight, Mail, Upload, Zap, BarChart3, CheckCircle, Target, MessageSquare, Lightbulb, Users, FileCheck } from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

export default function LetterCheckerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-heading text-white section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-white text-[36px] md:text-[48px] font-bold leading-tight">
                AI-Powered Letter Checker
              </h1>
              <p className="mt-4 text-[18px] text-[#B0B0C0] leading-relaxed max-w-2xl mx-auto">
                Get instant feedback on your IELTS General Training Task 1 letters. Perfect your formal, informal, and semi-formal writing.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://app.ieltstop.com/letters"
                  className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-colors"
                >
                  Check Your Letter <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://app.ieltstop.com/signup"
                  className="inline-flex items-center gap-2 h-12 px-8 border-2 border-white/20 text-white text-[15px] font-bold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Sign Up Free
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">How It Works</span>
              <h2 className="mt-5">Three simple steps to better letters</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: Upload, title: 'Paste Your Letter', description: 'Copy and paste your IELTS General Training Task 1 letter. Formal, semi-formal, or informal — we handle all types.' },
              { step: '02', icon: Zap, title: 'AI Analyzes Instantly', description: 'Our AI checks your tone, structure, and language against official IELTS standards in seconds.' },
              { step: '03', icon: BarChart3, title: 'Get Scored Feedback', description: 'Receive your band score with a detailed breakdown and specific tips to improve your letter writing.' },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-[48px] font-bold text-primary/15 leading-none">{item.step}</div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mt-4 mb-5">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-[18px] font-bold text-heading">{item.title}</h3>
                  <p className="mt-3 text-[14px] text-body leading-[1.7]">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-bg-alt">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Features</span>
              <h2 className="mt-5">Everything you need to master letter writing</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Band Score', description: 'Accurate band score prediction calibrated to official IELTS General Training marking standards.' },
              { icon: Users, title: 'Tone Analysis', description: 'Detects whether your tone matches the required formality level — formal, semi-formal, or informal.' },
              { icon: FileCheck, title: 'Format Check', description: 'Verifies your letter structure including greeting, opening, body paragraphs, and sign-off.' },
              { icon: MessageSquare, title: 'Vocabulary Suggestions', description: 'Recommends more appropriate words and phrases to match the register your letter requires.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-border p-6 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-[16px] font-bold text-heading">{item.title}</h3>
                  <p className="mt-2 text-[14px] text-body leading-[1.7]">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring Criteria */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Scoring</span>
              <h2 className="mt-5">Evaluated on all 4 IELTS criteria</h2>
              <p className="mt-4 text-[15px] text-body max-w-2xl mx-auto">Your letter is assessed against the same criteria IELTS examiners use for General Training Task 1, ensuring an accurate prediction of your real score.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Task Achievement', score: 'Band 1–9', description: 'How well you cover all bullet points, maintain the correct tone, and fulfill the purpose of the letter.' },
              { label: 'Coherence & Cohesion', score: 'Band 1–9', description: 'How clearly your letter flows, with logical paragraphing and appropriate linking between ideas.' },
              { label: 'Lexical Resource', score: 'Band 1–9', description: 'Your range of vocabulary and ability to use register-appropriate language for formal or informal contexts.' },
              { label: 'Grammatical Range', score: 'Band 1–9', description: 'Your control of grammar, sentence variety, and accuracy with tenses, articles, and punctuation.' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="flex gap-4 p-5 bg-bg-alt rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white text-[14px] font-bold shrink-0">
                    {item.score.split('–')[1]}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-heading">{item.label}</h3>
                    <p className="mt-1 text-[13px] text-body leading-[1.7]">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Feedback Preview */}
      <section className="section-padding bg-bg-alt">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Preview</span>
              <h2 className="mt-5">See what your feedback looks like</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-heading flex items-center justify-between">
                <span className="text-white text-[14px] font-bold">Letter Feedback Report</span>
                <span className="text-primary text-[14px] font-bold">Band 7.0</span>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Task Achievement', score: '7.0' },
                    { label: 'Coherence & Cohesion', score: '7.0' },
                    { label: 'Lexical Resource', score: '7.0' },
                    { label: 'Grammatical Range', score: '7.0' },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center justify-between p-3 bg-bg-alt rounded-lg">
                      <span className="text-[13px] text-body">{c.label}</span>
                      <span className="text-[14px] font-bold text-heading">{c.score}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-5">
                  <h4 className="text-[14px] font-bold text-heading mb-2">Key Feedback</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-[13px] text-body leading-[1.7]">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      All three bullet points are fully addressed with relevant detail.
                    </li>
                    <li className="flex gap-2 text-[13px] text-body leading-[1.7]">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      Tone is consistently semi-formal and appropriate for the task.
                    </li>
                    <li className="flex gap-2 text-[13px] text-body leading-[1.7]">
                      <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Consider varying your opening phrases — "I am writing to" appears twice. Try alternatives like "I would like to bring to your attention."
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-heading">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-white text-[28px] md:text-[36px] font-bold">Ready to perfect your letter writing?</h2>
            <p className="mt-4 text-[16px] text-[#B0B0C0] max-w-xl mx-auto">
              Get instant, examiner-level feedback on your IELTS letters and boost your General Training score.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://app.ieltstop.com/letters"
                className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-colors"
              >
                Check Your Letter Now <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://app.ieltstop.com/signup"
                className="inline-flex items-center gap-2 h-12 px-8 border-2 border-white/20 text-white text-[15px] font-bold rounded-lg hover:bg-white/10 transition-colors"
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
