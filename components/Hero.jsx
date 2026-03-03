export default function Hero() {
  return (
    <>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 64px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(0,212,170,0.03) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border: 1px solid rgba(0,212,170,0.3);
          border-radius: 100px;
          color: var(--accent);
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 24px;
          animation: fadeIn 0.6s ease;
        }
        .hero-badge svg {
          width: 16px;
          height: 16px;
        }
        h1 {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -2px;
          margin-bottom: 24px;
          animation: fadeInUp 0.8s ease;
        }
        h1 span {
          color: var(--accent);
        }
        .hero-sub {
          font-size: 18px;
          line-height: 1.7;
          color: var(--text-muted);
          max-width: 520px;
          margin-bottom: 32px;
          animation: fadeInUp 0.8s ease 0.1s both;
        }
        .social-proof {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          animation: fadeInUp 0.8s ease 0.2s both;
        }
        .avatars {
          display: flex;
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid var(--bg);
          margin-left: -8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          color: var(--bg);
        }
        .avatar:first-child {
          margin-left: 0;
        }
        .proof-text {
          font-size: 14px;
          color: var(--text-dim);
        }
        .proof-text strong {
          color: var(--text);
        }
        .stars {
          color: #fbbf24;
          font-size: 14px;
          letter-spacing: 2px;
        }
        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          animation: fadeInUp 0.8s ease 0.3s both;
        }
        .btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          font-size: 16px;
          font-weight: 600;
          color: var(--bg);
          background: var(--accent);
          border-radius: 10px;
          transition: all 0.2s;
        }
        .btn-cta:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,212,170,0.25);
        }
        .btn-cta svg {
          width: 18px;
          height: 18px;
          transition: transform 0.2s;
        }
        .btn-cta:hover svg {
          transform: translateX(3px);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          font-size: 16px;
          font-weight: 500;
          color: var(--text-dim);
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 10px;
          transition: all 0.2s;
        }
        .btn-secondary:hover {
          border-color: rgba(255,255,255,0.15);
          color: var(--text);
        }
        .btn-secondary svg {
          width: 18px;
          height: 18px;
        }
        .hero-note {
          font-size: 13px;
          color: var(--text-muted);
          animation: fadeInUp 0.8s ease 0.4s both;
        }
        .hero-visual {
          animation: fadeInUp 1s ease 0.3s both;
        }
        .mockup {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          animation: float 6s ease-in-out infinite;
        }
        .mockup-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px 16px;
          background: var(--surface2);
          border-bottom: 1px solid var(--border);
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-r { background: #ff5f57; }
        .dot-y { background: #ffbd2e; }
        .dot-g { background: #28ca41; }
        .mockup-content {
          padding: 20px;
        }
        .mockup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .mockup-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
        }
        .mockup-badge {
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 600;
          border-radius: 6px;
          background: rgba(0,212,170,0.1);
          color: var(--accent);
        }
        .shipment-card {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px;
          margin-bottom: 10px;
        }
        .shipment-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .shipment-row:last-child {
          margin-bottom: 0;
        }
        .shipment-id {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }
        .shipment-route {
          font-size: 12px;
          color: var(--text-muted);
        }
        .status {
          padding: 3px 8px;
          font-size: 11px;
          font-weight: 600;
          border-radius: 4px;
        }
        .status-transit {
          background: rgba(59,130,246,0.15);
          color: #60a5fa;
        }
        .status-customs {
          background: rgba(251,191,36,0.15);
          color: #fbbf24;
        }
        .status-delivered {
          background: rgba(0,212,170,0.15);
          color: var(--accent);
        }
        .progress-bar {
          height: 4px;
          background: var(--surface);
          border-radius: 2px;
          margin-top: 8px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 0.3s;
        }
        .progress-65 {
          width: 65%;
          background: #60a5fa;
        }
        .progress-40 {
          width: 40%;
          background: #fbbf24;
        }
        .progress-100 {
          width: 100%;
          background: var(--accent);
        }
        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
          margin-top: 16px;
        }
        .stat {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px;
          text-align: center;
        }
        .stat-value {
          font-size: 20px;
          font-weight: 700;
          color: var(--text);
        }
        .stat-label {
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 2px;
        }
        @media (max-width: 1024px) {
          h1 { font-size: 48px; }
        }
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          h1 {
            font-size: 38px;
            letter-spacing: -1px;
          }
          .hero-sub {
            margin: 0 auto 32px;
            font-size: 16px;
          }
          .social-proof {
            justify-content: center;
          }
          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
          .hero-note {
            text-align: center;
          }
          .hero-visual {
            order: -1;
          }
          .stats-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                  <line x1="4" y1="22" x2="4" y2="15"/>
                </svg>
                Built for US importers
              </div>

              <h1>
                Stop Managing<br />
                Your Chinese<br />
                Suppliers on<br />
                <span>Spreadsheets.</span>
              </h1>

              <p className="hero-sub">
                Supploxi is the all-in-one operations platform for US e-commerce sellers who import from China. Track shipments automatically, calculate tariffs in real time, and never run out of stock again.
              </p>

              <div className="social-proof">
                <div className="avatars">
                  <div className="avatar" style={{background:'#00d4aa'}}>J</div>
                  <div className="avatar" style={{background:'#60a5fa'}}>S</div>
                  <div className="avatar" style={{background:'#f472b6'}}>M</div>
                  <div className="avatar" style={{background:'#fbbf24'}}>A</div>
                  <div className="avatar" style={{background:'#a78bfa'}}>R</div>
                </div>
                <div>
                  <div className="proof-text"><strong>Trusted by 500+ US importers</strong></div>
                  <div className="stars">★★★★★</div>
                </div>
              </div>

              <div className="hero-buttons">
                <a href="https://app.supploxi.com/login" className="btn-cta">
                  Start Free Trial
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
                <a href="#how-it-works" className="btn-secondary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  See how it works
                </a>
              </div>

              <p className="hero-note">14-day free trial · No credit card required · Cancel anytime</p>
            </div>

            <div className="hero-visual">
              <div className="mockup">
                <div className="mockup-bar">
                  <span className="dot dot-r" />
                  <span className="dot dot-y" />
                  <span className="dot dot-g" />
                </div>
                <div className="mockup-content">
                  <div className="mockup-header">
                    <span className="mockup-title">Shipment Tracking</span>
                    <span className="mockup-badge">3 Active</span>
                  </div>

                  <div className="shipment-card">
                    <div className="shipment-row">
                      <span className="shipment-id">SF1089234CN</span>
                      <span className="status status-transit">In Transit</span>
                    </div>
                    <div className="shipment-route">Shenzhen → Los Angeles</div>
                    <div className="progress-bar"><div className="progress-fill progress-65" /></div>
                  </div>

                  <div className="shipment-card">
                    <div className="shipment-row">
                      <span className="shipment-id">YT2045678CN</span>
                      <span className="status status-customs">US Customs</span>
                    </div>
                    <div className="shipment-route">Yiwu → New York</div>
                    <div className="progress-bar"><div className="progress-fill progress-40" /></div>
                  </div>

                  <div className="shipment-card">
                    <div className="shipment-row">
                      <span className="shipment-id">EMS9087234</span>
                      <span className="status status-delivered">Delivered</span>
                    </div>
                    <div className="shipment-route">Guangzhou → Miami</div>
                    <div className="progress-bar"><div className="progress-fill progress-100" /></div>
                  </div>

                  <div className="stats-row">
                    <div className="stat">
                      <div className="stat-value">24</div>
                      <div className="stat-label">Active Orders</div>
                    </div>
                    <div className="stat">
                      <div className="stat-value">$12.4k</div>
                      <div className="stat-label">In Transit</div>
                    </div>
                    <div className="stat">
                      <div className="stat-value">98%</div>
                      <div className="stat-label">On Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
