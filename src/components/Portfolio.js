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
import conectaong1 from '../assets/conectaong1.jpg';
import conectaong2 from '../assets/conectaong2.jpg';
import conectaong3 from '../assets/conectaong3.jpg';
import conectaong4 from '../assets/conectaong4.jpg';
import conectaong5 from '../assets/conectaong5.jpg';
import conectaong6 from '../assets/conectaong6.jpg';
import conectaong7 from '../assets/conectaong7.jpg';
import conectaong8 from '../assets/conectaong8.jpg';
import recicle1 from '../assets/recicle1.jpg';
import recicle2 from '../assets/recicle2.jpg';
import recicle3 from '../assets/recicle3.jpg';
import recicle4 from '../assets/recicle4.jpg';
import recicle5 from '../assets/recicle5.jpg';
import recicle6 from '../assets/recicle6.jpg';



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
    name: "Conecta Ongs (PI 2º Semestre)",
    description:
      "O Conecta Ongs foi desenvolvido em equipe como um projeto web colaborativo que conecta ONGs e voluntários. O objetivo foi criar uma plataforma que centraliza o cadastro de instituições, divulgação de campanhas e oportunidades de voluntariado. No back-end, utilizamos PHP e MySQL para autenticação, gerenciamento de usuários e persistência de dados. Já no front-end, atuei tanto na estruturação das interfaces quanto na integração com as rotas do servidor, utilizando HTML, CSS e JavaScript para garantir uma experiência fluida e responsiva.",
    technologies: "PHP, MySQL, HTML, CSS, JavaScript",
    screenshots: [conectaong1, conectaong2, conectaong3, conectaong4, conectaong5, conectaong6, conectaong7, conectaong8],
    codeLink: "https://github.com/https-github-com-fatec-itaquera2sem/conectaongs",
    myRole:
      "Atuei no desenvolvimento do front-end e também no apoio ao back-end. Participei da criação das telas principais da aplicação, integração com o banco de dados e ajustes de design para responsividade e usabilidade, trabalhando em equipe com a turma para entregar uma solução funcional e visualmente consistente."
  },
  {
    name: "Spring Toys - Loja de Brinquedos (PI 3º Semestre)",
    description:
      "O projeto Spring Toys teve como objetivo desenvolver uma loja virtual de brinquedos, aplicando conceitos de usabilidade, design responsivo e integração entre front-end e back-end. A plataforma simula um e-commerce completo, com exibição de produtos, carrinho e finalização de compras. Minha principal atuação foi no front-end, responsável pela criação das interfaces, componentes em React e integração com o layout visual do sistema. Também cuidei da responsividade e identidade visual da marca.",
    technologies: "React, HTML, CSS, JavaScript",
    screenshots: [springToys1, springToys2, springToys3],
    codeLink: "https://github.com/danielznz/SpringToys",
    myRole:
      "Atuei no desenvolvimento do front-end do projeto, criando os componentes, estruturando o layout e garantindo a integração visual com o back-end. Fui responsável pela adaptação responsiva e pela identidade visual da marca Spring Toys."
  },
  {
    name: "New Age Salon - Barbearia (PI 4º Semestre)",
    description:
      "O projeto interdisciplinar do quarto semestre teve como desafio a criação do site institucional da barbearia New Age Salon. O foco do desenvolvimento foi proporcionar uma experiência digital moderna e atraente, destacando os serviços da barbearia, equipe de profissionais, agendamento online e integração com redes sociais. A proposta visual seguiu uma estética contemporânea, com tons escuros e tipografia elegante, transmitindo sofisticação e confiança.",
    technologies: "React, Vite, HTML, CSS, JavaScript, Figma",
    screenshots: [newAge1, newAge2, newAge3],
    codeLink: "https://github.com/danielznz/Projeto-Inter",
    myRole:
      "Contribuí diretamente no desenvolvimento do front-end, participando da criação dos componentes em React, estilização responsiva e implementação da identidade visual baseada no design do Figma. Trabalhei na montagem das seções de serviços, galeria e contato, garantindo fluidez na navegação e alinhamento com o conceito visual da marca New Age Salon. Também auxiliei na integração do layout com a lógica de navegação e animações do site."
  },
  {
    name: "Recicle Aqui - Painel Administrativo (PI 5º Semestre)",
    description:
      "O projeto Recicle Aqui foi desenvolvido como uma plataforma web voltada à gestão de reciclagem e monitoramento de pontos de coleta. O foco principal foi o desenvolvimento do painel administrativo, que permite o gerenciamento de usuários, registros de reciclagem, estatísticas e relatórios. O sistema foi construído em React, com integração ao banco de dados PostgreSQL e comunicação com APIs RESTful, priorizando performance, usabilidade e design moderno.",
    technologies: "React, PostgreSQL, Node.js, CSS, JavaScript",
    screenshots: [recicle1, recicle2, recicle3, recicle4, recicle5, recicle6],
    codeLink: "https://github.com/WebCrafters-ZL/recicleaqui-20-admin",
    myRole:
      "Fui responsável pelo desenvolvimento do front-end do painel administrativo, criando componentes dinâmicos em React e garantindo a integração eficiente com o back-end. Trabalhei na implementação de páginas de autenticação, tabelas de gestão de dados e layout responsivo, além de colaborar com o time na organização do fluxo de navegação e nas boas práticas de usabilidade."
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
