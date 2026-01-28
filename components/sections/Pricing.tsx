"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { pricingContent } from "@/data/content"
import { trackCtaClick } from "@/lib/analytics"
import { Check, ArrowRight } from "lucide-react"

export function Pricing() {
  const handleCtaClick = (ctaType: string) => {
    trackCtaClick(ctaType, "pricing")
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {pricingContent.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {pricingContent.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingContent.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                className={`h-full relative overflow-hidden ${
                  plan.isPopular
                    ? "border-2 border-primary shadow-2xl shadow-primary/10"
                    : "border-gray-200 hover:border-gray-300"
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.isPopular && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-primary-700 text-white text-xs font-semibold rounded-full shadow-lg">
                        人気No.1
                      </span>
                    </div>
                  </>
                )}
                <CardContent className="p-8 pt-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-8">
                    {plan.description}
                  </p>

                  <div className="mb-8 pb-8 border-b border-gray-100">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="text-gray-500 ml-2 text-lg">{plan.unit}</span>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
