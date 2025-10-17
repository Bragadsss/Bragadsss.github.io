import React, { useState, useEffect } from 'react';

const ProjectDetail = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Permite fechar a janela com a tecla "Escape"
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? project.screenshots.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === project.screenshots.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="project-detail-overlay" onClick={onClose}>
      <div className="project-detail-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        {/* NOME DO PROJETO */}
        <h2>{project.name}</h2>

        {/* SLIDESHOW DE SCREENSHOTS */}
        <div className="project-image-container">
          {project.screenshots.length > 1 && (
            <>
              <button onClick={goToPrevious} className="project-arrow left-arrow">❮</button>
              <button onClick={goToNext} className="project-arrow right-arrow">❯</button>
            </>
          )}
          <img 
            src={project.screenshots[currentIndex]} 
            alt={`Screenshot ${currentIndex + 1} do ${project.name}`} 
            className="project-image" 
          />
        </div>

        {/* DESCRIÇÃO E TECNOLOGIAS */}
        <h4>Descrição do Projeto</h4>
        <p>{project.description}</p>
        <p><strong>Tecnologias Usadas:</strong> {project.technologies}</p>

        {/* MINHA PARTICIPAÇÃO */}
        <h4>Minha Participação</h4>
        <p>{project.myRole}</p>

        {/* LINK PARA O CÓDIGO */}
        {project.codeLink ? (
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="header-link">
            Ver Código no GitHub
          </a>
        ) : (
          <p><i>Não há um repositório de código para este projeto.</i></p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;