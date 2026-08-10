"use client";

import { useState } from "react";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { organizationTypes } from "@/content/data";
import { site, web3formsKey } from "@/content/site";
import { cn } from "@/lib/cn";

type FieldErrors = Record<string, string>;

const initial = {
  nombre: "",
  empresa: "",
  correo: "",
  cultivo: "",
  tipoOrganizacion: "",
  mensaje: "",
};

type FormState = typeof initial;

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.nombre.trim()) errors.nombre = "Ingresa tu nombre.";
  if (!values.empresa.trim()) errors.empresa = "Ingresa el nombre de tu empresa u organización.";
  if (!values.correo.trim()) {
    errors.correo = "Ingresa tu correo.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.correo)) {
    errors.correo = "Ingresa un correo válido.";
  }
  if (!values.tipoOrganizacion) errors.tipoOrganizacion = "Selecciona un tipo de organización.";
  return errors;
}

const fieldBase =
  "w-full rounded-xl border bg-surface px-4 py-3 text-[15px] text-ink shadow-sm transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand/40";

function buildMailto(values: FormState) {
  const subject = encodeURIComponent(`Consulta desde el sitio — ${values.empresa || values.nombre}`);
  const body = encodeURIComponent(
    `Nombre: ${values.nombre}\nEmpresa: ${values.empresa}\nCorreo: ${values.correo}\nCultivo / especie: ${values.cultivo}\nTipo de organización: ${values.tipoOrganizacion}\n\nMensaje:\n${values.mensaje}`,
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [botcheck, setBotcheck] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }

    if (!web3formsKey) {
      window.location.href = buildMailto(values);
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `Nuevo contacto — Fitosanidad (${values.empresa || values.nombre})`,
          from_name: "Sitio web Multiplex Fitosanidad",
          email: values.correo,
          Nombre: values.nombre,
          Empresa: values.empresa,
          Correo: values.correo,
          "Cultivo / especie": values.cultivo,
          "Tipo de organización": values.tipoOrganizacion,
          Mensaje: values.mensaje,
          botcheck,
        }),
      });
      const data = await res.json().catch(() => ({ success: false }));
      if (!res.ok || !data.success) throw new Error("bad response");
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand/30 bg-brand-soft/60 p-8 text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
          <Icon.Check className="h-6 w-6" />
        </div>
        <p className="text-lg font-semibold text-ink">
          {web3formsKey ? "¡Gracias! Recibimos tu mensaje y te contactaremos a la brevedad." : "Se abrió tu cliente de correo con el mensaje listo para enviar."}
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-brand-strong hover:underline">
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <input
        type="text"
        name="botcheck"
        value={botcheck}
        onChange={(e) => setBotcheck(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nombre" label="Nombre" error={errors.nombre} required>
          <input
            id="field-nombre"
            type="text"
            autoComplete="name"
            className={cn(fieldBase, errors.nombre ? "border-red-400" : "border-line")}
            value={values.nombre}
            onChange={(e) => update("nombre", e.target.value)}
          />
        </Field>
        <Field id="empresa" label="Empresa u organización" error={errors.empresa} required>
          <input
            id="field-empresa"
            type="text"
            autoComplete="organization"
            className={cn(fieldBase, errors.empresa ? "border-red-400" : "border-line")}
            value={values.empresa}
            onChange={(e) => update("empresa", e.target.value)}
          />
        </Field>
        <Field id="correo" label="Correo" error={errors.correo} required>
          <input
            id="field-correo"
            type="email"
            autoComplete="email"
            className={cn(fieldBase, errors.correo ? "border-red-400" : "border-line")}
            value={values.correo}
            onChange={(e) => update("correo", e.target.value)}
          />
        </Field>
        <Field id="cultivo" label="Cultivo / especie de interés">
          <input
            id="field-cultivo"
            type="text"
            placeholder="Ej: uva de mesa, arándanos, cítricos…"
            className={cn(fieldBase, "border-line")}
            value={values.cultivo}
            onChange={(e) => update("cultivo", e.target.value)}
          />
        </Field>
        <Field id="tipoOrganizacion" label="Tipo de organización" error={errors.tipoOrganizacion} required>
          <select
            id="field-tipoOrganizacion"
            className={cn(fieldBase, "appearance-none", errors.tipoOrganizacion ? "border-red-400" : "border-line")}
            value={values.tipoOrganizacion}
            onChange={(e) => update("tipoOrganizacion", e.target.value)}
          >
            <option value="">Selecciona una opción</option>
            {organizationTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="mensaje" label="Mensaje">
        <textarea
          id="field-mensaje"
          rows={4}
          placeholder="Cuéntanos sobre tu proyecto o consulta fitosanitaria."
          className={cn(fieldBase, "resize-y border-line")}
          value={values.mensaje}
          onChange={(e) => update("mensaje", e.target.value)}
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Ocurrió un error al enviar. Intenta nuevamente o escríbenos directamente a {site.email}.
        </p>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          Tus datos se usan solo para responder tu consulta. No los compartimos con terceros.
        </p>
        <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
          {status !== "sending" && <ArrowRight />}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={`field-${id}`} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-brand-strong">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
