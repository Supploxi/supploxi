import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    monthly: 19,
    annual: 12.67,
    features: [
      '50 orders/month',
      '10 suppliers',
      '50 auto-trackings/month',
      '2 team members',
      'Shopify integration',
      'Purchase Orders',
      'Email support',
    ],
    cta: 'Start free trial',
    popular: false,
  },
  {
    name: 'Growth',
    monthly: 49,
    annual: 32.67,
    features: [
      '250 orders/month',
      '30 suppliers',
      '250 auto-trackings/month',
      '5 team members',
      'Everything in Starter +',
      'Inventory Management',
      'Financials & Reports',
      'Priority support',
    ],
    cta: 'Start free trial',
    popular: true,
  },
  {
    name: 'Scale',
    monthly: 99,
    annual: 66,
    features: [
      'Unlimited everything',
      'Unlimited team members',
      'Everything in Growth +',
      'Early access to new features',
      'Priority support',
    ],
    cta: 'Start free trial',
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <style jsx>{`
        .pricing {
          background: var(--bg);
        }
        .pricing-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .pricing-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }
        .pricing-title {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }
        .pricing-sub {
          font-size: 18px;
          color: var(--text-muted);
        }
        .toggle-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
        }
        .toggle-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          cursor: pointer;
        }
        .toggle-label.active {
          color: var(--text);
        }
        .toggle {
          width: 48px;
          height: 26px;
          background: var(--surface2);
          border-radius: 13px;
          padding: 3px;
          cursor: pointer;
          border: 1px solid var(--border);
          transition: background 0.3s;
          position: relative;
        }
        .toggle.on {
          background: rgba(0,212,170,0.2);
          border-color: rgba(0,212,170,0.3);
        }
        .toggle-knob {
          width: 20px;
          height: 20px;
          background: var(--accent);
          border-radius: 50%;
          transition: transform 0.3s;
        }
        .toggle.on .toggle-knob {
          transform: translateX(22px);
        }
        .save-badge {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          background: rgba(0,212,170,0.1);
          padding: 4px 10px;
          border-radius: 100px;
          border: 1px solid rgba(0,212,170,0.2);
        }
        .plans {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }
        .plan-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px;
          position: relative;
          transition: all 0.3s;
        }
        .plan-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.2);
        }
        .plan-card.popular {
          border-color: rgba(0,212,170,0.4);
          transform: scale(1.02);
          box-shadow: 0 16px 48px rgba(0,212,170,0.1);
        }
        .plan-card.popular:hover {
          transform: scale(1.02) translateY(-4px);
        }
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: var(--bg);
          padding: 4px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .plan-name {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .plan-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 8px;
        }
        .price-dollar {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dim);
          align-self: flex-start;
          margin-top: 8px;
        }
        .price-amount {
          font-size: 48px;
          font-weight: 800;
          letter-spacing: -2px;
        }
        .price-period {
          font-size: 14px;
          color: var(--text-muted);
        }
        .plan-billing {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .plan-features {
          margin-bottom: 32px;
        }
        .plan-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          font-size: 14px;
          color: var(--text-dim);
        }
        .check {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          color: var(--accent);
        }
        .plan-btn {
          display: block;
          width: 100%;
          padding: 14px;
          font-size: 15px;
          font-weight: 600;
          text-align: center;
          border-radius: 10px;
          transition: all 0.2s;
        }
        .plan-btn-ghost {
          color: var(--text);
          background: var(--surface2);
          border: 1px solid var(--border);
        }
        .plan-btn-ghost:hover {
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
        }
        .plan-btn-accent {
          color: var(--bg);
          background: var(--accent);
        }
        .plan-btn-accent:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0,212,170,0.25);
        }
        .pricing-note {
          text-align: center;
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 40px;
        }
        @media (max-width: 1024px) {
          .plans {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }
          .plan-card.popular {
            transform: none;
          }
          .plan-card.popular:hover {
            transform: translateY(-4px);
          }
        }
        @media (max-width: 768px) {
          .pricing-title {
            font-size: 30px;
          }
        }
      `}</style>

      <section className="pricing" id="pricing">
        <div className="container">
          <div className="pricing-header animate-on-scroll">
            <p className="pricing-label">Pricing</p>
            <h2 className="pricing-title">Simple, transparent pricing</h2>
            <p className="pricing-sub">Start free for 14 days. No credit card required.</p>
          </div>

          <div className="toggle-wrap animate-on-scroll">
            <span className={`toggle-label${!annual ? ' active' : ''}`} onClick={() => setAnnual(false)}>Monthly</span>
            <button className={`toggle${annual ? ' on' : ''}`} onClick={() => setAnnual(!annual)} aria-label="Toggle billing">
              <div className="toggle-knob" />
            </button>
            <span className={`toggle-label${annual ? ' active' : ''}`} onClick={() => setAnnual(true)}>Annual</span>
            <span className="save-badge">Save 33%</span>
          </div>

          <div className="plans">
            {plans.map((plan) => (
              <div key={plan.name} className={`plan-card animate-on-scroll${plan.popular ? ' popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  <span className="price-dollar">$</span>
                  <span className="price-amount">{annual ? plan.annual : plan.monthly}</span>
                  <span className="price-period">/mo</span>
                </div>
                <div className="plan-billing">
                  {annual ? `Billed $${(plan.annual * 12).toFixed(0)}/year` : 'Billed monthly'}
                </div>
                <div className="plan-features">
                  {plan.features.map((f, i) => (
                    <div key={i} className="plan-feature">
                      <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <a
                  href="https://app.supploxi.com/login"
                  className={`plan-btn ${plan.popular ? 'plan-btn-accent' : 'plan-btn-ghost'}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="pricing-note">All plans include a 14-day free trial. Cancel anytime.</p>
        </div>
      </section>
    </>
  );
}
