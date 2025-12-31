"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Textarea } from "@repo/ui/textarea";

const contactInfo = [
  { icon: Mail, label: "Email", value: "contato@lstech.com.br" },
  { icon: Phone, label: "Telefone", value: "+55 (11) 99999-9999" },
  { icon: MapPin, label: "Endereço", value: "São Paulo, SP - Brasil" },
];

const Contact = () => {
  return (
    <section id="contato" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Vamos <span className="gradient-text">conversar</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar a tecnologia 
            em um diferencial competitivo para sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Envie sua mensagem</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Nome</label>
                  <Input placeholder="Seu nome" className="bg-secondary/50 border-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="seu@email.com" className="bg-secondary/50 border-border" />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Empresa</label>
                <Input placeholder="Nome da empresa" className="bg-secondary/50 border-border" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Mensagem</label>
                <Textarea 
                  placeholder="Como podemos ajudar?" 
                  rows={4}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>
              <Button className="w-full gradient-primary font-semibold group">
                Enviar Mensagem
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <info.icon size={22} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 code-block">
              <code className="text-sm text-muted-foreground block">
                <span className="text-primary">// </span>
                <span className="text-green-400">Pronto para começar?</span>
                <br />
                <span className="text-primary">const</span> projeto = lstech.
                <span className="text-primary">iniciar</span>();
                <span className="terminal-cursor" />
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

