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
                <svg width="36" height="36" viewBox="0 0 256 292" fill="#94a3b8">
                  <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.774 57.34"/>
                </svg>
                <span className="logo-name">Shopify</span>
              </div>
              <div className="logo-item">
                <svg width="36" height="36" viewBox="0 0 256 153" fill="#94a3b8">
                  <path d="M23.759 0h208.378c13.187 0 23.863 10.675 23.863 23.863v79.542c0 13.187-10.675 23.863-23.863 23.863h-74.727l10.257 25.118-45.109-25.118H23.76C10.57 127.268 0 116.593 0 103.405V23.863C0 10.675 10.57 0 23.759 0z"/>
                </svg>
                <span className="logo-name">WooCommerce</span>
                <span className="logo-soon">Coming Soon</span>
              </div>
              <div className="logo-item">
                <svg width="36" height="36" viewBox="0 0 256 292" fill="#94a3b8">
                  <path d="M128 0L0 73v146l128 73 128-73V73L128 0zm0 27.6l101.4 57.8L128 143.2 26.6 85.4 128 27.6zM22.8 97.6l97.2 55.4v110.8L22.8 208.4V97.6zm212.4 110.8l-97.2 55.4V152.9l97.2-55.4v110.9z"/>
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
