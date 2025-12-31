"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Textarea } from "@repo/ui/textarea";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  
  const contactInfo = [
    { icon: Mail, label: t("info.email"), value: "contato@lstech.com.br" },
    { icon: Phone, label: t("info.phone"), value: "+55 (11) 99999-9999" },
    { icon: MapPin, label: t("info.address"), value: "São Paulo, SP - Brasil" },
  ];
  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            {t("title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            {t("heading", { highlight: t("highlight") }).split(t("highlight")).map((part, i, arr) => 
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">{t("form.title")}</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">{t("form.name")}</label>
                  <Input placeholder={t("form.namePlaceholder")} className="bg-secondary/50 border-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">{t("form.email")}</label>
                  <Input type="email" placeholder={t("form.emailPlaceholder")} className="bg-secondary/50 border-border" />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">{t("form.company")}</label>
                <Input placeholder={t("form.companyPlaceholder")} className="bg-secondary/50 border-border" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">{t("form.message")}</label>
                <Textarea 
                  placeholder={t("form.messagePlaceholder")} 
                  rows={4}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>
              <Button className="w-full gradient-primary font-semibold group">
                {t("form.submit")}
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </div>

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
                <span className="text-green-400">{t("code.comment")}</span>
                <br />
                <span className="text-primary">{t("code.const")}</span> projeto = lstech.
                <span className="text-primary">{t("code.start")}</span>();
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

