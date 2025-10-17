import React from 'react';

// Lista das suas certificações
const certifications = [
  {
    name: "AWS Academy Graduate - Cloud Architecting - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    credentialUrl: "https://www.credly.com/badges/33879696-b034-4db0-af38-995632b52e5a/linked_in_profile" 
  },
  {
    name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    credentialUrl: "https://www.credly.com/badges/54a4996c-4627-4581-a9e9-769ea64d83c3/linked_in_profile" 
  },
  {
    name: "Criar e usar relatórios analíticos com o Power BI",
    issuer: "Microsoft Learn Student Ambassadors",
    credentialUrl: "https://learn.microsoft.com/pt-br/users/daviddesouzabraga-7767/achievements/h7hkq478?ref=https%3A%2F%2Fwww.linkedin.com%2F"
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    credentialUrl: "https://www.credly.com/badges/5afc9cea-9ee1-48c9-924d-8ad02e627563/linked_in_profile" 
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