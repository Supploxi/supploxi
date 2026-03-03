import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Section301Tariffs2026() {
  return (
    <>
      <Head>
        <title>How Section 301 Tariffs Are Reshaping E-Commerce in 2026 — Supploxi Blog</title>
        <meta name="description" content="With tariffs on Chinese goods reaching historic highs, US importers are rethinking their supply chains. Here's what you need to know to protect your margins." />
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
          background: rgba(0,212,170,0.15);
          color: var(--accent);
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
        .tariff-table {
          width: 100%;
          border-collapse: collapse;
          margin: 24px 0;
          font-size: 14px;
        }
        .tariff-table th, .tariff-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--border);
        }
        .tariff-table th {
          background: var(--surface);
          font-weight: 600;
          color: var(--text);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .tariff-table td {
          color: var(--text-dim);
        }
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
          .tariff-table { font-size: 12px; }
          .tariff-table th, .tariff-table td { padding: 8px 10px; }
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
            <span className="article-category">Tariffs &amp; Trade</span>
            <span className="article-date">February 2026</span>
          </div>
          <h1>How Section 301 Tariffs Are Reshaping E-Commerce in 2026</h1>
          <p className="subtitle">With tariffs on Chinese goods reaching historic highs, US importers are rethinking their supply chains. Here&apos;s what you need to know to protect your margins and stay competitive.</p>
        </div>
      </section>

      <section className="article-content">
        <div className="container">
          <h2>What Are Section 301 Tariffs?</h2>
          <p>
            Section 301 of the Trade Act of 1974 gives the US Trade Representative (USTR) authority to impose tariffs on countries engaging in unfair trade practices. Since 2018, these tariffs have primarily targeted goods imported from China — and in 2025-2026, they&apos;ve reached their highest levels yet.
          </p>
          <p>
            For e-commerce sellers sourcing from China, this means an additional <strong>25% to 100%</strong> on top of standard customs duties for many product categories. If you&apos;re not accounting for these in your landed cost calculations, you&apos;re likely losing money on every sale.
          </p>

          <h2>Current Tariff Rates (2026)</h2>
          <p>Here&apos;s a snapshot of the current Section 301 tariff rates for categories most relevant to e-commerce sellers:</p>

          <table className="tariff-table">
            <thead>
              <tr>
                <th>Product Category</th>
                <th>Section 301 Rate</th>
                <th>Effective Date</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Electric vehicles &amp; batteries</td><td>100%</td><td>Sep 2024</td></tr>
              <tr><td>Solar cells &amp; modules</td><td>50%</td><td>Sep 2024</td></tr>
              <tr><td>Semiconductors</td><td>50%</td><td>Jan 2025</td></tr>
              <tr><td>Steel &amp; aluminum products</td><td>25%</td><td>Sep 2024</td></tr>
              <tr><td>Consumer electronics</td><td>25%</td><td>Aug 2024</td></tr>
              <tr><td>Textiles &amp; apparel</td><td>25%</td><td>Aug 2024</td></tr>
              <tr><td>Home goods &amp; furniture</td><td>25%</td><td>Aug 2024</td></tr>
              <tr><td>Toys &amp; games</td><td>25%</td><td>Aug 2024</td></tr>
            </tbody>
          </table>

          <div className="callout">
            <p><strong>Important:</strong> These rates are <em>in addition</em> to regular customs duties. A product with a 5% MFN duty and a 25% Section 301 tariff has a total duty rate of 30%.</p>
          </div>

          <h2>The De Minimis Loophole Is Closing</h2>
          <p>
            For years, the $800 de minimis threshold allowed small shipments to enter the US duty-free — a massive advantage for direct-from-China e-commerce models. In 2025, the USTR announced that Section 301 tariffs now apply to <strong>all shipments regardless of value</strong>, effectively closing this loophole for Chinese goods.
          </p>
          <p>
            This means platforms and sellers who relied on direct shipping from Chinese warehouses now face the same tariff burden as traditional importers. The playing field is leveling — but costs are rising for everyone.
          </p>

          <h2>5 Strategies to Protect Your Margins</h2>

          <h3>1. Know Your HTS Codes</h3>
          <p>
            Your Harmonized Tariff Schedule (HTS) code determines your duty rate. Many sellers use generic codes and end up overpaying. Work with a customs broker to ensure your products are classified under the most accurate — and favorable — codes available.
          </p>

          <h3>2. Calculate True Landed Cost</h3>
          <p>
            Your landed cost isn&apos;t just product price + shipping. It includes customs duties, Section 301 tariffs, freight insurance, port fees, and inland transportation. A product that looks profitable at FOB price might be a money-loser once all costs are in.
          </p>

          <h3>3. Diversify Your Supply Chain</h3>
          <p>
            Consider sourcing from countries not subject to Section 301 tariffs — Vietnam, India, Thailand, and Mexico are popular alternatives. This isn&apos;t always straightforward (quality, lead times, MOQs may differ), but even partial diversification reduces tariff exposure.
          </p>

          <h3>4. Use Foreign Trade Zones (FTZs)</h3>
          <p>
            FTZs allow you to defer, reduce, or eliminate customs duties on imported goods. If you&apos;re re-exporting or assembling products in the US, an FTZ can meaningfully reduce your tariff burden.
          </p>

          <h3>5. Automate Tariff Calculations</h3>
          <p>
            Manual tariff calculations are error-prone and time-consuming. Tools that automatically apply the correct Section 301 rates to your purchase orders eliminate guesswork and ensure your margin calculations are always accurate.
          </p>

          <div className="cta-box">
            <h3>Stop Guessing Your Tariff Costs</h3>
            <p>Supploxi automatically calculates Section 301 tariffs on every Purchase Order — so you always know your real landed cost before you buy.</p>
            <a href="https://app.supploxi.com/signup" className="cta-btn">Start Free Trial</a>
          </div>

          <h2>What&apos;s Coming Next</h2>
          <p>
            The tariff landscape continues to evolve. The USTR conducts periodic reviews, and additional product categories could be added or rates adjusted. Staying informed is critical — a tariff change of just 5% can flip a profitable product into a loss-maker.
          </p>
          <p>
            We recommend reviewing your product catalog quarterly against the latest HTS schedule and Section 301 lists. Bookmark the <a href="https://ustr.gov/issue-areas/enforcement/section-301-investigations" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>USTR Section 301 page</a> for official updates.
          </p>

          <h2>Key Takeaways</h2>
          <ul>
            <li>Section 301 tariffs add 25-100% on top of regular duties for Chinese goods</li>
            <li>The de minimis exemption no longer applies to Section 301 products</li>
            <li>Accurate HTS classification can save thousands per year</li>
            <li>Landed cost calculation must include all tariffs to reflect true margins</li>
            <li>Supply chain diversification is a long-term hedge, not an overnight fix</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}