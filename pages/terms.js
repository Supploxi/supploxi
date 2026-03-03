import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — Supploxi</title>
        <meta name="description" content="Supploxi Terms of Service. Read our terms and conditions for using the platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx>{`
        .legal {
          padding: 120px 0 80px;
          min-height: 100vh;
        }
        .legal-inner {
          max-width: 760px;
          margin: 0 auto;
        }
        .legal-inner h1 {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 8px;
        }
        .legal-date {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 48px;
        }
        .legal-inner h2 {
          font-size: 22px;
          font-weight: 700;
          margin-top: 40px;
          margin-bottom: 16px;
          color: var(--text);
        }
        .legal-inner p, .legal-inner li {
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-dim);
          margin-bottom: 12px;
        }
        .legal-inner ul {
          padding-left: 24px;
          list-style: disc;
          margin-bottom: 16px;
        }
        .legal-inner a {
          color: var(--accent);
          text-decoration: underline;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: var(--accent);
          margin-bottom: 32px;
          text-decoration: none;
        }
        .back-link:hover {
          text-decoration: underline;
        }
      `}</style>

      <Navbar />
      <div className="legal">
        <div className="container">
          <div className="legal-inner">
            <a href="/" className="back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Back to Home
            </a>
            <h1>Terms of Service</h1>
            <p className="legal-date">Effective date: March 1, 2026</p>

            <p>These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Supploxi platform and services (the &ldquo;Service&rdquo;) provided by Supploxi (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing or using the Service, you agree to be bound by these Terms.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By creating an account or using the Service, you agree to these Terms and our Privacy Policy. If you do not agree, you may not use the Service. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>

            <h2>2. Description of Service</h2>
            <p>Supploxi is a supply chain management platform designed for US e-commerce sellers who import products from China. The Service includes:</p>
            <ul>
              <li>Order and supplier management</li>
              <li>Purchase order generation</li>
              <li>Automated shipment tracking</li>
              <li>Inventory management with reorder alerts</li>
              <li>Section 301 tariff calculation</li>
              <li>Financial reporting and analytics</li>
              <li>Third-party integrations (e.g., Shopify)</li>
            </ul>
            <p>We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.</p>

            <h2>3. Subscription and Billing</h2>
            <ul>
              <li><strong>Free Trial:</strong> New accounts receive a 14-day free trial with full access to the selected plan features. No credit card is required during the trial period.</li>
              <li><strong>Plans:</strong> After the trial, you must subscribe to a paid plan (Starter, Growth, or Scale) to continue using the Service.</li>
              <li><strong>Billing:</strong> Subscriptions are billed monthly or annually, depending on your selection. All fees are in US Dollars.</li>
              <li><strong>Payment:</strong> Payments are processed securely through Stripe. You are responsible for providing accurate billing information.</li>
              <li><strong>Price Changes:</strong> We may change our prices with 30 days&rsquo; notice. Price changes will apply at the start of your next billing cycle.</li>
            </ul>

            <h2>4. Cancellation</h2>
            <ul>
              <li>You may cancel your subscription at any time from your account settings.</li>
              <li>Cancellation takes effect at the end of your current billing period. You will retain access until then.</li>
              <li>We do not provide refunds for partial billing periods.</li>
              <li>Upon cancellation, your data will be retained for 30 days, after which it may be permanently deleted.</li>
            </ul>

            <h2>5. Your Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information when creating your account</li>
              <li>Keep your login credentials secure and confidential</li>
              <li>Use the Service only for lawful purposes and in compliance with applicable laws</li>
              <li>Not share your account with unauthorized users</li>
              <li>Ensure that any data you import complies with applicable regulations</li>
            </ul>

            <h2>6. Prohibited Uses</h2>
            <p>You may not use the Service to:</p>
            <ul>
              <li>Violate any applicable laws or regulations, including US import/export laws</li>
              <li>Transmit malware, viruses, or any malicious code</li>
              <li>Attempt to gain unauthorized access to the Service or its systems</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li>Use the Service for any fraudulent or deceptive purpose</li>
              <li>Resell or redistribute the Service without our written consent</li>
              <li>Scrape, mine, or extract data from the Service using automated means</li>
            </ul>

            <h2>7. Intellectual Property</h2>
            <p>The Service, including its design, features, content, and underlying technology, is owned by Supploxi and protected by intellectual property laws. You retain ownership of the data you input into the Service. By using the Service, you grant us a limited license to use your data solely to provide and improve the Service.</p>

            <h2>8. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUPPLOXI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:</p>
            <ul>
              <li>Your use or inability to use the Service</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any errors, inaccuracies, or omissions in tariff calculations, tracking data, or other information provided by the Service</li>
              <li>Any third-party integrations or services</li>
            </ul>
            <p>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</p>

            <h2>9. Disclaimer</h2>
            <p>The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. Tariff calculations are provided for informational purposes only and should not be considered legal or customs advice. Always consult with a licensed customs broker for official duty determinations.</p>

            <h2>10. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in Delaware.</p>

            <h2>11. Changes to Terms</h2>
            <p>We may revise these Terms at any time by posting an updated version on this page. Material changes will be communicated via email or in-app notification at least 30 days before they take effect. Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.</p>

            <h2>12. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p><a href="mailto:support@supploxi.com">support@supploxi.com</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
