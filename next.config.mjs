/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Exportación estática para GitHub Pages (genera ./out con HTML/CSS/JS).
  output: "export",
  // Con dominio propio (fitosanidad.multiplex.cl) el sitio va en la raíz, sin basePath.
  // URLs con barra final → cada página como carpeta/index.html (mejor en Pages).
  trailingSlash: true,
  images: {
    // Requerido en export: no hay servidor para optimizar imágenes.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
};

export default nextConfig;
