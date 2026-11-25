import React from 'react';

const items = [
  ['Yiwu', 'Adilabad'],
  ['Foshan', 'Hyderabad'],
  ['Shenzhen', 'Siddipet'],
  ['Guangzhou', 'Chennai'],
  ['Shanghai', 'Nhava Sheva'],
  ['Guzhen', 'Vizag'],
  ['Ningbo', 'Mumbai'],
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" id="mq">
        {[...items, ...items].map(([from, to], i) => (
          <span key={i}>
            {from} <em>→</em> {to}
          </span>
        ))}
      </div>
    </div>
  );
}
