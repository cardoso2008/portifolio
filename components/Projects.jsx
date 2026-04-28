import { useState } from "react";

import anacLogo from '../assets/anac_logo.jpg'
import monitoramentoAlimentarCapa from '../assets/monitoramento_alimentar_capa.png'
import apresentacaoMonitoramentoAlimentar from '../assets/apresentacao_monitoramento_alimentar.jpg'
import capaDesafioDeIdeias from '../assets/DI_2025_SUZANO-5.jpg'
import img1DesafioDeIdeias from '../assets/DI_2025_SUZANO-39.jpg'
import img2DesafioDeIdeias from '../assets/DI_2025_SUZANO-41.jpg'
import img3DesafioDeIdeias from '../assets/DI-2.jpg'
import img4DesafioDeIdeias from '../assets/DI-27.jpg'
import img5DesafioDeIdeias from '../assets/foto_senai_suzano_desafio.jpeg'



export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Painel Sipaer",
      status: "em-desenvolvimento", // ou "em-desenvolvimento"
      shortDescription: "Ecossistema analítico focado no enriquecimento e modelagem de dados aeronáuticos para analisar dados de segurança.",

      tags: ["Python ", "Pandas", "SQL", "Power BI", "Git"],

      details: {
        context: [
          "O SIPAER (Sistema de Investigação e Prevenção de Acidentes Aeronáuticos) é a base fundamental para a segurança aérea no Brasil. Contudo, bases de dados públicas costumam apresentar desafios severos de integridade. Este projeto nasceu da necessidade de transformar dados brutos e fragmentados em um ecossistema de análise que suporte a identificação de padrões de risco e falhas sistêmicas na aviação.",
        ],
        problem: [
          "Ao iniciar a exploração, identifiquei três obstáculos que inviabilizariam uma análise confiável:",
          "1) Dados Fragmentados e Incompletos: O dataset original possuía lacunas críticas em colunas como 'Fabricante', 'Ano de Fabricação' e 'Tipo de Motor'.",
          "2) Inconsistência de Padronização: O mesmo fabricante aparecia sob diversos nomes (ex: Airbus, Airbus SAS, Airbus Company), o que distorceria qualquer volumetria.",
          "3) Complexidade de Relacionamento: A natureza dos dados (uma ocorrência envolvendo múltiplas aeronaves e vice-versa) exigia uma modelagem que evitasse a duplicidade de métricas."
        ],
        solution: [
          "Minha abordagem focou em garantir a confiabilidade da fonte antes da visualização:",
          "Enriquecimento Estratégico via Web Scraping: Em vez de aceitar as lacunas do dataset, desenvolvi um bot em Python para consultar as matrículas diretamente no site da ANAC. Para otimizar o processo e evitar bloqueios (Rate Limiting), implementei uma lógica que consultava apenas os valores nulos, economizando tempo computacional e respeitando a infraestrutura da fonte.",
          "Arquitetura de Dados em SQL Server: Para garantir o versionamento de código (Git), maior performance em grandes volumes e centralização das regras de negócio, facilitando a manutenção e a escalabilidade do projeto, optei por realizar todo o processo de transformação e modelagem diretamente no SQL Server em vez de usar o Power Query.",
          "Modelagem Dimensional (Star Schema): Estruturei o Data Warehouse com tabelas de Staging, Dimensões e Fato. Para resolver os problemas de cardinalidade N:N, implementei tabelas associativas, garantindo que a relação entre aeronaves e fatores contribuintes não gerasse inflação artificial nos dados."
        ],
        technologies: ["Python: ETL e enriquecimento de dados via web scraping.",
        "SQL Server: Criação do Data Warehouse, Views e modelagem lógica.",
        "Power BI: Camada de visualização (focada em exploração jornalística e self-service BI).",
        "Git: Versionamento de todo o pipeline de transformação."],
        results: [
          "Integridade e Confiabilidade dos Dados: A padronização de fabricantes e o enriquecimento da base via ANAC resultaram em um dataset auditável, eliminando distorções em análises de volumetria e garantindo precisão em indicadores de séries temporais.",
          "Otimização do Pipeline de Dados: A migração da lógica de ETL para o SQL Server reduziu drasticamente o tempo de processamento e atualização do painel, garantindo escalabilidade e permitindo que a camada de visualização opere com alta performance.",
          "Arquitetura Versionável e Sustentável: A centralização das regras de negócio em SQL e o uso de Git asseguram que o projeto seja replicável e de fácil manutenção, seguindo os padrões de governança exigidos em ambientes corporativos de dados."
        ],
      },

      media: {
        cover: anacLogo, // imagem principal
        images: [], // ["img1", "img2"] (opcional futuro)
        video: null, // link de vídeo (opcional)
      },

      links: {
        github: "https://github.com/cardoso2008/projeto_sipaer",
      },
    },

    {
      id: 2,
      title: "Monitoramento Alimentar",
      status: "concluido",
      shortDescription: "Sistema de monitoramento e modelagem de dados de consumo para controle de desperdício em ambiente escolar.",

      tags: ["Google Apps Script", "Figma", "Excel", "Google Looker Studio"],

      details: {
        context: [
          "Este projeto foi desenvolvido para uma unidade do SESI, com o objetivo de modernizar a gestão de lanches escolares (pães, frutas, bebidas). O cenário inicial era de baixa previsibilidade: a cozinha baseava sua produção em contagens manuais realizadas por inspetores, um processo suscetível a erros humanos que resultava em uma 'sobra limpa' (alimentos produzidos, mas não consumidos) ou falta de itens para os alunos. O projeto foi peça em um processo de certificação tecnológica da instituição, exigindo uma solução robusta e auditável.",
        ],
        problem: [
          "1) Falta de Previsibilidade de Demanda: A cozinha não sabia o que os alunos desejavam consumir no dia (ex: 1 ou 2 carboidratos), gerando desperdício de insumos.",
          "2) Dados Não Confiáveis: A contagem manual apresentava discrepâncias diárias, impossibilitando uma análise histórica real para planejamento de compras.",
          "3) Restrições de Infraestrutura: Embora uma solução em SQL fosse tecnicamente preferível, o projeto deveria ser implementado no sistema Google por exigência do cliente (certificação institucional), o que exigiu uma arquitetura que simulasse a funcionalidade de um banco de dados relacional."
        ],
        solution: [
          "Minha abordagem focou em garantir a confiabilidade da ponta até o dashboard, tratando o Google Sheets não apenas como uma planilha, mas como um Data Warehouse estruturado:",
          "1) Governança e Qualidade de Dados (Data Quality): Implementei o RM (Registro de Matrícula) como chave primária e 'senha' de acesso. No back-end (Google Apps Script), criei uma lógica de validação que impedia duplicidade de registros no mesmo dia e padronizava os inputs, garantindo que os dados chegassem ao Looker sem ruídos ou necessidade de limpeza manual posterior.",
          "2) Pipeline de ETL Automatizado: Desenvolvi scripts para automatizar o ciclo de vida do dado. Diariamente, às 0h, o sistema realizava o carregamento das informações da tabela de 'Demanda do Dia' para a tabela de 'Dados Históricos', limpando a interface para o dia seguinte sem intervenção humana.",
          "3) Modelagem de Dados (Star Schema): Estruturei o ecossistema em 5 tabelas relacionais (Alunos, Itens de Cardápio, Cardápio Semanal, Demanda Diária e Histórico). Essa modelagem permitiu cruzar o 'planejado' (cardápio da cozinha) com o 'realizado' (seleção dos alunos), permitindo o cálculo de métricas de adesão."
        ],
        technologies: ["Google Apps Script: Motor de ETL, automação de rotinas e regras de negócio/validação.", "Google Sheets: Utilizado como base de dados estruturada com integridade referencial via script.", "Google Looker Studio: Camada de Business Intelligence para visualização em tempo real para a equipe de nutrição.", "HTML/CSS/JS: Interface de coleta focada em UI/UX para evitar erros de input do usuário e agilidade."],
        results: [
          "Previsibilidade Operacional: A cozinha passou a visualizar a demanda exata de cada item antes do início do intervalo, permitindo o ajuste fino da produção e reduzindo a 'sobra limpa'.",
          "Criação de Cultura Data-Driven: O dashboard no Looker permitiu identificar padrões de consumo (ex: alta aceitabilidade de itens específicos como hambúrguer e pão de batata), subsidiando decisões estratégicas da nutrição sobre o cardápio.",
          "Fundação para Análise Preditiva: A estruturação da tabela de 'Dados Históricos' criou um ativo valioso para a instituição. No futuro, essa base permitirá a implementação de modelos de Machine Learning para prever a demanda semanal cruzando variáveis como clima, dia da semana e tipos de lanche, elevando o projeto do nível descritivo para o preditivo."
        ],
      },

      media: {
        cover: monitoramentoAlimentarCapa,
        images: [apresentacaoMonitoramentoAlimentar],
        video: null,
      },

    },

    {
      id: 3,
      title: "EcoCycle - Desafio de Ideias",
      status: "concluido",
      shortDescription: "Sistema de logística reversa e monitoramento RFID para substituição de pallets e caixas descartáveis por retornáveis com payback de 12 meses e economia de R$ 4 mi/ano.",

      tags: ["Design Sprint", "Inovação", "Resolução de Problemas", "JavaScript"],

      details: {
        context: [
          "Desenvolvido durante o 'Desafio de Ideias SENAI-SP' em parceria com a Emibra Embalagens, o projeto EcoCycle visou a reengenharia do modelo logístico de transporte de carga. O cenário envolvia uma operação de alto descarte e baixa rastreabilidade, exigindo uma solução que unisse design industrial, sustentabilidade e monitoramento de ativos."
        ],
        problem: [
          "A operação logística apresentava uma ineficiência financeira e ambiental crítica, caracterizada pelo uso de materiais de ciclo único:",
          "1) Volume de Descarte: Consumo mensal de 55 mil caixas de papelão, 3.500 pallets de madeira e 700 cantoneiras.",
          "2) Dreno Financeiro (OPEX): Um gasto anual aproximado de R$ 4 milhões em insumos que não retornavam à empresa.",
          "3) Invisibilidade Logística: Ausência total de rastreabilidade dos ativos após o envio ao cliente, impedindo a recuperação de materiais e a gestão de vida útil."
        ],
        solution: [
          "Redesenho Estrutural: Proposta de um novo modelo de pallet de alta durabilidade (vida útil estimada em 10 anos) e caixas de polímero . O design eliminou a necessidade de cantoneiras ao incorporar bordas de proteção lateral, reduzindo custos de material e tempo de montagem.",
          "Monitoramento via RFID: Implementação de um sistema de rastreabilidade ponta a ponta. Através de sensores RFID, a empresa passou a monitorar o ciclo de vida do ativo e localização.",
          "Sistema Web de Gestão: Desenvolvi um dashboard web para simular o acompanhamento dos ativos. O sistema utilizava dados em JSON para processar informações de manutenção, histórico de uso e cálculo de crédito de carbono, permitindo ao cliente visualizar o impacto ambiental positivo da parceria."
        ],
        technologies: ["AutoCAD: Utilizado para o desenvolvimento técnico e precisão dimensional do novo modelo de pallet, garantindo a eliminação das cantoneiras.",
          "Realidade Aumentada (AR): Aplicada para validação visual e apresentação do protótipo aos stakeholders, facilitando a compreensão da solução antes da produção física.",
           "Node.js, HTML, CSS e JS: Construção da plataforma de monitoramento e lógica de back-end para gestão dos sinais de RFID.",
            "RFID & JSON: Definição da arquitetura de dados para simulação do fluxo de informações entre os ativos no campo e o banco de dados central."],
        results: [
          "ROI e Eficiência Financeira: A substituição de materiais descartáveis por ativos permanentes projetou um payback de aproximadamente 1 ano, transformando um gasto recorrente de R$ 4 milhões em um modelo de custos fixos de manutenção significativamente menores.",
          "Sustentabilidade Mensurável: Implementação de indicadores de economia circular e redução de CO2, baseados em padrões científicos de descarte vs. reaproveitamento.",
          "Gestão de Ativos: A solução permitiu a transição para a manutenção preditiva dos pallets, utilizando o histórico de peso carregado e ciclos de uso capturados via RFID para evitar quebras em operação e perdas de carga."
        ],
      },

      media: {
        cover: capaDesafioDeIdeias,
        images: [img1DesafioDeIdeias, img2DesafioDeIdeias, img3DesafioDeIdeias, img4DesafioDeIdeias, img5DesafioDeIdeias],
        video: 'https://www.youtube.com/embed/kiZiBB8e1mg',
      },

      links: {
        github: "https://github.com/cardoso2008/EcoCycle",
      },
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projetos</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.media.cover} alt={project.title} />

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>

                <div className="tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <span className={`status ${project.status}`}>
                  {project.status === "concluido"
                    ? "Concluído"
                    : "Em desenvolvimento"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>

            <h2>{selectedProject.title}</h2>
            <span className={`status ${selectedProject.status}`}>
              {selectedProject.status === "concluido" ? "Concluído" : "Em desenvolvimento"}
            </span>

            <img src={selectedProject.media.cover} alt={selectedProject.title} className="modal-image" />
            {selectedProject.media.images.length > 0 && (
              <div className="modal-gallery">
                {selectedProject.media.images.map((img, i) => (
                <img key={i} src={img} alt={`imagem-${i}`} />
                ))}
              </div>
              )}

            {/* Renderização Dinâmica com Map */}
            <div className="modal-section">
              <h4>📌 Contexto</h4>
              {selectedProject.details.context.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="modal-section">
              <h4>🎯 Problema</h4>
              {selectedProject.details.problem.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="modal-section">
              <h4>💡 Solução</h4>
              {selectedProject.details.solution.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="modal-section">
              <h4>⚙️ Tecnologias</h4>
              {selectedProject.details.technologies.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="modal-section">
              <h4>📊 Resultados / Impacto</h4>
              {selectedProject.details.results.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {selectedProject.media.video && (
            <div className="modal-video">
            <iframe
              src={selectedProject.media.video}
              title="video"
              frameBorder="0"
              allowFullScreen
    ></iframe>
  </div>
)}

            {selectedProject.links?.github && (
              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
              Ver no GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}