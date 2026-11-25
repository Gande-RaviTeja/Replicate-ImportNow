import React, { useState } from 'react';
import { Armchair, Lightbulb, Zap, Package, Plane } from 'lucide-react';

const presets = [
  { label: 'Foshan Furniture', Icon: Armchair, cat: 'Furniture & interiors', qty: '1 container (40ft)', budget: '₹5–25 lakh', msg: 'Complete villa / office furniture sourcing from Foshan cluster' },
  { label: 'Guzhen Lighting', Icon: Lightbulb, cat: 'Lighting', qty: '500 pcs', budget: '₹1–5 lakh', msg: 'Architectural commercial LED lighting and decorative fixtures' },
  { label: 'EV Scooter Kits', Icon: Zap, cat: 'EV & automotive', qty: '50 units CKD', budget: '₹5–25 lakh', msg: 'CKD electric scooter kits for assembly with custom private label branding' },
  { label: 'Yiwu Supermarket', Icon: Package, cat: 'Supermarket & general goods', qty: '1 mixed container', budget: '₹5–25 lakh', msg: 'Assorted household, kitchen and gifting goods from Yiwu trade market' },
  { label: 'Canton Fair Trip', Icon: Plane, cat: 'China business trip / Canton Fair', qty: '2 pax', budget: '₹1–5 lakh', msg: 'Guangzhou Canton Fair 2026 guided sourcing trip registration' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    city: '',
    cat: 'Furniture & interiors',
    qty: '',
    budget: 'Under ₹1 lakh',
    msg: '',
  });

  const applyPreset = (p) => {
    setForm(prev => ({
      ...prev,
      cat: p.cat,
      qty: p.qty,
      budget: p.budget,
      msg: p.msg,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const WA = '919989724320';
    const text = `Hi ImportNow, I'd like a sourcing quote.\n\nName: ${form.name}\nCity: ${form.city}\nCategory: ${form.cat}\nQuantity: ${form.qty}\nBudget: ${form.budget}\nDetails: ${form.msg}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap ct-grid">
        <div>
          <span className="eyebrow rv">Start importing</span>
          <h2 className="rv d1" style={{ fontSize: 'clamp(32px,4.4vw,52px)', margin: '14px 0 18px' }}>
            Tell us what you want to import. <span className="grad-text">We'll take it from there.</span>
          </h2>
          <p className="rv d2" style={{ color: 'var(--muted)', fontSize: '18px' }}>
            Share the product and quantity. You'll get supplier options, landed cost and timelines, free of charge.
          </p>
          <div className="ct-lines">
            <a className="ct-line rv d2" href="tel:+919989724320">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
              </svg>
              <div>
                <small>Call or WhatsApp</small>
                <b>+91 99897 24320</b>
              </div>
            </a>
            <a className="ct-line rv d3" href="https://www.instagram.com/importnow.in/" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              <div>
                <small>Instagram</small>
                <b>@importnow.in</b>
              </div>
            </a>
            <div className="ct-line rv d4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <div>
                <small>Offices</small>
                <b>Hyderabad, India · Shanghai, China</b>
              </div>
            </div>
          </div>
        </div>

        <form className="quote-form rv d2" id="qform" onSubmit={handleSubmit}>
          <h3 style={{ fontSize: '22px' }}>Get a free sourcing quote</h3>

          {/* Quick preset chips */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600, marginBottom: '6px' }}>
              Quick presets (click to fill):
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {presets.map((p) => {
                const IconComp = p.Icon;
                return (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => applyPreset(p)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '5px 11px',
                      borderRadius: '999px',
                      fontSize: '11px',
                      fontWeight: 600,
                      background: 'var(--bg2)',
                      border: '1px solid var(--line2)',
                      color: 'var(--text)',
                      cursor: 'pointer',
                      transition: 'all .2s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--text)'; }}
                  >
                    <IconComp size={12} strokeWidth={2.2} style={{ flexShrink: 0 }} />
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="row2">
            <div className="field">
              <label htmlFor="f-name">Your name</label>
              <input
                id="f-name"
                required
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="f-city">City</label>
              <input
                id="f-city"
                placeholder="e.g. Hyderabad"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="f-cat">What do you want to import?</label>
            <select
              id="f-cat"
              value={form.cat}
              onChange={(e) => setForm({ ...form, cat: e.target.value })}
            >
              <option>Furniture &amp; interiors</option>
              <option>Electronics &amp; tech</option>
              <option>EV &amp; automotive</option>
              <option>Lighting</option>
              <option>Supermarket &amp; general goods</option>
              <option>Machinery</option>
              <option>China business trip / Canton Fair</option>
              <option>Something else</option>
            </select>
          </div>

          <div className="row2">
            <div className="field">
              <label htmlFor="f-qty">Approx. quantity</label>
              <input
                id="f-qty"
                placeholder="e.g. 1 container"
                value={form.qty}
                onChange={(e) => setForm({ ...form, qty: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="f-budget">Budget</label>
              <select
                id="f-budget"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                <option>Under ₹1 lakh</option>
                <option>₹1–5 lakh</option>
                <option>₹5–25 lakh</option>
                <option>₹25 lakh+</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="f-msg">Details</label>
            <textarea
              id="f-msg"
              placeholder="Product, specs, reference photos or links…"
              value={form.msg}
              onChange={(e) => setForm({ ...form, msg: e.target.value })}
            ></textarea>
          </div>

          <button className="btn btn-primary" type="submit" style={{ justifyContent: 'center' }}>
            Send on WhatsApp →
          </button>
          <p className="form-note">
            Opens WhatsApp with your details filled in. We usually reply within a few hours.
          </p>
        </form>
      </div>
    </section>
  );
}
