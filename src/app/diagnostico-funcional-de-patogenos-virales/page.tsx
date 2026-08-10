import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Diagnóstico Funcional de patógenos virales",
  description:
    "Viroscope™ analiza no solo la presencia del patógeno, sino su capacidad real de infección — tecnología única en Chile y el mundo.",
  path: "/diagnostico-funcional-de-patogenos-virales",
});

const benefits = [
  { title: "Detección avanzada", body: "Identifica patógenos que antes eran indetectables para métodos convencionales.", icon: "Sequence" as const },
  { title: "Reportes interpretables", body: "Resultados simples y claros que permiten actuar a tiempo.", icon: "Report" as const },
  { title: "Identificación integral", body: "Caracterización comprehensiva de las amenazas presentes en el material.", icon: "Layers" as const },
  { title: "Certificación de material vegetal", body: "Certificación tecnológica premium respaldada por evidencia funcional.", icon: "Shield" as const },
  { title: "Decisiones informadas", body: "Datos que sustentan decisiones de manejo y comerciales.", icon: "Growth" as const },
];

export default function ViroscopePage() {
  return (
    <>
      <PageHero
        eyebrow="NUESTROS SERVICIOS"
        title="Diagnóstico Funcional de patógenos virales"
        subtitle="Mientras los métodos convencionales presentan limitaciones, Viroscope™ analiza no solo la presencia del patógeno sino su capacidad real de infección."
      />

      <Section tone="light">
        <SectionHeader
          eyebrow="Viroscope™"
          title="Tecnología única en Chile y el mundo"
          body="Viroscope™ es nuestra plataforma de diagnóstico funcional: entrega métricas de completitud genómica y una señal de infectividad que refleja el ciclo viral, no solo su detección."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const IconCmp = Icon[b.icon];
            return (
              <Reveal key={b.title} delay={(i % 3) * 60} className="card-surface flex flex-col p-6 sm:p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <IconCmp className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{b.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{b.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-50" aria-hidden />
              Cómo funciona
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Secuenciación de última generación + bioinformática especializada
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Viroscope™ opera como software en la nube, con acceso directo a los reportes. Los resultados se generan
              alineados a los estándares nacionales e internacionales más exigentes.
            </p>
          </Reveal>
          <Reveal delay={80} className="card-surface p-8">
            <h3 className="text-lg font-semibold text-ink">Acompañamiento experto</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
              Nuestro equipo apoya la certificación de material vegetal, la evaluación de variedades y el monitoreo
              de campo con asesoría especializada en cada etapa.
            </p>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Alta certeza y confianza en el resultado"
        body="Conversemos sobre cómo Viroscope™ puede certificar tu material vegetal."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
        secondary={{ label: "Ver PCR-Multiplex", href: "/diagnostico-por-pcr-multiplex" }}
      />
    </>
  );
}
