"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { heroContent } from "@/data/content"
import { trackCtaClick } from "@/lib/analytics"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const handleCtaClick = (ctaType: string) => {
    trackCtaClick(ctaType, "hero")
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative flex items-center pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-light/20 -z-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-100/50 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
              <span className="text-primary">{heroContent.headline.split('、')[0]}、</span>
              <br className="hidden lg:block" />
              {heroContent.headline.split('、').slice(1).join('、')}
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed max-w-xl font-medium">
              {heroContent.subheadline}
            </p>

            <p className="text-lg text-gray-500 mb-10 max-w-lg">
              {heroContent.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                className="text-base px-8 h-14 shadow-xl shadow-primary/20"
              >
                <a href="https://bizflo27.com/invite/d6f23880-1c4c-4ae7-a331-ce3a1453fbe5" onClick={() => trackCtaClick("register", "hero")}>
                  無料で試す
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => handleCtaClick("consultation")}
                className="text-base px-8 h-14"
              >
                お問い合わせ
              </Button>
            </div>

            {/* Simple trust text */}
            <p className="mt-8 text-sm text-gray-500">
              1ヶ月の無料トライアルあり・最短即日導入可能
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image with glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl transform scale-105" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/50">
                <Image
                  src={heroContent.heroImage}
                  alt="ラクレバの画面イメージ"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
