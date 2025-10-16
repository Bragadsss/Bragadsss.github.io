import React from 'react';

const Experience = () => {
  const jobs = [
    {
      company: "DER-SP – Departamento de Estradas de Rodagem do Estado de São Paulo",
      startDate: "2022",
      endDate: "Atual",
      role: "Assistente de Suporte e Atendimento Multicanal",
      description: "Atuação no suporte técnico e administrativo, atendimento ao público interno e externo, e auxílio na operação de sistemas corporativos. Responsável por gerar relatórios, manter bases de dados atualizadas e colaborar em projetos de modernização tecnológica."
    }
  ];

  if (jobs.length === 0) {
    return null;
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