import fechamentoImg from '../assets/images/fechamento_rural_sunset_1790529907451.jpg';

interface FechamentoProps {
  onOpenCheckout: () => void;
}

export default function Fechamento({ onOpenCheckout }: FechamentoProps) {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center text-white">
      {/* Background photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={fechamentoImg}
          alt="Paisagem de plantação rural ao entardecer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark forest-green overlay */}
        <div className="absolute inset-0 bg-[#06140B]/85 sm:bg-[#08180E]/80 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
          Sua safra já dá trabalho demais.
        </h2>

        {/* Complemento */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-emerald-200 mb-6">
          Organizar seus números não precisa dar.
        </p>

        {/* Texto */}
        <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Gastos, produção e vendas organizados de forma simples.
        </p>

        {/* Preço e CTA */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl text-emerald-300 font-semibold">R$</span>
            <span className="text-5xl sm:text-6xl font-extrabold text-white tabular-nums tracking-tight">
              20
            </span>
            <span className="text-sm sm:text-base text-emerald-200/90 font-medium">
              / Pagamento único
            </span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto min-w-[280px] px-8 py-5 text-lg sm:text-xl font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-2xl shadow-emerald-950/60 cursor-pointer active:scale-[0.98] mt-4"
          >
            QUERO O MINHA SAFRA
          </button>
        </div>
      </div>
    </section>
  );
}
