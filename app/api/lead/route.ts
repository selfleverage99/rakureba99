import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface LeadData {
  companyName: string
  name: string
  email: string
  message?: string
  formType: "consultation" | "document"
}

// SMTPトランスポーター設定
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.MAIL_SERVER,
    port: parseInt(process.env.MAIL_PORT || "465"),
    secure: process.env.MAIL_USE_SSL === "true",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })
}

// 管理者向け通知メールを送信
async function sendNotificationEmail(data: LeadData) {
  const transporter = createTransporter()

  const formTypeName = data.formType === "consultation" ? "導入相談" : "資料請求"

  const mailOptions = {
    from: process.env.MAIL_DEFAULT_SENDER,
    to: process.env.MAIL_TO || process.env.MAIL_USERNAME,
    subject: `【ラクレバ】${formTypeName}のお問い合わせがありました`,
    text: `
ラクレバのウェブサイトからお問い合わせがありました。

■ お問い合わせ種別
${formTypeName}

■ 会社名
${data.companyName}

■ お名前
${data.name}

■ メールアドレス
${data.email}

■ お問い合わせ内容
${data.message || "（なし）"}

■ 受付日時
${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}

---
このメールはラクレバのウェブサイトから自動送信されています。
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #2563eb;">ラクレバ - ${formTypeName}</h2>
  <p>ウェブサイトからお問い合わせがありました。</p>

  <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; background: #f9fafb; font-weight: bold; width: 140px;">お問い合わせ種別</td>
      <td style="padding: 12px; border: 1px solid #ddd;">${formTypeName}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; background: #f9fafb; font-weight: bold;">会社名</td>
      <td style="padding: 12px; border: 1px solid #ddd;">${data.companyName}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; background: #f9fafb; font-weight: bold;">お名前</td>
      <td style="padding: 12px; border: 1px solid #ddd;">${data.name}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; background: #f9fafb; font-weight: bold;">メールアドレス</td>
      <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; background: #f9fafb; font-weight: bold;">お問い合わせ内容</td>
      <td style="padding: 12px; border: 1px solid #ddd;">${data.message ? data.message.replace(/\n/g, '<br>') : '（なし）'}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; background: #f9fafb; font-weight: bold;">受付日時</td>
      <td style="padding: 12px; border: 1px solid #ddd;">${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}</td>
    </tr>
  </table>

  <p style="margin-top: 24px; color: #666; font-size: 12px;">
    このメールはラクレバのウェブサイトから自動送信されています。
  </p>
</body>
</html>
    `.trim(),
  }

  await transporter.sendMail(mailOptions)
}

// 自動返信メールを送信
async function sendAutoReplyEmail(data: LeadData) {
  const transporter = createTransporter()

  const formTypeName = data.formType === "consultation" ? "導入相談" : "資料請求"

  const mailOptions = {
    from: process.env.MAIL_DEFAULT_SENDER,
    to: data.email,
    subject: `【ラクレバ】お問い合わせを受け付けました`,
    text: `
${data.name} 様

この度は、ラクレバへお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けました。

■ お問い合わせ種別
${formTypeName}

■ 会社名
${data.companyName}

■ お名前
${data.name}

■ メールアドレス
${data.email}

■ お問い合わせ内容
${data.message || "（なし）"}

---

担当者より、通常2営業日以内にご連絡いたします。
今しばらくお待ちくださいませ。

なお、すぐにサービスをお試しになりたい場合は、
下記リンクより無料トライアルをご利用いただけます。

▼ 無料トライアルはこちら
https://bizflo27.com/invite/d6f23880-1c4c-4ae7-a331-ce3a1453fbe5

---
ラクレバ
https://rakureba.jp
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: sans-serif; line-height: 1.8; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #2563eb; font-size: 24px; margin: 0;">ラクレバ</h1>
  </div>

  <p>${data.name} 様</p>

  <p>この度は、ラクレバへお問い合わせいただき、誠にありがとうございます。<br>
  以下の内容でお問い合わせを受け付けました。</p>

  <div style="background: #f9fafb; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #666; width: 140px;">お問い合わせ種別</td>
        <td style="padding: 8px 0;">${formTypeName}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #666;">会社名</td>
        <td style="padding: 8px 0;">${data.companyName}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #666;">お名前</td>
        <td style="padding: 8px 0;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #666;">メールアドレス</td>
        <td style="padding: 8px 0;">${data.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #666; vertical-align: top;">お問い合わせ内容</td>
        <td style="padding: 8px 0;">${data.message ? data.message.replace(/\n/g, '<br>') : '（なし）'}</td>
      </tr>
    </table>
  </div>

  <p>担当者より、通常<strong>2営業日以内</strong>にご連絡いたします。<br>
  今しばらくお待ちくださいませ。</p>

  <div style="background: #eff6ff; border-radius: 8px; padding: 20px; margin: 30px 0; text-align: center;">
    <p style="margin: 0 0 15px 0; font-weight: bold; color: #1e40af;">すぐにお試しになりたい方へ</p>
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;">お待ちいただかずに、今すぐ無料トライアルを開始できます</p>
    <a href="https://bizflo27.com/invite/d6f23880-1c4c-4ae7-a331-ce3a1453fbe5"
       style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
      無料で試す →
    </a>
  </div>

  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

  <p style="text-align: center; color: #666; font-size: 14px;">
    <strong>ラクレバ</strong><br>
    <a href="https://rakureba.jp" style="color: #2563eb;">https://rakureba.jp</a>
  </p>
</body>
</html>
    `.trim(),
  }

  await transporter.sendMail(mailOptions)
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json()

    // バリデーション
    if (!data.companyName || !data.name || !data.email) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      )
    }

    // メールアドレス形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "メールアドレスの形式が正しくありません" },
        { status: 400 }
      )
    }

    // メール送信
    if (process.env.MAIL_SERVER && process.env.MAIL_USERNAME) {
      try {
        // 管理者への通知メール
        await sendNotificationEmail(data)
        console.log("管理者通知メール送信完了")

        // お客様への自動返信メール
        await sendAutoReplyEmail(data)
        console.log("自動返信メール送信完了")
      } catch (emailError) {
        console.error("メール送信エラー:", emailError)
        // メール送信エラーでもユーザーにはエラーを返さない（ログには記録）
      }
    }

    // Webhook URLが設定されている場合は送信
    const webhookUrl = process.env.LEAD_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            timestamp: new Date().toISOString(),
            source: "rakureba-lp",
          }),
        })
      } catch (webhookError) {
        console.error("Webhook送信エラー:", webhookError)
      }
    }

    // 開発環境ではコンソールにログ出力
    if (process.env.NODE_ENV === "development") {
      console.log("=== 新規リード ===")
      console.log("会社名:", data.companyName)
      console.log("お名前:", data.name)
      console.log("メール:", data.email)
      console.log("種別:", data.formType === "consultation" ? "導入相談" : "資料請求")
      if (data.message) {
        console.log("メッセージ:", data.message)
      }
      console.log("受付日時:", new Date().toLocaleString("ja-JP"))
      console.log("==================")
    }

    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました",
    })
  } catch (error) {
    console.error("リード処理エラー:", error)
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    )
  }
}
