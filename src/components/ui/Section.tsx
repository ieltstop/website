import type { ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  bg?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Section
 *
 * Wraps content in a <section> with consistent vertical padding
 * (64px mobile, 100px desktop) via the .section-padding utility class.
 */
export default function Section({
  id,
  bg = '',
  children,
  className = '',
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        'section-padding',
        bg,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </section>
  );
}
