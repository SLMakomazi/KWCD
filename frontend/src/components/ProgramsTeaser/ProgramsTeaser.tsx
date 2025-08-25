import { Link } from 'react-router-dom';
import { FaUtensils, FaBook, FaHandsHelping, FaHeart, FaArrowRight } from 'react-icons/fa';
import './ProgramsTeaser.css';

const ProgramsTeaser = () => {
  const programs = [
    {
      icon: <FaUtensils className="program-icon" />,
      title: 'Feeding Scheme',
      description: 'Providing nutritious meals to children and families in need through our community feeding program.',
      link: '/programs/feeding-scheme'
    },
    {
      icon: <FaBook className="program-icon" />,
      title: 'Education Support',
      description: 'Offering after-school programs, tutoring, and educational resources for children and youth.',
      link: '/programs/education'
    },
    {
      icon: <FaHandsHelping className="program-icon" />,
      title: 'Skills Development',
      description: 'Empowering community members with vocational training and skills development programs.',
      link: '/programs/skills-development'
    },
    {
      icon: <FaHeart className="program-icon" />,
      title: 'Trauma Support',
      description: 'Providing counseling and support services for victims of violence and trauma.',
      link: '/programs/trauma-support'
    }
  ];

  return (
    <section className="programs-teaser-section">
      <div className="programs-teaser-container">
        <div className="programs-teaser-wrapper">
          <div className="programs-teaser-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-teaser-card">
                <div className="program-teaser-icon">
                  {program.icon}
                </div>
                <h3 className="program-teaser-title">{program.title}</h3>
                <p className="program-teaser-description">{program.description}</p>
                <Link to={program.link} className="program-teaser-link">
                  Learn More <FaArrowRight className="program-teaser-arrow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsTeaser;
