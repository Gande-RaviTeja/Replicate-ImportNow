import React from 'react';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow rv">End-to-end imports</span>
          <h2 className="rv d1">
            One team from the <span className="grad-text">factory floor</span> to your front door.
          </h2>
          <p className="rv d2">
            Anyone can say they import from China. What you actually need is a smooth process, clear communication and a shipment that arrives safely.
          </p>
        </div>
        <div className="grid-3">
          <article className="card tilt rv">
            <span className="num">01</span>
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M8 11h6M11 8v6" />
              </svg>
            </div>
            <h3>Product sourcing</h3>
            <p>We find verified manufacturers across Yiwu, Guangzhou, Shenzhen and Foshan, and negotiate prices on your behalf.</p>
          </article>

          <article className="card tilt rv d1">
            <span className="num">02</span>
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M3 21V9l6 4V9l6 4V5l6 4v12H3z" /><path d="M7 17h2M12 17h2M17 17h1" />
              </svg>
            </div>
            <h3>Factory inspection</h3>
            <p>Our team visits the factory in person. We check licences, samples and production capacity before you pay.</p>
          </article>

          <article className="card tilt rv d2">
            <span className="num">03</span>
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /><path d="M8.5 12l2.5 2.5 4.5-5" />
              </svg>
            </div>
            <h3>Quality control</h3>
            <p>Pre-shipment checks with photo and video reports, done before the container is sealed.</p>
          </article>

          <article className="card tilt rv">
            <span className="num">04</span>
            <div className="icon">
              <svg><use href="#i-ship" /></svg>
            </div>
            <h3>Shipping &amp; logistics</h3>
            <p>Full-container and shared-container sea freight from Chinese ports, plus air cargo for urgent orders.</p>
          </article>

          <article className="card tilt rv d1">
            <span className="num">05</span>
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5M10 13h6M10 17h6" />
              </svg>
            </div>
            <h3>Customs clearance</h3>
            <p>Documentation, duties, GST and clearance at Indian ports. No surprises when the ship lands.</p>
          </article>

          <article className="card tilt rv d2">
            <span className="num">06</span>
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 6h13v10H1zM14 10h4l4 3v3h-8z" /><circle cx="5.5" cy="18" r="2" /><circle cx="17.5" cy="18" r="2" />
              </svg>
            </div>
            <h3>Doorstep delivery</h3>
            <p>From the port straight to your shop, warehouse, villa or site, with the container unloaded on location.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
