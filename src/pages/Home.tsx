// React Router import for navigation links
import { Link } from 'react-router-dom';
// Component-specific styles
import '../styles/home.css';

/**
 * Home page component for the Exclusive Cleaning website
 * Features multiple sections:
 * - Hero section with call-to-action buttons and promotional images
 * - Why Choose Us section highlighting company advantages
 * - Services overview with featured services
 * - Customer testimonials
 * - Final call-to-action section
 * 
 * @returns {JSX.Element} Complete home page with all marketing sections
 */
const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section - Main promotional banner with images and primary CTAs */}
      <section className="hero">
        <div className="hero-container">
          {/* Left side: Marketing copy and action buttons */}
          <div className="hero-text">
            <h1>Exclusive <span className="gold-accent">Cleaning</span></h1>
            <p>Where immaculate spaces meet exceptional service</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">Our Services</Link>
              <Link to="/contact" className="btn btn-outline">Book Now</Link>
            </div>
          </div>
          {/* Right side: Professional cleaning images */}
          <div className="hero-images">
            <div className="image-grid">
              {/* Main featured image */}
              <div className="main-image">
                <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury home cleaning" />
              </div>
              {/* Supporting smaller images */}
              <div className="small-images">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Clean living space" />
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Premium cleaning service" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Company value propositions and advantages */}
      <section className="why-choose-us">
        <div className="why-choose-container">
          {/* Section header with introductory text */}
          <div className="section-heading">
            <h2>Why Choose Exclusive Cleaning</h2>
            <p>We deliver exceptional cleaning services based on four core principles</p>
          </div>
          
          {/* Grid of advantage cards highlighting key differentiators */}
          <div className="advantages-grid">
            {/* Staff expertise advantage */}
            <div className="advantage-card">
              <div className="advantage-icon">
                {/* SVG icon for certified staff */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.6569 5 15 6.34315 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5ZM16.6219 15.0896L14.0005 13.8719L11.3792 15.0896C10.5549 15.5471 9.50965 14.9532 9.50965 14.0194V11.3284C10.2467 11.7566 11.0941 12 12 12C12.9059 12 13.7533 11.7566 14.4904 11.3284V14.0194C14.4904 14.9532 13.4451 15.5471 12.6209 15.0896L12.0005 14.7684L11.3792 15.0896L12.6209 15.0896L14.0005 13.8719L12.6209 15.0896Z" />
                </svg>
              </div>
              <h3>Expertly Trained Staff</h3>
              <p>Our cleaning professionals undergo rigorous training and background checks to ensure the highest standards.</p>
            </div>
            
            {/* Premium products advantage */}
            <div className="advantage-card">
              <div className="advantage-icon">
                {/* SVG icon for premium cleaning products */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.93326 13.8169L9.0874 14.6627C8.32295 15.4272 7.22842 15.8519 6.06508 15.7694C4.90173 15.6868 3.87723 15.1051 3.2448 14.1907C2.6301 13.2993 2.43085 12.1844 2.6956 11.1252C2.96036 10.0659 3.66256 9.1646 4.62348 8.64091L7.02752 7.24891C7.87342 6.79566 8.8696 6.67043 9.81334 6.9035C10.7571 7.13657 11.5663 7.70564 12.0669 8.49L10.6882 9.86874C10.5095 9.47528 10.2103 9.15427 9.8382 8.95033C9.4661 8.74639 9.04384 8.67062 8.62478 8.73415C8.20571 8.79767 7.82166 8.99634 7.53666 9.29878L5.36742 11.468C5.06176 11.7716 4.88174 12.1811 4.86359 12.6122C4.84543 13.0433 4.99052 13.4659 5.26808 13.7927C5.55343 14.1276 5.95461 14.3478 6.39303 14.4126C6.83144 14.4773 7.27675 14.3825 7.65146 14.1453L8.5548 13.3353L9.93326 13.8169ZM14.0667 10.1831L14.9126 9.33733C15.677 8.57287 16.7716 8.14815 17.9349 8.23065C19.0983 8.31315 20.1228 8.89487 20.7552 9.80933C21.3699 10.7007 21.5692 11.8156 21.3044 12.8748C21.0396 13.9341 20.3374 14.8354 19.3765 15.3591L16.9725 16.7511C16.1266 17.2043 15.1304 17.3296 14.1867 17.0965C13.2429 16.8634 12.4337 16.2944 11.9331 15.51L13.3118 14.1313C13.4905 14.5247 13.7897 14.8457 14.1618 15.0497C14.5339 15.2536 14.9562 15.3294 15.3752 15.2658C15.7943 15.2023 16.1783 15.0037 16.4633 14.7012L18.6326 12.532C18.9382 12.2284 19.1183 11.8189 19.1364 11.3878C19.1546 10.9567 19.0095 10.5341 18.7319 10.2073C18.4466 9.87238 18.0454 9.65224 17.607 9.58747C17.1686 9.52271 16.7232 9.61748 16.3485 9.85467L15.4452 10.6647L14.0667 10.1831Z" />
                </svg>
              </div>
              <h3>Premium Products</h3>
              <p>We use only eco-friendly, high-quality cleaning products safe for your family and pets.</p>
            </div>
            
            {/* Attention to detail advantage */}
            <div className="advantage-card">
              <div className="advantage-icon">
                {/* SVG icon for quality assurance checkmark */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" />
                </svg>
              </div>
              <h3>Attention to Detail</h3>
              <p>We pride ourselves on noticing and addressing the small details that others might miss.</p>
            </div>
            
            {/* Customized service advantage */}
            <div className="advantage-card">
              <div className="advantage-icon">
                {/* SVG icon for customized service */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.17071 18C6.58254 19.1652 7.29913 20.1922 8.23995 20.9874C9.18078 21.7825 10.3107 22.3174 11.5204 22.538C12.7301 22.7586 13.9752 22.6571 15.1266 22.2436C16.278 21.83 17.2956 21.1202 18.0692 20.1883C18.8428 19.2564 19.3517 18.1442 19.5484 16.9583C19.7451 15.7724 19.6236 14.5553 19.1964 13.4224C18.7692 12.2894 18.0514 11.2815 17.1116 10.5123C16.1718 9.74306 15.0413 9.2361 13.846 9.03778L13.4014 9.61589C12.6764 9.3866 11.9175 9.24493 11.1478 9.19551L10.9979 9.19L10.9257 9.19551C10.1818 9.23788 9.44482 9.36882 8.73903 9.58063L8.30173 9.03129C7.07716 9.22512 5.92082 9.71594 4.95132 10.4589C3.98182 11.2018 3.23863 12.1756 2.78276 13.2809C2.32689 14.3861 2.17104 15.5824 2.33043 16.7604C2.48981 17.9384 2.95929 19.0593 3.6948 20.0135C4.43031 20.9677 5.40656 21.7227 6.52808 22.2065C7.64959 22.6903 8.88109 22.8881 10.1066 22.7802C11.332 22.6723 12.5101 22.2622 13.5331 21.5857C14.5561 20.9092 15.3896 19.988 15.9581 18.9057L15.9767 18.8686C14.9773 19.5936 13.7948 20 12.5766 20C11.0036 20 9.59383 19.2691 8.61684 18.1399C7.83578 18.0554 7.07452 17.8492 6.35517 17.5322C6.29257 17.6928 6.23487 17.8501 6.17071 18ZM8.42616 12.3867C8.88366 12.223 9.35521 12.1123 9.83577 12.0555C10.0748 12.0226 10.3187 12.0053 10.5657 12.0036C10.9301 12.001 11.2909 12.0413 11.6413 12.1235C12.1625 12.2455 12.6619 12.4495 13.1219 12.7289C13.5818 13.0082 13.996 13.3595 14.3446 13.7678C14.6933 14.1761 14.9714 14.6354 15.1672 15.1272C15.363 15.619 15.4733 16.1367 15.4929 16.6618C15.5125 17.1869 15.4412 17.7118 15.2822 18.2156C15.1232 18.7194 14.8789 19.1938 14.5598 19.6214C14.2406 20.049 13.8518 20.4235 13.4122 20.7286C12.9726 21.0336 12.4895 21.2653 11.9816 21.4145C11.4736 21.5637 10.9473 21.6284 10.4218 21.6054C9.89626 21.5824 9.37746 21.4721 8.88631 21.2787C8.39515 21.0854 7.93855 20.8115 7.5335 20.4691C7.12846 20.1267 6.78143 19.7205 6.50701 19.2673C6.23259 18.8142 6.03453 18.3205 5.92178 17.806C5.80904 17.2914 5.78344 16.7637 5.84611 16.2415C5.90878 15.7193 6.05874 15.2099 6.28951 14.7346C6.52028 14.2593 6.82881 13.8243 7.20182 13.4468C7.57483 13.0693 8.00771 12.7547 8.48236 12.517H8.42616V12.3867ZM12.5766 4C15.2238 4 17.6678 5.26026 19.2323 7.27256C19.1163 7.37234 19.0032 7.47211 18.8838 7.58072L18.8837 7.58078C18.0349 8.35368 17.3145 9.1266 16.6522 9.89953C16.0294 9.51874 15.3548 9.22293 14.647 9.02226L14.226 8.91874L13.9708 9.40492C13.5394 9.2674 13.0939 9.16635 12.6414 9.10347C11.9602 9.00618 11.2688 9.00618 10.5875 9.10347C10.1526 9.16397 9.72413 9.2608 9.30785 9.3929L9.02889 8.883L8.57988 8.99142C7.86473 9.19058 7.18395 9.48773 6.556 9.87105C5.88892 9.08953 5.15895 8.30859 4.29649 7.52633C4.17156 7.41238 4.05301 7.30843 3.93447 7.20447C5.4977 5.22425 7.92082 4 10.5766 4H12.5766Z" />
                </svg>
              </div>
              <h3>Customized Service</h3>
              <p>Every cleaning plan is tailored to your specific needs and preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section - Featured services showcase */}
      <section className="services-overview">
        <div className="container">
          <h2>Our <span className="gold-accent">Premium</span> Services</h2>
          <div className="services-grid">
            {/* Residential cleaning service card */}
            <div className="service-card">
              <div className="service-icon">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Residential Cleaning" />
              </div>
              <h3>Residential Cleaning</h3>
              <p>Comprehensive cleaning services tailored to your home's unique needs with meticulous attention to detail.</p>
            </div>
            
            {/* Executive home care service card */}
            <div className="service-card">
              <div className="service-icon">
                <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Executive Home Care" />
              </div>
              <h3>Executive Home Care</h3>
              <p>White-glove services for luxury homes including specialized surface treatment and fine material care.</p>
            </div>
            
            {/* Premium organizing service card */}
            <div className="service-card">
              <div className="service-icon">
                <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Premium Organizing" />
              </div>
              <h3>Premium Organizing</h3>
              <p>Transform chaotic spaces into beautifully organized areas with our professional organizing services.</p>
            </div>
          </div>
          {/* Call-to-action to view all services */}
          <div className="services-cta">
            <Link to="/services" className="btn">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section - Social proof and credibility */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our <span className="gold-accent">Clients</span> Say</h2>
          <div className="testimonial-grid">
            {/* Customer testimonial 1 */}
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>Exclusive Cleaning has transformed my home. Their attention to detail is remarkable, and I always look forward to coming home after their visits.</p>
              <div className="client">
                <strong>Catherine L.</strong>
                <span>Luxury Homeowner</span>
              </div>
            </div>
            
            {/* Customer testimonial 2 */}
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>As someone with a demanding schedule, I appreciate the reliability and professionalism Exclusive Cleaning brings to every service.</p>
              <div className="client">
                <strong>Robert J.</strong>
                <span>Executive Professional</span>
              </div>
            </div>
            
            {/* Customer testimonial 3 */}
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>The difference between Exclusive Cleaning and other services I've tried is night and day. They truly understand the meaning of luxury service.</p>
              <div className="client">
                <strong>Elizabeth M.</strong>
                <span>Interior Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call To Action Section - Conversion-focused section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for an <span className="gold-accent">Immaculate</span> Space?</h2>
            <p>Experience the difference of our premium cleaning services.</p>
            <Link to="/contact" className="btn">Book Your Service Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;