import './Hero.css';

const Hero = () => {
  return (
    <section className="hero hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Kayamandi Women & Children Development</h1>
            <p className="hero-subtitle">
              Providing support, education, and resources to create lasting change in our community.
            </p>
            <div className="hero-buttons">
              <a href="/donate" className="btn btn-primary">Donate Now</a>
              <a href="/programs" className="btn btn-outline">Our Programs</a>
            </div>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">250+</span>
                <span className="stat-label">Meals Served Daily</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years of Service</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Lives Impacted</span>
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              src="/heroImage.png"
              alt="KWCD Community"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
