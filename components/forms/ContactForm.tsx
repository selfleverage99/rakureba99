"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/toast"
import { trackFormOpen, trackFormSubmit, trackFormSuccess, trackFormError } from "@/lib/analytics"
import { Loader2, CheckCircle, ArrowRight } from "lucide-react"

interface FormData {
  companyName: string
  name: string
  email: string
  message: string
  formType: "consultation" | "document"
}

interface ContactFormProps {
  formType?: "consultation" | "document"
  onSuccess?: () => void
}

export function ContactForm({ formType = "consultation", onSuccess }: ContactFormProps) {
  const [formData, setFormData] = React.useState<FormData>({
    companyName: "",
    name: "",
    email: "",
    message: "",
    formType,
  })
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const { showToast } = useToast()

  React.useEffect(() => {
    trackFormOpen(formType)
  }, [formType])

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.companyName.trim()) {
      newErrors.companyName = "会社名を入力してください"
    }

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください"
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスを入力してください"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)
    trackFormSubmit(formType)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("送信に失敗しました")
      }

      trackFormSuccess(formType)
      setIsSuccess(true)
      showToast("success", "お問い合わせを受け付けました")
      onSuccess?.()
    } catch (error) {
      trackFormError(formType, error instanceof Error ? error.message : "Unknown error")
      showToast("error", "送信に失敗しました。もう一度お試しください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          お問い合わせありがとうございます
        </h3>
        <p className="text-gray-600 mb-6">
          担当者より2営業日以内にご連絡いたします。
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-gray-500">次のステップ</p>
          <div className="flex items-center justify-center gap-2 text-primary-600">
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm">日程調整のご案内をお送りします</span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="会社名"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        error={errors.companyName}
        placeholder="株式会社サンプル"
        required
      />

      <Input
        label="お名前"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="山田 太郎"
        required
      />

      <Input
        label="メールアドレス"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="example@company.co.jp"
        required
      />

      <div className="w-full">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          ご質問・ご要望（任意）
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="flex w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow resize-none"
          placeholder="導入時期や現在の課題などがあればお聞かせください"
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            送信中...
          </>
        ) : formType === "consultation" ? (
          "導入相談する"
        ) : (
          "資料を請求する"
        )}
      </Button>

      <p className="text-xs text-center text-gray-500">
        送信することで、
        <a href="/privacy" className="text-primary-600 hover:underline">
          プライバシーポリシー
        </a>
        に同意したものとみなされます。
      </p>
    </form>
  )
}
