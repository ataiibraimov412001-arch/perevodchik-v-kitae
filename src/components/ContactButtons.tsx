import { SITE } from "@/lib/site";
import { MessageCircle, Phone, Send } from "lucide-react";

export function ContactButtons({ light = false }: { light?: boolean }) {
  const secondary = light
    ? "border-white/70 text-white hover:bg-white hover:text-foreground"
    : "border-border text-foreground hover:border-accent hover:text-accent";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white hover:opacity-90"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
      <a
        href={`tel:${SITE.phoneRaw}`}
        className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold ${secondary}`}
      >
        <Phone className="h-5 w-5" />
        {SITE.phoneDisplay}
      </a>
      <a
        href={SITE.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold ${secondary}`}
      >
        <Send className="h-5 w-5" />
        Telegram
      </a>
    </div>
  );
}
