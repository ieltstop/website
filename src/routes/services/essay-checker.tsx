import { ArrowRight, Pencil, Upload, Zap, BarChart3, CheckCircle, Target, MessageSquare, Lightbulb } from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';

export default function EssayCheckerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-heading text-white section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Pencil className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-white text-[36px] md:text-[48px] font-bold leading-tight">
                AI-Powered Essay Checker
              </h1>
              <p className="mt-4 text-[18px] text-[#B0B0C0] leading-relaxed max-w-2xl mx-auto">
                Get instant, examiner-level feedback on your IELTS Task 1 and Task 2 essays. Know your band score before you walk into the exam.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://app.ieltstop.com/essays"
                  className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-colors"
                >
                  Check Your Essay <ArrowRight className="w-4 h-4" />
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
              <h2 className="mt-5">Three simple steps to better essays</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: Upload, title: 'Paste Your Essay', description: 'Copy and paste your IELTS Task 1 or Task 2 essay into the checker. No formatting needed.' },
              { step: '02', icon: Zap, title: 'Get Instant Analysis', description: 'Our AI evaluates your essay against official IELTS criteria in seconds, not days.' },
              { step: '03', icon: BarChart3, title: 'Review Your Score', description: 'Receive a detailed band score breakdown with specific, actionable feedback to improve.' },
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
              <h2 className="mt-5">Everything you need to improve your writing</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Band Score', description: 'Accurate overall band score prediction based on official IELTS marking criteria.' },
              { icon: CheckCircle, title: 'Criteria Breakdown', description: 'Individual scores for Task Achievement, Coherence, Vocabulary, and Grammar.' },
              { icon: MessageSquare, title: 'Detailed Comments', description: 'Line-by-line feedback highlighting strengths and areas to improve.' },
              { icon: Lightbulb, title: 'Improvement Tips', description: 'Specific suggestions to move up to the next band level with examples.' },
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
              <p className="mt-4 text-[15px] text-body max-w-2xl mx-auto">Your essay is scored on the same criteria used by real IELTS examiners, giving you the most accurate prediction of your actual test score.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Task Achievement', score: 'Band 1–9', description: 'How well you address the task, develop ideas, and support your arguments with relevant examples.' },
              { label: 'Coherence & Cohesion', score: 'Band 1–9', description: 'How logically your ideas are organized, and how effectively you use linking words and paragraphing.' },
              { label: 'Lexical Resource', score: 'Band 1–9', description: 'Your range and accuracy of vocabulary, including collocations, word choice, and spelling.' },
              { label: 'Grammatical Range', score: 'Band 1–9', description: 'Your variety and accuracy of sentence structures, tenses, and grammatical control.' },
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
                <span className="text-white text-[14px] font-bold">Essay Feedback Report</span>
                <span className="text-primary text-[14px] font-bold">Band 6.5</span>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Task Achievement', score: '7.0' },
                    { label: 'Coherence & Cohesion', score: '6.5' },
                    { label: 'Lexical Resource', score: '6.0' },
                    { label: 'Grammatical Range', score: '6.5' },
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
                      Strong thesis statement with a clear position throughout the essay.
                    </li>
                    <li className="flex gap-2 text-[13px] text-body leading-[1.7]">
                      <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Expand your vocabulary by using more academic collocations instead of repeating common words.
                    </li>
                    <li className="flex gap-2 text-[13px] text-body leading-[1.7]">
                      <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Use a wider variety of complex sentence structures to push your grammar score higher.
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
            <h2 className="text-white text-[28px] md:text-[36px] font-bold">Ready to improve your essay score?</h2>
            <p className="mt-4 text-[16px] text-[#B0B0C0] max-w-xl mx-auto">
              Join thousands of students who have improved their IELTS writing with our AI-powered feedback.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://app.ieltstop.com/essays"
                className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-white text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-colors"
              >
                Check Your Essay Now <ArrowRight className="w-4 h-4" />
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
