export default function Beneficios() {
  const benefits = [
    {
      emoji: '💸',
      title: 'Gastos',
      desc: 'Anote o que gastou.',
    },
    {
      emoji: '📦',
      title: 'Produção',
      desc: 'Registre o que produziu.',
    },
    {
      emoji: '💰',
      title: 'Vendas',
      desc: 'Guarde suas vendas.',
    },
    {
      emoji: '📊',
      title: 'Resultado',
      desc: 'Veja seus números reunidos.',
    },
    {
      emoji: '💬',
      title: 'Clientes',
      desc: 'Facilite o contato pelo WhatsApp.',
    },
    {
      emoji: '👨‍🌾',
      title: 'Equipe',
      desc: 'Organize seus contatos de trabalho.',
    },
  ];

  return (
    <section id="beneficios" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 [text-wrap:balance]">
            Feito para facilitar.
          </h2>
        </div>

        {/* 6 Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm flex flex-col justify-start items-start transition-transform hover:-translate-y-1"
            >
              <span className="text-4xl mb-4 select-none" role="img" aria-label={benefit.title}>
                {benefit.emoji}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-base sm:text-lg text-stone-600 leading-normal">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
