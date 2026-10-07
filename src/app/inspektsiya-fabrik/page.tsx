import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Инспекция фабрик в Китае — проверка товара и производства",
  description:
    "Проверка фабрик и товара перед отправкой в Китае. Контроль качества, фото и видео отчёт. +86 157 1280 6041",
};

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
          src: "/videos-hls/wallpaper-check/master.m3u8",
          title: "Проверяем обои на производстве",
          orientation: "portrait",
        },
        {
          src: "/videos-hls/production-visit/master.m3u8",
          title: "Посещение производства и осмотр продукции",
          orientation: "portrait",
        },
        {
          src: "/videos-hls/production-check/master.m3u8",
          title: "Осмотр продукции на производстве",
          orientation: "portrait",
        },
      ]}
    />
  );
}
