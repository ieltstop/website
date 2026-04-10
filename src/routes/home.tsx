import Hero from '../components/sections/Hero';
import ThreeSteps from '../components/sections/ThreeSteps';
import QuickActions from '../components/sections/QuickActions';
import WhyChoose from '../components/sections/WhyChoose';
import Services from '../components/sections/Services';
import TestTypes from '../components/sections/TestTypes';
import TrustBanner from '../components/sections/TrustBanner';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import Resources from '../components/sections/Resources';
import SampleEssays from '../components/sections/SampleEssays';
import FAQ from '../components/sections/FAQ';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ThreeSteps />
      <QuickActions />
      <WhyChoose />
      <Services />
      <TestTypes />
      <TrustBanner />
      <Stats />
      <Testimonials />
      <Resources />
      <SampleEssays />
      <FAQ />
      <CTASection />
    </div>
  );
}
