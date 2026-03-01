import React from 'react';
import '../../styles/about/AboutHero.css';

const AboutHero = () => (
  <section className="about-hero" role="region" aria-label="About ExploraVist">
    <div className="about-hero-shell">
      <div className="about-hero-inner">
        <span className="about-hero-eyebrow">Our Mission</span>
        <div className="about-hero-statements">
          <p className="about-hero-statement">
            <span className="about-hero-highlight">Empowering</span> the blind and visually impaired
          </p>
          <p className="about-hero-statement">
            through <span className="about-hero-highlight">intuitive, affordable</span> technology
          </p>
          <p className="about-hero-statement">
            that sparks <span className="about-hero-highlight">curiosity</span> and fosters <span className="about-hero-highlight">connection</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
