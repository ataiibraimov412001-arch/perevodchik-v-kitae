import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/shanghai",
  "Переводчик в Шанхае — устный перевод и сопровождение",
  "Устный перевод в Шанхае: бизнес-переговоры, выставки, деловые встречи. +86 157 1280 6041",
);

export default function ShanghaiPage() {
  return (
    <ServicePage
      title="Переводчик в Шанхае"
      subtitle="Устный перевод в финансовой столице Китая. Переговоры, выставки, деловые встречи и сопровождение."
      bullets={[
        "Бизнес-переговоры с китайскими партнёрами",
        "Сопровождение на выставках и конференциях",
        "Деловые встречи и презентации",
        "Гид по городу для гостей",
      ]}
      image="/images/shanghai.jpg"
      videos={[
        {
          src: "https://pub-3dc4056c77ee422a8efd619927049c0e.r2.dev/disneyland/master.m3u8",
          title: "Туристическая поездка — посещение Диснейленда",
          orientation: "portrait",
        },
      ]}
    />
  );
}
