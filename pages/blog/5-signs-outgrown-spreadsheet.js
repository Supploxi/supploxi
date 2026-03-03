import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function FiveSignsOutgrownSpreadsheet() {
  return (
    <>
      <Head>
        <title>5 Signs You&apos;ve Outgrown Your Spreadsheet — Supploxi Blog</title>
        <meta name="description" content="Spreadsheets are great — until they're not. If any of these signs sound familiar, it might be time for a dedicated operations platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx>{`
        .article-hero {
          padding: 140px 0 40px;
          text-align: center;
        }
        .article-hero .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 24px;
          transition: opacity 0.2s;
        }
        .article-hero .back-link:hover { opacity: 0.8; }
        .article-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .article-category {
          font-size: 12px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: rgba(139,92,246,0.15);
          color: #a78bfa;
        }
        .article-date {
          font-size: 13px;
          color: var(--text-muted);
        }
        .article-hero h1 {
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.2;
          max-width: 800px;
          margin: 0 auto 16px;
        }
        .article-hero .subtitle {
          font-size: 18px;
          color: var(--text-muted);
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .article-content {
          max-width: 720px;
          margin: 0 auto;
          padding: 40px 0 80px;
        }
        .article-content h2 {
          font-size: 26px;
          font-weight: 700;
          margin: 48px 0 16px;
          letter-spacing: -0.5px;
        }
        .article-content h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 32px 0 12px;
        }
        .article-content p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-dim);
          margin-bottom: 20px;
        }
        .article-content ul, .article-content ol {
          padding-left: 24px;
          margin-bottom: 20px;
        }
        .article-content li {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-dim);
          margin-bottom: 8px;
        }
        .article-content strong {
          color: var(--text);
          font-weight: 600;
        }
        .callout {
          background: var(--surface);
          border-left: 4px solid var(--accent);
          padding: 20px 24px;
          border-radius: 0 12px 12px 0;
          margin: 28px 0;
        }
        .callout p {
          margin-bottom: 0;
          font-size: 15px;
        }
        .sign-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px;
          margin: 32px 0;
        }
        .sign-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(139,92,246,0.15);
          color: #a78bfa;
          font-size: 16px;
          font-weight: 800;
          border-radius: 10px;
          margin-bottom: 16px;
        }
        .sign-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 12px;
          color: var(--text);
        }
        .sign-card p {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-dim);
          margin: 0;
        }
        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 32px 0;
        }
        .comparison-col {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px;
        }
        .comparison-col h4 {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .comparison-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .comparison-col li {
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-dim);
          padding-left: 20px;
          position: relative;
          margin-bottom: 6px;
        }
        .comparison-col li::before {
          position: absolute;
          left: 0;
        }
        .col-spreadsheet li::before { content: '\u274C'; font-size: 11px; }
        .col-platform li::before { content: '\u2713'; color: var(--accent); font-weight: 700; font-size: 13px; }
        .cta-box {
          background: linear-gradient(135deg, rgba(0,212,170,0.1), rgba(0,212,170,0.05));
          border: 1px solid rgba(0,212,170,0.2);
          border-radius: 16px;
          padding: 40px;
          text-align: center;
          margin: 48px 0;
        }
        .cta-box h3 {
          font-size: 22px;
          margin: 0 0 8px;
        }
        .cta-box p {
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        .cta-btn {
          display: inline-block;
          padding: 12px 28px;
          font-size: 15px;
          font-weight: 600;
          color: var(--bg);
          background: var(--accent);
          border-radius: 8px;
          transition: background 0.2s;
        }
        .cta-btn:hover { background: var(--accent-hover); }
        @media (max-width: 768px) {
          .article-hero h1 { font-size: 28px; }
          .article-content { padding: 24px 0 60px; }
          .cta-box { padding: 28px 20px; }
          .comparison-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />

      <section className="article-hero">
        <div className="container">
          <Link href="/blog" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Blog
          </Link>
          <div className="article-meta">
            <span className="article-category">Productivity</span>
            <span className="article-date">December 2025</span>
          </div>
          <h1>5 Signs You&apos;ve Outgrown Your Spreadsheet</h1>
          <p className="subtitle">Spreadsheets are great — until they&apos;re not. If any of these signs sound familiar, it might be time for a dedicated operations platform.</p>
        </div>
      </section>

      <section className="article-content">
        <div className="container">
          <p>
            Every e-commerce business starts with spreadsheets. They&apos;re free, flexible, and everyone knows how to use them. For tracking 10 products from 2 suppliers, a Google Sheet works perfectly well.
          </p>
          <p>
            But there&apos;s a tipping point. As your catalog grows, your team expands, and your supply chain gets more complex, spreadsheets go from being your best tool to your biggest bottleneck. Here are the five signs you&apos;ve crossed that line.
          </p>

          <div className="sign-card">
            <div className="sign-number">1</div>
            <h3>You Have Multiple Versions of &quot;The Truth&quot;</h3>
            <p>
              Your inventory numbers are in one sheet, your supplier contacts in another, your order tracking in a third, and your financial projections in a fourth. When someone asks &quot;how many units of SKU-1234 do we have?&quot; — three people check three different files and get three different answers. You spend more time reconciling data than using it.
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-number">2</div>
            <h3>Manual Updates Are Eating Your Week</h3>
            <p>
              Every Monday you spend 2 hours copying Shopify order numbers into your tracking sheet. Every time a shipment status changes, someone has to manually update three different tabs. You&apos;ve built complex VLOOKUP formulas that break whenever someone inserts a row. What used to take 30 minutes now takes half a day — and the data is still outdated by the time you finish.
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-number">3</div>
            <h3>You Can&apos;t See Your Real Margins</h3>
            <p>
              You know your product cost and selling price, but your actual profit per order is a mystery. Tariffs, shipping costs, platform fees, and returns aren&apos;t connected to your order data. To calculate true margins, you&apos;d need to cross-reference 4 different sheets — so you don&apos;t. You make buying decisions based on gut feel instead of real numbers.
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-number">4</div>
            <h3>Your Team Is Stepping on Each Other</h3>
            <p>
              Two people edit the same sheet at the same time and someone&apos;s changes get overwritten. Your VA accidentally deletes a formula and nobody notices for a week. You want to give your operations manager access to inventory data but not financial data — impossible in a shared spreadsheet. As your team grows, the spreadsheet becomes a liability, not an asset.
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-number">5</div>
            <h3>You&apos;ve Had a Costly Mistake</h3>
            <p>
              You ordered 5,000 units of a product you already had 3,000 of in stock — because the inventory sheet wasn&apos;t updated. You missed a tariff change and your entire last shipment was priced below cost. A decimal error in your landed cost formula went unnoticed for months. These aren&apos;t hypothetical — they&apos;re the real-world consequences of outgrowing your tools.
            </p>
          </div>

          <h2>Spreadsheet vs. Dedicated Platform</h2>
          <p>Here&apos;s what changes when you move from spreadsheets to a purpose-built operations tool:</p>

          <div className="comparison-grid">
            <div className="comparison-col col-spreadsheet">
              <h4>Spreadsheets</h4>
              <ul>
                <li>Data scattered across multiple files</li>
                <li>Manual data entry and updates</li>
                <li>No role-based access control</li>
                <li>Formulas break silently</li>
                <li>No audit trail for changes</li>
                <li>Can&apos;t connect to Shopify or carriers</li>
                <li>Margins calculated separately (if at all)</li>
              </ul>
            </div>
            <div className="comparison-col col-platform">
              <h4>Operations Platform</h4>
              <ul>
                <li>Single source of truth for all data</li>
                <li>Automatic sync with Shopify &amp; carriers</li>
                <li>Role-based permissions (Admin, Operator, Viewer)</li>
                <li>Built-in validations prevent errors</li>
                <li>Full audit trail on every change</li>
                <li>Live shipment tracking &amp; order sync</li>
                <li>Real-time P&amp;L per order</li>
              </ul>
            </div>
          </div>

          <h2>When to Make the Switch</h2>
          <p>
            There&apos;s no magic number, but here are some practical guidelines:
          </p>
          <ul>
            <li><strong>50+ SKUs:</strong> Manual tracking becomes unsustainable</li>
            <li><strong>2+ team members:</strong> Collaboration in spreadsheets gets messy</li>
            <li><strong>$10K+/mo in imports:</strong> The cost of errors exceeds the cost of proper tooling</li>
            <li><strong>3+ suppliers:</strong> Tracking POs, shipments, and payments across multiple suppliers is spreadsheet hell</li>
            <li><strong>Any costly mistake:</strong> If a spreadsheet error has already cost you money, the ROI on switching is immediate</li>
          </ul>

          <div className="callout">
            <p><strong>The real cost of a spreadsheet isn&apos;t $0.</strong> It&apos;s the hours spent on manual updates, the margin you lose to calculation errors, and the decisions you can&apos;t make because the data isn&apos;t there.</p>
          </div>

          <h2>Making the Transition</h2>
          <p>
            Switching from spreadsheets doesn&apos;t have to be all-or-nothing. The best approach is to start with one workflow — like Purchase Orders or inventory tracking — and expand from there. Most teams see immediate value just from having a single source of truth.
          </p>
          <p>
            Look for a platform that:
          </p>
          <ul>
            <li>Imports your existing data (don&apos;t start from scratch)</li>
            <li>Connects to your existing tools (Shopify, shipping carriers)</li>
            <li>Has a short learning curve (your team should be productive in days, not weeks)</li>
            <li>Offers a free trial (so you can validate before committing)</li>
          </ul>

          <div className="cta-box">
            <h3>Ready to Ditch the Spreadsheet?</h3>
            <p>Supploxi replaces your scattered spreadsheets with one connected platform — suppliers, orders, inventory, shipments, and finances in one place.</p>
            <a href="https://app.supploxi.com/signup" className="cta-btn">Start Free 14-Day Trial</a>
          </div>

          <h2>Key Takeaways</h2>
          <ul>
            <li>Spreadsheets work great early on but become liabilities as you scale</li>
            <li>Data fragmentation, manual updates, and lack of access control are the top pain points</li>
            <li>A single costly mistake often justifies the switch on its own</li>
            <li>Start with one workflow and expand — you don&apos;t have to migrate everything at once</li>
            <li>The best time to switch is before the next expensive mistake, not after</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}