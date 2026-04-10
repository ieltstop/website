import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  id?: string;
  label?: string;
  title?: ReactNode;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaVariant?: 'primary' | 'outline' | 'outline-dark';
}

/**
 * SectionHeader — split header row used in Services, Testimonials, Resources.
 * Left: label + italic h2. Right: description + CTA button.
 */
export default function SectionHeader({
  id,
  label,
  title,
  description,
  ctaText,
  ctaLink,
  ctaVariant = 'primary',
}: SectionHeaderProps) {
  const btnBase = 'flex-shrink-0 inline-flex items-center gap-2 h-11 px-6 text-[13px] font-bold rounded-md transition-colors';
  const btnStyles: Record<string, string> = {
    primary: `${btnBase} bg-primary text-white hover:bg-primary-hover`,
    outline: `${btnBase} border-2 border-primary text-primary hover:bg-primary hover:text-white`,
    'outline-dark': `${btnBase} border-2 border-heading text-heading hover:bg-heading hover:text-white`,
  };

  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
      <div className="max-w-lg">
        {label && <span className="section-label">{label}</span>}
        {title && (
          <h2 id={id} className="mt-5" style={{ fontStyle: 'italic' }}>
            {title}
          </h2>
        )}
      </div>
      {(description || ctaText) && (
        <div className="flex items-start gap-6 max-w-md">
          {description && (
            <p className="text-[15px] text-body leading-[1.7]">{description}</p>
          )}
          {ctaText && ctaLink && (
            ctaLink.startsWith('http') ? (
              <a href={ctaLink} className={btnStyles[ctaVariant] || btnStyles.primary}>
                {ctaText} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <Link to={ctaLink} className={btnStyles[ctaVariant] || btnStyles.primary}>
                {ctaText} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
