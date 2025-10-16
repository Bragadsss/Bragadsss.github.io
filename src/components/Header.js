import React from 'react';
import profilePic from '../assets/profile-pic.jpg'; // Importe sua foto

const Header = () => {
  return (
    <header className="main-header">
      <img src={profilePic} alt="Foto do Aluno" className="profile-pic" />
      <h1>[Seu Nome Completo]</h1>
      <p>Desenvolvedor Multiplataforma</p>
      <a href="[URL_DO_SEU_GITHUB]" target="_blank" rel="noopener noreferrer" className="github-link">
        Meu GitHub
      </a>
    </header>
  );
};

export default Header;