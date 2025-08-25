
import './VisionPage.css';

const VisionPage = () => {
  return (
    <div className="vision-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Vision & Mission</h1>
          <p>Building a better future for the Kayamandi community</p>
        </div>
      </section>
      
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-mission-card">
              <div className="vision-mission-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h2>Our Vision</h2>
              <p>
                A society where women and children can live with dignity, equality, and opportunity, 
                free from violence and poverty. We envision a Kayamandi where every individual has 
                access to education, healthcare, and the resources needed to thrive.
              </p>
            </div>
            
            <div className="vision-mission-card">
              <div className="vision-mission-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h2>Our Mission</h2>
              <p>
                To empower women and children in Kayamandi through comprehensive support services, 
                education, and community development programs that foster self-reliance, resilience, 
                and positive social change.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>Guiding principles that shape our work</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Compassion</h3>
              <p>We approach our work with empathy, understanding, and care for all members of our community.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3>Empowerment</h3>
              <p>We believe in equipping individuals with the tools and confidence to create positive change.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>We work together with the Kayamandi community to identify needs and develop solutions.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Integrity</h3>
              <p>We maintain the highest standards of honesty, transparency, and accountability.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Education</h3>
              <p>We believe education is the foundation for personal growth and community development.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Partnership</h3>
              <p>We collaborate with individuals, organizations, and stakeholders to maximize our impact.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="history-section">
        <div className="container">
          <div className="section-header">
            <h2>Our History</h2>
            <p>From humble beginnings to making a lasting impact</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2007</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>KWCD was founded with the establishment of the Trauma Room, providing critical support to victims of violence in Kayamandi.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Expanding Our Reach</h3>
                <p>Launched the CNDC Feeding Scheme to address food insecurity in the community, serving nutritious meals to children and families in need.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Growing Stronger</h3>
                <p>Expanded our programs to include educational workshops, skills development, and community outreach initiatives.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Pandemic Response</h3>
                <p>Adapted our services to meet the increased needs during the COVID-19 pandemic, providing emergency food relief and support.</p>
              </div>
            </div>
            
            <div className="timeline-item future">
              <div className="timeline-year">Future</div>
              <div className="timeline-content">
                <h3>Our Vision for Tomorrow</h3>
                <p>Expanding our impact with a new Safe House facility and enhanced programs to serve more members of the Kayamandi community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <h2>Join Us in Making a Difference</h2>
          <p>Your support helps us continue our vital work in the Kayamandi community</p>
          <div className="cta-buttons">
            <a href="/donate" className="btn btn-primary">Donate Now</a>
            <a href="/contact" className="btn btn-outline">Get Involved</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
