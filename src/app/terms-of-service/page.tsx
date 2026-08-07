import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - E-Commerce Terms & Conditions',
  description: 'LoyalBond terms of service. Read our terms and conditions for using our website, purchasing products, and our policies on warranties, liability, and disputes.',
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <nav className="flex items-center gap-2 text-sm text-brand-gray mb-8">
        <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        <span className="text-brand-dark font-medium">Terms of Service</span>
      </nav>

      <h1 className="text-4xl font-bold text-brand-dark mb-8">Terms of Service</h1>

      <div className="prose prose-lg max-w-none text-brand-gray space-y-6">
        <p className="text-lg">Last updated: January 2025</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using the LoyalBond website (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Description of Service</h2>
          <p>LoyalBond provides an online platform for browsing and purchasing pet products, including but not limited to senior dog functional products, accessories, and care items. We reserve the right to modify, suspend, or discontinue any part of the Service at any time.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Eligibility</h2>
          <p>You must be at least 18 years of age to use this Service. By using our Service, you represent and warrant that you have the legal capacity to enter into binding agreements and comply with these Terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Accounts</h2>
          <p>When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password, and for all activities that occur under your account.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">5. Products and Pricing</h2>
          <p>All product descriptions, images, and pricing are provided for informational purposes. We strive for accuracy but do not warrant that product descriptions or pricing are error-free. In the event of a pricing error, we reserve the right to cancel affected orders and issue refunds.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Prices are listed in US Dollars (USD)</li>
            <li>Prices are subject to change without notice</li>
            <li>Product availability is subject to stock levels</li>
            <li>We reserve the right to limit quantities per customer</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">6. Orders and Payment</h2>
          <p>By placing an order, you are making an offer to purchase. We reserve the right to accept or decline your order. Payment is required at the time of purchase. We accept major credit cards, debit cards, and other payment methods as displayed at checkout.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">7. Shipping and Delivery</h2>
          <p>Shipping and delivery are subject to our <Link href="/shipping-policy" className="text-brand-green hover:underline">Shipping Policy</Link>. Estimated delivery times are provided in good faith but are not guaranteed. Risk of loss and title for products pass to you upon delivery.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">8. Returns and Refunds</h2>
          <p>Returns and refunds are governed by our <Link href="/return-policy" className="text-brand-green hover:underline">Return Policy</Link>. Please review our return policy before making a purchase.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">9. Product Warranties</h2>
          <p>Unless otherwise stated, our products come with a limited warranty against manufacturing defects for a period of 90 days from the date of purchase. This warranty does not cover damage caused by misuse, normal wear and tear, or unauthorized modifications.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">10. Intellectual Property</h2>
          <p>All content on the LoyalBond website, including text, graphics, logos, images, and software, is the property of LoyalBond or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">11. User Content</h2>
          <p>If you submit reviews, comments, or other content, you grant us a non-exclusive, royalty-free, perpetual license to use, reproduce, and display such content in connection with the Service. You are responsible for ensuring your content does not violate any third-party rights.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">12. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, LoyalBond shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service or products. Our total liability shall not exceed the amount paid by you for the specific product giving rise to the claim.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">13. Indemnification</h2>
          <p>You agree to indemnify and hold harmless LoyalBond, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">14. Dispute Resolution</h2>
          <p>Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association. You agree that any dispute resolution proceedings will be conducted on an individual basis and not in a class, consolidated, or representative action.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">15. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">16. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service after changes constitutes acceptance of the modified Terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">17. Contact Us</h2>
          <p>For questions about these Terms, please contact us at <strong className="text-brand-dark">legal@loyalbondpet.com</strong> or visit our <Link href="/contact" className="text-brand-green hover:underline">Contact page</Link>.</p>
        </section>
      </div>
    </div>
  );
}
