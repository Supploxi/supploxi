import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Supploxi</title>
        <meta name="description" content="Supploxi Privacy Policy. Learn how we collect, use, and protect your data." />
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
            <h1>Privacy Policy</h1>
            <p className="legal-date">Effective date: March 1, 2026</p>

            <p>Supploxi (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the supploxi.com website and the Supploxi platform (the &ldquo;Service&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, company name, and password when you create an account.</li>
              <li><strong>Billing Information:</strong> Payment method details processed securely through Stripe. We do not store your full credit card number.</li>
              <li><strong>Business Data:</strong> Supplier information, product data, order details, shipment tracking numbers, and financial records that you enter into the platform.</li>
              <li><strong>Integration Data:</strong> When you connect third-party services (e.g., Shopify), we access order and product data as authorized by you.</li>
              <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and other diagnostic data collected automatically.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Process transactions and send related information (confirmations, invoices)</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
              <li>Track shipments and calculate tariff duties on your behalf</li>
              <li>Generate inventory alerts and business intelligence reports</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with the Service</li>
            </ul>

            <h2>3. Data Sharing</h2>
            <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., Stripe for payments, Supabase for data storage, 17Track for shipment tracking).</li>
              <li><strong>Legal Requirements:</strong> If required by law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data, including:</p>
            <ul>
              <li>Encryption in transit (TLS/SSL) and at rest</li>
              <li>Secure authentication via Supabase Auth</li>
              <li>Row-level security policies on all database tables</li>
              <li>Regular security audits and monitoring</li>
            </ul>
            <p>While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure.</p>

            <h2>5. Cookies</h2>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul>
              <li>Maintain your session and authentication state</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze how our Service is used</li>
            </ul>
            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the Service may not function properly without cookies.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request that we delete your personal data, subject to legal obligations.</li>
              <li><strong>Export:</strong> Request a portable copy of your data in a machine-readable format.</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:support@supploxi.com">support@supploxi.com</a>.</p>

            <h2>7. Data Retention</h2>
            <p>We retain your information for as long as your account is active or as needed to provide you the Service. If you delete your account, we will delete or anonymize your data within 30 days, except where we are required to retain it for legal or compliance purposes.</p>

            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Effective date&rdquo; above. We encourage you to review this Privacy Policy periodically.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p><a href="mailto:support@supploxi.com">support@supploxi.com</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
