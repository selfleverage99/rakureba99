"use client"

import { motion } from "framer-motion"
import { flowContent } from "@/data/content"

export function Flow() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">
            {flowContent.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {flowContent.description}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {flowContent.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line (Desktop) */}
                {index < flowContent.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-primary-100" />
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-600">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
