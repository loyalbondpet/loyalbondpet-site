import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection & GDPR',
  description: 'LoyalBond privacy policy. We respect your privacy and protect your personal data. GDPR-compliant. Learn how we collect, use, and safeguard your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <nav className="flex items-center gap-2 text-sm text-brand-gray mb-8">
        <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        <span className="text-brand-dark font-medium">Privacy Policy</span>
      </nav>

      <h1 className="text-4xl font-bold text-brand-dark mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none text-brand-gray space-y-6">
        <p className="text-lg">Last updated: January 2025</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. Introduction</h2>
          <p>LoyalBond (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.</p>
          <p className="mt-3">This policy is compliant with the General Data Protection Regulation (GDPR) for users in the European Economic Area (EEA) and the California Consumer Privacy Act (CCPA) for California residents.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-brand-dark mt-4 mb-2">Personal Information</h3>
          <p>We may collect the following personal information when you use our website or make a purchase:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Name, email address, phone number</li>
            <li>Billing and shipping address</li>
            <li>Payment information (processed securely through our payment providers)</li>
            <li>Order history and preferences</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>IP address and browser type</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use your personal information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Processing and fulfilling your orders</li>
            <li>Communicating about your orders and account</li>
            <li>Sending marketing communications (with your consent)</li>
            <li>Improving our website and products</li>
            <li>Complying with legal obligations</li>
            <li>Preventing fraud and ensuring security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Legal Basis for Processing (GDPR)</h2>
          <p>If you are in the EEA, we process your personal data based on:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong className="text-brand-dark">Contract performance:</strong> To fulfill your orders</li>
            <li><strong className="text-brand-dark">Consent:</strong> For marketing communications</li>
            <li><strong className="text-brand-dark">Legitimate interests:</strong> For website improvement and security</li>
            <li><strong className="text-brand-dark">Legal obligation:</strong> For tax and regulatory compliance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">5. Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent at any time</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, please contact us at <strong className="text-brand-dark">privacy@loyalbondpet.com</strong>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">6. Data Retention</h2>
          <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Order records are typically retained for 7 years for tax and legal compliance.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">7. Third-Party Sharing</h2>
          <p>We do not sell your personal data. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Payment processors (to process transactions)</li>
            <li>Shipping carriers (to deliver your orders)</li>
            <li>Service providers (hosting, analytics, customer support)</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">8. Cookies</h2>
          <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">9. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">10. Children&apos;s Privacy</h2>
          <p>Our website is not intended for children under 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">11. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">12. Contact Us</h2>
          <p>For privacy-related inquiries, please contact our Data Protection Officer at <strong className="text-brand-dark">privacy@loyalbondpet.com</strong> or visit our <Link href="/contact" className="text-brand-green hover:underline">Contact page</Link>.</p>
        </section>
      </div>
    </div>
  );
}
