"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig, heroContent } from "@/data/content"
import { trackCtaClick } from "@/lib/analytics"

export function Header() {
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = React.useState(false)

  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const handleCtaClick = (ctaType: string) => {
    trackCtaClick(ctaType, "header")
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              機能
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              料金
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => handleCtaClick("consultation")}
            >
              お問い合わせ
            </Button>
            <Button
              size="sm"
              asChild
            >
              <a href="https://bizflo27.com/invite/d6f23880-1c4c-4ae7-a331-ce3a1453fbe5" onClick={() => trackCtaClick("register", "header")}>
                無料で試す
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
