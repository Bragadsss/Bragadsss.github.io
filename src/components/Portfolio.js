import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

// --- IMAGENS DOS PROJETOS ---
import steamProjectImg from '../assets/pi-steam.jpg';
import springToys1 from '../assets/springtoys1.jpg';
import springToys2 from '../assets/springtoys2.jpg';
import springToys3 from '../assets/springtoys3.jpg';
import newAge1 from '../assets/newage1.jpg';
import newAge2 from '../assets/newage2.jpg';
import newAge3 from '../assets/newage3.jpg';


// --- DADOS DOS PROJETOS ---
const projects = [
  {
    name: "Recriação do Layout da Loja Steam (PI 1º Semestre)",
    description:
      "Como proposta de trabalho interdisciplinar, o projeto consistiu em recriar fielmente o layout e a identidade visual da página principal da plataforma de jogos Steam. O objetivo principal foi aprofundar os conhecimentos em design de interface (UI), hierarquia visual e composição de elementos gráficos.",
    technologies: "Adobe Photoshop",
    screenshots: [steamProjectImg],
    codeLink: null,
    myRole:
      "O projeto foi desenvolvido de forma individual. Fui responsável por todas as etapas do processo, desde a análise e decomposição do layout original da Steam até a recriação de cada componente visual, utilizando o Adobe Photoshop para garantir a fidelidade ao design original."
  },
  {
    name: "Projeto Interdisciplinar - 2º Semestre",
    description:
      "Neste semestre, o projeto interdisciplinar teve como foco o desenvolvimento de uma aplicação web com foco em front-end, utilizando HTML, CSS e JavaScript puro. O objetivo foi aplicar boas práticas de estruturação de código, responsividade e layout moderno, além de consolidar a lógica de programação para a construção de páginas interativas.",
    technologies: "HTML, CSS, JavaScript",
    screenshots: [
      "https://via.placeholder.com/800x450/4C566A/E5E9F0?text=PI+2º+Semestre"
    ],
    codeLink: "#",
    myRole:
      "Atuei no desenvolvimento da estrutura e no design da interface do projeto, garantindo que o layout fosse totalmente responsivo e funcional em diferentes tamanhos de tela."
  },
  {
    name: "Spring Toys - Loja de Brinquedos (PI 3º Semestre)",
    description:
      "O projeto Spring Toys teve como objetivo desenvolver uma loja virtual de brinquedos, aplicando conceitos de usabilidade, design responsivo e integração entre front-end e back-end. A plataforma simula um e-commerce completo, com exibição de produtos, carrinho e finalização de compras. Minha principal atuação foi no front-end, responsável pela criação das interfaces, componentes em React e integração com o layout visual do sistema. Também cuidei da responsividade e identidade visual da marca.",
    technologies: "React, HTML, CSS, JavaScript",
    screenshots: [springToys1, springToys2, springToys3],
    codeLink: "https://github.com/seuusuario/spring-toys", // substitua pelo link real
    myRole:
      "Atuei no desenvolvimento do front-end do projeto, criando os componentes, estruturando o layout e garantindo a integração visual com o back-end. Fui responsável pela adaptação responsiva e pela identidade visual da marca Spring Toys."
  },
  {
    name: "New Age Salon - Barbearia (PI 4º Semestre)",
    description:
      "O projeto interdisciplinar do quarto semestre teve como desafio a criação do site institucional da barbearia New Age Salon. O foco do desenvolvimento foi proporcionar uma experiência digital moderna e atraente, destacando os serviços da barbearia, equipe de profissionais, agendamento online e integração com redes sociais. A proposta visual seguiu uma estética contemporânea, com tons escuros e tipografia elegante, transmitindo sofisticação e confiança.",
    technologies: "React, Vite, HTML, CSS, JavaScript, Figma",
    screenshots: [newAge1, newAge2, newAge3],
    codeLink: "https://github.com/danielznz/Projeto-Inter", // substitua pelo link real
    myRole:
      "Contribuí diretamente no desenvolvimento do front-end, participando da criação dos componentes em React, estilização responsiva e implementação da identidade visual baseada no design do Figma. Trabalhei na montagem das seções de serviços, galeria e contato, garantindo fluidez na navegação e alinhamento com o conceito visual da marca New Age Salon. Também auxiliei na integração do layout com a lógica de navegação e animações do site."
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">PROJETOS INTERDISCIPLINARES (PI)</h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleOpenProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseProject} />
      )}
    </section>
  );
};

export default Portfolio;
