import { Check } from 'lucide-react';

interface OfertaProps {
  onOpenCheckout: () => void;
}

export default function Oferta({ onOpenCheckout }: OfertaProps) {
  const benefits = [
    'Registre seus gastos',
    'Registre sua produção',
    'Registre suas vendas',
    'Acompanhe seus números',
    'Organize clientes',
    'Facilite contatos pelo WhatsApp',
  ];

  return (
    <section id="oferta" className="py-24 sm:py-32 bg-[#0B1E13] text-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Card grande e centralizado */}
        <div className="bg-[#12281B] rounded-3xl p-8 sm:p-14 border border-emerald-800/60 shadow-2xl text-center max-w-2xl mx-auto">
          {/* Sobrancelha */}
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-3">
            ACESSO AO MINHA SAFRA
          </p>

          {/* Título */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 [text-wrap:balance]">
            Comece a organizar sua safra.
          </h2>

          {/* Preço muito grande */}
          <div className="my-8">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-3xl sm:text-4xl font-semibold text-emerald-400">R$</span>
              <span className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight tabular-nums">
                20
              </span>
            </div>
            {/* Texto */}
            <p className="text-base sm:text-lg text-emerald-200/90 font-medium mt-2">
              Pagamento único
            </p>
          </div>

          {/* Lista curta */}
          <div className="my-10 max-w-md mx-auto text-left space-y-3.5 border-y border-emerald-800/40 py-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-base sm:text-lg text-stone-200 font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Grande */}
          <div className="space-y-3">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto min-w-[280px] px-8 py-5 text-lg sm:text-xl font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-xl shadow-emerald-950/50 cursor-pointer active:scale-[0.98]"
            >
              QUERO O MINHA SAFRA
            </button>

            {/* Microcopy */}
            <p className="text-sm text-stone-400 font-normal">
              Comece a organizar sua safra pelo celular.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
