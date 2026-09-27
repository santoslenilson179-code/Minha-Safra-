import { useState } from 'react';
import { ArrowDown, Check, TrendingUp, DollarSign, Package, Fuel } from 'lucide-react';

export default function Demonstracao() {
  const [activeTab, setActiveTab] = useState<'gasto' | 'venda' | 'resultado'>('gasto');

  return (
    <section id="demonstracao" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-800 uppercase mb-3">
            NA PRÁTICA
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15] [text-wrap:balance]">
            Você registra.
            <br />
            <span className="text-emerald-900 font-semibold">O Minha Safra organiza.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Demonstration interactive prompts */}
          <div className="lg:col-span-6 space-y-6">
            {/* Prompt 1 */}
            <div
              onClick={() => setActiveTab('gasto')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'gasto'
                  ? 'bg-white border-emerald-600 shadow-md ring-1 ring-emerald-500/20'
                  : 'bg-white/60 border-stone-200/80 hover:bg-white hover:border-stone-300'
              }`}
            >
              <p className="text-xl sm:text-2xl font-semibold text-stone-900 mb-2">
                “Gastou R$200 com combustível?”
              </p>
              <div className="flex items-center gap-2 text-stone-400 my-1">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 font-semibold text-sm">
                <span>Registrar gasto</span>
              </div>
            </div>

            {/* Prompt 2 */}
            <div
              onClick={() => setActiveTab('venda')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'venda'
                  ? 'bg-white border-emerald-600 shadow-md ring-1 ring-emerald-500/20'
                  : 'bg-white/60 border-stone-200/80 hover:bg-white hover:border-stone-300'
              }`}
            >
              <p className="text-xl sm:text-2xl font-semibold text-stone-900 mb-2">
                “Vendeu 500 kg?”
              </p>
              <div className="flex items-center gap-2 text-stone-400 my-1">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 font-semibold text-sm">
                <span>Registrar venda</span>
              </div>
            </div>

            {/* Prompt 3 */}
            <div
              onClick={() => setActiveTab('resultado')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'resultado'
                  ? 'bg-white border-emerald-600 shadow-md ring-1 ring-emerald-500/20'
                  : 'bg-white/60 border-stone-200/80 hover:bg-white hover:border-stone-300'
              }`}
            >
              <p className="text-xl sm:text-2xl font-semibold text-stone-900 mb-2">
                “Quer conferir seus números?”
              </p>
              <div className="flex items-center gap-2 text-stone-400 my-1">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 font-semibold text-sm">
                <span>Meu resultado</span>
              </div>
            </div>
          </div>

          {/* Real Phone App Mockup */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[340px] sm:max-w-[360px] bg-[#0E1A12] p-3.5 rounded-[44px] shadow-2xl shadow-stone-950/20 border-4 border-stone-700/60 ring-1 ring-black">
              {/* Phone Speaker & Camera Notch */}
              <div className="w-28 h-4 bg-stone-900 mx-auto rounded-full mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-stone-800"></div>
              </div>

              {/* Phone Screen Container */}
              <div className="bg-[#FAF8F5] rounded-[34px] p-4 text-stone-900 min-h-[490px] flex flex-col justify-between overflow-hidden shadow-inner">
                {/* App Screen Top Bar */}
                <div className="pb-3 border-b border-stone-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-md bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">
                      MS
                    </div>
                    <span className="font-bold text-sm text-stone-900 tracking-tight">Minha Safra</span>
                  </div>
                  <span className="text-[11px] font-medium text-stone-500">Safra 2026</span>
                </div>

                {/* Dynamic Screen Content */}
                <div className="py-4 flex-1">
                  {activeTab === 'gasto' && (
                    <div className="space-y-3.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Novo Registro</span>
                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">Gasto</span>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm space-y-3">
                        <div>
                          <label className="text-[11px] font-semibold text-stone-500 block mb-1">Qual foi o gasto?</label>
                          <div className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg border border-stone-200 text-sm font-medium text-stone-800">
                            <Fuel className="w-4 h-4 text-stone-500" />
                            <span>Combustível trator</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-stone-500 block mb-1">Quanto custou?</label>
                          <div className="p-2 bg-stone-50 rounded-lg border border-stone-200 text-lg font-bold text-stone-900 tabular-nums">
                            R$ 200,00
                          </div>
                        </div>

                        <div className="pt-1">
                          <button
                            type="button"
                            className="w-full py-2.5 bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Salvar no controle</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'venda' && (
                    <div className="space-y-3.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Novo Registro</span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Venda</span>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm space-y-3">
                        <div>
                          <label className="text-[11px] font-semibold text-stone-500 block mb-1">Produto colhido</label>
                          <div className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg border border-stone-200 text-sm font-medium text-stone-800">
                            <Package className="w-4 h-4 text-emerald-700" />
                            <span>Manga Palmer</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Quantidade</label>
                            <div className="p-2 bg-stone-50 rounded-lg border border-stone-200 text-sm font-bold text-stone-800 tabular-nums">
                              500 kg
                            </div>
                          </div>
                          <div>
                            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Preço / kg</label>
                            <div className="p-2 bg-stone-50 rounded-lg border border-stone-200 text-sm font-bold text-stone-800 tabular-nums">
                              R$ 2,50
                            </div>
                          </div>
                        </div>

                        <div className="p-2 bg-emerald-50/80 rounded-lg border border-emerald-200/80 flex items-center justify-between">
                          <span className="text-xs font-medium text-emerald-950">Total da venda</span>
                          <span className="text-base font-bold text-emerald-800 tabular-nums">R$ 1.250,00</span>
                        </div>

                        <div className="pt-1">
                          <button
                            type="button"
                            className="w-full py-2.5 bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Registrar venda</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'resultado' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Meu Resultado</span>
                        <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          Atualizado
                        </span>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm space-y-2.5">
                        <div className="flex justify-between items-center py-1 border-b border-stone-100">
                          <span className="text-xs text-stone-600">Total de vendas</span>
                          <span className="text-sm font-bold text-emerald-700 tabular-nums">R$ 48.500,00</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-stone-100">
                          <span className="text-xs text-stone-600">Total de gastos</span>
                          <span className="text-sm font-bold text-red-600 tabular-nums">R$ 19.200,00</span>
                        </div>

                        <div className="pt-2">
                          <div className="bg-emerald-900 text-white p-3 rounded-lg text-center">
                            <span className="text-[11px] uppercase tracking-wider text-emerald-200 font-semibold block mb-0.5">
                              Sobrou da safra
                            </span>
                            <span className="text-xl font-extrabold text-white tabular-nums tracking-tight">
                              + R$ 29.300,00
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom App Navigation Bar inside phone */}
                <div className="pt-3 border-t border-stone-200/80 flex items-center justify-around text-[10px] font-semibold text-stone-500">
                  <button
                    onClick={() => setActiveTab('gasto')}
                    className={`flex flex-col items-center gap-1 ${activeTab === 'gasto' ? 'text-emerald-800' : 'text-stone-400'}`}
                  >
                    <DollarSign className="w-4 h-4" />
                    <span>Gastos</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('venda')}
                    className={`flex flex-col items-center gap-1 ${activeTab === 'venda' ? 'text-emerald-800' : 'text-stone-400'}`}
                  >
                    <Package className="w-4 h-4" />
                    <span>Vendas</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('resultado')}
                    className={`flex flex-col items-center gap-1 ${activeTab === 'resultado' ? 'text-emerald-800' : 'text-stone-400'}`}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>Resultado</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Discreet Note */}
            <p className="text-xs text-stone-500 mt-4 text-center">
              Exemplo demonstrativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
