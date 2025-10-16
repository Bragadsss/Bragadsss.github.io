import React from 'react';
import ProjectCard from './ProjectCard';
import projectImage from '../assets/project1.png'; // Imagem de exemplo

const Portfolio = () => {
  const projects = [
    {
      name: "Nome do Projeto 1",
      description: "Uma breve descrição do que o projeto faz.",
      technologies: "React, Node.js, CSS",
      codeLink: "[URL_DO_REPOSITORIO_PROJETO_1]",
      screenshot: projectImage,
      myRole: "Minha participação foi no desenvolvimento do front-end, utilizando React para criar componentes interativos."
    },
    // Adicione mais objetos de projeto aqui
  ];

  return (
    <section id="portfolio" className="card">
      <h2>Portfólio de Projetos</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;