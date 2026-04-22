import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Inteligência Artificial aplicada a Sistemas Corporativos e Cibersegurança",
      issuer: "AsticTO",
      date: "Out 2025",
      tags: ["IA", "Cibersegurança", "Sistemas Corporativos"]
    },
    {
      title: "Curso de Oratória – Método Falando Bem",
      issuer: "Método Falando Bem – Sandra Bordin",
      date: "Mai 2025",
      tags: ["Comunicação", "Oratória", "Soft Skills"]
    },
    {
      title: "Capacitação Profissional em Sistemas Embarcados",
      issuer: "IFMA – Instituto Federal do Maranhão",
      date: "Nov 2024",
      tags: ["Sistemas Embarcados", "Hardware", "IoT"]
    },
    {
      title: "Despertando a Liderança: Lidere-se para Impulsionar Resultados",
      issuer: "B&M Consultoria Empresarial",
      date: "Out 2024",
      tags: ["Liderança", "Empreendedorismo", "Inteligência Emocional"]
    },
    {
      title: "Seminário Workshop Sinergia",
      issuer: "Sebrae Tocantins",
      date: "Jun 2024",
      tags: ["Empreendedorismo", "Negócios", "Networking"]
    },
    {
      title: "I-Labs: Inovação no Setor Público",
      issuer: "Laboratório de Inovação do Goiás – LIGO",
      date: "Jun 2024",
      tags: ["Inovação", "Setor Público", "Design Thinking"]
    },
    {
      title: "Fundamentos do Scrum",
      issuer: "Conexão Agile",
      date: "Jun 2024",
      tags: ["Scrum", "Kanban", "Metodologias Ágeis"]
    },
    {
      title: "Introdução à Inteligência Artificial",
      issuer: "IFTO – Instituto Federal do Tocantins",
      date: "Mai 2023",
      tags: ["IA", "Machine Learning", "AI Overview"]
    },
    {
      title: "Curso de Banco de Dados – Redis",
      issuer: "Centro Universitário Luterano de Palmas – Ceulp/Ulbra",
      date: "Out 2019",
      tags: ["Redis", "NoSQL", "Banco de Dados"]
    },
    {
      title: "Jogos e Realidade Aumentada com Unity",
      issuer: "Centro Universitário Luterano de Palmas – Ceulp/Ulbra",
      date: "Mai 2019",
      tags: ["Unity", "Realidade Aumentada", "Game Dev"]
    },
    {
      title: "Curso de Banco de Dados – Cassandra",
      issuer: "Centro Universitário Luterano de Palmas – Ceulp/Ulbra",
      date: "Out 2018",
      tags: ["Cassandra", "NoSQL", "Banco de Dados"]
    },
    {
      title: "Design Thinking",
      issuer: "Centro Universitário Luterano de Palmas – Ceulp/Ulbra",
      date: "Mai 2018",
      tags: ["Design Thinking", "Inovação", "UX"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
              <Award className="w-7 h-7" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-tech mb-4">
            Licenças e Certificados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprendizado contínuo por meio de cursos, workshops e certificações
            nas áreas de tecnologia, liderança e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="p-6 hover-lift animate-scale-in flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {cert.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up">
          <p className="text-muted-foreground text-sm">
            <span className="font-semibold text-foreground">{certifications.length}</span> certificados e licenças emitidos
          </p>
        </div>
      </div>
    </section>
  );
};