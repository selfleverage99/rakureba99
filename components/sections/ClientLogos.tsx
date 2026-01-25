"use client"

import { motion } from "framer-motion"
import { clientLogos } from "@/data/content"

export function ClientLogos() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-8">{clientLogos.title}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <span className="text-lg font-bold">{logo.initial}</span>
                </div>
                <span className="text-sm font-medium hidden sm:inline">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
