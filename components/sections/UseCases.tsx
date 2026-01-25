"use client"

import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useCasesContent } from "@/data/content"
import { Check } from "lucide-react"

export function UseCases() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {useCasesContent.sectionTitle}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue={useCasesContent.tabs[0].id} className="w-full">
            <TabsList className="w-full justify-center mb-8 bg-gray-100 p-1.5 rounded-xl">
              {useCasesContent.tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex-1 py-3 text-base data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {useCasesContent.tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {tab.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tab.description}
                  </p>
                  <ul className="space-y-3">
                    {tab.points.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
