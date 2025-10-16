import React from 'react';

// Lista das suas certificações
const certifications = [
  {
    name: "AWS Academy Graduate - Cloud Architecting - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    credentialUrl: "#" // Substitua # pelo link da sua credencial
  },
  {
    name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    credentialUrl: "#" // Substitua # pelo link da sua credencial
  },
  {
    name: "Criar e usar relatórios analíticos com o Power BI",
    issuer: "Microsoft Learn Student Ambassadors",
    credentialUrl: "#" // Substitua # pelo link da sua credencial
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    credentialUrl: "#" // Substitua # pelo link da sua credencial
  }
];

const Certifications = () => {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="card">
      <h2>Licenças e Certificados</h2>
      {certifications.map((cert, index) => (
        <div key={index} className="certification">
          <h4>{cert.name}</h4>
          <p>{cert.issuer}</p>
          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="credential-link">
            Exibir credencial
          </a>
        </div>
      ))}
    </section>
  );
};

export default Certifications;