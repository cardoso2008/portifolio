import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
            Sou profissional em formação na área de dados, com base em desenvolvimento de sistemas e foco na análise e transformação de dados em insights relevantes para o negócio.
            </p>
            <p>
            Tenho experiência prática com tratamento de bases reais, incluindo processos de ETL, limpeza, padronização e modelagem de dados. Meu foco vai além do aspecto técnico: busco compreender o significado dos dados e seu impacto nas decisões, sempre questionando padrões e validando informações antes de aceitá-las.
            </p>
            <p>
            Atuei em projetos como o desenvolvimento de um painel analítico baseado em dados reais, onde trabalhei com dados inconsistentes e despadronizados, aplicando processos de limpeza e estruturação para torná-los utilizáveis. Também participei do Desafio de Ideias do SENAI, colaborando na construção de soluções para um problema logístico real, desenvolvendo habilidades de análise, comunicação e resolução de problemas em equipe multidisciplinar.
            </p>

            <p>
            Tenho perfil investigativo, pensamento crítico e forte conexão com visão de negócio. Busco oportunidades na área de dados onde possa contribuir com análise, geração de insights e desenvolvimento de soluções que apoiem a tomada de decisão.
            </p>
          </div>

          <div className="about-info">
          <div className="info-item">
            <h3 className="info-label">Formação</h3>

            <div className="formation-list">
              <div className="formation-card">
                <p className="info-value">Superior em Ciência de Dados</p>
                <p className="info-detail">Faculdade SENAI de Informática (2026-2027)</p>
              </div>

              <div className="formation-card">
                <p className="info-value">Especialização  Técnica em Gestão de Projetos</p>
                <p className="info-detail">Centro Paula Souza (2026)</p>
              </div>

              <div className="formation-card">
                <p className="info-value">Técnico em Desenvolvimento de Sistemas</p>
                <p className="info-detail">SENAI Nami Jafet (2025)</p>
              </div>
            </div>
          </div>

            <div className="info-item">
              <h3 className="info-label">Localização</h3>
              <p className="info-value">São Paulo - SP</p>
            </div>

            <div className="info-item">
              <h3 className="info-label">Contato</h3>
              <p className="info-value">guilherme.cardoso20082019@gmail.com</p>
              
              <a
                href="https://wa.me/5511939009776"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
              Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
