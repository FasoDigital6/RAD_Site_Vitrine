import { setRequestLocale } from 'next-intl/server';
import { ContractsContent } from '@/components/ContractsContent';

export default async function ContractsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <ContractsContent />;
}
