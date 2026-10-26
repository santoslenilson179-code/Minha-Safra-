import { useEffect, useState } from 'react';
import { Sprout, ArrowDown } from 'lucide-react';
import coffeeMistyMountainsImg from '../assets/images/coffee_mountain_mist_berries_1790944489577.jpg';
import { OrganicGrainTexture, HarvestAccentLine, OrganicTerrainDivider } from './RuralAccents';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar mobile para estabilidade máxima e eliminar bugs de transform/overflow no iOS/Android
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    // Progressive enhancement: se preferir reduced motion, não rastreia scroll
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToNext = () => {
    const el = document.getElementById('dor');
    if (el) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  };

  // Cálculo de progresso contido para a Hero (0 a 1)
  const heroScrollProgress = Math.min(1, Math.max(0, (scrollY - 50) / 450));

  // No mobile: parallax desativado para evitar corte/salto/flash contra a segunda seção.
  // No desktop: subtle field parallax mantido.
  const parallaxTranslate = isMobile ? 0 : heroScrollProgress * 26;
  const parallaxScale = isMobile ? 1 : 1.02 - heroScrollProgress * 0.02;

  // Saída do conteúdo: opacity 1 -> 0, translateY 0 -> -15px (apenas no desktop)
  const contentOpacity = isMobile ? 1 : Math.max(0, 1 - heroScrollProgress * 1.35);
  const contentTranslateY = isMobile ? 0 : -(heroScrollProgress * 15);

  // Logo Minha Safra
  const logoOpacity = isMobile ? 1 : Math.max(0, 1 - heroScrollProgress * 0.95);

  // Escurecimento Progressivo com Verde Floresta (#14251C) com excelente contraste WCAG
  const forestOverlayOpacity = isMobile
    ? 0.52
    : 0.38 + heroScrollProgress * 0.42;

  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 bg-[#14251C]">
      {/* 
        =======================================================================
        BACKGROUND: CAFÉ VERMELHO NA SERRA NEBULOSA + FIELD PARALLAX + BLEND
        =======================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={coffeeMistyMountainsImg}
          alt="Café vermelho maduro no cafeeiro com serras nebulosas ao fundo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_35%] [image-rendering:auto] contrast-[1.04] saturate-[1.06]"
          style={{
            transform: isMobile
              ? 'none'
              : `translate3d(0, ${parallaxTranslate}px, 0) scale(${parallaxScale})`,
            willChange: isMobile ? 'auto' : 'transform',
            transition: isMobile ? 'none' : 'transform 100ms ease-out',
          }}
        />

        {/* Escurecimento progressivo em Verde Floresta (#14251C) com excelente contraste WCAG */}
        <div
          className="absolute inset-0 transition-opacity duration-150 ease-out"
          style={{
            backgroundColor: '#14251C',
            opacity: forestOverlayOpacity,
          }}
        />

        {/* Gradiente lateral esquerdo para preservar excelente legibilidade dos textos */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14251C]/95 via-[#14251C]/65 to-transparent sm:from-[#14251C]/90 sm:via-[#14251C]/50" />

        {/* Gradiente sutil do topo para harmonizar a barra de navegação com safe area */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#14251C]/90 via-[#14251C]/50 to-transparent" />

        {/* Textura tátil orgânica rústica */}
        <OrganicGrainTexture opacity={0.035} />

        {/* 
          FOREST GRADIENT BRIDGE:
          Degradê vertical que funde perfeitamente a base da Hero com o fundo #14251C
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(20, 37, 28, 0.45) 30%, rgba(20, 37, 28, 0.88) 70%, #14251C 100%)',
          }}
        />
      </div>

      {/* 
        =======================================================================
        CONTEÚDO DA HERO: POSICIONAMENTO MOBILE OTIMIZADO (MAIS ALTO & EQUILIBRADO)
        =======================================================================
      */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-6 sm:pt-14 pb-8 text-center sm:text-left flex-1 flex flex-col justify-start sm:justify-center items-center sm:items-start w-full">
        {/* Logo Minha Safra com safe area */}
        <div
          className="flex items-center gap-2.5 mb-5 sm:mb-8"
          style={{
            opacity: logoOpacity,
            transition: 'opacity 150ms ease-out',
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-sm backdrop-blur-sm">
            <Sprout className="w-6 h-6" />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
            Minha Safra
          </span>
        </div>

        {/* Conteúdo principal */}
        <div
          className="space-y-3 sm:space-y-4 max-w-3xl"
          style={{
            opacity: contentOpacity,
            transform: `translate3d(0, ${contentTranslateY}px, 0)`,
            transition: 'opacity 150ms ease-out, transform 150ms ease-out',
          }}
        >
          {/* Sobrancelha com Harvest Accent Line */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-1 sm:mb-2">
            <HarvestAccentLine color="#C86F42" />
            <p className="text-xs sm:text-sm font-bold tracking-wider text-[#D9AD5B] uppercase drop-shadow-sm">
              PARA QUEM VIVE DA PRODUÇÃO
            </p>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.15] [text-wrap:balance] drop-shadow-md">
            Você sabe quanto realmente sobrou da sua safra?
          </h1>

          {/* Solução */}
          <p className="text-xl sm:text-2xl font-semibold text-emerald-200 pt-1 drop-shadow-sm">
            Controle sua safra sem complicação.
          </p>

          {/* Descrição */}
          <p className="text-base sm:text-lg text-stone-100 max-w-2xl leading-relaxed pt-1 pb-4 drop-shadow-sm font-medium">
            Anote seus gastos, produção e vendas pelo celular e acompanhe seus números de forma simples.
          </p>

          {/* CTA Principal */}
          <div className="pt-1 sm:pt-2 w-full sm:w-auto">
            <button
              onClick={handleScrollToNext}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[52px] text-base sm:text-lg font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>VER COMO FUNCIONA</span>
              <ArrowDown className="w-5 h-5 text-emerald-950/90" />
            </button>
          </div>
        </div>
      </div>

      {/* 
        =======================================================================
        SCROLL CUE: ROLE PARA CONHECER + LINHA VERTICAL DISCRETA
        =======================================================================
      */}
      <div
        className="relative z-10 w-full pb-3 sm:pb-4 text-center pointer-events-none flex flex-col items-center justify-center transition-opacity duration-300"
        style={{ opacity: isMobile ? 0.9 : Math.max(0, 1 - heroScrollProgress * 2) }}
      >
        <span className="text-[11px] sm:text-xs tracking-widest uppercase font-bold text-stone-200/90 mb-1.5 drop-shadow-sm">
          ROLE PARA CONHECER
        </span>
        <div className="w-[1.5px] h-5 sm:h-6 bg-gradient-to-b from-[#D9AD5B] via-[#C86F42] to-transparent rounded-full animate-pulse opacity-90" />
      </div>

      {/* 
        =======================================================================
        ORGANIC TERRAIN DIVIDER: Curva de relevo orgânica conectando à 2ª dobra em #14251C
        =======================================================================
      */}
      <div className="relative w-full z-20 -mb-[1px]">
        <OrganicTerrainDivider height={48} fill="#14251C" />
      </div>
    </section>
  );
}
