import React from 'react';

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow rv">What we import</span>
          <h2 className="rv d1">
            China has a market for every industry. <span className="grad-text">We know each one.</span>
          </h2>
          <p className="rv d2">
            Each industry has its own manufacturing hub. We take you straight to the source.
          </p>
        </div>
        <div className="products">
          <article className="card prod tilt rv">
            <svg className="art" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M3 11h18v6H3zM5 17v3M19 17v3M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4" />
            </svg>
            <span className="hub"><svg className="flag"><use href="#flag-cn" /></svg> Foshan hub</span>
            <h3>Furniture &amp; interiors</h3>
            <ul>
              <li>Complete home and villa furniture</li>
              <li>Office desks and executive chairs</li>
              <li>Banquet hall and hotel fit-outs</li>
            </ul>
            <span className="tag">Height-adjustable desk from ₹45,000 · MOQ 1</span>
          </article>

          <article className="card prod tilt rv d1">
            <svg className="art" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" />
            </svg>
            <span className="hub"><svg className="flag"><use href="#flag-cn" /></svg> Shenzhen hub</span>
            <h3>Electronics &amp; tech</h3>
            <ul>
              <li>LED screens and digital signage</li>
              <li>Mobile accessories in bulk</li>
              <li>Power bank rental kiosks</li>
            </ul>
            <span className="tag">Business ideas India doesn't have yet</span>
          </article>

          <article className="card prod tilt rv d2">
            <svg className="art" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="5.5" cy="17" r="3.5" /><circle cx="18.5" cy="17" r="3.5" /><path d="M5.5 17l4-8h5l4 8M9 6h3" />
            </svg>
            <span className="hub"><svg className="flag"><use href="#flag-cn" /></svg> Guangzhou hub</span>
            <h3>EV &amp; automotive</h3>
            <ul>
              <li>Electric scooters as kits for assembly in India</li>
              <li>Battery cells sourced separately</li>
              <li>Car LED lights with your own brand</li>
            </ul>
            <span className="tag">Car LED private label · MOQ 500</span>
          </article>

          <article className="card prod tilt rv">
            <svg className="art" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9V16h7v-2.1A6 6 0 0012 3z" />
            </svg>
            <span className="hub"><svg className="flag"><use href="#flag-cn" /></svg> Guzhen hub</span>
            <h3>Lighting</h3>
            <ul>
              <li>Decorative and architectural lighting</li>
              <li>Commercial LED fixtures</li>
              <li>Custom designs for projects</li>
            </ul>
            <span className="tag">Direct from the lighting capital of China</span>
          </article>

          <article className="card prod tilt rv d1">
            <svg className="art" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M3 4h2l2.5 11h11L21 7H7M9 20a1 1 0 100-2 1 1 0 000 2zM18 20a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            <span className="hub"><svg className="flag"><use href="#flag-cn" /></svg> Yiwu hub</span>
            <h3>Supermarket &amp; general goods</h3>
            <ul>
              <li>Complete store stock in one container</li>
              <li>Home, kitchen, toys and gifts</li>
              <li>Choose products over video call</li>
            </ul>
            <span className="tag">World's largest small-goods market</span>
          </article>

          <article className="card prod tilt rv d2">
            <svg className="art" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
            </svg>
            <span className="hub"><svg className="flag"><use href="#flag-cn" /></svg> Pan-China</span>
            <h3>Machinery &amp; automation</h3>
            <ul>
              <li>Production and packaging machines</li>
              <li>Smart vending and robotic kiosks</li>
              <li>Spares and after-sales support</li>
            </ul>
            <span className="tag">Tell us the machine, we find the factory</span>
          </article>
        </div>
      </div>
    </section>
  );
}
