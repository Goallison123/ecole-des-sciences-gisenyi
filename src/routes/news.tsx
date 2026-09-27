import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageHero } from "@/components/layout/page-hero";
import { articles, formatDate } from "@/lib/news";
import { school } from "@/lib/site";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [{ title: `News · ${school.name}` }],
  }),
});

function NewsPage() {
  const [featured, ...rest] = articles;

  return (
    <main>
      <PageHero
        eyebrow="News"
        title="Life and work of the school"
        description="Results, research, visits, and the ordinary news of a campus that is always in motion."
      />

      {featured ? (
        <section className="px-5 pb-12 md:px-8">
          <Link
            to="/news/$slug"
            params={{ slug: featured.slug }}
            className="mx-auto grid max-w-6xl overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-soft lg:grid-cols-2"
          >
            <img
              src={featured.image}
              alt=""
              className="h-64 w-full object-cover lg:h-full"
            />
            <div className="flex flex-col justify-center px-6 py-8 md:px-10">
              <Eyebrow>{featured.category}</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm text-muted">{formatDate(featured.date)}</p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {featured.excerpt}
              </p>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          {rest.map((article) => (
            <li key={article.slug}>
              <Link
                to="/news/$slug"
                params={{ slug: article.slug }}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <img
                  src={article.image}
                  alt=""
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-eyebrow text-accent">
                    {article.category}
                  </p>
                  <h3 className="mt-2 font-sans text-base font-semibold text-ink">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <p className="mt-auto pt-4 text-xs text-muted">
                    {formatDate(article.date)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
