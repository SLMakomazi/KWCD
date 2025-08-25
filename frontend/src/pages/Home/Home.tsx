import { Link } from 'react-router-dom';
import Hero from '@/components/Hero/Hero';
import VisionTeaser from '@/components/VisionTeaser/VisionTeaser';
import ProgramsTeaser from '@/components/ProgramsTeaser/ProgramsTeaser';
import TeamCarousel from '@/components/TeamCarousel/TeamCarousel';
import DonateCta from '@/components/DonateCta/DonateCta';
import PartnersGrid from '@/components/PartnersGrid/PartnersGrid';
import ContactTeaser from '@/components/ContactTeaser/ContactTeaser';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />
      
      {/* Vision Teaser */}
      <section className="section section-vision">
        <div className="container">
          <VisionTeaser />
        </div>
      </section>

      {/* Programs Teaser */}
      <section className="section section-programs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">Making a difference in the Kayamandi community</p>
          </div>
          <ProgramsTeaser />
          <div className="text-center mt-5">
            <Link to="/programs" className="btn btn-primary">View All Programs</Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">Dedicated individuals making an impact</p>
          </div>
          <TeamCarousel />
          <div className="text-center mt-5">
            <Link to="/team" className="btn btn-outline-primary">View Full Team</Link>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="section section-donate">
        <div className="container">
          <DonateCta />
        </div>
      </section>

      {/* Partners Section */}
      <section className="section section-partners">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Partners</h2>
            <p className="section-subtitle">Working together for a better future</p>
          </div>
          <PartnersGrid />
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="section section-contact">
        <div className="container">
          <ContactTeaser />
        </div>
      </section>
    </div>
  );
};

export default Home;
