import { setRequestLocale } from 'next-intl/server';
import { ServicesContent } from '@/components/ServicesContent';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <ServicesContent />;
}
