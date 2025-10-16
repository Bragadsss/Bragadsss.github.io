import React from 'react';

const Experience = () => {
  // Deixe este array vazio se não tiver experiência
  const jobs = [
    {
      company: "Nome da Empresa Atual",
      startDate: "Data de Início",
      endDate: "Presente",
      role: "Cargo/Função",
      description: "Descrição detalhada das atividades que você faz."
    },
    {
      company: "Nome da Empresa Anterior",
      startDate: "Data de Início",
      endDate: "Data de Desligamento",
      role: "Cargo/Função",
      description: "Descrição detalhada das atividades que você fazia."
    }
  ];

  if (jobs.length === 0) {
    return null; // Não renderiza a seção se não houver trabalhos
  }

  return (
    <section id="experience" className="card">
      <h2>Experiência Profissional</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.role}</h3>
          <p className="job-company">{job.company} ({job.startDate} - {job.endDate})</p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;