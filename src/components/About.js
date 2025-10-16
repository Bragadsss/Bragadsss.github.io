import React from 'react';

const About = () => {
  return (
    <section id="about" className="card">
      <h2>Sobre Mim</h2>
      <div className="course-info">
        <h3>Formação Acadêmica</h3>
        <p><strong>Faculdade:</strong> Fatec</p>
        <p><strong>Curso:</strong> Desenvolvimento de Software Multiplataforma</p>
        <p><strong>Início:</strong> [Ano/Semestre de Início]</p>
        <p><strong>Previsão de Conclusão:</strong> [Ano/Semestre de Conclusão]</p>
      </div>
      <div className="languages-info">
        <h3>Idiomas</h3>
        <ul>
          <li>[Idioma 1] - [Nível]</li>
          <li>[Idioma 2] - [Nível]</li>
        </ul>
      </div>
    </section>
  );
};

export default About;