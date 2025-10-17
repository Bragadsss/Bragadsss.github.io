import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/profile-pic.jpg'; // Verifique se o nome e a extensão estão corretos

const Header = () => {
  return (
    <header className="main-header">
      <img src={profilePic} alt="Foto de David Braga" className="profile-pic" />
      <h1>David Braga</h1>
      <p className="subtitle">Estudante de Desenvolvimento de Software Multiplataforma</p>
      <div className="header-links">
        <a href="https://github.com/bragadsss" target="_blank" rel="noopener noreferrer" className="header-link">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/davidbragads/" target="_blank" rel="noopener noreferrer" className="header-link">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;