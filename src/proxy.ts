import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Matcher pour ignorer les fichiers statiques et l'API
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
