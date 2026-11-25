import React, { useState, useEffect } from 'react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#journey' },
  { label: 'Shipment tracker', href: '#tracker' },
  { label: 'Duty calculator', href: '#calculator' },
  { label: 'What we import', href: '#products' },
  { label: 'China trips', href: '#trips' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
        <div className="wrap">
          <a href="#home" className="logo" aria-label="ImportNow home">
            IMP<svg><use href="#logo-o" /></svg>RTNOW
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary nav-cta" href="#contact">
            Get a free quote
          </a>
          <button
            className="burger"
            id="burger"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? 'open' : ''}`} id="mmenu">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
