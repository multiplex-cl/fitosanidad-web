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
  title: "Nuestros servicios",
  description: "Diagnóstico por PCR-Multiplex y diagnóstico funcional de patógenos virales (Viroscope™) para el agronegocio.",
  path: "/nuestros-servicios",
});

const services = platforms.filter((p) => p.id === "pcr-multiplex" || p.id === "viroscope");

export default function NuestrosServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="NUESTROS SERVICIOS"
        title="Diagnóstico molecular para cada etapa de tu producción"
        subtitle="Desde la detección multiplex de patógenos virales hasta el diagnóstico funcional que distingue presencia de infectividad real."
      />

      <Section tone="light">
        <SectionHeader
          eyebrow="Servicios"
          title="Dos formas de diagnosticar con certeza"
          body="Ambos servicios pueden combinarse según la etapa del cultivo y el nivel de certeza que tu operación necesite."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => {
            const IconCmp = Icon[s.icon];
            return (
              <FeatureCard
                key={s.id}
                tag={s.name}
                title={s.title}
                body={s.body}
                icon={<IconCmp className="h-5 w-5" />}
                href={s.href}
                cta="Ver el detalle del servicio"
                points={s.points}
                className="h-full"
              />
            );
          })}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader
          align="center"
          eyebrow="¿Buscas algo más específico?"
          title="Nuestra división de I+D+i desarrolla diagnósticos a medida"
          body="Si tu proyecto requiere un panel custom-made o la detección de bacterias no cultivables, revisa nuestra línea de I+D+i."
        />
        <div className="mt-8 flex justify-center">
          <a
            href="/i-d-i"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-brand-strong"
          >
            Explorar I+D+i
            <Icon.Sparkles className="h-4 w-4" />
          </a>
        </div>
      </Section>

      <CTABand
        title="¿No sabes cuál servicio se ajusta a tu proyecto?"
        body="Cuéntanos tu cultivo, tu objetivo y tu volumen de muestras; te recomendamos la plataforma adecuada."
        primary={{ label: "Contactar a un experto", href: "/contacto" }}
      />
    </>
  );
}
