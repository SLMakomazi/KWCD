import React from 'react';
import { programs } from '@/data/programs';
import './ProgramsPage.css';

interface ProgramStat {
  number: string;
  label: string;
}

interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  stats: ProgramStat[];
  isFutureInitiative?: boolean;
}

const ProgramsPage: React.FC = () => {
  const currentPrograms = programs.filter(program => !program.isFutureInitiative);
  const futureInitiatives = programs.filter(program => program.isFutureInitiative);

  const renderProgramCard = (program: Program, index: number) => (
    <div key={program.id} className={`program-card ${index % 2 === 1 ? 'reverse' : ''}`}>
      <div className="program-image">
        <img src={program.image} alt={program.title} />
      </div>
      <div className="program-content">
        {program.isFutureInitiative && (
          <span className="program-tag">Coming Soon</span>
        )}
        <span className="program-category">{program.category}</span>
        <h2>{program.title}</h2>
        <p>{program.description}</p>
        
        {program.features.length > 0 && (
          <ul className="program-features">
            {program.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}
        
        <div className="program-stats">
          {program.stats.map((stat, i) => (
            <div key={i} className="stat">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="container">
          <h1>Our Programs & Initiatives</h1>
          <p>Making a lasting impact in the Kayamandi community through comprehensive support and development programs</p>
        </div>
      </section>

      {/* Current Programs */}
      <section className="program-section current-programs">
        <div className="container">
          <div className="section-header">
            <h2>Current Programs</h2>
            <p>Ongoing initiatives making a difference in our community</p>
          </div>
          
          <div className="programs-grid">
            {currentPrograms.map((program, index) => renderProgramCard(program, index))}
          </div>
        </div>
      </section>

      {/* Future Initiatives */}
      {futureInitiatives.length > 0 && (
        <section className="program-section future-initiatives">
          <div className="container">
            <div className="section-header">
              <h2>Future Initiatives</h2>
              <p>Upcoming programs and expansions to better serve our community</p>
            </div>
            
            <div className="programs-grid">
              {futureInitiatives.map((program, index) => renderProgramCard(program, index))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProgramsPage;
