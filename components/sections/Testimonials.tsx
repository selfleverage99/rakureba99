"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

// コンポーネント内にデータを直接定義（写真なし、匿名形式）
const testimonials = [
  {
    quote: "月末の締め作業が3日から半日になりました。データがすべてつながっているので、集計の手間がほとんどなくなりましたね。",
    industry: "IT業",
    initial: "T",
  },
  {
    quote: "営業メンバーの入力負担が減って、本来の営業活動に集中できるようになりました。案件の状況も一目で把握できます。",
    industry: "コンサルティング業",
    initial: "S",
  },
  {
    quote: "経理の私としては、仕訳が自動で作られるのが本当に助かっています。入力ミスも減りましたし、チェック作業も楽になりました。",
    industry: "製造業",
    initial: "Y",
  },
]

export function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            導入企業の声
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center shadow-lg shadow-primary/30">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 leading-relaxed mb-6 mt-4">
                {testimonial.quote}
              </p>

              {/* Author - 匿名形式 */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">{testimonial.initial}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {testimonial.industry}　{testimonial.initial}様
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
