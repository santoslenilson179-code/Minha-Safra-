import { ChevronDown, Home, History, TrendingUp, Settings } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import FeatureShowcase from './FeatureShowcase';

export default function MockupResultado() {
  const phoneContent = (
    <div className="flex-1 flex flex-col justify-between py-1 text-white select-none">
      {/* Top Header do App: Minha Safra + Controle simples + Dropdown */}
      <div className="pt-0.5 pb-2.5 flex items-center justify-between gap-2 border-b border-white/5">
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

      <div className="space-y-2.5 my-2">
        {/* Card Grande: Resultado da Safra */}
        <div className="p-3.5 rounded-2xl bg-[#13281c]/90 border border-emerald-800/40">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] block mb-1">
            SAFRA: SAFRA PRINCIPAL 2026
          </span>
          <h3 className="text-xl font-extrabold text-white tracking-tight mb-1">
            Resultado da Safra
          </h3>
          <p className="text-[11px] text-stone-300 leading-relaxed font-normal">
            Acompanhe seu faturamento, despesas e descubra se sua safra deu lucro ou prejuízo.
          </p>
        </div>

        {/* Botão Relatório WhatsApp */}
        <div className="p-3 rounded-2xl bg-[#13281c] border border-emerald-800/50 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0c1a12] border border-emerald-900/60 flex items-center justify-center text-xl flex-shrink-0">
            📲
          </div>
          <div>
            <span className="text-xs font-bold text-white block">
              Relatório WhatsApp
            </span>
            <span className="text-[11px] text-stone-400 block">
              Enviar resumo pronto no WhatsApp
            </span>
          </div>
        </div>

        {/* Botão Calculadora de Lucro */}
        <div className="p-3 rounded-2xl bg-[#13281c] border border-emerald-800/50 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0c1a12] border border-emerald-900/60 flex items-center justify-center text-xl flex-shrink-0">
            🧮
          </div>
          <div>
            <span className="text-xs font-bold text-white block">
              Calculadora de Lucro
            </span>
            <span className="text-[11px] text-stone-400 block">
              Simular preços, sacas & margens
            </span>
          </div>
        </div>

        {/* 4 Cards de Métricas em Grade (Total vendido, Total gasto, Colheita registrada, Saldo Líquido) */}
        <div className="grid grid-cols-2 gap-2">
          {/* Total vendido */}
          <div className="p-3 rounded-2xl bg-[#13281c]/90 border border-emerald-800/40">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-stone-300 mb-0.5">
              <span role="img" aria-label="Dinheiro">💰</span>
              <span className="text-[10px] text-stone-300">Total vendido</span>
            </div>
            <div className="text-base font-extrabold text-[#d4af37] tabular-nums">
              R$ 0,00
            </div>
            <span className="text-[9px] text-stone-400 block mt-0.5">
              Entrada de dinheiro
            </span>
          </div>

          {/* Total gasto */}
          <div className="p-3 rounded-2xl bg-[#13281c]/90 border border-emerald-800/40">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-stone-300 mb-0.5">
              <span role="img" aria-label="Despesa">💸</span>
              <span className="text-[10px] text-stone-300">Total gasto</span>
            </div>
            <div className="text-base font-extrabold text-stone-200 tabular-nums">
              R$ 0,00
            </div>
            <span className="text-[9px] text-stone-400 block mt-0.5">
              Saída de despesas
            </span>
          </div>

          {/* Colheita registrada */}
          <div className="p-3 rounded-2xl bg-[#13281c]/90 border border-emerald-800/40">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-stone-300 mb-0.5">
              <span role="img" aria-label="Caixa">📦</span>
              <span className="text-[10px] text-stone-300">Colheita registrada</span>
            </div>
            <div className="text-base font-extrabold text-stone-200 tabular-nums">
              0 kg
            </div>
            <span className="text-[9px] text-stone-400 block mt-0.5">
              Volume no campo
            </span>
          </div>

          {/* Saldo Líquido */}
          <div className="p-3 rounded-2xl bg-[#13281c]/90 border border-emerald-800/40">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-stone-300 mb-0.5">
              <span role="img" aria-label="Cédula">💵</span>
              <span className="text-[10px] text-stone-300">Saldo Líquido</span>
            </div>
            <div className="text-base font-extrabold text-stone-200 tabular-nums">
              R$ 0,00
            </div>
            <span className="text-[9px] text-stone-400 block mt-0.5">
              Vendas menos Gastos
            </span>
          </div>
        </div>

        {/* Sem movimentação suficiente */}
        <div className="p-2.5 rounded-xl bg-[#0c1a12] border border-emerald-900/40 flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-stone-700/50 flex items-center justify-center text-[10px] text-stone-400">
            i
          </div>
          <span className="text-[11px] text-stone-400">
            Sem movimentação suficiente
          </span>
        </div>
      </div>

      {/* Barra Inferior com 'Resultado' Ativo em Dourado */}
      <div className="pt-2 mt-1 border-t border-white/10 grid grid-cols-4 text-center">
        <div className="flex flex-col items-center text-stone-400">
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">Início</span>
        </div>
        <div className="flex flex-col items-center text-stone-400">
          <History className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">Histórico</span>
        </div>
        {/* Ativo */}
        <div className="flex flex-col items-center text-[#d4af37]">
          <TrendingUp className="w-4 h-4 mb-0.5 stroke-[2.5]" />
          <span className="text-[10px] font-extrabold">Resultado</span>
        </div>
        <div className="flex flex-col items-center text-stone-400">
          <Settings className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">Ajustes</span>
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
      mockup={<PhoneFrame variant="dark" badge="Tela Resultado da Safra">{phoneContent}</PhoneFrame>}
      discreetNote="Exemplo demonstrativo da tela real do Minha Safra."
    />
  );
}
