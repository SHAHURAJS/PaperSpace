import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function ProjectDetail({ selectedProject, onBack }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    setLightboxIndex((prev) =>
      prev === selectedProject.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? selectedProject.media.length - 1 : prev - 1
    );
  };

  return (
    <div className="container">
      <div className="max-width">
        {/* Back Button */}
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} /> Back to Projects
        </button>

        {/* Hero */}
        <div className="hero-wrapper" onClick={() => openLightbox(0)}>
          <img
            src={selectedProject.media[0].src}
            alt={selectedProject.media[0].alt}
            className="hero-image"
          />
        </div>

        {/* Title */}
        <h1 className="detail-title">{selectedProject.title}</h1>

        {/* Updated Detail Layout */}
        <div className="detail-wrapper">
          <div className="detail-left">
            <span className="meta-badge">
              <span className="meta-label">Location:</span>{" "}
              {selectedProject.location}
            </span>
            <span className="meta-badge">
              <span className="meta-label">Year:</span>{" "}
              {selectedProject.year}
            </span>

            <span className="meta-badge">
              <span className="meta-label">Category & Scope:</span>{" "}
              {selectedProject.category}
            </span>

          </div>

          <div className="detail-divider"></div>

          <div className="detail-description-box">
  <ul className="detail-list">
    {selectedProject.description
      .split("\n")
      .filter(line => line.trim() !== "")
      .map((line, index) => (
        <li key={index}>{line.trim()}</li>
      ))}
  </ul>
</div>

        </div>

        {/* Gallery */}
        {selectedProject.media.length > 1 && (
          <>
            <h2 className="gallery-title">Gallery</h2>
            <div className="gallery-grid">
              {selectedProject.media.slice(1).map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className="gallery-image"
                  onClick={() => openLightbox(index + 1)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay">
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} color="white" />
          </button>

          <button className="lightbox-nav left" onClick={prevImage}>
            <ChevronLeft size={40} color="white" />
          </button>

          <img
            src={selectedProject.media[lightboxIndex].src}
            className="lightbox-image"
            alt="preview"
          />

          <button className="lightbox-nav right" onClick={nextImage}>
            <ChevronRight size={40} color="white" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
