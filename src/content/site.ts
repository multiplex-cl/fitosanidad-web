/**
 * Configuración global del sitio Fitosanidad: identidad, contacto, navegación
 * y footer. Mismo patrón que multiplex.bio (src/content/site.ts) para que
 * ambos sitios se mantengan fáciles de sincronizar.
 */
export const site = {
  name: "Multiplex Fitosanidad",
  legalName: "Multiplex SpA",
  tagline: "Diagnóstico molecular fitosanitario de vanguardia",
  url: "https://fitosanidad.multiplex.bio",
  locale: "es-CL",
  country: "Chile",
  email: "contacto@multiplex.bio",
  address: "Avenida del Valle 725, Huechuraba, Santiago, Chile",
  social: {
    linkedin: "https://cl.linkedin.com/company/multiplexbio",
  },
} as const;

/**
 * Access key de Web3Forms (web3forms.com) para el formulario de contacto.
 * Pública por diseño (va en el cliente); reenvía cada envío a la cuenta de
 * Web3Forms configurada. Mientras esté vacía, el formulario usa un fallback
 * por mailto — ya no aplica.
 */
export const web3formsKey = "cd9f90df-51cd-477b-8b2b-7f9eea01e49a";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export type FooterGroup = { title: string; items: NavItem[] };

// --------------------------------------------------------------- NAVEGACIÓN
export const primaryNav: NavItem[] = [
  { label: "Multiplex", href: "/" },
  {
    label: "Fitosanidad",
    href: "/fitosanidad",
    description: "Diagnóstico molecular para el agronegocio",
    children: [
      { label: "¿Por qué elegirnos?", href: "/porque-elegirnos", description: "7 razones para trabajar con nosotros" },
      { label: "Nuestros servicios", href: "/nuestros-servicios", description: "PCR-Multiplex y diagnóstico funcional" },
      { label: "Diagnóstico por PCR-Multiplex", href: "/diagnostico-por-pcr-multiplex", description: "Detección simultánea de patógenos virales" },
      { label: "Diagnóstico Funcional de patógenos virales", href: "/diagnostico-funcional-de-patogenos-virales", description: "Viroscope™: presencia vs. infectividad" },
    ],
  },
  {
    label: "I+D+i",
    href: "/i-d-i",
    description: "Diagnósticos a medida y bacterias fastidiosas",
    children: [
      { label: "Diagnósticos custom-made", href: "/diagnosticos-custom-made" },
      { label: "Bacterias no cultivables y fastidiosas", href: "/bacterias-no-cultivables-y-fastidiosas" },
    ],
  },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];

// ------------------------------------------------------------------ FOOTER
export const footerNav: FooterGroup[] = [
  {
    title: "Fitosanidad",
    items: [
      { label: "¿Por qué elegirnos?", href: "/porque-elegirnos" },
      { label: "Nuestros servicios", href: "/nuestros-servicios" },
      { label: "Diagnóstico por PCR-Multiplex", href: "/diagnostico-por-pcr-multiplex" },
      { label: "Diagnóstico Funcional de patógenos virales", href: "/diagnostico-funcional-de-patogenos-virales" },
    ],
  },
  {
    title: "I+D+i",
    items: [
      { label: "Diagnósticos custom-made", href: "/diagnosticos-custom-made" },
      { label: "Bacterias no cultivables y fastidiosas", href: "/bacterias-no-cultivables-y-fastidiosas" },
    ],
  },
  {
    title: "Compañía",
    items: [
      { label: "Noticias", href: "/noticias" },
      { label: "Contacto", href: "/contacto" },
      { label: "Multiplex.bio", href: "https://multiplex.bio" },
    ],
  },
];
