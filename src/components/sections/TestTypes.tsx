import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router';
import {
  GraduationCap,
  Shield,
  BookOpen,
  Briefcase,
  Mic,
  Globe,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

interface TestCard {
  icon: LucideIcon;
  title: string;
  description: string;
  exploreLabel: string;
  ctaLink: string;
  exploreLink: string;
}

const tabs = [
  { id: 'study', label: 'I need IELTS for Study' },
  { id: 'work', label: 'IELTS for Work' },
  { id: 'migration', label: 'IELTS for Migration' },
] as const;

const tabCards: Record<string, TestCard[]> = {
  study: [
    {
      icon: GraduationCap,
      title: 'IELTS Academic',
      description:
        'Preparing for university admissions or professional registration? Our AI-powered essay checker and report analyser give you instant band scores and detailed feedback on your Academic Writing Task 1 and Task 2 responses, so you know exactly where to improve.',
      exploreLabel: 'Explore Academic Prep',
      ctaLink: '/essays',
      exploreLink: '/samples',
    },
    {
      icon: Shield,
      title: 'IELTS for UKVI',
      description:
        'Need a UKVI-approved score for your UK study visa? Practice with our speaking assessment tool and get real-time feedback on pronunciation and fluency. Review high-scoring sample answers tailored to UKVI exam patterns to build confidence before test day.',
      exploreLabel: 'Explore UKVI Prep',
      ctaLink: '/speaking',
      exploreLink: '/samples',
    },
    {
      icon: BookOpen,
      title: 'IELTS General Training',
      description:
        'Planning to study abroad with a General Training score? Use our letter checker to perfect your Task 1 responses and our text enhancer to upgrade your vocabulary and grammar to Band 7+ level. Get detailed examiner-style commentary on every submission.',
      exploreLabel: 'Explore General Training Prep',
      ctaLink: '/letters',
      exploreLink: '/samples',
    },
  ],
  work: [
    {
      icon: Briefcase,
      title: 'IELTS General Training',
      description:
        'Employers worldwide require strong IELTS General Training scores. Sharpen your workplace English with our AI letter checker for Task 1 and essay checker for Task 2. Get instant band scores and actionable feedback to reach your target score faster.',
      exploreLabel: 'Explore General Training Prep',
      ctaLink: '/letters',
      exploreLink: '/samples',
    },
    {
      icon: Shield,
      title: 'IELTS for UKVI',
      description:
        'Applying for a UK work visa? Our preparation tools are designed to help you meet UKVI score requirements. Practice speaking responses, review sample answers, and get AI-powered feedback on your writing to ensure you hit the band score you need.',
      exploreLabel: 'Explore UKVI Prep',
      ctaLink: '/speaking',
      exploreLink: '/samples',
    },
    {
      icon: Mic,
      title: 'IELTS Life Skills',
      description:
        'Life Skills tests your speaking and listening at CEFR A1 or B1 level. Use our speaking assessment tool to practice real exam scenarios, get instant pronunciation feedback, and build the confidence you need to pass your UK visa interview.',
      exploreLabel: 'Explore Life Skills Prep',
      ctaLink: '/speaking',
      exploreLink: '/samples',
    },
  ],
  migration: [
    {
      icon: Globe,
      title: 'IELTS General Training',
      description:
        'Immigration programs in Canada, Australia, and New Zealand require strong General Training scores. Our AI tools help you practice letters, essays, and speaking responses with instant feedback so you can meet your immigration score requirements.',
      exploreLabel: 'Explore General Training Prep',
      ctaLink: '/letters',
      exploreLink: '/samples',
    },
    {
      icon: Shield,
      title: 'IELTS for UKVI',
      description:
        'Moving to the UK for settlement or citizenship? Our UKVI-focused preparation covers writing and speaking with AI-powered scoring that mirrors real exam criteria. Review Band 7+ sample answers and track your progress towards your target score.',
      exploreLabel: 'Explore UKVI Prep',
      ctaLink: '/essays',
      exploreLink: '/samples',
    },
    {
      icon: GraduationCap,
      title: 'IELTS Academic',
      description:
        'Some skilled worker immigration programs accept Academic scores. Prepare with our report checker for Task 1 data descriptions and essay checker for Task 2 arguments. Get detailed feedback on structure, coherence, and vocabulary for every response.',
      exploreLabel: 'Explore Academic Prep',
      ctaLink: '/reports',
      exploreLink: '/samples',
    },
  ],
};

export default function TestTypes() {
  const [activeTab, setActiveTab] = useState<'study' | 'work' | 'migration'>('study');
  const cards = tabCards[activeTab];
  const tablistRef = useRef<HTMLDivElement>(null);

  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const tabIds = tabs.map((t) => t.id);
      const currentIndex = tabIds.indexOf(activeTab);
      let nextIndex = currentIndex;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (currentIndex + 1) % tabIds.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (currentIndex - 1 + tabIds.length) % tabIds.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = tabIds.length - 1;
      } else {
        return;
      }

      setActiveTab(tabIds[nextIndex]);
      const nextButton = tablistRef.current?.querySelector<HTMLButtonElement>(
        `#tab-${tabIds[nextIndex]}`
      );
      nextButton?.focus();
    },
    [activeTab]
  );

  return (
    <section className="section-padding bg-white" aria-labelledby="test-types-heading">
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="section-label">Test Types</span>
            <h2 id="test-types-heading" className="mt-5 italic">
              Which IELTS test is right for you?
            </h2>

            {/* Tab buttons */}
            <div
              ref={tablistRef}
              className="mt-10 inline-flex gap-0 border-b border-border"
              role="tablist"
              aria-label="Select IELTS purpose"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={activeTab === tab.id ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={handleTabKeyDown}
                  className={`px-6 pb-3 text-[15px] font-semibold transition-colors duration-200 border-b-2 -mb-px focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${
                    activeTab === tab.id
                      ? 'text-primary border-primary'
                      : 'text-body border-transparent hover:text-heading'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tab panel */}
        <div
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          tabIndex={0}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={`${activeTab}-${card.title}`} delay={i * 0.1} className="h-full">
                  <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col p-7">
                    <div
                      className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-5"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-[18px] font-bold text-heading">{card.title}</h3>
                    <p className="mt-3 text-[14px] text-body leading-[1.7] flex-1">
                      {card.description}
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <Link
                        to={card.ctaLink}
                        className="flex items-center justify-center h-11 w-full bg-primary text-white text-[14px] font-bold rounded-lg hover:bg-primary-hover transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                      >
                        Start Preparing
                      </Link>
                      <Link
                        to={card.exploreLink}
                        className="flex items-center justify-center h-11 w-full border-2 border-border text-heading text-[14px] font-bold rounded-lg hover:border-heading transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                      >
                        {card.exploreLabel}
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
