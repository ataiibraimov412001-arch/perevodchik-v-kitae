import type { Metadata } from "next";
import { SITE } from "@/lib/site";

const OG_IMAGE = { url: "/logo.png", width: 1832, height: 859, alt: SITE.name };

export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: SITE.name,
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
