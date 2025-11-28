import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects, onProjectClick }) {
  return (
    <div className="grid-container">
      {projects.map(project => (
        <ProjectCard 
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
