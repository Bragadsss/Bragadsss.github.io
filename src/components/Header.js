import React from 'react';
import profilePic from '../assets/profile-pic.jpg'; 

const Header = () => {
  return (
    <header className="main-header">
      <img src={profilePic} alt="Foto de David Braga" className="profile-pic" />
      <h1>David Braga</h1>
      <p>Estudante de Desenvolvimento de Software Multiplataforma</p>
      <div className="header-links">
        <a href="https://github.com/bragadsss" target="_blank" rel="noopener noreferrer" className="header-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/davidbragads/" target="_blank" rel="noopener noreferrer" className="header-link">
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;