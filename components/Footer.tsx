import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <h3>Exclusive <span className="gold-accent">Cleaning</span></h3>
          <p>Providing premium cleaning services with meticulous attention to detail for discerning clients who expect nothing but the best.</p>
        </div>
        
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
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
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Exclusive Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;