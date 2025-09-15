import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  MessageCircle,
  Send
} from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "vinicius4@rede.ulbra.br",
      link: "mailto:vinicius4@rede.ulbra.br",
      description: "Melhor forma para contato profissional"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      value: "(63) 99291-7517",
      link: "tel:+5563992917517",
      description: "WhatsApp disponível"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "Palmas, Tocantins",
      link: "#",
      description: "307 Norte, Alameda 22 Lote 79"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Vinícius Lima da Silva",
      link: "https://linkedin.com/in/viniciuslimadasilvayuichivls",
      description: "Conecte-se comigo"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato para discussões sobre desenvolvimento ou colaborações.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Informações de Contato
                </h3>
                <p className="text-muted-foreground">
                  Prefere uma conversa rápida? Escolha a melhor forma de me encontrar:
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={method.title}
                    className="p-6 hover-lift transition-smooth animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        {method.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-1">
                          {method.title}
                        </h4>
                        <p className="text-primary font-medium mb-1 break-all">
                          {method.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="hover-glow"
                        asChild
                      >
                        <a href={method.link} target="_blank" rel="noopener noreferrer">
                          <Send className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4 pt-6">
                <h4 className="text-lg font-semibold text-foreground">
                  Redes Sociais
                </h4>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="hover-glow"
                    asChild
                  >
                    <a href="https://linkedin.com/in/viniciuslimadasilvayuichivls" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="hover-glow"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 h-full flex flex-col justify-center text-center space-y-8 gradient-surface">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-10 h-10 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground">
                      Pronto para Começar?
                    </h3>
                    <p className="text-muted-foreground">
                      Seja para discutir um projeto, oportunidade de trabalho ou 
                      apenas trocar ideias sobre tecnologia, estou sempre disponível 
                      para uma boa conversa.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full gradient-primary hover-lift"
                      asChild
                    >
                      <a href="mailto:vinicius4@rede.ulbra.br">
                        <Mail className="w-5 h-5 mr-2" />
                        Enviar Email
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full hover-glow"
                      asChild
                    >
                      <a href="https://wa.me/5563992917517" target="_blank" rel="noopener noreferrer">
                        <Phone className="w-5 h-5 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft" />
                    <span className="text-muted-foreground">
                      Disponível para novos projetos
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-sm text-muted-foreground">
            Resposta garantida em até 24 horas • Baseado em Palmas, TO
          </p>
        </div>
      </div>
    </section>
  );
};