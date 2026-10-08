import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/guangzhou",
  "Переводчик в Гуанчжоу — устный перевод и сопровождение",
  "Устный перевод в Гуанчжоу: Кантонская ярмарка, оптовые рынки, проверка фабрик. +86 157 1280 6041",
);

export default function GuangzhouPage() {
  return (
    <ServicePage
      title="Переводчик в Гуанчжоу"
      subtitle="Устный перевод и сопровождение в столице оптовой торговли Китая. Выставки, рынки, фабрики — поможем на каждом этапе."
      bullets={[
        "Сопровождение на Кантонской ярмарке",
        "Перевод на оптовых рынках",
        "Проверка фабрик и товара",
        "Помощь с закупками и логистикой",
      ]}
      image="/images/guangzhou.jpg"
    />
  );
}
