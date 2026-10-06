
import { useRef } from "react";

function ProjectCard({ project, onClick }) {
  const videoRef = useRef(null);

  const firstMedia = project.media[0];
  const isVideo = firstMedia?.type === "video";

  // Tell the browser that the media should start at 0.20 seconds
  const videoSrc = isVideo
    ? `${firstMedia.src}#t=0.20`
    : "";

  const startVideo = () => {
    const video = videoRef.current;

    if (!video) return;

    // Force the starting position
    if (video.currentTime < 0.20) {
      video.currentTime = 0.20;
    }

    video.play().catch((error) => {
      console.log("Autoplay prevented:", error);
    });
  };

  const handleVideoEnded = () => {
    const video = videoRef.current;

    if (!video) return;

    // Restart from 0.20 seconds
    video.currentTime = 0.20;

    video.play().catch((error) => {
      console.log("Replay prevented:", error);
    });
  };

  return (
    <div
      className="project-card"
      onClick={onClick}
    >
      <div className="project-image">

        {isVideo ? (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >

            <video
              ref={videoRef}
              src={videoSrc}
              className="project-video"
              muted
              playsInline
              preload="auto"
              onLoadedData={startVideo}
              onEnded={handleVideoEnded}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundColor: "#000",
              }}
            />

            <div className="project-overlay">
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "10px",
                }}
              >
                ▶
              </div>

              Click to View
            </div>

          </div>
        ) : (
          <>
            <div
              style={{
                backgroundImage: `url(${firstMedia?.src})`,
              }}
              className="project-image-bg"
            />

            <div className="project-overlay">
              Click to View
            </div>
          </>
        )}

      </div>

      <div className="project-content">
        <h3 className="project-title">
          {project.title}
        </h3>
      </div>
    </div>
  );
}

export default ProjectCard;