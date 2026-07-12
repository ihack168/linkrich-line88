import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '最新文章',
  description: '社會住宅包租代管相關文章、房東出租管理、租屋補助與包租代管知識整理。',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: '最新文章｜台灣社會住宅包租代管資訊站',
    description: '社會住宅包租代管相關文章、房東出租管理、租屋補助與包租代管知識整理。',
    url: 'https://home.line88.tw/blog',
    siteName: '台灣社會住宅包租代管資訊站',
    locale: 'zh_TW',
    type: 'website',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: '社會住宅包租代管最新文章',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '最新文章｜台灣社會住宅包租代管資訊站',
    description: '社會住宅包租代管相關文章、房東出租管理、租屋補助與包租代管知識整理。',
    images: ['/images/og-home.jpg'],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}