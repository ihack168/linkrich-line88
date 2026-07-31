import type { Metadata } from "next";

import { HeroSection } from "@/components/hero-section";
import { LatestPostsSection } from "@/components/latest-posts-section";

const SITE_URL = "https://home.line88.tw";
const SITE_NAME = "台灣社會住宅包租代管資訊站";

const PAGE_TITLE =
  "台灣社會住宅包租代管資訊站｜房東出租、公益出租人與租屋補助";

const PAGE_DESCRIPTION =
  "整理台灣社會住宅包租代管、公益出租人、房東出租、租屋補助、租客權益與房屋出租管理資訊。本站為民間資訊網站，非政府官方網站。";

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
    siteName: SITE_NAME,
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
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <div className="pb-6 pt-24 md:pt-32">
        <HeroSection />
      </div>

      <LatestPostsSection />
    </main>
  );
}