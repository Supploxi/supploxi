import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const values = [
  {
    title: 'Simplicity First',
    desc: "Powerful software doesn't have to be complicated. We build tools that feel intuitive from day one — no training required.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Built for Real Business',
    desc: 'Every feature we ship solves a real problem faced by real sellers. No bloat, no fluff — just tools that actually move the needle.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    title: 'Always Improving',
    desc: "We ship updates every week based on direct feedback from our customers. Your input shapes our roadmap.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Supploxi</title>
        <meta name="description" content="Learn about Supploxi's mission to simplify supply chain management for US e-commerce importers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx>{`
        .about-hero {
          padding: 140px 0 80px;
          text-align: center;
        }
        .about-hero h1 {
          font-size: 48px;
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 16px;
        }
        .about-hero p {
          font-size: 20px;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .story {
          padding: 0 0 80px;
        }
        .story-inner {
          max-width: 720px;
          margin: 0 auto;
        }
        .story-inner h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .story-inner p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-dim);
          margin-bottom: 20px;
        }
        .mission-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 12px;
          padding: 36px 40px;
          margin: 48px 0;
        }
        .mission-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }
        .mission-card p {
          font-size: 18px;
          line-height: 1.7;
          color: var(--text);
          margin: 0;
          font-weight: 500;
        }
        .values {
          padding: 80px 0;
          border-top: 1px solid var(--border);
        }
        .values h2 {
          font-size: 32px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 48px;
          letter-spacing: -0.5px;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .value-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          transition: all 0.3s;
        }
        .value-card:hover {
          border-color: rgba(0,212,170,0.3);
          transform: translateY(-4px);
        }
        .value-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,212,170,0.08);
          border-radius: 10px;
          color: var(--accent);
          margin-bottom: 20px;
        }
        .value-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .value-card p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .team {
          padding: 80px 0;
          border-top: 1px solid var(--border);
        }
        .team-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .team-inner h2 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .team-inner p {
          font-size: 16px;
          color: var(--text-dim);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .contact {
          padding: 80px 0;
          border-top: 1px solid var(--border);
        }
        .contact-card {
          max-width: 520px;
          margin: 0 auto;
          text-align: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 48px;
        }
        .contact-card h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .contact-card p {
          font-size: 16px;
          color: var(--text-dim);
          margin-bottom: 24px;
          line-height: 1.6;
        }
        .contact-btn {
          display: inline-block;
          padding: 12px 32px;
          font-size: 16px;
          font-weight: 600;
          color: var(--bg);
          background: var(--accent);
          border-radius: 8px;
          transition: background 0.2s, transform 0.2s;
          margin-bottom: 16px;
        }
        .contact-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }
        .contact-note {
          font-size: 14px;
          color: var(--text-muted);
          margin: 0;
        }
        @media (max-width: 768px) {
          .about-hero h1 { font-size: 34px; }
          .values-grid { grid-template-columns: 1fr; }
          .mission-card { padding: 28px 24px; }
          .contact-card { padding: 32px 24px; }
        }
      `}</style>

      <Navbar />

      <section className="about-hero">
        <div className="container">
          <h1>Built by operators, for operators.</h1>
          <p>Since 2019, Supploxi has been on a mission to give e-commerce sellers the operational clarity they deserve — without the enterprise price tag.</p>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story-inner">
            <h2>Our Story</h2>
            <p>
              Supploxi was born out of a real problem. Like thousands of e-commerce sellers, we were managing suppliers, shipments, and inventory across a tangle of spreadsheets and email threads. Every reorder was a guessing game. Every shipment was a mystery. Every tariff change was a surprise that hit margins hard.
            </p>
            <p>
              We built Supploxi to fix that — not just for ourselves, but for every seller who imports products and deserves a better way to run their business. Since 2019, we've been focused on one thing: building the most complete and intuitive operations platform for e-commerce importers.
            </p>

            <div className="mission-card">
              <div className="mission-label">Our Mission</div>
              <p>Our mission is to give every e-commerce seller — regardless of size — the same operational tools that were previously only available to large enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="team-inner">
            <h2>A small team with big ambitions</h2>
            <p>
              We're a lean, focused team passionate about e-commerce operations and international trade. We work remotely and are dedicated to serving sellers across the United States and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact-card">
            <h2>Want to get in touch?</h2>
            <p>We'd love to hear from you — whether it's a question, feedback, or just to say hello.</p>
            <a href="mailto:support@supploxi.com" className="contact-btn">Email us</a>
            <p className="contact-note">We typically respond within 24 hours.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
