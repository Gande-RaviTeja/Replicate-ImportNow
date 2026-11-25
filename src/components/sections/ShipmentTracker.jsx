import React, { useState } from 'react';
import { Check } from 'lucide-react';

const mockShipments = {
  'IN-SHA-0812': {
    id: 'IN-SHA-0812',
    cargo: 'Luxury Villa Furniture (1x 40ft HC Container)',
    origin: 'Foshan → Shanghai Port',
    destination: 'Hyderabad, Telangana',
    vessel: 'COSCO Shipping Aries (Voyage 042W)',
    eta: 'Nov 29, 2026',
    status: 'In Transit — Arabian Sea',
    progress: 68,
    steps: [
      { title: 'Factory Inspection & Stuffing', date: 'Nov 02', done: true, note: 'Foshan furniture hub, QC passed 100%' },
      { title: 'Export Customs Cleared', date: 'Nov 06', done: true, note: 'Shanghai Port, customs seal #CN-89211' },
      { title: 'Vessel Sailing (Ocean Freight)', date: 'Nov 10', current: true, note: 'Crossed Malacca Strait, heading to Nhava Sheva' },
      { title: 'Indian Port Customs & CHA', date: 'Nov 27', done: false, note: 'JNPT Port CHA documentation pre-filed' },
      { title: 'Doorstep Delivery', date: 'Nov 29', done: false, note: 'Hyd destination warehouse un-stuffing' },
    ]
  },
  'IN-FOS-9910': {
    id: 'IN-FOS-9910',
    cargo: 'Smart Office Desks & Ergonomic Chairs',
    origin: 'Guzhen → Shenzhen Port',
    destination: 'Bangalore, Karnataka',
    vessel: 'Evergreen Ever Given (Voyage 110E)',
    eta: 'Nov 25, 2026',
    status: 'Customs Clearance in Progress',
    progress: 88,
    steps: [
      { title: 'Factory Inspection & Stuffing', date: 'Oct 28', done: true, note: 'Shenzhen QC pass report signed' },
      { title: 'Export Customs Cleared', date: 'Nov 01', done: true, note: 'Shenzhen Yantian terminal departure' },
      { title: 'Vessel Sailing (Ocean Freight)', date: 'Nov 04', done: true, note: 'Arrived at Chennai Container Terminal' },
      { title: 'Indian Port Customs & CHA', date: 'Nov 22', current: true, note: 'Duty assessed & IGST payment verified' },
      { title: 'Doorstep Delivery', date: 'Nov 25', done: false, note: 'Trucking to Bangalore tech park' },
    ]
  },
  'IN-YIW-4402': {
    id: 'IN-YIW-4402',
    cargo: 'Diwali Gifts & Supermarket Goods (Mixed LCL)',
    origin: 'Yiwu Market → Ningbo Port',
    destination: 'Adilabad, Telangana',
    vessel: 'Maersk Mc-Kinney Moller (Voyage 204)',
    eta: 'Dec 05, 2026',
    status: 'Container Loaded & Sealed',
    progress: 35,
    steps: [
      { title: 'Factory Inspection & Stuffing', date: 'Nov 18', done: true, note: 'Yiwu consolidation warehouse packed' },
      { title: 'Export Customs Cleared', date: 'Nov 21', current: true, note: 'Ningbo Port terminal container loaded' },
      { title: 'Vessel Sailing (Ocean Freight)', date: 'Nov 25', done: false, note: 'Scheduled sea departure' },
      { title: 'Indian Port Customs & CHA', date: 'Dec 02', done: false, note: 'Pending arrival' },
      { title: 'Doorstep Delivery', date: 'Dec 05', done: false, note: 'Warehouse doorstep delivery' },
    ]
  }
};

export default function ShipmentTracker() {
  const [selectedId, setSelectedId] = useState('IN-SHA-0812');
  const [inputVal, setInputVal] = useState('');
  const [searchedShipment, setSearchedShipment] = useState(mockShipments['IN-SHA-0812']);

  const handleSelect = (id) => {
    setSelectedId(id);
    setInputVal('');
    setSearchedShipment(mockShipments[id]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputVal.trim().toUpperCase();
    if (mockShipments[query]) {
      setSelectedId(query);
      setSearchedShipment(mockShipments[query]);
    } else {
      // Create simulated dynamic response
      setSearchedShipment({
        id: query || 'IN-SAMPLE-2026',
        cargo: 'Commercial Goods Consignment',
        origin: 'China Hub → Sea Route',
        destination: 'India Delivery Hub',
        vessel: 'MSC ImportNow Express',
        eta: 'Dec 02, 2026',
        status: 'Active Shipment · In Ocean Transit',
        progress: 55,
        steps: [
          { title: 'Factory Sourcing & Inspection', date: 'Nov 12', done: true, note: 'Verified by ImportNow Shanghai' },
          { title: 'Container Loaded & Sealed', date: 'Nov 16', done: true, note: 'Seal intact and verified' },
          { title: 'Ocean Freight En Route', date: 'Nov 20', current: true, note: 'Tracking via GPS satellite telemetry' },
          { title: 'Indian Customs Clearance', date: 'Nov 29', done: false, note: 'CHA clearance pre-filing' },
          { title: 'Doorstep Delivery', date: 'Dec 02', done: false, note: 'Scheduled delivery' },
        ]
      });
    }
  };

  const ship = searchedShipment;

  return (
    <section className="section" id="tracker" style={{ paddingTop: '10px' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow rv">Live Shipment Telemetry</span>
          <h2 className="rv d1">
            Track your cargo with <span className="grad-text">complete transparency.</span>
          </h2>
          <p className="rv d2">
            Every container is tracked from the factory warehouse to your doorstep with real-time port and customs status.
          </p>
        </div>

        <div className="rv d2" style={{
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)',
          padding: 'clamp(20px, 4vw, 36px)',
        }}>
          {/* Preset Buttons & Search bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)' }}>Sample shipments:</span>
              {Object.keys(mockShipments).map(id => (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleSelect(id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: selectedId === id ? '2px solid var(--red)' : '1px solid var(--line2)',
                    background: selectedId === id ? 'rgba(227,36,27,0.06)' : 'var(--bg2)',
                    color: selectedId === id ? 'var(--red)' : 'var(--text)',
                    transition: 'all .2s'
                  }}
                >
                  {id}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', width: '100%', maxWidth: '340px' }}>
              <input
                placeholder="Enter container or tracking #"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid var(--line2)',
                  background: 'var(--tint)',
                  fontSize: '13px',
                  color: 'var(--text)',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '10px 18px', fontSize: '13px' }}
              >
                Track
              </button>
            </form>
          </div>

          {/* Details header */}
          <div style={{
            background: 'var(--bg2)',
            borderRadius: '14px',
            padding: '20px 24px',
            border: '1px solid var(--line2)',
            marginBottom: '28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>Tracking ID &amp; Cargo</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginTop: '2px' }}>{ship.id}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{ship.cargo}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>Route</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginTop: '2px' }}>
                <svg className="flag" style={{ display: 'inline-block', marginRight: '6px' }}><use href="#flag-cn" /></svg>
                {ship.origin}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>
                <svg className="flag" style={{ display: 'inline-block', marginRight: '6px' }}><use href="#flag-in" /></svg>
                {ship.destination}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>Live Status</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(227,36,27,0.08)', color: 'var(--red)', padding: '4px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, marginTop: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)' }}></span>
                {ship.status}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '3px' }}>Vessel: {ship.vessel}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>Estimated Delivery</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text)', marginTop: '2px' }}>{ship.eta}</div>
              <div style={{ fontSize: '12px', color: '#16a34a', fontWeight: 600 }}>● On Schedule</div>
            </div>
          </div>

          {/* Stepper */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', position: 'relative' }}>
            {ship.steps.map((st, i) => (
              <div key={st.title} style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    background: st.done ? 'var(--text)' : st.current ? 'var(--red)' : 'var(--bg2)',
                    color: st.done || st.current ? '#fff' : 'var(--muted)',
                    border: st.current ? '3px solid rgba(227,36,27,0.2)' : 'none',
                    boxShadow: st.current ? '0 0 12px rgba(227,36,27,0.4)' : 'none',
                    flexShrink: 0
                  }}>
                    {st.done ? <Check size={14} strokeWidth={3} /> : i + 1}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: st.current ? 'var(--red)' : 'var(--muted)' }}>
                    {st.date}
                  </span>
                </div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{st.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.4' }}>{st.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
