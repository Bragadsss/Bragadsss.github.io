import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.screenshot} alt={`Screenshot do ${project.name}`} className="project-image" />
      <div className="project-info">
        <h3>{project.name}</h3>
        <p><strong>Tecnologias:</strong> {project.technologies}</p>
        <p>{project.description}</p>
        <p><strong>Minha Participação:</strong> {project.myRole}</p>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
          Ver Código no GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;