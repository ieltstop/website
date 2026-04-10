import SectionHeader from '../ui/SectionHeader';
import ResourceCard from '../ui/ResourceCard';
import ScrollReveal from '../ui/ScrollReveal';

const samples = [
  { task: 'Task 2', title: 'Modern Technology and Traditional Skills', image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=320&fit=crop', date: 'Band 8.0', comments: '3 Comments' },
  { task: 'Task 2', title: 'Environmental Problems & Individual Responsibility', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=320&fit=crop', date: 'Band 8.0', comments: '5 Comments' },
  { task: 'Task 1', title: 'How Technology Helps Students Learn Faster', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=320&fit=crop', date: 'Band 8.0', comments: '2 Comments' },
];

export default function SampleEssays() {
  return (
    <section className="section-padding bg-bg-alt" aria-labelledby="resources-heading">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader
            id="resources-heading"
            label="Resources"
            title={<>Explore resources for<br />improving your score</>}
            description="Expert-written content focused on IELTS essays, tips, updates, and practice best practices, helping students understand key topics."
            ctaText="Visit blog"
            ctaLink="/blog"
            ctaVariant="outline-dark"
          />
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7" role="list" aria-label="Sample essays and resources">
          {samples.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div role="listitem">
                <ResourceCard
                  image={s.image}
                  title={s.title}
                  meta={
                    <>
                      <span>{s.date}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{s.task}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{s.comments}</span>
                    </>
                  }
                  link="https://app.ieltstop.com/samples"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
