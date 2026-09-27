export default function Simplicidade() {
  const features = [
    {
      symbol: 'Aa',
      label: 'LETRAS GRANDES',
      desc: 'Fácil de ler embaixo do sol ou no galpão.',
    },
    {
      symbol: '☝',
      label: 'BOTÕES FÁCEIS',
      desc: 'Áreas de toque amplas para quem está na lida.',
    },
    {
      symbol: '💬',
      label: 'PALAVRAS SIMPLES',
      desc: 'Sem jargões complicados de contabilidade.',
    },
    {
      symbol: '📱',
      label: 'FEITO PARA CELULAR',
      desc: 'Funciona rápido no aparelho que você já tem.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F3EFEA] border-y border-stone-200/60 text-stone-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4 [text-wrap:balance]">
          Você não precisa entender de sistemas.
        </h2>

        {/* Linha seguinte */}
        <p className="text-xl sm:text-2xl text-emerald-900 font-semibold mb-16">
          O Minha Safra foi feito para ser simples.
        </p>

        {/* 4 Características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-2xl font-bold text-stone-800 mb-4 select-none">
                {item.symbol}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-wider mb-2">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Texto final */}
        <p className="text-xl sm:text-2xl font-bold text-stone-800 tracking-tight">
          Abra. Registre. Continue seu trabalho.
        </p>
      </div>
    </section>
  );
}
