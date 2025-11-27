import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Configuration pour site statique
  // Note: output: 'export' est activé uniquement pour le build de production
  // Pour dev, on utilise le mode normal pour supporter le middleware next-intl
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,

  // Trailing slash pour compatibilité hébergement statique
  trailingSlash: true,

  images: {
    // Désactiver l'optimisation d'images (obligatoire pour export statique)
    unoptimized: true,
  },

  // Désactiver le header X-Powered-By
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
