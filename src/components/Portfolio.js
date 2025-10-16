import React from 'react';
import ProjectCard from './ProjectCard';

// IMPORTANTE:
// 1. Adicione as imagens (screenshots) dos seus projetos na pasta `src/assets`.
// 2. Importe cada imagem aqui, como nos exemplos comentados abaixo.

// import meuPrimeiroProjeto from '../assets/meu-primeiro-projeto.png';
// import outroProjeto from '../assets/outro-projeto.png';

const projects = [
  {
    name: "Nome do Projeto 1",
    description: "Descrição detalhada do que o projeto faz e qual o seu objetivo principal.",
    technologies: "React, CSS, Node.js",
    myRole: "Descreva aqui o que você fez especificamente neste projeto (ex: desenvolvi o front-end, criei a base de dados, etc.).",
    codeLink: "URL_PARA_O_SEU_REPOSITORIO_NO_GITHUB",
    screenshot: "https://via.placeholder.com/400x225/A3BE8C/282c34?text=Projeto+1" // Substitua por sua imagem: meuPrimeiroProjeto
  },
  {
    name: "Nome do Projeto 2",
    description: "Descrição detalhada do que o projeto faz e qual o seu objetivo principal.",
    technologies: "HTML, CSS, JavaScript",
    myRole: "Descreva aqui o que você fez especificamente neste projeto.",
    codeLink: "URL_PARA_O_SEU_REPOSITORIO_NO_GITHUB",
    screenshot: "https://via.placeholder.com/400x225/A3BE8C/282c34?text=Projeto+2" // Substitua por sua imagem: outroProjeto
  },
  // Adicione mais projetos aqui, copiando e colando o bloco de código acima.
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Projetos</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;