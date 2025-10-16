import React from 'react';

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <h2>{project.name}</h2>
        <div className="modal-images">
          {project.screenshots.map((img, index) => (
            <img key={index} src={img} alt={`${project.name} screenshot ${index + 1}`} />
          ))}
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Modal;