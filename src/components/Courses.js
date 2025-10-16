import React from 'react';

const Courses = () => {
    // Deixe o array vazio se não tiver cursos
  const extensionCourses = [
    {
      name: "Nome do Curso",
      institution: "Instituição/Local",
      hours: "Quantidade de Horas",
      date: "Data de Realização"
    },
     {
      name: "Outro Curso",
      institution: "Outra Instituição",
      hours: "XX horas",
      date: "Mês/Ano"
    }
  ];

  if (extensionCourses.length === 0) {
      return null;
  }

  return (
    <section id="courses" className="card">
      <h2>Cursos de Extensão</h2>
      {extensionCourses.map((course, index) => (
        <div key={index} className="course">
          <h4>{course.name}</h4>
          <p>{course.institution} - {course.hours}</p>
          <p>Realizado em: {course.date}</p>
        </div>
      ))}
    </section>
  );
};

export default Courses;