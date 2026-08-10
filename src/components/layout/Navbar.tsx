"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button, ArrowRight } from "@/components/ui/Button";
import { primaryNav } from "@/content/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition duration-300",
        scrolled ? "border-b border-line bg-surface/85 backdrop-blur-md" : "border-b border-transparent bg-surface/0",
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-[72px]" aria-label="Principal">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition",
                    active ? "text-brand-strong" : "text-muted hover:text-ink",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown((v) => (v === item.label ? null : v))}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown((v) => (v === item.label ? null : item.label))}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition",
                    active ? "text-brand-strong" : "text-muted hover:text-ink",
                  )}
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition", isOpen && "rotate-180")} />
                </button>
                <div
                  className={cn(
                    "absolute left-0 top-full z-10 w-72 pt-2 transition",
                    isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                  )}
                >
                  <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-lift">
                    <Link
                      href={item.href}
                      className="block border-b border-line bg-mist px-4 py-3 text-sm font-semibold text-ink hover:text-brand-strong"
                    >
                      {item.label}
                      {item.description && <span className="mt-0.5 block text-xs font-normal text-muted">{item.description}</span>}
                    </Link>
                    <ul className="p-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-xl px-3 py-2.5 text-sm text-ink transition hover:bg-mist hover:text-brand-strong"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contacto" size="md">
            Habla con un experto
            <ArrowRight />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>

      <div id="mobile-menu" className={cn("lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          className={cn(
            "fixed inset-x-0 top-16 z-40 origin-top border-b border-line bg-surface transition duration-200",
            open ? "opacity-100" : "-translate-y-2 opacity-0",
          )}
        >
          <div className="container-x max-h-[calc(100vh-4rem)] overflow-y-auto py-5">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn("flex flex-col rounded-xl px-4 py-3 transition", active ? "bg-brand-soft" : "hover:bg-mist")}
                    >
                      <span className={cn("text-base font-semibold", active ? "text-brand-strong" : "text-ink")}>{item.label}</span>
                      {item.description && <span className="mt-0.5 text-sm text-muted">{item.description}</span>}
                    </Link>
                    {item.children && (
                      <ul className="ml-4 flex flex-col gap-0.5 border-l border-line pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="block rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-mist hover:text-ink">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-5">
              <Button href="/contacto" size="lg" className="w-full">
                Habla con un experto
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="m5.5 8 4.5 4.5L14.5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
