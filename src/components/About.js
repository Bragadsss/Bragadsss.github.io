import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <p>
          Sou estudante de Desenvolvimento de Software Multiplataforma na FATEC Miguel Reale, com foco em soluções web, mobile e integração de sistemas. Tenho experiência prática com JavaScript, React, Node.js, PHP, MySQL e projetos com ESP32 e Arduino. Atualmente, trabalho no DER-SP, atuando no suporte técnico e administrativo de sistemas internos. Busco oportunidades de estágio em desenvolvimento de software, onde possa aplicar meus conhecimentos e continuar evoluindo como profissional na área de tecnologia.
        </p>
      </div>
      
      <h3>Principais Competências</h3>
      <div className="skills-container">
        <div className="skill-tag">💻 JavaScript</div>
        <div className="skill-tag">⚛️ React</div>
        <div className="skill-tag">🌐 Node.js</div>
        <div className="skill-tag">🗄️ MySQL</div>
        <div className="skill-tag">🐙 GitHub</div>
        <div className="skill-tag">📄 HTML & CSS</div>
        <div className="skill-tag">🐘 PHP</div>
        <div className="skill-tag">⚡ Scrum</div>
      </div>
    </section>
  );
};

export default About;