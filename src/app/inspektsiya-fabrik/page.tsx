import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/inspektsiya-fabrik",
  "Инспекция фабрик в Китае — проверка товара и производства",
  "Проверка фабрик и товара перед отправкой в Китае. Контроль качества, фото и видео отчёт. +86 157 1280 6041",
);

export default function InspektsiyaPage() {
  return (
    <ServicePage
      title="Инспекция фабрик в Китае"
      subtitle="Проверка фабрик и товара перед отправкой. Убедимся, что вы получите именно то, за что заплатили."
      bullets={[
        "Проверка производства и оборудования",
        "Контроль качества товара",
        "Фото и видео отчёт",
        "Сверка с заказом перед отгрузкой",
      ]}
      videos={[
        {
          src: "https://pub-3dc4056c77ee422a8efd619927049c0e.r2.dev/wallpaper-check/master.m3u8",
          title: "Проверяем обои на производстве",
          orientation: "portrait",
        },
        {
          src: "https://pub-3dc4056c77ee422a8efd619927049c0e.r2.dev/production-visit/master.m3u8",
          title: "Посещение производства и осмотр продукции",
          orientation: "portrait",
        },
        {
          src: "https://pub-3dc4056c77ee422a8efd619927049c0e.r2.dev/production-check/master.m3u8",
          title: "Осмотр продукции на производстве",
          orientation: "portrait",
        },
      ]}
    />
  );
}
