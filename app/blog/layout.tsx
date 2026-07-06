import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '最新文章',
  description: '社會住宅包租代管相關文章、房東出租管理、租屋補助與包租代管知識整理。',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}