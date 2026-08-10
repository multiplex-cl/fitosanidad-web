import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";
import { reasons } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "¿Por qué elegirnos?",
  description: "7 razones para trabajar con Multiplex: certeza diagnóstica, ciencia de datos, eficiencia y competitividad para tu producción agrícola.",
  path: "/porque-elegirnos",
});

export default function PorQueElegirnosPage() {
  return (
    <>
      <PageHero
        eyebrow="¿POR QUÉ ELEGIRNOS?"
        title="7 razones para trabajar con Multiplex"
        subtitle="Maximizamos el valor de tu producción agrícola con experiencia local y estándares globales."
      />

      <Section tone="light">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const IconCmp = Icon[r.icon];
            return (
              <Reveal key={r.title} delay={(i % 3) * 60} className="card-surface flex flex-col p-6 sm:p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <IconCmp className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{r.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{r.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="mist">
        <div className="rounded-3xl border border-line bg-surface p-8 text-center shadow-soft sm:p-12">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Maximizamos el valor de tu producción agrícola</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Experiencia local con estándares globales, resultados eficientes sin sacrificar precisión, un equipo
              especializado cercano y un compromiso real con la sustentabilidad de tu operación.
            </p>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Comprueba la diferencia en tu próximo diagnóstico"
        body="Cuéntanos tu cultivo y objetivo; te proponemos la plataforma diagnóstica adecuada."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
        secondary={{ label: "Ver nuestros servicios", href: "/nuestros-servicios" }}
      />
    </>
  );
}
