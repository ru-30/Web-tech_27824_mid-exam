import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Bright Future Library home">
        <span className="brand-mark" aria-hidden="true">b.</span>
        <span className="brand-name">
          bright future
          <span>LIBRARY</span>
          <span className="brand-mission">Books, learning &amp; a place to belong.</span>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span /><span />
      </button>

      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        <a href="#home"     onClick={closeMenu}>Home</a>
        <a href="#about"    onClick={closeMenu}>About Us</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#events"   onClick={closeMenu}>Events</a>
        <a href="#books"    onClick={closeMenu}>Featured Books</a>
        <a href="#contact"  onClick={closeMenu}>Contact Us</a>
      </nav>
    </header>
  );
}

export default Navbar;
