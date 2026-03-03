import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const steps = [
  {
    num: '1',
    title: 'Create your account',
    desc: 'Sign up at app.supploxi.com with your email. No credit card required for the 14-day free trial.',
    link: 'https://app.supploxi.com/login',
  },
  {
    num: '2',
    title: 'Connect your Shopify store',
    desc: 'Go to Settings > Integrations and click "Connect Shopify". Authorize the connection and your products and orders will sync automatically.',
    link: null,
  },
  {
    num: '3',
    title: 'Add your suppliers',
    desc: 'Navigate to Suppliers and click "Add Supplier". Enter their company name, contact info, lead time, and location. This takes about 2 minutes per supplier.',
    link: null,
  },
  {
    num: '4',
    title: 'Add your products',
    desc: 'Go to Products and add your items. Link each product to a supplier, set the cost price, HTS code (for tariff calculation), and reorder point.',
    link: null,
  },
  {
    num: '5',
    title: 'Start tracking shipments',
    desc: 'When you create or receive an order, add the tracking number. Supploxi will automatically update the shipment status every few hours using 17Track.',
    link: null,
  },
];

const modules = [
  { title: 'Dashboard', desc: 'Overview of your business metrics, active shipments, and alerts.', ready: true },
  { title: 'Orders', desc: 'Manage customer orders synced from Shopify or entered manually.', ready: true },
  { title: 'Suppliers', desc: 'Track your Chinese suppliers, lead times, and contact information.', ready: true },
  { title: 'Products', desc: 'Product catalog with cost prices, HTS codes, and supplier links.', ready: true },
  { title: 'Purchase Orders', desc: 'Generate professional POs and send them to suppliers via email.', ready: true },
  { title: 'Shipments', desc: 'Track all your shipments automatically with real-time status updates.', ready: true },
  { title: 'Inventory', desc: 'Monitor stock levels and receive smart reorder alerts.', ready: true },
  { title: 'Financials', desc: 'Revenue, costs, margins, and tariff impact reports.', ready: true },
  { title: 'Settings', desc: 'Team management, integrations, and account preferences.', ready: true },
];

export default function Docs() {
  return (
    <>
      <Head>
        <title>Documentation — Supploxi</title>
        <meta name="description" content="Learn how to use Supploxi. Quick start guide and module documentation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx>{`
        .docs {
          padding: 120px 0 80px;
          min-height: 100vh;
        }
        .docs-inner {
          max-width: 760px;
          margin: 0 auto;
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
        .docs-inner h1 {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 8px;
        }
        .docs-sub {
          font-size: 16px;
          color: var(--text-muted);
          margin-bottom: 48px;
        }
        .docs-inner h2 {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--text);
        }
        .docs-inner h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text);
        }
        .step {
          display: flex;
          gap: 20px;
          margin-bottom: 32px;
          padding: 24px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
        }
        .step-num {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,212,170,0.1);
          border: 1px solid rgba(0,212,170,0.2);
          border-radius: 50%;
          font-size: 16px;
          font-weight: 700;
          color: var(--accent);
          flex-shrink: 0;
        }
        .step-content h3 {
          margin-bottom: 6px;
        }
        .step-content p {
          font-size: 15px;
          color: var(--text-dim);
          line-height: 1.7;
        }
        .modules-section {
          margin-top: 64px;
        }
        .module-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .module-card {
          padding: 20px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: border-color 0.2s;
        }
        .module-card:hover {
          border-color: rgba(0,212,170,0.3);
        }
        .module-card h3 {
          font-size: 15px;
          margin-bottom: 4px;
        }
        .module-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .coming-soon-note {
          margin-top: 48px;
          padding: 24px;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          text-align: center;
          color: var(--text-muted);
          font-size: 15px;
        }
        @media (max-width: 768px) {
          .module-grid {
            grid-template-columns: 1fr;
          }
          .step {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>

      <Navbar />
      <div className="docs">
        <div className="container">
          <div className="docs-inner">
            <a href="/" className="back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Back to Home
            </a>
            <h1>Documentation</h1>
            <p className="docs-sub">Everything you need to get started with Supploxi.</p>

            <h2>Quick Start Guide</h2>
            <p style={{color: 'var(--text-dim)', fontSize: '15px', marginBottom: '24px'}}>
              Get up and running in under 30 minutes. Follow these 5 steps:
            </p>

            {steps.map((s) => (
              <div key={s.num} className="step">
                <div className="step-num">{s.num}</div>
                <div className="step-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}

            <div className="modules-section">
              <h2>Platform Modules</h2>
              <div className="module-grid">
                {modules.map((m) => (
                  <div key={m.title} className="module-card">
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="coming-soon-note">
              Full documentation with detailed guides, screenshots, and video tutorials is coming soon.
              <br />
              Need help? Contact us at <a href="mailto:support@supploxi.com" style={{color: 'var(--accent)'}}>support@supploxi.com</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
