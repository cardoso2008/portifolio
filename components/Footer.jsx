import React from 'react';
import curriculo from '../assets/curriculo.pdf'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleDownloadCV = () => {
    alert('Download de CV - implementar com arquivo real');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-copyright">
            © {currentYear} Guilherme Soares Cardoso. Todos os direitos reservados.
          </p>
          <a 
              href={curriculo} 
              download="Guilherme_Cardoso_CV.pdf" /* Sugere um nome de arquivo ao baixar */
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Baixar CV
            </a>
        </div>
      </div>
    </footer>
  );
}
