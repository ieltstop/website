import { Link } from 'react-router';
import type { ReactNode } from 'react';

interface ResourceCardProps {
  image: string;
  title: string;
  meta: ReactNode;
  link: string;
}

/**
 * ResourceCard — blog/sample card with image, metadata, title.
 */
export default function ResourceCard({ image, title, meta, link }: ResourceCardProps) {
  const isExternal = link.startsWith('http');
  const className = "group bg-white rounded-xl overflow-hidden border border-border hover:shadow-card-hover transition-all duration-300";
  const content = (
    <>
      <div className="aspect-[16/10] overflow-hidden bg-bg-beige">
        <img
          src={image}
          alt={`Essay sample: ${title}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-[12px] text-muted-foreground font-medium">
          {meta}
        </div>
        <h3 className="mt-3 text-[16px] font-bold text-heading leading-snug group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a href={link} className={className} aria-label={title}>
        {content}
      </a>
    );
  }

  return (
    <Link to={link} className={className} aria-label={title}>
      {content}
    </Link>
  );
}
