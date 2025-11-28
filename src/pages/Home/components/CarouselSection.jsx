import React from 'react';
import { ArrowRight } from 'lucide-react';

function CarouselSection({ properties, activeProperty, setActiveProperty, onNavigate }) {

  const viewDetails = () => {
    if (onNavigate && properties[activeProperty]) {
      onNavigate("projects", properties[activeProperty].slug);
    }
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-header">
          <h2 className="carousel-title"> Projects</h2>
          <p className="carousel-subtitle">
            Discover our latest architectural masterpieces that showcase innovation,
            functionality, and aesthetic excellence in every detail.
          </p>
        </div>

        <div className="carousel-main">
          <div className="carousel-slide">
            <img
              src={properties[activeProperty].image}
              alt={properties[activeProperty].title}
              className="slide-image"
              loading="lazy"
            />

            <div className="slide-content">
              <div className="slide-number">
                {String(activeProperty + 1).padStart(2, '0')} / {String(properties.length).padStart(2, '0')}
              </div>

              <p className="slide-subtitle">{properties[activeProperty].subtitle}</p>

              <h3 className="slide-title">{properties[activeProperty].title}</h3>

              <p className="slide-description">{properties[activeProperty].description}</p>

              <button className="slide-button" onClick={viewDetails}>
                View Details <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="carousel-indicators">
            {properties.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeProperty ? 'active' : ''}`}
                onClick={() => setActiveProperty(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarouselSection;
