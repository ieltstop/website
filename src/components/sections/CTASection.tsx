import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function CTASection() {
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [agreed, setAgreed] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const inputClass = 'w-full px-4 py-3 rounded-lg border border-border-medium bg-white text-[14px] text-heading placeholder-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all';

  return (
    <section className="section-padding bg-white" aria-labelledby="contact-heading">
      <div className="container-main">
        <ScrollReveal>
        <div className="bg-bg-alt rounded-2xl overflow-hidden border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — Info */}
            <div className="p-10 md:p-14">
              <span className="section-label">Get In Touch</span>
              <h2 id="contact-heading" className="mt-5" style={{ fontStyle: 'italic' }}>
                Let&rsquo;s help you hit<br />
                your target band score
              </h2>
              <p className="mt-5 text-[15px] text-body leading-[1.75] max-w-sm">
                Have questions about our tools or need help choosing a plan?
                We&rsquo;re here to help you get started.
              </p>

              <address className="mt-8 space-y-5 not-italic">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-[14px] font-bold text-heading">San Francisco, CA</p>
                    <p className="text-[13px] text-muted-foreground mt-0.5">Available remotely worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <a href="tel:+12195551322" className="text-[14px] font-bold text-heading hover:text-primary transition-colors">(02) 219-555-1322</a>
                    <p className="text-[13px] text-muted-foreground mt-0.5">Mon--Fri, 9am--5pm PST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:hello@ieltstop.com" className="text-[14px] font-bold text-primary hover:underline">
                    hello@ieltstop.com
                  </a>
                </div>
              </address>

              <p className="mt-8 text-[13px] text-muted-foreground leading-relaxed max-w-xs">
                Before placing a call, you might find the information you need
                by searching on our FAQ page.
              </p>
            </div>

            {/* Right — Form */}
            <div className="p-10 md:p-14 bg-white">
              <h3 className="text-[22px] font-bold text-heading">Have a question or comment?</h3>
              <p className="mt-2 text-[14px] text-muted-foreground">
                Submit your message and a member of our team will respond within 24 hours.
              </p>

              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-[13px] font-semibold text-heading mb-2">
                      Your name <span className="text-primary" aria-label="required">*</span>
                    </label>
                    <input id="contact-name" type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Full name" autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-[13px] font-semibold text-heading mb-2">
                      Company name
                    </label>
                    <input id="contact-company" type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Optional" autoComplete="organization" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[13px] font-semibold text-heading mb-2">
                      Phone number <span className="text-primary" aria-label="required">*</span>
                    </label>
                    <input id="contact-phone" type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+1 (555) 000-0000" autoComplete="tel" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[13px] font-semibold text-heading mb-2">
                      Email address <span className="text-primary" aria-label="required">*</span>
                    </label>
                    <input id="contact-email" type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@email.com" autoComplete="email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-[13px] font-semibold text-heading mb-2">
                    Order notes or requirements
                  </label>
                  <textarea id="contact-message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your goals..." />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-border-medium accent-primary"
                    aria-label="I understand and agree to the privacy policy"
                  />
                  <span className="text-[12px] text-muted-foreground leading-relaxed">
                    I understand and agree to the{' '}
                    <a href="/privacy-policy" className="text-primary hover:underline">privacy policy</a>.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!agreed}
                  className="h-[48px] px-8 bg-primary text-white text-[14px] font-bold rounded-md hover:bg-primary-hover transition-colors cursor-pointer shadow-[0_4px_12px_rgba(232,119,58,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit request
                </button>
              </form>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
