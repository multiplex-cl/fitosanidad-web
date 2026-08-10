import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/icons";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description: "Completa los datos y te contactaremos.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHero eyebrow="CONTACTO" title="Contáctanos" subtitle="Completa los datos y te contactaremos." />

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="card-surface p-6 sm:p-8">
            <ContactForm />
          </Reveal>
          <Reveal delay={80} className="space-y-5">
            <div className="card-surface p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                <Icon.Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">Correo</h3>
              <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-muted hover:text-brand-strong">
                {site.email}
              </a>
            </div>
            <div className="card-surface p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                <Icon.Globe className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">Dirección</h3>
              <p className="mt-1 text-sm text-muted">{site.address}</p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
