/**
 * Set de iconos de línea propios (sin dependencias externas).
 * Todos heredan `currentColor` y aceptan className.
 */
import { cn } from "@/lib/cn";

type IconProps = { className?: string };

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-5 w-5", className)}
    >
      {children}
    </svg>
  );
}

export const Icon = {
  Leaf: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M20 4C10 4 4 10 4 18v2h2c8 0 14-6 14-14V4Z" />
      <path d="M8 20c2-4 6-8 12-12" />
    </Svg>
  ),
  Virus: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="12" cy="12" r="5.5" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </Svg>
  ),
  Bacteria: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M9 5a3 3 0 0 1 6 0v2a3 3 0 0 1 3 3h1a2 2 0 0 1 0 4h-1a3 3 0 0 1-3 3v1a2 2 0 0 1-4 0v-1H9a3 3 0 0 1-3-3H5a2 2 0 0 1 0-4h1a3 3 0 0 1 3-3V5Z" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </Svg>
  ),
  Sequence: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M4 6h9M4 12h16M4 18h12" />
      <circle cx="18" cy="6" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="8" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="16" cy="18" r="1.4" fill="currentColor" stroke="none" />
    </Svg>
  ),
  Microscope: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M9 18h9M11.5 18v-3.5M8 14.5h5l-1-6-2.5-2-1 1.6 2.5 1.7-1 5.7" />
      <path d="M6.5 8.5 5 7M6 6l3 2" />
      <circle cx="7.5" cy="7.5" r="1.3" />
    </Svg>
  ),
  Beaker: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M9 3h6M10 3v6l-5 8a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-8V3" />
      <path d="M7 15h10" />
    </Svg>
  ),
  Shield: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  ),
  Layers: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="m3 13 9 5 9-5M3 8v5m18-5v5" />
    </Svg>
  ),
  Growth: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M4 19h16M6 16l4-5 3 3 5-7" />
      <path d="M18 7h2v2" />
    </Svg>
  ),
  Clock: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" />
    </Svg>
  ),
  Target: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </Svg>
  ),
  Globe: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.4 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.4-3.8-8.5S9.5 5.8 12 3.5Z" />
    </Svg>
  ),
  Report: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M13 3v5h5M8 13h8M8 17h5" />
    </Svg>
  ),
  Api: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M9 8 5 12l4 4m6-8 4 4-4 4M13 6l-2 12" />
    </Svg>
  ),
  Users: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5M16 5.5a3 3 0 0 1 0 5.5m5 9c0-2.5-1.8-4.3-4-4.8" />
    </Svg>
  ),
  Mail: ({ className }: IconProps) => (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  ),
  Check: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="m5 12 4.5 4.5L19 7" />
    </Svg>
  ),
  Sparkles: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </Svg>
  ),
} as const;

export type IconName = keyof typeof Icon;
