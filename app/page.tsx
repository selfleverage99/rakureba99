import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { MobileCta } from "@/components/layout/MobileCta"
import { Hero } from "@/components/sections/Hero"
import { Problems } from "@/components/sections/Problems"
import { IntegrationMap } from "@/components/sections/IntegrationMap"
import { Dashboard } from "@/components/sections/Dashboard"
import { Features } from "@/components/sections/Features"
import { UseCases } from "@/components/sections/UseCases"
import { Testimonials } from "@/components/sections/Testimonials"
import { Comparison } from "@/components/sections/Comparison"
import { RoiCalculator } from "@/components/sections/RoiCalculator"
import { Flow } from "@/components/sections/Flow"
import { Trust } from "@/components/sections/Trust"
import { Pricing } from "@/components/sections/Pricing"
import { Faq } from "@/components/sections/Faq"
import { faqContent } from "@/data/content"

// FAQ用のJSON-LD
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContent.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problems />
        <IntegrationMap />
        <Dashboard />
        <Features />
        <UseCases />
        <Testimonials />
        <Comparison />
        <RoiCalculator />
        <Flow />
        <Trust />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </>
  )
}
