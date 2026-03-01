import React from 'react';
import { Link } from 'react-router-dom';
import { updates } from '../../data/updatesData';
import '../../styles/updates/UpdatesHero.css';

const sorted = [...updates].sort((a, b) => {
  const parse = (d) => {
    const [m, dd, yy] = d.split('.');
    return new Date(`20${yy}-${m.padStart(2, '0')}-${dd.padStart(2, '0')}`);
  };
  return parse(b.date) - parse(a.date);
});

const upcoming = [
  { label: 'CSUN Accessibility Conference', date: '03.09.25' },
];

const UpdatesHero = () => (
  <section className="updates-hero" role="region" aria-label="Updates roadmap">
    <div className="updates-hero-shell">
      <span className="updates-hero-eyebrow">Roadmap</span>
      {/* <h1 className="updates-hero-title">Our Journey</h1> */}

      {/* Where we're heading — future items on top */}
      <div className="roadmap-future">
        <div className="roadmap-future-line" aria-hidden="true" />

        {/* Leading fade dots */}
        <div className="roadmap-fade-dots roadmap-fade-dots--top" aria-hidden="true">
          <span className="roadmap-fade-dot" />
          <span className="roadmap-fade-dot" />
          <span className="roadmap-fade-dot" />
        </div>

        {upcoming.reverse().map((item, i) => (
          <div
            key={item.label}
            className={`roadmap-node roadmap-node-future ${i % 2 === 0 ? 'roadmap-node--left' : 'roadmap-node--right'}`}
          >
            <div className="roadmap-dot-col">
              <span className="roadmap-dot roadmap-dot-future" />
            </div>
            <div className="roadmap-card">
              <span className="roadmap-card-title">{item.label}</span>
              <span className="roadmap-card-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Past updates */}
      <div className="updates-roadmap">
        <div className="roadmap-line" aria-hidden="true" />

        {sorted.map((update, i) => (
          <Link
            key={update.slug}
            to={`/updates/${update.slug}`}
            className={`roadmap-node ${i % 2 === 0 ? 'roadmap-node--left' : 'roadmap-node--right'}`}
            aria-label={`${update.title} — ${update.date}`}
          >
            <div className="roadmap-dot-col">
              <span className="roadmap-dot" />
            </div>

            <div className="roadmap-card">
              <span className="roadmap-card-category">{update.category}</span>
              <span className="roadmap-card-title">{update.title}</span>
              <span className="roadmap-card-date">{update.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default UpdatesHero;
