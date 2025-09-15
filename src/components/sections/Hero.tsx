import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import viniciusAvatar from "@/assets/vinicius-avatar.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full animate-pulse-soft" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Olá, eu sou{" "}
                  <span className="text-gradient-tech">Vinícius Silva</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-primary font-semibold">
                  Desenvolvedor Full Stack
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Especializado em Flutter, Python/Django, JavaScript/Node.js e tecnologias modernas. 
                  Criando soluções inovadoras em Palmas, Tocantins.
                </p>
              </div>
              
              {/* Location and contact info */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Palmas, Tocantins</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>vinicius4@rede.ulbra.br</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="gradient-primary hover-lift">
                  <Mail className="w-4 h-4 mr-2" />
                  Entre em Contato
                </Button>
                <Button variant="outline" size="lg" className="hover-lift">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
              
              {/* Social links */}
              <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <Button variant="ghost" size="sm" className="hover-glow">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover-glow">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-strong hover:shadow-glow transition-all duration-300">
                <img
                  src={viniciusAvatar}
                  alt="Vinícius Silva"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse-soft" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};