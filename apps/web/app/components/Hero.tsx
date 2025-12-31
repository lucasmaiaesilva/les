"use client";

import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@repo/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-glow/15 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-slide-up">
            <Terminal size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Consultoria Especializada em TI</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Transformamos sua{" "}
            <span className="gradient-text text-glow">infraestrutura</span>
            <br />
            em vantagem competitiva
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Soluções de TI sob medida para empresas que buscam inovação, 
            segurança e performance. Do planejamento à execução.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gradient-primary glow-primary font-semibold text-base px-8 group">
              Iniciar Projeto
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="font-semibold text-base px-8 border-border hover:bg-secondary">
              Conhecer Serviços
            </Button>
          </div>

          {/* Code Block Decoration */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="code-block p-4 max-w-md mx-auto text-left">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <code className="text-sm text-muted-foreground">
                <span className="text-primary">const</span> sucesso ={" "}
                <span className="text-green-400">await</span> lstech.
                <span className="text-primary">transformar</span>(
                <span className="text-orange-400">"sua_empresa"</span>);
                <span className="terminal-cursor" />
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

