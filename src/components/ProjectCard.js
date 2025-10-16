import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.screenshot} alt={`Screenshot do ${project.name}`} className="project-image" />
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;