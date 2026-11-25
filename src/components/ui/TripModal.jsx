import React from 'react';
import { X } from 'lucide-react';

export default function TripModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleWhatsApp = (season) => {
    const text = `Hi ImportNow! I would like to enquire about reserving a spot for the ${season} Canton Fair Sourcing Trip to Guangzhou. Please share remaining seats, group details and registration procedure.`;
    window.open(`https://wa.me/919989724320?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--surface)',
          borderRadius: 'var(--radius)',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '88vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)',
          padding: 'clamp(24px, 4vw, 36px)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg2)',
            border: 'none',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text)'
          }}
          aria-label="Close"
        >
          <X size={18} strokeWidth={2.2} />
        </button>

        <span className="eyebrow" style={{ marginBottom: '8px' }}>Guided China Business Expedition</span>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginBottom: '8px', color: 'var(--text)' }}>
          Canton Fair Sourcing Itinerary
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '24px' }}>
          Guangzhou · Foshan · Shenzhen · Yiwu · 8-Day Fully Guided Trip with Bilingual Sourcing Guides
        </p>

        {/* Schedule */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
          {[
            { day: 'Day 1', title: 'Arrival & Welcome Dinner', desc: 'Flight arrival in Guangzhou Baiyun International Airport. Private hotel transfer near Pazhou Complex. Badge registration & evening briefing with your personal translator.' },
            { day: 'Day 2–3', title: 'Canton Fair Sourcing (Phases 1 / 2)', desc: 'Explore 25,000+ certified manufacturers. Dedicated bilingual agent negotiates MOQ, FOB pricing and sample dispatch directly on the booth floor.' },
            { day: 'Day 4–5', title: 'Foshan Furniture & Guzhen Lighting Clusters', desc: 'Visit multi-kilometer furniture malls and high-end lighting manufacturing bases. Direct factory audits for custom dimensions and private label orders.' },
            { day: 'Day 6', title: 'Shenzhen Tech Market or Yiwu Trade City', desc: 'Option A: Huaqiangbei Electronics Hub in Shenzhen. Option B: Yiwu International Trade City for mixed-container retail products.' },
            { day: 'Day 7', title: 'Contract Finalization & Quality Briefing', desc: 'Review factory quotations at our Shanghai / Guangzhou partner office. Safe payment escrow & sample validation before container booking.' },
            { day: 'Day 8', title: 'Sightseeing & Return to India', desc: 'Canton Tower & Pearl River cruise. Return flight to Mumbai / Delhi / Hyderabad with complete import roadmap in hand.' },
          ].map((item) => (
            <div key={item.day} style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--line)', paddingBottom: '14px' }}>
              <div style={{ font: '700 13px Sora', background: 'var(--bg2)', padding: '6px 12px', borderRadius: '8px', height: 'fit-content', color: 'var(--red)', whiteSpace: 'nowrap' }}>
                {item.day}
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid var(--line)', paddingTop: '20px' }}>
          <button
            className="btn btn-ghost"
            onClick={onClose}
            style={{ padding: '12px 20px', fontSize: '14px' }}
          >
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleWhatsApp('Spring')}
            style={{ padding: '12px 24px', fontSize: '14px' }}
          >
            Apply for Spring 2026 Trip on WhatsApp →
          </button>
        </div>
      </div>
    </div>
  );
}
