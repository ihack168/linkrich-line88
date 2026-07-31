"use client";

import Link from "next/link";

import { LineConsultButton } from "@/components/line-consult-button";

const topicLinks = [
  {
    label: "社會住宅包租代管",
    href: "/property-management",
  },
  {
    label: "房東租屋補助資訊",
    href: "/landlord-subsidies",
  },
  {
    label: "公益出租人資格與優惠",
    href: "/public-landlord",
  },
  {
    label: "房東出租節稅資訊",
    href: "/landlord-tax",
  },
];

const siteLinks = [
  {
    label: "首頁",
    href: "/",
  },
  {
    label: "最新文章",
    href: "/blog",
  },
  {
    label: "隱私權政策",
    href: "/privacy-policy",
  },
  {
    label: "使用條款",
    href: "/terms",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="網站頁尾"
      className="border-t border-border/70 bg-[#f7f7f3]"
    >
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr_0.9fr] lg:gap-14">
          {/* 網站與品牌資訊 */}
          <section aria-labelledby="footer-about-title">
            <Link
              href="/"
              aria-label="返回台灣社會住宅包租代管資訊站首頁"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden sm:h-[72px] sm:w-[72px]">
                <img
                  src="/images/logo.png"
                  alt="台灣社會住宅包租代管資訊站 Logo"
                  width={72}
                  height={72}
                  className="h-full w-full object-contain"
                />
              </span>

              <span
                id="footer-about-title"
                className="max-w-[230px] text-lg font-black leading-snug tracking-tight text-foreground sm:max-w-none sm:text-xl"
              >
                台灣社會住宅
                <span className="block sm:inline">包租代管資訊站</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xl text-sm font-bold leading-7 text-foreground">
              提供台灣社會住宅包租代管、公益出租人、房東出租、
              租屋補助及住宅租賃管理相關資訊。
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
              本站由凌群不動產建立並經營，協助房東與租客快速理解相關制度、
              申請條件、租賃流程及注意事項。
            </p>

            <div className="mt-6 rounded-2xl border border-primary/15 bg-white p-4 shadow-sm">
              <p className="text-sm font-black text-foreground">
                有房屋出租或包租代管需求？
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                填寫基本需求，取得適合您的出租管理建議。
              </p>

              <LineConsultButton className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-[#06C755] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90">
                免費諮詢包租代管
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </LineConsultButton>
            </div>
          </section>

          {/* 主題導覽 */}
          <nav aria-labelledby="footer-topics-title">
            <h2
              id="footer-topics-title"
              className="text-base font-black text-foreground"
            >
              房東與租屋資訊
            </h2>

            <ul className="mt-5 space-y-3">
              {topicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-start gap-2 text-sm font-medium leading-6 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[2px] text-primary/60 transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>

                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 網站資訊 */}
          <nav aria-labelledby="footer-site-title">
            <h2
              id="footer-site-title"
              className="text-base font-black text-foreground"
            >
              網站資訊
            </h2>

            <ul className="mt-5 space-y-3">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-start gap-2 text-sm font-medium leading-6 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[2px] text-primary/60 transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>

                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

          </nav>
        </div>

        {/* 政策提醒與版權 */}
        <div className="mt-10 border-t border-border/70 pt-6 md:mt-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <p className="text-xs font-bold leading-6 text-foreground">
                政策與資格說明
              </p>

              <p className="mt-1 text-xs leading-6 text-muted-foreground">
                社會住宅包租代管、公益出租人、租金補貼、稅賦優惠及相關申請資格，
                可能因年度、地區及主管機關規定而調整，請以中央與地方政府最新公告為準。
              </p>
            </div>

            <p className="shrink-0 text-xs leading-6 text-muted-foreground">
              © {currentYear} 凌群不動產
              <span className="mx-1.5" aria-hidden="true">
                ·
              </span>
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}