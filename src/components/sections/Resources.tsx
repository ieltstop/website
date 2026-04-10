import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';

interface ResourceItem {
  image: string;
  title: string;
  description: string;
  cta: string;
  link: string;
}

const resources: ResourceItem[] = [
  {
    image:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop',
    title: 'Sample Essays & Answers',
    description:
      'Study high-scoring Band 7, 8, and 9 examples with detailed examiner commentary.',
    cta: 'View Samples',
    link: '/samples',
  },
  {
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    title: 'Latest IELTS Topics',
    description:
      'Stay updated with recent exam topics and practice with real IELTS questions.',
    cta: 'Browse Topics',
    link: '/topics',
  },
  {
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
    title: 'Test Day Guide',
    description:
      'Everything you need to know about what to bring, expect, and do on test day.',
    cta: 'Read Guide',
    link: '/test-day-guide',
  },
];

export default function Resources() {
  return (
    <section className="section-padding bg-white" aria-labelledby="ielts-resources-heading">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader
            id="ielts-resources-heading"
            label="IELTS Resources"
            title={<>Helpful resources for<br />your IELTS journey</>}
            description="Curated guides, sample answers, and up-to-date topics to help you walk into your IELTS test with confidence."
          />
        </ScrollReveal>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
          role="list"
          aria-label="IELTS resources"
        >
          {resources.map((resource, i) => (
            <ScrollReveal key={resource.title} delay={i * 0.1}>
              <div
                role="listitem"
                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
              >
                <div className="aspect-video overflow-hidden bg-bg-beige">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width="400"
                    height="250"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[18px] font-bold text-heading leading-snug group-hover:text-primary transition-colors duration-200">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-body leading-[1.7] flex-1">
                    {resource.description}
                  </p>
                  {resource.link.startsWith('/samples') || resource.link.startsWith('/topics') ? (
                    <a
                      href={`https://app.ieltstop.com${resource.link}`}
                      className="mt-5 inline-flex items-center gap-2 h-10 px-5 bg-primary text-white text-[13px] font-bold rounded-md hover:bg-primary-hover transition-colors shadow-[0_4px_12px_rgba(232,119,58,0.25)] self-start"
                      aria-label={`${resource.cta} — ${resource.title}`}
                    >
                      {resource.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={resource.link}
                      className="mt-5 inline-flex items-center gap-2 h-10 px-5 bg-primary text-white text-[13px] font-bold rounded-md hover:bg-primary-hover transition-colors shadow-[0_4px_12px_rgba(232,119,58,0.25)] self-start"
                      aria-label={`${resource.cta} — ${resource.title}`}
                    >
                      {resource.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
