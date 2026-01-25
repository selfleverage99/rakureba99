import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "プライバシーポリシー | ラクレバ",
  description: "ラクレバのプライバシーポリシーについて",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            トップページに戻る
          </Link>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">プライバシーポリシー</h1>
            <p className="text-sm text-gray-500 mb-8">最終更新日: 2024年12月1日</p>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-8">
                ラクレバ（以下「当社」）は、本サービスにおける利用者の個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 個人情報の定義</h2>
                <p className="text-gray-600">
                  本ポリシーにおいて「個人情報」とは、氏名、メールアドレス等、特定の個人を識別できる情報、およびGoogleアカウント情報、利用履歴、Cookie情報等を含みます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 収集する個人情報</h2>
                <p className="text-gray-600 mb-4">当社は、以下の情報を収集することがあります。</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Googleアカウント情報（氏名、メールアドレス、プロフィール画像）</li>
                  <li>サービス利用状況</li>
                  <li>アクセスログ、IPアドレス</li>
                  <li>Cookie情報</li>
                  <li>お問い合わせ時にご提供いただく情報</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 利用目的</h2>
                <p className="text-gray-600 mb-4">収集した個人情報は、以下の目的で利用します。</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>サービスの提供・運営・維持・改善</li>
                  <li>ユーザーサポートの提供</li>
                  <li>サービスに関するお知らせの送信</li>
                  <li>利用状況の分析・統計</li>
                  <li>不正利用の防止</li>
                  <li>法令対応</li>
                  <li>上記に付随する目的</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Google OAuth 2.0について</h2>
                <p className="text-gray-600">
                  当社はGoogle OAuth 2.0を利用してユーザー認証を行います。取得する情報は基本プロファイル（氏名・メールアドレス）および公開プロフィール画像に限定され、パスワードにはアクセスしません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 第三者提供</h2>
                <p className="text-gray-600">
                  当社は、法令に基づく場合または正当な理由がある場合を除き、ユーザーの同意なく個人情報を第三者に提供しません。業務委託先に対しては、適切な監督を行います。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. データの保存期間</h2>
                <p className="text-gray-600">
                  個人情報は、利用目的の達成に必要な期間保存し、その後は適切に削除または匿名化します。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">7. セキュリティ対策</h2>
                <p className="text-gray-600">
                  当社は、個人情報の漏洩、滅失、毀損を防止するため、SSL/TLS暗号化通信、アクセス制御、定期的なセキュリティ監査等の適切な安全管理措置を講じます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Cookieの使用</h2>
                <p className="text-gray-600">
                  当社は、サービスの利便性向上のためCookieを使用します。ブラウザの設定でCookieを無効にすることができますが、一部機能が利用できなくなる場合があります。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">9. ユーザーの権利</h2>
                <p className="text-gray-600">
                  ユーザーは、自己の個人情報について、開示、訂正、削除を請求する権利を有します。ご希望の場合は下記連絡先までお問い合わせください。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">10. ポリシーの変更</h2>
                <p className="text-gray-600">
                  当社は、必要に応じて本ポリシーを変更することがあります。重要な変更がある場合は、サービス内またはメールでお知らせします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">11. 準拠法・管轄</h2>
                <p className="text-gray-600">
                  本ポリシーは日本法に準拠し、本ポリシーに関する紛争については東京地方裁判所を専属的合意管轄裁判所とします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">12. お問い合わせ</h2>
                <p className="text-gray-600">
                  本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">ラクレバ運営事務局</p>
                  <p className="text-gray-600">メール: info@azcreate27.co.jp</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
