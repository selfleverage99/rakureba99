"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { trustContent } from "@/data/content"
import { Shield, Lock, Headphones, Check } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Lock,
  Headphones,
}

export function Trust() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">
            {trustContent.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustContent.items.map((item, index) => {
            const Icon = iconMap[item.icon]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-gray-100">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
