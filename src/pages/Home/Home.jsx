import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin, Users, Briefcase, Award } from 'lucide-react';
import home1 from '../../assets/home/home1.jpg';
import home2 from '../../assets/home/home2.jpg';
import home4 from '../../assets/home/home4.avif';  
import home5 from '../../assets/home/home5.jpg';
import home6 from '../../assets/home/home6.jpg';
import home7 from '../../assets/home/home7.jpg';
import home8 from '../../assets/home/home8.jpg';
import home9 from '../../assets/home/home9.jpg';

function HomePage({onNavigate}) {
  const [activeProperty, setActiveProperty] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Array of your imported images for carousel
  const originalImages = [home1, home8, home9, home7, home6, home5, home2, home4];
  
  // Create extended array with duplicates for smooth infinite loop
  const carouselImages = [...originalImages, ...originalImages];

  const properties = [
    {
      title: "Modern House",
      subtitle: "Contemporary Design",
      description: "A stunning example of modern architecture with clean lines and open spaces that redefine contemporary living.",
      image: home1
    },
    {
      title: "Urban Office",
      subtitle: "Commercial Space",
      description: "Innovative office design that promotes creativity and collaboration in a sophisticated urban environment.",
      image: home2
    },
    {
      title: "Luxury Apartment",
      subtitle: "Residential Complex",
      description: "High-end residential design featuring premium materials and thoughtful spatial arrangements.",
      image: home4
    }
  ];

  // Smooth infinite carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle the infinite loop reset
  useEffect(() => {
    if (currentImageIndex === originalImages.length) {
      // When we reach the duplicate set, wait for transition to complete, then reset
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentImageIndex(0);
        
        // Re-enable transition after a brief moment
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 800); // Match the CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [currentImageIndex, originalImages.length]);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .homepage-container {
      min-height: 100vh;
      background-color: #f5f5f4;
      font-family: 'Poppins', sans-serif;
    }

    /* Hero Section */
    .hero-section {
      padding: 60px 48px;
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    .hero-container {
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .hero-title {
      font-size: 4.5rem;
      font-weight: 200;
      color: #1c1917;
      line-height: 1.1;
      margin-bottom: 20px;
    }

    .hero-title-bold {
      font-weight: 700;
    }

    .hero-description {
      font-size: 1.25rem;
      color: #57534e;
      line-height: 1.7;
      max-width: 450px;
      font-weight: 300;
    }

    .hero-buttons {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .primary-button {
      background-color: #1c1917;
      color: white;
      padding: 16px 40px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.1rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }

    .primary-button:hover {
      background-color: #292524;
      transform: translateY(-2px);
    }

    .secondary-button {
      border: 2px solid #d6d3d1;
      color: #44403c;
      background-color: transparent;
      padding: 14px 38px;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1.1rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }

    .secondary-button:hover {
      background-color: #e7e5e4;
      transform: translateY(-2px);
    }

    /* Carousel Container */
    .carousel-container {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      aspect-ratio: 1;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }

    .carousel-wrapper {
      display: flex;
      height: 100%;
      transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
    }

    .carousel-wrapper.no-transition {
      transition: none;
    }

    .carousel-slide {
      min-width: 100%;
      height: 100%;
    }

    .carousel-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .carousel-indicators {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgba(255,255,255,0.3);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .indicator.active {
      background-color: white;
      transform: scale(1.2);
    }

    /* Featured Properties Section */
    .featured-section {
      padding: 80px 48px;
    }

    .featured-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .featured-header {
      display: flex;
      justify-content: space-between;
      align-items: end;
      margin-bottom: 60px;
    }

    .featured-title {
      font-size: 3.5rem;
      font-weight: 200;
      color: #1c1917;
    }

    .navigation-buttons {
      display: flex;
      gap: 12px;
    }

    .nav-button {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 2px solid #d6d3d1;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1.2rem;
      color: #57534e;
    }

    .nav-button:hover {
      background-color: #1c1917;
      color: white;
      border-color: #1c1917;
    }

    .properties-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 40px;
    }

    .main-property {
      cursor: pointer;
    }

    .main-property-image {
      aspect-ratio: 4/3;
      background-color: #e7e5e4;
      border-radius: 20px;
      overflow: hidden;
      margin-bottom: 24px;
    }

    .property-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .property-image:hover {
      transform: scale(1.05);
    }

    .property-subtitle {
      font-size: 0.9rem;
      color: #78716c;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 12px;
      font-weight: 600;
    }

    .property-title {
      font-size: 2rem;
      font-weight: 300;
      color: #1c1917;
      margin-bottom: 12px;
    }

    .property-description {
      color: #57534e;
      line-height: 1.7;
      font-size: 1rem;
      font-weight: 300;
    }

    .side-properties {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .side-property {
      cursor: pointer;
    }

    .side-property-image {
      aspect-ratio: 1;
      background-color: #e7e5e4;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: 20px;
    }

    .side-property-title {
      font-size: 1.3rem;
      font-weight: 400;
      color: #1c1917;
      margin-bottom: 8px;
    }

    .side-property-description {
      font-size: 0.95rem;
      color: #57534e;
      font-weight: 300;
      line-height: 1.6;
    }

    /* Services Section */
    .services-section {
      padding: 80px 48px;
      background-color: #fafaf9;
    }

    .services-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .services-title {
      font-size: 3.5rem;
      font-weight: 200;
      color: #1c1917;
      text-align: center;
      margin-bottom: 80px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 60px;
    }

    .service-item {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .service-icon {
      width: 80px;
      height: 80px;
      background-color: #1c1917;
      border-radius: 20px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.3s ease;
    }

    .service-icon:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(28, 25, 23, 0.3);
    }

    .service-title {
      font-size: 1.4rem;
      font-weight: 600;
      color: #1c1917;
    }

    .service-description {
      color: #57534e;
      line-height: 1.7;
      font-weight: 300;
      font-size: 1rem;
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .hero-section {
        padding: 40px 24px;
        min-height: auto;
      }

      .hero-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .hero-title {
        font-size: 2.8rem;
        text-align: center;
      }

      .hero-description {
        font-size: 1.1rem;
        text-align: center;
        max-width: 100%;
      }

      .hero-buttons {
        justify-content: center;
      }

      .primary-button,
      .secondary-button {
        padding: 14px 32px;
        font-size: 1rem;
      }

      .featured-section {
        padding: 60px 24px;
      }

      .featured-title {
        font-size: 2.5rem;
        text-align: center;
      }

      .featured-header {
        flex-direction: column;
        gap: 30px;
        text-align: center;
      }

      .properties-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .property-title {
        font-size: 1.6rem;
      }

      .services-section {
        padding: 60px 24px;
      }

      .services-title {
        font-size: 2.5rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .nav-button {
        width: 48px;
        height: 48px;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2.2rem;
      }

      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }

      .primary-button,
      .secondary-button {
        width: 100%;
        max-width: 280px;
        justify-content: center;
      }

      .featured-title,
      .services-title {
        font-size: 2rem;
      }

      .hero-section {
        padding: 30px 20px;
      }

      .featured-section,
      .services-section {
        padding: 50px 20px;
      }
    }
  `;

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  const getActiveIndicatorIndex = () => {
    return currentImageIndex >= originalImages.length ? currentImageIndex - originalImages.length : currentImageIndex;
  };

    const handleGetStarted = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const handleViewWork = () => {
    if (onNavigate) {
      onNavigate('projects');
    }
  };


  return (
    <>
      <style>{styles}</style>
      <div className="homepage-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-grid">
              {/* Left Content */}
              <div className="hero-content">
                <div>
                  <h1 className="hero-title">
                    Transform Spaces
                    <br />
                    <span className="hero-title-bold">Inspire Lives</span>
                  </h1>
                  <div style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '600', 
                    color: '#1c1917', 
                    marginBottom: '16px',
                    lineHeight: '1.3'
                  }}>
                    Precision on Paper. Power in Space.
                  </div>
                  <div style={{ 
                    fontSize: '1.1rem', 
                    fontStyle: 'italic', 
                    color: '#57534e', 
                    marginBottom: '20px'
                  }}>
                    A philosophy we live by. A promise we build with.
                  </div>
                  <p className="hero-description">
                    We create architectural masterpieces that blend innovative design with functional excellence, transforming your vision into reality.
                  </p>
                </div>
                
                <div className="hero-buttons">
                  <button className="primary-button"
                    onClick={handleGetStarted}
                  >
                    Get Started
                    <ArrowRight size={20} />
                  </button>
                  <button className="secondary-button"    
                    onClick={handleViewWork}
                  >
                    View Work
                  </button>
                </div>
              </div>

              {/* Right Image Carousel */}
              <div className="carousel-container">
                <div 
                  className={`carousel-wrapper ${!isTransitioning ? 'no-transition' : ''}`}
                  style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`
                  }}
                >
                  {carouselImages.map((image, index) => (
                    <div key={index} className="carousel-slide">
                      <img
                        src={image}
                        alt={`Architecture ${(index % originalImages.length) + 1}`}
                        className="carousel-image"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                  {originalImages.map((_, index) => (
                    <div
                      key={index}
                      className={`indicator ${index === getActiveIndicatorIndex() ? 'active' : ''}`}
                      onClick={() => handleIndicatorClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="featured-section">
          <div className="featured-container">
            <div className="featured-header">
              <h2 className="featured-title">
                Featured Properties
              </h2>
              <div className="navigation-buttons">
                <button className="nav-button">
                  ←
                </button>
                <button className="nav-button">
                  →
                </button>
              </div>
            </div>

            <div className="properties-grid">
              {/* Large featured property */}
              <div className="main-property">
                <div className="main-property-image">
                  <img
                    src={properties[activeProperty].image}
                    alt={properties[activeProperty].title}
                    className="property-image"
                  />
                </div>
                <div>
                  <p className="property-subtitle">
                    {properties[activeProperty].subtitle}
                  </p>
                  <h3 className="property-title">
                    {properties[activeProperty].title}
                  </h3>
                  <p className="property-description">
                    {properties[activeProperty].description}
                  </p>
                </div>
              </div>

              {/* Smaller properties */}
              <div className="side-properties">
                <div className="side-property">
                  <div className="side-property-image">
                    <img
                      src={home5}
                      alt="Villa Design"
                      className="property-image"
                    />
                  </div>
                  <div>
                    <p className="property-subtitle">Residential</p>
                    <h3 className="side-property-title">Villa Design</h3>
                    <p className="side-property-description">Elegant villa featuring sustainable materials and contemporary aesthetics.</p>
                  </div>
                </div>

                <div className="side-property">
                  <div className="side-property-image">
                    <img
                      src={home6}
                      alt="Luxury Apartment"
                      className="property-image"
                    />
                  </div>
                  <div>
                    <p className="property-subtitle">Commercial</p>
                    <h3 className="side-property-title">Luxury Apartment</h3>
                    <p className="side-property-description">High-end apartment complex with panoramic city views and premium finishes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="services-container">
            <h2 className="services-title">
              Why Choose ArchStudio
            </h2>
            
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">
                  <Award size={32} />
                </div>
                <h3 className="service-title">Award-Winning Design</h3>
                <p className="service-description">
                  Our innovative designs have been recognized with multiple industry awards and accolades.
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <Users size={32} />
                </div>
                <h3 className="service-title">Expert Team</h3>
                <p className="service-description">
                  Our team of experienced architects and designers brings creativity and technical expertise to every project.
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <Briefcase size={32} />
                </div>
                <h3 className="service-title">Full-Service Solutions</h3>
                <p className="service-description">
                  From concept to completion, we provide comprehensive architectural and design services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;