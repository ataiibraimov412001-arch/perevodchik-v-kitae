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
          src: "https://pub-3dc4056c77ee422a8efd619927049c0e.r2.dev/laminate-visit/master.m3u8",
          title: "Моменты посещения производства ламината",
          orientation: "portrait",
        },
        {
          src: "https://pub-3dc4056c77ee422a8efd619927049c0e.r2.dev/laminate-80/master.m3u8",
          title: "Ламинат на стадии 80% готовности",
          orientation: "portrait",
        },
        {
          src: "https://pub-3dc4056c77ee422a8efd619927049c0e.r2.dev/bathtubs/master.m3u8",
          title: "Как производятся ванны",
          orientation: "portrait",
        },
        {
          src: "https://pub-3dc4056c77ee422a8efd619927049c0e.r2.dev/warehouse/master.m3u8",
          title: "Осмотр складов",
          orientation: "portrait",
        },
      ]}
    />
  );
}
