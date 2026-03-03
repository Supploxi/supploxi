import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TrueCostOfImporting() {
  return (
    <>
      <Head>
        <title>The True Cost of Importing: A Complete Guide to Landed Cost — Supploxi Blog</title>
        <meta name="description" content="Most sellers only look at the product price. But your real cost includes freight, customs duties, insurance, and handling fees. Here's how to calculate it correctly." />
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
          background: rgba(59,130,246,0.15);
          color: #60a5fa;
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
        .formula-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
          text-align: center;
        }
        .formula-box .formula {
          font-size: 18px;
          font-weight: 700;
          color: var(--accent);
          font-family: 'SF Mono', 'Fira Code', monospace;
          letter-spacing: 0.5px;
        }
        .formula-box .formula-label {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 8px;
        }
        .example-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
        }
        .example-box h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--text);
        }
        .example-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid var(--border);
          font-size: 14px;
        }
        .example-row:last-child {
          border-bottom: none;
          font-weight: 700;
          color: var(--accent);
          padding-top: 12px;
          margin-top: 4px;
          border-top: 2px solid var(--border);
        }
        .example-row span:first-child { color: var(--text-dim); }
        .example-row span:last-child { color: var(--text); font-weight: 600; }
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
          .formula-box .formula { font-size: 14px; }
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
            <span className="article-category">Operations</span>
            <span className="article-date">January 2026</span>
          </div>
          <h1>The True Cost of Importing: A Complete Guide to Landed Cost</h1>
          <p className="subtitle">Most sellers only look at the product price. But your real cost includes freight, customs duties, insurance, and handling fees. Here&apos;s how to calculate it correctly every time.</p>
        </div>
      </section>

      <section className="article-content">
        <div className="container">
          <h2>What Is Landed Cost?</h2>
          <p>
            Landed cost is the <strong>total cost of a product once it arrives at your door</strong> — or your warehouse, your 3PL, or Amazon FBA. It includes everything from the factory gate to the final destination: the product price, shipping, insurance, customs duties, tariffs, and any handling or brokerage fees along the way.
          </p>
          <p>
            If you&apos;re pricing your products based on the FOB (Free on Board) price your supplier quotes, you&apos;re almost certainly underestimating your true cost — and overestimating your margins.
          </p>

          <div className="formula-box">
            <div className="formula">Landed Cost = Product Cost + Freight + Duties + Tariffs + Insurance + Fees</div>
            <div className="formula-label">The complete formula for calculating landed cost</div>
          </div>

          <h2>Breaking Down Each Component</h2>

          <h3>1. Product Cost (FOB Price)</h3>
          <p>
            This is what your supplier charges you per unit. It typically covers manufacturing, packaging, and delivery to the port of origin. Always confirm whether your quoted price is FOB, EXW (Ex Works), or CIF (Cost, Insurance, Freight) — each includes different cost components.
          </p>

          <h3>2. International Freight</h3>
          <p>
            The cost of shipping goods from the origin country to the destination port. This varies dramatically based on:
          </p>
          <ul>
            <li><strong>Mode:</strong> Sea freight (cheapest, slowest), air freight (fastest, most expensive), or express courier</li>
            <li><strong>Volume:</strong> FCL (full container) vs. LCL (less than container) for ocean, or weight-based for air</li>
            <li><strong>Season:</strong> Rates spike during peak shipping season (Aug–Oct) and around Chinese New Year</li>
            <li><strong>Route:</strong> Trans-Pacific rates differ from Asia–Europe or intra-Asia lanes</li>
          </ul>

          <h3>3. Customs Duties</h3>
          <p>
            Every product imported into the US is classified under an HTS (Harmonized Tariff Schedule) code, which determines its duty rate. Standard MFN (Most Favored Nation) duty rates for consumer goods typically range from <strong>0% to 20%</strong>, calculated on the customs value (usually the transaction value plus freight and insurance).
          </p>

          <h3>4. Section 301 Tariffs</h3>
          <p>
            If you&apos;re importing from China, additional Section 301 tariffs of <strong>25% to 100%</strong> apply on top of regular duties. These are the single biggest hidden cost for most e-commerce importers. See our <Link href="/blog/section-301-tariffs-2026" style={{color: 'var(--accent)'}}>Section 301 tariff guide</Link> for current rates.
          </p>

          <h3>5. Insurance</h3>
          <p>
            Cargo insurance typically costs <strong>0.3% to 0.5%</strong> of the declared value. While optional, it&apos;s strongly recommended — one lost or damaged shipment can wipe out months of profit.
          </p>

          <h3>6. Other Fees</h3>
          <p>
            These are easy to forget but add up quickly:
          </p>
          <ul>
            <li><strong>Customs brokerage:</strong> $150–$300 per entry (or percentage-based for complex entries)</li>
            <li><strong>Port handling / drayage:</strong> $300–$800 depending on port and container size</li>
            <li><strong>Warehouse receiving:</strong> Varies by 3PL — often per-unit or per-pallet fees</li>
            <li><strong>Inspection fees:</strong> FDA, CPSC, or other agency inspections when applicable</li>
            <li><strong>Bond fee:</strong> Continuous customs bond ~$300/year or single-entry bond per shipment</li>
          </ul>

          <h2>Real-World Example</h2>
          <p>Let&apos;s say you&apos;re importing 1,000 silicone kitchen utensils from China at $2.50/unit FOB Shenzhen:</p>

          <div className="example-box">
            <h4>Landed Cost Calculation — 1,000 Silicone Utensils</h4>
            <div className="example-row"><span>Product cost (1,000 x $2.50)</span><span>$2,500.00</span></div>
            <div className="example-row"><span>Sea freight (LCL, 0.5 CBM)</span><span>$320.00</span></div>
            <div className="example-row"><span>Cargo insurance (0.4% of $2,500)</span><span>$10.00</span></div>
            <div className="example-row"><span>Customs duty (3.4% of $2,830)</span><span>$96.22</span></div>
            <div className="example-row"><span>Section 301 tariff (25% of $2,830)</span><span>$707.50</span></div>
            <div className="example-row"><span>Customs brokerage</span><span>$175.00</span></div>
            <div className="example-row"><span>Port handling &amp; drayage</span><span>$350.00</span></div>
            <div className="example-row"><span>Warehouse receiving (1,000 x $0.15)</span><span>$150.00</span></div>
            <div className="example-row"><span>Total Landed Cost</span><span>$4,308.72</span></div>
          </div>

          <div className="callout">
            <p><strong>The real unit cost is $4.31 — not $2.50.</strong> That&apos;s a 72% increase over the FOB price. If you were pricing based on the $2.50 product cost alone, you&apos;d be losing money on every unit sold.</p>
          </div>

          <h2>Common Mistakes Sellers Make</h2>
          <ol>
            <li><strong>Ignoring tariffs entirely:</strong> Many sellers don&apos;t realize Section 301 tariffs apply to their products until they get a customs bill</li>
            <li><strong>Using the wrong HTS code:</strong> A misclassification of even one digit can change your duty rate by 10-20%</li>
            <li><strong>Forgetting per-shipment fees:</strong> Brokerage, drayage, and handling fees are fixed costs that hit harder on small orders</li>
            <li><strong>Not factoring in returns:</strong> If your return rate is 10%, your effective landed cost per sold unit is ~11% higher</li>
            <li><strong>Calculating margins on product cost:</strong> Your margin should be calculated on landed cost, not FOB price</li>
          </ol>

          <h2>How to Calculate Landed Cost Efficiently</h2>
          <p>
            For a single product, a spreadsheet works fine. But when you&apos;re managing dozens or hundreds of SKUs, each with different HTS codes, duty rates, and shipping costs, manual calculations become unsustainable.
          </p>
          <p>
            The key is to build landed cost into your workflow — calculate it at the Purchase Order stage, before you commit to buying. This way, you can make informed decisions about pricing, MOQs, and supplier selection.
          </p>

          <div className="cta-box">
            <h3>Calculate Landed Cost Automatically</h3>
            <p>Supploxi builds tariffs and duties into every Purchase Order — so you see your true margins before you buy, not after.</p>
            <a href="https://app.supploxi.com/signup" className="cta-btn">Start Free Trial</a>
          </div>

          <h2>Key Takeaways</h2>
          <ul>
            <li>Landed cost includes everything from factory gate to your warehouse door</li>
            <li>For Chinese imports, Section 301 tariffs can add 25-100% to your product cost</li>
            <li>Always calculate margins based on landed cost, not FOB price</li>
            <li>Fixed per-shipment fees disproportionately impact small orders</li>
            <li>Automate landed cost calculations to avoid costly errors at scale</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}