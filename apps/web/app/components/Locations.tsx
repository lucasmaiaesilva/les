"use client";

import { Globe } from "@repo/ui/globe";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

const globeLocations = [
  {
    country: "Brasil",
    city: "São Paulo",
    coordinates: [-23.5505, -46.6333] as [number, number],
  },
  {
    country: "Brasil",
    city: "Minas Gerais",
    coordinates: [-19.9167, -43.9345] as [number, number],
  },
  {
    country: "Brasil",
    city: "Rio de Janeiro",
    coordinates: [-22.9068, -43.1729] as [number, number],
  },
  {
    country: "Estados Unidos",
    city: "Texas",
    coordinates: [29.7604, -95.3698] as [number, number],
  },
  {
    country: "Estados Unidos",
    city: "São Francisco",
    coordinates: [37.7749, -122.4194] as [number, number],
  },
  {
    country: "Estados Unidos",
    city: "Chicago",
    coordinates: [41.8781, -87.6298] as [number, number],
  },
  {
    country: "Áustria",
    city: "Innsbruck",
    coordinates: [47.2692, 11.4041] as [number, number],
  },
  {
    country: "Canadá",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207] as [number, number],
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
  markers: globeLocations.map((location) => ({
    location: location.coordinates,
    size: 0.1,
  })),
};

const Locations = () => {
  const t = useTranslations("locations");

  const countries = [
    {
      name: t("countries.brazil"),
      cities: t.raw("cities.brazil") as string[],
    },
    {
      name: t("countries.usa"),
      cities: t.raw("cities.usa") as string[],
    },
    {
      name: t("countries.austria"),
      cities: t.raw("cities.austria") as string[],
    },
    {
      name: t("countries.canada"),
      cities: t.raw("cities.canada") as string[],
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
                className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text mb-1">
                    {country.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {country.cities.join(", ")}
                  </p>
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
