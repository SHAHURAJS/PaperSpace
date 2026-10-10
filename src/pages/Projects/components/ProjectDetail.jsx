import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useState, useRef } from "react";

function ProjectDetail({ selectedProject, onBack }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const heroVideoRef = useRef(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  /*
   * HERO VIDEO
   */

  const handleHeroVideoLoaded = () => {
    const video = heroVideoRef.current;

    if (!video) return;

    // Stop video before changing its position
    video.pause();

    // Force starting position to 0.20 seconds
    video.currentTime = 0.20;
  };

  const handleHeroVideoSeeked = () => {
    const video = heroVideoRef.current;

    if (!video) return;

    // Make absolutely sure it is not at 0
    if (video.currentTime < 0.19) {
      video.currentTime = 0.20;
      return;
    }

    // Now start playing
    video.play().catch((error) => {
      console.log("Autoplay prevented:", error);
    });
  };

  const handleHeroVideoEnded = () => {
    const video = heroVideoRef.current;

    if (!video) return;

    // Stop first
    video.pause();

    // Restart from 0.20 seconds
    video.currentTime = 0.20;
  };

  /*
   * GALLERY VIDEO HANDLERS
   */

  const handleGalleryVideoLoaded = (videoRef) => {
    const video = videoRef.current;

    if (!video) return;

    // Force starting position to 0.20 seconds
    video.currentTime = 0.20;
  };

  const handleGalleryVideoSeeked = (videoRef) => {
    const video = videoRef.current;

    if (!video) return;

    // Make sure it stays at 0.20 seconds for thumbnail display
    if (video.currentTime < 0.19) {
      video.currentTime = 0.20;
    }
  };

  /*
   * LIGHTBOX
   */

  const nextImage = () => {
    setLightboxIndex((prev) =>
      prev === selectedProject.media.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev === 0
        ? selectedProject.media.length - 1
        : prev - 1
    );
  };

  if (!selectedProject) return null;

  const heroMedia = selectedProject.media[0];

  const currentMedia =
    lightboxIndex !== null
      ? selectedProject.media[lightboxIndex]
      : null;

  /*
   * Add media fragment.
   *
   * This tells the browser to start the media
   * from 0.20 seconds.
   */
  const heroVideoSrc =
    heroMedia?.type === "video"
      ? `${heroMedia.src}#t=0.20`
      : "";

  return (
    <div className="container">

      <div className="max-width">

        {/* =========================
            BACK BUTTON
        ========================= */}

        <button
          className="back-btn"
          onClick={onBack}
        >
          <ArrowLeft size={20} />

          Back to Projects
        </button>


        {/* =========================
            HERO
        ========================= */}

        <div className="hero-wrapper">

          {heroMedia.type === "video" ? (

            <div className="hero-video-wrapper">

              <video
                ref={heroVideoRef}
                src={heroVideoSrc}
                className="hero-image"
                muted
                playsInline
                preload="auto"
                onLoadedMetadata={handleHeroVideoLoaded}
                onSeeked={handleHeroVideoSeeked}
                onEnded={handleHeroVideoEnded}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />

            </div>

          ) : (

            <img
              src={heroMedia.src}
              alt={heroMedia.alt}
              className="hero-image"
              onClick={() => openLightbox(0)}
              style={{ cursor: "pointer" }}
            />

          )}

        </div>


        {/* =========================
            TITLE
        ========================= */}

        <h1 className="detail-title">
          {selectedProject.title}
        </h1>


        {/* =========================
            DETAILS
        ========================= */}

        <div className="detail-wrapper">

          <div className="detail-left">

            <span className="meta-badge">

              <span className="meta-label">
                Location:
              </span>{" "}

              {selectedProject.location}

            </span>


            <span className="meta-badge">

              <span className="meta-label">
                Year:
              </span>{" "}

              {selectedProject.year}

            </span>


            <span className="meta-badge">

              <span className="meta-label">
                Current Status:
              </span>{" "}

              {selectedProject.currrent_status}

            </span>


            <span className="meta-badge">

              <span className="meta-label">
                Category & Scope:
              </span>{" "}

              {selectedProject.category}

            </span>

          </div>


          <div className="detail-divider"></div>


          <div className="detail-description-box">

            <ul className="detail-list">

              {/* {selectedProject.description
                .split("\n")
                .filter(
                  (line) => line.trim() !== ""
                )
                .map((line, index) => (

                  <li key={index}>
                    {line.trim()}
                  </li>


                ))} */}




{selectedProject.description
  .split("\n")
  .filter((line) => line.trim() !== "")
  .map((line, index) => {
    const parts = line.trim().split(/(<strong>.*?<\/strong>)/gi);

    return (
      <li key={index}>
        {parts.map((part, i) => {
          const match = part.match(
            /^<strong>(.*?)<\/strong>$/i
          );

          return match ? (
            <strong key={i}>{match[1]}</strong>
          ) : (
            part
          );
        })}
      </li>
    );
  })}



            </ul>

          </div>

        </div>


        {/* =========================
            GALLERY
        ========================= */}

        {selectedProject.media.length > 1 && (

          <>

            <h2 className="gallery-title">
              Gallery
            </h2>


            <div className="gallery-grid">

              {selectedProject.media
                .slice(1)
                .map((item, index) => {
                  const galleryVideoRef = useRef(null);

                  return item.type === "video" ? (

                    <div
                      key={index}
                      className="gallery-video-wrapper"
                      onClick={() =>
                        openLightbox(index + 1)
                      }
                    >

                      <video
                        ref={galleryVideoRef}
                        src={`${item.src}#t=0.20`}
                        className="gallery-image"
                        muted
                        playsInline
                        preload="auto"
                        onLoadedMetadata={() =>
                          handleGalleryVideoLoaded(
                            galleryVideoRef
                          )
                        }
                        onSeeked={() =>
                          handleGalleryVideoSeeked(
                            galleryVideoRef
                          )
                        }
                        style={{
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                      />

                      <div className="video-play-icon">
                        ▶
                      </div>

                    </div>

                  ) : (

                    <img
                      key={index}
                      src={item.src}
                      alt={item.alt}
                      className="gallery-image"
                      onClick={() =>
                        openLightbox(index + 1)
                      }
                    />

                  );
                })}

            </div>

          </>

        )}

      </div>


      {/* =========================
          LIGHTBOX
      ========================= */}

      {lightboxIndex !== null && (

        <div className="lightbox-overlay">

          {/* CLOSE */}

          <button
            className="lightbox-close"
            onClick={closeLightbox}
          >
            <X
              size={32}
              color="white"
            />
          </button>


          {/* PREVIOUS */}

          <button
            className="lightbox-nav left"
            onClick={prevImage}
          >
            <ChevronLeft
              size={40}
              color="white"
            />
          </button>


          {/* MEDIA */}

          {currentMedia.type === "video" ? (

            <video
              src={`${currentMedia.src}#t=0.20`}
              className="lightbox-image"
              style={{
                maxWidth: "90%",
                maxHeight: "85vh",
              }}
              controls
              autoPlay
              muted
              playsInline
            />

          ) : (

            <img
              src={currentMedia.src}
              className="lightbox-image"
              alt="preview"
            />

          )}


          {/* NEXT */}

          <button
            className="lightbox-nav right"
            onClick={nextImage}
          >
            <ChevronRight
              size={40}
              color="white"
            />
          </button>

        </div>

      )}

    </div>
  );
}

export default ProjectDetail;