import { useScrollReveal } from '../hooks/useScrollReveal';
import tractorSprayerSunsetImg from '../assets/images/tractor_sprayer_sunset_field_1790945126627.jpg';
import { OrganicGrainTexture, TopographicLines, OrganicTerrainDivider } from './RuralAccents';

export default function Dor() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id="dor"
      ref={ref}
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 text-white overflow-hidden bg-[#14251C]"
    >
      {/* 
        =======================================================================
        BACKGROUND: TRATOR PULVERIZADOR AO PÔR DO SOL DOURADO + TRANSITION BRIDGES
        =======================================================================
      */}
      <div className="absolute inset-0 z-0">
        {/* Fotografia rural com revelação suave e escala contida */}
        <div
          className="w-full h-full transition-all duration-800 ease-out"
          style={{
            opacity: isVisible ? 1 : 0.4,
            transform: isVisible ? 'scale(1)' : 'scale(1.03)',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <img
            src={tractorSprayerSunsetImg}
            alt="Trator pulverizador ao pôr do sol em lavoura verde alinhada com névoa dourada de pulverização"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[center_35%]"
          />
        </div>

        {/* Overlay base Verde Floresta (#14251C) sutil para harmonizar a paleta terrosa */}
        <div className="absolute inset-0 bg-[#14251C]/45" />

        {/* Forest Gradient Bridge no Topo: encontro perfeito com a Hero */}
        <div
          className="absolute inset-x-0 top-0 h-36 sm:h-48 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #14251C 0%, rgba(20, 37, 28, 0.75) 50%, transparent 100%)',
          }}
        />

        {/* Gradiente lateral esquerdo para garantir legibilidade impecável dos textos */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14251C]/92 via-[#14251C]/65 to-transparent" />

        {/* TOPOGRAPHIC FADE-IN: Linhas topográficas discretas */}
        <div
          className="transition-opacity duration-1000 ease-out"
          style={{ opacity: isVisible ? 0.35 : 0.05 }}
        >
          <TopographicLines color="rgba(217, 173, 91, 0.09)" />
        </div>

        {/* Textura tátil de grão orgânico */}
        <OrganicGrainTexture opacity={0.035} />

        {/* 
          Ponte de transição inferior harmoniosa para a terceira dobra (#0d1b13):
          Degradê gradual entre a lavoura ao pôr do sol e a seção do aplicativo
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 sm:h-56 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(20, 37, 28, 0.35) 30%, rgba(13, 27, 19, 0.85) 75%, #0d1b13 100%)',
          }}
        />
      </div>

      {/* 
        =======================================================================
        CONTEÚDO DA SEGUNDA DOBRA: SOFT CONTENT REVEAL + HARVEST LINE REVEAL
        =======================================================================
      */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-2xl space-y-6">
          
          {/* HARVEST LINE REVEAL + Sobrancelha */}
          <div className="flex items-center gap-3">
            <div
              className="h-[2px] rounded-full bg-[#C86F42] transition-all duration-700 ease-out"
              style={{
                width: isVisible ? '64px' : '0px',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full bg-[#D9AD5B] transition-opacity duration-500 delay-200"
              style={{ opacity: isVisible ? 1 : 0 }}
            />
            <p
              className="text-xs sm:text-sm font-semibold tracking-wider text-[#D9AD5B] uppercase transition-all duration-600 delay-150 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              NO DIA A DIA
            </p>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2] [text-wrap:balance] drop-shadow-md transition-all duration-600 delay-250 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            O trabalho está no campo.
            <br />
            <span className="text-stone-200 font-semibold">
              As contas ficam espalhadas.
            </span>
          </h2>

          {/* Textos descritivos da dor */}
          <div
            className="pt-2 space-y-4 text-lg sm:text-xl text-stone-100 leading-relaxed font-normal drop-shadow-sm transition-all duration-650 delay-350 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <p>
              Um gasto no caderno. Uma venda no WhatsApp. Outra informação guardada na cabeça.
            </p>
            <p className="text-stone-300">
              Quando chega a hora de juntar tudo, fica mais difícil enxergar como foi a safra.
            </p>
          </div>

          {/* Efeito de profundidade e elegância rural */}
          <div
            className="pt-4 transition-opacity duration-700 delay-500"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#06140B]/60 border border-emerald-900/60 text-xs text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86F42]" />
              <span>Rotina real do pequeno e médio produtor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divisor orgânico suave que conecta perfeitamente a segunda dobra à terceira dobra */}
      <div className="relative w-full z-20 mt-14 sm:mt-20">
        <OrganicTerrainDivider height={44} fill="#0d1b13" />
      </div>
    </section>
  );
}
