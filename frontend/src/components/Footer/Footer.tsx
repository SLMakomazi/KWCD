import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3 className="footer-title">KWCD</h3>
              <p>
                Empowering women and children in Kayamandi through education, support, and community development programs.
              </p>
            </div>

            <div className="footer-links">
              <h4 className="footer-heading">Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/vision">Our Vision</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>16 Sokuqala Street, Kayamandi, 7600</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+27718416784">071 841 6784</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:kayamanditc@outlook.com">kayamanditc@outlook.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-social">
        <div className="container">
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Kayamandi Women & Children's Development. All Rights Reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
