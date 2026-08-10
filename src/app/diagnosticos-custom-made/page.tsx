import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Diagnósticos custom-made",
  description: "Soluciones a tu medida, calidad e innovación: paneles NGS y RT-qPCR diseñados sobre Ampliplex™, nuestra plataforma bioinformática propietaria.",
  path: "/diagnosticos-custom-made",
});

export default function CustomMadePage() {
  return (
    <>
      <PageHero
        eyebrow="I+D+I"
        title="Diagnósticos custom-made"
        subtitle="Soluciones a tu medida, calidad e innovación."
      />

      <Section tone="light">
        <SectionHeader
          eyebrow="El problema"
          title="Los patógenos avanzan en silencio"
          body="Sin síntomas claros ni una propagación evidente, las co-infecciones y la diversidad de agentes complican el diagnóstico, derivando en tratamientos poco efectivos y mayores costos operacionales que afectan directamente la rentabilidad y competitividad de tu operación."
        />
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="card-surface p-8">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Sequence className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Ampliplex™</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
              Diagnóstico molecular anticipado y dirigido: diseñamos paneles NGS y RT-qPCR sobre nuestra plataforma
              bioinformática propietaria, integrando bases genómicas actuales y la evidencia científica más reciente.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-50" aria-hidden />
              Certeza cuando más la necesitas
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Identifica el agente causal antes de comprometer tu producción
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Tu operación es única. Tu diagnóstico también debe serlo. Adaptamos la tecnología a tus protocolos,
              plazos y objetivos comerciales para habilitar un manejo dirigido y costo-efectivo.
            </p>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Contacta un experto"
        body="Cuéntanos el patógeno, cultivo o co-infección que necesitas resolver."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
        secondary={{ label: "Ver bacterias no cultivables", href: "/bacterias-no-cultivables-y-fastidiosas" }}
      />
    </>
  );
}
