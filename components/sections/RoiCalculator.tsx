"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { roiCalculatorContent } from "@/data/content"
import { formatNumber, formatCurrency } from "@/lib/utils"
import { trackRoiCalculate, trackCtaClick } from "@/lib/analytics"
import { Calculator, TrendingDown, Clock, ArrowRight } from "lucide-react"

export function RoiCalculator() {
  const [inputs, setInputs] = React.useState({
    employees: roiCalculatorContent.inputs[0].defaultValue,
    monthlyHours: roiCalculatorContent.inputs[1].defaultValue,
  })

  const [hasCalculated, setHasCalculated] = React.useState(false)

  const calculate = React.useMemo(() => {
    const { employees, monthlyHours } = inputs
    const totalMonthlyHours = employees * monthlyHours
    const currentMonthlyCost = totalMonthlyHours * roiCalculatorContent.hourlyRate
    const savedHours = Math.round(totalMonthlyHours * roiCalculatorContent.reductionRate)
    const savedCost = Math.round(currentMonthlyCost * roiCalculatorContent.reductionRate)
    const yearlyROI = savedCost * 12
    const paybackMonths = savedCost > 0 ? Math.ceil(50000 / savedCost) : 0

    return {
      savedHours,
      savedCost,
      yearlyROI,
      paybackMonths,
      totalMonthlyHours,
    }
  }, [inputs])

  const handleInputChange = (key: keyof typeof inputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }))
    if (!hasCalculated) {
      setHasCalculated(true)
    }
  }

  React.useEffect(() => {
    if (hasCalculated) {
      trackRoiCalculate(inputs, calculate)
    }
  }, [inputs, calculate, hasCalculated])

  const handleCtaClick = () => {
    trackCtaClick("consultation", "roi_calculator")
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

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
            {roiCalculatorContent.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {roiCalculatorContent.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 md:p-8 border border-primary-100"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="font-semibold text-gray-900">入力項目</span>
                </div>

                {roiCalculatorContent.inputs.map((input) => (
                  <div key={input.id}>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        {input.label}
                      </label>
                      <span className="text-sm text-gray-500">
                        {formatNumber(inputs[input.id as keyof typeof inputs])}
                        {input.unit}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={input.min}
                      max={input.max}
                      value={inputs[input.id as keyof typeof inputs]}
                      onChange={(e) =>
                        handleInputChange(
                          input.id as keyof typeof inputs,
                          Number(e.target.value)
                        )
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>{formatNumber(input.min)}</span>
                      <span>{formatNumber(input.max)}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Results Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-900">削減効果（試算）</span>
                </div>

                {/* Reduction Rate Note */}
                <div className="mb-4 p-3 bg-primary-50 rounded-lg">
                  <p className="text-xs text-primary-700 text-center">
                    {roiCalculatorContent.reductionNote}
                  </p>
                </div>

                {/* Before/After Bar Chart */}
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-2">月間作業時間の比較（全員合計）</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-12">現在</span>
                      <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-700 w-20 text-right">{calculate.totalMonthlyHours}時間</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-12">導入後</span>
                      <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${100 - roiCalculatorContent.reductionRate * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs font-semibold text-green-600 w-20 text-right">{calculate.totalMonthlyHours - calculate.savedHours}時間</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">月間削減時間</span>
                    <span className="text-2xl font-bold text-primary-600">
                      {formatNumber(calculate.savedHours)}時間
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">月間削減コスト</span>
                    <span className="text-2xl font-bold text-primary-600">
                      {formatCurrency(calculate.savedCost)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">年間削減効果</span>
                    <span className="text-2xl font-bold text-green-600">
                      {formatCurrency(calculate.yearlyROI)}
                    </span>
                  </div>

                  {calculate.paybackMonths > 0 && calculate.paybackMonths <= 12 && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 pt-2">
                      <Clock className="w-4 h-4" />
                      <span>
                        約{calculate.paybackMonths}ヶ月で投資回収見込み
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Savings Summary - Simpler Visual */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">ラクレバ導入による年間削減効果</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-green-600">{formatCurrency(calculate.yearlyROI)}</p>
                    <p className="text-xs text-gray-500 mt-1">年間でこれだけお得に</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">年間 <span className="font-bold text-primary">{formatNumber(calculate.savedHours * 12)}時間</span> 削減</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className="text-gray-600">
                    月額 <span className="font-bold text-gray-900">50,000円</span> で実現
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              {roiCalculatorContent.disclaimer}
            </p>

            <div className="mt-8 text-center">
              <Button size="lg" onClick={handleCtaClick} className="group">
                具体的な効果を相談する
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
