export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

export const routing = {
  locales: locales,
  defaultLocale: 'pt' as Locale,
  localePrefix: 'always' as const
};

