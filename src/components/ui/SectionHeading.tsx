/**
 * SectionHeading
 *
 * Renders a section eyebrow label, title (h2), and description paragraph.
 * Used at the top of page sections for consistent hierarchy.
 */

interface SectionHeadingProps {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  id,
  label,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={[
        'flex flex-col',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label && (
        <span className="section-label mb-4">
          {label}
        </span>
      )}

      {title && (
        <h2 id={id} className="mb-4">{title}</h2>
      )}

      {description && (
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
