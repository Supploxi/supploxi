export default function LogoBar() {
  return (
    <>
      <style jsx>{`
        .logobar {
          padding: 60px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .logobar-inner {
          text-align: center;
        }
        .logobar-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          margin-bottom: 32px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .logos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        .logo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.4;
          transition: opacity 0.3s;
        }
        .logo-item:first-child {
          opacity: 0.6;
        }
        .logo-item:hover {
          opacity: 0.8;
        }
        .logo-item svg {
          height: 36px;
          width: auto;
        }
        .logo-item img {
          height: 36px;
          width: auto;
        }
        .logo-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-dim);
        }
        .logo-soon {
          font-size: 11px;
          color: var(--text-muted);
          font-style: italic;
        }
        .logobar-note {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 24px;
        }
        @media (max-width: 768px) {
          .logos {
            gap: 40px;
          }
        }
      `}</style>

      <section className="logobar animate-on-scroll">
        <div className="container">
          <div className="logobar-inner">
            <p className="logobar-title">Integrates with the tools you already use</p>
            <div className="logos">
              <div className="logo-item" style={{opacity: 0.6}}>
                <img src="/images/shopify.png" alt="Shopify" style={{height: '40px', objectFit: 'contain'}} />
                <span className="logo-name">Shopify</span>
              </div>
              <div className="logo-item">
                <img src="/images/woocommerce.png" alt="WooCommerce" style={{height: '40px', objectFit: 'contain', opacity: 0.8}} />
                <span className="logo-name">WooCommerce</span>
                <span className="logo-soon">Coming Soon</span>
              </div>
              <div className="logo-item">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
                <span className="logo-name">BigCommerce</span>
                <span className="logo-soon">Coming Soon</span>
              </div>
            </div>
            <p className="logobar-note">More integrations coming soon</p>
          </div>
        </div>
      </section>
    </>
  );
}
