import React from 'react';

export default function Work() {
  return (
    <section className="section" id="work" style={{ paddingTop: '10px' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow rv">Recently delivered</span>
          <h2 className="rv d1">
            Another container unloaded, <span className="grad-text">another happy client.</span>
          </h2>
        </div>
        <div className="work-grid">
          <article className="card work tilt rv">
            <div className="ph ph1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M3 11h18v6H3zM5 17v3M19 17v3M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4" />
              </svg>
              <span className="route-chip"><svg className="flag"><use href="#flag-cn" /></svg>Foshan → Villa</span>
            </div>
            <div className="bd">
              <h3>Complete villa furniture</h3>
              <p>Sofas, dining sets, office furniture and pergolas, all in one container delivered to a luxury villa.</p>
              <div className="meta"><span>Full container</span><span>Door delivery</span></div>
            </div>
          </article>

          <article className="card work tilt rv d1">
            <div className="ph ph2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M3 4h2l2.5 11h11L21 7H7M9 20a1 1 0 100-2 1 1 0 000 2zM18 20a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              <span className="route-chip"><svg className="flag"><use href="#flag-cn" /></svg>Yiwu → Adilabad</span>
            </div>
            <div className="bd">
              <h3>Sagar Supermarket</h3>
              <p>Complete supermarket stock sourced from Yiwu over video calls and delivered to the client's warehouse.</p>
              <div className="meta"><span>Retail</span><span>Video sourcing</span></div>
            </div>
          </article>

          <article className="card work tilt rv d2">
            <div className="ph ph3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6M7 10h2M15 10h2" />
              </svg>
              <span className="route-chip"><svg className="flag"><use href="#flag-cn" /></svg>China → Convention</span>
            </div>
            <div className="bd">
              <h3>Sreeman Convention Centre</h3>
              <p>Cots, beds, dining sets and office furniture for a convention venue, with better finish for the same budget.</p>
              <div className="meta"><span>Hospitality</span><span>Bulk order</span></div>
            </div>
          </article>

          <article className="card work tilt rv d3">
            <div className="ph ph4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M3 8h18v3H3zM5 11v9M19 11v9M10 8V5h4v3" />
              </svg>
              <span className="route-chip"><svg className="flag"><use href="#flag-cn" /></svg>China → Hyderabad</span>
            </div>
            <div className="bd">
              <h3>Smart office desks</h3>
              <p>Motorised height-adjustable L-shaped desks, imported even as a single piece.</p>
              <div className="meta"><span>MOQ 1</span><span>~30 days</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
