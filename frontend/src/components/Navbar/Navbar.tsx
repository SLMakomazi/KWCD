import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="KWCD Logo" className="logo-img" />
          </Link>

          <h1 className="org-name">
            <span className="org-logo-text">KWCD</span>
          </h1>

          {/* Mobile menu button */}
          <button 
            className={`hamburger-menu ${isOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '48px',
              height: '48px',
              padding: '12px',
              marginLeft: 'auto',
              zIndex: 1001,
              position: 'relative',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '24px',
              height: '18px',
              position: 'relative'
            }}>
              <span style={{
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: 'var(--color-primary)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: isOpen ? 'translateY(8px) rotate(45deg)' : 'none',
                opacity: 1
              }}></span>
              <span style={{
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: 'var(--color-primary)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? 'translateX(-20px)' : 'none'
              }}></span>
              <span style={{
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: 'var(--color-primary)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'
              }}></span>
            </div>
          </button>

          {/* Navigation Links */}
          <div className={`nav-content ${isOpen ? 'active' : ''}`}>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
              <li className={`nav-item ${isOpen ? 'active' : ''}`}>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li className={`nav-item ${isOpen ? 'active' : ''}`}>
                <Link to="/vision" className={`nav-link ${location.pathname === '/vision' ? 'active' : ''}`}>
                  Our Vision
                </Link>
              </li>
              <li className={`nav-item ${isOpen ? 'active' : ''}`}>
                <Link to="/programs" className={`nav-link ${location.pathname === '/programs' ? 'active' : ''}`}>
                  Programs
                </Link>
              </li>
              <li className={`nav-item ${isOpen ? 'active' : ''}`}>
                <Link to="/team" className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}>
                  Our Team
                </Link>
              </li>
              <li className={`nav-item ${isOpen ? 'active' : ''}`}>
                <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>
                  Gallery
                </Link>
              </li>
            </ul>
            
            {/* Donate Button - Separate from nav links */}
            <div className="nav-donate">
              <Link to="/donate" className="btn btn-donate">
                Donate Now
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
