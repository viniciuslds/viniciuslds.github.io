import React from "react";
import { TimelineItem } from "@/components/ui/timeline-item";

export const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack Jr.",
      company: "Fundação de Apoio Científico e Tecnológico do Tocantins",
      period: "Abril 2025 - Atual",
      description: "Desenvolvimento de sites, aplicativos e sistemas completos utilizando Dart (Flutter), Python (Django), JavaScript (Node.js), Docker, MongoDB e PostgreSQL. Responsável pela modelagem de banco de dados e produção de MVPs.",
      technologies: ["Flutter", "Python", "Django", "JavaScript", "Node.js", "Docker", "MongoDB", "PostgreSQL", "GitHub", "Trello"]
    },
    {
      title: "Desenvolvedor Front-end Jr.",
      company: "Fundação de Apoio Científico e Tecnológico do Tocantins",
      period: "Abril 2024 - Abril 2025",
      description: "Desenvolvimento de aplicações front-end com foco em Flutter e Dart. Criação de MVPs e sistemas completos, incluindo o aplicativo 'Superando Limites' e o site inovafapto.org.br.",
      technologies: ["Flutter", "Dart", "PostgreSQL", "GitHub", "Trello", "MVP Development"]
    },
    {
      title: "Analista de Suporte Pleno I",
      company: "Adaptive Sistemas",
      period: "Outubro 2023 - Abril 2024",
      description: "Suporte técnico nível 2 para sistemas empresariais, com foco em resolução de problemas complexos e otimização de processos.",
      technologies: ["Suporte Técnico", "Análise de Sistemas", "Resolução de Problemas"]
    },
    {
      title: "Analista de Suporte Jr III",
      company: "Adaptive Sistemas",
      period: "Outubro 2022 - Outubro 2023",
      description: "Suporte a mais de 1.000 empresas utilizando sistemas da Adaptive, principalmente para o Programa Petros (postos de combustíveis). Realização de consultas e ajustes em banco PostgreSQL.",
      technologies: ["PostgreSQL", "SQL", "Movidesk", "Suporte Técnico", "Chat Support"]
    },
    {
      title: "Analista de Suporte",
      company: "Palmas Medicamentos LTDA",
      period: "Janeiro 2022 - Outubro 2022",
      description: "Suporte técnico para 11 filiais do grupo, trabalhando com sistemas Max Farma, ERP Winthor (TOTVS) e WMS (DELAGE). Gerenciamento de banco de dados Oracle e instalação de sistemas.",
      technologies: ["Oracle", "SQL", "ERP Winthor", "TOTVS", "Delphi", "HTML5", "Kaspersky"]
    },
    {
      title: "Analista de Redes e Comunicação",
      company: "Americas Health",
      period: "Abril 2021 - Janeiro 2022",
      description: "Gerenciamento de infraestrutura de rede e comunicação de dados, além de suporte ao sistema Tasy.",
      technologies: ["Redes", "Infraestrutura", "Sistema Tasy", "Comunicação de Dados"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha jornada profissional, desde suporte técnico até desenvolvimento full stack, 
            sempre focando em crescimento e aprendizado contínuo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.period}`}
                className="animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TimelineItem
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                  technologies={exp.technologies}
                  isLast={index === experiences.length - 1}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Career Progression Stats */}
        <div className="mt-16 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient-tech">4+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient-tech">6</div>
              <div className="text-muted-foreground">Empresas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient-tech">1000+</div>
              <div className="text-muted-foreground">Empresas Atendidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};