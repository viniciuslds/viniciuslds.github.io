import React from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Vinícius Lima da Silva. Desenvolvido com React, TypeScript e Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
