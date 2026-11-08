"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyAccountButtonProps = {
  value: string;
};

export function CopyAccountButton({ value }: CopyAccountButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyAccount() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  const label =
    status === "copied"
      ? "Cuenta copiada"
      : status === "error"
        ? "No se pudo copiar"
        : "Copiar cuenta";

  return (
    <button className="gift__copy-button" type="button" onClick={copyAccount}>
      {status === "copied" ? (
        <Check aria-hidden="true" />
      ) : (
        <Copy aria-hidden="true" />
      )}
      <span aria-live="polite">{label}</span>
    </button>
  );
}