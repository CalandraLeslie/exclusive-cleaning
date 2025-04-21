import { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for contacting Exclusive Cleaning. We will be in touch shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Contact Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Contact <span className="gold-accent">Us</span></h1>
          <p>Let us bring our exclusive service to your space</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in <span className="gold-accent">Touch</span></h2>
              <p>We're here to answer any questions about our exclusive cleaning services and how we can tailor them to your specific needs.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>Phone</h3>
                  <p>(800) 555-CLEAN</p>
                  <p className="contact-note">Available Monday-Friday, 9am-6pm</p>
                </div>
                
                <div className="contact-method">
                  <h3>Email</h3>
                  <p>info@exclusivecleaning.com</p>
                  <p className="contact-note">We respond within 24 hours</p>
                </div>
                
                <div className="contact-method">
                  <h3>Visit</h3>
                  <address>
                    123 Luxury Avenue<br />
                    Prestigious Heights, CA 90210
                  </address>
                  <p className="contact-note">By appointment only</p>
                </div>
              </div>
              
              <div className="service-areas">
                <h3>Service Areas</h3>
                <p>We proudly serve the following exclusive neighborhoods:</p>
                <ul>
                  <li>Beverly Hills</li>
                  <li>Bel Air</li>
                  <li>Holmby Hills</li>
                  <li>Malibu</li>
                  <li>Pacific Palisades</li>
                  <li>And other select areas</li>
                </ul>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Request a <span className="gold-accent">Consultation</span></h2>
              <p>Fill out the form below, and one of our representatives will contact you to discuss your specific cleaning needs.</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="executive">Executive Home Care</option>
                    <option value="organizing">Premium Organizing</option>
                    <option value="event">Event Preparation</option>
                    <option value="specialty">Specialty Cleaning</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Our <span className="gold-accent">Location</span></h2>
          {/* In a real implementation, you would embed an actual map here */}
          <div className="map-placeholder">
            <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Map location" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked <span className="gold-accent">Questions</span></h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What makes your cleaning service "exclusive"?</h3>
              <p>Our exclusive service combines premium products, extensively trained staff, meticulous attention to detail, and customized cleaning plans tailored to each client's specific needs and preferences.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do you ensure the security of my home?</h3>
              <p>All our staff undergo thorough background checks. We implement strict security protocols, including secure key management systems and confidentiality agreements for all employees.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are your cleaning products safe for children and pets?</h3>
              <p>Yes, we use high-quality, eco-friendly products that are effective yet safe for all members of your household, including children and pets.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I request specific cleaning products be used?</h3>
              <p>Absolutely. As part of our customized service, we can accommodate requests for specific products, including using client-provided products if preferred.</p>
            </div>
            
            <div className="faq-item">
              <h3>What if I'm not satisfied with a cleaning service?</h3>
              <p>Your satisfaction is our priority. If any aspect of our service doesn't meet your expectations, we'll return to address your concerns at no additional cost.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do I need to be home during the cleaning service?</h3>
              <p>While we're happy to work with you present, it's not necessary. Many of our clients provide secure access to their homes, allowing us to clean while they're away.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;