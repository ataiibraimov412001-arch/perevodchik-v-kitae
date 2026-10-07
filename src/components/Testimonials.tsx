const TESTIMONIALS = [
  {
    text: "Работа с сервисом оставляет только положительные впечатления. Компетентные, профессиональные переводчики — вежливые, пунктуальные, с удовольствием общаются. Работать легко и комфортно.",
    name: "Александр Таликов",
    date: "16.12.2024",
  },
  {
    text: "Настоящие профессионалы с отличным знанием языка и города. Помогли сделать нашу рабочую поездку продуктивной. Однозначно рекомендую.",
    name: "Валерия",
    date: "23.11.2024",
  },
  {
    text: "Будем всем знакомым и в турфирме только вас рекомендовать. Всем рассказываем про сервис и показываем фото из поездки. Думаю, ещё увидимся — в Шанхае, Бишкеке или Петербурге. Здоровья и счастья всей команде!",
    name: "Наталья",
    date: "24.09.2026",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-bold md:text-3xl">Отзывы клиентов</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6"
            >
              <p className="flex-1 text-muted">{t.text}</p>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-muted">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
