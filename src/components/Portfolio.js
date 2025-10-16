import React from 'react';
import ProjectCard from './ProjectCard';

// IMPORTANTE:
// 1. Crie e adicione screenshots de cada projeto na pasta `src/assets`.
// 2. Importe cada imagem aqui (ex: import pi3semestre from '../assets/pi3semestre.png';)
// 3. Substitua as URLs de placeholder pelas suas imagens importadas.

const projects = [
  {
    name: "Projeto Interdisciplinar - 1º Semestre",
    description: "Este repositório contém os projetos interdisciplinares desenvolvidos durante o terceiro e quarto semestres do curso de Desenvolvimento de Software Multiplataforma.",
    technologies: "React, Node.js, MySQL, etc.", // <-- Edite com as tecnologias corretas
    myRole: "Descreva aqui a sua participação específica em cada um dos projetos dentro deste repositório.", // <-- Edite com a sua participação
    codeLink: "https://github.com/Bragadsss/...", // <-- !! SUBSTITUA PELO LINK CORRETO PARA O REPOSITÓRIO DOS PIs !!
    screenshot: "https://via.placeholder.com/400x225/A3BE8C/282c34?text=PI+3/4" // Substitua pela sua imagem
  },
  {
    name: "Projeto Interdisciplinar - 2º Semestre",
    description: "Descrição do projeto desenvolvido no primeiro semestre do curso.", // <-- Edite a descrição
    technologies: "HTML, CSS, JavaScript", // <-- Edite com as tecnologias corretas
    myRole: "Fui responsável pelo desenvolvimento do front-end e pela estrutura inicial do projeto.", // <-- Edite com a sua participação
    codeLink: "URL_PARA_O_SEU_REPOSITORIO_DO_1_SEMESTRE", // <-- Substitua pelo link do GitHub
    screenshot: "https://via.placeholder.com/400x225/A3BE8C/282c34?text=PI+1" // Substitua pela sua imagem
  },
  {
    name: "Projeto Interdisciplinar - 3º Semestre",
    description: "Descrição do projeto desenvolvido no segundo semestre do curso.", // <-- Edite a descrição
    technologies: "Tecnologias usadas aqui", // <-- Edite com as tecnologias corretas
    myRole: "Sua participação no projeto.", // <-- Edite com a sua participação
    codeLink: "URL_PARA_O_SEU_REPOSITORIO_DO_2_SEMESTRE", // <-- Substitua pelo link do GitHub
    screenshot: "https://via.placeholder.com/400x225/A3BE8C/282c34?text=PI+2" // Substitua pela sua imagem
  },
  {
    name: "Projeto Interdisciplinar - 4º Semestre",
    description: "Descrição do projeto que está a ser desenvolvido no quinto semestre.", // <-- Edite a descrição
    technologies: "Tecnologias usadas aqui", // <-- Edite com as tecnologias corretas
    myRole: "Sua participação no projeto.", // <-- Edite com a sua participação
    codeLink: "URL_PARA_O_SEU_REPOSITORIO_DO_5_SEMESTRE", // <-- Substitua pelo link do GitHub
    screenshot: "https://via.placeholder.com/400x225/A3BE8C/282c34?text=PI+5" // Substitua pela sua imagem
  },
  
  {
    name: "Projeto Interdisciplinar - 5º Semestre",
    description: "Descrição do projeto que está a ser desenvolvido no quinto semestre.", // <-- Edite a descrição
    technologies: "Tecnologias usadas aqui", // <-- Edite com as tecnologias corretas
    myRole: "Sua participação no projeto.", // <-- Edite com a sua participação
    codeLink: "URL_PARA_O_SEU_REPOSITORIO_DO_5_SEMESTRE", // <-- Substitua pelo link do GitHub
    screenshot: "https://via.placeholder.com/400x225/A3BE8C/282c34?text=PI+5" // Substitua pela sua imagem
  },
  {
    name: "Projeto Interdisciplinar - 6º Semestre",
    description: "Descrição do projeto que está a ser desenvolvido no quinto semestre.", // <-- Edite a descrição
    technologies: "Tecnologias usadas aqui", // <-- Edite com as tecnologias corretas
    myRole: "Sua participação no projeto.", // <-- Edite com a sua participação
    codeLink: "URL_PARA_O_SEU_REPOSITORIO_DO_5_SEMESTRE", // <-- Substitua pelo link do GitHub
    screenshot: "https://via.placeholder.com/400x225/A3BE8C/282c34?text=PI+5" // Substitua pela sua imagem
  },
  // Pode adicionar mais projetos aqui se necessário
];

// O componente ProjectCard já está preparado para que, ao clicar no card, ele abra o codeLink.
// Para isso, vamos envolvê-lo numa tag <a>.
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Projetos Interdisciplinares (PI)</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none' }}>
            <ProjectCard project={project} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;