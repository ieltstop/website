import ScrollReveal from '../components/ui/ScrollReveal';

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

/* -- Content -- */
const sections = [
  {
    title: '1. Overview',
    content: `At IELTS Top, we want you to be completely satisfied with your purchase. This Refund Policy outlines the terms under which you may request a refund for our Premium subscription service.`,
  },
  {
    title: '2. Eligibility for Refund',
    content: `You are eligible for a full refund if you meet the following conditions:

- Your refund request is submitted within 7 days of your initial purchase date.
- You have not excessively used the Premium features during the refund period (more than 20 submissions is considered excessive use).
- This is your first refund request. We offer one refund per user.

Refund eligibility applies only to the most recent billing cycle. We do not provide refunds for previous billing periods.`,
  },
  {
    title: '3. How to Request a Refund',
    content: `To request a refund, please follow these steps:

1. Log in to your IELTS Top account.
2. Navigate to Account Settings > Subscription.
3. Click "Request Refund" and provide a brief reason for your request.

Alternatively, you can email us at support@ieltstop.com with the subject line "Refund Request" and include your account email address and reason for the refund.`,
  },
  {
    title: '4. Processing Time',
    content: `Once we receive your refund request, we will review it within 2 business days. If approved:

- Refunds to credit/debit cards will be processed within 5-10 business days, depending on your bank.
- PayPal refunds are typically processed within 3-5 business days.
- You will receive an email confirmation once the refund has been initiated.

Please note that the time it takes for the refund to appear in your account may vary depending on your financial institution.`,
  },
  {
    title: '5. Non-Refundable Situations',
    content: `Refunds will not be issued in the following circumstances:

- The refund request is made more than 7 days after the purchase date.
- The account has been suspended or terminated for violation of our Terms and Conditions.
- The user has previously received a refund for an IELTS Top subscription.
- Excessive use of Premium features during the refund period.`,
  },
  {
    title: '6. Cancellation vs. Refund',
    content: `Please note the difference between cancellation and refund:

- **Cancellation:** Stops future billing. You retain access to Premium features until the end of your current billing period. No refund is issued for the remaining days.
- **Refund:** Returns the payment for the current billing period. Your account will immediately revert to the Free plan once the refund is processed.

You can cancel your subscription at any time from your account settings without needing to request a refund.`,
  },
  {
    title: '7. Promotional and Discounted Purchases',
    content: `Subscriptions purchased at a promotional or discounted rate are subject to the same refund policy. The refund amount will be the actual amount paid, not the regular subscription price.`,
  },
  {
    title: '8. Disputes',
    content: `If your refund request is denied and you believe this was in error, you may appeal by emailing support@ieltstop.com with additional details. We will review your appeal within 5 business days and provide a final decision.

We encourage you to contact us before initiating a chargeback through your bank or payment provider, as we are committed to resolving issues fairly and promptly.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Platform after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have any questions about this Refund Policy, please contact us:

- Email: support@ieltstop.com
- Website: www.ieltstop.com/contact`,
  },
];

/* -- Page -- */
export default function RefundPolicy() {
  return (
    <div>
      <section className="bg-white pb-20 md:pb-28 pt-24 md:pt-32" aria-labelledby="refund-heading">
        <div className="container-main max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label">Legal</span>
            <h1
              id="refund-heading"
              className="mt-5 text-heading"
              style={{ fontStyle: 'italic' }}
            >
              Refund Policy
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
