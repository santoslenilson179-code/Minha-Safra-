export default function ComoFunciona() {
  const steps = [
    {
      number: '01',
      action: 'ANOTE',
      description: 'Registre gastos, produção e vendas.',
    },
    {
      number: '02',
      action: 'ACOMPANHE',
      description: 'Veja seus registros organizados.',
    },
    {
      number: '03',
      action: 'ENTENDA',
      description: 'Acompanhe o resultado com base no que você registrou.',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 sm:py-32 bg-[#F3EFEA] border-y border-stone-200/60 text-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 [text-wrap:balance]">
            Três passos. Só isso.
          </h2>
        </div>

        {/* 3 Cards: Desktop horizontal 3-col, Mobile vertical 3-col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-stone-200/80 shadow-sm flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-800 tracking-tight block mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-wide uppercase mb-3">
                  {step.action}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
