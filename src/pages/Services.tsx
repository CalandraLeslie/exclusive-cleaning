import { Link } from 'react-router-dom';
import '../styles/services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Services Header */}
      <section className="services-header">
        <div className="container">
          <h1>Our <span className="gold-accent">Services</span></h1>
          <p>Tailored cleaning solutions for discerning clients</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="services-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Premium Cleaning <span className="gold-accent">Experiences</span></h2>
            <p>At Exclusive Cleaning, we understand that true luxury lies in the details. Our comprehensive range of services is designed to cater to the unique needs of high-end residences and discerning clients who expect nothing but the best.</p>
            <p>Each service can be customized to your specific requirements, ensuring a personalized experience that respects your space and preferences.</p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="service-list">
        <div className="container">
          {/* Residential Cleaning */}
          <div className="service-item">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Residential Cleaning" />
            </div>
            <div className="service-details">
              <h3>Residential Cleaning</h3>
              <p>Our signature residential cleaning service transforms your home into an immaculate sanctuary. Our trained professionals meticulously attend to every surface with care and precision.</p>
              <div className="service-features">
                <ul>
                  <li>Thorough dusting of all surfaces and decorative items</li>
                  <li>Complete kitchen and bathroom sanitization</li>
                  <li>Floor care tailored to your specific flooring materials</li>
                  <li>Window and glass cleaning for crystal-clear results</li>
                  <li>Detailed attention to often-overlooked areas</li>
                </ul>
              </div>
              <div className="service-options">
                <p><strong>Options:</strong> Weekly, Bi-weekly, Monthly, or One-time service</p>
              </div>
            </div>
          </div>

          {/* Executive Home Care */}
          <div className="service-item reverse">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1617104678098-de229db51b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Executive Home Care" />
            </div>
            <div className="service-details">
              <h3>Executive Home Care</h3>
              <p>Our most comprehensive service package designed for luxury homes with exacting standards. Executive Home Care includes everything in our residential service with additional premium touches.</p>
              <div className="service-features">
                <ul>
                  <li>Specialized care for fine materials and surfaces</li>
                  <li>Hand-washed crystal and fine china</li>
                  <li>Detailed woodwork polishing and conditioning</li>
                  <li>High-end appliance cleaning and detailing</li>
                  <li>Fresh flower arrangement (upon request)</li>
                  <li>Premium linen changing and bed making</li>
                </ul>
              </div>
              <div className="service-options">
                <p><strong>Options:</strong> Weekly or Bi-weekly service</p>
              </div>
            </div>
          </div>

          {/* Premium Organizing */}
          <div className="service-item">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Premium Organizing" />
            </div>
            <div className="service-details">
              <h3>Premium Organizing</h3>
              <p>Transform chaotic spaces into beautifully arranged, functional areas with our professional organizing service. Our specialists create customized systems that enhance both aesthetics and efficiency.</p>
              <div className="service-features">
                <ul>
                  <li>Comprehensive assessment of your space and needs</li>
                  <li>Customized organization plan development</li>
                  <li>Careful categorization and arrangement of items</li>
                  <li>Implementation of aesthetic and functional storage solutions</li>
                  <li>Maintenance recommendations and follow-up service</li>
                </ul>
              </div>
              <div className="service-options">
                <p><strong>Options:</strong> Single room, Multiple rooms, or Whole house</p>
              </div>
            </div>
          </div>

          {/* Event Preparation */}
          <div className="service-item reverse">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Event Preparation" />
            </div>
            <div className="service-details">
              <h3>Event Preparation</h3>
              <p>Ensure your space is impeccable for special occasions with our pre-event cleaning and preparation service. We'll help you create the perfect setting for entertaining guests.</p>
              <div className="service-features">
                <ul>
                  <li>Thorough deep cleaning of entertainment areas</li>
                  <li>Special attention to guest spaces and bathrooms</li>
                  <li>Glass and silverware polishing</li>
                  <li>Outdoor space preparation</li>
                  <li>Post-event cleanup available</li>
                </ul>
              </div>
              <div className="service-options">
                <p><strong>Options:</strong> Pre-event, Post-event, or Complete package</p>
              </div>
            </div>
          </div>

          {/* Specialty Cleaning */}
          <div className="service-item">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Specialty Cleaning" />
            </div>
            <div className="service-details">
              <h3>Specialty Cleaning</h3>
              <p>For specific cleaning needs that require specialized expertise, equipment, or products. Our team is trained to handle a variety of specialty cleaning tasks.</p>
              <div className="service-features">
                <ul>
                  <li>Chandelier and fine lighting fixture cleaning</li>
                  <li>Art and sculpture care</li>
                  <li>Antique and heirloom maintenance</li>
                  <li>High-end carpet and rug cleaning</li>
                  <li>Marble, granite, and natural stone care</li>
                  <li>Fine wood furniture polishing and restoration</li>
                </ul>
              </div>
              <div className="service-options">
                <p><strong>Options:</strong> Individual services or package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="our-process">
        <div className="container">
          <h2>Our <span className="gold-accent">Process</span></h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>We begin with a thorough consultation to understand your specific needs, preferences, and any special requirements for your space.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Customized Proposal</h3>
              <p>Based on your consultation, we develop a tailored cleaning plan and provide a detailed proposal outlining services and pricing.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Service Delivery</h3>
              <p>Our professional team arrives on schedule with all necessary premium supplies to execute your customized cleaning plan with precision.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Quality Inspection</h3>
              <p>After service completion, a thorough quality check ensures every detail meets our exacting standards and your expectations.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Follow-up & Refinement</h3>
              <p>We maintain open communication to continuously refine our service to your preferences and provide ongoing satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="pricing-info">
        <div className="container">
          <h2>Customized <span className="gold-accent">Pricing</span></h2>
          <p>At Exclusive Cleaning, we recognize that each residence and client has unique needs. Our pricing is customized based on the specific requirements of your space and selected services.</p>
          <p>We provide detailed, transparent pricing proposals following your initial consultation. For a personalized quote, please contact us to arrange a consultation.</p>
          
          <div className="pricing-cta">
            <Link to="/contact" className="btn">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;