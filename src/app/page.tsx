import Link from "next/link";
import { SITE, CITIES, SERVICES } from "@/lib/site";
import { ContactButtons } from "@/components/ContactButtons";
import { Testimonials } from "@/components/Testimonials";
import { CheckCircle2, MapPin, Briefcase } from "lucide-react";

const BULLETS = [
  "Устный перевод на переговорах и деловых встречах",
  "Сопровождение на выставках и оптовых рынках",
  "Инспекция и проверка фабрик перед отгрузкой",
  "Гид-переводчик для поездок и закупок",
  "Помощь с ВЭД, логистикой и документами",
  "8+ лет опыта работы в Китае",
];

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Переводчик с китайского на русский в Китае
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Устный перевод, сопровождение переговоров и выставок. Работаем по
            всему Китаю — Гуанчжоу, Шанхай, Пекин и другие города.
          </p>
          <p className="mt-6 text-xl font-semibold text-accent">{SITE.price}</p>
          <div className="mt-8">
            <ContactButtons />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2 text-lg font-bold">
                <MapPin className="h-5 w-5 text-accent" />
                Города
              </div>
              <div className="flex flex-col gap-2">
                {CITIES.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="group flex items-center justify-between rounded-xl border border-border px-5 py-4 font-medium hover:border-accent"
                  >
                    {c.label}
                    <span className="text-muted group-hover:text-accent">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-lg font-bold">
                <Briefcase className="h-5 w-5 text-accent" />
                Услуги
              </div>
              <div className="flex flex-col gap-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group flex items-center justify-between rounded-xl border border-border px-5 py-4 font-medium hover:border-accent"
                  >
                    {s.label}
                    <span className="text-muted group-hover:text-accent">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-xl font-bold md:text-2xl">Что мы делаем</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {BULLETS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-border p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
