import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers — Supploxi</title>
        <meta name="description" content="Join the Supploxi team. See open positions and career opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx>{`
        .coming-soon {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 64px;
          text-align: center;
        }
        .coming-soon h1 {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 12px;
        }
        .coming-soon p {
          font-size: 18px;
          color: var(--text-muted);
          margin-bottom: 32px;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          font-size: 15px;
          font-weight: 600;
          color: var(--bg);
          background: var(--accent);
          border-radius: 10px;
          transition: all 0.2s;
        }
        .back-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }
      `}</style>

      <Navbar />
      <div className="coming-soon">
        <div>
          <h1>Careers</h1>
          <p>Coming Soon — We&rsquo;re working on it.</p>
          <a href="/" className="back-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Home
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
