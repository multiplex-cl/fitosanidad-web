import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Bacterias no cultivables y fastidiosas",
  description: "Paneles NGS de alta especificidad, sensibilidad y certeza para bacterias que los análisis convencionales no logran detectar.",
  path: "/bacterias-no-cultivables-y-fastidiosas",
});

export default function BacteriasPage() {
  return (
    <>
      <PageHero
        eyebrow="I+D+I"
        title="Bacterias no cultivables y fastidiosas"
        subtitle="Cuando los patógenos están presentes, pero no son detectados por los análisis convencionales."
      />

      <Section tone="light">
        <SectionHeader
          eyebrow="El desafío"
          title="Microorganismos difíciles de aislar y estudiar"
          body="Ciertos grupos bacterianos son especialmente difíciles de aislar y estudiar. Muchas pruebas de laboratorio rutinarias resultan inadecuadas para identificarlos, o producen resultados diagnósticos inciertos."
        />
      </Section>

      <Section tone="mist">
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal className="card-surface p-6 sm:p-7">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Bacteria className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Bacterioscope™</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
              Ofrecemos servicios personalizados con paneles NGS diseñados para analizar el código genético de estos
              microorganismos, con alta especificidad, sensibilidad y certeza.
            </p>
          </Reveal>
          <Reveal delay={60} className="card-surface p-6 sm:p-7">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Target className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Soluciones personalizadas</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
              Cada proyecto se diseña según el grupo bacteriano de interés y el contexto de tu operación, con
              acompañamiento de nuestro equipo de especialistas.
            </p>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Contáctanos para una solución personalizada"
        body="Cuéntanos qué bacteria fastidiosa o no cultivable necesitas caracterizar."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
        secondary={{ label: "Ver diagnósticos custom-made", href: "/diagnosticos-custom-made" }}
      />
    </>
  );
}
