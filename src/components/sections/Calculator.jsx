import React, { useState } from 'react';
import { Armchair, Smartphone, Lightbulb, Zap, ShoppingCart, Cog } from 'lucide-react';

const categories = [
  { name: 'Furniture & Interiors', bcd: 0.25, igst: 0.18, Icon: Armchair },
  { name: 'Consumer Electronics', bcd: 0.15, igst: 0.18, Icon: Smartphone },
  { name: 'Lighting & Fixtures', bcd: 0.20, igst: 0.18, Icon: Lightbulb },
  { name: 'EV & Automotive Parts', bcd: 0.15, igst: 0.18, Icon: Zap },
  { name: 'Supermarket & General Goods', bcd: 0.10, igst: 0.18, Icon: ShoppingCart },
  { name: 'Machinery & Tools', bcd: 0.075, igst: 0.18, Icon: Cog },
];

const freightModes = [
  { name: 'Sea Freight (FCL Container)', estUsd: 1800, time: '30–38 days' },
  { name: 'Sea Freight (LCL Shared)', estUsd: 650, time: '35–42 days' },
  { name: 'Air Cargo (Express)', estUsd: 1200, time: '7–10 days' },
];

const USD_TO_INR = 86.5;

export default function Calculator() {
  const [catIndex, setCatIndex] = useState(0);
  const [fobUsd, setFobUsd] = useState(8000);
  const [freightIndex, setFreightIndex] = useState(0);

  const cat = categories[catIndex];
  const freight = freightModes[freightIndex];

  // Calculations
  const fobInr = fobUsd * USD_TO_INR;
  const freightInr = freight.estUsd * USD_TO_INR;
  const insuranceInr = (fobInr + freightInr) * 0.01125;
  const cifInr = fobInr + freightInr + insuranceInr;

  const bcd = cifInr * cat.bcd;
  const sws = bcd * 0.10; // 10% Social Welfare Surcharge on BCD
  const igst = (cifInr + bcd + sws) * cat.igst;
  const totalDuty = bcd + sws + igst;
  const chaHandling = 28000; // Average CHA + Port documentation
  const totalLandedCost = cifInr + totalDuty + chaHandling;

  const handleWhatsAppQuote = () => {
    const text = `Hi ImportNow! I calculated estimated landed cost on your website:\n\n*Product:* ${cat.name}\n*FOB Value:* $${fobUsd.toLocaleString()} (₹${Math.round(fobInr).toLocaleString()})\n*Mode:* ${freight.name}\n*Est. Duty & Tax:* ₹${Math.round(totalDuty).toLocaleString()}\n*Total Estimated Landed Cost:* ₹${Math.round(totalLandedCost).toLocaleString()}\n\nCan you review this and provide an exact quotation?`;
    window.open(`https://wa.me/919989724320?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  return (
    <section className="section" id="calculator" style={{ paddingTop: '10px' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow rv">Duty &amp; Cost Estimator</span>
          <h2 className="rv d1">
            Calculate your <span className="grad-text">landed cost</span> before you order.
          </h2>
          <p className="rv d2">
            No unexpected port surprises. Understand Basic Customs Duty (BCD), Social Welfare Surcharge, IGST and freight estimates for your category.
          </p>
        </div>

        <div className="calc-container rv d2" style={{
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)',
          padding: 'clamp(20px, 4vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'start'
        }}>
          {/* Controls Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '8px' }}>
                1. Select Product Category
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '8px' }}>
                {categories.map((c, i) => {
                  const IconComp = c.Icon;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setCatIndex(i)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '12px',
                        border: catIndex === i ? '2px solid var(--red)' : '1px solid var(--line2)',
                        background: catIndex === i ? 'rgba(227,36,27,0.04)' : 'var(--tint)',
                        color: catIndex === i ? 'var(--red)' : 'var(--text)',
                        fontWeight: catIndex === i ? 600 : 500,
                        fontSize: '13px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all .2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <IconComp size={16} strokeWidth={2} style={{ flexShrink: 0 }} />
                      <span>{c.name.split('&')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                  2. Approximate Factory (FOB) Value
                </label>
                <span style={{ font: '700 18px Sora', color: 'var(--text)' }}>
                  ${fobUsd.toLocaleString()} <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500 }}>(≈ ₹{Math.round(fobInr).toLocaleString()})</span>
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={fobUsd}
                onChange={(e) => setFobUsd(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--red)',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--dim)', marginTop: '4px' }}>
                <span>$1,000 (Sample)</span>
                <span>$25,000 (Full Container)</span>
                <span>$50,000+</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '8px' }}>
                3. Shipping Mode
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {freightModes.map((m, i) => (
                  <label
                    key={m.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: freightIndex === i ? '2px solid var(--red)' : '1px solid var(--line2)',
                      background: freightIndex === i ? 'rgba(227,36,27,0.03)' : 'var(--tint)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="radio"
                        name="freight"
                        checked={freightIndex === i}
                        onChange={() => setFreightIndex(i)}
                        style={{ accentColor: 'var(--red)' }}
                      />
                      <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{m.name}</span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 500 }}>{m.time}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div style={{
            background: 'var(--bg2)',
            borderRadius: '16px',
            padding: '28px',
            border: '1px solid var(--line2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line2)', paddingBottom: '14px', marginBottom: '16px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--muted)' }}>Cost Breakdown</span>
                <span style={{ fontSize: '12px', background: 'rgba(0,0,0,0.06)', padding: '4px 8px', borderRadius: '6px', fontWeight: 600 }}>1 USD = ₹86.50</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Factory Value (FOB):</span>
                  <span style={{ fontWeight: 600 }}>₹{Math.round(fobInr).toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Ocean/Air Freight:</span>
                  <span style={{ fontWeight: 600 }}>₹{Math.round(freightInr).toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Transit Marine Insurance:</span>
                  <span style={{ fontWeight: 600 }}>₹{Math.round(insuranceInr).toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px dashed var(--line2)' }}>
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>Assessable CIF Value:</span>
                  <span style={{ fontWeight: 700 }}>₹{Math.round(cifInr).toLocaleString()}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Basic Customs Duty ({cat.bcd * 100}%):</span>
                  <span style={{ fontWeight: 600, color: 'var(--red)' }}>₹{Math.round(bcd).toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Social Welfare Surcharge (10% of BCD):</span>
                  <span style={{ fontWeight: 600 }}>₹{Math.round(sws).toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>IGST (18% input creditable):</span>
                  <span style={{ fontWeight: 600 }}>₹{Math.round(igst).toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)' }}>Port CHA &amp; Documentation:</span>
                  <span style={{ fontWeight: 600 }}>₹{chaHandling.toLocaleString()}</span>
                </div>
              </div>

              <div style={{
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '2px solid var(--text)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline'
              }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)' }}>ESTIMATED TOTAL LANDED COST</div>
                  <div style={{ fontSize: '11px', color: 'var(--dim)' }}>Includes goods, duty, GST &amp; shipping</div>
                </div>
                <div style={{ font: '800 26px Sora', color: 'var(--text)' }}>
                  ₹{Math.round(totalLandedCost).toLocaleString()}
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={handleWhatsAppQuote}
              style={{
                marginTop: '24px',
                width: '100%',
                justifyContent: 'center',
                boxShadow: '0 10px 24px -10px rgba(227,36,27,0.5)'
              }}
            >
              Verify &amp; Get Real Factory Quote on WhatsApp →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
