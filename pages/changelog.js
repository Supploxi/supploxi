import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const entries = [
  {
    version: 'v1.2.0',
    date: 'March 3, 2026',
    badge: 'Latest',
    badgeColor: 'rgba(0,212,170,0.15)',
    badgeText: 'var(--accent)',
    title: 'New Features',
    sections: [
      {
        heading: 'New Features',
        items: [
          'Automatic shipment status sync every 4 hours via 17Track API',
          'Section 301 tariff calculator integrated into Purchase Orders',
          'Low stock alerts with configurable thresholds per product',
          'Team invitation system with role-based permissions (Admin, Operator, Viewer)',
          'Dark/Light mode toggle with system preference detection',
        ],
      },
      {
        heading: 'Improvements',
        items: [
          'Purchase Order PDF generation redesigned',
          'Order detail page now shows full P&L per order',
          'Supplier rating system (1–5 stars) with performance history',
          'Inventory movements log with full audit trail',
        ],
      },
      {
        heading: 'Bug Fixes',
        items: [
          'Fixed Shopify sync field mismatch on order import',
          'Fixed cascade delete when removing products with linked PO items',
          'Fixed subscription redirect loop on page refresh',
        ],
      },
    ],
  },
  {
    version: 'v1.1.0',
    date: 'February 18, 2026',
    badge: null,
    title: 'Financial Dashboard',
    sections: [
      {
        heading: 'New Features',
        items: [
          'Financial dashboard with monthly P&L statement',
          'Revenue trend chart (last 12 months)',
          'Cost breakdown by supplier',
          'Expense tracking with categories',
          'CSV export for all reports',
        ],
      },
      {
        heading: 'Improvements',
        items: [
          'Dashboard KPIs now load 60% faster',
          'Shipments page redesigned with sidebar filters',
          'Products page now shows margin percentage inline',
          'Settings reorganized — General tab moved to first position',
        ],
      },
    ],
  },
  {
    version: 'v1.0.0',
    date: 'February 3, 2026',
    badge: 'Launch',
    badgeColor: 'rgba(59,130,246,0.15)',
    badgeText: '#60a5fa',
    title: 'Initial Public Release',
    sections: [
      {
        heading: null,
        items: [
          'Full supplier management with contact info and performance tracking',
          'Order management with Shopify sync',
          'Purchase Order creation and email delivery via Resend',
          'Shipment tracking with 17Track integration',
          'Inventory management with stock movements',
          '14-day free trial, no credit card required for Starter plan',
          'Starter ($19/mo), Growth ($49/mo), Scale ($99/mo) plans',
        ],
      },
    ],
  },
  {
    version: 'v0.9.0',
    date: 'January 20, 2026',
    badge: 'Beta',
    badgeColor: 'rgba(251,191,36,0.15)',
    badgeText: '#fbbf24',
    title: 'Beta Release',
    sections: [
      {
        heading: null,
        items: [
          'Core order and supplier management',
          'Basic shipment tracking',
          'Initial Shopify connection',
          'User authentication with email/password',
          'Team invitations',
        ],
      },
    ],
  },
  {
    version: 'v0.5.0',
    date: 'January 6, 2026',
    badge: 'Alpha',
    badgeColor: 'rgba(148,163,184,0.15)',
    badgeText: '#94a3b8',
    title: 'Private Alpha',
    sections: [
      {
        heading: null,
        items: [
          'Internal alpha with founding users',
          'Core database architecture (Supabase)',
          'Basic UI framework and design system',
          'Authentication flow',
        ],
      },
    ],
  },
];

export default function Changelog() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <Head>
        <title>Changelog — Supploxi</title>
        <meta name="description" content="Every update, improvement, and new feature in Supploxi — documented. See what's new." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx>{`
        .changelog-hero {
          padding: 140px 0 60px;
          text-align: center;
        }
        .changelog-hero h1 {
          font-size: 48px;
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 12px;
        }
        .changelog-hero p {
          font-size: 18px;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .updated-badge {
          display: inline-block;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 600;
          background: rgba(0,212,170,0.1);
          color: var(--accent);
          border: 1px solid rgba(0,212,170,0.2);
          border-radius: 20px;
        }
        .entries {
          padding: 0 0 80px;
        }
        .entries-inner {
          max-width: 720px;
          margin: 0 auto;
        }
        .entry {
          position: relative;
          padding-left: 32px;
          margin-bottom: 48px;
          border-left: 2px solid var(--border);
        }
        .entry:last-child {
          margin-bottom: 0;
        }
        .entry-dot {
          position: absolute;
          left: -7px;
          top: 6px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--bg);
        }
        .entry-header {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .entry-version {
          font-size: 20px;
          font-weight: 800;
          color: var(--text);
        }
        .entry-badge {
          padding: 3px 10px;
          font-size: 11px;
          font-weight: 600;
          border-radius: 6px;
        }
        .entry-date {
          font-size: 14px;
          color: var(--text-muted);
        }
        .entry-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .section-heading {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          margin: 20px 0 10px;
        }
        .section-heading:first-of-type {
          margin-top: 0;
        }
        .entry-list {
          list-style: none;
          padding: 0;
        }
        .entry-list li {
          position: relative;
          padding-left: 24px;
          font-size: 15px;
          color: var(--text-dim);
          line-height: 1.7;
          margin-bottom: 6px;
        }
        .entry-list li::before {
          content: '\u2713';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 700;
        }
        .entry-list.bugs li::before {
          content: '\uD83D\uDC1B';
          font-size: 13px;
        }
        .subscribe {
          max-width: 520px;
          margin: 60px auto 0;
          text-align: center;
          padding: 48px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
        }
        .subscribe h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .subscribe > p {
          font-size: 15px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .subscribe-form {
          display: flex;
          gap: 8px;
          max-width: 400px;
          margin: 0 auto;
        }
        .subscribe-input {
          flex: 1;
          padding: 12px 16px;
          font-size: 14px;
          font-family: var(--font);
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
          outline: none;
        }
        .subscribe-input:focus {
          border-color: rgba(0,212,170,0.4);
        }
        .subscribe-btn {
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 600;
          color: var(--bg);
          background: var(--accent);
          border-radius: 8px;
          white-space: nowrap;
          transition: background 0.2s;
        }
        .subscribe-btn:hover {
          background: var(--accent-hover);
        }
        .subscribe-success {
          font-size: 15px;
          color: var(--accent);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .changelog-hero h1 { font-size: 34px; }
          .subscribe { padding: 32px 24px; }
          .subscribe-form { flex-direction: column; }
        }
      `}</style>

      <Navbar />

      <section className="changelog-hero">
        <div className="container">
          <h1>Changelog</h1>
          <p>Every update, improvement, and new feature — documented.</p>
          <span className="updated-badge">Updated March 2026</span>
        </div>
      </section>

      <section className="entries">
        <div className="container">
          <div className="entries-inner">
            {entries.map((e, i) => (
              <div key={i} className="entry">
                <div className="entry-dot" />
                <div className="entry-header">
                  <span className="entry-version">{e.version} · {e.date}</span>
                  {e.badge && (
                    <span className="entry-badge" style={{background: e.badgeColor, color: e.badgeText}}>{e.badge}</span>
                  )}
                </div>
                <div className="entry-title">{e.title}</div>
                {e.sections.map((s, si) => (
                  <div key={si}>
                    {s.heading && <div className="section-heading">{s.heading}</div>}
                    <ul className={`entry-list${s.heading === 'Bug Fixes' ? ' bugs' : ''}`}>
                      {s.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="subscribe">
            <h3>Subscribe to get notified about new updates</h3>
            <p>No spam. Just release notes when we ship something new.</p>
            {subscribed ? (
              <p className="subscribe-success">Thanks! We'll notify you when we publish.</p>
            ) : (
              <div className="subscribe-form">
                <input type="email" className="subscribe-input" placeholder="you@example.com" />
                <button className="subscribe-btn" onClick={() => setSubscribed(true)}>Subscribe</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}