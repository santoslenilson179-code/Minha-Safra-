import { ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign, Wallet } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import FeatureShowcase from './FeatureShowcase';

export default function MockupResultado() {
  const phoneContent = (
    <div className="flex-1 flex flex-col justify-between py-2 text-stone-900">
      {/* Top Header */}
      <div className="pb-3 border-b border-stone-200/80 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
          Meu Resultado
        </span>
        <span className="text-[11px] text-stone-500 font-medium">Safra Atual</span>
      </div>

      <div className="space-y-4 my-3">
        {/* Big Highlight Box: O que sobrou */}
        <div className="bg-[#12281B] text-white p-5 rounded-2xl shadow-md text-center border border-emerald-700/50">
          <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold block mb-1">
            Sobrou da Safra
          </span>
          <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums mb-1">
            + R$ 29.300,00
          </div>
          <span className="text-[11px] text-emerald-200/80 font-medium block">
            Cálculo com base no que você registrou
          </span>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-800 block">Total de Vendas</span>
                <span className="text-[10px] text-stone-500 block">Entradas registradas</span>
              </div>
            </div>
            <span className="text-base font-extrabold text-emerald-800 tabular-nums">
              R$ 48.500,00
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xs">
                <ArrowDownRight className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-800 block">Total de Gastos</span>
                <span className="text-[10px] text-stone-500 block">Despesas registradas</span>
              </div>
            </div>
            <span className="text-base font-extrabold text-orange-700 tabular-nums">
              R$ 19.200,00
            </span>
          </div>
        </div>

        {/* Small note */}
        <div className="p-3 bg-stone-100 rounded-xl text-center text-xs text-stone-600 font-medium">
          Atualizado a cada novo registro inserido
        </div>
      </div>

      {/* Button */}
      <div className="pt-2">
        <button
          type="button"
          className="w-full py-3 bg-stone-900 text-white rounded-xl text-xs font-bold shadow-sm"
        >
          Ver Extrato Completo
        </button>
      </div>
    </div>
  );

  {/* Floating mini cards showing actual data points */}
  const floatingCard = (
    <div className="space-y-3 max-w-[210px]">
      <div className="p-3.5 rounded-2xl bg-white text-stone-900 shadow-xl border border-stone-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base">💰</span>
          <span className="text-xs font-bold text-stone-700">Total vendido</span>
        </div>
        <div className="text-lg font-extrabold text-emerald-800 tabular-nums">
          R$ 48.500,00
        </div>
      </div>

      <div className="p-3.5 rounded-2xl bg-white text-stone-900 shadow-xl border border-stone-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base">💸</span>
          <span className="text-xs font-bold text-stone-700">Total gasto</span>
        </div>
        <div className="text-lg font-extrabold text-orange-700 tabular-nums">
          R$ 19.200,00
        </div>
      </div>
    </div>
  );

  return (
    <FeatureShowcase
      eyebrow="SEUS NÚMEROS"
      title={
        <span className="text-stone-100">
          Veja sua safra com mais clareza.
        </span>
      }
      description="Gastos e vendas reunidos para você acompanhar o resultado com base no que registrou."
      imageSide="right"
      backgroundVariant="forest"
      mockup={<PhoneFrame variant="light" badge="Tela Meu Resultado">{phoneContent}</PhoneFrame>}
      floatingCard={floatingCard}
      discreetNote="Exemplo demonstrativo."
    />
  );
}
