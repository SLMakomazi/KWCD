import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './TeamCarousel.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sweetness Nomfusi Vos',
      role: 'Chairperson',
      image: '/images/team/member1.jpg'
    },
    {
      id: 2,
      name: 'Zimasa Faku',
      role: 'Deputy Chairperson',
      image: '/images/team/member2.jpg'
    },
    {
      id: 3,
      name: 'Luzuko Sizila',
      role: 'Secretary',
      image: '/images/team/member3.jpg'
    },
    {
      id: 4,
      name: 'Mahlubi Nkonzo',
      role: 'Board Member',
      image: '/images/team/member4.jpg'
    },
    {
      id: 5,
      name: 'Onezwa Siko',
      role: 'Treasurer',
      image: '/images/team/member5.jpg'
    },
    {
      id: 6,
      name: 'Busisiwe Ndlhlovu',
      role: 'Board Member',
      image: '/images/team/member6.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const visibleMembers = [
    teamMembers[(currentIndex - 1 + teamMembers.length) % teamMembers.length],
      teamMembers[currentIndex],
      teamMembers[(currentIndex + 1) % teamMembers.length]
  ];

  return (
    <div className="team-carousel">
      <div className="carousel-container">
        <button 
          className="carousel-arrow prev" 
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          aria-label="Previous team member"
        >
          <FaChevronLeft />
        </button>
        
        <div className="carousel-track">
          {visibleMembers.map((member, index) => {
            let slideClass = 'carousel-slide';
            if (index === 0) slideClass += ' prev';
            else if (index === 1) slideClass += ' active';
            else if (index === 2) slideClass += ' next';
            
            return (
              <div 
                key={member.id}
                className={slideClass}
              >
                <div className="team-member-card">
                  <div className="member-image">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/team/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <button 
          className="carousel-arrow next" 
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          aria-label="Next team member"
        >
          <FaChevronRight />
        </button>
      </div>
      
      <div className="carousel-dots">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            aria-label={`Go to team member ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
