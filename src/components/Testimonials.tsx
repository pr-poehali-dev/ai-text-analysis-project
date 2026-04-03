const testimonials = [
  {
    name: "Анна К.",
    city: "Москва",
    text: "Начала пользоваться косметикой Atomy полгода назад — кожа стала заметно лучше. Подруги спрашивают секрет!",
  },
  {
    name: "Михаил Р.",
    city: "Новосибирск",
    text: "HemoHIM принимаю уже год. Чувствую себя бодрее, иммунитет стал крепче. Очень доволен качеством.",
  },
  {
    name: "Светлана В.",
    city: "Владивосток",
    text: "Средства для уборки — просто находка. Всё отмывает, при этом безопасно для детей и домашних животных.",
  },
  {
    name: "Олег Д.",
    city: "Екатеринбург",
    text: "Скептически относился к корейским продуктам, но Atomy изменил моё мнение. Соотношение цена-качество на высоте.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.4em] text-neutral-500 mb-4">
          Отзывы клиентов
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Они уже выбрали<br />Atomy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-neutral-50 p-8 flex flex-col gap-4 border border-neutral-100"
            >
              <p className="text-2xl text-neutral-300">"</p>
              <p className="text-neutral-700 leading-relaxed">{t.text}</p>
              <div className="mt-auto pt-4 border-t border-neutral-200 flex justify-between items-center">
                <span className="font-bold text-neutral-900">{t.name}</span>
                <span className="text-xs uppercase tracking-widest text-neutral-400">{t.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
