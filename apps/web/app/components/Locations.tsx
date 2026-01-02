"use client";

import { Globe } from "@repo/ui/globe";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

// Coordenadas centrais aproximadas de cada país
const countryLocations = [
  {
    country: "Brasil",
    coordinates: [-14.235, -51.9253] as [number, number], // Centro geográfico do Brasil
  },
  {
    country: "Estados Unidos",
    coordinates: [39.8283, -98.5795] as [number, number], // Centro geográfico dos EUA
  },
  {
    country: "Áustria",
    coordinates: [47.5162, 14.5501] as [number, number], // Centro geográfico da Áustria
  },
  {
    country: "Canadá",
    coordinates: [56.1304, -106.3468] as [number, number], // Centro geográfico do Canadá
  },
];

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.3, 0.3, 0.3] as [number, number, number],
  markerColor: [251 / 255, 100 / 255, 21 / 255] as [number, number, number],
  glowColor: [1, 1, 1] as [number, number, number],
  markers: countryLocations.map((location) => ({
    location: location.coordinates,
    size: 0.25, // Marcadores maiores para dar mais destaque
  })),
};

const Locations = () => {
  const t = useTranslations("locations");

  const countries = [
    {
      name: t("countries.brazil"),
    },
    {
      name: t("countries.usa"),
    },
    {
      name: t("countries.austria"),
    },
    {
      name: t("countries.canada"),
    },
  ];

  return (
    <section id="localizacoes" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] w-full">
            <Globe config={GLOBE_CONFIG} />
          </div>

          <div className="space-y-6">
            {countries.map((country, index) => (
              <div
                key={country.name}
                className="glass-card p-6 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">
                    {country.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
