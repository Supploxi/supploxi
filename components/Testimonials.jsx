export default function Testimonials() {
  const metrics = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      value: 'Automatic',
      desc: 'Shipment tracking — no manual checking',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="16" y1="14" x2="16" y2="18" />
          <line x1="8" y1="10" x2="8" y2="10" />
          <line x1="12" y1="10" x2="12" y2="10" />
          <line x1="16" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="8" y2="14" />
          <line x1="12" y1="14" x2="12" y2="14" />
          <line x1="8" y1="18" x2="8" y2="18" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      ),
      value: 'Real-time',
      desc: 'Section 301 tariff calculations',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      value: '14-day',
      desc: 'Free trial, no credit card required',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      value: 'One platform',
      desc: 'Orders, suppliers, inventory, financials',
    },
  ];

  return (
    <>
      <style jsx>{`
        .metrics-section {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .metrics-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .metrics-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }
        .metrics-title {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }
        .metrics-sub {
          font-size: 18px;
          color: var(--text-muted);
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 720px;
          margin: 0 auto;
        }
        .metric-card {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px 32px;
          transition: all 0.3s;
        }
        .metric-card:hover {
          border-color: rgba(0,212,170,0.3);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.2);
        }
        .metric-icon {
          color: var(--accent);
          margin-bottom: 20px;
        }
        .metric-value {
          font-size: 32px;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: -0.5px;
          margin-bottom: 8px;
        }
        .metric-desc {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.5;
        }
        @media (max-width: 640px) {
          .metrics-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
          .metrics-title {
            font-size: 30px;
          }
        }
      `}</style>

      <section className="metrics-section" id="testimonials">
        <div className="container">
          <div className="metrics-header animate-on-scroll">
            <p className="metrics-label">Why Supploxi</p>
            <h2 className="metrics-title">Built for serious importers</h2>
            <p className="metrics-sub">Everything you need to run your import business — in one place.</p>
          </div>
          <div className="metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className="metric-card animate-on-scroll">
                <div className="metric-icon">{m.icon}</div>
                <div className="metric-value">{m.value}</div>
                <div className="metric-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
