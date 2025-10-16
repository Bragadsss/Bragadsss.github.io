import React from 'react';
// Certifique-se de que a sua foto está na pasta 'src/assets/' e se chama 'profile-pic.jpg'
import profilePic from '../assets/profile-pic.jpg'; 

const Header = () => {
  return (
    <header className="main-header">
      <img src={profilePic} alt="Foto de David Braga" className="profile-pic" />
      <h1>David Braga</h1>
      <p>Estudante de Desenvolvimento de Software Multiplataforma</p>
      <a href="https://github.com/bragadsss" target="_blank" rel="noopener noreferrer" className="github-link">
        Meu GitHub
      </a>
    </header>
  );
};

export default Header;