import ScrollReveal from '../components/ui/ScrollReveal';

/* -- Content -- */
const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using IELTS Top ("the Platform"), you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, you may not access or use the Platform. These terms apply to all visitors, users, and others who access or use the Platform.`,
  },
  {
    title: '2. Description of Service',
    content: `IELTS Top provides an AI-powered IELTS preparation platform that offers automated analysis and feedback on writing and speaking submissions. Our services include essay checking, letter checking, report checking, and speech analysis. The AI-generated band scores and feedback are estimates and should be used as study aids, not as official IELTS scores.`,
  },
  {
    title: '3. User Accounts',
    content: `To access certain features of the Platform, you must register for an account. You agree to:

- Provide accurate, current, and complete information during registration.
- Maintain and promptly update your account information.
- Maintain the security of your password and accept all risks of unauthorized access.
- Notify us immediately if you discover or suspect any security breaches.
- Take responsibility for all activities that occur under your account.

We reserve the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    title: '4. Subscription and Payments',
    content: `IELTS Top offers both free and paid subscription plans. By subscribing to a paid plan:

- You agree to pay the subscription fees as described at the time of purchase.
- Subscription fees are billed on a recurring monthly basis.
- You authorize us to charge your payment method on each billing cycle.
- Prices are subject to change with 30 days' advance notice.
- All fees are quoted in US Dollars unless otherwise stated.`,
  },
  {
    title: '5. Free Plan Limitations',
    content: `The free plan includes limited access to the Platform's features. Specific limitations include the number of submissions allowed per month. We reserve the right to modify free plan limitations at any time. Unused free plan submissions do not carry over to the next month.`,
  },
  {
    title: '6. Acceptable Use',
    content: `You agree not to:

- Use the Platform for any unlawful purpose or in violation of any applicable laws.
- Submit content that is offensive, harmful, or infringes on others' rights.
- Attempt to gain unauthorized access to the Platform or its related systems.
- Use automated tools to scrape, crawl, or extract data from the Platform.
- Interfere with or disrupt the Platform or servers connected to it.
- Impersonate any person or entity or misrepresent your affiliation.
- Share your account credentials with others or allow multiple users to access a single account.
- Resell, redistribute, or commercially exploit the Platform's feedback or analysis.`,
  },
  {
    title: '7. Intellectual Property',
    content: `All content, features, and functionality of the Platform, including but not limited to text, graphics, logos, icons, software, and AI models, are the exclusive property of IELTS Top and are protected by international copyright, trademark, and other intellectual property laws.

Content you submit (essays, letters, recordings) remains your intellectual property. By submitting content, you grant us a limited license to process and analyze it for the purpose of providing our services.`,
  },
  {
    title: '8. AI-Generated Feedback Disclaimer',
    content: `The band scores, feedback, and suggestions provided by our AI system are automated estimates based on machine learning models. They are intended as study aids and should not be considered official IELTS scores or professional advice. While we strive for accuracy, we make no guarantees that our AI analysis will match official IELTS examination results.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by law, IELTS Top and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your use of the Platform.

Our total liability for any claims arising under these terms shall not exceed the amount you have paid us in the 12 months preceding the claim.`,
  },
  {
    title: '10. Termination',
    content: `We may terminate or suspend your account immediately, without prior notice, for any reason, including if you breach these Terms and Conditions. Upon termination, your right to use the Platform will cease immediately. All provisions of these terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.`,
  },
  {
    title: '11. Changes to Terms',
    content: `We reserve the right to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. Your continued use of the Platform after changes constitutes your acceptance of the new terms.`,
  },
  {
    title: '12. Governing Law',
    content: `These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which IELTS Top operates, without regard to its conflict of law provisions.`,
  },
  {
    title: '13. Contact Information',
    content: `If you have any questions about these Terms and Conditions, please contact us at:

- Email: support@ieltstop.com
- Website: www.ieltstop.com/contact`,
  },
];

/* -- Page -- */
export default function TermsConditions() {
  return (
    <div>
      <section className="bg-white pb-20 md:pb-28 pt-24 md:pt-32" aria-labelledby="terms-heading">
        <div className="container-main max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label">Legal</span>
            <h1
              id="terms-heading"
              className="mt-5 text-heading"
            >
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-muted-foreground text-sm">Last updated: March 2026</p>
          </div>

          {/* Content */}
          <ScrollReveal>
            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h3 className="text-base md:text-lg font-semibold text-heading mb-4">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
