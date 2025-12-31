"use client";

import { Cloud, Shield, Code, Database, Settings, Headphones } from "lucide-react";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("services");
  
  const services = [
    {
      icon: Cloud,
      title: t("items.cloud.title"),
      description: t("items.cloud.description"),
    },
    {
      icon: Shield,
      title: t("items.security.title"),
      description: t("items.security.description"),
    },
    {
      icon: Code,
      title: t("items.development.title"),
      description: t("items.development.description"),
    },
    {
      icon: Database,
      title: t("items.data.title"),
      description: t("items.data.description"),
    },
    {
      icon: Settings,
      title: t("items.infrastructure.title"),
      description: t("items.infrastructure.description"),
    },
    {
      icon: Headphones,
      title: t("items.support.title"),
      description: t("items.support.description"),
    },
  ];
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            {t("title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            {t("subtitle", { highlight: t("highlight") }).split(t("highlight")).map((part, i, arr) => 
              i === arr.length - 1 ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i}>
                  {part}
                  <span className="gradient-text">{t("highlight")}</span>
                </span>
              )
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

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

