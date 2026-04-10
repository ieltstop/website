import { Star } from 'lucide-react';

interface TestimonialCardProps {
  title: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating?: number;
}

/**
 * TestimonialCard — quote card with stars, author info.
 */
export default function TestimonialCard({ title, quote, name, role, company, rating = 5 }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-xl border border-border p-7 md:p-8 hover:shadow-card-hover transition-shadow duration-200">
      <h3 className="text-[16px] font-bold text-heading">{title}</h3>
      <div className="flex gap-0.5 mt-3" role="img" aria-label={`${rating} out of 5 stars`}>
        {[...Array(rating)].map((_, j) => (
          <Star key={j} className="w-[18px] h-[18px] text-primary fill-primary" />
        ))}
      </div>
      <blockquote className="mt-4">
        <p className="text-[14px] text-body leading-[1.75]">&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center text-heading text-sm font-bold" aria-hidden="true">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-[13px] font-bold text-heading">{name}</p>
          <p className="text-[12px] text-muted-foreground">{role} &middot; {company}</p>
        </div>
      </div>
    </article>
  );
}
