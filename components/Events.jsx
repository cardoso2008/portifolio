import React, { useState, useEffect } from 'react';

import fotoDesafioDeIdeias from '../assets/fotoDesafioDeIdeias.jpg'
import fotoFuturecom from '../assets/fotoFuturecom.webp'
import fotoOracle from '../assets/fotoOracle.jpg'
import fotoGS1 from '../assets/gs1.jpg'


export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      year: '2025',
      title: 'Desafio de Ideias',
      description: 'Desenvolvimento de solução de logística reversa com foco em eficiência e redução de custos, em equipe multidisciplinar durante hackathon.',
      image: fotoDesafioDeIdeias,
    },
    {
      id: 2,
      year: '2025',
      title: 'Futurecom',
      description: 'Imersão em tendências tecnológicas como IoT, automação e infraestrutura de dados aplicadas ao mercado.',
      image: fotoFuturecom
    },
    {
      id: 3,
      year: '2025',
      title: 'Oracle Brasil',
      description: 'Contato com soluções Oracle voltadas a dados, cloud e desenvolvimento low-code em ambiente corporativo.',
      image: fotoOracle
    },
    {
      id: 4,
      year: '2026',
      title: 'GS1 Brasil',
      description: 'Análise do potencial de códigos de barras e RFIDs na geração de dados estruturados para suporte à tomada de decisão.',
      image: fotoGS1
    },
  ];

  // --- Lógica do Timer (igual ao anterior) ---
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  // -------------------------------------------


  return (
    <section id="eventos" className="events">
      <div className="events-container">
        <h2 className="section-title">Eventos & Visitas</h2>

        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {events.map((event) => (
              <div key={event.id} className="carousel-item">
                
                {}
                {}
                <div 
                  className="carousel-image" 
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
                {/* ------------------------------------- */}

                <div className="carousel-caption">
                  <span className="event-year">{event.year}</span>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controles e Indicadores (iguais ao anterior) */}
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className="carousel-control next" onClick={nextSlide} aria-label="Próximo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
          <div className="carousel-indicators">
            {events.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}