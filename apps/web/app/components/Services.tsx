"use client";

import { Cloud, Shield, Code, Database, Settings, Headphones } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Migração e gestão de infraestrutura em nuvem AWS, Azure e Google Cloud com alta disponibilidade.",
  },
  {
    icon: Shield,
    title: "Segurança da Informação",
    description: "Proteção completa contra ameaças cibernéticas, análise de vulnerabilidades e compliance.",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Sistemas sob medida, APIs robustas e integrações que impulsionam seu negócio.",
  },
  {
    icon: Database,
    title: "Gestão de Dados",
    description: "Business Intelligence, Data Analytics e governança de dados para decisões estratégicas.",
  },
  {
    icon: Settings,
    title: "Infraestrutura",
    description: "Planejamento, implementação e manutenção de redes, servidores e datacenter.",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Equipe técnica especializada disponível para resolver incidentes a qualquer momento.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Soluções completas para sua <span className="gradient-text">empresa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um portfólio abrangente de serviços de TI, adaptados às 
            necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

