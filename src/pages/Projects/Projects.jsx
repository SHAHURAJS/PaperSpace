
import { useState, useEffect } from "react";
import { projects } from "./data/projectsData";
import ProjectGrid from "./components/ProjectGrid";
import ProjectDetail from "./components/ProjectDetail";
import "./projects.css"; // <-- NEW

function ProjectsPage({ onNavigate, projectSlug }) {
  const [currentView, setCurrentView] = useState('main');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  // Auto-play logic (unchanged)
  useEffect(() => {
    let interval;
    let progressInterval;

    if (isAutoPlaying && selectedProject && selectedProject.media.length > 1) {
      setProgressWidth(0);

      progressInterval = setInterval(() => {
        setProgressWidth(prev => prev >= 100 ? 0 : prev + 2);
      }, 100);

      interval = setInterval(() => {
        setCurrentMediaIndex(prev =>
          prev === selectedProject.media.length - 1 ? 0 : prev + 1
        );
        setProgressWidth(0);
      }, 5000);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying, selectedProject, currentMediaIndex]);

  // URL based selection
  useEffect(() => {
    if (projectSlug) {
      const project = projects.find(p => p.slug === projectSlug);
      if (project) {
        setSelectedProject(project);
        setCurrentView('detail');
        setCurrentMediaIndex(0);
        setIsAutoPlaying(true);
      }
    } else {
      setCurrentView('main');
      setSelectedProject(null);
      setIsAutoPlaying(false);
    }
  }, [projectSlug]);

  const nextMedia = () => {
    setCurrentMediaIndex(prev => prev === selectedProject.media.length - 1 ? 0 : prev + 1);
    setProgressWidth(0);
  };

  const prevMedia = () => {
    setCurrentMediaIndex(prev => prev === 0 ? selectedProject.media.length - 1 : prev - 1);
    setProgressWidth(0);
  };

  const handleProjectClick = (project) => onNavigate('projects', project.slug);
  const handleBackClick = () => {
    onNavigate('projects');
    setIsAutoPlaying(false);
  };

  return (
    <>
      {currentView === 'main' ? (
        <div className="container">
          <div className="max-width">
            <h1 className="section-title">Our Projects</h1>

            <ProjectGrid 
              projects={projects}
              onProjectClick={handleProjectClick}
            />
          </div>
        </div>
      ) : (
        <ProjectDetail
          selectedProject={selectedProject}
          currentIndex={currentMediaIndex}
          setCurrentIndex={setCurrentMediaIndex}
          progressWidth={progressWidth}
          nextMedia={nextMedia}
          prevMedia={prevMedia}
          isAutoPlaying={isAutoPlaying}
          onBack={handleBackClick}
        />
      )}
    </>
  );
}

export default ProjectsPage;
