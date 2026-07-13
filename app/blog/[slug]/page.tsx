import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { createImageUrlBuilder } from "@sanity/image-url";

import { client } from "@/lib/sanity";
import { sanitizePostHtml } from "@/lib/content-cleanup";
import { Footer } from "@/components/footer";
import { ShareBar } from "@/components/share-bar";

export const revalidate = 300;

const SITE_URL = "https://home.line88.tw";
const SITE_NAME = "台灣社會住宅包租代管資訊站";
const ORGANIZATION_NAME = "凌群不動產";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const DEFAULT_DESCRIPTION =
  "提供社會住宅包租代管、房東出租、公益出租人、租屋補助、租客權益與房屋出租管理相關資訊。";

const imageBuilder = createImageUrlBuilder(client);

interface Post {
  title: string;
  description?: string;
  publishedAt?: string;
  updatedAt?: string;
  body?: any[];
  htmlContent?: string;
  authorName?: string;
  tags?: string[];
}

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  description?: string;
  publishedAt?: string;
}

function urlFor(source: any) {
  if (!source) return null;
  return imageBuilder.image(source);
}

function optimizeSanityImageUrl(url?: string | null) {
  if (!url) return null;
  if (!url.includes("cdn.sanity.io/images")) return url;
  if (url.includes("auto=format")) return url;

  return `${url}${url.includes("?") ? "&" : "?"}auto=format`;
}

function extractFirstImage(html?: string) {
  if (!html) return null;

  const match = html.match(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/i);

  if (!match?.[1]) return null;

  return {
    url: optimizeSanityImageUrl(match[1]),
    tag: match[0],
  };
}

function removeFirstImage(html: string, imageTag?: string) {
  if (!imageTag) return html;

  return html.replace(imageTag, "").replace(
    /<p>\s*<\/p>/gi,
    "",
  );
}

function extractPlainText(html?: string) {
  if (!html) return "";

  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function createDescription(post: Post) {
  const description = String(post.description || "").trim();

  if (description && description !== "點擊閱讀詳情...") {
    return description;
  }

  const plainText = extractPlainText(post.htmlContent);

  if (plainText) {
    return `${plainText.slice(0, 150)}${plainText.length > 150 ? "…" : ""}`;
  }

  return DEFAULT_DESCRIPTION;
}

function formatDate(date?: string) {
  if (!date) return null;

  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Taipei",
  }).format(new Date(date));
}

function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;

      const imageUrl = urlFor(value)?.auto("format").url();

      if (!imageUrl) return null;

      return (
        <figure className="my-10">
          <img
            src={imageUrl}
            alt={value.alt || "文章內容圖片"}
            className="mx-auto h-auto max-w-full"
            loading="lazy"
          />

          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      description,
      htmlContent,
      publishedAt,
      "updatedAt": _updatedAt
    }`,
    { slug },
    { next: { revalidate } },
  );

  if (!post) {
    return {};
  }

  const description = createDescription(post);
  const articleUrl = `${SITE_URL}/blog/${slug}`;
  const firstImage = extractFirstImage(post.htmlContent)?.url;

  return {
    title: post.title,
    description,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: post.title,
      description,
      url: articleUrl,
      siteName: SITE_NAME,
      locale: "zh_TW",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [ORGANIZATION_NAME],
      images: firstImage
        ? [
            {
              url: firstImage,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: firstImage ? "summary_large_image" : "summary",
      title: post.title,
      description,
      images: firstImage ? [firstImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      description,
      publishedAt,
      "updatedAt": _updatedAt,
      body,
      htmlContent,
      "authorName": author->name,
      "tags": coalesce(categories[]->title, tags)
    }`,
    { slug },
    { next: { revalidate } },
  );

  if (!post) {
    notFound();
  }

  const firstImage = extractFirstImage(post.htmlContent);
  const sanitizedHtml = post.htmlContent
    ? sanitizePostHtml(post.htmlContent, post.title, false)
    : null;
  const cleanedHtml =
    sanitizedHtml && firstImage
      ? removeFirstImage(sanitizedHtml, firstImage.tag)
      : sanitizedHtml;

  const description = createDescription(post);
  const articleUrl = `${SITE_URL}/blog/${slug}`;
  const publishedDate = formatDate(post.publishedAt);
  const updatedDate = formatDate(post.updatedAt);
  const authorName = post.authorName || ORGANIZATION_NAME;
  const tags = Array.isArray(post.tags)
    ? post.tags.map((tag) => String(tag).trim()).filter(Boolean)
    : [];

  const relatedPosts = await client.fetch<RelatedPost[]>(
    `*[
      _type == "post" &&
      slug.current != $slug &&
      (
        count($tags) == 0 ||
        count(coalesce(categories[]->title, tags)[@ in $tags]) > 0
      )
    ]
    | order(coalesce(publishedAt, _createdAt) desc)[0...4] {
      "id": _id,
      title,
      "slug": slug.current,
      description,
      "publishedAt": coalesce(publishedAt, _createdAt)
    }`,
    { slug, tags },
    { next: { revalidate } },
  );

  const breadcrumbJsonLd = {
    "@type": "BreadcrumbList",
    "@id": `${articleUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首頁",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "文章",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  const articleJsonLd = {
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    url: articleUrl,
    headline: post.title,
    description,
    inLanguage: "zh-Hant",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@id": `${articleUrl}#webpage`,
    },
    ...(firstImage?.url ? { image: [firstImage.url] } : {}),
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    ...(tags.length > 0 ? { keywords: tags.join(", ") } : {}),
  };

  const webPageJsonLd = {
    "@type": "WebPage",
    "@id": `${articleUrl}#webpage`,
    url: articleUrl,
    name: post.title,
    description,
    inLanguage: "zh-Hant",
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    breadcrumb: {
      "@id": `${articleUrl}#breadcrumb`,
    },
    primaryImageOfPage: firstImage?.url
      ? {
          "@type": "ImageObject",
          url: firstImage.url,
        }
      : undefined,
    mainEntity: {
      "@id": `${articleUrl}#article`,
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbJsonLd, webPageJsonLd, articleJsonLd],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <main className="px-6 pb-20 pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="麵包屑" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex min-w-0 items-center gap-2">
              <li className="shrink-0">
                <Link href="/" className="transition-colors hover:text-primary">
                  首頁
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="shrink-0">
                <Link
                  href="/blog"
                  className="transition-colors hover:text-primary"
                >
                  文章
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="truncate" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <header>
            {tags.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="text-sm font-semibold text-primary transition-opacity hover:opacity-70"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            <h1 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
              <span>{authorName}</span>

              {post.publishedAt && publishedDate && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.publishedAt}>{publishedDate}</time>
                </>
              )}

              {post.updatedAt &&
                updatedDate &&
                updatedDate !== publishedDate && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>
                      更新於{" "}
                      <time dateTime={post.updatedAt}>{updatedDate}</time>
                    </span>
                  </>
                )}
            </div>
          </header>

          {firstImage?.url && (
            <figure className="mt-10">
              <img
                src={firstImage.url}
                alt={post.title}
                className="h-auto w-full"
                fetchPriority="high"
              />
            </figure>
          )}

          <article className="prose prose-lg mt-10 max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-2xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-xl prose-p:leading-8 prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:leading-8 prose-li:text-muted-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-img:mx-auto prose-img:h-auto prose-img:max-w-full prose-table:block prose-table:overflow-x-auto prose-th:border prose-th:border-border prose-th:p-3 prose-td:border prose-td:border-border prose-td:p-3">
            {cleanedHtml ? (
              <div
                className="[&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-foreground [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-black [&_h3]:text-foreground [&_p]:mb-5 [&_p]:leading-8 [&_p]:text-muted-foreground [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_strong]:text-foreground [&_li]:mb-2 [&_li]:leading-8 [&_li]:text-muted-foreground [&_img]:mx-auto [&_img]:my-8 [&_img]:block [&_img]:h-auto [&_img]:max-w-full [&_table]:my-8 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:p-3 [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:p-3"
                dangerouslySetInnerHTML={{ __html: cleanedHtml }}
              />
            ) : (
              post.body && (
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              )
            )}
          </article>

          <div className="mt-12 border-t border-border/70 pt-8">
            <ShareBar />
          </div>

          <aside className="mt-8 text-sm leading-7 text-muted-foreground">
            本文由凌群不動產經營的民間資訊網站整理，非政府官方公告。
            社會住宅包租代管、租屋補助與相關政策資格，請以中央及地方政府最新公告為準。
          </aside>

          {relatedPosts.length > 0 && (
            <section
              aria-labelledby="related-posts-title"
              className="mt-14 border-t border-border/70 pt-10"
            >
              <h2 id="related-posts-title" className="text-2xl font-black">
                延伸閱讀
              </h2>

              <div className="mt-6 divide-y divide-border/70">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="py-5 first:pt-0">
                    <h3 className="text-lg font-bold leading-snug">
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="transition-colors hover:text-primary"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>

                    {relatedPost.description && (
                      <p className="mt-2 line-clamp-2 text-sm leading-7 text-muted-foreground">
                        {relatedPost.description}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12">
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary transition-opacity hover:opacity-70"
            >
              ← 返回文章列表
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await client.fetch<Array<{ slug?: string }>>(
    `*[_type == "post" && defined(slug.current)]{
      "slug": slug.current
    }`,
    {},
    { next: { revalidate } },
  );

  return posts
    .filter((post) => Boolean(post.slug))
    .map((post) => ({ slug: post.slug as string }));
}
