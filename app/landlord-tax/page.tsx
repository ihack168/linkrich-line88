"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LineConsultButton } from "@/components/line-consult-button";

export default function LandlordTaxPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 md:pt-36">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-primary">
            LANDLORD TAX GUIDE
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-5xl">
            房東稅務懶人包
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            房東出租房屋後，租金收入需要依法申報所得稅，
            同時也能透過合法列舉成本、必要費用、
            公益出租人優惠及相關稅務規定進行節稅規劃。
            本頁整理房東最關心的稅務問題與報稅重點。
          </p>
        </section>

        {/* 稅務分類 */}
        <section className="mx-auto mt-16 max-w-6xl px-6">
          <h2 className="text-center text-2xl font-black">
            房東稅務重點整理
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/blog/rental-income-tax"
              className="rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold">
                出租所得稅
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                了解房租收入如何計算所得稅、
                必要費用扣除方式與常見申報規定。
              </p>
            </Link>

            <Link
              href="/blog/landlord-tax-filing"
              className="rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold">
                房東報稅
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                房東報稅流程、申報資料準備、
                常見錯誤與注意事項一次整理。
              </p>
            </Link>

            <Link
              href="/blog/landlord-tax-saving"
              className="rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold">
                節稅攻略
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                善用合法節稅方式、
                必要費用扣除與租稅優惠降低稅務負擔。
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-20 max-w-4xl px-6">
          <h2 className="text-center text-2xl font-black">
            房東稅務常見問題
          </h2>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold">
                房東出租房屋一定要報稅嗎？
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                是，房租收入屬於所得稅法規定的租賃所得，
                應依法申報綜合所得稅。
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold">
                房東可以扣除哪些費用？
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                可依規定扣除必要費用、
                修繕支出、折舊或採用標準費用率計算。
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold">
                如何合法節稅？
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                可透過公益出租人資格、
                社會住宅包租代管方案及合法費用列舉，
                降低實際課稅所得。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-20 mb-24 max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-black">
            不確定出租所得該如何申報？
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
            歡迎加入 LINE 免費諮詢，
            協助了解房東報稅規定、
            出租所得計算方式與節稅規劃方向。
          </p>

          <LineConsultButton className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_14px_36px_rgba(31,78,121,0.28)]">
            加入 LINE 免費諮詢
          </LineConsultButton>
        </section>
      </main>

      <Footer />
    </div>
  );
}