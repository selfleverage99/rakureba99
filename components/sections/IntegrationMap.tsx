"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { integrationMapContent } from "@/data/content"
import {
  Users,
  Briefcase,
  FileText,
  Receipt,
  Calculator,
  BarChart3,
  Zap,
  RefreshCw,
  ArrowRight,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Briefcase,
  FileText,
  Receipt,
  Calculator,
  BarChart3,
}

const colorMap = [
  "from-blue-500 to-blue-600",
  "from-indigo-500 to-indigo-600",
  "from-violet-500 to-violet-600",
  "from-purple-500 to-purple-600",
  "from-fuchsia-500 to-fuchsia-600",
  "from-pink-500 to-pink-600",
]

export function IntegrationMap() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-primary-50/50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            ラクレバなら、すべてがつながります
          </h2>
        </motion.div>

        {/* Flow Diagram - Desktop */}
        <div className="hidden md:block max-w-5xl mx-auto mb-12">
          <div className="flex items-center justify-center">
            {/* Left side items */}
            <div className="flex flex-col gap-4">
              {integrationMapContent.steps.slice(0, 3).map((step, index) => {
                const Icon = iconMap[step.icon]
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorMap[index]} shadow-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800 w-24">{step.label}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Arrows to center */}
            <div className="flex flex-col gap-4 mx-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="h-16 flex items-center"
                >
                  <div className="w-12 h-0.5 bg-gradient-to-r from-gray-300 to-primary/50" />
                  <ArrowRight className="w-5 h-5 text-primary/50 -ml-1" />
                </motion.div>
              ))}
            </div>

            {/* Center Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-6"
            >
              <div className="w-36 h-36 bg-white rounded-3xl shadow-2xl shadow-primary/20 flex items-center justify-center border border-gray-100">
                <Image
                  src="/images/logo.png"
                  alt="ラクレバ"
                  width={120}
                  height={40}
                  className="w-28 h-auto"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl -z-10" />
            </motion.div>

            {/* Arrows from right to center */}
            <div className="flex flex-col gap-4 mx-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  className="h-16 flex items-center"
                >
                  <ArrowRight className="w-5 h-5 text-primary/50 -mr-1 rotate-180" />
                  <div className="w-12 h-0.5 bg-gradient-to-r from-gray-300 to-primary/50" />
                </motion.div>
              ))}
            </div>

            {/* Right side items */}
            <div className="flex flex-col gap-4">
              {integrationMapContent.steps.slice(3, 6).map((step, index) => {
                const Icon = iconMap[step.icon]
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-sm font-semibold text-gray-800 w-24 text-right">{step.label}</span>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorMap[index + 3]} shadow-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Flow Diagram - Mobile */}
        <div className="md:hidden mb-12">
          {/* Center Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="w-28 h-28 bg-white rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center border border-gray-100">
              <Image
                src="/images/logo.png"
                alt="ラクレバ"
                width={100}
                height={32}
                className="w-20 h-auto"
              />
            </div>
          </motion.div>

          {/* Grid of items */}
          <div className="grid grid-cols-3 gap-4">
            {integrationMapContent.steps.map((step, index) => {
              const Icon = iconMap[step.icon]
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[index]} shadow-md flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="mt-2 text-xs font-semibold text-gray-700 text-center">
                    {step.label}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "入力は一度だけ", desc: "二重入力の手間から解放" },
              { icon: RefreshCw, title: "リアルタイム同期", desc: "常に最新のデータを共有" },
              { icon: BarChart3, title: "自動で集計", desc: "レポートも瞬時に作成" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
