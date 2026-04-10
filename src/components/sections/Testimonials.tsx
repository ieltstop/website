import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../ui/TestimonialCard';
import ScrollReveal from '../ui/ScrollReveal';

const testimonials = [
  { title: 'Clear and reliable', quote: 'IELTS Top helped me improve from Band 6 to 7.5 in just 3 weeks. The feedback is incredibly detailed.', name: 'Sarah Kim', role: 'Student', company: 'Band 7.5 Achiever', rating: 5 },
  { title: 'Stress-free scoring', quote: 'The instant feedback on my essays is better than any tutor. I could practice multiple times a day.', name: 'Ahmed Rahman', role: 'Student', company: 'Band 8.0 Achiever', rating: 5 },
  { title: 'Trusted partner', quote: 'The AI scores were within 0.5 bands of my actual exam result every time. Highly reliable tool.', name: 'Priya Patel', role: 'Professional', company: 'Band 8.0 Achiever', rating: 5 },
  { title: 'Better visibility', quote: 'The speaking analysis helped me identify pronunciation issues I never knew I had. My score went up.', name: 'Maria Lopez', role: 'Student', company: 'Band 7.0 Achiever', rating: 5 },
  { title: 'Consistent support', quote: 'I used the letter checker for my General Training exam. The tone suggestions were spot on.', name: 'David Chen', role: 'Professional', company: 'Band 7.5 Achiever', rating: 5 },
  { title: 'Peace of mind', quote: 'Affordable, fast, and reliable. I practiced daily for a month and got the exact score I needed.', name: 'James Okafor', role: 'Student', company: 'Band 7.0 Achiever', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-heading">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader
            id="testimonials-heading"
            label="Testimonials"
            title={<>Real experiences<br />from real students</>}
            description="Direct feedback reflects our focus on accuracy, helping students feel confident about their scores and preparation journey."
            ctaText="See all reviews"
            ctaLink="https://app.ieltstop.com/samples"
            ctaVariant="outline"
          />
        </ScrollReveal>

        {/* 3x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Student testimonials">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div role="listitem">
                <TestimonialCard
                  title={t.title}
                  quote={t.quote}
                  name={t.name}
                  role={t.role}
                  company={t.company}
                  rating={t.rating}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
