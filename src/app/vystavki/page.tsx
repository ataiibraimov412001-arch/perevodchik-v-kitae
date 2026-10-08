import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/vystavki",
  "Переводчик на выставке в Китае — Кантонская ярмарка и другие",
  "Сопровождение на выставках в Китае: Кантонская ярмарка, подбор товаров, переговоры с поставщиками. +86 157 1280 6041",
);

export default function VystavkiPage() {
  return (
    <ServicePage
      title="Переводчик на выставке в Китае"
      subtitle="Сопровождение на Кантонской ярмарке и других выставках. Поможем найти товары и договориться с поставщиками."
      bullets={[
        "Сопровождение на стендах и павильонах",
        "Перевод переговоров с поставщиками",
        "Подбор товаров и производителей",
        "Сбор контактов и прайсов",
      ]}
      videos={[
        {
          src: "https://pub-3dc4056c77ee422a8efd619927049c0e.r2.dev/underwater-robot/master.m3u8",
          title: "Робот для подводных осмотров",
          orientation: "portrait",
        },
        {
          src: "https://pub-3dc4056c77ee422a8efd619927049c0e.r2.dev/soldering-expo/master.m3u8",
          title: "Учимся паять детали прямо на выставке",
          orientation: "portrait",
        },
      ]}
    />
  );
}
