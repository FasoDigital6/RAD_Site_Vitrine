import { setRequestLocale } from "next-intl/server"
import { LegalContent } from "@/components/LegalContent"

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  // Enable static rendering
  setRequestLocale(locale)

  return <LegalContent />
}
