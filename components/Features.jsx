const features = [
  {
    title: 'Automatic Shipment Tracking',
    desc: 'Every tracking number updated automatically. Know exactly where your packages are without lifting a finger.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Section 301 Tariff Calculator',
    desc: "Real-time duty rates for your HTS codes. See exactly how Trump's tariffs affect your margins before you order.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="16" y1="14" x2="16" y2="18" /><line x1="8" y1="10" x2="8" y2="10.01" /><line x1="12" y1="10" x2="12" y2="10.01" /><line x1="16" y1="10" x2="16" y2="10.01" /><line x1="8" y1="14" x2="8" y2="14.01" /><line x1="12" y1="14" x2="12" y2="14.01" /><line x1="8" y1="18" x2="8" y2="18.01" /><line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
  },
  {
    title: 'AI Reorder Alerts',
    desc: 'Never run out of stock again. We calculate reorder points accounting for supplier lead time plus US customs clearance.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: 'Landed Cost Calculator',
    desc: 'Know your true cost. Product price + international shipping + customs duties = real margin.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Purchase Order Management',
    desc: 'Generate professional POs in seconds. Send directly to your Chinese suppliers via email.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Shopify Integration',
    desc: 'Sync orders and inventory automatically. Your Shopify store connected to your supply chain.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <>
      <style jsx>{`
        .features {
          background: var(--bg);
        }
        .features-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .features-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }
        .features-title {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }
        .features-sub {
          font-size: 18px;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .feature-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          transition: all 0.3s;
        }
        .feature-card:hover {
          border-color: rgba(0,212,170,0.3);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.2);
        }
        .feature-icon {
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
        .feature-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .feature-card p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          .features-title {
            font-size: 30px;
          }
        }
      `}</style>

      <section className="features" id="features">
        <div className="container">
          <div className="features-header animate-on-scroll">
            <p className="features-label">Features</p>
            <h2 className="features-title">Everything you need to import smarter</h2>
            <p className="features-sub">
              From tracking shipments to calculating tariffs, Supploxi handles the complexity so you can focus on growing your business.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card animate-on-scroll">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
