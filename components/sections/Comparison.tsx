"use client"

import { motion } from "framer-motion"
import { comparisonContent } from "@/data/content"
import { Check, X } from "lucide-react"

export function Comparison() {
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
            {comparisonContent.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {comparisonContent.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b">
              <div className="p-4 md:p-6">
                <span className="text-sm font-medium text-gray-500">比較項目</span>
              </div>
              <div className="p-4 md:p-6 text-center border-l">
                <span className="text-sm font-medium text-gray-700">複数ツール運用</span>
              </div>
              <div className="p-4 md:p-6 text-center border-l bg-primary-50">
                <span className="text-sm font-bold text-primary-700">ラクレバ</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonContent.axes.map((axis, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index !== comparisonContent.axes.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="p-4 md:p-6 flex items-center">
                  <span className="font-medium text-gray-900">{axis.label}</span>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center border-l">
                  <div className="flex items-center gap-2 text-gray-600">
                    <X className="w-4 h-4 text-red-400" />
                    <span className="text-sm">{axis.multiple}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center border-l bg-primary-50/50">
                  <div className="flex items-center gap-2 text-primary-700">
                    <Check className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-medium">{axis.bizflo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8 text-gray-600"
          >
            {comparisonContent.summary}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
