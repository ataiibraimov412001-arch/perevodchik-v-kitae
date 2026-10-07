import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Китайский переводчик для бизнеса — сопровождение сделок",
  description:
    "Комплексное сопровождение бизнеса в Китае: поиск поставщиков, переговоры, контроль производства. +86 157 1280 6041",
};

export default function DlyaBiznesaPage() {
  return (
    <ServicePage
      title="Китайский переводчик для бизнеса"
      subtitle="Комплексное сопровождение бизнеса в Китае: от поиска поставщиков до отгрузки товара."
      bullets={[
        "Поиск надёжных поставщиков",
        "Переговоры и заключение сделок",
        "Контроль производства",
        "Логистика и оформление документов",
      ]}
    />
  );
}
