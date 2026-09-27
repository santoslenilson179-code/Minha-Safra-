export default function Solucao() {
  const items = [
    {
      emoji: '💸',
      label: 'Gastei',
      detail: 'Adubos, combustível, mão de obra',
    },
    {
      emoji: '📦',
      label: 'Produzi',
      detail: 'Colheita e estoque colhido',
    },
    {
      emoji: '💰',
      label: 'Vendi',
      detail: 'Preço, quantidade e comprador',
    },
    {
      emoji: '📊',
      label: 'Meu resultado',
      detail: 'O que realmente sobrou',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F3EFEA] border-y border-stone-200/60 text-stone-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Sobrancelha */}
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-800 uppercase mb-3">
          A SOLUÇÃO
        </p>

        {/* Título */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-6 [text-wrap:balance]">
          Tudo o que importa.
          <br />
          <span className="text-emerald-900 font-semibold">Em um só lugar.</span>
        </h2>

        {/* Texto */}
        <p className="text-lg sm:text-xl text-stone-700 max-w-2xl mx-auto mb-16 leading-relaxed">
          O Minha Safra foi criado para deixar o controle da produção mais simples.
        </p>

        {/* 4 Blocos Visuais limpos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-white/90 rounded-2xl p-6 sm:p-8 border border-stone-200/70 shadow-sm flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1"
            >
              <span className="text-4xl sm:text-5xl mb-3 select-none" role="img" aria-label={item.label}>
                {item.emoji}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
