import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Contact us for any questions or inquiries.</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Our Location</h3>
              <p>123 Kayamandi Main Road<br />Stellenbosch, 7600<br />Western Cape, South Africa</p>
              <a 
                href="https://www.google.com/maps/place/Kayamandi,+Stellenbosch,+South+Africa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View on Map
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3>Contact Info</h3>
              <p>
                <a href="tel:+27718416784">+27 71 841 6784</a><br />
                <a href="mailto:info@kwcd.org.za">info@kwcd.org.za</a>
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FaClock />
              </div>
              <h3>Opening Hours</h3>
              <ul className="hours-list">
                <li><span>Monday - Friday</span> <span>8:00 AM - 5:00 PM</span></li>
                <li><span>Saturday</span> <span>9:00 AM - 1:00 PM</span></li>
                <li><span>Sunday</span> <span>Closed</span></li>
              </ul>
              <p className="emergency">
                <strong>Emergency Contact:</strong> +27 82 555 1234
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="contact-form-content">
              <div className="section-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and our team will get back to you as soon as possible.</p>
              </div>
              
              {submitStatus && (
                <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Donation">Donation</option>
                      <option value="Volunteer">Volunteer</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="contact-map">
              <div className="map-container">
                <iframe
                  title="KWCD Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.787986352538!2d18.84861531521244!3d-33.93451638062852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb5d6b0e7a8a5%3A0x1e3a9b6c1b1b1b1b!2sKayamandi%2C%20Stellenbosch%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="additional-info">
                <h3>Need Help?</h3>
                <p>If you need immediate assistance, please call our helpline or visit us during business hours.</p>
                <div className="quick-contact">
                  <a href="tel:+27718416784" className="btn btn-outline">
                    <FaPhone /> Call Us Now
                  </a>
                  <a href="mailto:info@kwcd.org.za" className="btn btn-primary">
                    <FaEnvelope /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about KWCD and our programs.</p>
          </div>
          
          <div className="faq-container">
            <div className="faq-item">
              <button className="faq-question">
                How can I volunteer with KWCD?
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>We welcome volunteers who are passionate about making a difference. Please visit our <a href="/volunteer">Volunteer</a> page to learn about current opportunities and fill out an application form. Our team will contact you to discuss how you can contribute your skills and time.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question">
                What types of donations do you accept?
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>We accept both monetary and in-kind donations. Monetary donations can be made through our secure online portal, bank transfer, or in person. In-kind donations of food, clothing, school supplies, and other essential items are also welcome. Please <a href="/donate">visit our donation page</a> for more details on current needs and how to contribute.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question">
                How can my organization partner with KWCD?
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>We value partnerships with organizations that align with our mission. Please email <a href="mailto:partnerships@kwcd.org.za">partnerships@kwcd.org.za</a> with information about your organization and the type of partnership you're interested in. Our team will review your inquiry and get back to you to discuss potential collaboration opportunities.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question">
                How can I get help from your programs?
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>If you or someone you know needs assistance, please visit our office during business hours or call us at +27 71 841 6784. You can also email <a href="mailto:help@kwcd.org.za">help@kwcd.org.za</a> with your specific needs, and our team will guide you through the process of accessing our services.</p>
              </div>
            </div>
          </div>
          
          <div className="cta-box">
            <h3>Still have questions?</h3>
            <p>Contact us directly and our team will be happy to assist you.</p>
            <a href="mailto:info@kwcd.org.za" className="btn btn-primary">
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
