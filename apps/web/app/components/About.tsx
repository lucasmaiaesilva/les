"use client";

import { CheckCircle, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Clientes Atendidos" },
  { icon: Award, value: "15+", label: "Anos de Experiência" },
  { icon: Clock, value: "99.9%", label: "Uptime Garantido" },
];

const benefits = [
  "Equipe certificada nas principais tecnologias do mercado",
  "Metodologia ágil e entregas contínuas",
  "Suporte técnico especializado 24 horas",
  "Soluções escaláveis e personalizadas",
  "Foco em resultados e ROI mensurável",
];

const About = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Parceiros em <span className="gradient-text">inovação</span> e tecnologia
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A L&S Tech nasceu da paixão por transformar desafios tecnológicos 
              em oportunidades de crescimento. Com uma equipe multidisciplinar 
              de especialistas, entregamos soluções que fazem a diferença.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 rounded-xl flex items-center gap-6 hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <stat.icon size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

