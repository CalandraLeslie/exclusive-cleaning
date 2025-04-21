import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Exclusive <span className="gold-accent">Cleaning</span></h1>
          <p>Where immaculate spaces meet exceptional service</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn">Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Book Now</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>Our <span className="gold-accent">Premium</span> Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Residential Cleaning" />
              </div>
              <h3>Residential Cleaning</h3>
              <p>Comprehensive cleaning services tailored to your home's unique needs with meticulous attention to detail.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Executive Home Care" />
              </div>
              <h3>Executive Home Care</h3>
              <p>White-glove services for luxury homes including specialized surface treatment and fine material care.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Premium Organizing" />
              </div>
              <h3>Premium Organizing</h3>
              <p>Transform chaotic spaces into beautifully organized areas with our professional organizing services.</p>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="choose-content">
            <h2>Why Choose <span className="gold-accent">Exclusive Cleaning</span></h2>
            <div className="benefits">
              <div className="benefit">
                <h3>Expertly Trained Staff</h3>
                <p>Our cleaning professionals undergo rigorous training and background checks to ensure the highest standards.</p>
              </div>
              
              <div className="benefit">
                <h3>Premium Products</h3>
                <p>We use only eco-friendly, high-quality cleaning products safe for your family and pets.</p>
              </div>
              
              <div className="benefit">
                <h3>Attention to Detail</h3>
                <p>We pride ourselves on noticing and addressing the small details that others might miss.</p>
              </div>
              
              <div className="benefit">
                <h3>Customized Service</h3>
                <p>Every cleaning plan is tailored to your specific needs and preferences.</p>
              </div>
            </div>
          </div>
          <div className="choose-image">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Exclusive cleaning service" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our <span className="gold-accent">Clients</span> Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>Exclusive Cleaning has transformed my home. Their attention to detail is remarkable, and I always look forward to coming home after their visits.</p>
              <div className="client">
                <strong>Catherine L.</strong>
                <span>Luxury Homeowner</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="quote">"</div>
              <p>As someone with a demanding schedule, I appreciate the reliability and professionalism Exclusive Cleaning brings to every service.</p>
              <div className="client">
                <strong>Robert J.</strong>
                <span>Executive Professional</span>
              </div>
            </div>
            
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

      {/* Call To Action */}
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