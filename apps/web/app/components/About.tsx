"use client";

import { CheckCircle, Users, Award } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");

  const stats = [
    { icon: Users, value: "200+", label: t("stats.clients") },
    { icon: Award, value: "9+", label: t("stats.experience") },
  ];

  const benefits = t.raw("benefits") as string[];
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              {t("title")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              {t("heading", { highlight: t("highlight") })
                .split(t("highlight"))
                .map((part, i, arr) =>
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
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("description")}
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

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
                  <div className="text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
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
