import { Link } from 'react-router';
import { ArrowRight, GraduationCap, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

/* ─── Country data ──────────────────────────────────────────────────────── */

interface Country {
  flag: string;
  name: string;
  band: string;
  description: string;
  to: string;
  color: string;
}

const COUNTRIES: Country[] = [
  {
    flag: '\ud83c\udde8\ud83c\udde6',
    name: 'Canada',
    band: '6.5 - 7.0',
    description:
      'One of the most popular destinations for IELTS test-takers. Most universities and immigration programs (Express Entry) require Band 6.5 or higher.',
    to: '#',
    color: 'from-red-500 to-red-600',
  },
  {
    flag: '\ud83c\uddec\ud83c\udde7',
    name: 'United Kingdom',
    band: '6.0 - 7.5',
    description:
      'The birthplace of IELTS. UK universities typically require Band 6.0-7.0, with top institutions like Oxford and Cambridge requiring 7.0+.',
    to: '#',
    color: 'from-blue-500 to-blue-600',
  },
  {
    flag: '\ud83c\udde6\ud83c\uddfa',
    name: 'Australia',
    band: '6.0 - 7.0',
    description:
      'A top choice for students and skilled workers. Universities require Band 6.0-6.5, while skilled migration visas require 6.0-7.0 depending on the stream.',
    to: '#',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    flag: '\ud83c\uddfa\ud83c\uddf8',
    name: 'United States',
    band: '6.5 - 7.0',
    description:
      'While TOEFL is more common, many US universities accept IELTS. Graduate programs typically require Band 6.5-7.0 for admission.',
    to: '#',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    flag: '\ud83c\uddf3\ud83c\uddff',
    name: 'New Zealand',
    band: '6.0 - 6.5',
    description:
      'Known for excellent quality of life and education. Most universities require Band 6.0, with postgraduate programs asking for 6.5.',
    to: '#',
    color: 'from-teal-500 to-teal-600',
  },
  {
    flag: '\ud83c\udde9\ud83c\uddea',
    name: 'Germany',
    band: '5.5 - 6.5',
    description:
      'Growing acceptance of IELTS for English-taught programs. Many public universities offer free tuition with IELTS Band 5.5-6.5 requirements.',
    to: '#',
    color: 'from-amber-500 to-amber-600',
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function StudyAbroadPage() {
  return (
    <div className="bg-bg-alt min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="container-main pt-16 md:pt-20 pb-16 md:pb-20 text-center">
          <ScrollReveal>
            <span className="section-label">Explore Opportunities</span>
            <h1 className="mt-4 text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] font-heading font-bold text-heading">
              Study Abroad with IELTS
            </h1>
            <p className="mt-4 text-muted-foreground text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
              Discover IELTS requirements for the world's top study destinations. Find the right country and start preparing today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Country Grid */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((country, idx) => (
              <ScrollReveal key={country.name} delay={idx * 0.08}>
                <Link
                  to={country.to}
                  className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full"
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${country.color}`} />

                  <div className="p-6">
                    {/* Flag and country name */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl leading-none" role="img" aria-label={`${country.name} flag`}>
                        {country.flag}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">
                          {country.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <GraduationCap className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-semibold text-primary">
                            Band {country.band}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {country.description}
                    </p>

                    {/* Learn More */}
                    <div className="mt-5 pt-4 border-t border-border/50 flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      <MapPin className="w-4 h-4" />
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-auto transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 md:py-16 bg-white border-y border-border">
        <div className="container-main">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '11,500+', label: 'Organizations worldwide' },
                { value: '140+', label: 'Countries accepting IELTS' },
                { value: '3.5M+', label: 'Tests taken yearly' },
                { value: '48hrs', label: 'Fastest result delivery' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[28px] md:text-[34px] font-heading font-extrabold text-heading">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-heading to-heading/90 p-10 md:p-16 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,119,58,0.2),transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-white text-[24px] md:text-[32px] font-heading font-bold leading-tight">
                  Start Preparing for Your Dream Destination
                </h2>
                <p className="mt-3 text-white/70 text-[15px] max-w-lg mx-auto">
                  Get instant AI feedback on your writing and speaking. Achieve the band score you need to study abroad.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://app.ieltstop.com/signup"
                    className="group inline-flex items-center justify-center gap-2 bg-primary text-white text-[14px] font-bold h-[48px] px-8 rounded-lg hover:bg-primary-hover transition-colors duration-200 shadow-lg shadow-primary/25"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <Link
                    to="/band-calculator"
                    className="text-white/80 text-sm font-medium hover:text-white transition-colors"
                  >
                    Calculate Your Band Score
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
