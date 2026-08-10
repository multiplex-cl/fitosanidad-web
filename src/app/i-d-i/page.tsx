import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { platforms } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "I+D+i",
  description: "Nuestra división de investigación, desarrollo e innovación: diagnósticos custom-made (Ampliplex™) y detección de bacterias no cultivables (Bacterioscope™).",
  path: "/i-d-i",
});

const rd = platforms.filter((p) => p.id === "ampliplex" || p.id === "bacterioscope");

export default function IDIPage() {
  return (
    <>
      <PageHero
        eyebrow="I+D+I"
        title="Investigación, desarrollo e innovación aplicada"
        subtitle="Cuando el diagnóstico estándar no alcanza, nuestra división de I+D+i diseña soluciones a la medida de cada operación y cada patógeno."
      />

      <Section tone="light">
        <SectionHeader
          eyebrow="Nuestras líneas de I+D+i"
          title="Soluciones cuando lo convencional no es suficiente"
          body="Combinamos bases genómicas actualizadas, evidencia científica reciente y bioinformática propia para resolver los casos más exigentes."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {rd.map((s) => {
            const IconCmp = Icon[s.icon];
            return (
              <FeatureCard
                key={s.id}
                tag={s.name}
                title={s.title}
                body={s.body}
                icon={<IconCmp className="h-5 w-5" />}
                href={s.href}
                cta="Ver el detalle"
                points={s.points}
                className="h-full"
              />
            );
          })}
        </div>
      </Section>

      <CTABand
        title="¿Tu proyecto necesita un diagnóstico que no existe todavía?"
        body="Cuéntanos el patógeno o grupo microbiano de interés; nuestro equipo de I+D+i evalúa la mejor estrategia."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
        secondary={{ label: "Ver nuestros servicios", href: "/nuestros-servicios" }}
      />
    </>
  );
}
