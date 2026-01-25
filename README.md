# ラクレバ LP

ラクレバ（統合業務OS）のランディングページです。CV最大化を目的に設計されています。

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animation**: Framer Motion
- **Font**: Noto Sans JP (Google Fonts)

## セットアップ手順

### 1. 依存関係のインストール

```bash
cd bizflo-lp
npm install
```

### 2. 環境変数の設定

`.env.example` を `.env.local` にコピーして、必要な値を設定します。

```bash
cp .env.example .env.local
```

**環境変数の説明:**

| 変数名 | 説明 | 必須 |
|--------|------|------|
| `LEAD_WEBHOOK_URL` | リード情報の送信先Webhook URL（Slack, HubSpot, Zapier等） | 任意 |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID（GTM-XXXXXXX形式） | 任意 |
| `NEXT_PUBLIC_SITE_URL` | 本番サイトのURL（OGP等で使用） | 推奨 |

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

### 4. 本番ビルド

```bash
npm run build
npm run start
```

## ディレクトリ構成

```
bizflo-lp/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト（メタデータ、JSON-LD）
│   ├── page.tsx           # メインLP
│   ├── globals.css        # グローバルCSS
│   └── api/lead/          # リード送信API
├── components/
│   ├── sections/          # LPセクションコンポーネント
│   ├── ui/                # 再利用可能なUIコンポーネント
│   ├── layout/            # ヘッダー、フッター、固定CTA
│   └── forms/             # フォームコンポーネント
├── data/
│   └── content.ts         # すべてのテキストコンテンツ
├── lib/
│   ├── utils.ts           # ユーティリティ関数
│   └── analytics.ts       # イベント計測
└── public/images/         # 画像ファイル
```

## コンテンツの編集

すべてのテキストコンテンツは `data/content.ts` に集約されています。
コピーの変更、FAQ項目の追加・削除等はこのファイルを編集してください。

## フォーム送信先の変更

フォーム送信は `/app/api/lead/route.ts` で処理されます。

**Webhook連携:**
- 環境変数 `LEAD_WEBHOOK_URL` にWebhook URLを設定
- Slack, HubSpot, Zapier, Make等と連携可能

**カスタム実装:**
- `route.ts` を編集してメール送信やDB保存を実装

## イベント計測

`lib/analytics.ts` でGoogle Tag Manager (dataLayer) へのイベント送信を実装しています。

**計測イベント:**
- `cta_click` - CTAボタンクリック
- `form_open` - フォーム表示
- `form_submit` - フォーム送信
- `form_success` - 送信成功
- `form_error` - 送信エラー
- `roi_calculate` - ROI計算機の使用

## デプロイ

Vercelへのデプロイを推奨します。

```bash
npm i -g vercel
vercel
```

## 改善余地（A/B案）

### 1. Hero セクションのヘッドライン

**現状:** 「月5万円で、会社の"いま"が全部わかる。」

**A案:** 価格訴求を強化
「50,000円で、業務システムをまるごと統合。」
- 具体的な金額を提示してコスパを強調
- 「統合」というキーワードで複数ツール問題の解決を示唆

**B案:** 課題訴求を強化
「Excel地獄から抜け出す。業務を、ひとつに。」
- 中小企業の共感ポイント（Excel地獄）を直接訴求
- 感情に訴えるコピーでスクロール率向上を狙う

### 2. ROI計算機の改善

**現状:** スライダー入力 → 結果表示

**A案:** ステップ式ウィザード
- 3ステップの質問形式に変更
- 「あなたにぴったりのプラン」として結果を提示
- パーソナライズ感を強化してCVR向上

**B案:** 業種別プリセット
- 「IT企業」「製造業」「サービス業」等のプリセットを用意
- ワンクリックで業種に応じた試算結果を表示
- 入力のハードルを下げてエンゲージメント向上

### 3. 最終CTAセクションの強化

**現状:** フォームのみ

**A案:** 2カラムレイアウト
- 左側：「導入相談」フォーム（現状）
- 右側：「まずは資料だけ」ダウンロードボタン
- フォーム入力のハードルが高いユーザーの取りこぼしを防止

**B案:** カレンダー埋め込み
- Calendly等の日程調整ツールを直接埋め込み
- 「今すぐ空き日程を確認」でワンクリック予約
- フォーム→メール→日程調整のステップを短縮

---

これらの改善案はA/Bテストで効果検証することを推奨します。
