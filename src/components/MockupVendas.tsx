import { Check, DollarSign, UserCheck, Calculator } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import FeatureShowcase from './FeatureShowcase';

export default function MockupVendas() {
  const phoneContent = (
    <div className="flex-1 flex flex-col justify-between py-2">
      {/* Top Header */}
      <div className="pb-3 border-b border-stone-200 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
          + Registrar Venda
        </span>
        <span className="text-[11px] text-stone-500 font-medium">Entrou Dinheiro</span>
      </div>

      {/* Form Fields */}
      <div className="space-y-3.5 my-3">
        {/* Produto vendido */}
        <div>
          <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1">
            Produto
          </label>
          <div className="p-3 bg-white rounded-xl border-2 border-stone-200 text-sm font-bold text-stone-900 flex items-center gap-2 shadow-xs">
            <span className="text-xl">🥭</span>
            <span>Manga Palmer</span>
          </div>
        </div>

        {/* Quantidade e Preço Unitário */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1">
              Quantidade
            </label>
            <div className="p-3 bg-white rounded-xl border-2 border-stone-200 text-lg font-extrabold text-stone-900 tabular-nums shadow-xs">
              10 kg
            </div>
          </div>
          <div>
            <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1">
              Preço / kg
            </label>
            <div className="p-3 bg-white rounded-xl border-2 border-stone-200 text-lg font-extrabold text-emerald-800 tabular-nums shadow-xs">
              R$ 25,00
            </div>
          </div>
        </div>

        {/* Total da Venda Calculado */}
        <div className="p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-400/80 text-center shadow-xs">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-900 mb-1">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            <span>10 kg × R$ 25,00 = Total da Venda</span>
          </div>
          <span className="text-3xl font-extrabold text-emerald-900 tabular-nums tracking-tight block">
            R$ 250,00
          </span>
        </div>

        {/* Comprador */}
        <div>
          <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1 flex items-center gap-1">
            <UserCheck className="w-3 h-3 text-stone-500" />
            Comprador (opcional)
          </label>
          <div className="p-2.5 bg-white rounded-xl border border-stone-200 text-xs font-bold text-stone-800 shadow-xs">
            Hortifrúti Central
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="pt-2">
        <button
          type="button"
          className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Confirmar Venda</span>
        </button>
      </div>
    </div>
  );

  return (
    <FeatureShowcase
      eyebrow="SUAS VENDAS"
      title={
        <>
          Vendeu?
          <br />
          <span className="text-emerald-900 font-semibold">Registre também.</span>
        </>
      }
      description="Informe a quantidade e o valor da venda. O Minha Safra faz o cálculo com os dados registrados."
      imageSide="right"
      backgroundVariant="cream"
      mockup={<PhoneFrame variant="light" badge="Tela de Vendas">{phoneContent}</PhoneFrame>}
      discreetNote="Exemplo demonstrativo."
    />
  );
}
