import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { newsPosts } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Noticias",
  description: "Novedades de Multiplex y Viroscope en diagnóstico fitosanitario.",
  path: "/noticias",
});

const formatter = new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function NoticiasPage() {
  return (
    <>
      <PageHero
        eyebrow="NOTICIAS"
        title="Novedades de Multiplex y Viroscope"
        subtitle="Un registro de nuestra participación en la comunidad fitosanitaria y agrícola."
      />

      <Section tone="light">
        <ol className="mx-auto max-w-3xl space-y-4">
          {newsPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 5) * 40} as="li">
              <Link
                href={`/noticias/${post.slug}`}
                className="card-surface group flex flex-col gap-5 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:flex-row sm:p-6"
              >
                {post.image ? (
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="h-44 w-full flex-none rounded-xl object-cover sm:h-28 sm:w-40"
                  />
                ) : (
                  <div className="flex h-44 w-full flex-none items-center justify-center rounded-xl bg-brand-soft sm:h-28 sm:w-40">
                    <LogoMark className="h-8 w-8 text-brand-strong" cutColor="#E4F0F9" />
                  </div>
                )}
                <div>
                  <time
                    dateTime={post.date}
                    className="text-sm font-semibold uppercase tracking-wide text-brand-strong"
                  >
                    {formatter.format(new Date(post.date))}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold leading-snug text-ink">{post.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong">
                    Leer nota completa
                    <ArrowRight className="transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
