import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PartnersGrid.css';

interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
  category: 'corporate' | 'community' | 'government' | 'ngo';
}

const PartnersGrid = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const partners: Partner[] = [
    {
      id: 1,
      name: 'Stellenbosch Municipality',
      logo: '/images/partners/stellenbosch-municipality.png',
      website: 'https://www.stellenbosch.gov.za',
      category: 'government'
    },
    {
      id: 2,
      name: 'Western Cape Government',
      logo: '/images/partners/wc-government.png',
      website: 'https://www.westerncape.gov.za',
      category: 'government'
    },
    {
      id: 3,
      name: 'Stellenbosch University',
      logo: '/images/partners/stellenbosch-university.png',
      website: 'https://www.sun.ac.za',
      category: 'community'
    },
    {
      id: 4,
      name: 'Kayamandi Development Forum',
      logo: '/images/partners/kdf-logo.png',
      website: '#',
      category: 'community'
    },
    {
      id: 5,
      name: 'Local Business Association',
      logo: '/images/partners/default-logo.png',
      website: '#',
      category: 'corporate'
    },
    {
      id: 6,
      name: 'Community Health Initiative',
      logo: '/images/partners/default-logo.png',
      website: '#',
      category: 'ngo'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Partners' },
    { id: 'government', name: 'Government' },
    { id: 'community', name: 'Community' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'ngo', name: 'NGOs' }
  ];

  const filteredPartners = activeFilter === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeFilter);

  const getCategoryClass = (category: string) => {
    switch(category) {
      case 'government':
        return 'bg-blue-100 text-blue-800';
      case 'community':
        return 'bg-green-100 text-green-800';
      case 'corporate':
        return 'bg-purple-100 text-purple-800';
      case 'ngo':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : category;
  };

  return (
    <div className="partners-grid-container">
      <div className="filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {filteredPartners.length > 0 ? (
        <div className="partners-grid">
          {filteredPartners.map(partner => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo-container">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="partner-logo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/partners/default-logo.png';
                  }}
                />
              </div>
              <div className="partner-info">
                <h3 className="partner-name">{partner.name}</h3>
                <span className={`partner-category ${getCategoryClass(partner.category)}`}>
                  {getCategoryName(partner.category)}
                </span>
              </div>
              <a 
                href={partner.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="partner-link"
                aria-label={`Visit ${partner.name} website`}
              >
                <span>Visit Website</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No partners found in this category.</p>
        </div>
      )}

      <div className="partner-cta">
        <p>Interested in becoming a partner?</p>
        <Link to="/contact" className="btn btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default PartnersGrid;
