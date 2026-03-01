import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/home/HomeHero.css';

const HomeHero = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="home-hero" role="region" aria-label="ExploraVist overview">
      <div className="home-hero-shell">
        <div className="home-hero-inner">
          <div className="home-hero-text">
            <h1 id="home-hero-heading" className="home-hero-title">
              <span className="home-hero-line home-hero-line-lead">
                Innovation made <span className="home-hero-accent">accessible.</span>
              </span>
              <span className="home-hero-line home-hero-line-main">
                Empowerment made <span className="home-hero-accent">personal.</span>
              </span>
            </h1>

            <p className="home-hero-subtitle">
              ExploraVist empowers visually impaired users with an affordable, AI-powered wearable device.
            </p>

            <div className="home-hero-ctas">
              <button
                type="button"
                className="hero-cta hero-cta-primary"
                onClick={() => navigate('/waitlist')}
              >
                Join the waitlist
              </button>
              <button
                type="button"
                className="hero-cta hero-cta-secondary"
                onClick={() => scrollToSection('values')}
              >
                Learn more
              </button>
            </div>
          </div>

          <div className="home-hero-visual" aria-hidden="true">
            <div className="home-hero-orb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;