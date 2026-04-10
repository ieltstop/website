import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText?: string;
  link?: string;
}

/**
 * ServiceCard — grid card for services section.
 * Icon scales + turns orange on hover, CTA has arrow swap animation.
 */
export default function ServiceCard({ icon: Icon, title, description, ctaText, link }: ServiceCardProps) {
  const isExternal = link?.startsWith('http');
  const linkClass = "group/cta mt-5 inline-flex items-center text-[13px] font-bold text-primary hover:text-primary-hover transition-colors duration-200 overflow-hidden";
  const linkContent = (
    <>
      <span className="w-0 overflow-hidden group-hover/cta:w-5 transition-all duration-300">
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
      <span>{ctaText}</span>
      <span className="w-5 overflow-hidden group-hover/cta:w-0 transition-all duration-300 flex justify-end ml-1">
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </>
  );

  return (
    <div className="group/card bg-white p-8 md:p-10 hover:bg-bg-alt transition-colors duration-200">
      <div className="w-[56px] h-[56px] rounded-xl bg-bg-alt group-hover/card:bg-primary group-hover/card:scale-105 flex items-center justify-center mb-6 transition-all duration-300" aria-hidden="true">
        <Icon className="w-7 h-7 text-heading group-hover/card:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-[18px] font-bold text-heading">{title}</h3>
      <p className="mt-3 text-[14px] text-body leading-[1.7]">{description}</p>
      {ctaText && link && (
        isExternal ? (
          <a href={link} className={linkClass} aria-label={`${ctaText} — ${title}`}>
            {linkContent}
          </a>
        ) : (
          <Link to={link} className={linkClass} aria-label={`${ctaText} — ${title}`}>
            {linkContent}
          </Link>
        )
      )}
    </div>
  );
}
