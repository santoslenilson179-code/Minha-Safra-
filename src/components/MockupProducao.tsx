import { Check, Package, Layers, Calendar } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import FeatureShowcase from './FeatureShowcase';

export default function MockupProducao() {
  const phoneContent = (
    <div className="flex-1 flex flex-col justify-between py-2">
      {/* Top Header */}
      <div className="pb-3 border-b border-stone-200 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
          📦 Registrar Colheita
        </span>
        <span className="text-[11px] text-stone-500 font-medium">Lote Atual</span>
      </div>

      {/* Form Fields */}
      <div className="space-y-3.5 my-3">
        {/* Produto colhido */}
        <div>
          <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1">
            Cultura / Produto
          </label>
          <div className="p-3 bg-white rounded-xl border-2 border-stone-200 text-sm font-bold text-stone-900 flex items-center gap-2 shadow-xs">
            <span className="text-xl">🥭</span>
            <span>Manga Palmer</span>
          </div>
        </div>

        {/* Quantidade colhida */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1">
              Quantidade
            </label>
            <div className="p-3 bg-white rounded-xl border-2 border-emerald-300 text-xl font-extrabold text-stone-900 tabular-nums shadow-xs">
              800
            </div>
          </div>
          <div>
            <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1">
              Unidade
            </label>
            <div className="p-3 bg-stone-100 rounded-xl border border-stone-200 text-sm font-bold text-stone-800 flex items-center justify-center">
              kg (quilos)
            </div>
          </div>
        </div>

        {/* Talhão / Lote */}
        <div>
          <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1 flex items-center gap-1">
            <Layers className="w-3 h-3 text-stone-500" />
            Origem / Talhão
          </label>
          <div className="p-2.5 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 shadow-xs">
            Pomar Norte · Lote 02
          </div>
        </div>

        {/* Resumo do estoque */}
        <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/80 flex items-center justify-between">
          <span className="text-xs font-medium text-emerald-950">Pronto para venda</span>
          <span className="text-sm font-extrabold text-emerald-800 tabular-nums">800 kg colhidos</span>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="pt-2">
        <button
          type="button"
          className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Registrar Colheita</span>
        </button>
      </div>
    </div>
  );

  return (
    <FeatureShowcase
      eyebrow="SUA PRODUÇÃO"
      title={
        <>
          Colheu?
          <br />
          <span className="text-emerald-900 font-semibold">Registre.</span>
        </>
      }
      description="Anote quanto foi produzido e mantenha os números da safra organizados."
      imageSide="left"
      backgroundVariant="sand"
      mockup={<PhoneFrame variant="light" badge="Tela de Produção">{phoneContent}</PhoneFrame>}
      discreetNote="Exemplo demonstrativo."
    />
  );
}
