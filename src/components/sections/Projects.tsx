import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Globe, Search } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Buscador de Editais",
      type: "Website",
      icon: <Search className="w-6 h-6" />,
      description: "Sistema web para busca e gerenciamento de editais públicos, facilitando o acesso a oportunidades de licitação e concursos.",
      technologies: ["Python", "Django", "PostgreSQL", "JavaScript", "HTML5", "CSS3"],
      status: "Em Produção",
      company: "Fundação de Apoio Científico e Tecnológico do Tocantins"
    },
    {
      title: "Superando Limites",
      type: "Mobile App", 
      icon: <Smartphone className="w-6 h-6" />,
      description: "Aplicativo mobile desenvolvido em Flutter para auxílio e motivação pessoal, com recursos de acompanhamento de metas e progresso.",
      technologies: ["Flutter", "Dart", "PostgreSQL", "Firebase", "Material Design"],
      status: "Lançado",
      company: "Fundação de Apoio Científico e Tecnológico do Tocantins"
    },
    {
      title: "inovafapto.org.br",
      type: "Website",
      icon: <Globe className="w-6 h-6" />,
      description: "Site institucional da Fundação de Apoio Científico e Tecnológico do Tocantins, apresentando projetos e iniciativas de inovação.",
      technologies: ["Flutter Web", "Dart", "Responsive Design", "SEO"],
      status: "Online",
      company: "Fundação de Apoio Científico e Tecnológico do Tocantins",
      url: "https://inovafapto.org.br"
    }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'lançado':
      case 'online':
      case 'em produção':
        return 'default';
      case 'em desenvolvimento':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getIconColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'mobile app':
        return 'text-accent';
      case 'website':
        return 'text-primary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-tech mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos principais projetos que desenvolvi, demonstrando 
            experiência em diferentes tecnologias e tipos de aplicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 hover-lift animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Project Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`${getIconColor(project.type)} group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <Badge variant={getStatusBadgeVariant(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {project.type}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Company */}
                <p className="text-xs text-muted-foreground italic">
                  {project.company}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {project.url && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover-glow"
                  >
                    <Github className="w-3 h-3 mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Card className="p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Mais Projetos
              </h3>
              <p className="text-muted-foreground">
                Durante minha carreira, participei do desenvolvimento de diversos outros 
                projetos internos e sistemas corporativos. Entre em contato para saber 
                mais sobre minha experiência completa.
              </p>
              <Button variant="outline" className="hover-lift">
                Ver Portfolio Completo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};