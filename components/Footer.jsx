const footerLinks = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Changelog', href: '/changelog' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ],
  Support: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Contact', href: 'mailto:support@supploxi.com' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <>
      <style jsx>{`
        .footer {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 64px 0 32px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-brand .logo {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          display: block;
        }
        .logo-s {
          color: var(--accent);
        }
        .footer-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 280px;
          margin-bottom: 20px;
        }
        .social-links {
          display: flex;
          gap: 12px;
        }
        .social-link {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-muted);
          transition: all 0.2s;
        }
        .social-link:hover {
          border-color: rgba(0,212,170,0.3);
          color: var(--accent);
        }
        .footer-col h4 {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .footer-col a {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: var(--text-muted);
          padding: 6px 0;
          transition: color 0.2s;
        }
        .footer-col a:hover {
          color: var(--text);
        }
        .soon-tag {
          font-size: 10px;
          padding: 1px 5px;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 3px;
          color: var(--text-muted);
        }
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .copyright {
          font-size: 13px;
          color: var(--text-muted);
        }
        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }
        .footer-bottom-links a {
          font-size: 13px;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .footer-bottom-links a:hover {
          color: var(--text);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'12px'}}>
                <img
                  src="/logo.png"
                  alt="Supploxi"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    display: 'block',
                    flexShrink: 0
                  }}
                />
                <span style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Sup<span style={{color:'#00d4aa'}}>p</span>loxi
                </span>
              </div>
              <p className="footer-desc">
                The operations platform for US e-commerce importers.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer-col">
                <h4>{title}</h4>
                {links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                    {link.soon && <span className="soon-tag">Soon</span>}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; {new Date().getFullYear()} Supploxi. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
