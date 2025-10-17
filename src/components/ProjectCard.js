import React from 'react';
import { FolderCode, Monitor, Brush } from 'lucide-react'; // ícones possíveis

const ProjectCard = ({ project, onClick }) => {
  // escolha do ícone por tipo de projeto (pode ser manual ou via tecnologia)
  const Icon = project.technologies.includes("Adobe")
    ? Brush
    : project.technologies.includes("HTML")
    ? Monitor
    : FolderCode;

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-icon-container">
        <Icon size={60} color="#bfe07a" />
      </div>
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.technologies}</p>
        <div className="project-card-footer">Ver Detalhes →</div>
      </div>
    </div>
  );
};

export default ProjectCard;
