"use client";

import Image from "next/image";
import { useEffect } from "react";

export function SiteHeader() {
  useEffect(() => {
    const updateHeader = () => {
      const hasScrolled = window.scrollY > 40;
      document.body.classList.toggle("has-scrolled", hasScrolled);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateHeader);
      document.body.classList.remove("has-scrolled");
    };
  }, []);

  return (
    <header className="site-header">
      <a className="logo-link" href="#inicio" aria-label="Jes y Juan, volver al inicio">
        <Image
          className="header-logo"
          src="/images/logoBodaNegro.png"
          alt="Jes y Juan"
          width={153}
          height={102}
          priority
        />
      </a>
    </header>
  );
}