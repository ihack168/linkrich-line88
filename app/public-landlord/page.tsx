"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LineConsultButton } from "@/components/line-consult-button";

export default function PublicLandlordPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 md:pt-36">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-primary">
            PUBLIC LANDLORD
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-5xl">
            公益出租人完整指南
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            公益出租人是許多房東關心的重要制度。
            符合資格的房東除了能協助弱勢家庭租屋，
            還可能享有房屋稅、地價稅及所得稅等相關優惠。
            本頁整理公益出租人資格、申請方式、稅務優惠與常見問題。
          </p>
        </section>

        {/* 主題分類 */}
        <section className="mx-auto mt-16 max-w-6xl px-6">
          <h2 className="text-center text-2xl font-black">
            公益出租人重點資訊
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/public-landlord-eligibility"
              className="rounded-3xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold">
                公益出租人資格
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                哪些房東符合公益出租人資格？
                申請前必須了解的條件整理。
              </p>
            </Link>

            <Link
              href="/blog/public-landlord-application"
              className="rounded-3xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold">
                申請流程
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                公益出租人申請流程、
                準備文件與申請方式說明。
              </p>
            </Link>

            <Link
              href="/blog/public-landlord-tax-benefits"
              className="rounded-3xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold">
                稅務優惠
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                房屋稅、地價稅與所得稅優惠整理，
                了解公益出租人的節稅優勢。
              </p>
            </Link>

            <Link
              href="/blog/public-landlord-faq"
              className="rounded-3xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold">
                常見問題
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                公益出租人常見疑問與房東最常詢問的問題整理。
              </p>
            </Link>
          </div>
        </section>

        {/* 優惠重點 */}
        <section className="mx-auto mt-20 max-w-5xl px-6">
          <h2 className="text-center text-2xl font-black">
            公益出租人有哪些好處？
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold">
                房屋稅優惠
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                符合資格的公益出租人，
                房屋稅可能適用優惠稅率。
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold">
                地價稅優惠
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                部分情況下可享有地價稅相關優惠措施。
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold">
                所得稅優惠
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                出租所得可依相關規定享有優惠與減免。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-20 max-w-4xl px-6">
          <h2 className="text-center text-2xl font-black">
            公益出租人常見問題
          </h2>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold">
                什麼是公益出租人？
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                公益出租人是將住宅出租給符合資格租客，
                並符合政府規定條件的房東身分。
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold">
                如何取得公益出租人資格？
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                需符合相關規定並完成申請程序，
                實際資格依政府公告為準。
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold">
                公益出租人一定要加入包租代管嗎？
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                不一定，但透過專業包租代管協助，
                通常能更有效率完成相關流程與租務管理。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-20 mb-24 max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-black">
            想了解自己是否符合公益出租人資格？
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
            歡迎加入 LINE 免費諮詢，
            協助了解房屋是否適合申請公益出租人、
            相關補助與包租代管方案。
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