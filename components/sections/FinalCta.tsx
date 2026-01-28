"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/ContactForm"

export function FinalCta() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image & Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-primary/10">
                <Image
                  src={finalCtaContent.image}
                  alt="ミーティング風景"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {finalCtaContent.headline}
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {finalCtaContent.description}
              </p>
              <p className="text-sm text-gray-500 mb-6">{finalCtaContent.note}</p>

              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-700 mb-2">
                  <strong>すぐに使い始めたい方</strong>
                </p>
                <p className="text-sm text-blue-600 mb-3">
                  お問い合わせ不要で、今すぐ無料トライアルを開始できます。
                </p>
                <a
                  href="https://bizflo27.com/invite/d6f23880-1c4c-4ae7-a331-ce3a1453fbe5"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  無料で試す →
                </a>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-gray-100 shadow-2xl shadow-gray-900/5 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      無料相談のお申し込み
                    </h3>
                    <p className="text-gray-500">
                      まずはお気軽にご相談ください
                    </p>
                  </div>
                  <ContactForm formType="consultation" />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
