import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Сопровождение переговоров с китайскими поставщиками",
  description:
    "Профессиональный устный перевод на переговорах с китайскими поставщиками. +86 157 1280 6041",
};

export default function PeregovoryPage() {
  return (
    <ServicePage
      title="Сопровождение переговоров с китайскими поставщиками"
      subtitle="Профессиональный устный перевод на переговорах. Поможем понять менталитет и добиться выгодных условий."
      bullets={[
        "Устный перевод на переговорах",
        "Подготовка к встрече",
        "Учёт китайского менталитета",
        "Фиксация договорённостей",
      ]}
      videos={[
        {
          src: "/videos-hls/laminate-visit/master.m3u8",
          title: "Моменты посещения производства ламината",
          orientation: "portrait",
        },
        {
          src: "/videos-hls/laminate-80/master.m3u8",
          title: "Ламинат на стадии 80% готовности",
          orientation: "portrait",
        },
        {
          src: "/videos-hls/bathtubs/master.m3u8",
          title: "Как производятся ванны",
          orientation: "portrait",
        },
        {
          src: "/videos-hls/warehouse/master.m3u8",
          title: "Осмотр складов",
          orientation: "portrait",
        },
      ]}
    />
  );
}
