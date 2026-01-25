"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { heroContent } from "@/data/content"
import { trackCtaClick } from "@/lib/analytics"

export function MobileCta() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsVisible(window.scrollY > heroBottom - 100)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCtaClick = (ctaType: string) => {
    trackCtaClick(ctaType, "mobile_bottom_bar")
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg"
        >
          <div className="flex gap-3 p-3">
            
            <Button
              className="flex-1"
              asChild
            >
              <a href="https://bizflo27.com/invite/d6f23880-1c4c-4ae7-a331-ce3a1453fbe5" onClick={() => trackCtaClick("register", "mobile_bottom_bar")}>
                無料で試す
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
