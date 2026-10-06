import React from 'react';
import { ArrowRight } from 'lucide-react';

function HeroSection({ onNavigate }) {

  // Your video link here
  const video = "https://ik.imagekit.io/2ssa5wpda/paperspace/home/PaperSpaceHome2.mp4?updatedAt=1764339484942";

  const handleGetStarted = () => onNavigate && onNavigate('contact');
  const handleViewWork = () => onNavigate && onNavigate('projects');

  return (
    <section className="hero-video-section">
      <div className="hero-video-container">
        <video
          className="hero-video"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
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
              Get Started <ArrowRight size={24} />
            </button>
            <button className="secondary-button-main" onClick={handleViewWork}>
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
