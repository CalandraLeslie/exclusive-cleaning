import '../styles/about.css';

/**
 * About page component for the Exclusive Cleaning website
 * Contains comprehensive information about the company including:
 * - Company story and founding
 * - Mission and values
 * - Team information and qualifications
 * - Core values and principles
 * 
 * @returns {JSX.Element} Complete about page with company information
 */
const About = () => {
  return (
    <div className="about-page">
      {/* Page Header Section - Introduction to the about page */}
      <section className="about-header">
        <div className="container">
          <h1>About <span className="gold-accent">Exclusive Cleaning</span></h1>
          <p>Delivering premium cleaning experiences for discerning clients since 2010</p>
        </div>
      </section>

      {/* Company Origin Story Section - How the company was founded */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <h2>Our <span className="gold-accent">Story</span></h2>
            <p>Founded in 2010, Exclusive Cleaning began with a simple vision: to provide cleaning services that surpass expectations and deliver true luxury to our clients. Our founder, Elizabeth Harrington, recognized a gap in the market for truly exceptional cleaning services that cater to the unique needs of high-end properties and discerning clients.</p>
            <p>What started as a boutique service with a small team of handpicked professionals has grown into a respected name in luxury cleaning, while maintaining our commitment to personalized service and immaculate results.</p>
            <p>Today, we serve select clients throughout the region, bringing our signature attention to detail and white-glove service to homes that demand nothing but the best.</p>
          </div>
          {/* Company founder/leadership image */}
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Exclusive Cleaning founder" />
          </div>
        </div>
      </section>

      {/* Company Mission Section - Purpose and values */}
      <section className="our-mission">
        <div className="container">
          {/* Mission statement supporting image */}
          <div className="mission-image">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Exclusive cleaning mission" />
          </div>
          <div className="mission-content">
            <h2>Our <span className="gold-accent">Mission</span></h2>
            <p>At Exclusive Cleaning, we believe that a truly clean environment is more than just an absence of dirt—it's a carefully crafted experience that engages all the senses and creates a haven of tranquility.</p>
            <p>Our mission is to transform our clients' spaces into pristine sanctuaries through meticulous cleaning, thoughtful attention to detail, and a deep understanding of luxury materials and environments.</p>
            <p>We're committed to using only the finest eco-friendly products, employing the most skilled cleaning artisans, and consistently delivering a level of service that exceeds expectations.</p>
          </div>
        </div>
      </section>

      {/* Team Information Section - Staff qualifications and training */}
      <section className="our-team">
        <div className="container">
          <h2>Our <span className="gold-accent">Team</span></h2>
          <p className="team-intro">The heart of Exclusive Cleaning is our exceptional team of cleaning professionals. Each member is:</p>
          
          <div className="team-grid">
            <div className="team-feature">
              <h3>Carefully Selected</h3>
              <p>We hire only 1 in 20 applicants after rigorous screening and background checks.</p>
            </div>
            
            <div className="team-feature">
              <h3>Extensively Trained</h3>
              <p>Our team undergoes 200+ hours of training in specialized cleaning techniques.</p>
            </div>
            
            <div className="team-feature">
              <h3>Professional & Discreet</h3>
              <p>We understand the privacy requirements of our exclusive clientele.</p>
            </div>
            
            <div className="team-feature">
              <h3>Detail Oriented</h3>
              <p>Our cleaning artisans are trained to notice and address what others miss.</p>
            </div>
          </div>
          
          <div className="team-photos">
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Team Member" />
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Team Member" />
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Team Member" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Company's principles and commitments */}
      <section className="our-values">
        <div className="container">
          <h2>Our <span className="gold-accent">Values</span></h2>
          
          <div className="values-grid">
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We hold ourselves to the highest standards in every aspect of our service.</p>
            </div>
            
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We operate with honesty, transparency, and respect for our clients and their homes.</p>
            </div>
            
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We're committed to environmentally responsible practices and products.</p>
            </div>
            
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We continuously seek better methods and solutions for our clients' needs.</p>
            </div>
            
            <div className="value-card">
              <h3>Personalization</h3>
              <p>We recognize that each client and space has unique requirements.</p>
            </div>
            
            <div className="value-card">
              <h3>Reliability</h3>
              <p>Our clients can depend on our consistent, timely, and thorough service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;