// React Router imports for navigation and location detection
import { Link, useLocation } from 'react-router-dom';
// React hook for state management
import { useState } from 'react';
// Component-specific styles
import '../styles/header.css';

/**
 * Header component that provides navigation for the Exclusive Cleaning website
 * Features:
 * - Responsive navigation with mobile hamburger menu
 * - Active page highlighting
 * - Logo with brand styling
 * - Mobile-first responsive design
 * 
 * @returns {JSX.Element} Header navigation component
 */
const Header = () => {
  // State to control mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Hook to get current location for active nav highlighting
  const location = useLocation();

  /**
   * Toggles the mobile menu open/closed state
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        {/* Brand logo section */}
        <div className="logo">
          <Link to="/">
            <span className="logo-text">Exclusive</span>
            <span className="gold-accent"> Cleaning</span>
          </Link>
        </div>

        {/* Mobile hamburger menu button */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Main navigation menu */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            {/* Home navigation item with active state detection */}
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            {/* About navigation item with active state detection */}
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            {/* Services navigation item with active state detection */}
            <li className={location.pathname === '/services' ? 'active' : ''}>
              <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            </li>
            {/* Contact navigation item with active state detection */}
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;