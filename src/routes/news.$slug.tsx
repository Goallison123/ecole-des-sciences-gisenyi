import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { formatDate, getArticle } from "@/lib/news";
import { school } from "@/lib/site";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "News"} · ${school.name}` }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();

  return (
    <main className="px-5 pb-20 pt-6 md:px-8 md:pb-28">
      <article className="mx-auto max-w-3xl">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          All news
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-eyebrow text-accent">
          {article.category} · {formatDate(article.date)}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          {article.title}
        </h1>
        <img
          src={article.image}
          alt=""
          className="mt-8 w-full rounded-xl object-cover shadow-soft"
        />
        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/85">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
