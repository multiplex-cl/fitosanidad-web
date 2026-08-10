import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { platforms } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fitosanidad",
  description:
    "Innovación y confianza en diagnóstico fitosanitario: secuenciación de nueva generación, PCR/qPCR/RT-qPCR multiplex, Ampliplex™, Viroscope™ y Bacterioscope™.",
  path: "/fitosanidad",
});

export default function FitosanidadPage() {
  return (
    <>
      <PageHero
        eyebrow="FITOSANIDAD"
        title="Innovación y confianza en diagnóstico fitosanitario"
        subtitle="Un laboratorio que desarrolla soluciones de diagnóstico para la sanidad vegetal del agronegocio, combinando biología molecular convencional con secuenciación de nueva generación (NGS)."
      />

      <Section tone="light">
        <SectionHeader
          eyebrow="Nuestras capacidades"
          title="De la PCR convencional a la secuenciación de nueva generación"
          body="Trabajamos con PCR, qPCR y RT-qPCR en formato multiplex, y con NGS para los casos donde la certeza exige ir más allá de la detección tradicional."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p, i) => {
            const IconCmp = Icon[p.icon];
            return (
              <Reveal key={p.id} delay={(i % 4) * 60}>
                <FeatureCard
                  tag={p.name}
                  title={p.title}
                  body={p.body}
                  icon={<IconCmp className="h-5 w-5" />}
                  href={p.href}
                  cta="Conocer más"
                  points={p.points}
                  className="h-full"
                />
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader
          align="center"
          eyebrow="Nuestra propuesta de valor"
          title="Certeza, eficiencia y rentabilidad"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          <Reveal className="card-surface p-6 text-center sm:p-7">
            <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Target className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Certeza</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Distinguimos la presencia viral de la infectividad real, algo que los métodos convencionales no logran.
            </p>
          </Reveal>
          <Reveal delay={60} className="card-surface p-6 text-center sm:p-7">
            <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Layers className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Eficiencia</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Detección simultánea de múltiples patógenos en una sola reacción.
            </p>
          </Reveal>
          <Reveal delay={120} className="card-surface p-6 text-center sm:p-7">
            <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Growth className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Rentabilidad</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Estrategias de manejo dirigidas que reducen costos operacionales a lo largo de la cadena.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-50" aria-hidden />
              Quiénes somos
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Un equipo interdisciplinario con más de 15 años en investigación
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Somos científicos e ingenieros que combinan experiencia en biología molecular con tecnología de
              vanguardia, transformando el diagnóstico fitosanitario en Chile y la región. Nuestra visión es construir
              el ecosistema diagnóstico de excelencia que el agronegocio chileno merece.
            </p>
          </Reveal>
          <Reveal delay={80} className="card-surface p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon.Beaker className="mt-0.5 h-5 w-5 flex-none text-brand-strong" />
                <span className="text-sm text-ink/80">
                  Biología molecular convencional combinada con secuenciación de nueva generación.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon.Shield className="mt-0.5 h-5 w-5 flex-none text-brand-strong" />
                <span className="text-sm text-ink/80">
                  Metodologías alineadas con estándares nacionales e internacionales.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon.Globe className="mt-0.5 h-5 w-5 flex-none text-brand-strong" />
                <span className="text-sm text-ink/80">
                  Puente tecnológico entre la ciencia de frontera y aplicaciones reales para el agronegocio.
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Lleva certeza científica a tu operación"
        body="Conversemos sobre tu cultivo, tu volumen de muestras y el objetivo diagnóstico que necesitas resolver."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
        secondary={{ label: "¿Por qué elegirnos?", href: "/porque-elegirnos" }}
      />
    </>
  );
}
