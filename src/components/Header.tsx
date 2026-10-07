"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SITE, CITIES, SERVICES } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Переводчик в Китае"
            width={1832}
            height={859}
            priority
            className="h-11 w-auto max-w-none shrink-0 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-x-6 whitespace-nowrap text-sm text-muted lg:flex">
          {CITIES.map((c) => (
            <Link key={c.href} href={c.href} className="hover:text-foreground">
              {c.label}
            </Link>
          ))}
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="hover:text-foreground">
              {s.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-lg border border-border p-2 lg:hidden"
            aria-label="Открыть меню"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-3 md:px-6">
            <Image
              src="/logo.png"
              alt="Переводчик в Китае"
              width={1832}
              height={859}
              className="h-10 w-auto max-w-none object-contain"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg border border-border p-2"
              aria-label="Закрыть меню"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-6 md:px-6">
            <p className="mb-2 text-sm font-semibold text-accent">Города</p>
            {CITIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-lg font-medium"
              >
                {c.label}
              </Link>
            ))}
            <p className="mb-2 mt-6 text-sm font-semibold text-accent">Услуги</p>
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-lg font-medium"
              >
                {s.label}
              </Link>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-full bg-whatsapp px-6 py-3 text-center font-semibold text-white"
            >
              Написать в WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
