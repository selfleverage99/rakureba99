export const siteConfig = {
  name: "ラクレバ",
  description: "顧客管理・案件管理・会計をひとつに統合。中小企業の業務を加速する統合業務OS。",
  url: "https://rakureba.jp",
  ogImage: "/images/og-image.png",
}

export const heroContent = {
  badge: "中小企業のための統合業務OS",
  headline: "月５万円で、会社の『いま』が全部見える。",
  subheadline: "顧客・案件・請求・会計・契約が1つに。二重入力ゼロ。",
  description: "今日の数字で、すぐ判断。",
  highlights: [
    "バラバラだったデータを一元管理",
    "入力は一度だけ、あとは自動連携",
    "御社の運用に合わせてカスタマイズ",
  ],
  heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
}

export const clientLogos = {
  title: "導入企業",
  logos: [
    { name: "株式会社サンプルA", initial: "A" },
    { name: "株式会社サンプルB", initial: "B" },
    { name: "株式会社サンプルC", initial: "C" },
    { name: "株式会社サンプルD", initial: "D" },
    { name: "株式会社サンプルE", initial: "E" },
    { name: "株式会社サンプルF", initial: "F" },
  ],
}

export const problemsContent = {
  sectionTitle: "こんな悩み、ありませんか？",
  sectionDescription: "複数のツールを使っていると、どうしても起きてしまう問題です。",
  problems: [
    {
      title: "同じ情報を何度も入力",
      description: "顧客情報をCRMに、案件情報をスプレッドシートに、請求情報を会計ソフトに…。同じことを何度も入力していませんか？",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
    },
    {
      title: "月末の締め作業が大変",
      description: "各ツールからデータを集めて、Excelで集計して、数字を突き合わせて…。毎月同じ作業に何時間もかかっていませんか？",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
    },
    {
      title: "今の数字がすぐ見えない",
      description: "今月の売上は？利益は？聞かれてもすぐに答えられない。データがバラバラだと、経営判断が遅れてしまいます。",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    },
  ],
  solution: {
    title: "ラクレバなら、すべてがつながります",
    description: "顧客情報を入力すれば、案件・請求・会計まで自動で連携。二重入力がなくなり、数字もリアルタイムで見えるようになります。",
  },
}

export const integrationMapContent = {
  sectionTitle: "入力は一度だけ。あとは自動で流れる。",
  description: "顧客情報から会計まで、データが自動でつながる統合設計です。",
  steps: [
    { id: 1, label: "顧客管理", icon: "Users" },
    { id: 2, label: "案件管理", icon: "Briefcase" },
    { id: 3, label: "見積・契約", icon: "FileText" },
    { id: 4, label: "請求管理", icon: "Receipt" },
    { id: 5, label: "会計", icon: "Calculator" },
    { id: 6, label: "KPI・分析", icon: "BarChart3" },
  ],
}

export const testimonialsContent = {
  sectionTitle: "導入企業の声",
  sectionDescription: "ラクレバを導入いただいた企業様からの声をご紹介します。",
  testimonials: [
    {
      quote: "月末の締め作業が3日から半日になりました。データがすべてつながっているので、集計の手間がほとんどなくなりましたね。",
      name: "山田利明(仮)",
      role: "代表取締役",
      company: "株式会社SP",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    },
    {
      quote: "営業メンバーの入力負担が減って、本来の営業活動に集中できるようになりました。案件の状況も一目で把握できます。",
      name: "斉藤美咲(仮)",
      role: "営業部長",
      company: "株式会社GP",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    },
    {
      quote: "経理の私としては、仕訳が自動で作られるのが本当に助かっています。入力ミスも減りましたし、チェック作業も楽になりました。",
      name: "山田花子(仮)",
      role: "経理担当",
      company: "有限会社WD",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    },
  ],
}

export const roiCalculatorContent = {
  sectionTitle: "導入効果をシミュレーション",
  description: "御社の状況を入力すると、削減効果の目安がわかります。",
  disclaimer: "※試算結果は目安です。実際の効果は導入環境により変動します。",
  reductionNote: "導入企業の平均で約60%の作業時間削減を実現しています",
  inputs: [
    { id: "employees", label: "対象従業員数", unit: "人", defaultValue: 5, min: 1, max: 20 },
    { id: "monthlyHours", label: "Excel集計・二重入力・月末締めにかかる時間（1人あたり）", unit: "時間/月", defaultValue: 10, min: 1, max: 40 },
  ],
  hourlyRate: 2500,
  reductionRate: 0.6,
}

export const featuresContent = {
  sectionTitle: "経営に必要な機能を、まるごと",
  description: "複数のツールを契約する必要はありません。ラクレバひとつで、これだけのことができます。",
  features: [
    {
      icon: "Users",
      title: "顧客管理",
      description: "顧客情報を一元管理。商談履歴、対応記録、担当者情報もまとめて管理できます。",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&q=80",
    },
    {
      icon: "Briefcase",
      title: "案件・タスク管理",
      description: "案件の進捗をカンバン形式で可視化。誰が何をしているか、一目でわかります。",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&q=80",
    },
    {
      icon: "TrendingUp",
      title: "売上・粗利管理",
      description: "案件ごとの売上・原価・粗利をリアルタイムに把握。採算管理が簡単に。",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    },
    {
      icon: "BarChart3",
      title: "KPIダッシュボード",
      description: "経営に必要な数字を自動で集計。いつでも最新の状況が確認できます。",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    },
    {
      icon: "Clock",
      title: "稼働・工数管理",
      description: "メンバーの稼働状況を記録・分析。リソース配分の最適化に役立ちます。",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
    },
    {
      icon: "Calculator",
      title: "請求書発行",
      description: "案件情報から請求書を自動作成。発行・入金管理まで一気通貫で対応。",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
    },
  ],
}

export const useCasesContent = {
  sectionTitle: "立場によって、見える景色が変わります",
  tabs: [
    {
      id: "executive",
      label: "経営者",
      title: "数字を待たずに、判断できる。",
      description: "月次決算を待たなくても、今日の売上・利益がリアルタイムで見えます。案件のパイプラインから受注予測も把握でき、先を見据えた経営判断ができるようになります。",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      points: [
        "リアルタイムで売上・利益を確認",
        "案件パイプラインから着地予測",
        "現場の動きを数字で把握",
      ],
    },
    {
      id: "sales",
      label: "営業責任者",
      title: "チームの動きが、見える。",
      description: "誰がどの案件を持っていて、どこまで進んでいるのか。メンバーの活動量と成果を可視化することで、適切なマネジメントができるようになります。",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
      points: [
        "案件の確度・金額・期日を一覧管理",
        "メンバーの活動量を可視化",
        "受注予測の精度向上",
      ],
    },
    {
      id: "admin",
      label: "管理部門",
      title: "月末が、怖くなくなる。",
      description: "請求書発行から入金確認、仕訳作成まで一元管理。手入力が減ることでミスも減り、チェック作業も楽になります。月末締めのストレスから解放されます。",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      points: [
        "請求から入金まで一元管理",
        "仕訳は自動生成",
        "証憑・帳票もシステム内で完結",
      ],
    },
  ],
}

export const comparisonContent = {
  sectionTitle: "複数ツール運用と、何が違うのか",
  description: "SFA、会計ソフト、請求ソフト、Excel、名刺管理システムを組み合わせて使っている場合との比較です。",
  axes: [
    { label: "月額コスト", multiple: "8〜10万円以上になることも", bizflo: "50,000円〜" },
    { label: "データの一貫性", multiple: "ツール間で分断、手動連携が必要", bizflo: "すべて自動で連携" },
    { label: "運用の手間", multiple: "ツールごとに設定・運用", bizflo: "ひとつで完結" },
    { label: "経営数字の把握", multiple: "都度集計が必要", bizflo: "リアルタイムで確認" },
    { label: "カスタマイズ", multiple: "ツールごとに制約あり", bizflo: "柔軟に対応可能" },
  ],
  summary: "コストを抑えながら、業務を統合。それがラクレバの価値です。",
}

export const flowContent = {
  sectionTitle: "最短即日で利用開始",
  description: "アカウント作成からすぐに使い始められます。",
  steps: [
    {
      step: 1,
      title: "アカウント作成",
      description: "公式LINEから申請していただくだけ。",
    },
    {
      step: 2,
      title: "初期設定",
      description: "ガイドに沿って基本設定を行います。必要に応じてデータをインポート。",
    },
    {
      step: 3,
      title: "無料トライアル開始",
      description: "1ヶ月間、すべての機能を無料でお試しいただけます。",
    },
  ],
}

export const trustContent = {
  sectionTitle: "安心してお使いいただくために",
  items: [
    {
      icon: "Shield",
      title: "セキュリティ",
      points: [
        "SSL/TLS暗号化通信",
        "国内データセンターで運用",
        "定期的なセキュリティ監査を実施",
      ],
    },
    {
      icon: "Lock",
      title: "アクセス管理",
      points: [
        "役職・部門ごとに権限設定",
        "すべての操作ログを記録",
        "IP制限にも対応（オプション）",
      ],
    },
    {
      icon: "Headphones",
      title: "サポート体制",
      points: [
        "導入時の設定サポート",
        "平日のチャット・メール対応",
        "定例ミーティング（オプション）",
      ],
    },
  ],
}

export const pricingContent = {
  sectionTitle: "シンプルな料金体系",
  description: "必要な機能がすべて含まれています。あとから追加費用がかかる心配はありません。",
  plans: [
    {
      name: "スタンダード",
      price: "50,000",
      unit: "円/月（税別）",
      description: "20ユーザーまで含む。中小企業に必要な機能をすべて搭載。",
      features: [
        "顧客・案件・タスク管理",
        "売上・粗利管理",
        "請求書発行",
        "KPIダッシュボード",
        "チャットサポート",
        "1ヶ月の無料トライアル",
      ],
      isPopular: true,
    },
    {
      name: "エンタープライズ",
      price: "要相談",
      unit: "",
      description: "大規模組織や、個別のカスタマイズが必要な場合はご相談ください。",
      features: [
        "スタンダードの全機能",
        "ユーザー数無制限",
        "カスタム開発対応",
        "専任サポート担当",
        "SLA保証",
      ],
      isPopular: false,
    },
  ],
}

export const faqContent = {
  sectionTitle: "よくあるご質問",
  items: [
    {
      question: "導入にはどのくらいの期間がかかりますか？",
      answer: "最短即日で使い始められます。シンプルな運用であれば、その日のうちにセットアップが完了します。カスタマイズが必要な場合でも、1〜2週間程度で導入可能です。",
    },
    {
      question: "今使っているツールからデータを移行できますか？",
      answer: "はい、CSVやExcelからのデータ移行に対応しています。移行作業のお手伝いもしますので、ご安心ください。",
    },
    {
      question: "20人以上で使いたい場合は？",
      answer: "追加ユーザーは1人あたり月額2,980円です。エンタープライズプランでのボリュームディスカウントもございます。",
    },
    {
      question: "うちの業務に合わせてカスタマイズできますか？",
      answer: "はい、項目の追加・非表示、帳票レイアウトの変更など、柔軟にカスタマイズできます。まずは御社の業務についてお聞かせください。",
    },
    {
      question: "セキュリティは大丈夫ですか？",
      answer: "SSL暗号化、国内データセンター、アクセス権限管理、操作ログ記録など、企業利用に必要な対策を実装しています。",
    },
    {
      question: "解約したい場合はどうなりますか？",
      answer: "解約は1ヶ月前までにご連絡ください。データはCSVでエクスポートできますので、安心してお試しいただけます。",
    },
    {
      question: "まずは試してみることはできますか？",
      answer: "はい、1ヶ月の無料トライアルをご用意しています。実際の業務で使ってみてからご判断ください。",
    },
  ],
}

export const dashboardContent = {
  sectionTitle: "リアルタイムで経営状況を把握",
  sectionDescription: "必要な数字がひと目でわかる。直感的なダッシュボードで、迷わず判断。",
  metrics: [
    { label: "今月の売上", value: "¥12,580,000", change: "+12.5%", isPositive: true },
    { label: "受注案件", value: "24件", change: "+8件", isPositive: true },
    { label: "粗利率", value: "42.3%", change: "+2.1%", isPositive: true },
    { label: "未回収金額", value: "¥1,850,000", change: "-15%", isPositive: true },
  ],
  chartData: {
    labels: ["4月", "5月", "6月", "7月", "8月", "9月"],
    sales: [8500, 9200, 10100, 9800, 11200, 12580],
    profit: [3400, 3700, 4200, 3900, 4600, 5320],
  },
  features: [
    "売上・粗利をリアルタイムで表示",
    "案件のパイプラインを可視化",
    "部門・担当者別の実績比較",
    "カスタムレポートの作成",
  ],
}

export const footerContent = {
  company: "Self Leverage Inc.",
  copyright: "© 2026 Self Leverage Inc. All rights reserved.",
}
