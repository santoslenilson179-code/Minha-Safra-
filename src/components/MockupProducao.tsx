import { X, Check, Calendar, Clock, ChevronDown, Home, History, TrendingUp, Settings } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import FeatureShowcase from './FeatureShowcase';

export default function MockupProducao() {
  const phoneContent = (
    <div className="flex-1 flex flex-col justify-between py-1 text-white select-none">
      {/* Título da Tela com Botão de Fechar */}
      <div className="pt-1 pb-2 flex items-center justify-between">
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

      {/* Safra vinculada */}
      <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
        <span className="text-stone-400 text-[11px]">Safra vinculada:</span>
        <span className="text-[#d4af37] font-bold text-[11px]">Safra Principal 2026</span>
      </div>

      {/* Formulário Real */}
      <div className="space-y-2.5 my-2">
        {/* Produto colhido * */}
        <div>
          <label className="text-[11px] font-bold text-stone-200 block mb-1">
            Produto colhido *
          </label>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Manga Rosa
            </div>
            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Soja
            </div>

            {/* Manga Palmer selecionada com borda dourada e check */}
            <div className="p-2.5 bg-[#172d21] rounded-xl border-2 border-[#d4af37] text-white font-bold flex items-center justify-between shadow-xs">
              <span>Manga Palmer</span>
              <Check className="w-3.5 h-3.5 text-[#d4af37] stroke-[3]" />
            </div>
            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Manga Tommy
            </div>

            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Café
            </div>
            <div className="p-2.5 bg-[#13281c] rounded-xl border border-emerald-900/60 text-stone-200 font-medium">
              Milho
            </div>
          </div>
        </div>

        {/* Quantidade * e Unidade * */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[11px] font-bold text-stone-200 block mb-1">
              Quantidade *
            </label>
            <div className="p-2.5 bg-[#0a160f] rounded-xl border border-emerald-900/60 text-sm font-semibold text-stone-400">
              Ex: 1200
            </div>
          </div>
          <div>
            <label className="text-[11px] font-bold text-stone-200 block mb-1">
              Unidade *
            </label>
            <div className="p-2.5 bg-[#0a160f] rounded-xl border border-emerald-900/60 text-sm font-bold text-stone-200 flex items-center justify-between">
              <span>kg</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
            </div>
          </div>
        </div>

        {/* Data e Hora da colheita */}
        <div className="space-y-1.5">
          <div>
            <label className="text-[10px] font-bold text-stone-300 flex items-center gap-1 mb-0.5">
              <Calendar className="w-3 h-3 text-[#d4af37]" />
              Data da colheita *
            </label>
            <div className="p-2 bg-[#0a160f] rounded-xl border border-emerald-900/60 text-[11px] text-stone-200 flex items-center justify-between">
              <span>29/09/2026</span>
              <Calendar className="w-3.5 h-3.5 text-stone-500" />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-stone-300 flex items-center gap-1 mb-0.5">
              <Clock className="w-3 h-3 text-[#d4af37]" />
              Hora da colheita *
            </label>
            <div className="p-2 bg-[#0a160f] rounded-xl border border-emerald-900/60 text-[11px] text-stone-200 flex items-center justify-between">
              <span>09:17</span>
              <Clock className="w-3.5 h-3.5 text-stone-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Botão SALVAR PRODUÇÃO com ícone de disquete */}
      <div className="pt-2">
        <button
          type="button"
          className="w-full py-3 bg-[#d97736] hover:bg-[#c86929] text-white rounded-xl text-xs font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all"
        >
          <span className="text-sm select-none">💾</span>
          <span>SALVAR PRODUÇÃO</span>
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
      mockup={<PhoneFrame variant="dark" badge="Tela Registrar Produção">{phoneContent}</PhoneFrame>}
      discreetNote="Exemplo demonstrativo da tela real do Minha Safra."
    />
  );
}
