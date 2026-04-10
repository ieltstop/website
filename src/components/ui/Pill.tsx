import type { LucideIcon } from 'lucide-react';

interface PillProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  variant?: 'white' | 'primary' | 'dark';
}

/**
 * Pill — capsule card used in WhyChoose section.
 * Variants: 'white' (default), 'primary' (orange bg), 'dark' (heading bg)
 */
export default function Pill({ icon: Icon, title, description, variant = 'white' }: PillProps) {
  const styles: Record<string, { container: string; icon: string; title: string; desc: string }> = {
    white: {
      container: 'border border-gray-200 bg-white',
      icon: 'text-primary',
      title: 'text-heading',
      desc: 'text-body-alt',
    },
    primary: {
      container: 'bg-primary',
      icon: 'text-white',
      title: 'text-white',
      desc: 'text-white/90',
    },
    dark: {
      container: 'bg-heading',
      icon: 'text-primary',
      title: 'text-white',
      desc: 'text-white/70',
    },
  };

  const s = styles[variant] || styles.white;

  return (
    <div className={`flex items-center justify-between w-full min-h-[76px] rounded-full px-6 py-4 ${s.container}`}>
      <div className="flex items-center gap-3 flex-shrink-0">
        {Icon && <Icon className={`w-[34px] h-[34px] ${s.icon} flex-shrink-0`} aria-hidden="true" />}
        <p className={`font-bold text-[18px] leading-[22px] whitespace-nowrap ${s.title}`}>{title}</p>
      </div>
      <p className={`text-[15px] leading-[23px] text-left max-w-[55%] ${s.desc}`}>{description}</p>
    </div>
  );
}
