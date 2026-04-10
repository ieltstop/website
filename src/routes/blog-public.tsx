import { useState } from 'react';
import { Link } from 'react-router';
import Section from '../components/ui/Section';
import ScrollReveal from '../components/ui/ScrollReveal';
import { ArrowRight, CalendarDays, Newspaper } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: string;
  excerpt?: string;
  thumbnail?: string;
  image?: string;
  createdAt?: string;
}

export default function BlogPublic() {
  const [blogs] = useState<BlogPost[]>([]);
  const [loading] = useState(false);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div>
      {/* -- Hero -- */}
      <section className="bg-white pb-16 md:pb-20 pt-24 md:pt-32" aria-labelledby="blog-heading">
        <div className="container-main text-center max-w-2xl mx-auto">
          <span className="section-label">Blog</span>
          <h1
            id="blog-heading"
            className="mt-5 text-heading"
          >
            Blog &amp; Resources
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Expert insights and strategies to help you achieve your target IELTS band score.
          </p>
        </div>
      </section>

      {/* -- Blog Grid -- */}
      <Section bg="bg-bg-alt" aria-labelledby="blog-grid-heading">
        <div className="container-main">
          <h2 id="blog-grid-heading" className="sr-only">Articles</h2>
          {loading ? (
            <div className="flex justify-center py-16">
              <div className="h-8 w-8 animate-spin rounded-full border-3 border-primary border-t-transparent" aria-hidden="true" />
            </div>
          ) : blogs.length === 0 ? (
            <ScrollReveal>
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-lg border border-border bg-white flex items-center justify-center mx-auto mb-4">
                  <Newspaper className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">No articles yet</h3>
                <p className="text-muted-foreground">Check back soon for IELTS tips and strategies.</p>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, i) => (
                <ScrollReveal key={blog._id || i} delay={(i % 3) * 0.1}>
                  <article className="group relative h-full bg-white rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="aspect-video w-full overflow-hidden bg-bg-alt">
                      {blog.thumbnail || blog.image ? (
                        <img
                          src={blog.thumbnail || blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Newspaper className="w-10 h-10 text-border-medium" aria-hidden="true" />
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      {blog.createdAt && (
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
                          <CalendarDays className="w-4 h-4" aria-hidden="true" />
                          {formatDate(blog.createdAt)}
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-heading mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        <Link
                          to={`/blog/${blog._id}`}
                          className="after:absolute after:inset-0"
                        >
                          {blog.title}
                        </Link>
                      </h3>
                      {blog.excerpt && (
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{blog.excerpt}</p>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all" aria-hidden="true">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
