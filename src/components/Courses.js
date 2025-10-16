import React from 'react';

const Courses = () => {
  const academicCourses = [
    {
      institution: "FATEC Miguel Reale",
      date: "Fev de 2023 – Dez de 2025",
      course: "Desenvolvimento de Software Multiplataforma",
      description: "" // Pode adicionar uma descrição se quiser
    },
    {
      institution: "ETEC Albert Einstein",
      date: "Jun de 2021 – Dez de 2022",
      course: "Técnico em Eletrônica",
      description: "Durante o curso técnico, desenvolvi habilidades em eletrônica analógica e digital, microcontroladores (Arduino e ESP32) e projetos práticos voltados para automação e sistemas embarcados."
    },
    {
      institution: "Alfa Brasil",
      date: "Jul de 2019 – Out de 2021",
      course: "Pacote Office (Informática)",
      description: "Formação voltada ao domínio das ferramentas Microsoft Office, com foco em produtividade, criação de relatórios, planilhas e apresentações profissionais."
    }
  ];

  return (
    <section id="courses" className="card">
      <h2>Formação Acadêmica</h2>
      {academicCourses.map((course, index) => (
        <div key={index} className="course">
          <h4>{course.course}</h4>
          <p><strong>{course.institution}</strong> - ({course.date})</p>
          {course.description && <p>{course.description}</p>}
        </div>
      ))}
    </section>
  );
};

export default Courses;