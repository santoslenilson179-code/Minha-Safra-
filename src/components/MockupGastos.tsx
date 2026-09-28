import { Check, Fuel, Calendar, Tag } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import FeatureShowcase from './FeatureShowcase';

export default function MockupGastos() {
  const phoneContent = (
    <div className="flex-1 flex flex-col justify-between py-2">
      {/* Top Header */}
      <div className="pb-3 border-b border-stone-200 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded">
          - Registrar Gasto
        </span>
        <span className="text-[11px] text-stone-500 font-medium">Safra 2026</span>
      </div>

      {/* Form Fields */}
      <div className="space-y-3.5 my-3">
        {/* Categoria */}
        <div>
          <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1 flex items-center gap-1">
            <Tag className="w-3 h-3 text-stone-500" />
            Categoria
          </label>
          <div className="p-3 bg-white rounded-xl border-2 border-stone-200 text-sm font-semibold text-stone-800 flex items-center gap-2 shadow-xs">
            <Fuel className="w-4 h-4 text-orange-600" />
            <span>Combustível trator</span>
          </div>
        </div>

        {/* Valor */}
        <div>
          <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1">
            Valor do Gasto
          </label>
          <div className="p-3 bg-white rounded-xl border-2 border-red-200 text-2xl font-extrabold text-stone-900 tabular-nums flex items-baseline justify-between shadow-xs">
            <span>R$ 200,00</span>
            <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Despesa</span>
          </div>
        </div>

        {/* Data */}
        <div>
          <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-stone-500" />
            Data
          </label>
          <div className="p-2.5 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 shadow-xs">
            Hoje · 28 de Setembro
          </div>
        </div>

        {/* Observação rápida */}
        <div>
          <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1">
            Anotação (opcional)
          </label>
          <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 italic">
            Abastecimento antes da aplicação no talhão 3
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
          <span>Salvar Gasto</span>
        </button>
      </div>
    </div>
  );

  return (
    <FeatureShowcase
      eyebrow="SEUS GASTOS"
      title={
        <>
          Gastou?
          <br />
          <span className="text-emerald-900 font-semibold">Anote na hora.</span>
        </>
      }
      description="Combustível, diária, adubo, transporte e outros gastos ficam registrados na sua safra."
      imageSide="right"
      backgroundVariant="cream"
      mockup={<PhoneFrame variant="light" badge="Tela de Gastos">{phoneContent}</PhoneFrame>}
      discreetNote="Exemplo demonstrativo."
    />
  );
}
