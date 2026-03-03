export default function CTA() {
  return (
    <>
      <style jsx>{`
        .cta {
          background: var(--surface2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          text-align: center;
          padding: 100px 0;
        }
        .cta-inner {
          max-width: 640px;
          margin: 0 auto;
        }
        .cta-title {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }
        .cta-sub {
          font-size: 18px;
          color: var(--text-muted);
          margin-bottom: 36px;
          line-height: 1.6;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 36px;
          font-size: 18px;
          font-weight: 700;
          color: var(--bg);
          background: var(--accent);
          border-radius: 12px;
          transition: all 0.2s;
        }
        .cta-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0,212,170,0.3);
        }
        .cta-note {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 16px;
        }
        @media (max-width: 768px) {
          .cta-title {
            font-size: 28px;
          }
          .cta-btn {
            font-size: 16px;
            padding: 14px 28px;
          }
        }
      `}</style>

      <section className="cta">
        <div className="container">
          <div className="cta-inner animate-on-scroll">
            <h2 className="cta-title">Start managing your supply chain like a pro.</h2>
            <p className="cta-sub">
              Join hundreds of US importers who replaced their spreadsheets with Supploxi.
            </p>
            <a href="https://app.supploxi.com/login" className="cta-btn">
              Start your free trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <p className="cta-note">14-day free trial · No credit card · Cancel anytime</p>
          </div>
        </div>
      </section>
    </>
  );
}
