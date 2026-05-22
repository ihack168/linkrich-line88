"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwFpZDhMveHhdOYdDkh02JpWk28jUCBqikyM-Urg_6Uw2jTH7d8ZluKxinKTWh5_20N/exec";
const LINE_ADD_URL = "https://line.me/R/ti/p/@gwp4644s";

const VENDOR_ID = "linkrich";
const VENDOR_NAME = "社會住宅包租代管資訊站";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneLast3, setPhoneLast3] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitLineConsult = async () => {
    const cleanLastName = lastName.trim();
    const cleanPhoneLast3 = phoneLast3.trim();

    if (!role) {
      alert("請選擇你是房東還是房客");
      return;
    }

    if (role === "tenant") {
      alert("很抱歉我們不接受房客咨詢");
      return;
    }

    if (!cleanLastName) {
      alert("請輸入貴姓");
      return;
    }

    if (!/^\d{3}$/.test(cleanPhoneLast3)) {
      alert("請輸入手機末 3 碼");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "lineConsult",
          vendorId: VENDOR_ID,
          vendorName: VENDOR_NAME,
          role,
          lastName: cleanLastName,
          phoneLast3: cleanPhoneLast3,
          sourcePage: window.location.href
        })
      });

      const result = await res.json();

      if (!result.success) {
        alert(result.message || "送出失敗，請稍後再試");
        return;
      }

      setShowModal(false);
      setRole("");
      setLastName("");
      setPhoneLast3("");

      window.open(LINE_ADD_URL, "_blank", "noopener,noreferrer");
    } catch (error) {
      alert("送出失敗，請稍後再試");
    } finally {
      setLoading(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "社會住宅包租代管資訊站",
        url: "https://home.line88.tw",
        description:
          "提供社會住宅包租代管、房東出租、租客媒合、租屋補助與房屋出租管理相關資訊。"
      },
      {
        "@type": "LocalBusiness",
        name: "社會住宅包租代管資訊站",
        url: "https://home.line88.tw",
        description:
          "提供社會住宅包租代管、房屋出租管理、租客媒合與租屋補助相關諮詢服務，協助房東安心出租。",
        areaServed: "TW",
        serviceType: [
          "社會住宅包租代管",
          "房屋出租管理",
          "租客媒合",
          "租屋補助諮詢"
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "什麼是社會住宅包租代管？",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "社會住宅包租代管是由專業單位協助房東出租房屋、管理租務與租客媒合的住宅服務模式。"
            }
          },
          {
            "@type": "Question",
            name: "房東加入包租代管有什麼好處？",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "房東可透過包租代管降低自行管理出租的時間成本，並透過專業協助提升出租效率與租務管理穩定度。"
            }
          },
          {
            "@type": "Question",
            name: "包租代管適合哪些房東？",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "適合沒有時間管理出租、想降低空租風險、希望穩定出租，或想了解政府社會住宅包租代管方案的房東。"
            }
          },
          {
            "@type": "Question",
            name: "租客可以申請租屋補助嗎？",
            acceptedAnswer: {
              "@type": "Answer",
              text:
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
        <div className="pt-24 md:pt-36 pb-8">
          <HeroSection />
        </div>

        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-primary">
            SOCIAL HOUSING RENTAL MANAGEMENT
          </p>

          <h2 className="mt-3 text-2xl font-black text-foreground md:text-4xl">
            社會住宅包租代管資訊站
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            本站整理社會住宅包租代管、房東出租、租客媒合、
            房屋出租管理與租屋補助相關資訊。
            若你想了解自己的房屋是否適合加入包租代管，
            可直接透過 LINE 免費諮詢。
          </p>

          <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm">
              房東安心出租
            </div>

            <div className="rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm">
              包租代管諮詢
            </div>

            <div className="rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm">
              租屋補助資訊
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_14px_36px_rgba(31,78,121,0.28)] transition-all hover:-translate-y-0.5"
          >
            加入 LINE 免費諮詢
          </button>
        </section>
      </main>

      <Footer />

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black text-foreground">
              LINE 免費諮詢
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              請先選擇身份，並留下貴姓與手機末 3 碼，送出後會自動開啟
              LINE 加好友。
            </p>

            <div className="mt-5">
              <label className="text-sm font-semibold text-foreground">
                你是房東還是房客？
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-primary"
              >
                <option value="">請選擇</option>
                <option value="landlord">房東</option>
                <option value="tenant">房客</option>
              </select>

              {role === "tenant" && (
                <p className="mt-2 text-sm font-semibold text-red-600">
                  很抱歉我們不接受房客咨詢
                </p>
              )}
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-foreground">
                貴姓
              </label>

              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="例如：王"
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm font-semibold text-foreground">
                手機末 3 碼
              </label>

              <input
                value={phoneLast3}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 3);
                  setPhoneLast3(value);
                }}
                placeholder="例如：168"
                inputMode="numeric"
                maxLength={3}
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                disabled={loading}
                className="flex-1 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
              >
                取消
              </button>

              <button
                type="button"
                onClick={handleSubmitLineConsult}
                disabled={loading || role === "tenant"}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold ${
                  loading || role === "tenant"
                    ? "cursor-not-allowed bg-gray-300 text-gray-500"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {loading ? "送出中..." : "送出並加 LINE"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}