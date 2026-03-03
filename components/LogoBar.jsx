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
              <div className="logo-item">
                <svg viewBox="0 0 109 124" fill="currentColor" color="#94a3b8">
                  <path d="M74.7 25.4c-.7-.3-1.4-.5-2.1-.5s-1.2.2-1.7.5L52.3 36.6 38.2 28l22.4-13.1c1-.6 2.3-.6 3.4 0l10.7 6.3v4.2zm1.4 2.4v50.4l-12 7V37.8l12-7v-3zm2.8-5.2L96.7 33c2.1 1.2 3.4 3.5 3.4 5.9v24.7c0 2.5-1.3 4.7-3.4 5.9L79 80.1c-.1 0-.1.1-.2.1V30.6c0-.1 0-.3.1-.4zM53.7 12.9c2.1-1.2 4.7-1.2 6.7 0l20.3 11.9-13.3 7.8-23.8-14 10.1-5.7zm-4.8 2.8L25.2 29.5c-.1.1-.2.1-.3.2v49.6l-.1-.1L7.4 69.6c-2.1-1.2-3.4-3.5-3.4-5.9V38.9c0-2.4 1.3-4.7 3.4-5.9l17.5-10.2 24 14.1-12.1 7.1H36l12.9-7.6v-20.6zM24 32l12 7v47.5l-12-7V32zm-1.4 54.8V36.3L10.5 43c-.9.5-1.4 1.5-1.4 2.5v21.2c0 1 .6 2 1.4 2.5l13.1 7.6zm30.1 24.3c-1 .6-2.3.6-3.4 0L38.7 104.8v-4.2l18.6-10.9c.5-.3 1.1-.5 1.7-.5s1.4.2 2.1.5l-8.4 4.9v16.5zM51 95l13.3-7.8 23.8 14-10.1 5.8c-2.1 1.2-4.7 1.2-6.7 0L51 95zm14.7-5.4l12.1-7.1H78l-12.9 7.6v20.6L88.8 97c.1-.1.2-.1.3-.2V47.1l.1.1 17.4 10.1c2.1 1.2 3.4 3.5 3.4 5.9v24.7c0 2.5-1.3 4.7-3.4 5.9L89.1 104l-23.4-14.4zm14.9 5.2l-12-7V40.3l12 7v47.5zm1.4-54.8v50.5l12.1-7.1c.9-.5 1.4-1.5 1.4-2.5V59.7c0-1-.5-2-1.4-2.5L82 49.6v-9.6z"/>
                </svg>
                <span className="logo-name">Shopify</span>
              </div>
              <div className="logo-item">
                <svg viewBox="0 0 24 24" fill="currentColor" color="#94a3b8" height="36" width="36">
                  <path d="M2.227 4.857A2.228 2.228 0 0 1 4.455 2.63h15.09a2.228 2.228 0 0 1 2.228 2.228v14.285a2.228 2.228 0 0 1-2.228 2.228H4.455a2.228 2.228 0 0 1-2.228-2.228V4.857zm5.342 10.2a3.6 3.6 0 0 0 2.758 1.17c1.627 0 2.87-1.017 2.87-2.644 0-1.4-.87-2.193-2.193-2.757l-.51-.226c-.736-.34-1.13-.566-1.13-1.075 0-.453.396-.736.962-.736a2.6 2.6 0 0 1 1.842.793l.906-1.187a3.5 3.5 0 0 0-2.635-1.13c-1.56 0-2.7.963-2.7 2.532 0 1.357.85 2.136 1.955 2.588l.51.226c.85.396 1.357.566 1.357 1.13 0 .567-.51.907-1.244.907a3.1 3.1 0 0 1-2.25-1.02l-.906 1.243z"/>
                </svg>
                <span className="logo-name">WooCommerce</span>
                <span className="logo-soon">Coming soon</span>
              </div>
              <div className="logo-item">
                <svg viewBox="0 0 24 24" fill="currentColor" color="#94a3b8" height="36" width="36">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.18l7 3.5v7.14l-7-3.5V9.18zm16 7.14l-7 3.5v-7.14l7-3.5v7.14z"/>
                </svg>
                <span className="logo-name">BigCommerce</span>
                <span className="logo-soon">Coming soon</span>
              </div>
            </div>
            <p className="logobar-note">More integrations coming soon</p>
          </div>
        </div>
      </section>
    </>
  );
}
