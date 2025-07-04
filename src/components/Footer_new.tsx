// React Router import for navigation links
import { Link } from 'react-router-dom';
// Component-specific styles
import '../styles/footer.css';

/**
 * Footer component for the Exclusive Cleaning website
 * Features:
 * - Company information and description
 * - Quick navigation links
 * - Service listing
 * - Contact information
 * - Copyright notice with dynamic year
 * 
 * @returns {JSX.Element} Footer component with company info and links
 */
const Footer = () => {
  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Company branding and description section */}
        <div className="footer-column">
          <h3>Exclusive <span className="gold-accent">Cleaning</span></h3>
          <p>Providing premium cleaning services with meticulous attention to detail for discerning clients who expect nothing but the best.</p>
        </div>
        
        {/* Quick navigation links section */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Services overview section */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Residential Cleaning</li>
            <li>Executive Home Care</li>
            <li>Premium Organizing</li>
            <li>Event Preparation</li>
            <li>Specialty Cleaning</li>
          </ul>
        </div>
        
        {/* Contact information section */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <address>
            <p>123 Luxury Avenue</p>
            <p>Prestigious Heights, CA 90210</p>
            <p>Phone: (800) 555-CLEAN</p>
            <p>Email: info@exclusivecleaning.com</p>
          </address>
        </div>
      </div>
      
      {/* Copyright notice section */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Exclusive Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
