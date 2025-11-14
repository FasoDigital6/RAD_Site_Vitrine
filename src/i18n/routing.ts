import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Liste des locales supportées
  locales: ['fr', 'en'],

  // Locale par défaut
  defaultLocale: 'fr',

  // Toujours afficher la locale dans l'URL (ex: /fr/about, /en/about)
  localePrefix: 'always'
});

// Export des hooks de navigation typés
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
