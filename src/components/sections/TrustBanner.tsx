import ScrollReveal from '../ui/ScrollReveal';

const brands = ['Cambridge', 'British Council', 'IDP', 'IELTS.org', 'Pearson', 'ETS'];

export default function TrustBanner() {
  return (
    <section className="bg-bg-dark py-16 md:py-20" aria-labelledby="trust-heading">
      <div className="container-main">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            {/* Left image */}
            <div className="relative rounded-xl overflow-hidden h-[280px] md:h-[340px]">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&h=500&fit=crop"
                alt="Group of international students studying together at a modern workspace"
                className="w-full h-full object-cover"
                loading="lazy"
                width="700"
                height="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/50 to-transparent" />
            </div>

            {/* Right content */}
            <div>
              <h2 id="trust-heading" className="text-white">
                Trusted by modern<br />
                students worldwide
              </h2>
              <p className="mt-5 text-muted-light text-[16px] leading-[1.75] max-w-md">
                Students across 120+ countries trust IELTS Top to
                help them achieve their target band scores efficiently
                and affordably, with AI-powered feedback they can rely on.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Logo strip */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 pt-8 border-t border-white/10" role="list" aria-label="Trusted by organizations">
            <div className="flex flex-wrap items-center justify-between gap-8">
              {brands.map((brand) => (
                <span
                  key={brand}
                  role="listitem"
                  className="text-white/25 text-[14px] font-bold tracking-[2px] uppercase select-none"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
