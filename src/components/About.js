import React from 'react';

const About = () => {
  return (
    <section id="about" className="card">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <p>
          Sou estudante de Desenvolvimento de Software Multiplataforma na FATEC Miguel Reale, com foco em soluções web, mobile e integração de sistemas.
        </p>
        <p>
          Tenho experiência prática com JavaScript, React, Node.js, PHP, MySQL e projetos com ESP32 e Arduino. Atualmente, trabalho no DER-SP, atuando no suporte técnico e administrativo de sistemas internos.
        </p>
        <p>
          Busco oportunidades de estágio em desenvolvimento de software, onde possa aplicar meus conhecimentos e continuar evoluindo como profissional na área de tecnologia.
        </p>
      </div>

      <div className="skills-info">
        <h3>Principais Competências</h3>
        <ul>
          <li><strong>Desenvolvimento:</strong> JavaScript, HTML, CSS, React, Node.js, PHP</li>
          <li><strong>Banco de Dados:</strong> MySQL, PostgreSQL, MongoDB</li>
          <li><strong>Ferramentas:</strong> Git, GitHub, VSCode, Linux</li>
          <li><strong>Outras:</strong> ESP32, Arduino, Scrum, Comunicação</li>
        </ul>
      </div>
    </section>
  );
};

export default About;