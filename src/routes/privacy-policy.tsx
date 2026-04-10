import ScrollReveal from '../components/ui/ScrollReveal';

/* -- Content -- */
const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, including:

- **Account Information:** When you create an account, we collect your name, email address, and password.
- **Submission Data:** Essays, letters, reports, and audio recordings you submit for analysis.
- **Payment Information:** When you subscribe to Premium, our payment processor collects your payment details. We do not store your full credit card number.
- **Usage Data:** We automatically collect information about your interactions with the platform, including pages visited, features used, and time spent.
- **Device Information:** Browser type, operating system, IP address, and device identifiers.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

- Provide, maintain, and improve our AI-powered IELTS preparation services.
- Process your submissions and deliver band score analysis and feedback.
- Process transactions and send related information.
- Send you technical notices, updates, security alerts, and support messages.
- Respond to your comments, questions, and customer service requests.
- Monitor and analyze trends, usage, and activities to improve user experience.
- Detect, investigate, and prevent fraudulent transactions and other illegal activities.`,
  },
  {
    title: '3. Data Sharing and Disclosure',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

- **Service Providers:** With third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.
- **Legal Requirements:** If required to do so by law or in response to valid requests by public authorities.
- **Business Transfers:** In connection with a merger, acquisition, or sale of all or a portion of our assets.
- **With Your Consent:** When you give us explicit permission to share your information.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures to protect your personal information:

- All data is encrypted in transit using TLS/SSL encryption.
- Sensitive data is encrypted at rest using AES-256 encryption.
- We conduct regular security audits and vulnerability assessments.
- Access to personal data is restricted to authorized personnel only.
- We use secure, SOC 2 compliant hosting infrastructure.

While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data at any time by contacting us at support@ieltstop.com. We will delete your data within 30 days of your request, except where we are required to retain it by law.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your location, you may have the following rights regarding your personal data:

- **Access:** Request a copy of your personal data.
- **Correction:** Request correction of inaccurate data.
- **Deletion:** Request deletion of your personal data.
- **Portability:** Request a copy of your data in a portable format.
- **Objection:** Object to processing of your personal data.
- **Restriction:** Request restriction of processing.

To exercise any of these rights, please contact us at support@ieltstop.com.`,
  },
  {
    title: '7. Cookies and Tracking',
    content: `We use essential cookies to maintain your session and preferences. We may also use analytics cookies to understand how our platform is used. You can control cookie preferences through your browser settings. Disabling essential cookies may affect the functionality of the platform.`,
  },
  {
    title: "8. Children's Privacy",
    content: `IELTS Top is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of the platform after changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have any questions about this Privacy Policy, please contact us at:

- **Email:** support@ieltstop.com
- **Website:** www.ieltstop.com/contact`,
  },
];

/* -- Render markdown-lite bold -- */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, j) =>
        j % 2 === 1 ? (
          <strong key={j} className="text-heading font-semibold">{part}</strong>
        ) : (
          <span key={j}>{part}</span>
        )
      )}
    </>
  );
}

/* -- Page -- */
export default function PrivacyPolicy() {
  return (
    <div>
      <section className="bg-white pb-20 md:pb-28 pt-24 md:pt-32" aria-labelledby="privacy-heading">
        <div className="container-main max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label">Legal</span>
            <h1
              id="privacy-heading"
              className="mt-5 text-heading"
            >
              Privacy Policy
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
                  <div className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                    <RichText text={section.content} />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
