import React from 'react';

import pythonLogo from '../assets/python.png'
import sqlLogo from '../assets/sqlServerLogo.png'
import excelLogo from '../assets/excelLogo.svg'
import powerBiLogo from '../assets/powerBiLogo.png'
import powerAutomateLogo from '../assets/powerAutomateLogo.png'
import pandasLogo from '../assets/pandasLogo.svg'
import numpyLogo from '../assets/numpyLogo.png'
import scikitLearnLogo from '../assets/scikitLearnLogo.png'
import matplotlibLogo from '../assets/matplotlibLogo.png'
import seabornLogo from '../assets/seabornLogo.png'
import plotlyLogo from '../assets/plotlyLogo.png'
import gitLogo from '../assets/gitLogo.png'
import googleScriptLogo from '../assets/Google_Apps_Script.svg.png'

const placeholderPath = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export default function Skills() {
  const skills = [

    { name: 'Python', imgSrc: pythonLogo },
    { name: 'Pandas', imgSrc: pandasLogo },
    { name: 'NumPy', imgSrc: numpyLogo },
    { name: 'SQL', imgSrc: sqlLogo },
    { name: 'Scikit-Learn', imgSrc: scikitLearnLogo },
    { name: 'Matplotlib', imgSrc: matplotlibLogo},
    { name: 'Seaborn', imgSrc: seabornLogo },
    { name: 'Plotly', imgSrc: plotlyLogo},
    { name: 'Excel', imgSrc: excelLogo},
    { name: 'Power BI', imgSrc: powerBiLogo },
    { name: 'Git', imgSrc: gitLogo},
    { name: 'Google Apps Script', imgSrc: googleScriptLogo },
    { name: 'Power Automate', imgSrc: powerAutomateLogo },
    { name: 'Figma', imgSrc: `${placeholderPath}/figma/figma-original.svg` },
  ];

  return (
    <section id="habilidades" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Habilidades Técnicas</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              
              {/* Wrapper para controlar o tamanho da imagem */}
              <div className="skill-image-wrapper">
                 <img 
                   src={skill.imgSrc} 
                   alt={`Logo ${skill.name}`} 
                   className="skill-image" 
                   // Adiciona carregamento preguiçoso para performance
                   loading="lazy" 
                 />
              </div>
              
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
