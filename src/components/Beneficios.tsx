import { useScrollReveal } from '../hooks/useScrollReveal';
import sproutTextureImg from '../assets/images/minha_safra_sprout_texture_1790947429542.jpg';
import { FieldRowsPattern, OrganicGrainTexture, HarvestAccentLine, TopographicLines } from './RuralAccents';

export default function Beneficios() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="beneficios"
      className="relative pt-24 sm:pt-32 pb-28 sm:pb-36 bg-[#0d1e15] text-white overflow-hidden"
      ref={ref}
    >
      {/* 
        =======================================================================
        BACKGROUND: ÍCONE MINHA SAFRA EM VIDRO VERDE TRANSLÚCIDO + TEXTURA
        COM TRANSIÇÕES HARMÔNICAS 8ª → 9ª E 9ª → 10ª (SEM LINHAS VISÍVEIS)
        =======================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={sproutTextureImg}
          alt="Textura verde floresta com o ícone Minha Safra em relevo translúcido esmeralda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
          style={{
            transform: isVisible ? 'scale(1.015)' : 'scale(1.035)',
          }}
        />

        {/* Overlay escuro em tom Verde Floresta (#0d1e15) garantindo leitura limpa dos cartões */}
        <div className="absolute inset-0 bg-[#0d1e15]/75 sm:bg-[#0d1e15]/65 backdrop-blur-[0.2px]" />

        {/* 
          TRANSIÇÃO SUPERIOR 8ª → 9ª DOBRA:
          Recebe de forma homogênea a atmosfera da 8ª dobra (#0d1e15)
        */}
        <div
          className="absolute inset-x-0 top-0 h-44 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #0d1e15 0%, rgba(13, 30, 21, 0.9) 35%, rgba(13, 30, 21, 0.4) 70%, transparent 100%)',
          }}
        />

        {/* Halo de luz esmeralda suave centralizado para destacar o ícone Minha Safra */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.12)_0%,transparent_65%)] pointer-events-none" />

        {/* Textura orgânica e linhas topográficas sutis */}
        <OrganicGrainTexture opacity={0.035} />
        <TopographicLines color="rgba(52, 211, 153, 0.06)" />
        <FieldRowsPattern stroke="rgba(217, 173, 91, 0.04)" />

        {/* 
          TRANSIÇÃO HARMÔNICA 9ª → 10ª DOBRA:
          Funde gradualmente o tom #0d1e15 com o tom #18261e da 10ª dobra (Simplicidade)
          em gradiente contínuo e amplo (h-48 a h-64) com múltiplos stops.
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-64 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(13, 30, 21, 0.25) 30%, rgba(20, 35, 27, 0.65) 60%, rgba(24, 38, 30, 0.95) 85%, #18261e 100%)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Title com Soft Fade Up */}
        <div className={`text-center max-w-2xl mx-auto mb-14 sm:mb-18 fade-up-init ${isVisible ? 'fade-up-active' : ''}`}>
          <div className="flex justify-center mb-3">
            <HarvestAccentLine color="#D9AD5B" />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#D9AD5B] uppercase mb-3">
            O QUE VOCÊ TEM NO APLICATIVO
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance] drop-shadow-md">
            Feito para facilitar.
          </h2>
        </div>

        {/* Layout matching user screenshot com soft-card-lift */}
        <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
          {/* Top Row: 2 Big Cards (+ VENDI / - GASTEI) com Soft Card Lift (3-5px) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {/* + VENDI */}
            <div
              className="bg-[#102419]/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border-2 border-[#D9AD5B]/80 hover:border-[#D9AD5B] transition-all flex flex-col items-center text-center shadow-lg shadow-black/40 group soft-card-lift"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 650ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: '100ms',
              }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-stone-600/70 bg-[#0d1d14] flex items-center justify-center text-3xl sm:text-4xl mb-5 shadow-inner transition-transform group-hover:scale-105">
                <span role="img" aria-label="Saco de dinheiro">💰</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#D9AD5B] tracking-wide mb-2">
                + VENDI
              </h3>
              <p className="text-base sm:text-lg text-stone-200 font-medium">
                Entrou dinheiro
              </p>
            </div>

            {/* - GASTEI */}
            <div
              className="bg-[#102419]/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border-2 border-[#C86F42]/80 hover:border-[#C86F42] transition-all flex flex-col items-center text-center shadow-lg shadow-black/40 group soft-card-lift"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 650ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: '200ms',
              }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-stone-600/70 bg-[#0d1d14] flex items-center justify-center text-3xl sm:text-4xl mb-5 shadow-inner transition-transform group-hover:scale-105">
                <span role="img" aria-label="Dinheiro com asas">💸</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#C86F42] tracking-wide mb-2">
                - GASTEI
              </h3>
              <p className="text-base sm:text-lg text-stone-200 font-medium">
                Saiu dinheiro
              </p>
            </div>
          </div>

          {/* Bottom Row: 3 Smaller Feature Cards com Soft Card Lift (3-5px) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {/* WhatsApp */}
            <div
              className="bg-[#102419]/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-emerald-900/50 hover:border-emerald-700/60 transition-all flex flex-col items-center text-center shadow-md shadow-black/40 soft-card-lift"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 650ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: '300ms',
              }}
            >
              <div className="text-3xl sm:text-4xl mb-3" role="img" aria-label="Balão de mensagem">
                💬
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                WhatsApp
              </h4>
              <p className="text-sm font-semibold text-emerald-400">
                Compartilha resumo
              </p>
            </div>

            {/* Calculadora */}
            <div
              className="bg-[#102419]/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-emerald-900/50 hover:border-emerald-700/60 transition-all flex flex-col items-center text-center shadow-md shadow-black/40 soft-card-lift"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 650ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: '400ms',
              }}
            >
              <div className="text-3xl sm:text-4xl mb-3" role="img" aria-label="Calculadora">
                🧮
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Calculadora
              </h4>
              <p className="text-sm font-semibold text-emerald-400">
                Resultado apurado
              </p>
            </div>

            {/* Colheita */}
            <div
              className="bg-[#102419]/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-emerald-900/50 hover:border-emerald-700/60 transition-all flex flex-col items-center text-center shadow-md shadow-black/40 soft-card-lift"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 650ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: '500ms',
              }}
            >
              <div className="text-3xl sm:text-4xl mb-3" role="img" aria-label="Caixa de colheita">
                📦
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Colheita
              </h4>
              <p className="text-sm font-semibold text-[#D9AD5B]">
                Produção anotada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
