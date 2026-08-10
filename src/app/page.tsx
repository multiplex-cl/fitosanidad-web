import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { platforms } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Diagnóstico molecular fitosanitario",
  description:
    "Multiplex Fitosanidad lidera la innovación en diagnóstico molecular para el agronegocio: PCR-Multiplex, diagnóstico funcional viral y paneles a medida.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="DIAGNÓSTICO MOLECULAR FITOSANITARIO"
        titleLead="Liderando la innovación en"
        titleAccent="diagnóstico molecular"
        subtitle="Hacemos posible lo que otros no pueden. Ciencia de frontera al alcance del agronegocio, desde la certificación de material vegetal hasta la detección de patógenos difíciles de diagnosticar."
        primaryCta={{ label: "Habla con un experto", href: "/contacto" }}
        secondaryCta={{ label: "Conoce Fitosanidad", href: "/fitosanidad" }}
        support="Un equipo interdisciplinario con más de 15 años en investigación"
        supportNote="Combinamos biología molecular convencional con secuenciación de nueva generación."
      />

      <Section tone="light">
        <SectionHeader
          eyebrow="Ciencia de frontera, a tu alcance"
          title="Certeza, eficiencia y rentabilidad para tu cadena productiva"
          body="Desarrollamos diagnóstico molecular funcional mediante metodologías agnósticas y transversales que benefician al agronegocio: desde la certificación de material vegetal hasta la detección temprana de patógenos que los métodos convencionales no logran distinguir."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          <Reveal className="card-surface p-6 sm:p-7">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Target className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Certeza</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Distinguimos la presencia de un patógeno de su capacidad real de infección.
            </p>
          </Reveal>
          <Reveal delay={60} className="card-surface p-6 sm:p-7">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Layers className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Eficiencia</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Detección simultánea de múltiples patógenos en una sola reacción multiplex.
            </p>
          </Reveal>
          <Reveal delay={120} className="card-surface p-6 sm:p-7">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Growth className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Rentabilidad</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Estrategias de manejo dirigidas y costo-efectivas para toda la cadena productiva.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader
          eyebrow="Nuestras plataformas"
          title="Cuatro plataformas propietarias para el diagnóstico fitosanitario"
          body="Ampliplex™, Viroscope™ y Bacterioscope™ operan sobre la misma infraestructura de secuenciación y bioinformática, adaptadas a cada objetivo diagnóstico."
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
                  className="h-full"
                />
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="light">
        <div className="rounded-3xl border border-line bg-mist p-8 text-center shadow-soft sm:p-12">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">¿Por qué elegir Multiplex?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Maximizamos el valor de tu producción agrícola: experiencia local con estándares globales, resultados
              eficientes sin sacrificar precisión y un equipo especializado que te acompaña de cerca.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/porque-elegirnos"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-brand-strong"
              >
                Ver las 7 razones
                <Icon.Sparkles className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Conversemos sobre tu proyecto fitosanitario"
        body="Cuéntanos qué necesitas diagnosticar y te preparamos una propuesta técnica según tu cultivo, volumen y plazo."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
        secondary={{ label: "Ver nuestros servicios", href: "/nuestros-servicios" }}
      />
    </>
  );
}
