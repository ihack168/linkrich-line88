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
  const [modalStep, setModalStep] = useState<"role" | "form">("role");
  const [role, setRole] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneLast3, setPhoneLast3] = useState("");
  const [tenantBlocked, setTenantBlocked] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetModal = () => {
    setShowModal(false);
    setModalStep("role");
    setRole("");
    setLastName("");
    setPhoneLast3("");
    setTenantBlocked(false);
    setLoading(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setModalStep("role");
    setRole("");
    setLastName("");
    setPhoneLast3("");
    setTenantBlocked(false);
  };

  const handleSelectRole = (selectedRole: string) => {
    setRole(selectedRole);

    if (selectedRole === "tenant") {
      setTenantBlocked(true);
      return;
    }

    setTenantBlocked(false);
    setModalStep("form");
  };

  const handleSubmitLineConsult = async () => {
    const cleanLastName = lastName.trim();
    const cleanPhoneLast3 = phoneLast3.trim();

    if (role !== "landlord") {
      alert("請先選擇房東");
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

      resetModal();

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
            onClick={handleOpenModal}
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
            {modalStep === "role" && (
              <>
                <h3 className="text-center text-2xl font-black text-foreground">
                  你是房東還是房客？
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <label
                    className={`flex cursor-pointer items-center justify-center gap-2 rounded-2xl border px-4 py-5 text-lg font-black transition-all ${
                      role === "landlord"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-foreground"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="landlord"
                      checked={role === "landlord"}
                      onChange={() => handleSelectRole("landlord")}
                      className="h-5 w-5"
                    />
                    房東
                  </label>

                  <label
                    className={`flex cursor-pointer items-center justify-center gap-2 rounded-2xl border px-4 py-5 text-lg font-black transition-all ${
                      role === "tenant"
                        ? "border-red-500 bg-red-50 text-red-600"
                        : "border-border text-foreground"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="tenant"
                      checked={role === "tenant"}
                      onChange={() => handleSelectRole("tenant")}
                      className="h-5 w-5"
                    />
                    房客
                  </label>
                </div>

                {tenantBlocked && (
                  <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-600">
                    很抱歉我們不接受房客咨詢
                  </p>
                )}

                <button
                  type="button"
                  onClick={resetModal}
                  className="mt-6 w-full rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
                >
                  取消
                </button>
              </>
            )}

            {modalStep === "form" && (
              <>
                <h3 className="text-xl font-black text-foreground">
                  LINE 免費諮詢
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  請留下貴姓與手機末 3 碼，送出後會自動開啟 LINE 加好友。
                </p>

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
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3);
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
                    onClick={() => {
                      setModalStep("role");
                      setRole("");
                      setLastName("");
                      setPhoneLast3("");
                      setTenantBlocked(false);
                    }}
                    disabled={loading}
                    className="flex-1 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    上一步
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmitLineConsult}
                    disabled={loading}
                    className="flex-1 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    {loading ? "送出中..." : "送出並加 LINE"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}