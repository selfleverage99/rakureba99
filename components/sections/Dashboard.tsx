"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  TrendingUp,
  DollarSign,
  Building2,
  Wallet,
  BarChart3,
  Shield,
  Gauge,
  ChevronDown,
  Printer,
  Briefcase,
  Clock,
  RefreshCw,
  Eye,
  EyeOff,
  Calendar,
  Filter,
  CheckCircle,
} from "lucide-react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts"

// ============================================
// タブ1: 売上分析（analysis/sales.html 完全再現）
// ============================================
function SalesAnalysis() {
  // 予実管理データ
  const budgetData = [
    { month: "1月", target: 100, actual: 85, targetCum: 100, actualCum: 85, rate: 85 },
    { month: "2月", target: 100, actual: 92, targetCum: 200, actualCum: 177, rate: 88 },
    { month: "3月", target: 120, actual: 115, targetCum: 320, actualCum: 292, rate: 91 },
    { month: "4月", target: 100, actual: 98, targetCum: 420, actualCum: 390, rate: 93 },
    { month: "5月", target: 110, actual: 105, targetCum: 530, actualCum: 495, rate: 93 },
    { month: "6月", target: 100, actual: 88, targetCum: 630, actualCum: 583, rate: 92 },
    { month: "7月", target: 90, actual: 95, targetCum: 720, actualCum: 678, rate: 94 },
    { month: "8月", target: 80, actual: 78, targetCum: 800, actualCum: 756, rate: 94 },
    { month: "9月", target: 110, actual: 102, targetCum: 910, actualCum: 858, rate: 94 },
    { month: "10月", target: 120, actual: 100, targetCum: 1030, actualCum: 958, rate: 93 },
    { month: "11月", target: 100, actual: null, targetCum: 1130, actualCum: null, rate: null },
    { month: "12月", target: 70, actual: null, targetCum: 1200, actualCum: null, rate: null },
  ]

  // KPI推移データ
  const kpiData = [
    { month: "1月", grossMargin: 38, operatingMargin: 15, achievementRate: 85 },
    { month: "2月", grossMargin: 40, operatingMargin: 17, achievementRate: 88 },
    { month: "3月", grossMargin: 42, operatingMargin: 19, achievementRate: 91 },
    { month: "4月", grossMargin: 41, operatingMargin: 18, achievementRate: 93 },
    { month: "5月", grossMargin: 43, operatingMargin: 20, achievementRate: 93 },
    { month: "6月", grossMargin: 39, operatingMargin: 16, achievementRate: 92 },
    { month: "7月", grossMargin: 44, operatingMargin: 21, achievementRate: 94 },
    { month: "8月", grossMargin: 42, operatingMargin: 19, achievementRate: 94 },
    { month: "9月", grossMargin: 45, operatingMargin: 22, achievementRate: 94 },
    { month: "10月", grossMargin: 43, operatingMargin: 20, achievementRate: 93 },
    { month: "11月", grossMargin: 46, operatingMargin: 23, achievementRate: null },
    { month: "12月", grossMargin: 48, operatingMargin: 25, achievementRate: null },
  ]

  // 顧客別売上
  const customerData = [
    { name: "ABC", sales: 285 },
    { name: "DEF", sales: 210 },
    { name: "GHI", sales: 165 },
    { name: "JKL", sales: 120 },
    { name: "その他", sales: 178 },
  ]

  // 商品別売上
  const productData = [
    { name: "ITツール導入", value: 35, color: "#3b82f6" },
    { name: "コンサルティング", value: 28, color: "#10b981" },
    { name: "システム開発", value: 22, color: "#f59e0b" },
    { name: "保守サポート", value: 15, color: "#8b5cf6" },
  ]

  // 案件別売上
  const projectSalesData = [
    { name: "ECサイト", sales: 298 },
    { name: "基幹システム", sales: 228 },
    { name: "アプリ開発", sales: 193 },
    { name: "コンサル", sales: 140 },
  ]

  // 損益分岐点データ
  const bepData = [
    { sales: 0, revenue: 0, totalCost: 500, fixedCost: 500 },
    { sales: 200, revenue: 200, totalCost: 580, fixedCost: 500 },
    { sales: 400, revenue: 400, totalCost: 660, fixedCost: 500 },
    { sales: 600, revenue: 600, totalCost: 740, fixedCost: 500 },
    { sales: 720, revenue: 720, totalCost: 720, fixedCost: 500 },
    { sales: 800, revenue: 800, totalCost: 820, fixedCost: 500 },
    { sales: 1000, revenue: 1000, totalCost: 900, fixedCost: 500 },
    { sales: 1200, revenue: 1200, totalCost: 980, fixedCost: 500 },
  ]

  // 達成率ゲージ用
  const achievementData = [{ name: "達成率", value: 79.8, fill: "#3b82f6" }]

  return (
    <div className="space-y-6">
      {/* ページヘッダー */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-1">売上分析</h4>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
            <button className="px-3 py-1 text-xs rounded-md bg-white shadow-sm text-gray-900">月別</button>
            <button className="px-3 py-1 text-xs rounded-md text-gray-600 hover:bg-gray-50">週別</button>
            <button className="px-3 py-1 text-xs rounded-md text-gray-600 hover:bg-gray-50">日別</button>
          </div>
          <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
            <button className="px-3 py-1 text-xs rounded-md bg-white shadow-sm text-gray-900">確定売上</button>
            <button className="px-3 py-1 text-xs rounded-md text-gray-600 hover:bg-gray-50">見込み含む</button>
          </div>
        </div>
      </div>

      {/* 目標と実績 */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "売上高", target: "¥12,000,000", actual: "¥9,580,000", rate: 79.8, color: "blue" },
          { label: "粗利益", target: "¥3,600,000", actual: "¥2,641,000", rate: 73.4, color: "green" },
          { label: "営業利益", target: "¥1,800,000", actual: "¥1,240,000", rate: 68.9, color: "violet" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <div className="text-sm font-medium text-gray-500 mb-3">{item.label}</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500">月次目標</span>
                <span className="font-semibold text-gray-900">{item.target}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500">実績</span>
                <span className={`font-bold text-lg text-${item.color}-600`}>{item.actual}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-${item.color}-500 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.rate}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />
              </div>
              <div className="text-right text-xs font-semibold text-gray-600">{item.rate}%</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 予実管理グラフ（コンボチャート） */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200 flex justify-between items-center">
          <h5 className="text-sm font-semibold text-blue-700">予実管理</h5>
          <select className="text-sm border border-gray-300 rounded-lg px-2 py-1">
            <option>売上高</option>
            <option>粗利益</option>
            <option>営業利益</option>
          </select>
        </div>
        <div className="p-4">
          <ResponsiveContainer width="100%" height={220}>
            <ComposedChart data={budgetData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
              <YAxis yAxisId="left" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} domain={[0, 100]} />
              <Tooltip contentStyle={{ fontSize: 12 }} />
              <Bar yAxisId="left" dataKey="target" fill="#bfdbfe" name="目標（月次）" radius={[2, 2, 0, 0]} />
              <Bar yAxisId="left" dataKey="actual" fill="#14b8a6" name="実績（月次）" radius={[2, 2, 0, 0]} />
              <Line yAxisId="left" type="monotone" dataKey="targetCum" stroke="#3b82f6" strokeWidth={2} dot={false} name="目標（累計）" />
              <Line yAxisId="left" type="monotone" dataKey="actualCum" stroke="#0d9488" strokeWidth={2} dot={false} name="実績（累計）" />
              <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#ef4444" strokeWidth={2} strokeDasharray="4 2" dot={{ r: 3, fill: "#ef4444" }} name="達成率" />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-xs">
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-200 rounded" />目標（月次）</div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-teal-500 rounded" />実績（月次）</div>
            <div className="flex items-center gap-1"><div className="w-6 h-0.5 bg-blue-500" />目標（累計）</div>
            <div className="flex items-center gap-1"><div className="w-6 h-0.5 bg-teal-600" />実績（累計）</div>
            <div className="flex items-center gap-1"><div className="w-6 h-0.5 bg-red-500" style={{ borderTop: '2px dashed #ef4444', height: 0 }} />達成率</div>
          </div>
        </div>
      </div>

      {/* 売上目標達成率 & 主要KPI推移 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200">
            <h5 className="text-sm font-semibold text-blue-700">売上目標達成率</h5>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-center h-44">
              <ResponsiveContainer width={160} height={160}>
                <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" startAngle={90} endAngle={-270} data={achievementData}>
                  <RadialBar dataKey="value" cornerRadius={10} background={{ fill: "#e5e7eb" }} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">79.8%</span>
                <span className="text-xs text-gray-500">達成率</span>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-gray-50 rounded p-2">
                <div className="text-gray-500">目標</div>
                <div className="font-semibold text-gray-900">¥1,200万</div>
              </div>
              <div className="bg-blue-50 rounded p-2">
                <div className="text-blue-600">実績</div>
                <div className="font-semibold text-blue-700">¥958万</div>
              </div>
              <div className="bg-amber-50 rounded p-2">
                <div className="text-amber-600">残り</div>
                <div className="font-semibold text-amber-700">¥242万</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200">
            <h5 className="text-sm font-semibold text-blue-700">主要KPI推移</h5>
          </div>
          <div className="p-4">
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={kpiData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 8 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 8 }} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Line type="monotone" dataKey="grossMargin" stroke="#10b981" strokeWidth={2} dot={false} name="粗利率" />
                <Line type="monotone" dataKey="operatingMargin" stroke="#3b82f6" strokeWidth={2} dot={false} name="営業利益率" />
                <Line type="monotone" dataKey="achievementRate" stroke="#ef4444" strokeWidth={2} strokeDasharray="4 2" dot={false} name="達成率" />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2 text-xs">
              <div className="flex items-center gap-1"><div className="w-4 h-0.5 bg-green-500 rounded" />粗利率</div>
              <div className="flex items-center gap-1"><div className="w-4 h-0.5 bg-blue-500 rounded" />営業利益率</div>
              <div className="flex items-center gap-1"><div className="w-4 h-0.5 bg-red-400" />達成率</div>
            </div>
          </div>
        </div>
      </div>

      {/* 顧客別売上/粗利分析 & 商品別分析 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200 flex justify-between items-center">
            <h5 className="text-sm font-semibold text-blue-700">顧客別売上/粗利分析</h5>
            <select className="text-xs border border-gray-300 rounded px-2 py-1">
              <option>売上高</option>
              <option>粗利益</option>
              <option>粗利率</option>
            </select>
          </div>
          <div className="p-4">
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={customerData} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} width={50} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="sales" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200 flex justify-between items-center">
            <h5 className="text-sm font-semibold text-blue-700">商品別分析(上位10件)</h5>
            <select className="text-xs border border-gray-300 rounded px-2 py-1">
              <option>売上</option>
              <option>利益</option>
              <option>利益率</option>
            </select>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-center h-40">
              <ResponsiveContainer width={130} height={130}>
                <PieChart>
                  <Pie
                    data={productData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={55}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {productData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="ml-4 space-y-1">
                {productData.map((p) => (
                  <div key={p.name} className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 rounded" style={{ backgroundColor: p.color }} />
                    <span className="text-gray-600">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 案件別売上・利益分析 & 損益分岐点グラフ */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200 flex justify-between items-center">
            <h5 className="text-sm font-semibold text-blue-700">案件別売上・利益分析</h5>
            <select className="text-xs border border-gray-300 rounded px-2 py-1">
              <option>売上高</option>
              <option>利益額</option>
              <option>利益率</option>
            </select>
          </div>
          <div className="p-4">
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={projectSalesData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="sales" fill="url(#blueGradient)" radius={[4, 4, 0, 0]} label={{ position: 'top', fontSize: 10, fill: '#3b82f6' }} />
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200">
            <h5 className="text-sm font-semibold text-blue-700">損益分岐点グラフ</h5>
          </div>
          <div className="p-4 relative">
            <ResponsiveContainer width="100%" height={160}>
              <ComposedChart data={bepData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="sales" tick={{ fontSize: 9 }} tickLine={false} axisLine={false} label={{ value: '売上高', position: 'bottom', fontSize: 9, fill: '#64748b' }} />
                <YAxis tick={{ fontSize: 9 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Area type="linear" dataKey="revenue" fill="#10b98120" stroke="transparent" />
                <Line type="linear" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} dot={false} name="売上高" />
                <Line type="linear" dataKey="totalCost" stroke="#f59e0b" strokeWidth={2} dot={false} name="総費用" />
                <Line type="linear" dataKey="fixedCost" stroke="#ef4444" strokeWidth={2} strokeDasharray="6 3" dot={false} name="固定費" />
              </ComposedChart>
            </ResponsiveContainer>
            <div className="absolute top-4 right-4 bg-white/90 rounded p-2 text-[10px] space-y-1">
              <div className="flex items-center gap-1.5"><div className="w-4 h-0.5 bg-blue-500" />売上高</div>
              <div className="flex items-center gap-1.5"><div className="w-4 h-0.5 bg-amber-500" />総費用</div>
              <div className="flex items-center gap-1.5"><div className="w-4 h-0.5 bg-red-400" />固定費</div>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium shadow-sm">
              損益分岐点: ¥720万
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// タブ2: 稼働分析（productivity.html 完全再現）
// ============================================
function WorkAnalysis() {
  const users = [
    { name: "田中 太郎", hours: "168h", days: 22, efficiency: 92, color: "bg-green-500" },
    { name: "佐藤 花子", hours: "152h", days: 20, efficiency: 88, color: "bg-blue-500" },
    { name: "山田 次郎", hours: "176h", days: 23, efficiency: 95, color: "bg-cyan-500" },
    { name: "鈴木 美咲", hours: "160h", days: 21, efficiency: 90, color: "bg-amber-500" },
  ]

  const projectHours = [
    { name: "ECサイトリニューアル", assignee: "田中, 佐藤", hours: "48h", types: ["顧客案件", "研究開発"] },
    { name: "基幹システム導入", assignee: "山田, 鈴木", hours: "62h", types: ["顧客案件"] },
    { name: "アプリ開発", assignee: "田中, 山田", hours: "35h", types: ["顧客案件", "営業活動"] },
    { name: "社内ツール改善", assignee: "佐藤", hours: "18h", types: ["社内管理"] },
  ]

  const weekDays = ["月", "火", "水", "木", "金", "土", "日"]
  const calendarData = users.map((user, i) => ({
    name: user.name,
    mon: 7 + (i % 2),
    tue: 8,
    wed: 7 + (i % 3),
    thu: 8 - (i % 2),
    fri: 7,
    sat: i % 2 === 0 ? 2 : 0,
    sun: 0,
    total: user.hours
  }))

  return (
    <div className="space-y-6">
      {/* ページヘッダー */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-1">稼働・勤怠分析ダッシュボード</h4>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border-2 border-gray-200 bg-white rounded-full text-sm hover:bg-gray-50">今週</button>
          <button className="px-4 py-2 border-2 border-blue-500 bg-blue-500 text-white rounded-full text-sm">今月</button>
          <button className="px-4 py-2 border-2 border-gray-200 bg-white rounded-full text-sm hover:bg-gray-50">四半期</button>
        </div>
      </div>

      {/* 担当者×日付 稼働カレンダー */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="font-semibold text-gray-900">担当者×日付 稼働カレンダー</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg flex items-center gap-1">
              <Calendar className="w-4 h-4" /> 週
            </button>
            <button className="px-3 py-1.5 border border-gray-300 text-sm rounded-lg hover:bg-gray-50">月</button>
          </div>
        </div>
        <div className="p-4">
          {/* 担当者フィルター */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Filter className="w-4 h-4" /> 表示する担当者
              </label>
              <div className="flex gap-2">
                <button className="text-xs px-2 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
                  <CheckCircle className="w-3 h-3 inline mr-1" />全選択
                </button>
                <button className="text-xs px-2 py-1 border border-gray-300 text-gray-600 rounded hover:bg-gray-100">全解除</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {users.map(user => (
                <label key={user.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-blue-300">
                  <input type="checkbox" defaultChecked className="rounded text-blue-500" />
                  <span className="text-sm">{user.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* カレンダーグリッド */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 text-left font-medium text-gray-600 w-24">担当者</th>
                  {weekDays.map(day => (
                    <th key={day} className="px-3 py-2 text-center font-medium text-gray-600">{day}</th>
                  ))}
                  <th className="px-3 py-2 text-right font-medium text-gray-600">合計</th>
                </tr>
              </thead>
              <tbody>
                {calendarData.map((row) => (
                  <tr key={row.name} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-3 py-3 font-medium text-gray-900">{row.name}</td>
                    {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat, row.sun].map((hours, j) => (
                      <td key={j} className="px-2 py-2 text-center">
                        {hours > 0 && (
                          <div className={`mx-auto w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-medium ${
                            hours >= 8 ? 'bg-green-500' : hours >= 4 ? 'bg-blue-500' : 'bg-gray-300'
                          }`}>
                            {hours}h
                          </div>
                        )}
                      </td>
                    ))}
                    <td className="px-3 py-3 text-right font-bold text-gray-900">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 担当者別勤怠・稼働状況 */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">担当者別勤怠・稼働状況</h2>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4">
            {users.map((user, index) => (
              <motion.div
                key={user.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${user.color} text-white flex items-center justify-center font-bold`}>
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-500">出勤日数: {user.days}日</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-xl font-bold text-gray-900">{user.hours}</div>
                    <div className="text-xs text-blue-600 font-medium">稼働時間</div>
                  </div>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden flex">
                  <div className="bg-green-500 h-full" style={{ width: "45%" }} title="顧客案件" />
                  <div className="bg-blue-500 h-full" style={{ width: "25%" }} title="研究開発" />
                  <div className="bg-red-500 h-full" style={{ width: "15%" }} title="営業活動" />
                  <div className="bg-amber-500 h-full" style={{ width: "10%" }} title="教育・研修" />
                  <div className="bg-gray-400 h-full" style={{ width: "5%" }} title="社内管理" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>効率スコア</span>
                  <span className={`font-semibold ${user.efficiency >= 90 ? 'text-green-600' : 'text-blue-600'}`}>
                    {user.efficiency}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 凡例 */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
            {[
              { label: "顧客案件", color: "bg-green-500" },
              { label: "研究開発", color: "bg-blue-500" },
              { label: "営業活動", color: "bg-red-500" },
              { label: "教育・研修", color: "bg-amber-500" },
              { label: "社内管理", color: "bg-gray-400" },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-1">
                <div className={`w-3 h-3 rounded ${item.color}`} />
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 案件別作業時間分析 */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">案件別作業時間分析</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">案件名</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">担当者</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">総稼働時間</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">主なサービス</th>
              </tr>
            </thead>
            <tbody>
              {projectHours.map((project, index) => (
                <motion.tr
                  key={project.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <div className="font-medium text-gray-900">{project.name}</div>
                  </td>
                  <td className="px-4 py-4 text-gray-600">{project.assignee}</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-900">{project.hours}</td>
                  <td className="px-4 py-4">
                    <div className="flex gap-1 flex-wrap">
                      {project.types.map(type => (
                        <span key={type} className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          type === "顧客案件" ? "bg-green-100 text-green-700" :
                          type === "研究開発" ? "bg-blue-100 text-blue-700" :
                          type === "営業活動" ? "bg-red-100 text-red-700" :
                          "bg-gray-100 text-gray-700"
                        }`}>
                          {type}
                        </span>
                      ))}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ============================================
// タブ3: 案件進捗（progress.html 完全再現）
// ============================================
function ProjectProgress() {
  const projects = [
    { name: "ECサイトリニューアル", points: 85, tasks: 12, completed: 9 },
    { name: "基幹システム導入", points: 120, tasks: 18, completed: 8 },
    { name: "アプリ開発", points: 65, tasks: 8, completed: 7 },
    { name: "コンサルティング", points: 40, tasks: 5, completed: 2 },
  ]

  const kanbanUsers = [
    { name: "田中 太郎", tasks: 5, points: 42, expired: 1 },
    { name: "佐藤 花子", tasks: 3, points: 28, expired: 0 },
    { name: "山田 次郎", tasks: 4, points: 35, expired: 0 },
    { name: "鈴木 美咲", tasks: 2, points: 18, expired: 0 },
  ]

  // 稼働時間分布データ
  const workDistData = [
    { name: "ECサイト", hours: 48 },
    { name: "基幹システム", hours: 62 },
    { name: "アプリ", hours: 35 },
    { name: "コンサル", hours: 18 },
  ]

  // 年間ポイント推移データ
  const yearlyPointsData = [
    { month: "1月", points: 85 },
    { month: "2月", points: 72 },
    { month: "3月", points: 95 },
    { month: "4月", points: 68 },
    { month: "5月", points: 88 },
    { month: "6月", points: 105 },
    { month: "7月", points: 78 },
    { month: "8月", points: 62 },
    { month: "9月", points: 92 },
    { month: "10月", points: 110 },
    { month: "11月", points: 98 },
    { month: "12月", points: 120 },
  ]

  return (
    <div className="space-y-6">
      {/* 案件別ポイント集計 */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200 flex justify-between items-center">
          <h5 className="text-sm font-semibold text-blue-700">案件別ポイント集計</h5>
          <div className="flex gap-2 items-center">
            <select className="text-sm border border-gray-300 rounded-lg px-2 py-1">
              <option>今週</option>
              <option>直近2週間</option>
              <option>今月</option>
              <option>今四半期</option>
            </select>
            <button className="p-1.5 border border-gray-300 rounded-lg hover:bg-gray-50">
              <RefreshCw className="w-4 h-4 text-blue-500" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-900 text-sm">{project.name}</div>
                  <div className="text-xs text-gray-500">{project.completed}/{project.tasks} タスク完了</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">{project.points}pt</div>
                </div>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(project.completed / project.tasks) * 100}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 全員のタスク進捗（カンバンボード） */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200 flex justify-between items-center">
          <h5 className="text-sm font-semibold text-blue-700">全員のタスク進捗</h5>
        </div>
        <div className="p-4">
          {/* フィルター */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">案件</label>
              <select className="w-full text-sm border border-gray-300 rounded-lg px-2 py-1.5">
                <option>全案件</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">検索</label>
              <input type="text" placeholder="タスク名..." className="w-full text-sm border border-gray-300 rounded-lg px-2 py-1.5" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">&nbsp;</label>
              <div className="flex gap-1">
                <button className="flex-1 text-xs px-2 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1">
                  <EyeOff className="w-3 h-3" /> 完了済み
                </button>
                <button className="flex-1 text-xs px-2 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1">
                  <Eye className="w-3 h-3" /> 期限なし
                </button>
                <button className="p-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  <RefreshCw className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* カンバンボード */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {kanbanUsers.map((user, index) => (
              <motion.div
                key={user.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="p-3 bg-gray-50 border-b border-gray-200 rounded-t-lg">
                  <div className="font-semibold text-gray-900 text-sm mb-2">{user.name}</div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {user.tasks} タスク
                    </span>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                      {user.points} pt
                    </span>
                    {user.expired > 0 && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        {user.expired} 期限切れ
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-3 space-y-2 min-h-[120px]">
                  {[...Array(Math.min(user.tasks, 2))].map((_, i) => (
                    <div key={i} className="p-2 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer">
                      <div className="text-sm font-medium text-gray-900 mb-1">タスク {i + 1}</div>
                      <div className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded inline-block">ECサイト</div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs px-2 py-0.5 bg-amber-500 text-white rounded-full">進行中</span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> 3/15
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 案件ごとの稼働時間分布 + 年間ポイント推移 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200 flex justify-between items-center">
            <h5 className="text-sm font-semibold text-blue-700">案件ごとの稼働時間分布</h5>
            <select className="text-sm border border-gray-300 rounded-lg px-2 py-1">
              <option>直近2週間</option>
            </select>
          </div>
          <div className="p-4">
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={workDistData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} unit="h" />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="hours" fill="url(#blueBarGrad)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="blueBarGrad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-3 border-b-2 border-blue-200">
            <h5 className="text-sm font-semibold text-blue-700">年間ポイント推移</h5>
          </div>
          <div className="p-4">
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={yearlyPointsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 8 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 9 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="points" fill="url(#greenBarGrad)" radius={[3, 3, 0, 0]} />
                <defs>
                  <linearGradient id="greenBarGrad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// タブ4: 経営指標ダッシュボード（metrics_dashboard.html 完全再現）
// ============================================
function MetricsDashboard() {
  // 収益性指標推移データ
  const profitabilityData = [
    { quarter: "Q1", ROA: 3.5, ROE: 5.5, operatingMargin: 14 },
    { quarter: "Q2", ROA: 4.0, ROE: 6.5, operatingMargin: 16 },
    { quarter: "Q3", ROA: 4.5, ROE: 7.2, operatingMargin: 17 },
    { quarter: "Q4", ROA: 5.1, ROE: 8.1, operatingMargin: 18.6 },
  ]

  // 安全性指標推移データ
  const safetyData = [
    { quarter: "Q1", equityRatio: 58, currentRatio: 165 },
    { quarter: "Q2", equityRatio: 60, currentRatio: 172 },
    { quarter: "Q3", equityRatio: 62, currentRatio: 178 },
    { quarter: "Q4", equityRatio: 63.4, currentRatio: 185.2 },
  ]

  return (
    <div className="space-y-6">
      {/* ページヘッダー */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-1">経営指標ダッシュボード</h4>
          <p className="text-sm text-gray-500">重要経営指標をひと目で把握</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm text-gray-700">
              <option>期間を選択</option>
              <option>2024年度 第4四半期</option>
              <option>2024年度 第3四半期</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            <Printer className="w-4 h-4" /> 印刷
          </button>
        </div>
      </div>

      {/* 主要指標カード */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { icon: TrendingUp, label: "売上高", value: "¥12,580,000", change: "+12.5%", color: "bg-blue-500" },
          { icon: DollarSign, label: "営業利益", value: "¥2,340,000", change: "+8.3%", color: "bg-green-500" },
          { icon: Building2, label: "総資産", value: "¥45,600,000", change: "+5.2%", color: "bg-cyan-500" },
          { icon: Wallet, label: "純資産", value: "¥28,900,000", change: "+6.8%", color: "bg-amber-500" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg p-5 relative overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className={`absolute top-0 left-0 w-1 h-full ${item.color}`} />
            <div className="flex items-center gap-2 mb-3 text-gray-500">
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium uppercase">{item.label}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{item.value}</div>
            <div className="text-sm font-medium text-green-600">前期比 {item.change}</div>
          </motion.div>
        ))}
      </div>

      {/* 収益性指標 */}
      <div>
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
          <BarChart3 className="w-5 h-5 text-blue-500" />
          収益性指標
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "ROA (総資産利益率)", value: "5.1%", desc: "当期純利益 ÷ 総資産 × 100" },
            { label: "ROE (自己資本利益率)", value: "8.1%", desc: "当期純利益 ÷ 自己資本 × 100" },
            { label: "売上高営業利益率", value: "18.6%", desc: "営業利益 ÷ 売上高 × 100" },
            { label: "売上総利益率", value: "42.3%", desc: "売上総利益 ÷ 売上高 × 100" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="text-xs font-medium text-gray-500 mb-2">{item.label}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
              <div className="text-[11px] text-gray-400 leading-tight">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 安全性指標 */}
      <div>
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
          <Shield className="w-5 h-5 text-blue-500" />
          安全性指標
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "自己資本比率", value: "63.4%", desc: "純資産 ÷ 総資産 × 100" },
            { label: "流動比率", value: "185.2%", desc: "流動資産 ÷ 流動負債 × 100" },
            { label: "固定比率", value: "78.5%", desc: "固定資産 ÷ 純資産 × 100" },
            { label: "負債比率", value: "57.8%", desc: "負債 ÷ 純資産 × 100" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="text-xs font-medium text-gray-500 mb-2">{item.label}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
              <div className="text-[11px] text-gray-400 leading-tight">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 効率性指標 */}
      <div>
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
          <Gauge className="w-5 h-5 text-blue-500" />
          効率性指標
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "総資産回転率", value: "0.28回", desc: "売上高 ÷ 総資産" },
            { label: "売上債権回転期間", value: "45日", desc: "売掛金 ÷ (売上高 ÷ 365)" },
            { label: "仕入債務回転期間", value: "30日", desc: "買掛金 ÷ (仕入高 ÷ 365)" },
            { label: "在庫回転期間", value: "22日", desc: "在庫 ÷ (売上原価 ÷ 365)" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="text-xs font-medium text-gray-500 mb-2">{item.label}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
              <div className="text-[11px] text-gray-400 leading-tight">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 指標推移グラフ */}
      <div>
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          指標推移
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h6 className="text-sm font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">収益性指標の推移</h6>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={profitabilityData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="quarter" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="ROA" fill="#3b82f6" radius={[2, 2, 0, 0]} name="ROA" />
                <Bar dataKey="ROE" fill="#10b981" radius={[2, 2, 0, 0]} name="ROE" />
                <Bar dataKey="operatingMargin" fill="#f59e0b" radius={[2, 2, 0, 0]} name="営業利益率" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded" />ROA</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded" />ROE</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-amber-500 rounded" />営業利益率</div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h6 className="text-sm font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">安全性指標の推移</h6>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={safetyData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="quarter" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="equityRatio" fill="#8b5cf6" radius={[2, 2, 0, 0]} name="自己資本比率" />
                <Bar dataKey="currentRatio" fill="#ec4899" radius={[2, 2, 0, 0]} name="流動比率" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-violet-500 rounded" />自己資本比率</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-pink-500 rounded" />流動比率</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// メインコンポーネント
// ============================================
export function Dashboard() {
  const [activeTab, setActiveTab] = useState("sales")

  // タブ順序: 売上 → 稼働 → 案件 → 経営
  const tabs = [
    { id: "sales", label: "売上分析", icon: TrendingUp },
    { id: "work", label: "稼働分析", icon: Clock },
    { id: "progress", label: "案件進捗", icon: Briefcase },
    { id: "metrics", label: "経営指標", icon: BarChart3 },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ラクレバの管理画面
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            必要な数字がひと目でわかる、直感的なダッシュボードです。
          </p>
        </motion.div>

        {/* ブラウザフレーム */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-3xl transform scale-105 -z-10" />

          <div className="bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-200 overflow-hidden">
            {/* ブラウザヘッダー */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-gray-500 max-w-sm">
                  app.rakureba.jp/{activeTab === "sales" ? "analysis/sales" : activeTab === "work" ? "analysis/productivity" : activeTab === "progress" ? "analysis/progress" : "accounting/metrics"}
                </div>
              </div>
            </div>

            {/* タブナビゲーション */}
            <div className="bg-gray-50 px-6 py-2 border-b border-gray-200">
              <div className="flex gap-1 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-white text-primary shadow-sm border border-gray-200"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* コンテンツ */}
            <div className="p-6 md:p-8 bg-white min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "sales" && <SalesAnalysis />}
                  {activeTab === "work" && <WorkAnalysis />}
                  {activeTab === "progress" && <ProjectProgress />}
                  {activeTab === "metrics" && <MetricsDashboard />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* 注釈 */}
        <p className="text-center text-sm text-gray-400 mt-6">
          ※ 上記はデザインイメージです。実際の画面とは異なる場合があります。
        </p>
      </div>
    </section>
  )
}
