import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/ContactForm"

export const metadata: Metadata = {
  title: "お問い合わせ | ラクレバ",
  description: "ラクレバへのお問い合わせはこちらから",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            トップページに戻る
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              お問い合わせ
            </h1>
            <p className="text-lg text-gray-600">
              ご質問・ご相談など、お気軽にお問い合わせください。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Info cards */}
            <div className="space-y-4">
              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">メール</h3>
                      <p className="text-sm text-gray-600">info@rakureba.jp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">チャットサポート</h3>
                      <p className="text-sm text-gray-600">ログイン後、画面右下のチャットからお問い合わせいただけます。</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">対応時間</h3>
                      <p className="text-sm text-gray-600">平日 10:00 - 18:00<br />（土日祝日を除く）</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-700">
                  <strong>すぐに使い始めたい方へ</strong><br />
                  お問い合わせ不要で、今すぐ無料トライアルを開始できます。
                </p>
                <a
                  href="https://bizflo27.com/invite/d6f23880-1c4c-4ae7-a331-ce3a1453fbe5"
                  className="inline-block mt-3 text-sm font-medium text-blue-600 hover:text-blue-700 underline"
                >
                  無料で始める →
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-100 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    お問い合わせフォーム
                  </h2>
                  <ContactForm formType="consultation" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
