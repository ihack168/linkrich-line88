"use client";

import Link from "next/link";

const siteLinks = [
  {
    label: "首頁",
    href: "/",
  },
  {
    label: "最新文章",
    href: "/blog",
  },
  {
    label: "隱私權政策",
    href: "/privacy-policy",
  },
  {
    label: "使用條款",
    href: "/terms",
  },
];

export function Footer() {
  return (
    <footer
      aria-label="網站頁尾"
      className="border-t border-border/70 bg-[#f7f7f3]"
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav aria-labelledby="footer-site-title">
          <h2
            id="footer-site-title"
            className="text-base font-bold text-foreground"
          >
            網站資訊
          </h2>

          <ul className="mt-4 space-y-3">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span
                    aria-hidden="true"
                    className="text-primary/60 transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>

                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}