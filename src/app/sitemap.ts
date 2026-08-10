import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const paths = [
  "/",
  "/fitosanidad",
  "/porque-elegirnos",
  "/nuestros-servicios",
  "/diagnostico-por-pcr-multiplex",
  "/diagnostico-funcional-de-patogenos-virales",
  "/i-d-i",
  "/diagnosticos-custom-made",
  "/bacterias-no-cultivables-y-fastidiosas",
  "/noticias",
  "/contacto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(0),
  }));
}
