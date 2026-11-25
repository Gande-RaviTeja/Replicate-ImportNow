import React from 'react';
import Globe from '../three/Globe.jsx';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Globe />
      <div className="wrap" style={{ width: '100%' }}>
        <div className="hero-content">
          <span className="chip rv">
            <svg className="flag"><use href="#flag-cn" /></svg>
            <span className="arrow">→</span>
            <svg className="flag"><use href="#flag-in" /></svg>
            {' '}Trusted by 500+ Indian businesses
          </span>
          <h1 className="rv d1">
            Import directly from China.{' '}
            <span className="grad-text">Without the guesswork.</span>
          </h1>
          <p className="lead rv d2">
            Sourcing, factory inspection, shipping and customs, handled end to end by a team with its own company in Shanghai. You choose the product. We bring it to your door.
          </p>
          <div className="hero-btns rv d3">
            <a className="btn btn-primary" href="#contact">
              Get a free sourcing quote <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#journey">
              See how it works
            </a>
          </div>
          <div className="hero-stats rv d4">
            <div className="stat">
              <b><span data-count="500">500</span>+</b>
              <span>Businesses<br />served</span>
            </div>
            <div className="stat">
              <b><span data-count="83">83</span>K+</b>
              <span>Community on<br />Instagram</span>
            </div>
            <div className="stat">
              <b>1 pc</b>
              <span>MOQ on many<br />products</span>
            </div>
            <div className="stat">
              <b>Shanghai</b>
              <span>Own registered<br />company</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue">Scroll<i></i></div>
    </section>
  );
}
