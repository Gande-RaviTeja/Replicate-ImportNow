import React from 'react';

const posts = [
  {
    slug: 'how-to-import-from-china-to-india',
    title: 'How to Import from China to India in 2026: A Step-by-Step Guide',
    cat: 'Import guides',
    date: '18 November 2026',
    mins: 7,
    cv: 'cv1',
    icon: 'route',
    excerpt: 'From getting your IEC to receiving the container at your door, here is the full import process explained in plain language for first-time importers.',
  },
  {
    slug: 'yiwu-vs-guangzhou-vs-foshan',
    title: 'Yiwu, Guangzhou or Foshan? Choosing the Right Chinese Market for Your Product',
    cat: 'Wholesale markets',
    date: '12 November 2026',
    mins: 6,
    cv: 'cv2',
    icon: 'market',
    excerpt: 'China has a different manufacturing hub for almost every industry. Going to the right one can cut your costs and save days of searching.',
  },
  {
    slug: 'importing-furniture-from-china',
    title: 'Importing Furniture from China: Costs, MOQ and What to Check',
    cat: 'Product guides',
    date: '5 November 2026',
    mins: 6,
    cv: 'cv6',
    icon: 'sofa',
    excerpt: 'Premium designs at a better price. Here is what villa owners, offices and hotels should know before importing furniture from Foshan.',
  },
];

export default function Guides() {
  return (
    <section className="section" id="guides" style={{ paddingTop: '10px' }}>
      <div className="wrap">
        <div
          className="section-head"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '20px',
            maxWidth: 'none',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span className="eyebrow rv">Import guides</span>
            <h2 className="rv d1">Learn before you import.</h2>
            <p className="rv d2">Practical guides on sourcing, shipping, customs and business ideas from China.</p>
          </div>
          <a className="btn btn-ghost rv" href="#contact">
            View all articles →
          </a>
        </div>

        <div className="post-grid three" id="latest-posts">
          {posts.map((p, i) => (
            <article key={p.slug} className={`post-card rv d${(i % 2) + 1}`}>
              <a className="cover" href="#contact" aria-hidden="true" tabIndex={-1}>
                <span className="cover-in">
                  <span className={`cv-bg ${p.cv}`}></span>
                  <svg className="cv-ic"><use href={`#ic-${p.icon}`} /></svg>
                  <span className="cv-cat">{p.cat}</span>
                  <span className="cv-flags">
                    <svg className="flag"><use href="#flag-cn" /></svg>→<svg className="flag"><use href="#flag-in" /></svg>
                  </span>
                  <span className="cv-title">{p.title.split(':')[0]}</span>
                </span>
              </a>
              <div className="bd">
                <h3><a href="#contact">{p.title}</a></h3>
                <div className="post-meta">
                  <span>{p.date}</span>
                  <span className="dot"></span>
                  <span>{p.mins} min read</span>
                </div>
                <p>{p.excerpt}</p>
                <a className="read-more" href="#contact">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
