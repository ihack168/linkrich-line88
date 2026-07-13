"use client";

import { useEffect, useState } from "react";

type ShareBarProps = {
  variant?: "light" | "dark";
};

export function ShareBar({ variant = "light" }: ShareBarProps) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const isDark = variant === "dark";
  const encodedUrl = encodeURIComponent(url);

  const handleCopy = async () => {
    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      const textArea = document.createElement("textarea");

      textArea.value = url;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <section aria-labelledby="share-article-title">
      <div className="flex flex-wrap items-center gap-3">
        <h2
          id="share-article-title"
          className={`mr-1 text-sm font-bold ${
            isDark ? "text-white" : "text-foreground"
          }`}
        >
          分享文章
        </h2>

        <a
          href={
            url
              ? `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
              : undefined
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="分享到 Facebook"
          aria-disabled={!url}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            !url ? "pointer-events-none opacity-50" : ""
          } ${
            isDark
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-border text-foreground hover:border-primary hover:text-primary"
          }`}
        >
          Facebook
        </a>

        <a
          href={
            url
              ? `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`
              : undefined
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="分享到 LINE"
          aria-disabled={!url}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            !url ? "pointer-events-none opacity-50" : ""
          } ${
            isDark
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-border text-foreground hover:border-primary hover:text-primary"
          }`}
        >
          LINE
        </a>

        <button
          type="button"
          onClick={handleCopy}
          disabled={!url}
          aria-live="polite"
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
            isDark
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-border text-foreground hover:border-primary hover:text-primary"
          }`}
        >
          {copied ? "已複製連結" : "複製連結"}
        </button>
      </div>
    </section>
  );
}
