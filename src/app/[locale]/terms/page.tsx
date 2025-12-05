import { setRequestLocale } from "next-intl/server"
import { TermsContent } from "@/components/TermsContent"

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  // Enable static rendering
  setRequestLocale(locale)

  return <TermsContent />
}
