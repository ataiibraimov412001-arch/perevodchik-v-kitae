import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Переводчик в Шанхае — устный перевод и сопровождение",
  description:
    "Устный перевод в Шанхае: бизнес-переговоры, выставки, деловые встречи. +86 157 1280 6041",
};

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
          src: "/videos-hls/disneyland/master.m3u8",
          title: "Туристическая поездка — посещение Диснейленда",
          orientation: "portrait",
        },
      ]}
    />
  );
}
