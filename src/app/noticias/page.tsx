import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { news } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Noticias",
  description: "Novedades de Multiplex y Viroscope en diagnóstico fitosanitario.",
  path: "/noticias",
});

const formatter = new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric" });

export default function NoticiasPage() {
  return (
    <>
      <PageHero eyebrow="NOTICIAS" title="Novedades de Multiplex y Viroscope" subtitle="Un registro de nuestra participación en la comunidad fitosanitaria y agrícola." />

      <Section tone="light">
        <ol className="mx-auto max-w-2xl space-y-4">
          {news.map((item, i) => (
            <Reveal key={item.title} delay={(i % 5) * 40} as="li" className="card-surface flex flex-col gap-1.5 p-5 sm:flex-row sm:items-baseline sm:gap-6 sm:p-6">
              <time dateTime={item.date} className="flex-none text-sm font-semibold uppercase tracking-wide text-brand-strong sm:w-40">
                {formatter.format(new Date(item.date))}
              </time>
              <p className="text-[15px] leading-relaxed text-ink">{item.title}</p>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
