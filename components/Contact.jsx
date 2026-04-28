import React from 'react';

const iconPath = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      label: 'WhatsApp',
      value: '(11) 93900-9776',
      link: 'https://wa.me/5511939009776',
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
    },
    {
      id: 2,
      label: 'LinkedIn',
      value: '/in/guilherme-soares-cardoso', // Encurtei visualmente para ficar mais bonito, o link continua completo
      link: 'https://www.linkedin.com/in/guilherme-soares-cardoso/',
      imgSrc: `${iconPath}/linkedin/linkedin-original.svg`
    },
    {
      id: 3,
      label: 'GitHub',
      value: '/cardoso2008',
      link: 'https://github.com/cardoso2008',
      imgSrc: `${iconPath}/github/github-original.svg`
    },
    {
      id: 4,
      label: 'Email',
      value: 'guilherme.cardoso20082019@gmail.com',
      link: 'mailto:guilherme.cardoso20082019@gmail.com',
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
    },
  ];

  return (
    <section id="contato" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Entre em Contato</h2>

        <p className="contact-subtitle">
        Interessado em oportunidades na área de dados. Fique à vontade para entrar em contato.
        </p>

        <div className="contact-grid">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              {/* Imagem do Logo */}
              <img 
                src={contact.imgSrc} 
                alt={`${contact.label} logo`} 
                className="contact-logo" 
              />
              
              <div className="contact-info">
                <h3 className="contact-label">{contact.label}</h3>
                <span className="contact-value">{contact.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}