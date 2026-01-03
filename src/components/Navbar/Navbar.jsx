
import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu on Escape or click outside (excluding the button)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const onClickOutside = (e) => {
      if (!isOpen) return;

      const menu = menuRef.current;
      const button = buttonRef.current;
      const target = e.target;

      // If click is not inside menu OR button, close
      const clickedInsideMenu = menu && menu.contains(target);
      const clickedOnButton = button && button.contains(target);

      if (!clickedInsideMenu && !clickedOnButton) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header>
      <div className="nav max-width">
        <div className="logo">
          <img className="logo-pic" src="/zorand-logo.png" alt="zorand-logo" />
        </div>
        <nav
          id="primary-navigation"
          className={isOpen ? 'open' : ''}
          aria-label="Primary"
          ref={menuRef}
        >
          <ul>
            <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
            <li><a href="#work" onClick={handleLinkClick}>Work</a></li>
            <li><a href="#process" onClick={handleLinkClick}>Process</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a className="btn desktop-only" href="#contact">Get Started</a>

        {/* Mobile menu button (hamburger) */}
        <button
          className={`menu-btn ${isOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
          ref={buttonRef}
          type="button"
        >
          {/* Clean black hamburger icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18"
              stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
