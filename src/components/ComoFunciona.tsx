import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowDown } from 'lucide-react';
import sprayerNightStarsImg from '../assets/images/sprayer_night_stars_lights_1790945533939.jpg';
import { OrganicGrainTexture, TopographicLines, HarvestAccentLine, OrganicTerrainDivider } from './RuralAccents';

export default function ComoFunciona() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  const steps = [
    {
      number: '01',
      action: 'ANOTE',
      description: 'Registre gastos, produção e vendas com poucos toques no celular.',
      accent: '#C86F42', // Terracota
    },
    {
      number: '02',
      action: 'ACOMPANHE',
      description: 'Veja seus registros organizados por safra, sem papelada perdida.',
      accent: '#D9AD5B', // Dourado Safra
    },
    {
      number: '03',
      action: 'ENTENDA',
      description: 'Acompanhe o lucro real apurado e compartilhe no WhatsApp.',
      accent: '#34d399', // Verde Esmeralda
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative pt-16 sm:pt-24 pb-8 sm:pb-14 text-white overflow-hidden bg-[#070b09]"
    >
      {/* 
        =======================================================================
        BACKGROUND: PULVERIZADOR AGRÍCOLA SOB AS ESTRELAS + FARÓIS & BARRAS
        =======================================================================
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={sprayerNightStarsImg}
          alt="Pulverizador agrícola trabalhando sob as estrelas na lavoura com barras iluminadas por faróis"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_42%] transition-transform duration-1000 ease-out"
          style={{
            transform: isVisible ? 'scale(1.015)' : 'scale(1.04)',
          }}
        />

        {/* Overlay escuro em tom noturno profundo (#070b09) com excelente contraste */}
        <div className="absolute inset-0 bg-[#070b09]/70 sm:bg-[#070b09]/45" />

        {/* Ponte de transição superior: recebe suavemente a 3ª dobra (#0d1b13 / #070b09) sem corte seco */}
        <div
          className="absolute inset-x-0 top-0 h-40 sm:h-56 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #0d1b13 0%, rgba(7, 11, 9, 0.85) 50%, transparent 100%)',
          }}
        />

        {/* Gradiente radial aconchegante com os faróis e barras simétricas ao centro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_25%,#070b09_92%)] pointer-events-none" />

        {/* Linhas topográficas discretas */}
        <TopographicLines color="rgba(217, 173, 91, 0.08)" />

        {/* Textura tátil orgânica */}
        <OrganicGrainTexture opacity={0.035} />

        {/* 
          Ponte de transição inferior harmoniosa para a 5ª dobra (#090d0b / StickyProductShowcase):
          Degradê contínuo entre o trabalho noturno de pulverização e a apresentação das telas no campo
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(7, 11, 9, 0.6) 35%, rgba(9, 13, 11, 0.9) 75%, #07110c 100%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Title com Soft Fade Up */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 sm:mb-20 fade-up-init ${
            isVisible ? 'fade-up-active' : ''
          }`}
        >
          <div className="flex justify-center mb-3">
            <HarvestAccentLine color="#C86F42" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance] drop-shadow-md">
            Três passos. Só isso.
          </h2>
          <p className="text-base sm:text-lg text-stone-100 mt-3 drop-shadow-sm font-semibold">
            Simplicidade projetada para a rotina no campo, seja de dia ou no trabalho noturno.
          </p>
        </div>

        {/* 3 Cards: Desktop horizontal 3-col com estilo translúcido premium (glassmorphism rústico) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const delayMs = idx * 140;
            return (
              <div
                key={step.number}
                className="bg-[#0e1611]/90 backdrop-blur-md rounded-2xl p-7 sm:p-10 border border-emerald-900/50 hover:border-emerald-500/60 shadow-lg shadow-black/50 flex flex-col justify-between min-h-[220px] soft-card-lift transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: `${delayMs}ms`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs sm:text-sm font-extrabold tracking-wider uppercase px-3 py-1 rounded-full border"
                      style={{
                        color: step.accent,
                        borderColor: `${step.accent}60`,
                        backgroundColor: `${step.accent}20`,
                      }}
                    >
                      PASSO {step.number}
                    </span>
                    <span
                      className="text-2xl sm:text-3xl font-black opacity-40"
                      style={{ color: step.accent }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">
                    {step.action}
                  </h3>

                  <p className="text-base text-stone-200 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-white/10 flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full shadow-xs"
                    style={{ backgroundColor: step.accent }}
                  />
                  <span className="text-xs sm:text-sm font-bold text-stone-200">
                    Direto pelo celular
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Intermediário da 4ª Dobra: leva diretamente à oferta existente */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={() => {
              const el = document.getElementById('oferta');
              if (el) {
                const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
              }
            }}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 min-h-[52px] bg-[#C86F42] hover:bg-[#b56035] text-white rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-stone-950/40 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>VER OFERTA</span>
            <ArrowDown className="w-5 h-5 text-white/90" />
          </button>
        </div>
      </div>

      {/* Divisor orgânico suave na base para conectar harmonicamente com a quinta dobra */}
      <div className="relative w-full z-20 mt-8 sm:mt-10 -mb-[1px]">
        <OrganicTerrainDivider height={44} fill="#07110c" />
      </div>
    </section>
  );
}
