import type { Metadata } from "next";

import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { LineConsultButton } from "@/components/line-consult-button";
import { LatestPostsSection } from "@/components/latest-posts-section";

const SITE_URL = "https://home.line88.tw";

const PAGE_TITLE =
  "台灣社會住宅包租代管資訊站｜房東出租、租客媒合與租屋補助";

const PAGE_DESCRIPTION =
  "提供社會住宅包租代管、房東出租、租客媒合、租屋補助與房屋出租管理相關資訊，協助房東了解包租代管方案與出租流程。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: SITE_URL,
    siteName: "台灣社會住宅包租代管資訊站",
    locale: "zh_TW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "台灣社會住宅包租代管資訊站",
    alternateName: "社會住宅包租代管資訊站",
    url: SITE_URL,
    description: PAGE_DESCRIPTION,
    areaServed: {
      "@type": "Country",
      name: "Taiwan",
    },
    knowsAbout: [
      "社會住宅包租代管",
      "房東出租",
      "房屋出租管理",
      "租客媒合",
      "租屋補助",
      "住宅租賃",
      "租務管理",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "台灣社會住宅包租代管資訊站",
    alternateName: "社會住宅包租代管資訊站",
    description: PAGE_DESCRIPTION,
    inLanguage: "zh-Hant",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    inLanguage: "zh-Hant",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    name: "社會住宅包租代管資訊與諮詢",
    serviceType: "社會住宅包租代管與房屋出租管理資訊",
    description:
      "提供社會住宅包租代管、房東出租、租客媒合、房屋出租管理與租屋補助相關資訊及諮詢。",
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Taiwan",
    },
    audience: [
      {
        "@type": "Audience",
        audienceType: "有房屋出租需求的房東",
      },
      {
        "@type": "Audience",
        audienceType: "尋找租屋與租屋補助資訊的租客",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "什麼是社會住宅包租代管？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "社會住宅包租代管是由專業單位協助房東出租房屋、管理租務與進行租客媒合的住宅服務模式。",
        },
      },
      {
        "@type": "Question",
        name: "房東加入包租代管有什麼好處？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "房東可透過包租代管降低自行處理出租、帶看、收租及租務管理的時間成本，並透過專業協助提升出租效率與管理穩定度。",
        },
      },
      {
        "@type": "Question",
        name: "包租代管適合哪些房東？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "適合沒有時間自行管理出租、希望降低空租風險、想提升租務管理穩定度，或想了解政府社會住宅包租代管方案的房東。",
        },
      },
      {
        "@type": "Question",
        name: "租客可以申請租屋補助嗎？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "符合資格的租客可依政府相關規定申請租屋補助，實際申請資格、補助金額與流程應以中央及地方政府最新公告為準。",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main>
        <div className="pb-8 pt-24 md:pt-36">
          <HeroSection />
        </div>

        <LatestPostsSection />

        <section
          aria-labelledby="social-housing-introduction"
          className="mx-auto max-w-4xl px-6 py-16 text-center"
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-primary">
            SOCIAL HOUSING RENTAL MANAGEMENT
          </p>

          <h2
            id="social-housing-introduction"
            className="mt-3 text-2xl font-black text-foreground md:text-4xl"
          >
            社會住宅包租代管資訊站
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            本站整理社會住宅包租代管、房東出租、租客媒合、
            房屋出租管理與租屋補助相關資訊。若你想了解自己的房屋
            是否適合加入包租代管，可直接透過 LINE 免費諮詢。
          </p>

          <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <article className="rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm">
              <h3 className="font-bold text-foreground">房東安心出租</h3>

              <p className="mt-2 leading-6">
                協助了解房屋出租、租務管理及包租代管相關流程。
              </p>
            </article>

            <article className="rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm">
              <h3 className="font-bold text-foreground">包租代管諮詢</h3>

              <p className="mt-2 leading-6">
                整理社會住宅包租代管方案、申請條件與常見問題。
              </p>
            </article>

            <article className="rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm">
              <h3 className="font-bold text-foreground">租屋補助資訊</h3>

              <p className="mt-2 leading-6">
                提供租客申請租屋補助及相關住宅政策資訊。
              </p>
            </article>
          </div>

          <LineConsultButton className="mt-8 inline-flex rounded-full bg-[#06C755] px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_14px_36px_rgba(31,78,121,0.28)] transition-all hover:-translate-y-0.5">
            加入 LINE 免費諮詢
          </LineConsultButton>
        </section>

        <section
          aria-labelledby="home-faq-title"
          className="mx-auto max-w-4xl px-6 pb-20"
        >
          <div className="rounded-3xl border border-border/70 bg-white/80 p-6 shadow-sm md:p-10">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-[0.2em] text-primary">
                FREQUENTLY ASKED QUESTIONS
              </p>

              <h2
                id="home-faq-title"
                className="mt-3 text-2xl font-black text-foreground md:text-4xl"
              >
                社會住宅包租代管常見問題
              </h2>
            </div>

            <div className="mt-8 space-y-5">
              <article>
                <h3 className="text-lg font-black text-foreground">
                  什麼是社會住宅包租代管？
                </h3>

                <p className="mt-2 leading-7 text-muted-foreground">
                  社會住宅包租代管是由專業單位協助房東出租房屋、
                  管理租務與進行租客媒合的住宅服務模式。
                </p>
              </article>

              <article>
                <h3 className="text-lg font-black text-foreground">
                  房東加入包租代管有什麼好處？
                </h3>

                <p className="mt-2 leading-7 text-muted-foreground">
                  房東可降低自行處理出租、帶看、收租及租務管理的時間成本，
                  並透過專業協助提升出租效率與管理穩定度。
                </p>
              </article>

              <article>
                <h3 className="text-lg font-black text-foreground">
                  包租代管適合哪些房東？
                </h3>

                <p className="mt-2 leading-7 text-muted-foreground">
                  適合沒有時間自行管理出租、希望降低空租風險、
                  想提升租務管理穩定度，或想了解政府包租代管方案的房東。
                </p>
              </article>

              <article>
                <h3 className="text-lg font-black text-foreground">
                  租客可以申請租屋補助嗎？
                </h3>

                <p className="mt-2 leading-7 text-muted-foreground">
                  符合資格的租客可依政府規定申請租屋補助，
                  實際資格、金額與流程應以中央及地方政府最新公告為準。
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}