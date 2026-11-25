import React from 'react';

export default function Shanghai() {
  return (
    <section className="section shanghai" id="shanghai">
      <div className="wrap sh-grid">
        <div>
          <span className="eyebrow rv">Officially in China</span>
          <h2 className="rv d1" style={{ fontSize: 'clamp(32px,4.2vw,52px)', margin: '14px 0 18px' }}>
            Many claim an office in China. <span className="grad-text">We have the licence.</span>
          </h2>
          <p className="rv d2" style={{ color: 'var(--muted)', fontSize: '18px' }}>
            ImportNow operates through its own registered company in Shanghai, <b style={{ color: 'var(--text)' }}>Shanghai Shengqiao Chain Trading Co., Ltd.</b> That means we can sign contracts with factories, pay suppliers locally and stand behind every order.
          </p>
          <ul className="checks">
            <li className="rv d2">
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5 9-10" />
                </svg>
              </span>
              <div><b>Registered business licence</b> issued in Shanghai, China</div>
            </li>
            <li className="rv d3">
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5 9-10" />
                </svg>
              </span>
              <div><b>Chinese company bank account</b>, so payments to factories are safe and traceable</div>
            </li>
            <li className="rv d4">
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5 9-10" />
                </svg>
              </span>
              <div><b>Team on the ground</b> for factory visits, quality checks and market trips</div>
            </li>
            <li className="rv d5">
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5 9-10" />
                </svg>
              </span>
              <div><b>Indian founder on both sides</b>: talk to us in Telugu, Hindi or English</div>
            </li>
          </ul>
        </div>
        <div className="license-stage rv d2">
          <div className="license" id="license">
            <div className="lt">营业执照</div>
            <div className="ls">BUSINESS LICENCE</div>
            <div className="emblem"></div>
            <dl>
              <dt>Company</dt><dd>Shanghai Shengqiao Chain Trading Co., Ltd.</dd>
              <dt>Location</dt><dd>Shanghai, People's Republic of China</dd>
              <dt>Scope</dt><dd>Supply chain, sourcing &amp; international trade</dd>
              <dt>Serving</dt><dd>Importers across India</dd>
            </dl>
            <div className="qr"></div>
            <div className="stamp">
              <span>SHANGHAI<br />SHENGQIAO<br />TRADING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
