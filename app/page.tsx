"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {

  // SEO + AEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [

      // 公司資訊
      {
        "@type": "LocalBusiness",
        "name": "社會住宅包租代管資訊站",
        "url": "https://home.line88.tw",
        "description":
          "提供社會住宅包租代管、房屋出租管理、租客媒合與租屋補助相關諮詢服務，協助房東安心出租。",
        "areaServed": "TW",
        "serviceType": [
          "社會住宅包租代管",
          "房屋出租管理",
          "租客媒合",
          "租屋補助諮詢"
        ]
      },

      // FAQ AEO
      {
        "@type": "FAQPage",
        "mainEntity": [

          {
            "@type": "Question",
            "name": "什麼是社會住宅包租代管？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "社會住宅包租代管是政府推動的住宅政策，由業者協助房東出租房屋、管理租務與租客媒合，提升出租效率與居住品質。"
            }
          },

          {
            "@type": "Question",
            "name": "房東加入包租代管有什麼好處？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "房東可獲得專業出租管理、穩定租客媒合、降低空租風險，並有機會享有政府相關稅務與補助優惠。"
            }
          },

          {
            "@type": "Question",
            "name": "包租代管和一般出租有什麼不同？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "包租代管由專業團隊協助處理出租流程、租客管理與後續服務，相較一般自行出租更省時、省力且風險較低。"
            }
          },

          {
            "@type": "Question",
            "name": "租客可以申請租屋補助嗎？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "符合資格的租客可依政府規定申請租屋補助，實際資格與金額依各地政府公告為準。"
            }
          }

        ]
      }

    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>

        {/* Hero */}
        <div className="pt-24 md:pt-36 pb-10">
          <HeroSection />
        </div>

        {/* 服務區塊 */}
        <ServicesSection />

        {/* AEO / SEO 語意內容 */}
        <section className="mx-auto max-w-5xl px-6 py-16">

          <div className="space-y-8 text-muted-foreground leading-8">

            <div>
              <h2 className="mb-4 text-3xl font-black text-foreground">
                社會住宅包租代管服務
              </h2>

              <p>
                社會住宅包租代管服務協助房東更有效率地管理出租房屋，
                透過專業團隊提供租客媒合、出租管理、
                房屋出租諮詢與後續服務，
                讓房東能安心出租、降低空租風險。
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                房東加入包租代管的優勢
              </h2>

              <p>
                相較自行出租，
                包租代管服務能協助處理繁瑣出租流程，
                包含租客篩選、租約管理、租金收付、
                房客聯繫與後續協調，
                提升整體出租效率。
              </p>

              <p className="mt-4">
                對於首次出租房屋或沒有時間管理房產的房東來說，
                社會住宅包租代管能有效減少管理壓力，
                讓房屋出租更加穩定與安心。
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                包租代管常見服務內容
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>房屋出租評估與諮詢</li>
                <li>租客媒合與資格協助</li>
                <li>租約管理與出租流程說明</li>
                <li>房屋出租管理與協調服務</li>
                <li>租屋補助與政策資訊協助</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                社會住宅包租代管常見問題
              </h2>

              <div className="space-y-5">

                <div>
                  <h3 className="font-bold text-foreground">
                    什麼是社會住宅包租代管？
                  </h3>

                  <p>
                    社會住宅包租代管是由專業單位協助房東出租房屋、
                    管理租務與租客媒合的住宅服務模式。
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground">
                    包租代管適合哪些房東？
                  </h3>

                  <p>
                    適合沒有時間管理出租、
                    想降低空租風險、
                    希望穩定出租的房東。
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground">
                    租客可以申請租屋補助嗎？
                  </h3>

                  <p>
                    若符合政府規定資格，
                    租客可申請相關租屋補助方案。
                  </p>
                </div>

              </div>
            </div>

          </div>

        </section>

        {/* 聯絡我們 */}
        <div id="contact">
          <ContactSection />
        </div>

      </main>

      <Footer />
    </div>
  );
}