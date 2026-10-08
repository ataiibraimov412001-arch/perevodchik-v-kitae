import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/dlya-biznesa",
  "Китайский переводчик для бизнеса — сопровождение сделок",
  "Комплексное сопровождение бизнеса в Китае: поиск поставщиков, переговоры, контроль производства. +86 157 1280 6041",
);

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
