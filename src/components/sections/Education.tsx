import React from "react";
import { TimelineItem } from "@/components/ui/timeline-item";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  const educations = [
    {
      title: "Pós-graduação Lato Sensu – Games e Gamificação na Educação",
      company: "UNINTER Centro Universitário Internacional",
      period: "Agosto 2024 – Janeiro 2025",
      description: "Especialização com foco na aplicação de jogos digitais e gamificação como estratégias pedagógicas inovadoras no ambiente educacional.",
      technologies: ["Game Design", "Gamificação", "Educação Digital", "Unity"]
    },
    {
      title: "Pós-graduação Lato Sensu – Engenharia da Computação",
      company: "UNINTER Centro Universitário Internacional",
      period: "Maio 2024 – Dezembro 2024",
      description: "Especialização em Engenharia da Computação com ênfase em sistemas embarcados, arquitetura de software e soluções computacionais avançadas.",
      technologies: ["Sistemas Embarcados", "Arquitetura de Software", "Engenharia de Sistemas"]
    },
    {
      title: "Bacharelado em Ciência da Computação",
      company: "ULBRA – Centro Universitário Luterano de Palmas",
      period: "Agosto 2017 – Dezembro 2023",
      description: "Formação completa em Ciência da Computação, com experiências em desenvolvimento de software, banco de dados, redes, inteligência artificial e engenharia de sistemas.",
      technologies: ["Algoritmos", "Estrutura de Dados", "Banco de Dados", "Redes", "IA", "Engenharia de Software"]
    },
    {
      title: "Ensino Médio Profissionalizante – Mecatrônica",
      company: "IFTO – Instituto Federal de Educação, Ciência e Tecnologia do Tocantins",
      period: "Março 2014 – Março 2017",
      description: "Curso técnico integrado ao ensino médio com foco em mecatrônica, eletrônica, programação de microcontroladores e automação industrial.",
      technologies: ["Mecatrônica", "Eletrônica", "Microcontroladores", "Automação", "Programação"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <GraduationCap className="w-7 h-7" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trajetória educacional construída com dedicação, do ensino técnico às especializações,
            sempre ampliando os horizontes na área de tecnologia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {educations.map((edu, index) => (
              <div
                key={`${edu.company}-${edu.period}`}
                className="animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TimelineItem
                  title={edu.title}
                  company={edu.company}
                  period={edu.period}
                  description={edu.description}
                  technologies={edu.technologies}
                  isLast={index === educations.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};