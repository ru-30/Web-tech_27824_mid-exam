import { useState } from 'react';
import ArrowIcon from '../components/ArrowIcon';

function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setSubscribed(true);
    setEmail('');
  }

  return (
    <section className="newsletter section-wrap" aria-labelledby="newsletter-title">
      <div>
        <span className="eyebrow">A GOOD NOTE, EVERY NOW AND THEN</span>
        <h2 id="newsletter-title">A little good news<br /><em>for your inbox.</em></h2>
      </div>
      <div className="newsletter-form-wrap">
        <p>New books, upcoming events, and small things worth looking forward to.</p>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <label className="visually-hidden" htmlFor="newsletter-email">Your email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Your email address"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value); setSubscribed(false); }}
          />
          <button type="submit" aria-label="Subscribe to the newsletter"><ArrowIcon /></button>
        </form>
        <p className={subscribed ? 'form-note success-note' : 'form-note'} aria-live="polite">
          {subscribed ? 'You’re on the list — look out for a little good news!' : 'No spam. Just the good stuff.'}
        </p>
      </div>
    </section>
  );
}

export default NewsletterPage;
