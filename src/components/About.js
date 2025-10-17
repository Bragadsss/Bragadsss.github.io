import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaDatabase, FaTools } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Sobre Mim</h2>
      <div className="about-text-columns">
        <p>
          Sou estudante de Desenvolvimento de Software Multiplataforma na FATEC Miguel Reale, com foco em soluções web, mobile e integração de sistemas. Tenho experiência prática com JavaScript, React, Node.js, PHP, MySQL e projetos envolvendo ESP32 e Arduino.
        </p>
        <p>
          Atualmente trabalho no DER-SP, prestando suporte técnico e administrativo em sistemas internos. Busco oportunidades de estágio em desenvolvimento de software para aplicar meus conhecimentos e continuar evoluindo na área de tecnologia.
        </p>
      </div>
      
      <h3>Principais Competências</h3>
      <div className="skills-container">
        <div className="skill-tag"><SiJavascript /> JavaScript</div>
        <div className="skill-tag"><FaReact /> React</div>
        <div className="skill-tag"><FaNodeJs /> Node.js</div>
        <div className="skill-tag"><FaDatabase /> MySQL</div>
        <div className="skill-tag"><FaHtml5 /> HTML</div>
        <div className="skill-tag"><FaCss3Alt /> CSS</div>
        <div className="skill-tag"><FaPhp /> PHP</div>
        <div className="skill-tag"><FaTools /> Scrum</div>
      </div>
    </section>
  );
};

export default About;