import React from "react";
import { Card } from "@/components/ui/card";
import { ProgressSkill } from "@/components/ui/progress-skill";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  Wrench,
  Palette
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Backend Development",
      color: "text-primary",
      skills: [
        { name: "Python/Django", level: 90 },
        { name: "JavaScript/Node.js", level: 85 },
        { name: "RESTful APIs", level: 88 },
        { name: "Microserviços", level: 75 }
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development", 
      color: "text-accent",
      skills: [
        { name: "Flutter/Dart", level: 95 },
        { name: "App Architecture", level: 85 },
        { name: "State Management", level: 80 },
        { name: "Native Integrations", level: 75 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Banco de Dados",
      color: "text-success",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Database Design", level: 85 },
        { name: "SQL Optimization", level: 75 }
      ]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "DevOps & Cloud",
      color: "text-warning",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 70 },
        { name: "Linux", level: 75 }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Ferramentas & Metodologias",
      color: "text-primary",
      skills: [
        { name: "Kanban/Scrum", level: 85 },
        { name: "Trello", level: 90 },
        { name: "Movidesk", level: 85 },
        { name: "Code Review", level: 80 }
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Outras Tecnologias",
      color: "text-accent",
      skills: [
        { name: "Unity Game Engine", level: 70 },
        { name: "Design Thinking", level: 75 },
        { name: "MVP Development", level: 85 },
        { name: "System Analysis", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-tech mb-4">
            Habilidades & Tecnologias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma visão abrangente das minhas competências técnicas e experiência 
            com diferentes tecnologias e metodologias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className={`${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressSkill
                      key={skill.name}
                      label={skill.name}
                      value={skill.level}
                      delay={(categoryIndex * 200) + (skillIndex * 100)}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Summary Chart */}
        <div className="mt-16 animate-fade-in-up">
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-center text-foreground mb-8">
              Distribuição de Experiência por Área
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success">8+</div>
                <div className="text-sm text-muted-foreground">Tecnologias Dominadas</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-warning">1000+</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};