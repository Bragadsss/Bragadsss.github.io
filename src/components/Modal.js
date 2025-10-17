import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Modal.css";

const Modal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <h2>{project.name}</h2>

        <div className="modal-image-container">
          {project.screenshots.length > 1 && (
            <button className="nav-btn left" onClick={prevImage}>
              <ChevronLeft size={28} />
            </button>
          )}

          <img
            src={project.screenshots[currentImage]}
            alt={`Imagem ${currentImage + 1} de ${project.name}`}
            className="modal-image"
          />

          {project.screenshots.length > 1 && (
            <button className="nav-btn right" onClick={nextImage}>
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        <div className="modal-description">
          <h3>Descrição do Projeto</h3>
          <p>{project.description}</p>

          <h3>Tecnologias Usadas</h3>
          <p>{project.technologies}</p>

          {project.codeLink && (
            <p>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                Ver Repositório no GitHub →
              </a>
            </p>
          )}

          <h3>Minha Participação</h3>
          <p>{project.myRole}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
