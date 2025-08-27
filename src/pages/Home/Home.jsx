import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin, Users, Briefcase, Award, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import PaperSpaceHome from '../../assets/home/PaperSpaceHome.mp4';

// Import project images
import AWA1 from '../../assets/awa/AWA1.png'
import BHK1 from '../../assets/1.5bhk/BHK1.png'
import AB1 from '../../assets/archb/AB1.png'
import DB1 from '../../assets/db/DB1.png'
import Jayanti1 from '../../assets/shivjayanti/Jayanti1.png'

function HomePage({ onNavigate }) {
  const [activeProperty, setActiveProperty] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Updated properties array with real project data
  const properties = [
    {
      title: "Wedding Avenue",
      subtitle: "Hospitality Design",
      description: "Set against a scenic mountain backdrop, this wedding destination offers a complete experience with grand halls, dining spaces, guest cottages, and landscaped areas.",
      image: AWA1,
      year: "2024",
      location: "Maharashtra",
      slug: "weddingavenue"
    },
    {
      title: "INT 1.5 BHK",
      subtitle: "Residential Interior",
      description: "Modern, cozy, and practical home design featuring smart storage, convertible dining areas, and wooden finishes that make compact spaces feel spacious and warm.",
      image: BHK1,
      year: "2024",
      location: "Mumbai",
      slug: "int-1-5-bhk"
    },
    {
      title: "Arch Bungalow",
      subtitle: "Residential Architecture",
      description: "Elegant bungalow reflecting simplicity and sophistication with clean lines, natural textures, and green planters that blend architecture with nature.",
      image: AB1,
      year: "2023",
      location: "Lonavala",
      slug: "arch-bungalow"
    },
    {
      title: "Doctor Bungalow",
      subtitle: "Residential Architecture",
      description: "Classical elegance meets modern sophistication with tall windows, detailed columns, and a breathtaking double-height lobby featuring a sweeping staircase.",
      image: DB1,
      year: "2022",
      location: "Pune",
      slug: "doctor-bungalow"
    },
    {
      title: "INT Ek Gaon Ek Shivjayanti",
      subtitle: "Cultural Interior",
      description: "Thoughtful balance between tradition and functionality with ornate arches, carved columns, and cultural significance for community gatherings and seminars.",
      image: Jayanti1,
      year: "2023",
      location: "Rural Maharashtra",
      slug: "int-ek-gaon-ek-shivjayanti"
    }
  ];

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProperty((prev) => (prev + 1) % properties.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [properties.length]);

  const nextProperty = () => {
    setActiveProperty((prev) => (prev + 1) % properties.length);
  };

  const prevProperty = () => {
    setActiveProperty((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, html {
      margin: 0;
      padding: 0;
    }

    .homepage-container {
      min-height: 100vh;
      background-color: #f5f5f4;
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
    }

    /* Hero Video Section */
    .hero-video-section {
      position: relative;
      height: 100vh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-video-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .hero-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .video-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #a8a29e 0%, #78716c 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
    }

    .play-button {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border: 3px solid rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.4s ease;
      margin-bottom: 2rem;
    }

    .play-button:hover {
      transform: scale(1.1);
      background: rgba(255, 255, 255, 0.3);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
      z-index: 2;
    }

    .hero-content-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      padding: 2rem;
    }

    .hero-text {
      max-width: 800px;
    }

    .hero-title-main {
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 300;
      margin-bottom: 1.5rem;
      line-height: 1.1;
    }

    .hero-title-bold {
      font-weight: 700;
      display: block;
      background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-tagline-main {
      font-size: clamp(1.3rem, 3vw, 2rem);
      font-weight: 400;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .hero-buttons-main {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .primary-button-main {
      background: linear-gradient(135deg, #57534e 0%, #292524 100%);
      color: white;
      padding: 1.2rem 3rem;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.4s ease;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.1rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      box-shadow: 0 10px 30px rgba(87, 83, 78, 0.3);
    }

    .primary-button-main:hover {
      transform: translateY(-3px);
      box-shadow: 0 20px 40px rgba(87, 83, 78, 0.4);
    }

    .secondary-button-main {
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: white;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 1.125rem 3rem;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.4s ease;
      font-size: 1.1rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }

    .secondary-button-main:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    }

    /* Featured Properties Carousel Section */
    .carousel-section {
      padding: 120px 0;
      background: #fafaf9;
      position: relative;
    }

    .carousel-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .carousel-header {
      text-align: center;
      margin-bottom: 80px;
    }

    .carousel-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 300;
      color: #1c1917;
      margin-bottom: 1.5rem;
    }

    .carousel-subtitle {
      font-size: clamp(1.1rem, 2.5vw, 1.4rem);
      color: #57534e;
      font-weight: 400;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .carousel-main {
      position: relative;
      overflow: hidden;
      border-radius: 30px;
      box-shadow: 0 30px 80px rgba(0,0,0,0.15);
    }

    .carousel-slide {
      position: relative;
      height: 80vh;
      min-height: 600px;
      background-color: #e5e5e5;
      display: flex;
    }

    .slide-image {
      width: 65%;
      height: 100%;
      object-fit: cover;
    }

    .slide-content {
      width: 35%;
      padding: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: white;
      position: relative;
    }

    .slide-number {
      position: absolute;
      top: 2rem;
      right: 2rem;
      font-size: 1rem;
      color: #78716c;
      font-weight: 500;
    }

    .slide-subtitle {
      font-size: 0.9rem;
      color: #78716c;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .slide-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 400;
      color: #1c1917;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .slide-description {
      font-size: 1.1rem;
      color: #57534e;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .slide-meta {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .meta-item {
      display: flex;
      flex-direction: column;
    }

    .meta-label {
      font-size: 0.85rem;
      color: #78716c;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
    }

    .meta-value {
      font-size: 1rem;
      color: #1c1917;
      font-weight: 500;
    }

    .slide-button {
      background-color: #1c1917;
      color: white;
      padding: 1rem 2.5rem;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      align-self: flex-start;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .slide-button:hover {
      background-color: #292524;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(28, 25, 23, 0.2);
    }

    /* Carousel Navigation */
    .carousel-navigation {
      position: absolute;
      bottom: 3rem;
      left: 4rem;
      display: flex;
      gap: 1rem;
      z-index: 10;
    }

    .carousel-nav-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: white;
    }

    .carousel-nav-button:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
    }

    /* Carousel Indicators */
    .carousel-indicators {
      position: absolute;
      bottom: 3rem;
      right: 4rem;
      display: flex;
      gap: 1rem;
      z-index: 10;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.5);
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .indicator.active {
      background: white;
      transform: scale(1.2);
    }

    .indicator:hover {
      border-color: white;
    }

    /* Services Section */
    .services-section {
      padding: 120px 0;
      background: #f5f5f4;
      color: #1c1917;
    }

    .services-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .services-title {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 300;
      text-align: center;
      margin-bottom: 80px;
      color: #1c1917;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 3rem;
    }

    .service-item {
      text-align: center;
      padding: 3rem 2rem;
      border-radius: 20px;
      background: white;
      border: 1px solid #e7e5e4;
      transition: all 0.4s ease;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .service-item:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .service-icon {
      width: 100px;
      height: 100px;
      background: linear-gradient(135deg, #1c1917 0%, #292524 100%);
      border-radius: 25px;
      margin: 0 auto 2rem auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.4s ease;
    }

    .service-item:hover .service-icon {
      transform: scale(1.1);
      box-shadow: 0 15px 30px rgba(28, 25, 23, 0.4);
    }

    .service-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: #1c1917;
    }

    .service-description {
      color: #57534e;
      line-height: 1.8;
      font-size: 1.1rem;
    }

    /* Tablet Styles */
    @media (max-width: 1024px) {
      .carousel-slide {
        flex-direction: column;
        height: auto;
        min-height: auto;
      }

      .slide-image {
        width: 100%;
        height: 50vh;
        min-height: 400px;
      }

      .slide-content {
        width: 100%;
        padding: 3rem 2rem;
      }

      .carousel-navigation,
      .carousel-indicators {
        position: relative;
        bottom: auto;
        left: auto;
        right: auto;
        justify-content: center;
        margin-top: 2rem;
      }

      .hero-buttons-main {
        flex-direction: column;
        align-items: center;
      }
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .hero-video-section {
        height: 70vh;
        min-height: 500px;
      }

      .carousel-section {
        padding: 80px 0;
      }

      .carousel-container {
        padding: 0 1rem;
      }

      .carousel-header {
        margin-bottom: 50px;
      }

      .slide-content {
        padding: 2rem 1.5rem;
      }

      .slide-meta {
        flex-direction: column;
        gap: 1rem;
      }

      .services-section {
        padding: 80px 0;
      }

      .services-container {
        padding: 0 1rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .service-item {
        padding: 2rem 1.5rem;
      }

      .primary-button-main,
      .secondary-button-main {
        width: 100%;
        max-width: 300px;
        justify-content: center;
      }
    }

    /* Small Mobile */
    @media (max-width: 480px) {
      .hero-video-section {
        height: 60vh;
        min-height: 400px;
      }

      .play-button {
        width: 80px;
        height: 80px;
      }

      .carousel-main {
        border-radius: 20px;
      }

      .slide-content {
        padding: 1.5rem 1rem;
      }

      .carousel-navigation {
        gap: 0.5rem;
        margin-top: 1rem;
      }

      .carousel-nav-button {
        width: 50px;
        height: 50px;
      }
    }
  `;

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

  // Updated function to handle individual project navigation
  const handleViewProjectDetails = () => {
    if (onNavigate && properties[activeProperty]) {
      onNavigate('projects', properties[activeProperty].slug);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="homepage-container">
        {/* Hero Video Section */}
        <section className="hero-video-section">
          <div className="hero-video-container">
            <video
              className="hero-video"
              src={PaperSpaceHome} // or "path/to/your/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-overlay"></div>

          <div className="hero-content-overlay">
            <div className="hero-text">
              <h1 className="hero-title-main">
                Transform Spaces
                <span className="hero-title-bold">Inspire Lives</span>
              </h1>
              <p className="hero-tagline-main">
                Precision on Paper. Power in Space.
              </p>

              <div className="hero-buttons-main">
                <button className="primary-button-main" onClick={handleGetStarted}>
                  Get Started
                  <ArrowRight size={24} />
                </button>
                <button className="secondary-button-main" onClick={handleViewWork}>
                  Explore Projects
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties Carousel Section */}
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

                  <p className="slide-subtitle">
                    {properties[activeProperty].subtitle}
                  </p>

                  <h3 className="slide-title">
                    {properties[activeProperty].title}
                  </h3>

                  <p className="slide-description">
                    {properties[activeProperty].description}
                  </p>

                  {/* <div className="slide-meta">
                    <div className="meta-item">
                      <span className="meta-label">Year</span>
                      <span className="meta-value">{properties[activeProperty].year}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Location</span>
                      <span className="meta-value">{properties[activeProperty].location}</span>
                    </div>
                  </div> */}

                  <button className="slide-button" onClick={handleViewProjectDetails}>
                    View Details
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="carousel-navigation">
                <button className="carousel-nav-button" onClick={prevProperty}>
                  <ChevronLeft size={24} />
                </button>
                <button className="carousel-nav-button" onClick={nextProperty}>
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Carousel Indicators */}
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

        {/* Services Section */}
        <section className="services-section">
          <div className="services-container">
            <h2 className="services-title">
              Why Choose StudioPaperSpace
            </h2>

            <div className="services-grid">
              {/* <div className="service-item">
                <div className="service-icon">
                  <Award size={40} />
                </div>
                <h3 className="service-title">Award-Winning Design</h3>
                <p className="service-description">
                  Our innovative designs have been recognized with multiple industry awards and accolades for excellence in architectural innovation.
                </p>
              </div> */}

              <div className="service-item">
                <div className="service-icon">
                  <Users size={40} />
                </div>
                <h3 className="service-title">Expert Team</h3>
                <p className="service-description">
                  Our team of experienced architects and designers brings creativity, technical expertise, and passion to every project we undertake.
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <Briefcase size={40} />
                </div>
                <h3 className="service-title">Full-Service Solutions</h3>
                <p className="service-description">
                  From initial concept to final completion, we provide comprehensive architectural and design services tailored to your vision.
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