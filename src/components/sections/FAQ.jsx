import React from 'react';

export default function FAQ() {
  return (
    <section className="section" id="faq" style={{ paddingTop: '10px' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow rv">Questions</span>
          <h2 className="rv d1">Before you import</h2>
        </div>
        <div className="faq rv d2">
          <details open>
            <summary>Can I import just one piece?<i></i></summary>
            <p>Yes, for many products. Furniture like height-adjustable desks can be imported with a minimum order of one piece. Private-label products, such as car LED lights, usually start from around 500 units.</p>
          </details>
          <details>
            <summary>How long does delivery take?<i></i></summary>
            <p>Most sea shipments reach your door in about 30 to 40 days, depending on the product, the factory's production time and the destination port. Air cargo is faster for urgent orders.</p>
          </details>
          <details>
            <summary>Do you handle customs and GST?<i></i></summary>
            <p>Yes. We prepare the documentation and manage duties, GST and clearance at the Indian port, then deliver to your address.</p>
          </details>
          <details>
            <summary>Do I need an Import Export Code (IEC)?<i></i></summary>
            <p>For commercial imports, yes. If you don't have one yet, we'll guide you through getting it.</p>
          </details>
          <details>
            <summary>Can I visit the factories myself?<i></i></summary>
            <p>Absolutely. Join one of our guided China business trips, or we can arrange visits to the factories you've shortlisted.</p>
          </details>
          <details>
            <summary>What's the best business to start by importing from China?<i></i></summary>
            <p>It depends on your interests and budget. Popular choices with our clients include furniture, EV scooters, car accessories, lighting and supermarket goods. Talk to us and we'll suggest options that fit your market.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
