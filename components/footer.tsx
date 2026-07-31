"use client";

import Link from "next/link";

const siteLinks = [
  { label: "首頁", href: "/" },
  { label: "最新文章", href: "/blog" },
  { label: "隱私權政策", href: "/privacy-policy" },
  { label: "使用條款", href: "/terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="網站頁尾"
      className="border-t border-border/70 bg-[#f7f7f3]"
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <nav
            aria-label="頁尾導覽"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
          >
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            © {currentYear} 凌群不動產
          </p>
        </div>
      </div>
    </footer>
  );
}