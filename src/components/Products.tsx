const products = [
  {
    emoji: "✨",
    category: "Уход за кожей",
    title: "Absolute CellActive",
    description:
      "Корейская косметика премиум-класса на основе клеточных технологий. Омоложение, увлажнение и сияние кожи.",
  },
  {
    emoji: "💊",
    category: "Нутрицевтика",
    title: "HemoHIM",
    description:
      "Уникальный растительный комплекс для иммунитета и жизненной энергии. Разработан корейскими учёными.",
  },
  {
    emoji: "🏡",
    category: "Товары для дома",
    title: "Atomy Home Care",
    description:
      "Экологичные средства для дома — безопасные для семьи и природы. Чистота без вреда для здоровья.",
  },
];

export default function Products() {
  return (
    <div id="products" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.4em] text-neutral-400 mb-4">Линейка продуктов</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Всё для вашего<br />здоровья и красоты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="border border-neutral-200 p-8 flex flex-col gap-4 hover:border-neutral-900 transition-colors duration-300"
            >
              <span className="text-4xl">{p.emoji}</span>
              <p className="uppercase text-xs tracking-widest text-neutral-400">{p.category}</p>
              <h3 className="text-xl font-bold text-neutral-900">{p.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{p.description}</p>
              <a
                href="https://wa.me/79146336788"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-sm uppercase tracking-wide border border-black px-4 py-2 text-center hover:bg-black hover:text-white transition-all duration-300"
              >
                Узнать цену
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
