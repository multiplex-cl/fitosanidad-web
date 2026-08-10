/**
 * Copy y datos estructurados de contenido, extraídos y reorganizados desde
 * fitosanidad.multiplex.cl (WordPress) hacia el nuevo sistema de diseño.
 */
import type { IconName } from "@/components/ui/icons";

export type Platform = {
  id: string;
  name: string;
  tag: string;
  title: string;
  body: string;
  icon: IconName;
  href: string;
  points: readonly string[];
};

/** Las tres plataformas propietarias de Multiplex Fitosanidad. */
export const platforms: Platform[] = [
  {
    id: "pcr-multiplex",
    name: "PCR-Multiplex",
    tag: "Nuestros servicios",
    title: "Diagnóstico por PCR-Multiplex",
    body: "Detección simultánea de múltiples patógenos virales en una sola muestra, más allá de la RT-qPCR singleplex convencional.",
    icon: "Sequence",
    href: "/diagnostico-por-pcr-multiplex",
    points: [
      "Protocolos optimizados para carozos, cítricos, berries, uva, hortalizas y semillas",
      "Asesoría científico-técnica para proyectos fitosanitarios",
      "Protocolos personalizados según cultivo y objetivo",
    ],
  },
  {
    id: "viroscope",
    name: "Viroscope™",
    tag: "Nuestros servicios",
    title: "Diagnóstico Funcional de patógenos virales",
    body: "Viroscope™ no solo detecta la presencia del patógeno: analiza su capacidad real de infección, algo que los métodos convencionales no distinguen.",
    icon: "Virus",
    href: "/diagnostico-funcional-de-patogenos-virales",
    points: [
      "Secuenciación de última generación + análisis bioinformático especializado",
      "Métricas de completitud genómica y señal de infectividad",
      "Plataforma cloud con acceso directo a los reportes",
    ],
  },
  {
    id: "ampliplex",
    name: "Ampliplex™",
    tag: "I+D+i",
    title: "Diagnósticos custom-made",
    body: "Paneles NGS y RT-qPCR diseñados a la medida de cada operación, sobre la plataforma bioinformática propietaria Ampliplex™.",
    icon: "Beaker",
    href: "/diagnosticos-custom-made",
    points: [
      "Integra bases genómicas actuales y evidencia científica reciente",
      "Identifica el agente causal antes de que comprometa la producción",
      "Se adapta a protocolos, plazos y objetivos comerciales del cliente",
    ],
  },
  {
    id: "bacterioscope",
    name: "Bacterioscope™",
    tag: "I+D+i",
    title: "Bacterias no cultivables y fastidiosas",
    body: "Paneles NGS diseñados para analizar el código genético de bacterias difíciles de aislar, que los análisis convencionales no logran detectar con certeza.",
    icon: "Bacteria",
    href: "/bacterias-no-cultivables-y-fastidiosas",
    points: [
      "Alta especificidad, sensibilidad y certeza diagnóstica",
      "Servicios personalizados según el grupo bacteriano de interés",
      "Acompañamiento de un equipo de especialistas",
    ],
  },
];

export type Reason = { title: string; body: string; icon: IconName };

/** 7 razones para trabajar con Multiplex (página ¿Por qué elegirnos?). */
export const reasons: Reason[] = [
  {
    title: "Alta certeza diagnóstica",
    body: "Mayor confiabilidad en los procesos fitosanitarios, con métodos validados internacionalmente.",
    icon: "Target",
  },
  {
    title: "Decisiones respaldadas por ciencia de datos",
    body: "Cada resultado se entrega con el contexto necesario para tomar decisiones informadas, no solo un dato aislado.",
    icon: "Growth",
  },
  {
    title: "Caracterización funcional e integral",
    body: "Evaluamos el estado sanitario completo del material vegetal, no solo la presencia de un patógeno.",
    icon: "Leaf",
  },
  {
    title: "Compatibilidad con certificación oficial",
    body: "Diagnósticos alineados con los programas de certificación fitosanitaria vigentes.",
    icon: "Shield",
  },
  {
    title: "Optimización de costos operacionales",
    body: "Reducimos el costo de la incertidumbre a lo largo de toda la cadena productiva.",
    icon: "Clock",
  },
  {
    title: "Detección simultánea de múltiples patógenos",
    body: "Un solo análisis multiplex reemplaza varias pruebas singleplex, ahorrando tiempo y recursos.",
    icon: "Layers",
  },
  {
    title: "Mayor competitividad en mercados internacionales",
    body: "Material vegetal con respaldo diagnóstico de estándar internacional, listo para exportación.",
    icon: "Globe",
  },
] as const;

export type NewsItem = { date: string; title: string };

/** Noticias publicadas en el sitio anterior (fitosanidad.multiplex.cl/noticias). */
export const news: NewsItem[] = [
  { date: "2025-01-20", title: "Multiplex Viroscope Arica en el foco fitosanitario: Diagnósticos moleculares para una agricultura sostenible" },
  { date: "2024-12-14", title: "Multiplex y Viroscope, aseguramos material vegetal libre de virus y viroides" },
  { date: "2024-11-05", title: "Viroscope: Innovación en Sanidad Vegetal para la Agricultura Moderna" },
  { date: "2024-10-26", title: "Multiplex en Euroseed e InnovAction Stage 2024" },
  { date: "2024-10-04", title: "Multiplex seleccionado finalista de Innovaction Stage 2024, organizada por EUROSEEDS" },
  { date: "2024-10-02", title: "Segunda convocatoria al Programa de Fitosanidad de Multiplex con metodología Viroscope" },
  { date: "2024-09-09", title: "Convocatoria para el Piloto Viroscope" },
  { date: "2024-08-06", title: "Multiplex y Viroscope: revolucionando la competitividad y rentabilidad en la cadena productiva agrícola" },
  { date: "2024-06-08", title: "Ventaja competitiva en la cadena productiva agrícola" },
] as const;

/** Tipos de organización para el formulario de contacto. */
export const organizationTypes = [
  "Productor / exportador agrícola",
  "Vivero o empresa semillera",
  "Laboratorio o certificadora",
  "Universidad o centro de investigación",
  "Otro",
] as const;
