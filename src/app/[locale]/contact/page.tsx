import { setRequestLocale } from 'next-intl/server';
import { ContactContent } from '@/components/ContactContent';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <ContactContent />;
}
