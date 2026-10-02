import { X, Check, Calendar, Clock, ChevronDown, Home, History, TrendingUp, Settings } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import FeatureShowcase from './FeatureShowcase';

export default function MockupGastos() {
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

      {/* Título da Tela com Botão de Fechar */}
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

      {/* Formulário Real */}
      <div className="space-y-2.5 my-2">
        {/* Valor do gasto (R$) * */}
        <div>
          <label className="text-[11px] font-bold text-stone-200 block mb-1">
            Valor do gasto (R$) *
          </label>
          <div className="p-2.5 bg-[#0a160f] rounded-xl border border-[#d97736]/80 text-xl font-bold text-white flex items-center">
            <span>R$&nbsp;</span>
            <span className="text-stone-400">0,00</span>
            <span className="w-0.5 h-5 bg-white/70 ml-0.5 animate-pulse" />
          </div>
        </div>

        {/* Categoria do gasto * */}
        <div>
          <label className="text-[11px] font-bold text-stone-200 block mb-1">
            Categoria do gasto *
          </label>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="p-2 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium truncate">
              Funcionários / Diári...
            </div>
            {/* Adubo selecionado com botão terracota e check */}
            <div className="p-2 bg-[#d97736] rounded-xl text-white font-bold flex items-center justify-between shadow-xs">
              <span>Adubo</span>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>

            <div className="p-2 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Defensivos
            </div>
            <div className="p-2 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Combustível
            </div>

            <div className="p-2 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Irrigação
            </div>
            <div className="p-2 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Energia
            </div>

            <div className="p-2 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Transporte
            </div>
            <div className="p-2 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Embalagens
            </div>
          </div>
        </div>

        {/* Descrição detalhada (Opcional) */}
        <div>
          <label className="text-[11px] font-bold text-stone-200 block mb-1">
            Descrição detalhada <span className="text-stone-400 font-normal">(Opcional)</span>
          </label>
          <div className="p-2 bg-[#0a160f] rounded-xl border border-emerald-900/60 text-[11px] text-stone-500">
            Ex: 5 sacos de adubo, diária de colheita...
          </div>
        </div>

        {/* Data e Hora do gasto */}
        <div className="space-y-1.5">
          <div>
            <label className="text-[10px] font-bold text-stone-300 flex items-center gap-1 mb-0.5">
              <Calendar className="w-3 h-3 text-[#d4af37]" />
              Data do gasto *
            </label>
            <div className="p-2 bg-[#0a160f] rounded-xl border border-emerald-900/60 text-[11px] text-stone-200 flex items-center justify-between">
              <span>29/09/2026</span>
              <Calendar className="w-3.5 h-3.5 text-stone-500" />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-stone-300 flex items-center gap-1 mb-0.5">
              <Clock className="w-3 h-3 text-[#d4af37]" />
              Hora do gasto *
            </label>
            <div className="p-2 bg-[#0a160f] rounded-xl border border-emerald-900/60 text-[11px] text-stone-200 flex items-center justify-between">
              <span>07:14</span>
              <Clock className="w-3.5 h-3.5 text-stone-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Botão SALVAR GASTO com ícone de disquete */}
      <div className="pt-1.5">
        <button
          type="button"
          className="w-full py-3 bg-[#d97736] hover:bg-[#c86929] text-white rounded-xl text-xs font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all"
        >
          <span className="text-sm select-none">💾</span>
          <span>SALVAR GASTO</span>
        </button>
      </div>

      {/* Barra Inferior de Navegação */}
      <div className="pt-2 mt-2 border-t border-white/10 grid grid-cols-4 text-center">
        <div className="flex flex-col items-center text-[#d4af37]">
          <Home className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[9px] font-bold">Início</span>
        </div>
        <div className="flex flex-col items-center text-stone-400">
          <History className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[9px] font-medium">Histórico</span>
        </div>
        <div className="flex flex-col items-center text-stone-400">
          <TrendingUp className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[9px] font-medium">Resultado</span>
        </div>
        <div className="flex flex-col items-center text-stone-400">
          <Settings className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[9px] font-medium">Ajustes</span>
        </div>
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
      mockup={<PhoneFrame variant="dark" badge="Tela Registrar Gasto">{phoneContent}</PhoneFrame>}
      discreetNote="Exemplo demonstrativo da tela real do Minha Safra."
    />
  );
}
