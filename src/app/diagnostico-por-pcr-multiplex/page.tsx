import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CheckDot } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Diagnóstico por PCR-Multiplex",
  description:
    "Detección simultánea de múltiples patógenos virales en una sola muestra, con protocolos optimizados para los principales cultivos de Chile.",
  path: "/diagnostico-por-pcr-multiplex",
});

const cultivos = [
  "Frutales de carozo",
  "Cítricos",
  "Berries",
  "Vides",
  "Hortalizas",
  "Sector semillero",
];

export default function PcrMultiplexPage() {
  return (
    <>
      <PageHero
        eyebrow="NUESTROS SERVICIOS"
        title="Diagnóstico por PCR-Multiplex"
        subtitle="¡Maximizamos la eficiencia de tus recursos! Identificamos patógenos con precisión para prevenir daños a la productividad y sostener el control preventivo."
      />

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Virus y viroides"
              title="Más allá de la RT-qPCR singleplex convencional"
              body="Nuestro laboratorio detecta múltiples patógenos virales de forma simultánea a partir de una sola muestra, en lugar de procesar una reacción singleplex por cada blanco molecular."
            />
          </Reveal>
          <Reveal delay={80} className="card-surface p-8">
            <h3 className="text-lg font-semibold text-ink">Protocolos optimizados por cultivo</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {cultivos.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-ink/80">
                  <CheckDot />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader
          eyebrow="Cómo trabajamos"
          title="Protocolos a la medida y acompañamiento técnico"
          body="Además del análisis, ofrecemos protocolos personalizados y asesoría científico-técnica para proyectos fitosanitarios, desde el diseño del muestreo hasta la interpretación de resultados."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          <Reveal className="card-surface p-6 sm:p-7">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Sequence className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Detección simultánea</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Varios patógenos virales identificados en una sola reacción multiplex.
            </p>
          </Reveal>
          <Reveal delay={60} className="card-surface p-6 sm:p-7">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Report className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Asesoría técnica</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Acompañamiento científico-técnico para proyectos fitosanitarios de cualquier escala.
            </p>
          </Reveal>
          <Reveal delay={120} className="card-surface p-6 sm:p-7">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Target className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Protocolos a medida</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Diseñados según el cultivo, el objetivo diagnóstico y el contexto de producción.
            </p>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Contacta un experto"
        body="Cuéntanos qué patógenos necesitas descartar o confirmar en tu cultivo."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
        secondary={{ label: "Ver diagnóstico funcional (Viroscope™)", href: "/diagnostico-funcional-de-patogenos-virales" }}
      />
    </>
  );
}
