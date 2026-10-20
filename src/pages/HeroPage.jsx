import ArrowIcon from '../components/ArrowIcon';

function HeroPage() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="eyebrow-dot" /> YOUR NEIGHBOURHOOD, OPEN TO POSSIBILITY
        </span>
        <h1>A little more<br />room to <em>grow.</em></h1>
        <p className="hero-description">
          A welcoming place to find your next favourite book, get a little help,
          or simply feel at home.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#about">Get to know us <ArrowIcon /></a>
          <a className="text-link" href="#events">See what's happening <ArrowIcon /></a>
        </div>
        <div className="hero-note">
          <div className="avatar-stack" aria-hidden="true">
            <span className="avatar avatar-one">M</span>
            <span className="avatar avatar-two">J</span>
            <span className="avatar avatar-three">A</span>
            <span className="avatar avatar-four">+</span>
          </div>
          <p><strong>A place for everyone.</strong><br />Made better together.</p>
        </div>
      </div>

      <div className="hero-visual">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1500&q=90"
          alt="Sunlight falling across the bookshelves in a welcoming library"
        />
        <div className="image-caption">
          <span className="caption-icon" aria-hidden="true">✳</span>
          <span>Find your corner<br /><strong>of the world.</strong></span>
        </div>
        <span className="hero-sticker">GOOD THINGS<br />GROW HERE <span>↘</span></span>
      </div>

      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}

export default HeroPage;
