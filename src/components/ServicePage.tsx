import Image from "next/image";
import { SITE } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";
import { ContactButtons } from "./ContactButtons";
import { Testimonials } from "./Testimonials";
import { VideoPlayer } from "./VideoPlayer";

export interface PageVideo {
  src: string;
  title: string;
  orientation?: "portrait" | "landscape";
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  bullets: string[];
  videos?: PageVideo[];
  image?: string;
}

export function ServicePage({ title, subtitle, bullets, videos, image }: ServicePageProps) {
  return (
    <main>
      {image ? (
        <section className="relative border-b border-border">
          <div className="absolute inset-0">
            <Image src={image} alt={title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/55" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">{subtitle}</p>
            <p className="mt-6 text-xl font-semibold text-white">{SITE.price}</p>
            <div className="mt-8">
              <ContactButtons light />
            </div>
          </div>
        </section>
      ) : (
        <section className="border-b border-border py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
            <p className="mt-6 text-xl font-semibold text-accent">{SITE.price}</p>
            <div className="mt-8">
              <ContactButtons />
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-xl font-bold md:text-2xl">Что входит</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {bullets.map((b) => (
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

      {videos && videos.length > 0 && (
        <section className="border-t border-border py-12">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-xl font-bold md:text-2xl">Моменты нашей работы</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {videos.map((v) => {
                const portrait = v.orientation === "portrait";
                return (
                  <figure
                    key={v.src}
                    className={`overflow-hidden rounded-2xl border border-border bg-black ${
                      portrait ? "mx-auto w-full max-w-sm" : "w-full"
                    }`}
                  >
                    <VideoPlayer src={v.src} portrait={portrait} />
                    <figcaption className="bg-white p-4 text-sm text-muted">
                      {v.title}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Testimonials />
    </main>
  );
}
