import { useState } from 'react';

function Navbar({ onJoinClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <i className="fa-solid fa-brain"></i>
          The Predictor
        </div>

        <button
          className="navbar__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#showcase" onClick={() => setMenuOpen(false)}>Showcase</a></li>
          <li>
            <button className="btn-glow btn-glow--sm" onClick={() => { onJoinClick(); setMenuOpen(false); }}>
              Join Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
