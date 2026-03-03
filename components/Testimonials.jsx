const testimonials = [
  {
    quote: 'I was managing 18 suppliers on a Google Sheet. Supploxi replaced my entire spreadsheet setup in one afternoon. The automatic tracking alone saves me 2 hours every week.',
    name: 'Jason M.',
    role: 'Sporting Goods Importer, Texas',
    initials: 'JM',
    color: '#60a5fa',
  },
  {
    quote: "The tariff calculator is exactly what I needed. With Section 301 duties changing constantly, I finally know my real margins before I place an order.",
    name: 'Sarah K.',
    role: 'Home Decor Seller, California',
    initials: 'SK',
    color: '#f472b6',
  },
  {
    quote: 'Setup took 20 minutes. Connected Shopify, added my 3 suppliers, and my first shipments were already being tracked. Incredibly clean interface.',
    name: 'Mike R.',
    role: 'Electronics Importer, Florida',
    initials: 'MR',
    color: '#00d4aa',
  },
];

export default function Testimonials() {
  return (
    <>
      <style jsx>{`
        .testimonials {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .test-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .test-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }
        .test-title {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }
        .test-sub {
          font-size: 18px;
          color: var(--text-muted);
        }
        .test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .test-card {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s;
        }
        .test-card:hover {
          border-color: rgba(255,255,255,0.1);
          transform: translateY(-4px);
        }
        .quote-icon {
          color: var(--accent);
          font-size: 32px;
          line-height: 1;
          margin-bottom: 16px;
          opacity: 0.5;
        }
        .test-quote {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-dim);
          margin-bottom: 24px;
        }
        .test-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .test-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #0a0c14;
          flex-shrink: 0;
        }
        .test-info {
          flex: 1;
        }
        .test-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
        }
        .test-role {
          font-size: 13px;
          color: var(--text-muted);
        }
        .test-stars {
          color: #fbbf24;
          font-size: 14px;
          letter-spacing: 2px;
          margin-top: 4px;
        }
        @media (max-width: 1024px) {
          .test-grid {
            grid-template-columns: 1fr;
            max-width: 520px;
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .test-title {
            font-size: 30px;
          }
        }
      `}</style>

      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="test-header animate-on-scroll">
            <p className="test-label">Testimonials</p>
            <h2 className="test-title">Loved by importers across the US</h2>
            <p className="test-sub">See why sellers trust Supploxi for their supply chain</p>
          </div>
          <div className="test-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="test-card animate-on-scroll">
                <div className="quote-icon">&ldquo;</div>
                <p className="test-quote">{t.quote}</p>
                <div className="test-author">
                  <div className="test-avatar" style={{ background: t.color }}>{t.initials}</div>
                  <div className="test-info">
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.role}</div>
                    <div className="test-stars">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
