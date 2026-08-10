import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { newsPosts } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

const formatter = new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = newsPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  const metadata = buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/noticias/${post.slug}`,
  });
  const image = { url: post.image, alt: post.title };
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, images: [image] },
    twitter: { ...metadata.twitter, images: [post.image] },
  };
}

export default function NewsPostPage({ params }: { params: { slug: string } }) {
  const post = newsPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={formatter.format(new Date(post.date))} title={post.title} subtitle={post.excerpt} />

      <Section tone="light">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong hover:underline"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4">
              <path
                d="M16 10H4m0 0 4.5-4.5M4 10l4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Volver a Noticias
          </Link>
          <Reveal>
            <img
              src={post.image}
              alt=""
              className="mt-6 aspect-[16/9] w-full rounded-2xl border border-line object-cover"
            />
          </Reveal>
          <Reveal className="mt-8 space-y-5">
            {post.body.map((block, i) => {
              if (block.type === "h3") {
                return (
                  <h3 key={i} className="!mt-8 text-xl font-semibold text-ink">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-[15px] leading-relaxed text-muted">
                  {block.text}
                </p>
              );
            })}
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Conversemos sobre tu proyecto fitosanitario"
        body="Cuéntanos qué necesitas diagnosticar y te preparamos una propuesta técnica según tu cultivo, volumen y plazo."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
        secondary={{ label: "Ver más noticias", href: "/noticias" }}
      />
    </>
  );
}
