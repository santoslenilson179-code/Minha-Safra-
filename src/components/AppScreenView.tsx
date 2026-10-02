import React from 'react';
import { X, Check, Calendar, Clock, ChevronDown, Calculator } from 'lucide-react';

export type AppStepId = 'gastos' | 'producao' | 'vendas' | 'resultado';

interface AppScreenProps {
  step: AppStepId;
}

export function AppScreenView({ step }: AppScreenProps) {
  switch (step) {
    case 'gastos':
      return <ScreenGastos />;
    case 'producao':
      return <ScreenProducao />;
    case 'vendas':
      return <ScreenVendas />;
    case 'resultado':
      return <ScreenResultado />;
    default:
      return <ScreenGastos />;
  }
}

// 01 — REGISTRAR GASTO
function ScreenGastos() {
  return (
    <div className="flex-1 flex flex-col justify-between py-1 text-white select-none">
      {/* Top Header do App: Minha Safra */}
      <div className="pt-0.5 pb-2 flex items-center justify-between gap-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#14261b] border border-emerald-500/20 flex items-center justify-center text-[#d4af37]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-white tracking-tight leading-tight">
              Minha Safra
            </h4>
            <p className="text-[10px] text-stone-400">
              Controle simples do produtor
            </p>
          </div>
        </div>

        <div className="px-2 py-1 rounded-lg bg-[#13281c] border border-emerald-700/40 text-[10px] font-semibold text-[#d4af37] flex items-center gap-1">
          <span>Safra Principa...</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>

      {/* Título da Tela */}
      <div className="pt-2 pb-1.5 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] block">
            DESPESAS DA SAFRA
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-base select-none">💸</span>
            <h3 className="text-lg font-extrabold text-white tracking-tight">
              Registrar gasto
            </h3>
          </div>
        </div>
        <div className="w-7 h-7 rounded-lg bg-[#14291e] border border-emerald-900/60 flex items-center justify-center text-stone-300">
          <X className="w-4 h-4" />
        </div>
      </div>

      {/* Safra ativa */}
      <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
        <span className="text-stone-400 text-[11px]">Safra ativa:</span>
        <span className="text-[#d4af37] font-bold text-[11px]">Safra Principal 2026</span>
      </div>

      {/* Formulário */}
      <div className="space-y-2.5 my-2">
        <div>
          <label className="text-[11px] font-bold text-stone-200 block mb-1">
            Valor do gasto (R$) *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-bold text-sm">
              R$
            </span>
            <div className="w-full bg-[#0a160f] rounded-xl border border-emerald-800/80 py-2.5 pl-10 pr-3 text-lg font-extrabold text-white tracking-tight">
              300,00
            </div>
          </div>
        </div>

        <div>
          <label className="text-[11px] font-bold text-stone-200 block mb-1">
            O que foi comprado? *
          </label>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="p-2.5 bg-[#172d21] rounded-xl border-2 border-[#d4af37] text-white font-bold flex items-center justify-between shadow-xs">
              <span>Combustível</span>
              <Check className="w-3.5 h-3.5 text-[#d4af37] stroke-[3]" />
            </div>
            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Adubo / Fertilizante
            </div>
            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Diária / Mão de obra
            </div>
            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Sementes / Mudas
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <label className="text-[10px] text-stone-300 block mb-1">Data</label>
            <div className="p-2 bg-[#0a160f] rounded-xl border border-emerald-900/60 text-[11px] text-stone-200 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>29/09/2026</span>
            </div>
          </div>
          <div>
            <label className="text-[10px] text-stone-300 block mb-1">Hora</label>
            <div className="p-2 bg-[#0a160f] rounded-xl border border-emerald-900/60 text-[11px] text-stone-200 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>10:04</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="space-y-1.5 pt-1">
        <button
          type="button"
          className="w-full py-3 bg-[#C86F42] hover:bg-[#b86135] text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all tracking-wider uppercase"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>SALVAR GASTO</span>
        </button>
      </div>
    </div>
  );
}

// 02 — REGISTRAR PRODUÇÃO
function ScreenProducao() {
  return (
    <div className="flex-1 flex flex-col justify-between py-1 text-white select-none">
      <div className="pt-0.5 pb-2 flex items-center justify-between gap-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#14261b] border border-emerald-500/20 flex items-center justify-center text-[#d4af37]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-white tracking-tight leading-tight">
              Minha Safra
            </h4>
            <p className="text-[10px] text-stone-400">Controle simples do produtor</p>
          </div>
        </div>

        <div className="px-2 py-1 rounded-lg bg-[#13281c] border border-emerald-700/40 text-[10px] font-semibold text-[#d4af37] flex items-center gap-1">
          <span>Safra Principa...</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>

      <div className="pt-2 pb-1.5 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] block">
            COLHEITA & CAMPO
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-base select-none">📦</span>
            <h3 className="text-lg font-extrabold text-white tracking-tight">
              Registrar produção
            </h3>
          </div>
        </div>
        <div className="w-7 h-7 rounded-lg bg-[#14291e] border border-emerald-900/60 flex items-center justify-center text-stone-300">
          <X className="w-4 h-4" />
        </div>
      </div>

      <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
        <span className="text-stone-400 text-[11px]">Safra vinculada:</span>
        <span className="text-[#d4af37] font-bold text-[11px]">Safra Principal 2026</span>
      </div>

      <div className="space-y-2.5 my-2">
        <div>
          <label className="text-[11px] font-bold text-stone-200 block mb-1">
            Produto colhido *
          </label>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Manga Rosa
            </div>
            <div className="p-2.5 bg-[#172d21] rounded-xl border-2 border-[#d4af37] text-white font-bold flex items-center justify-between shadow-xs">
              <span>Manga Palmer</span>
              <Check className="w-3.5 h-3.5 text-[#d4af37] stroke-[3]" />
            </div>
            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Café
            </div>
            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Milho
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[11px] font-bold text-stone-200 block mb-1">
              Quantidade *
            </label>
            <div className="w-full bg-[#0a160f] rounded-xl border border-emerald-800/80 p-2.5 text-base font-extrabold text-white">
              200
            </div>
          </div>
          <div>
            <label className="text-[11px] font-bold text-stone-200 block mb-1">
              Unidade *
            </label>
            <div className="w-full bg-[#0a160f] rounded-xl border border-emerald-800/80 p-2.5 text-xs font-bold text-[#d4af37] flex items-center justify-between">
              <span>Caixa</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-1.5 pt-1">
        <button
          type="button"
          className="w-full py-3 bg-[#22c55e] hover:bg-[#1ea34d] text-stone-950 font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all tracking-wider uppercase"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>SALVAR PRODUÇÃO</span>
        </button>
      </div>
    </div>
  );
}

// 03 — REGISTRAR VENDA
function ScreenVendas() {
  return (
    <div className="flex-1 flex flex-col justify-between py-1 text-white select-none">
      <div className="pt-0.5 pb-2 flex items-center justify-between gap-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#14261b] border border-emerald-500/20 flex items-center justify-center text-[#d4af37]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-white tracking-tight leading-tight">
              Minha Safra
            </h4>
            <p className="text-[10px] text-stone-400">Controle simples do produtor</p>
          </div>
        </div>

        <div className="px-2 py-1 rounded-lg bg-[#13281c] border border-emerald-700/40 text-[10px] font-semibold text-[#d4af37] flex items-center gap-1">
          <span>Safra Principa...</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>

      <div className="pt-2 pb-1 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] block">
            COMERCIALIZAÇÃO
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-base select-none">💰</span>
            <h3 className="text-lg font-extrabold text-white tracking-tight">
              Registrar venda
            </h3>
          </div>
        </div>
        <div className="w-7 h-7 rounded-lg bg-[#14291e] border border-emerald-900/60 flex items-center justify-center text-stone-300">
          <X className="w-4 h-4" />
        </div>
      </div>

      <div className="space-y-2 my-1.5">
        <div>
          <label className="text-[10px] font-bold text-stone-200 block mb-1">
            Produto vendido *
          </label>
          <div className="p-2 bg-[#172d21] rounded-xl border border-[#d4af37] text-white font-bold text-xs flex items-center justify-between">
            <span>Manga Palmer</span>
            <span className="text-[10px] text-stone-300 font-normal">Estoque: 200 cx</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[10px] font-bold text-stone-200 block mb-0.5">
              Quantidade vendida *
            </label>
            <div className="w-full bg-[#0a160f] rounded-xl border border-emerald-800/80 p-2 text-sm font-extrabold text-white">
              200
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold text-stone-200 block mb-0.5">
              Valor total recebido (R$) *
            </label>
            <div className="w-full bg-[#0a160f] rounded-xl border border-emerald-800/80 p-2 text-sm font-extrabold text-emerald-400">
              R$ 500,00
            </div>
          </div>
        </div>

        {/* Card do Comprador */}
        <div className="p-2.5 rounded-xl bg-[#13281c] border border-emerald-900/60 text-xs">
          <div className="text-[10px] text-stone-400 mb-0.5 font-medium">Cliente / Comprador</div>
          <div className="font-bold text-stone-100 flex items-center justify-between">
            <span>João do Lote 14</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">À vista</span>
          </div>
        </div>
      </div>

      <div className="space-y-1.5 pt-1">
        <button
          type="button"
          className="w-full py-3 bg-[#D9AD5B] hover:bg-[#c89d49] text-stone-950 font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all tracking-wider uppercase"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>SALVAR VENDA</span>
        </button>
      </div>
    </div>
  );
}

// 04 — MEU RESULTADO
function ScreenResultado() {
  return (
    <div className="flex-1 flex flex-col justify-between py-1 text-white select-none">
      <div className="pt-0.5 pb-2 flex items-center justify-between gap-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#14261b] border border-emerald-500/20 flex items-center justify-center text-[#d4af37]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-white tracking-tight leading-tight">
              Minha Safra
            </h4>
            <p className="text-[10px] text-stone-400">Controle simples do produtor</p>
          </div>
        </div>

        <div className="px-2 py-1 rounded-lg bg-[#13281c] border border-emerald-700/40 text-[10px] font-semibold text-[#d4af37] flex items-center gap-1">
          <span>Safra Principa...</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>

      <div className="space-y-2.5 my-2">
        {/* Card Grande: Resultado da Safra */}
        <div className="p-3.5 rounded-2xl bg-[#13281c]/90 border border-emerald-800/40">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] block mb-0.5">
            SAFRA: SAFRA PRINCIPAL 2026
          </span>
          <h3 className="text-lg font-extrabold text-white tracking-tight mb-1">
            Resultado da Safra
          </h3>
          <p className="text-[11px] text-stone-300 leading-relaxed font-normal">
            Acompanhe seu faturamento, despesas e saldo apurado com base nos seus registros.
          </p>
        </div>

        {/* Balanço Real com base nas telas anteriores */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-3 rounded-xl bg-[#0e1f15] border border-emerald-900/60">
            <span className="text-[10px] font-bold text-stone-300 block mb-0.5">
              💰 VENDAS (ENTROU)
            </span>
            <span className="text-base font-extrabold text-[#22c55e]">
              R$ 500,00
            </span>
            <span className="text-[10px] text-stone-400 block mt-0.5">200 cx vendidas</span>
          </div>

          <div className="p-3 rounded-xl bg-[#0e1f15] border border-emerald-900/60">
            <span className="text-[10px] font-bold text-stone-300 block mb-0.5">
              💸 GASTOS (SAIU)
            </span>
            <span className="text-base font-extrabold text-[#d97736]">
              R$ 300,00
            </span>
            <span className="text-[10px] text-stone-400 block mt-0.5">Combustível</span>
          </div>
        </div>

        {/* Card Resultado Apurado */}
        <div className="p-3 rounded-xl bg-[#0a160f] border border-emerald-500/40 shadow-inner">
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px]">
              SALDO APURADO
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-700/60 text-emerald-300 text-[10px] font-bold">
              +40% MARGEM
            </span>
          </div>
          <div className="text-2xl font-black text-white tracking-tight">
            + R$ 200,00
          </div>
        </div>
      </div>

      <div className="pt-1">
        <div className="p-2.5 rounded-xl bg-[#13281c] border border-emerald-800/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">📲</span>
            <div>
              <span className="text-xs font-bold text-white block leading-tight">
                Relatório WhatsApp
              </span>
              <span className="text-[10px] text-stone-400">
                Pronto para compartilhar
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-[#25D366] bg-[#0c1f13] px-2 py-1 rounded-md border border-emerald-800/60">
            1 toque
          </span>
        </div>
      </div>
    </div>
  );
}
