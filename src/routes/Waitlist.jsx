import React, { Fragment, useState, useEffect, useRef } from 'react';
import { ArrowRight, X, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Waitlist.css';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [glance, setGlance] = useState(true);
  const [mailingList, setMailingList] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const closeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEmail('');
    setGlance(true);
    setMailingList(true);
  };

  useEffect(() => {
    if (showModal && closeRef.current) closeRef.current.focus();
    document.body.style.overflow = showModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showModal]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && showModal) closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showModal]);

  return (
    <Fragment>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <section className="waitlist-page" role="region" aria-label="Join the waitlist">
          <div className="waitlist-page-shell">
            <h1 className="waitlist-page-title">Join the Waitlist</h1>
            <p className="waitlist-page-desc">
              Sign up to reserve your spot for Glance and join our mailing list for updates on our progress, early access, and more.
            </p>

            <form onSubmit={handleSubmit} className="waitlist-page-form">
              <div className="waitlist-page-field">
                <label htmlFor="waitlist-email" className="waitlist-page-label">Email</label>
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <fieldset className="waitlist-page-checks">
                <legend className="waitlist-page-label">I&apos;m interested in</legend>
                <label className="waitlist-page-check">
                  <input type="checkbox" checked={glance} onChange={() => setGlance(!glance)} />
                  <span>Glance product waitlist</span>
                </label>
                <label className="waitlist-page-check">
                  <input type="checkbox" checked={mailingList} onChange={() => setMailingList(!mailingList)} />
                  <span>ExploraVist mailing list</span>
                </label>
              </fieldset>

              <button
                type="submit"
                className="waitlist-page-submit"
                disabled={!email.trim()}
              >
                <span>Join the Waitlist</span>
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>

        {showModal && (
          <div className="waitlist-modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
            <div className="waitlist-modal" role="dialog" aria-modal="true" aria-label="Signup confirmation">
              <button className="waitlist-modal-close" onClick={closeModal} ref={closeRef} aria-label="Close">
                <X size={24} />
              </button>
              <div className="waitlist-modal-icon" aria-hidden="true">
                <Check size={40} strokeWidth={3} />
              </div>
              <h2 className="waitlist-modal-title">You&apos;re on the list!</h2>
              <p className="waitlist-modal-text">
                We&apos;ll keep you posted on Glance availability and everything ExploraVist.
              </p>
              <button className="waitlist-modal-done" onClick={closeModal}>Done</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Waitlist;
