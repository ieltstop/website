import { ShieldCheck, TrendingUp, Award, RefreshCw } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

const items: TrustItem[] = [
  {
    icon: ShieldCheck,
    title: 'Trusted',
    description: 'AI trained on 500,000+ IELTS-scored essays',
    iconColor: 'text-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Accurate',
    description: 'Within 0.5 bands of real examiner scores',
    iconColor: 'text-red-500',
  },
  {
    icon: Award,
    title: 'Recognised',
    description: 'Used by 10,000+ students in 80+ countries',
    iconColor: 'text-red-500',
  },
  {
    icon: RefreshCw,
    title: 'Flexible',
    description: 'Essay, Letter, Report & Speaking — all covered',
    iconColor: 'text-primary',
  },
];

export default function QuickActions() {
  return (
    <section className="py-12 md:py-16 bg-white" aria-label="Why trust IELTS Top">
      <div className="container-main">
        <ScrollReveal>
          <div className="bg-[#FDF3EB] rounded-2xl px-10 py-12 md:px-14 md:py-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="min-w-0 flex-1">
                    <div
                      className="w-16 h-16 rounded-full bg-white border border-[#F0E0D4] flex items-center justify-center mb-6"
                      aria-hidden="true"
                    >
                      <Icon className={`w-7 h-7 ${item.iconColor}`} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-[20px] font-bold text-heading">{item.title}</h3>
                    <p className="mt-2 text-[14px] text-body leading-[1.7]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
