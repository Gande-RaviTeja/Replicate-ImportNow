import React from 'react';

export default function Stories() {
  return (
    <section className="section" id="stories" style={{ paddingTop: '10px' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow rv">Client stories</span>
          <h2 className="rv d1">
            Heard from the people <span className="grad-text">who made the trip.</span>
          </h2>
        </div>
        <div className="grid-3">
          <article className="card quote rv">
            <p className="q">
              I came to source LED screens and electronics. The Guangzhou and Shenzhen markets were easy to navigate, and hotels, food and travel were all taken care of.
            </p>
            <div className="who">
              <span className="avatar">S</span>
              <div>
                <b>Sai</b>
                <span>Ad-tech startup · Siddipet</span>
              </div>
            </div>
          </article>

          <article className="card quote rv d1">
            <p className="q">
              Twelve days covering the Canton Fair and factories of my choice. Visa, guidance, Indian food every day. It felt like a personal trip, not a business tour.
            </p>
            <div className="who">
              <span className="avatar">M</span>
              <div>
                <b>Mahender Reddy</b>
                <span>Canton Fair trip client</span>
              </div>
            </div>
          </article>

          <article className="card quote rv d2">
            <p className="q">
              We picked our products on video calls, and the container came straight from Yiwu to our warehouse. The whole process was hassle-free.
            </p>
            <div className="who">
              <span className="avatar">SS</span>
              <div>
                <b>Sagar Supermarket</b>
                <span>Retail · Adilabad</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
