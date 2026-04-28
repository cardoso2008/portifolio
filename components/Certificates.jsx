import React from 'react';

import pythonLogo from '../assets/python.png'
import dataScienceLogo from '../assets/datascienceLogo.png'
import modelagemDadosIcon from '../assets/modelagem-de-dados.png'
import powerBiLogo from '../assets/powerBiLogo.png'
import microsoftLogo from '../assets/microsoftIcon.png'
import iaIcon from '../assets/iaIcon.png'


export default function Certificates() {
  const certificates = [
    {
      name: "Bootcamp em Ciência de Dados",
      institution: "Santander Open Academy | DIO",
      year: "2025",
      icon: {type: "image", value: dataScienceLogo},
      description: "Introdução prática a Python, SQL, Versionamento, Machine Learning e fundamentos de análise de dados",
    },
    {
      name: "Programação em Python",
      institution: "SENAI-SP",
      year: "2024",
      icon: {type: "image", value: pythonLogo},
      description: "Lógica de Programação em Python, visando automação e testes",
    },
    {
      name: "Modelagem de Dados",
      institution: "Fundação Bradesco",
      year: "2024",
      icon: {type: "image", value: modelagemDadosIcon},
      description: "Estruturação de dados em modelos relacionais e dimensionais",
    },
    {
      name: "Microsoft Power BI",
      institution: "SENAI-SP",
      year: "2025",
      icon: {type: "image", value: powerBiLogo},
      description: "Visualização de dados para apoio à tomada de decisão",
    },
    {
      name: "Microsoft Power Platform PL-900",
      institution: "SENAI-SP",
      year: "2025",
      icon: {type: "image", value: microsoftLogo},
      description: "Fundamentos de aplicativos, automação e análise de dados com ferramentas low-code.",
    },
    {
      name: "Introdução à Ciência de Dados",
      institution: "Santander Open Academy",
      year: "2026",
      icon: {type: "image", value: dataScienceLogo},
      description: "Conceitos iniciais de exploração e interpretação de dados",
    },
    {
      name: "Fundamentos de IA",
      institution: "SENAI-SP",
      year: "2025",
      icon: {type: "image", value: iaIcon},
      description: "Conceitos básicos de inteligência artificial e machine learning",
    },
  ];

  return (
    <section className="certificates">
      <div className="certificates-container">
        <h2 className="certificates-title">Formação Complementar</h2>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
          
              <div className="certificate-icon">
                {cert.icon.type === "image" ? (
                  <img src={cert.icon.value} alt={cert.name} />
                  ) : (
                  cert.icon.value
                )}
              </div>

              <div className="certificate-content">
                <h3>{cert.name}</h3>

                <p className="certificate-meta">
                  {cert.institution} • {cert.year}
                </p>

                <p className="certificate-description">
                  {cert.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}