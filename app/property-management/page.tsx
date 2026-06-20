"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LineConsultButton } from "@/components/line-consult-button";

export default function PropertyManagementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 md:pt-36">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-primary">
            PROPERTY MANAGEMENT
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-5xl">
            包租代管服務
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            提供專業包租代管服務，協助房東處理招租、租客管理、
            租金收取與房屋維護。同時可評估是否符合公益出租人、
            社會住宅包租代管及相關房東補助資格，讓出租更省心、更穩定。
          </p>
        </section>

        {/* 服務介紹 */}
        <section className="mx-auto mt-16 max-w-6xl px-6">
          <h2 className="text-center text-2xl font-black">
            服務介紹
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">招租與租客篩選</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                協助刊登房源、安排帶看、租客資格審核與租賃媒合，
                提升出租效率並降低空置期。
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">租約與收租管理</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                協助簽約、租金收取、租賃管理與續約安排，
                減少房東日常管理負擔。
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">房屋維護服務</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                協助處理設備報修、房屋維護與租客溝通，
                提供完善的後續管理服務。
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">補助與稅務評估</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                協助了解公益出租人、房東補助、租屋補助、
                房屋修繕補助及房東節稅規劃，爭取更多政府資源。
              </p>
            </div>
          </div>
        </section>

        {/* 收費方式 */}
        <section className="mx-auto mt-20 max-w-5xl px-6">
          <h2 className="text-center text-2xl font-black">
            收費方式
          </h2>

          <div className="mt-10 rounded-3xl border border-border p-8">
            <p className="leading-8 text-muted-foreground">
              收費依房屋類型、地區與委託管理內容而定。
              一般包含招租服務費、代管服務費或包租方案費用。
              實際方案將由專人評估後提供報價，
              協助房東找到最適合的出租管理方式。
            </p>
          </div>
        </section>

        {/* 成功案例 */}
        <section className="mx-auto mt-20 max-w-6xl px-6">
          <h2 className="text-center text-2xl font-black">
            成功案例
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-border p-8">
              <h3 className="font-bold">新北市公寓出租</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                透過包租代管服務，
                空置兩個月的房屋於兩週內完成出租，
                並成功申請公益出租人資格。
              </p>
            </div>

            <div className="rounded-3xl border border-border p-8">
              <h3 className="font-bold">台北市套房管理</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                協助房東處理租客管理與收租作業，
                大幅減少管理時間與租賃糾紛。
              </p>
            </div>

            <div className="rounded-3xl border border-border p-8">
              <h3 className="font-bold">社宅包租代管</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                協助加入社會住宅包租代管方案，
                享有房東補助與相關稅務優惠。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-20 max-w-4xl px-6">
          <h2 className="text-center text-2xl font-black">
            常見問題
          </h2>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold">
                包租代管適合哪些房東？
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                適合沒有時間管理房屋、
                長期持有出租物件或希望降低管理負擔的房東。
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold">
                可以同時申請房東補助嗎？
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                視個案條件而定，
                部分房東可搭配公益出租人、
                社會住宅包租代管及修繕補助方案。
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold">
                包租代管能協助節稅嗎？
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                可協助評估公益出租人資格、
                出租所得稅申報方式與合法節稅規劃方向。
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-bold">
                如何開始委託管理？
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                聯繫專人提供房屋資訊後，
                即可安排評估並規劃最適合的出租管理方案。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-20 mb-24 max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-black">
            想了解包租代管是否適合您的房屋？
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
            歡迎加入 LINE 免費諮詢，
            協助評估出租規劃、
            房東補助資格、
            公益出租人優惠與節稅方案。
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