import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Users, Award } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "Experiência completa no desenvolvimento de aplicações web e mobile"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Soluções Inovadoras",
      description: "Criação de MVPs e sistemas que resolvem problemas reais"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trabalho em Equipe",
      description: "Experiência com metodologias ágeis e colaboração eficiente"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Qualidade Técnica",
      description: "Foco em código limpo, performance e melhores práticas"
    }
  ];

  const mainTechs = [
    "Flutter/Dart", "Python/Django", "JavaScript", "Node.js",
    "PostgreSQL", "MongoDB", "Docker", "Git/GitHub"
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor apaixonado por tecnologia com 27 anos, focado em criar 
            soluções digitais que fazem a diferença.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Atualmente trabalho como <strong className="text-primary">Desenvolvedor Full Stack Jr.</strong> na 
                Fundação de Apoio Científico e Tecnológico do Tocantins, onde desenvolvo 
                sites, aplicativos e sistemas completos utilizando tecnologias modernas.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Minha experiência inclui desde o desenvolvimento frontend com Flutter até 
                backend com Python/Django e JavaScript/Node.js, além de trabalhar com 
                bancos de dados como PostgreSQL e MongoDB.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Tenho experiência em <strong className="text-primary">modelagem de banco de dados</strong>, 
                desenvolvimento de <strong className="text-primary">MVPs</strong> e trabalho com 
                metodologias ágeis usando Kanban no Trello.
              </p>
            </div>
            
            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Principais Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {mainTechs.map((tech) => (
                  <Badge key={tech} variant="secondary" className="hover-lift">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className="p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};