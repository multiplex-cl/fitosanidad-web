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

export type NewsBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type NewsPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: NewsBlock[];
};

/**
 * Noticias completas, migradas desde fitosanidad.multiplex.cl/noticias.
 * Los `slug` son los originales del sitio anterior (se conservan por SEO).
 */
export const newsPosts: NewsPost[] = [
  {
    slug: "multiplex-viroscope-arica-en-el-foco-fitosanitario-diagnosticos-moleculares-para-una-agricultura-sostenible",
    date: "2025-01-20",
    title: "Multiplex Viroscope Arica en el foco fitosanitario: Diagnósticos moleculares para una agricultura sostenible",
    excerpt: "Junto a la Universidad de Tarapacá, lanzamos un Programa de Fitosanidad que detecta patógenos emergentes en hortalizas clave de la región de Arica.",
    body: [
      {
        type: "p",
        text: "En un esfuerzo por fortalecer la seguridad alimentaria y la sostenibilidad agrícola en Chile, Multiplex Viroscope Arica, en colaboración con la Universidad de Tarapacá, lanzó un Programa de Fitosanidad que detecta patógenos emergentes en hortalizas clave.",
      },
      { type: "h3", text: "Un cambio en el escenario fitopatológico" },
      {
        type: "p",
        text: "El programa, desarrollado bajo el proyecto 18CTBT-102728, tiene como objetivo enfrentar el creciente desafío de detectar e identificar enfermedades fitosanitarias que afectan la seguridad alimentaria y la sostenibilidad agrícola en Chile.",
      },
      {
        type: "p",
        text: "Según Germán Sepúlveda, académico de la Universidad de Tarapacá y usuario de la tecnología Viroscope: «La tecnología entregada a través del Programa de Fitosanidad es la base para desarrollar una agricultura más sustentable y sostenible, capaz de responder a estos nuevos desafíos».",
      },
      { type: "h3", text: "Análisis de muestras y resultados preliminares" },
      {
        type: "p",
        text: "El programa analizó muestras de tomate y zapallo italiano utilizando tecnología de secuenciación masiva, permitiendo una identificación precisa y temprana de los fitopatógenos presentes. Los resultados están en proceso de comunicación y verificación mediante técnicas complementarias para garantizar su validez y aplicación en terreno.",
      },
      { type: "h3", text: "Impacto regional y nacional" },
      {
        type: "p",
        text: "El impacto de este programa es significativo a nivel regional y nacional, ya que la dinámica de distribución de hortalizas desde Arica hacia la zona centro implica que los problemas fitosanitarios detectados aquí pueden repercutir en la producción y calidad de alimentos en todo el país.",
      },
      {
        type: "p",
        text: "Con este esfuerzo, el Programa de Fitosanidad no solo aporta soluciones tecnológicas innovadoras, sino que sienta las bases para una agricultura más resiliente. Arica se posiciona así como un laboratorio natural para enfrentar los desafíos fitosanitarios del futuro.",
      },
      { type: "p", text: "Más información en viroscope.io y multiplex.bio." },
    ],
  },
  {
    slug: "multiplex-y-viroscope-aseguramos-material-vegetal-libre-de-virus-y-viroides",
    date: "2024-12-14",
    title: "Multiplex y Viroscope, aseguramos material vegetal libre de virus y viroides",
    excerpt: "Viroscope combina secuenciación de nueva generación con análisis masivo de datos para detectar virus y viroides con alta certeza, a USD 250 por muestra.",
    body: [
      {
        type: "p",
        text: "Multiplex desarrolló Viroscope, una biotecnología que transforma el diagnóstico de virus y viroides en plantas. Esta herramienta combina secuenciación de nueva generación (HTS) con análisis masivo de datos para detectar virus y viroides con alta certeza.",
      },
      {
        type: "p",
        text: "Viroscope va más allá de los métodos de diagnóstico tradicionales: no solo detecta la presencia viral, sino que determina el estado de infección activa. Esto permite a los productores agrícolas tomar decisiones mejor informadas sobre el manejo fitosanitario de sus cultivos.",
      },
      {
        type: "p",
        text: "La tecnología es accesible y económica: USD 250 por muestra, con resultados en tres semanas. Esto representa un avance significativo en la democratización del acceso al diagnóstico basado en secuenciación.",
      },
      {
        type: "p",
        text: "Multiplex invita a productores agrícolas a enviar muestras para análisis con Viroscope. La tecnología cuenta con validación científica en condiciones agrícolas reales y protección de patente internacional, y está disponible para viveros, productores y laboratorios fitosanitarios — un hito para una agricultura responsable y la comercialización segura de material vegetal en todo Chile.",
      },
    ],
  },
  {
    slug: "viroscope-innovacion-en-sanidad-vegetal-para-la-agricultura-moderna",
    date: "2024-11-05",
    title: "Viroscope: Innovación en Sanidad Vegetal para la Agricultura Moderna",
    excerpt: "Un sistema de fitodiagnóstico avanzado que utiliza secuenciación masiva para ofrecer diagnósticos precisos en cualquier fase del ciclo productivo.",
    body: [
      {
        type: "p",
        text: "La sanidad vegetal es fundamental para mantener la rentabilidad y productividad de los cultivos en un entorno agrícola moderno, donde los virus representan una amenaza constante.",
      },
      {
        type: "p",
        text: "Viroscope, el sistema de fitodiagnóstico desarrollado por Multiplex, utiliza tecnología de secuenciación masiva para ofrecer diagnósticos precisos y confiables en cualquier fase del ciclo productivo. Gracias a su alta sensibilidad, permite monitorear la salud de las plantas durante todo el año.",
      },
      { type: "h3", text: "¿Por qué adoptar Viroscope?" },
      {
        type: "ul",
        items: [
          "Asegura calidad: protege los cultivos anticipando riesgos virales.",
          "Mayor competitividad: garantiza alta certeza en el diagnóstico y abre puertas a nuevos mercados.",
          "Confianza y respaldo científico: los resultados son validados y respaldados científicamente.",
        ],
      },
      { type: "h3", text: "Funcionamiento de Viroscope" },
      {
        type: "p",
        text: "Viroscope emplea un algoritmo de secuenciación masiva, propiedad de Multiplex SpA, que detecta virus y viroides — incluyendo variantes genéticas — con una precisión que cumple los estándares internacionales más exigentes. Esto permite anticipar la propagación de enfermedades virales en sectores como semillas, vides, frutales y materiales de breeding.",
      },
      { type: "h3", text: "Beneficios clave" },
      {
        type: "ul",
        items: [
          "Detección exhaustiva: identifica virus y viroides conocidos y emergentes.",
          "Monitoreo preventivo constante: minimiza riesgos y maximiza la certeza en la producción.",
          "Innovación en diagnóstico: análisis molecular robusto y sin sesgos, reduciendo la dependencia de pruebas convencionales.",
        ],
      },
      {
        type: "p",
        text: "Con una trayectoria marcada por la innovación, Multiplex SpA posiciona a Viroscope como referente en métodos moleculares costo-efectivos y robustos para la sanidad vegetal.",
      },
    ],
  },
  {
    slug: "multiplex-en-euroseed-e-innovactionstage-2024",
    date: "2024-10-26",
    title: "Multiplex en Euroseed e InnovActionStage 2024",
    excerpt: "En Copenhague, Multiplex fue la única empresa latinoamericana finalista del InnovAction Stage, presentando Viroscope ante la audiencia internacional.",
    body: [
      {
        type: "p",
        text: "Multiplex participó en el Congreso Euroseeds 2024 y en el InnovAction Stage, realizado en Copenhague, Dinamarca, entre el 13 y el 16 de octubre de 2024.",
      },
      {
        type: "p",
        text: "Copenhague fue el epicentro de la innovación agrícola y los avances en mejoramiento vegetal. Euroseeds 2024 reunió a más de 1.300 expertos de la industria, 50 expositores y 1.000 comerciantes, en una instancia excepcional dedicada al futuro del sector semillero, la regulación europea y los desarrollos más recientes en mejoramiento de cultivos.",
      },
      {
        type: "p",
        text: "El InnovAction Stage contó con un espacio dedicado donde las empresas seleccionadas presentaron sus innovaciones de forma dinámica: 10 minutos de presentación seguidos de 15 minutos de interacción con la audiencia. En ese formato, el Dr. Bernardo Pollak, CEO de Multiplex, presentó la tecnología Viroscope a una audiencia internacional.",
      },
      {
        type: "p",
        text: "Tras una rigurosa evaluación de un jurado independiente, Multiplex —única empresa latinoamericana presente— fue reconocida como finalista por su «tecnología basada en ciencia de datos e innovación para el diagnóstico molecular», que potencia la toma de decisiones mediante servicios en la nube e inteligencia artificial para la salud vegetal y agrícola.",
      },
      {
        type: "p",
        text: "Multiplex felicitó especialmente a Healthycrop por ganar el premio InnovActor 2024, y agradeció a Euroseeds y al InnovAction Stage por crear este espacio único para compartir el futuro del mejoramiento vegetal — una agricultura sostenible requiere innovación, y Chile contribuye a ese futuro.",
      },
    ],
  },
  {
    slug: "multiplex-seleccionado-finalistas-de-innovaction-stage-2024-organizada-euroseeds",
    date: "2024-10-04",
    title: "Multiplex, seleccionado finalista del Innovaction Stage 2024 organizado por EUROSEEDS",
    excerpt: "Multiplex es la única empresa latinoamericana con presencia en la UE entre los 12 finalistas globales, distinguida por su tecnología Viroscope.",
    body: [
      {
        type: "p",
        text: "El equipo de Multiplex anunció con orgullo su selección como finalista en la competencia internacional Innovaction Stage 2024, organizada por EUROSEEDS, según comunicó Verónica Morgante, gerenta de operaciones de Multiplex.",
      },
      {
        type: "p",
        text: "Morgante señaló: «Multiplex es la ÚNICA empresa latinoamericana con presencia en la UE entre los 12 finalistas globales. Fuimos distinguidos por nuestra tecnología Viroscope, innovación en diagnóstico molecular en plantas basada en secuenciación masiva».",
      },
      {
        type: "p",
        text: "La empresa se distingue por haber transformado el sector semillero y los programas de mejoramiento vegetal con los más altos estándares fitosanitarios, asegurando el comercio global de material vegetal libre de virus y la seguridad de la cadena alimentaria.",
      },
      { type: "p", text: "El evento internacional se realizó en Copenhague, Dinamarca, del 13 al 16 de octubre." },
      { type: "h3", text: "Sobre Multiplex y Viroscope" },
      {
        type: "p",
        text: "Multiplex y Viroscope utilizan biotecnología avanzada para la certificación fitosanitaria mediante diagnóstico molecular por secuenciación. Estas plataformas emplean técnicas de secuenciación masiva y robótica para identificar marcadores moleculares de forma costo-efectiva.",
      },
    ],
  },
  {
    slug: "participacion-de-la-segunda-convocatoria-al-programa-de-fitosanidad-de-multiplex-con-metodologia-viroscope",
    date: "2024-10-02",
    title: "Participación de la Segunda Convocatoria al Programa de Fitosanidad de Multiplex con metodología Viroscope",
    excerpt: "Viveristas, productores, exportadores, semilleros y propagadores están invitados a postular, sin costo, entre el 2 y el 9 de octubre de 2024.",
    body: [
      {
        type: "p",
        text: "Multiplex, empresa biotecnológica líder en Chile y reconocida por la implementación de servicios genómicos costo-efectivos, invita a viveristas, productores agrícolas, exportadores, semilleros y propagadores a participar en la segunda convocatoria del Programa de Fitosanidad con metodología Viroscope. Este segundo llamado va desde el 2 al 9 de octubre, y es completamente sin costo.",
      },
      {
        type: "p",
        text: "La convocatoria es impulsada por Multiplex en el marco del proyecto CBT Sofofa Hub (18CTBT-102728).",
      },
      { type: "h3", text: "Invitación a participar" },
      {
        type: "p",
        text: "Este formulario busca conocer más sobre las experiencias previas y los desafíos actuales de viveros, huertos, semilleros y exportadoras en materia de fitosanidad. Al completar un breve cuestionario se inicia el proceso de selección para acceder, sin costo, a los servicios de secuenciación masiva (HTS) y análisis por Viroscope, previstos para octubre de 2024.",
      },
      { type: "h3", text: "Criterios iniciales de elegibilidad" },
      {
        type: "ul",
        items: [
          "Pertenecer al sector agroproductivo chileno: viveros, semilleros, huertos y/o exportadoras.",
          "Ser un laboratorio de investigación enfocado en la conservación de recursos genéticos y en la producción y propagación de material vegetal in vitro.",
          "Completar el cuestionario de postulación.",
          "Contar con material vegetal (semillas, muestras foliares o tejido leñoso) para ser testeado mediante HTS entre septiembre y octubre de 2024.",
        ],
      },
      {
        type: "p",
        text: "El programa busca aumentar la conciencia sobre la importancia de los servicios genómicos modernos en el diagnóstico de virus y viroides en plantas, favoreciendo la prevención y control de plagas, el intercambio seguro de material vegetal sano y la competitividad en los mercados agrícolas.",
      },
      { type: "p", text: "Contacto: contacto@multiplex.bio. Postulación: forms.gle/bLDB1SRSckMv7fZaA" },
    ],
  },
  {
    slug: "convocatoria-para-el-piloto-viroscope",
    date: "2024-09-09",
    title: "Convocatoria para el Piloto Viroscope",
    excerpt: "Los primeros 30 inscritos podrán testear, sin costo, su material vegetal en el laboratorio de Multiplex, como parte de un piloto de escalabilidad de Viroscope.",
    body: [
      {
        type: "p",
        text: "«Viroscope, innovación y alta certeza diagnóstica». Multiplex, empresa biotecnológica líder en Chile, presenta Viroscope, un servicio avanzado de diagnóstico molecular que utiliza secuenciación masiva (HTS) para detectar patógenos virales en plantas con una precisión y certeza incomparables.",
      },
      {
        type: "p",
        text: "Viroscope ha demostrado su eficacia en una amplia variedad de cultivos, con diagnósticos integrales validados en colaboración con entidades fitosanitarias, confirmando tanto su alta certeza como su costo-efectividad en aplicaciones agrícolas a gran escala.",
      },
      { type: "h3", text: "Convocatoria para el piloto" },
      {
        type: "p",
        text: "Multiplex invita a viveros y productores nacionales a participar en un piloto de escalabilidad para conocer de primera mano los beneficios de Viroscope. Los primeros 30 inscritos podrán testear, sin costo, su material vegetal (hojas, semillas, tejido leñoso, germoplasma, entre otros) en el laboratorio de Multiplex.",
      },
      {
        type: "p",
        text: "Este piloto forma parte de un proyecto de escalabilidad financiado por el Centro de Biotecnología Traslacional de SOFOFA Hub, que incluye la automatización de Viroscope mediante equipamiento robotizado OT-2 y la implementación de un piloto a gran escala en la cadena productiva agrícola.",
      },
      {
        type: "p",
        text: "Multiplex busca expandir Viroscope a mercados nacionales e internacionales, reafirmando su compromiso con elevar la fitosanidad a los más altos estándares y abrir nuevas oportunidades de competitividad para el sector agrícola.",
      },
      { type: "p", text: "Postulación: forms.gle/bLDB1SRSckMv7fZaA · Contacto: contacto@multiplex.bio" },
    ],
  },
  {
    slug: "multiplex-entre-los-12-finalistas-del-euroseeds-2024-innovactionstage",
    date: "2024-08-06",
    title: "Multiplex entre los 12 finalistas del Euroseeds 2024 InnovActionStage",
    excerpt: "Única empresa finalista fuera de Estados Unidos y la Unión Europea, distinguida por Viroscope™ y su capacidad de asegurar germoplasma libre de virus.",
    body: [
      {
        type: "p",
        text: "Multiplex fue seleccionada como finalista en la competencia Euroseeds Innovactors 2024, siendo la única empresa latinoamericana finalista frente a otras de EE.UU. y la UE, destacándose por su tecnología Viroscope™, que certifica germoplasma y material vegetal de propagación como libre de patógenos virales.",
      },
      {
        type: "p",
        text: "Multiplex fue seleccionada como una de las 12 finalistas a nivel mundial en la competencia Euroseeds 2024 InnovActionStage, instancia que destaca los avances más innovadores en agricultura enfocados en programas de mejoramiento de plantas y materiales reproductivos. Esta distinción es especialmente notable, ya que Multiplex es la única finalista fuera de Estados Unidos y la Unión Europea.",
      },
      {
        type: "p",
        text: "Viroscope™, la tecnología insignia de Multiplex, es un servicio en la nube que utiliza un algoritmo para identificar virus y viroides en material de mejoramiento con una precisión sin precedentes. Es universalmente aplicable a material vegetal y capaz de detectar todos los virus y viroides conocidos descritos en bases de datos públicas, incorporando métricas novedosas para asignar firmas de infectividad y entregar informes fáciles de interpretar.",
      },
      {
        type: "p",
        text: "El equipo de Multiplex está compuesto por un grupo interdisciplinario de investigadores y científicos con doctorado en microbiología, biología molecular, ciencias de plantas y bioinformática.",
      },
      {
        type: "p",
        text: "Bernardo Pollak, CEO de Multiplex, expresó: «Participar en la competencia InnovActor es un hito significativo para Multiplex y nos ofrece una instancia única para mostrar nuestra tecnología Viroscope™. El reconocimiento obtenido al ser finalistas de un evento tan prestigioso afirma nuestro compromiso con el avance de la biotecnología, promoviendo prácticas agrícolas confiables y mejorando las medidas fitosanitarias para asegurar el comercio global de material vegetal libre de virus».",
      },
      { type: "p", text: "Proyectos SUC230050 (ANID) y 18CTBT-102728 (CBT Sofofa Hub)." },
    ],
  },
  {
    slug: "multiplex-y-viroscope-revolucionando-la-competitividad-y-rentabilidad-en-la-cadena-productiva-agricola",
    date: "2024-06-08",
    title: "Multiplex y Viroscope: Revolucionando la Competitividad y Rentabilidad en la Cadena Productiva Agrícola",
    excerpt: "Un caso real en Chile compara el costo de 10 análisis anuales por Viroscope (HTS) frente a 1.600 análisis por qPCR en un vivero-huerto-exportadora.",
    body: [
      {
        type: "p",
        text: "En la búsqueda constante de mejorar la competitividad y rentabilidad de las cadenas productivas agrícolas, Multiplex y Viroscope —un método de análisis basado en secuenciación masiva— se han posicionado como herramientas fundamentales, con ventajas significativas para la integración exitosa de las operaciones vivero-huerto-exportadora.",
      },
      { type: "h3", text: "Comparación de costos: Viroscope (HTS) vs. qPCR" },
      {
        type: "p",
        text: "Un caso real en Chile compara dos metodologías distintas frente a un mismo desafío fitosanitario en huertos productivos:",
      },
      {
        type: "ul",
        items: [
          "HTS (secuenciación masiva): 10 análisis anuales, costo total anual de $3.000.000, costo promedio por análisis de $300.000.",
          "qPCR: 1.600 análisis anuales, costo total anual de $24.000.000, costo promedio por análisis de $15.000.",
        ],
      },
      { type: "h3", text: "Análisis de costo y eficiencia" },
      {
        type: "p",
        text: "HTS tiene un costo inicial por prueba individual significativamente mayor, pero ofrece una visión más completa y detallada del material genético, permitiendo identificar múltiples patógenos de forma simultánea. Aunque exige una mayor inversión inicial, resulta más costo-efectivo en el largo plazo para escenarios que requieren información de alta certeza.",
      },
      {
        type: "p",
        text: "qPCR presenta un costo menor por análisis individual, pero requiere un número de pruebas sustancialmente mayor. En este ejemplo, 1.600 análisis producen un gasto total considerablemente más elevado, además de un mayor riesgo de falsos positivos y negativos.",
      },
      { type: "h3", text: "Ventajas de HTS en el contexto agrícola" },
      {
        type: "ul",
        items: [
          "Diagnóstico integral: detecta múltiples patógenos simultáneamente, eliminando pruebas repetidas y separadas.",
          "Eficiencia de recursos: la menor frecuencia de análisis simplifica el muestreo y reduce el riesgo de contaminación cruzada.",
          "Alta certeza: mayor precisión y profundidad analítica, permitiendo el testeo de tejido sin depender de la estacionalidad.",
          "Menor error diagnóstico: reduce sustancialmente la probabilidad de falsos negativos y positivos frente a qPCR.",
        ],
      },
      {
        type: "p",
        text: "Realizar solo 10 análisis anuales de Viroscope (HTS), con un costo total de $3.000.000, entrega un diagnóstico de alta certeza más costo-eficiente que 1.600 análisis por qPCR que superan los $20.000.000. La elección entre metodologías depende de los requerimientos analíticos específicos y de la capacidad de inversión inicial — pero Viroscope y la secuenciación masiva representan un avance significativo en costo-eficiencia, aportando confianza a la verticalidad del sistema vivero-huerto-exportadora y abriendo nuevas oportunidades competitivas en el mercado.",
      },
    ],
  },
];

/** Tipos de organización para el formulario de contacto. */
export const organizationTypes = [
  "Productor / exportador agrícola",
  "Vivero o empresa semillera",
  "Laboratorio o certificadora",
  "Universidad o centro de investigación",
  "Otro",
] as const;
