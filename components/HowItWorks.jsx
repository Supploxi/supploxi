const steps = [
  {
    num: '01',
    title: 'Connect your store',
    desc: 'Link your Shopify store with one click. We sync your products and orders automatically.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Add your suppliers',
    desc: 'Enter your Chinese suppliers, their lead times, and product costs. Takes 5 minutes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Start tracking shipments',
    desc: 'Add tracking numbers to your orders. We update the status automatically every few hours.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Get smart alerts',
    desc: 'Receive reorder alerts before you run out of stock. See tariff impacts on your margins in real time.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <>
      <style jsx>{`
        .hiw {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .hiw-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .hiw-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }
        .hiw-title {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }
        .hiw-sub {
          font-size: 18px;
          color: var(--text-muted);
        }
        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
        }
        .step {
          text-align: center;
          padding: 0 20px;
          position: relative;
        }
        .step-num-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          position: relative;
        }
        .step-num {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,212,170,0.08);
          border: 2px solid rgba(0,212,170,0.2);
          border-radius: 50%;
          font-size: 16px;
          font-weight: 700;
          color: var(--accent);
          position: relative;
          z-index: 2;
        }
        .step-connector {
          position: absolute;
          top: 50%;
          left: calc(50% + 32px);
          right: calc(-50% + 32px);
          height: 2px;
          background: linear-gradient(90deg, rgba(0,212,170,0.3), rgba(0,212,170,0.1));
          z-index: 1;
        }
        .step:last-child .step-connector {
          display: none;
        }
        .step-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .step h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .step p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 1024px) {
          .steps {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
          .step-connector {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .steps {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hiw-title {
            font-size: 30px;
          }
        }
      `}</style>

      <section className="hiw" id="how-it-works">
        <div className="container">
          <div className="hiw-header animate-on-scroll">
            <p className="hiw-label">How it works</p>
            <h2 className="hiw-title">From chaos to clarity in 4 steps</h2>
            <p className="hiw-sub">Most importers are up and running in under 30 minutes</p>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div key={i} className="step animate-on-scroll">
                <div className="step-num-wrap">
                  <div className="step-num">{s.num}</div>
                  <div className="step-connector" />
                </div>
                <div className="step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
