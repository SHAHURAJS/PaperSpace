function ProjectCard({ project, onClick }) {
  return (
    <div 
      className="project-card"
      onClick={onClick}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
        e.currentTarget.querySelector(".project-overlay").style.opacity = "1";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
        e.currentTarget.querySelector(".project-overlay").style.opacity = "0";
      }}
    >
      <div 
        className="project-image"
        style={{ backgroundImage: `url(${project.media[0]?.src})` }}
      >
        <div className="project-overlay">Click to View</div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
      </div>
    </div>
  );
}

export default ProjectCard;
