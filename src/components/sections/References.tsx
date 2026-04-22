import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Phone, Building2 } from "lucide-react";

export const References = () => {
  const references = [
    {
      name: "Hugo Lima",
      role: "Gerente de TI",
      company: "Instituto Federal do Tocantins",
      phone: "(63) 9 8484-6929"
    },
    {
      name: "Flávio Lentulio",
      role: "Coordenador Estadual do ENEM",
      company: "Tocantins",
      phone: "(63) 98415-5205"
    },
    {
      name: "Miquéias Rodrigues",
      role: "Analista de Tasy Especialista",
      company: "Americas Health",
      phone: "(63) 99957-8927"
    },
    {
      name: "Ana Carolina Sartin",
      role: "Gerente de Suporte N1 e N2",
      company: "Adaptive Sistemas",
      phone: "(34) 9219-7350"
    },
    {
      name: "Lucas Francisco Paixão Gois",
      role: "Desenvolvedor Full Stack Pleno",
      company: "FAPTO",
      phone: "(63) 98454-3996"
    }
  ];

  return (
    <section id="references" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center text-success">
              <Users className="w-7 h-7" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Referências
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais que acompanharam minha trajetória e podem atestar meu
            desempenho, comprometimento e habilidades técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {references.map((ref, index) => (
            <Card
              key={ref.name}
              className="p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground text-lg">{ref.name}</h3>
                  <p className="text-sm text-primary font-medium">{ref.role}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{ref.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>{ref.phone}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};