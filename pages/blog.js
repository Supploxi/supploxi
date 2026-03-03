import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const articles = [
  {
    title: 'How Section 301 Tariffs Are Reshaping E-Commerce in 2026',
    category: 'Tariffs & Trade',
    categoryColor: 'var(--accent)',
    categoryBg: 'rgba(0,212,170,0.15)',
    date: 'February 2026',
    preview: "With tariffs on Chinese goods reaching historic highs, US importers are rethinking their supply chains. Here's what you need to know to protect your margins and stay competitive.",
  },
  {
    title: 'The True Cost of Importing: A Complete Guide to Landed Cost',
    category: 'Operations',
    categoryColor: '#60a5fa',
    categoryBg: 'rgba(59,130,246,0.15)',
    date: 'January 2026',
    preview: "Most sellers only look at the product price. But your real cost includes freight, customs duties, insurance, and handling fees. Here's how to calculate it correctly every time.",
  },
  {
    title: "5 Signs You've Outgrown Your Spreadsheet",
    category: 'Productivity',
    categoryColor: '#a78bfa',
    categoryBg: 'rgba(139,92,246,0.15)',
    date: 'December 2025',
    preview: "Spreadsheets are great — until they're not. If any of these signs sound familiar, it might be time for a dedicated operations platform.",
  },
];

export default function Blog() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <Head>
        <title>Blog — Supploxi</title>
        <meta name="description" content="Insights, guides, and tips for e-commerce importers. Tips on tariffs, operations, and supply chain management." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx>{`
        .blog-hero {
          padding: 140px 0 60px;
          text-align: center;
        }
        .blog-hero h1 {
          font-size: 48px;
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 12px;
        }
        .blog-hero p {
          font-size: 18px;
          color: var(--text-muted);
        }
        .articles {
          padding: 0 0 80px;
        }
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 60px;
        }
        .article-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
        }
        .article-card:hover {
          border-color: rgba(0,212,170,0.3);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.2);
        }
        .article-img {
          height: 180px;
          background: var(--surface2);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .article-img svg {
          color: var(--text-muted);
          opacity: 0.3;
        }
        .article-coming-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 600;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-muted);
          border-radius: 6px;
        }
        .article-body {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .article-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .article-category {
          font-size: 12px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .article-date {
          font-size: 12px;
          color: var(--text-muted);
        }
        .article-body h3 {
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 10px;
        }
        .article-body p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          flex: 1;
        }
        .read-more-btn {
          display: inline-block;
          margin-top: 16px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          background: none;
          border: 1px solid var(--border);
          border-radius: 6px;
          cursor: not-allowed;
          opacity: 0.5;
          align-self: flex-start;
        }
        .subscribe {
          max-width: 520px;
          margin: 0 auto;
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
        .subscribe-note {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 12px;
        }
        .subscribe-success {
          font-size: 15px;
          color: var(--accent);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .blog-hero h1 { font-size: 34px; }
          .articles-grid { grid-template-columns: 1fr; }
          .subscribe-form { flex-direction: column; }
          .subscribe { padding: 32px 24px; }
        }
      `}</style>

      <Navbar />

      <section className="blog-hero">
        <div className="container">
          <h1>The Supploxi Blog</h1>
          <p>Insights, guides, and tips for e-commerce importers.</p>
        </div>
      </section>

      <section className="articles">
        <div className="container">
          <div className="articles-grid">
            {articles.map((a, i) => (
              <div key={i} className="article-card">
                <div className="article-img">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  <span className="article-coming-badge">Coming Soon</span>
                </div>
                <div className="article-body">
                  <div className="article-meta">
                    <span className="article-category" style={{background: a.categoryBg, color: a.categoryColor}}>{a.category}</span>
                    <span className="article-date">{a.date}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.preview}</p>
                  <button className="read-more-btn" disabled>Read More</button>
                </div>
              </div>
            ))}
          </div>

          <div className="subscribe">
            <h3>Get notified when we publish</h3>
            <p>No spam. Just practical insights for e-commerce importers.</p>
            {subscribed ? (
              <p className="subscribe-success">Thanks! We'll notify you when we publish.</p>
            ) : (
              <>
                <div className="subscribe-form">
                  <input type="email" className="subscribe-input" placeholder="you@example.com" />
                  <button className="subscribe-btn" onClick={() => setSubscribed(true)}>Subscribe</button>
                </div>
                <p className="subscribe-note">Articles coming soon — subscribe to be the first to know.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
