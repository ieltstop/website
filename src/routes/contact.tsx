import { useState } from 'react';

import Section from '../components/ui/Section';
import ScrollReveal from '../components/ui/ScrollReveal';
import {
  Mail,
  Phone,
  ArrowRight,
  Check,
  Globe,
} from 'lucide-react';

/* -- CTA Benefits -- */
const ctaBenefits = [
  'Personalized IELTS preparation guidance',
  'Expert AI-powered analysis of your work',
  'Detailed band score breakdown',
  'Available 24/7 worldwide',
  'Responsive support team',
];

const nextSteps = [
  { step: '1', title: 'Submit your inquiry', description: 'Tell us about your IELTS goals.' },
  { step: '2', title: 'Get a response', description: 'Our team replies within 24 hours.' },
  { step: '3', title: 'Start preparing', description: 'Begin your AI-powered IELTS journey.' },
];

/* -- Page -- */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return;
    }
    setLoading(true);
    try {
      // TODO: wire up API call
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-lg border border-border-medium bg-white text-[14px] text-heading placeholder-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all';

  return (
    <div>
      {/* -- Hero -- */}
      <section className="bg-white pb-16 md:pb-20 pt-24 md:pt-32" aria-labelledby="contact-heading">
        <div className="container-main text-center max-w-2xl mx-auto">
          <span className="section-label">Contact</span>
          <h1
            id="contact-heading"
            className="mt-5 text-heading"
          >
            We are here to help
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Have a question about IELTS preparation or our platform? Get in touch and
            we will respond within 24 hours.
          </p>

          {/* Contact Info */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-body hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">+1 (555) 123-4567</span>
            </a>
            <a
              href="mailto:support@ieltstop.com"
              className="flex items-center gap-2 text-body hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">support@ieltstop.com</span>
            </a>
          </div>

          <div className="mt-8">
            <a
              href="https://app.ieltstop.com/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-hover transition-colors"
            >
              Schedule a free consultation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* -- Contact Form Section -- */}
      <Section bg="bg-bg-alt" aria-labelledby="contact-form-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Form */}
            <ScrollReveal>
              <h2
                id="contact-form-heading"
                className="text-heading text-2xl md:text-3xl mb-2"
              >
                Send us a message
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Fill out the form below and we will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-[13px] font-semibold text-heading mb-2">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      aria-required="true"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[13px] font-semibold text-heading mb-2">
                      Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-[13px] font-semibold text-heading mb-2">
                    Phone <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[13px] font-semibold text-heading mb-2">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-hover transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            </ScrollReveal>

            {/* Right: Info Card */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-border p-6 md:p-8 h-full shadow-card">
                <div className="w-12 h-12 rounded-lg border border-border flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>

                <h3
                  className="text-heading text-xl font-semibold mb-2"
                >
                  Available worldwide
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Our AI-powered IELTS preparation platform is accessible anywhere in the
                  world, 24 hours a day, 7 days a week. No matter where you are preparing
                  for your IELTS exam, we are here to help.
                </p>

                <div className="border-t border-border pt-6">
                  <p className="text-heading text-sm font-semibold mb-4">Contact details</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                      <a href="mailto:support@ieltstop.com" className="text-body text-sm hover:text-primary transition-colors">
                        support@ieltstop.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                      <a href="tel:+15551234567" className="text-body text-sm hover:text-primary transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-bg-alt p-5 text-center">
                  <p className="text-muted-foreground text-sm">Typically replies within 24 hours</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* -- CTA Section (Dark) -- */}
      <Section bg="bg-bg-dark" aria-labelledby="contact-cta-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side */}
            <div>
              <h2
                id="contact-cta-heading"
                className="text-white text-3xl md:text-4xl leading-tight"
              >
                Start your IELTS preparation today.
              </h2>
              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                Join thousands of students who have achieved their target band scores
                with our AI-powered platform.
              </p>

              <ul className="mt-8 space-y-3" role="list">
                {ctaBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Check className="w-3 h-3 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <h4 className="text-white font-semibold text-lg mb-6">What happens next?</h4>
                <div className="space-y-5">
                  {nextSteps.map((ns) => (
                    <div key={ns.step} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                        {ns.step}
                      </span>
                      <div>
                        <p className="text-white text-sm font-semibold">{ns.title}</p>
                        <p className="text-white/50 text-sm mt-0.5">{ns.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-elevated">
              <h3
                className="text-heading text-2xl font-semibold"
              >
                Get a free consultation
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Tell us about your IELTS goals and we will help you get started.
              </p>

              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="cta-name" className="block text-[13px] font-semibold text-heading mb-2">Name</label>
                  <input
                    id="cta-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="cta-email" className="block text-[13px] font-semibold text-heading mb-2">Email</label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="cta-message" className="block text-[13px] font-semibold text-heading mb-2">Message</label>
                  <textarea
                    id="cta-message"
                    rows={4}
                    required
                    placeholder="Tell us about your IELTS goals..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-7 py-3.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-hover transition-colors cursor-pointer"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
