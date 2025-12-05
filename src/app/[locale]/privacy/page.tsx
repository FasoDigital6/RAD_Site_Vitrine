import { setRequestLocale } from "next-intl/server"
import { PrivacyContent } from "@/components/PrivacyContent"

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  // Enable static rendering
  setRequestLocale(locale)

  return <PrivacyContent />
}
