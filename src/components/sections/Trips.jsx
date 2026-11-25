import React, { useState } from 'react';
import TripModal from '../ui/TripModal.jsx';

export default function Trips() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="section" id="trips">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow rv">Business trips to China</span>
            <h2 className="rv d1">
              Your business trip doesn't have to <span className="grad-text">feel like work.</span>
            </h2>
            <p className="rv d2">
              Guided trips to the Canton Fair, wholesale markets and factories you choose. Our clients often tell us it felt like a personal trip, not a business tour.
            </p>
          </div>
          <div className="trips-grid">
            <article className="card trip-hero rv">
              <svg className="skyline" viewBox="0 0 600 150" preserveAspectRatio="none" fill="rgba(40,20,50,.55)">
                <path d="M0 150V110h30V80h20v30h25V60h15V40h10v20h15v50h30V70h40v40h20V30l15-25 15 25v80h25V85h30v25h20V50h35v60h25V90h30V20h12V0h6v20h12v90h30V75h40v35h25V95h30v55z" />
              </svg>
              <span className="eyebrow">Canton Fair · Guangzhou</span>
              <h3>Meet factories face to face. We handle everything else.</h3>
              <p>Walk the world's biggest trade fair with a guide who speaks the language, then visit the factories you shortlist.</p>
              <div className="pill-row">
                <span className="pill">Guangzhou</span>
                <span className="pill">Shenzhen</span>
                <span className="pill">Yiwu</span>
                <span className="pill">Foshan</span>
                <span className="pill">Macau</span>
                <span className="pill">Glass bridge</span>
              </div>
            </article>

            <article className="card rv d1">
              <h3 style={{ marginBottom: '18px' }}>What's included</h3>
              <div className="inc">
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" />
                  </svg>
                  Visa guidance &amp; invitation letter
                </div>
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6" />
                  </svg>
                  Hotels close to the fair
                </div>
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 11h16a8 8 0 01-16 0zM12 3v4M8 5v2M16 5v2" />
                  </svg>
                  Indian food daily, veg &amp; non-veg
                </div>
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 6 8M11 5c-1 4-4 7-7 8M14 21l4-9 4 9M15.5 18h5" />
                  </svg>
                  Guides &amp; translators
                </div>
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 21V9l6 4V9l6 4V5l6 4v12H3z" />
                  </svg>
                  Factory visits you choose
                </div>
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Sightseeing between markets
                </div>
              </div>
            </article>

            <article className="card rv d2">
              <h3 style={{ marginBottom: '16px' }}>Next departures</h3>
              <div className="dates">
                <div className="date"><b>Spring</b><span>Canton Fair · April–May</span></div>
                <div className="date"><b>Autumn</b><span>Canton Fair · October–November</span></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setModalOpen(true)}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  View full 8-day itinerary →
                </button>
                <a
                  className="btn btn-ghost"
                  href="#contact"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13px', padding: '10px' }}
                >
                  Reserve seats via WhatsApp
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <TripModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
