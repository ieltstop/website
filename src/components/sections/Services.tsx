import {
  Pencil,
  Mail,
  Mic,
  FileText,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';
import ScrollReveal from '../ui/ScrollReveal';

const services = [
  { icon: Pencil, title: 'Essay Checker', description: 'Get your IELTS Task 2 essays evaluated instantly with detailed feedback and band scores.', cta: 'Learn More', link: '/services/essay-checker' },
  { icon: Mail, title: 'Letter Checker', description: 'Submit your IELTS General Training Task 1 letters for detailed analysis and scoring.', cta: 'Learn More', link: '/services/letter-checker' },
  { icon: FileText, title: 'Report Checker', description: 'Academic Task 1 analysis with feedback on data description, structure, and accuracy.', cta: 'Learn More', link: '/services/report-checker' },
  { icon: Mic, title: 'Speaking Assessment', description: 'Record your speaking responses and receive instant pronunciation and fluency analysis.', cta: 'Learn More', link: '/services/speaking-assessment' },
  { icon: Sparkles, title: 'Text Enhancer', description: 'Upgrade your writing to Band 7+ with AI-powered vocabulary and grammar suggestions.', cta: 'Learn More', link: '/services/text-enhancer' },
  { icon: BookOpen, title: 'Sample Answers', description: 'Study high-scoring Band 7, 8, and 9 examples with detailed examiner commentary.', cta: 'Learn More', link: '/services/sample-answers' },
];

export default function Services() {
  return (
    <section className="section-padding bg-bg-alt" aria-labelledby="services-heading">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader
            id="services-heading"
            label="Our Services"
            title={<>Complete IELTS<br />preparation tools</>}
            description="We provide essential AI tools designed for students who want accurate feedback, clear scoring, and reliable preparation resources."
            ctaText="Get started"
            ctaLink="https://app.ieltstop.com/signup"
            ctaVariant="primary"
          />
        </ScrollReveal>

        {/* 3x2 grid */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border" role="list">
            {services.map((s) => (
              <div key={s.title} role="listitem">
                <ServiceCard
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  ctaText={s.cta}
                  link={s.link}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
