import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "利用規約 | ラクレバ",
  description: "ラクレバの利用規約について",
}

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">利用規約</h1>
            <p className="text-sm text-gray-500 mb-8">最終更新日: 2024年12月1日</p>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-8">
                この利用規約（以下「本規約」）は、ラクレバ（以下「当社」）が提供するサービス「ラクレバ」（以下「本サービス」）の利用条件を定めるものです。ユーザーの皆さまには、本規約に同意いただいた上で本サービスをご利用いただきます。
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第1条（定義）</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>「本サービス」とは、当社が提供する「ラクレバ」という名称のビジネス管理サービスをいいます。</li>
                  <li>「ユーザー」とは、本サービスを利用する個人または法人をいいます。</li>
                  <li>「コンテンツ」とは、ユーザーが本サービスに登録したデータ、テキスト、画像等の情報をいいます。</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第2条（適用）</h2>
                <p className="text-gray-600">
                  本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。当社が本サービス上で掲載する諸規定は、本規約の一部を構成するものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第3条（アカウント登録）</h2>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>登録情報は真実、正確かつ完全である必要があります。</li>
                  <li>ユーザーは、アカウント情報を適切に管理する責任を負います。</li>
                  <li>アカウントの不正使用により生じた損害について、当社は一切の責任を負いません。</li>
                  <li>ユーザーは、アカウントを第三者に譲渡、貸与、または共有することはできません。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第4条（サービスの提供）</h2>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>当社は、本サービスを現状有姿で提供します。</li>
                  <li>当社は、事前の通知なく本サービスの内容を変更、追加、または廃止することがあります。</li>
                  <li>当社は、定期的なメンテナンスのため、本サービスを一時的に停止することがあります。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第5条（料金および支払い）</h2>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>本サービスの利用料金は、別途定めるプランに従います。</li>
                  <li>ユーザーは、所定の方法で利用料金を支払うものとします。</li>
                  <li>支払いがない場合、当社はサービスの提供を一時停止または終了することができます。</li>
                  <li>一度支払われた利用料金は、原則として返金しません。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第6条（データの取り扱い）</h2>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>ユーザーが登録したデータの所有権はユーザーに帰属します。</li>
                  <li>当社は、サービスの提供・運用・改善の目的でデータにアクセスすることがあります。</li>
                  <li>当社は、データのバックアップに努めますが、データの消失について責任を負いません。</li>
                  <li>サービス終了時には、ユーザーはデータをエクスポートする機会が提供されます。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第7条（知的財産権）</h2>
                <p className="text-gray-600">
                  本サービスに関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。ユーザーは、当社の事前の書面による承諾なく、これらを使用することはできません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第8条（禁止事項）</h2>
                <p className="text-gray-600 mb-4">ユーザーは、以下の行為を行ってはなりません。</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社または第三者の知的財産権を侵害する行為</li>
                  <li>当社または第三者の名誉、信用を毀損する行為</li>
                  <li>サービスの運営を妨害する行為</li>
                  <li>不正アクセス、クラッキング等の行為</li>
                  <li>他のユーザーになりすます行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第9条（サービスの停止・終了）</h2>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>当社は、ユーザーが本規約に違反した場合、サービスの利用を停止または終了することができます。</li>
                  <li>当社は、やむを得ない事由がある場合、本サービス全体を終了することがあります。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第10条（免責事項）</h2>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>当社は、本サービスに関して、明示的または黙示的を問わず、いかなる保証も行いません。</li>
                  <li>当社は、本サービスの利用により生じた損害について、故意または重過失がある場合を除き、責任を負いません。</li>
                  <li>当社が責任を負う場合でも、その範囲はユーザーが支払った直近1ヶ月分の利用料金を上限とします。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第11条（規約の変更）</h2>
                <p className="text-gray-600">
                  当社は、必要に応じて本規約を変更することがあります。変更後の規約は、本サービス上での掲載その他当社が適切と判断する方法で通知した時点で効力を生じます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第12条（分離可能性）</h2>
                <p className="text-gray-600">
                  本規約のいずれかの条項が無効とされた場合でも、その他の条項の有効性には影響しないものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第13条（準拠法・管轄）</h2>
                <p className="text-gray-600">
                  本規約は日本法に準拠し、本規約に関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">第14条（お問い合わせ）</h2>
                <p className="text-gray-600">
                  本規約に関するお問い合わせは、以下の連絡先までお願いいたします。
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
