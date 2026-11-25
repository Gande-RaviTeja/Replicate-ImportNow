import React, { useEffect, useRef } from 'react';
import { initVoyage } from '../three/voyageLogic.js';

export default function Journey() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = initVoyage(sectionRef.current, canvasRef.current);
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section className="journey" id="journey" ref={sectionRef}>
      <div className="journey-sticky">
        <canvas id="sea" ref={canvasRef} aria-hidden="true"></canvas>
        <div className="j-loading" id="jloading">Loading 3D scene…</div>
        <div className="j-shade"></div>
        <div className="j-badge"><i></i> Live shipment view</div>
        <div className="j-ui">
          <div className="wrap" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="j-head">
              <span className="eyebrow">How it works</span>
              <h2>Watch your order travel from China to India.</h2>
            </div>
            <ol className="j-steps" id="jsteps">
              <li className="j-step on">
                <span className="n">1</span>
                <div>
                  <h4>Source the right factory</h4>
                  <p>Tell us the product. We shortlist verified manufacturers and get you real prices, not middleman quotes.</p>
                </div>
              </li>
              <li className="j-step">
                <span className="n">2</span>
                <div>
                  <h4>Inspect &amp; approve samples</h4>
                  <p>Our team visits the factory and checks samples. You approve over video call.</p>
                </div>
              </li>
              <li className="j-step">
                <span className="n">3</span>
                <div>
                  <h4>Quality check &amp; loading</h4>
                  <p>Every carton is checked and counted. Then the cranes load your container onto the ship.</p>
                </div>
              </li>
              <li className="j-step">
                <span className="n">4</span>
                <div>
                  <h4>Ocean freight</h4>
                  <p>Your container sails from Shanghai to India, and we track it the whole way.</p>
                </div>
              </li>
              <li className="j-step">
                <span className="n">5</span>
                <div>
                  <h4>Customs clearance</h4>
                  <p>Duties, GST and paperwork are handled at the Indian port, so the container is released quickly.</p>
                </div>
              </li>
              <li className="j-step">
                <span className="n">6</span>
                <div>
                  <h4>Delivered to your door</h4>
                  <p>The container is unloaded and trucked to your shop, warehouse or site.</p>
                </div>
              </li>
            </ol>
            <div className="j-route">
              <div className="j-port">
                <svg className="flag"><use href="#flag-cn" /></svg>
                <div>
                  <span className="pname">Shanghai</span>
                  <small>Origin port</small>
                </div>
              </div>
              <div className="j-track">
                <div className="j-fill" id="jfill"></div>
                <div className="j-boat" id="jboat">
                  <svg><use href="#i-ship" /></svg>
                </div>
              </div>
              <div className="j-port">
                <div style={{ textAlign: 'right' }}>
                  <span className="pname">Chennai</span>
                  <small>Destination</small>
                </div>
                <svg className="flag"><use href="#flag-in" /></svg>
              </div>
              <div className="j-day" id="jday">Day 0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
