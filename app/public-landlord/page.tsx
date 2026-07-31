import Link from "next/link"

const footerLinks = [
  { label: "首頁", href: "/" },
  { label: "最新文章", href: "/blog" },
  { label: "隱私權政策", href: "/privacy-policy" },
  { label: "使用條款", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground"
          >
            台灣室內設計資訊網
          </Link>

          <p className="mt-1 text-sm text-muted-foreground">
            網站資訊
          </p>
        </div>

        <nav
          aria-label="頁尾導覽"
          className="flex flex-wrap gap-5 text-sm text-muted-foreground"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}