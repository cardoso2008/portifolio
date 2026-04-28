import React, { useState } from 'react';
import fotoDePerfilCircular from '../assets/profile.jpg'
import curriculo from '../assets/curriculo.pdf'


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Certificados', href: '#certificados' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleDownloadCV = () => {
    // Placeholder para download de CV
    alert('Download de CV - implementar com arquivo real');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={fotoDePerfilCircular} alt="Logo" className="logo-img" />
          <span className="logo-text">Guilherme Cardoso</span>
        </div>

        <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a 
              href={curriculo} 
              download="Guilherme_Cardoso_CV.pdf" /* Sugere um nome de arquivo ao baixar */
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Baixar CV
            </a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
