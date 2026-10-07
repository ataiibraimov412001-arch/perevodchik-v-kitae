import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Переводчик в Пекине — устный перевод и сопровождение",
  description:
    "Устный перевод в Пекине: переговоры, встречи, выставки и сопровождение. +86 157 1280 6041",
};

export default function PekinPage() {
  return (
    <ServicePage
      title="Переводчик в Пекине"
      subtitle="Устный перевод в столице Китая. Переговоры с поставщиками, деловые встречи и сопровождение."
      bullets={[
        "Переговоры и деловые встречи",
        "Сопровождение на предприятиях",
        "Выставки и конференции",
        "Туристическое сопровождение",
      ]}
      image="/images/pekin.jpg"
    />
  );
}
