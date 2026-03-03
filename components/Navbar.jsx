import { useState, useEffect, useRef } from 'react';

const dropdowns = {
  Products: [
    { title: 'Supplier Management', desc: 'Track and manage your Chinese suppliers', href: '/#features', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    )},
    { title: 'Purchase Orders', desc: 'Generate professional POs instantly', href: '/#features', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    )},
    { title: 'Inventory Management', desc: 'Real-time stock control', href: '/#features', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
    )},
    { title: 'Shipment Tracking', desc: 'Automatic tracking for all packages', href: '/#features', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    )},
    { title: 'Tariff Calculator', desc: 'Section 301 duties calculator', href: '/#features', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
    )},
  ],
  Solutions: [
    { title: 'Shopify Sellers', desc: 'Sync orders and inventory automatically', href: '/#features', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    )},
    { title: 'Amazon Sellers', desc: 'Coming Soon', badge: 'Soon', noLink: true, icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    )},
    { title: 'Multi-channel Sellers', desc: 'Coming Soon', badge: 'Soon', noLink: true, icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    )},
  ],
  Resources: [
    { title: 'Documentation', desc: 'How to use Supploxi', href: '/docs', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    )},
    { title: 'Blog', desc: 'Tips for China importers', href: '/blog', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
    )},
    { title: 'Changelog', desc: "What's new", href: '/changelog', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    )},
  ],
};

const navLinks = ['Products', 'Solutions', 'Resources', 'Customers', 'Pricing'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const handleMouseEnter = (link) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(link);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0 24px;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(10,12,20,0.8);
          border-bottom: 1px solid var(--border);
        }
        .navbar.scrolled {
          background: rgba(10,12,20,0.95);
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .logo {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          gap: 0;
        }
        .logo-s {
          color: var(--accent);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dim);
          background: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--text);
        }
        .nav-link svg {
          width: 12px;
          height: 12px;
          transition: transform 0.2s;
        }
        .nav-link.active svg {
          transform: rotate(180deg);
        }
        .dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding-top: 8px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s, visibility 0.2s;
        }
        .dropdown.open {
          opacity: 1;
          visibility: visible;
        }
        .dropdown-inner {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 8px;
          min-width: 320px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .dropdown-item:hover {
          background: var(--surface2);
        }
        .dropdown-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .dropdown-text h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 2px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dropdown-text p {
          font-size: 13px;
          color: var(--text-muted);
        }
        .badge-soon {
          font-size: 10px;
          padding: 2px 6px;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .btn-ghost {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dim);
          background: none;
          transition: color 0.2s;
        }
        .btn-ghost:hover {
          color: var(--text);
        }
        .btn-primary {
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 600;
          color: var(--bg);
          background: var(--accent);
          border-radius: 8px;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: all 0.3s;
        }
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg);
          padding: 24px;
          overflow-y: auto;
          z-index: 999;
        }
        .mobile-menu.open {
          display: block;
        }
        .mobile-link {
          display: block;
          padding: 16px 0;
          font-size: 18px;
          font-weight: 500;
          color: var(--text-dim);
          border-bottom: 1px solid var(--border);
        }
        .mobile-link:hover {
          color: var(--text);
        }
        .mobile-sub {
          padding: 8px 0 8px 16px;
        }
        .mobile-sub-item {
          display: block;
          padding: 10px 0;
          font-size: 15px;
          color: var(--text-muted);
        }
        .mobile-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }
        .mobile-buttons .btn-primary {
          text-align: center;
          padding: 14px;
          font-size: 16px;
          border-radius: 10px;
        }
        @media (max-width: 768px) {
          .nav-links, .nav-right {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="/" className="logo">
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="8" fill="#00d4aa"/>
                <text x="15" y="21" textAnchor="middle" fill="black" fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif">S</text>
              </svg>
              <span style={{fontSize:'17px', fontWeight:'700', letterSpacing:'-0.03em', color:'var(--text)', fontFamily:'Inter, sans-serif'}}>
                Supploxi
              </span>
            </div>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <div
                key={link}
                className="nav-item"
                onMouseEnter={() => dropdowns[link] && handleMouseEnter(link)}
                onMouseLeave={handleMouseLeave}
              >
                {link === 'Customers' || link === 'Pricing' ? (
                  <a
                    href={link === 'Pricing' ? '/#pricing' : '/#testimonials'}
                    className="nav-link"
                  >
                    {link}
                  </a>
                ) : (
                  <button className={`nav-link${activeDropdown === link ? ' active' : ''}`}>
                    {link}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}

                {dropdowns[link] && (
                  <div className={`dropdown${activeDropdown === link ? ' open' : ''}`}>
                    <div className="dropdown-inner">
                      {dropdowns[link].map((item) => (
                        item.noLink ? (
                          <div key={item.title} className="dropdown-item" style={{opacity: 0.5, cursor: 'default'}}>
                            <span className="dropdown-icon">{item.icon}</span>
                            <div className="dropdown-text">
                              <h4>
                                {item.title}
                                {item.badge && <span className="badge-soon">{item.badge}</span>}
                              </h4>
                              <p>{item.desc}</p>
                            </div>
                          </div>
                        ) : (
                          <a key={item.title} href={item.href || '#'} className="dropdown-item">
                            <span className="dropdown-icon">{item.icon}</span>
                            <div className="dropdown-text">
                              <h4>
                                {item.title}
                                {item.badge && <span className="badge-soon">{item.badge}</span>}
                              </h4>
                              <p>{item.desc}</p>
                            </div>
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="nav-right">
            <a href="https://app.supploxi.com/login" className="btn-ghost">Sign in</a>
            <a href="https://app.supploxi.com/login" className="btn-primary">Get Started</a>
          </div>

          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <div key={link}>
            <a
              href={link === 'Pricing' ? '/#pricing' : link === 'Customers' ? '/#testimonials' : '#'}
              className="mobile-link"
              onClick={() => !dropdowns[link] && setMobileOpen(false)}
            >
              {link}
            </a>
            {dropdowns[link] && (
              <div className="mobile-sub">
                {dropdowns[link].map((item) => (
                  item.noLink ? (
                    <span key={item.title} className="mobile-sub-item" style={{opacity: 0.5}}>
                      {item.title} ({item.badge})
                    </span>
                  ) : (
                    <a key={item.title} href={item.href || '#'} className="mobile-sub-item" onClick={() => setMobileOpen(false)}>
                      {item.title}
                    </a>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="mobile-buttons">
          <a href="https://app.supploxi.com/login" className="btn-ghost">Sign in</a>
          <a href="https://app.supploxi.com/login" className="btn-primary">Get Started</a>
        </div>
      </div>
    </>
  );
}
