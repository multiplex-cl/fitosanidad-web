import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";
import { pathogenPanels, reactionFormats } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Diagnóstico por PCR-Multiplex",
  description:
    "Detección simultánea de múltiples patógenos virales en una sola muestra, con paneles específicos por cultivo y venta de kits multipatógenos.",
  path: "/diagnostico-por-pcr-multiplex",
});

export default function PcrMultiplexPage() {
  return (
    <>
      <PageHero
        eyebrow="NUESTROS SERVICIOS"
        title="Diagnóstico por PCR-Multiplex"
        subtitle="¡Maximizamos la eficiencia de tus recursos! Identificamos patógenos con precisión para prevenir daños a la productividad y sostener el control preventivo. Disponible como servicio diagnóstico o como venta de kits para laboratorios con capacidad técnica instalada."
      />

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Virus y viroides"
              title="Más allá de la RT-qPCR singleplex convencional"
              body="Nuestro laboratorio detecta múltiples patógenos virales de forma simultánea a partir de una sola muestra, en lugar de procesar una reacción singleplex por cada blanco molecular. Además, adaptamos el diagnóstico al tipo de tejido disponible según el cultivo."
            />
          </Reveal>
          <Reveal delay={80} className="card-surface p-8">
            <h3 className="text-lg font-semibold text-ink">Paneles por cultivo</h3>
            <div className="mt-5 space-y-5">
              {pathogenPanels.map((panel) => (
                <div key={panel.crop}>
                  <p className="text-sm font-semibold text-ink">{panel.crop}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {panel.pathogens.map((p) => (
                      <span key={p} className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-ink/80">
                        {p}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-muted">Tejidos: {panel.tissues.join(", ")}</p>
                  {panel.note && <p className="mt-1 text-xs text-brand-strong">{panel.note}</p>}
                </div>
              ))}
              <p className="text-sm text-muted">
                + protocolos para cítricos, berries, vides y otros cultivos, según objetivo.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="rounded-2xl border border-brand/20 bg-surface p-7 sm:p-8">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon.Shield className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Laboratorio tercero autorizado por el SAG</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
              Estamos incluidos en la Lista de laboratorios autorizados para realizar el Diagnóstico de Plum Pox
              Virus Raza D (PPV-D), con metodología certificada mediante RT-PCR — parte de nuestro panel de carozos.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeader
              eyebrow="Formatos de reacción multipatógenos"
              title="De singleplex a panel de 8 virus"
              body="Elegimos el formato según el número de blancos moleculares que tu operación necesita cubrir."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {reactionFormats.map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink"
                >
                  {f.label}
                  <span className="text-xs text-muted">({f.detail})</span>
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Todos nuestros servicios diagnósticos virales incluyen extracción de ácidos nucleicos, RT-PCR, control
              interno y referencias de amplificación, e informe de resultados.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
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

      {/* Venta de kits multipatógenos */}
      <Section tone="mist" id="kits">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-50" aria-hidden />
              Otra forma de trabajar con nosotros
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Venta de kits multipatógenos</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Si tu laboratorio ya cuenta con capacidad técnica instalada para PCR, no necesitas enviarnos tus
              muestras: te vendemos el kit multipatógeno para que corras el diagnóstico directamente en tu propia
              operación.
            </p>
          </Reveal>
          <Reveal delay={80} className="card-surface p-8">
            <h3 className="text-lg font-semibold text-ink">Pensado para laboratorios con capacidad instalada</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              <li className="flex items-start gap-2.5">
                <Icon.Check className="mt-0.5 h-4 w-4 flex-none text-brand-strong" />
                <span>Mismos formatos: desde singleplex hasta panel de 8 virus.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon.Check className="mt-0.5 h-4 w-4 flex-none text-brand-strong" />
                <span>Incluye control interno y referencias de amplificación.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon.Check className="mt-0.5 h-4 w-4 flex-none text-brand-strong" />
                <span>Soporte técnico de nuestro equipo para la puesta en marcha.</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Contacta un experto"
        body="Cuéntanos qué patógenos necesitas descartar o confirmar en tu cultivo, o si te interesa comprar el kit para tu propio laboratorio."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
        secondary={{ label: "Ver diagnóstico funcional (Viroscope™)", href: "/diagnostico-funcional-de-patogenos-virales" }}
      />
    </>
  );
}
