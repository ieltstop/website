import { useState } from 'react';

import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Circle,
  Clock,
  AlertTriangle,
  Lightbulb,
  ClipboardList,
  CalendarClock,
  LayoutList,
  ShieldAlert,
  Trophy,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

/* ─── Checklist data ────────────────────────────────────────────────────── */

interface ChecklistItem {
  label: string;
  required: boolean;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { label: 'Valid passport or national ID card', required: true },
  { label: 'Confirmation email / test registration printout', required: true },
  { label: 'Wooden pencils (HB) — at least 2', required: true },
  { label: 'Eraser (no cover/wrapper)', required: true },
  { label: 'Pencil sharpener (no cover)', required: true },
  { label: 'Clear water bottle (label removed)', required: false },
  { label: 'Prescription glasses (if needed)', required: false },
  { label: 'Analogue wristwatch (no smartwatches)', required: false },
];

/* ─── Accordion sections ────────────────────────────────────────────────── */

interface GuideSection {
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

const SECTIONS: GuideSection[] = [
  {
    icon: ClipboardList,
    title: 'What to Bring',
    content: <WhatToBring />,
  },
  {
    icon: CalendarClock,
    title: 'Test Day Timeline',
    content: (
      <div className="space-y-4">
        <TimelineItem time="7:30 AM" title="Arrive at the test centre" description="Aim to arrive 30 minutes before your reporting time. Late arrivals may not be allowed to sit the test." />
        <TimelineItem time="8:00 AM" title="Registration & ID check" description="Present your ID at the front desk. You will be photographed and fingerprinted. Your belongings will be stored securely." />
        <TimelineItem time="8:30 AM" title="Listening (30 min + 10 min transfer)" description="You will hear four recordings and answer 40 questions. You get 10 extra minutes to transfer answers to the answer sheet." />
        <TimelineItem time="9:15 AM" title="Reading (60 min)" description="Three reading passages with 40 questions total. Academic and General Training have different texts." />
        <TimelineItem time="10:15 AM" title="Writing (60 min)" description="Two tasks: Task 1 (150 words minimum) and Task 2 (250 words minimum). Task 2 carries twice the weight." />
        <TimelineItem time="11:15 AM" title="Speaking (11-14 min)" description="Usually scheduled in the afternoon or on a different day. Three parts: introduction, long turn, and discussion." />
      </div>
    ),
  },
  {
    icon: LayoutList,
    title: 'Test Format Overview',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormatCard title="Listening" duration="30 min + 10 min" questions={40} description="4 recordings of native English speakers. Includes conversations, monologues, and academic discussions." />
        <FormatCard title="Reading" duration="60 min" questions={40} description="3 long passages. Academic uses journals and textbooks; General uses everyday materials." />
        <FormatCard title="Writing" duration="60 min" questions={2} description="Task 1: describe data/write a letter. Task 2: write an essay. Spend ~20 min on Task 1, ~40 min on Task 2." />
        <FormatCard title="Speaking" duration="11-14 min" questions={3} description="Part 1: general questions. Part 2: describe a topic (2 min). Part 3: deeper discussion on the topic." />
      </div>
    ),
  },
  {
    icon: ShieldAlert,
    title: 'Common Mistakes to Avoid',
    content: (
      <div className="space-y-3">
        {[
          'Not managing time properly — many candidates run out of time on Reading and Writing.',
          'Skipping the 10-minute transfer time in Listening to review answers instead of transferring them.',
          'Writing fewer than the required word count for Writing tasks.',
          'Not reading the question carefully — misunderstanding what is being asked costs marks.',
          'Using a pen instead of a pencil on the answer sheet.',
          'Memorizing scripted answers for Speaking — examiners can detect this easily.',
          'Panicking when you hear an unfamiliar accent in Listening — stay focused on keywords.',
          'Leaving blank answers — there is no penalty for guessing.',
        ].map((mistake, idx) => (
          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-red-50/60 border border-red-100">
            <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
            <p className="text-sm text-heading leading-relaxed">{mistake}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Trophy,
    title: 'Tips for Success',
    content: (
      <div className="space-y-3">
        {[
          { tip: 'Practice under timed conditions', detail: 'Simulate exam pressure at home to build time management skills.' },
          { tip: 'Skim and scan for Reading', detail: 'Do not read every word. Identify keywords in the question, then locate them in the passage.' },
          { tip: 'Plan your essays', detail: 'Spend 3-5 minutes outlining before writing. A structured essay scores higher on Coherence & Cohesion.' },
          { tip: 'Speak naturally', detail: 'The examiner wants to hear natural English, not memorized phrases. Relax and treat it like a conversation.' },
          { tip: 'Review your weak areas', detail: 'Use AI feedback tools to identify patterns in your mistakes and target specific criteria.' },
          { tip: 'Get a good night\'s sleep', detail: 'Concentration is critical. Being well-rested will help you perform your best across all four modules.' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
            <Lightbulb className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-heading">{item.tip}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

/* ─── Sub-components ────────────────────────────────────────────────────── */

function WhatToBring() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggle = (idx: number) => {
    setChecked((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {checkedCount} of {CHECKLIST_ITEMS.length} items checked
        </p>
        <div className="w-32 h-2 rounded-full bg-border overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${(checkedCount / CHECKLIST_ITEMS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-1">
        {CHECKLIST_ITEMS.map((item, idx) => (
          <button
            key={idx}
            type="button"
            role="checkbox"
            aria-checked={!!checked[idx]}
            onClick={() => toggle(idx)}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 cursor-pointer
              ${checked[idx] ? 'bg-primary/5' : 'hover:bg-bg-alt'}
            `}
          >
            {checked[idx] ? (
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-border shrink-0" />
            )}
            <span
              className={`text-sm ${
                checked[idx] ? 'text-muted-foreground line-through' : 'text-heading'
              }`}
            >
              {item.label}
            </span>
            {item.required && (
              <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                Required
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ time, title, description }: { time: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <Clock className="w-4 h-4 text-primary" />
        </div>
        <div className="w-px flex-1 bg-border mt-2" />
      </div>
      <div className="pb-6">
        <span className="text-xs font-bold text-primary">{time}</span>
        <h4 className="text-sm font-semibold text-heading mt-0.5">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FormatCard({ title, duration, questions, description }: { title: string; duration: string; questions: number; description: string }) {
  return (
    <div className="bg-bg-alt rounded-lg border border-border p-5">
      <h4 className="text-sm font-bold text-heading">{title}</h4>
      <div className="flex items-center gap-3 mt-2">
        <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
          {duration}
        </span>
        <span className="text-xs text-muted-foreground">
          {questions} {questions === 2 ? 'tasks' : questions === 3 ? 'parts' : 'questions'}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{description}</p>
    </div>
  );
}

/* ─── Accordion item ────────────────────────────────────────────────────── */

function AccordionItem({ section, defaultOpen = false, index }: { section: GuideSection; defaultOpen?: boolean; index: number }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-xl border transition-all duration-300 ${open ? 'border-primary/20 shadow-sm bg-white' : 'border-border bg-white hover:border-primary/10'}`}>
      <button
        type="button"
        id={`guide-btn-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-6 text-left cursor-pointer group"
        aria-expanded={open}
        aria-controls={`guide-panel-${index}`}
      >
        <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${open ? 'bg-primary' : 'bg-primary/10 group-hover:bg-primary/20'}`}>
          <section.icon className={`w-5 h-5 transition-colors duration-300 ${open ? 'text-white' : 'text-primary'}`} />
        </div>
        <span className="flex-1 text-[16px] font-bold text-heading">{section.title}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div id={`guide-panel-${index}`} role="region" aria-labelledby={`guide-btn-${index}`} className="px-6 pb-6 pt-0">
          <div className="border-t border-border pt-5">{section.content}</div>
        </div>
      )}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function TestDayGuidePage() {
  return (
    <div className="bg-bg-alt min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="container-main pt-16 md:pt-20 pb-16 md:pb-20 text-center">
          <ScrollReveal>
            <span className="section-label">Test Preparation</span>
            <h1 className="mt-4 text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] font-heading font-extrabold italic text-heading">
              Your Complete IELTS Test Day Guide
            </h1>
            <p className="mt-4 text-muted-foreground text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
              Everything you need to know before, during, and after your IELTS exam. Walk in confident and prepared.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Accordion sections */}
      <section className="py-16 md:py-24">
        <div className="container-main max-w-3xl mx-auto">
          <div className="space-y-4">
            {SECTIONS.map((section, idx) => (
              <ScrollReveal key={section.title} delay={idx * 0.05}>
                <AccordionItem section={section} defaultOpen={idx === 0} index={idx} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container-main max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-heading to-heading/90 p-10 md:p-14 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(232,119,58,0.15),transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-white text-[22px] md:text-[28px] font-heading font-extrabold italic leading-tight">
                  Ready to Practice?
                </h2>
                <p className="mt-3 text-white/70 text-[15px] max-w-md mx-auto">
                  Put your knowledge to the test. Get AI-powered feedback on your writing and boost your band score.
                </p>
                <a
                  href="https://app.ieltstop.com/essays"
                  className="group mt-6 inline-flex items-center justify-center gap-2 bg-primary text-white text-[14px] font-bold h-[48px] px-8 rounded-lg hover:bg-primary-hover transition-colors duration-200 shadow-lg shadow-primary/25"
                >
                  Try the Essay Checker
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
