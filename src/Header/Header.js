import { useState, useEffect } from 'react';
import logo from '../img/Logo.png';
import resume from '../img/Abhishek Srinivasan Resume.pdf';
import '../Header/Header.css';
import { NAVIGATION_LINKS } from '../constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const allLinks = [
    ...NAVIGATION_LINKS,
    { href: resume, label: 'Resume', external: true }
  ];

  return (
    <header 
      className={`header ${isScrolled ? 'header-scrolled' : ''}`} 
      role="banner"
    >
      <a href="#home" className="header-logo" aria-label="Home" onClick={closeMenu}>
        <img src={logo} alt="Abhishek Srinivasan Logo" className="header-logo-img" />
      </a>

      <button
        className="header-mobile-menu-button"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="header-navigation"
      >
        <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav 
        id="header-navigation"
        className={`header-navigation ${isMenuOpen ? 'header-navigation-open' : ''}`} 
        role="navigation" 
        aria-label="Main navigation"
      >
        {allLinks.map((link) => (
          <a
            key={link.href}
            className="header-navigation-link"
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {isMenuOpen && (
        <div 
          className="header-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
