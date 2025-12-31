import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, locales, type Locale } from "./config";

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
