import { Sprout, Plus, ArrowUpRight, ArrowDownRight, Users, MessageSquare } from 'lucide-react';
import PhoneFrame from './PhoneFrame';

export default function HomeOverview() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F0E6] text-stone-900 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Sobrancelha */}
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-800 uppercase mb-3">
          CONHEÇA O MINHA SAFRA
        </p>

        {/* Título grande */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4 [text-wrap:balance]">
          Tudo o que importa.
          <br />
          <span className="text-emerald-900 font-semibold">Em um só lugar.</span>
        </h2>

        {/* Texto curto */}
        <p className="text-lg sm:text-xl text-stone-700 max-w-2xl mx-auto mb-16 leading-relaxed font-normal">
          Gastos, produção, vendas e resultado organizados de forma simples.
        </p>

        {/* Grande Mockup Central (60% a 75% da altura visual) */}
        <div className="relative max-w-lg mx-auto">
          {/* Subtle soft backdrop glow */}
          <div className="absolute inset-0 bg-emerald-700/10 rounded-full blur-3xl -z-10" />

          <PhoneFrame variant="light" badge="Tela Inicial do Aplicativo">
            {/* App Header inside screen */}
            <div className="pt-2 pb-4 flex items-center justify-between border-b border-stone-200/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  <Sprout className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-sm text-stone-900 block leading-tight">Minha Safra</span>
                  <span className="text-[11px] text-stone-500 block">Sítio Boa Esperança</span>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 border border-emerald-200/60">
                Safra 2026
              </span>
            </div>

            {/* Quick Summary Card */}
            <div className="my-4 p-4 rounded-2xl bg-[#14251C] text-white shadow-md text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                  Resultado Atual
                </span>
                <span className="text-xs text-emerald-200 font-medium">Parcial</span>
              </div>
              <div className="text-2xl font-extrabold text-white tracking-tight mb-3">
                R$ 29.300,00
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-emerald-800/80 text-xs">
                <div>
                  <span className="text-stone-300 block text-[10px]">Total Vendido</span>
                  <span className="font-bold text-emerald-300 flex items-center gap-0.5">
                    <ArrowUpRight className="w-3 h-3" /> R$ 48.500
                  </span>
                </div>
                <div>
                  <span className="text-stone-300 block text-[10px]">Total Gasto</span>
                  <span className="font-bold text-orange-300 flex items-center gap-0.5">
                    <ArrowDownRight className="w-3 h-3" /> R$ 19.200
                  </span>
                </div>
              </div>
            </div>

            {/* 2 Big Primary Actions (+ VENDI / - GASTEI) */}
            <div className="grid grid-cols-2 gap-3 mb-3 text-left">
              <div className="p-3.5 rounded-2xl bg-[#13281c] border-2 border-[#d4af37]/80 text-white shadow-sm flex flex-col justify-between">
                <span className="text-2xl mb-1 select-none" role="img" aria-label="Dinheiro">💰</span>
                <div>
                  <span className="text-base font-extrabold text-[#e5b544] block">+ VENDI</span>
                  <span className="text-[11px] text-stone-200">Entrou dinheiro</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#13281c] border-2 border-[#d97736]/80 text-white shadow-sm flex flex-col justify-between">
                <span className="text-2xl mb-1 select-none" role="img" aria-label="Despesa">💸</span>
                <div>
                  <span className="text-base font-extrabold text-[#e07a3c] block">- GASTEI</span>
                  <span className="text-[11px] text-stone-200">Comprei / Despesa</span>
                </div>
              </div>
            </div>

            {/* 3 Secondary Tools Grid */}
            <div className="grid grid-cols-3 gap-2 mb-4 text-center">
              <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-xs flex flex-col items-center">
                <span className="text-xl mb-0.5">📲</span>
                <span className="text-[11px] font-bold text-stone-800">WhatsApp</span>
                <span className="text-[9px] font-semibold text-emerald-700">Relatório</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-xs flex flex-col items-center">
                <span className="text-xl mb-0.5">🧮</span>
                <span className="text-[11px] font-bold text-stone-800">Calculadora</span>
                <span className="text-[9px] font-semibold text-[#b58b29]">Simular lucro</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-xs flex flex-col items-center">
                <span className="text-xl mb-0.5">📦</span>
                <span className="text-[11px] font-bold text-stone-800">Colheita</span>
                <span className="text-[9px] font-semibold text-stone-500">Registrar</span>
              </div>
            </div>

            {/* Bottom Quick Contact Bar */}
            <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200/70 flex items-center justify-between text-xs text-stone-600">
              <span className="flex items-center gap-1.5 font-medium text-[11px]">
                <Users className="w-3.5 h-3.5 text-stone-500" />
                Clientes e Equipe cadastrados
              </span>
              <span className="font-bold text-stone-800 text-[11px]">Prontos</span>
            </div>
          </PhoneFrame>

          <p className="text-xs text-stone-400 mt-6 text-center">
            Exemplo demonstrativo da interface inicial.
          </p>
        </div>
      </div>
    </section>
  );
}
