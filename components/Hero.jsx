import React from 'react';
import fotoDePerfil from '../assets/fotoDePerfil.jpg'
import curriculo from '../assets/curriculo.pdf'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src={fotoDePerfil} alt="Perfil" className="img-placeholder" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Guilherme Soares Cardoso</h1>
          <p className="hero-subtitle">
            Cientista de Dados
          </p>
          <p className="hero-description">
          Transformo dados em decisões, combinando análise, pensamento crítico e visão de negócio.
          </p>

          <div className="hero-ctas">
            <a href="#projetos" className="btn btn-primary">
              Ver Projetos
            </a>
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
      </div>
    </section>
  );
}
