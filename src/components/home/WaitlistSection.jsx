import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionBlock from './SectionBlock';
import '../../styles/home/WaitlistSection.css';

const API_ENDPOINT = 'https://mesvi31h6k.execute-api.us-west-2.amazonaws.com/signup';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setEmail('');
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionBlock
      id="waitlist"
      title="Join the waitlist"
      subtitle="Be the first to know when our device is available and get updates on our progress."
      className="waitlist-section"
    >
      {status === 'success' ? (
        <p className="waitlist-success" role="status">
          Thanks for signing up. We&apos;ll be in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="waitlist-form">
          <div className="waitlist-input-wrap">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              required
              disabled={status === 'submitting'}
            />
            <button
              type="submit"
              disabled={status === 'submitting' || !email.trim()}
              aria-label="Join waitlist"
            >
              {status === 'submitting' ? 'Joining…' : <><span>Join</span> <ArrowRight size={20} aria-hidden="true" /></>}
            </button>
          </div>
          {status === 'error' && (
            <p className="waitlist-error">
              Something went wrong. Try again or email exploravist@exploravist.net.
            </p>
          )}
        </form>
      )}
    </SectionBlock>
  );
};

export default WaitlistSection;
