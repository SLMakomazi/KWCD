import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './ContactTeaser.css';

const ContactTeaser = (): React.JSX.Element => {
  return (
    <div className="contact-teaser">
      <div className="container">
        <div className="contact-teaser-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="subtitle">We'd love to hear from you. Reach out to us for any questions or inquiries.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h3>Our Location</h3>
                  <p>123 Kayamandi Main Road<br />Stellenbosch, 7600<br />Western Cape, South Africa</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <h3>Contact Info</h3>
                  <p>
                    <a href="tel:+27718416784">+27 71 841 6784</a><br />
                    <a href="mailto:info@kwcd.org.za">info@kwcd.org.za</a>
                  </p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div className="contact-details">
                  <h3>Opening Hours</h3>
                  <p>
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form-card">
              <h3>Send Us a Message</h3>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="+27 12 345 6789"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTeaser;
