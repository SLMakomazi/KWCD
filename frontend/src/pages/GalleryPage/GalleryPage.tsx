import { useState } from 'react';
import { Link } from 'react-router-dom';
import './GalleryPage.css';

type Photo = {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  description: string;
};

// Sample gallery data - in a real app, this would come from an API
const galleryData = {
  categories: [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'programs', name: 'Programs' },
    { id: 'community', name: 'Community' },
    { id: 'volunteers', name: 'Volunteers' },
  ],
  photos: [
    {
      id: 1,
      title: 'Community Workshop',
      category: 'events',
      image: '/images/gallery/event-1.jpg',
      date: '15 March 2024',
      description: 'Empowering community members through skills development workshops.'
    },
    {
      id: 2,
      title: 'Feeding Scheme',
      category: 'programs',
      image: '/images/gallery/program-1.jpg',
      date: '10 March 2024',
      description: 'Providing nutritious meals to children in need through our CNDC Feeding Scheme.'
    },
    {
      id: 3,
      title: 'Youth Program',
      category: 'programs',
      image: '/images/gallery/program-2.jpg',
      date: '5 March 2024',
      description: 'Engaging young people in educational and recreational activities.'
    },
    {
      id: 4,
      title: 'Community Garden',
      category: 'community',
      image: '/images/gallery/community-1.jpg',
      date: '28 February 2024',
      description: 'Growing fresh produce and promoting sustainable living in Kayamandi.'
    },
    {
      id: 5,
      title: 'Volunteer Training',
      category: 'volunteers',
      image: '/images/gallery/volunteer-1.jpg',
      date: '20 February 2024',
      description: 'Training dedicated volunteers to support our community programs.'
    },
    {
      id: 6,
      title: 'Health Awareness Day',
      category: 'events',
      image: '/images/gallery/event-2.jpg',
      date: '15 February 2024',
      description: 'Promoting health and wellness in the Kayamandi community.'
    },
    {
      id: 7,
      title: 'Education Support',
      category: 'programs',
      image: '/images/gallery/program-3.jpg',
      date: '5 February 2024',
      description: 'Supporting children with their education and homework.'
    },
    {
      id: 8,
      title: 'Community Meeting',
      category: 'community',
      image: '/images/gallery/community-2.jpg',
      date: '30 January 2024',
      description: 'Engaging with community members to discuss important issues.'
    },
    {
      id: 9,
      title: 'Volunteer Appreciation',
      category: 'volunteers',
      image: '/images/gallery/volunteer-2.jpg',
      date: '25 January 2024',
      description: 'Celebrating our amazing volunteers and their contributions.'
    },
  ]
};

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredPhotos = activeCategory === 'all' 
    ? galleryData.photos 
    : galleryData.photos.filter(photo => photo.category === activeCategory);

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPhotos.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredPhotos.length));
  };

  const resetGallery = () => {
    setVisibleCount(3);
  };

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1>Our Gallery</h1>
          <p>Capturing moments of impact and community transformation</p>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="gallery-nav">
        <div className="container">
          <div className="gallery-categories">
            {galleryData.categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {visiblePhotos.map(photo => (
              <div 
                key={photo.id} 
                className="gallery-item"
                onClick={() => openModal(photo)}
              >
                <div className="gallery-image">
                  <img src={photo.image} alt={photo.title} />
                  <div className="gallery-overlay">
                    <h3>{photo.title}</h3>
                    <span className="category">{photo.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="gallery-actions">
            {hasMore ? (
              <button className="btn btn-outline" onClick={loadMore}>
                Load More
              </button>
            ) : visibleCount > 3 && (
              <button className="btn btn-outline" onClick={resetGallery}>
                Hide
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Become Part of Our Story</h2>
            <p>Join us in making a difference in the Kayamandi community. Your support helps us create more moments worth capturing.</p>
            <div className="cta-buttons">
              <Link to="/donate" className="btn btn-primary">Donate Now</Link>
              <Link to="/volunteer" className="btn btn-outline">Volunteer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="photo-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-image">
              <img src={selectedPhoto.image} alt={selectedPhoto.title} />
            </div>
            <div className="modal-info">
              <h3>{selectedPhoto.title}</h3>
              <div className="meta">
                <span className="category">{selectedPhoto.category}</span>
                <span className="date">{selectedPhoto.date}</span>
              </div>
              <p>{selectedPhoto.description}</p>
              <div className="modal-actions">
                <button className="btn btn-outline">
                  <i className="fas fa-download"></i> Download
                </button>
                <button className="btn btn-outline">
                  <i className="fas fa-share"></i> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
