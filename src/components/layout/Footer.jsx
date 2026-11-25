import React from 'react';

const WA = '919989724320';
const PHONE = '+91 99897 24320';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            <a href="#home" className="logo">
              IMP<svg><use href="#logo-o" /></svg>RTNOW
            </a>
            <p>
              End-to-end imports from China to India: sourcing, factory inspection, shipping and customs. Save time. Reduce costs.
            </p>
            <div className="ft-social">
              <a href="https://www.instagram.com/importnow.in/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2z" />
                </svg>
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} aria-label="Call">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Our services</h4>
            <ul>
              <li><a href="#services">Product sourcing</a></li>
              <li><a href="#services">Factory inspection</a></li>
              <li><a href="#services">Quality control</a></li>
              <li><a href="#services">Shipping &amp; logistics</a></li>
              <li><a href="#services">Customs clearance</a></li>
              <li><a href="#services">Doorstep delivery</a></li>
            </ul>
          </div>

          <div>
            <h4>What we import</h4>
            <ul>
              <li><a href="#products">Furniture &amp; interiors</a></li>
              <li><a href="#products">Electronics &amp; tech</a></li>
              <li><a href="#products">EV &amp; automotive</a></li>
              <li><a href="#products">Lighting</a></li>
              <li><a href="#products">Supermarket goods</a></li>
              <li><a href="#trips">Canton Fair trips</a></li>
            </ul>
          </div>

          <div>
            <h4>Import guides</h4>
            <ul>
              <li><a href="#contact">How to Import from China to India</a></li>
              <li><a href="#contact">Yiwu vs Guangzhou vs Foshan</a></li>
              <li><a href="#contact">Importing Furniture from China</a></li>
              <li><a href="#contact" style={{ color: '#ff9b7a' }}>All articles →</a></li>
            </ul>
          </div>

          <div className="ft-contact">
            <h4>Get in touch</h4>
            <ul>
              <li>
                <b>Call / WhatsApp</b><br />
                <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
              </li>
              <li>
                <b>India</b><br />Hyderabad, Telangana
              </li>
              <li>
                <b>China</b><br />Shanghai Shengqiao Chain Trading Co., Ltd., Shanghai
              </li>
              <li>
                <b>Instagram</b><br />
                <a href="https://www.instagram.com/importnow.in/" target="_blank" rel="noopener">@importnow.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <span>© {new Date().getFullYear()} ImportNow.in · All rights reserved.</span>
          <span className="concept">Concept design · preview prepared for ImportNow</span>
        </div>
      </div>
    </footer>
  );
}
