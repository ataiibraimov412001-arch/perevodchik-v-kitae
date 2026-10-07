import Link from "next/link";
import { SITE, CITIES, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">
              Переводчик<span className="text-accent"> в Китае</span>
            </p>
            <p className="mt-2 text-sm text-muted">
              Устный перевод, переговоры, выставки и сопровождение фабрик по
              всему Китаю.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Города</p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              {CITIES.map((c) => (
                <Link key={c.href} href={c.href} className="hover:text-foreground">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Услуги</p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href} className="hover:text-foreground">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <span>© 2026 Переводчик в Китае</span>
          <div className="flex gap-4">
            <a href={`tel:${SITE.phoneRaw}`} className="hover:text-foreground">
              {SITE.phoneDisplay}
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              WhatsApp
            </a>
            <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
