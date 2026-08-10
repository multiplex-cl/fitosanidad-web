import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Marca Multiplex (idéntica a multiplex.bio) + sufijo "Fitosanidad" para
 * distinguir la línea de negocio sin fragmentar el sistema de diseño.
 */
export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-ink";
  const mark = variant === "light" ? "text-white" : "text-brand";
  return (
    <Link
      href="/"
      aria-label="Multiplex Fitosanidad"
      className={cn("inline-flex items-center gap-2.5 font-display", className)}
    >
      <LogoMark className={cn("h-8 w-8", mark)} />
      <span className={cn("text-[1.3rem] font-bold uppercase tracking-[0.02em]", text)}>
        Multiplex
        <span className={cn("ml-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em]", variant === "light" ? "text-white/60" : "text-muted")}>
          Fitosanidad
        </span>
      </span>
    </Link>
  );
}

const BARS: [number, number][] = [
  [24.5, 15.5],
  [28.1, 11.9],
  [31.8, 8.2],
  [15.5, 15.5],
  [11.9, 11.9],
  [8.2, 8.2],
  [24.5, 24.5],
  [28.1, 28.1],
  [31.8, 31.8],
  [15.5, 24.5],
  [11.9, 28.1],
  [8.2, 31.8],
];

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      {BARS.map(([cx, cy], i) => (
        <rect key={i} x={cx - 3.6} y={cy - 1.45} width={7.2} height={2.9} rx={1.45} fill="currentColor" />
      ))}
    </svg>
  );
}
