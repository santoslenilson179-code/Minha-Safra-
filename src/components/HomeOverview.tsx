import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import appIconBannerImg from '../assets/images/minha_safra_app_icon_banner_1790794587392.jpg';
import { OrganicGrainTexture, TopographicLines } from './RuralAccents';

export default function HomeOverview() {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: phoneRef, isVisible: isPhoneVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="relative py-24 sm:py-36 text-white overflow-hidden bg-[#0d1b13]">
      {/* 
        =======================================================================
        BACKGROUND: FOTO DO ÍCONE MINHA SAFRA + PONTES DE GRADIENTES HARMÔNICAS
        =======================================================================
      */}
      <div className="absolute inset-0 z-0">
        <img
          src={appIconBannerImg}
          alt="Identidade e aplicativo Minha Safra em textura de alta definição"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
          style={{
            transform: isPhoneVisible ? 'scale(1.015)' : 'scale(1.04)',
          }}
        />

        {/* Overlay Verde Floresta escuro para garantir leitura nítida e elegância */}
        <div className="absolute inset-0 bg-[#0d1b13]/60 sm:bg-[#0d1b13]/50" />

        {/* Ponte de transição superior: conecta com o Verde Floresta (#14251C / #0d1b13) da segunda dobra */}
        <div
          className="absolute inset-x-0 top-0 h-40 sm:h-56 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #0d1b13 0%, rgba(13, 27, 19, 0.85) 45%, transparent 100%)',
          }}
        />

        {/* Gradiente radial central suave para dar destaque ao mockup de celular */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_20%,#0d1b13_90%)] pointer-events-none" />

        {/* Linhas topográficas discretas simbolizando o controle e a organização */}
        <TopographicLines color="rgba(52, 211, 153, 0.08)" />

        {/* Textura tátil orgânica */}
        <OrganicGrainTexture opacity={0.035} />

        {/* Ponte de transição inferior suave para a quarta dobra (#0c0907 / noite no campo) */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 sm:h-56 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(13, 27, 19, 0.6) 40%, rgba(12, 9, 7, 0.9) 80%, #0c0907 100%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Sobrancelha e Título com Soft Fade Up */}
        <div ref={headerRef} className={`fade-up-init ${isHeaderVisible ? 'fade-up-active' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C86F42]" />
            CONHEÇA O MINHA SAFRA
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance] drop-shadow-sm">
            Tudo o que importa.
            <br />
            <span className="text-emerald-300 font-semibold">Em um só lugar.</span>
          </h2>

          <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto mb-16 leading-relaxed font-normal drop-shadow-sm">
            Gastos, produção, vendas e resultado organizados de forma simples.
          </p>
        </div>

        {/* Grande Mockup Central com Phone Depth Reveal (0.96 -> 1) e Soft Spotlight */}
        <div
          ref={phoneRef}
          className={`relative max-w-lg mx-auto mockup-reveal-center-init ${
            isPhoneVisible ? 'mockup-reveal-active' : ''
          }`}
        >
          {/* Spotlight sutil verde esmeralda no fundo do celular */}
          <div className="phone-soft-spotlight-forest" />

          <PhoneFrame variant="dark" badge="Tela Real do Minha Safra">
            <div className="flex-1 flex flex-col justify-between text-left text-white select-none">
              {/* Top Header do App */}
              <div className="pt-1 pb-3 flex items-center justify-between gap-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#14261b] border border-emerald-500/20 flex items-center justify-center text-[#d4af37]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white tracking-tight leading-tight">
                      Minha Safra
                    </h3>
                    <p className="text-[11px] text-stone-400 font-medium">
                      Controle simples do produtor
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-700/50 text-xs text-stone-200">
                  <span className="font-semibold text-emerald-400">Safra 24/25</span>
                  <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
                </div>
              </div>

              {/* Card Resumo do Mês */}
              <div className="py-2.5 px-3 rounded-2xl bg-white/[0.04] border border-white/10 my-3">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">
                  Visão Geral da Safra
                </span>
                <div className="grid grid-cols-2 gap-2 mt-1.5">
                  <div className="bg-black/20 p-2 rounded-xl">
                    <p className="text-[10px] text-stone-400">Total Vendas</p>
                    <p className="text-sm font-bold text-emerald-400">R$ 142.800</p>
                  </div>
                  <div className="bg-black/20 p-2 rounded-xl">
                    <p className="text-[10px] text-stone-400">Total Custos</p>
                    <p className="text-sm font-bold text-rose-300">R$ 41.250</p>
                  </div>
                </div>
              </div>

              {/* Destaque Saldo Livre / Lucro */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/80 via-emerald-900/40 to-black/40 border border-emerald-500/30 shadow-inner">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-emerald-300 font-semibold uppercase tracking-wider text-[11px]">
                    Resultado Líquido
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-bold">
                    POSITIVO
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  R$ 101.550,00
                </div>
                <div className="text-xs text-emerald-300/80 mt-1 flex items-center gap-1">
                  <span>Margem líquida de</span>
                  <strong className="text-white">+71,3%</strong>
                  <span>sobre as vendas</span>
                </div>
              </div>

              {/* Botões de Ação Rápida */}
              <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-white/5">
                <div className="py-2.5 px-3 rounded-xl bg-[#14291e] border border-emerald-900/60 text-center text-xs font-bold text-stone-200 flex items-center justify-center gap-1.5">
                  <span>💸</span>
                  <span>Novo Gasto</span>
                </div>
                <div className="py-2.5 px-3 rounded-xl bg-[#20382a] border border-emerald-700/50 text-center text-xs font-bold text-white flex items-center justify-center gap-1.5">
                  <span>💰</span>
                  <span>Nova Venda</span>
                </div>
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
