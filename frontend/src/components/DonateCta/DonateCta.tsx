
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaDonate, FaHeart } from 'react-icons/fa';
import './DonateCta.css';

const DonateCta = () => {
  const donationOptions = [
    {
      icon: <FaHandHoldingHeart className="donation-icon" />,
      title: 'One-Time Donation',
      description: 'Make a single donation to support our programs and initiatives.',
      buttonText: 'Donate Now',
      link: '/donate/one-time'
    },
    {
      icon: <FaHeart className="donation-icon" />,
      title: 'Monthly Giving',
      description: 'Become a monthly donor and provide sustained support for our work.',
      buttonText: 'Give Monthly',
      link: '/donate/monthly'
    },
    {
      icon: <FaDonate className="donation-icon" />,
      title: 'Fundraise',
      description: 'Start a fundraiser and encourage others to support our cause.',
      buttonText: 'Start Fundraising',
      link: '/fundraise'
    }
  ];

  return (
    <div className="donate-cta">
      <div className="container">
        <div className="section-header">
          <h2>Your Support Makes a Difference</h2>
          <p>Every contribution helps us create positive change in the Kayamandi community</p>
        </div>
        
        <div className="donation-options">
          {donationOptions.map((option, index) => (
            <div key={index} className="donation-option">
              <div className="donation-icon-container">
                {option.icon}
              </div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <Link to={option.link} className="btn btn-light">
                {option.buttonText}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="impact-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Meals Served Monthly</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Children Supported</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Families Helped</span>
          </div>
        </div>
        
        <div className="other-ways">
          <h3>Other Ways to Support</h3>
          <div className="support-options">
            <Link to="/volunteer" className="support-option">
              <span className="support-icon">🤝</span>
              <span>Volunteer</span>
            </Link>
            <Link to="/partner" className="support-option">
              <span className="support-icon">🤲</span>
              <span>Become a Partner</span>
            </Link>
            <Link to="/sponsor" className="support-option">
              <span className="support-icon">💝</span>
              <span>Sponsor a Child</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateCta;
