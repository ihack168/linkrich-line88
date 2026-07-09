"use client"

import { LineConsultButton } from "@/components/line-consult-button"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-white/80 px-6 py-12 backdrop-blur">
      {/* 背景光暈 */}
      <div className="absolute left-1/2 top-0 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* 左側品牌 */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-black tracking-tight text-foreground">
            社會住宅包租代管
          </h3>

          <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
            提供社會住宅包租代管、房屋出租管理、
            租客媒合、租屋補助與房東出租相關資訊整理，
            協助房東快速了解出租管理與政府方案方向。
          </p>
        </div>

        {/* 中間導覽 */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="/" className="transition-colors hover:text-primary">
            首頁
          </a>

          <a href="/blog" className="transition-colors hover:text-primary">
            最新文章
          </a>

          <a href="/line" className="transition-colors hover:text-primary">
            聯絡諮詢
          </a>
        </div>

        {/* 右側聯絡 */}
        <div className="text-center md:text-right">
          <p className="text-sm font-semibold text-foreground">
            LINE 免費諮詢
          </p>

          <LineConsultButton className="mt-2 inline-block text-sm font-medium text-primary transition-opacity hover:opacity-70">
            加入官方 LINE →
          </LineConsultButton>

          <p className="mt-3 text-xs leading-6 text-muted-foreground">
            房東出租｜社會住宅｜包租代管
          </p>
        </div>
      </div>

      {/* 免責聲明 */}
      <div className="relative mx-auto mt-10 max-w-6xl rounded-2xl border border-border/60 bg-muted/30 px-5 py-4 text-center">
        <p className="text-xs leading-6 text-muted-foreground">
          免責聲明：本網站部分內容可能由 AI 協助整理，並經人工審閱後發布。
          網站內容僅供一般資訊參考，不構成法律、不動產、租賃、稅務、補助申請或其他專業建議。
          社會住宅包租代管、租屋補助、房東資格、租賃契約、稅務優惠與相關申請規定，
          可能因縣市政府、主管機關、個案條件或政策更新而有所不同。
          實際內容請以內政部、地方政府、住宅主管機關、專業人員或官方公告之最新資訊為準。
        </p>
      </div>

      {/* 底部 */}
      <div className="relative mx-auto mt-6 max-w-6xl border-t border-border/60 pt-6 text-center">
        <p className="text-xs tracking-wide text-muted-foreground">
          © 2026 凌群不動產. All rights reserved.
        </p>
      </div>
    </footer>
  )
}