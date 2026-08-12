import type { Metadata } from "next";
import { site } from "@/content/site";

const baseUrl = site.url;

/**
 * Genera metadata coherente por página (title, description, canonical, Open
 * Graph, Twitter). Mismo patrón que multiplex.bio.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = new URL(path, baseUrl).toString();
  const fullTitle = path === "/" ? `${site.name} — ${site.tagline}` : `${title} · ${site.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_CL",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.svg"],
    },
  };
}

export const globalKeywords = [
  "diagnóstico fitosanitario Chile",
  "PCR multiplex plantas",
  "diagnóstico molecular vegetal",
  "Viroscope",
  "Ampliplex",
  "detección de patovares",
  "patógenos virales plantas",
  "certificación material vegetal",
  "bacterias no cultivables",
  "diagnóstico funcional viral",
];
