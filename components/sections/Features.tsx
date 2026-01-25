"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { featuresContent } from "@/data/content"
import {
  Users,
  Briefcase,
  TrendingUp,
  BarChart3,
  Clock,
  Calculator,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Briefcase,
  TrendingUp,
  BarChart3,
  Clock,
  Calculator,
}

export function Features() {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {featuresContent.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {featuresContent.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresContent.features.map((feature, index) => {
            const Icon = iconMap[feature.icon]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-gray-100 bg-white group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary-700 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
