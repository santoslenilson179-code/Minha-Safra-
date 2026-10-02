import { useEffect, useRef, useState } from 'react';
import { AppStepId, AppScreenView } from './AppScreenView';
import PhoneFrame from './PhoneFrame';
import sproutTextureImg from '../assets/images/minha_safra_sprout_texture_1790947429542.jpg';
import { TopographicLines, OrganicGrainTexture, OrganicTerrainDivider } from './RuralAccents';

interface StepData {
  id: AppStepId;
  num: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  indicator: string;
  accentColor: string;
}

const STEPS: StepData[] = [
  {
    id: 'gastos',
    num: '01',
    eyebrow: 'SEUS GASTOS',
    title: 'Gastou?',
    subtitle: 'Anote na hora.',
    description:
      'Registre combustível, diária, adubo, sementes, transporte e outros gastos da sua safra.',
    indicator: 'GASTEI',
    accentColor: '#C86F42', // Terracota
  },
  {
    id: 'producao',
    num: '02',
    eyebrow: 'SUA PRODUÇÃO',
    title: 'Produziu?',
    subtitle: 'Registre.',
    description:
      'Anote quanto foi produzido e mantenha os números da safra organizados.',
    indicator: 'PRODUZI',
    accentColor: '#22c55e', // Verde
  },
  {
    id: 'vendas',
    num: '03',
    eyebrow: 'SUAS VENDAS',
    title: 'Vendeu?',
    subtitle: 'Registre também.',
    description:
      'Informe quantidade e valor para manter suas vendas organizadas.',
    indicator: 'VENDI',
    accentColor: '#D9AD5B', // Dourado
  },
  {
    id: 'resultado',
    num: '04',
    eyebrow: 'SEUS NÚMEROS',
    title: 'Quer conferir?',
    subtitle: 'Veja seus números.',
    description:
      'Veja gastos e vendas reunidos com base no que você registrou.',
    indicator: 'ACOMPANHEI',
    accentColor: '#34d399', // Esmeralda
  },
];

export default function StickyProductShowcase() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calcular o progresso de rolagem dentro do container (0 a 1)
      const scrolled = Math.max(0, -containerTop);
      const totalScrollable = Math.max(1, containerHeight - windowHeight);
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
      setScrollProgress(progress);

      // Determinar qual etapa está mais próxima do meio da viewport
      let bestIndex = 0;
      let minDistance = Infinity;
      const targetY = windowHeight * 0.45;

      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const elRect = el.getBoundingClientRect();
        const elCenter = elRect.top + elRect.height / 2;
        const dist = Math.abs(elCenter - targetY);
        if (dist < minDistance) {
          minDistance = dist;
          bestIndex = idx;
        }
      });

      setActiveStepIndex(bestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeStep = STEPS[activeStepIndex];

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative bg-[#07110c] text-white overflow-visible pt-16 pb-20 sm:pb-28"
    >
      {/* 
        =======================================================================
        BACKGROUND: ÍCONE MINHA SAFRA EM VIDRO VERDE TRANSLÚCIDO + GLOW AMBIENTE
        =======================================================================
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={sproutTextureImg}
          alt="Textura verde floresta com o ícone Minha Safra em relevo translúcido esmeralda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
          style={{
            transform: `scale(${1 + scrollProgress * 0.025})`,
          }}
        />

        {/* Overlay escuro em tom Verde Floresta (#07110c) para leitura perfeita dos textos e mockups */}
        <div className="absolute inset-0 bg-[#07110c]/70 sm:bg-[#07110c]/60 backdrop-blur-[0.2px]" />

        {/* Ponte de transição superior: recebe suavemente a 4ª dobra (#070b09 / #07110c) sem corte seco */}
        <div
          className="absolute inset-x-0 top-0 h-44 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #070b09 0%, rgba(7, 11, 9, 0.85) 45%, transparent 100%)',
          }}
        />

        {/* Halo de luz esmeralda suave centralizado sutilmente */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.12)_0%,transparent_65%)] pointer-events-none" />

        {/* Linhas topográficas discretas e textura de grão orgânico */}
        <OrganicGrainTexture opacity={0.035} />
        <TopographicLines color="rgba(52, 211, 153, 0.07)" />

        {/* 
          Ponte de transição inferior harmoniosa para a 6ª dobra (#0b100d / Harvest Progress Line):
          Fusão contínua entre o verde floresta esmeralda e a atmosfera noturna da próxima dobra
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(7, 17, 12, 0.6) 35%, rgba(11, 16, 13, 0.9) 75%, #0b100d 100%)',
          }}
        />
      </div>

      {/* CABEÇALHO DA SEÇÃO (Antes do sticky começar) */}
      <div className="max-w-6xl mx-auto px-6 pt-16 sm:pt-24 pb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4 backdrop-blur-md shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C86F42]" />
          VEJA POR DENTRO
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] [text-wrap:balance] drop-shadow-md">
          Simples de usar.
          <br />
          <span className="text-emerald-300 font-semibold">Fácil de entender.</span>
        </h2>

        <p className="text-base sm:text-lg text-stone-200 max-w-xl mx-auto mt-4 drop-shadow-sm font-medium">
          Veja como as principais tarefas funcionam no Minha Safra, na lida do dia ou no trabalho noturno.
        </p>
      </div>

      {/* =========================================================================
          DESKTOP: STICKY SHOWCASE (CELULAR FIXO À ESQUERDA, SCROLL À DIREITA)
          ========================================================================= */}
      <div className="hidden lg:block max-w-[1240px] mx-auto px-6 relative z-10 pb-28">
        <div className="grid grid-cols-12 gap-8 xl:gap-12 items-start relative">
          
          {/* LADO ESQUERDO: CELULAR STICKY (45-50%) */}
          <div className="col-span-5 sticky top-24 pt-4 pb-8 flex flex-col items-center">
            <div className="relative w-full max-w-[370px]">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[95%] rounded-full pointer-events-none filter blur-2xl z-0"
                style={{
                  background:
                    'radial-gradient(circle, rgba(52, 211, 153, 0.22) 0%, rgba(7, 17, 12, 0.4) 45%, transparent 70%)',
                }}
                aria-hidden="true"
              />

              {/* Celular com acabamento dark elegante */}
              <div className="phone-depth-reveal phone-depth-active relative z-10">
                <PhoneFrame
                  variant="dark"
                  badge={`${activeStep.num} • ${activeStep.indicator}`}
                  withSpotlight={false}
                >
                  <div className="relative w-full h-full min-h-[580px]">
                    {STEPS.map((step, idx) => {
                      const isCurrent = idx === activeStepIndex;
                      return (
                        <div
                          key={step.id}
                          className="absolute inset-0 transition-all duration-500 ease-out"
                          style={{
                            opacity: isCurrent ? 1 : 0,
                            transform: isCurrent ? 'scale(1)' : 'scale(0.98)',
                            pointerEvents: isCurrent ? 'auto' : 'none',
                          }}
                        >
                          <AppScreenView step={step.id} />
                        </div>
                      );
                    })}
                  </div>
                </PhoneFrame>
              </div>

              {/* Legenda discreta com nota demonstrativa */}
              <p className="text-[11px] text-stone-300 text-center mt-6">
                Exemplo demonstrativo • Tela real do aplicativo
              </p>
            </div>
          </div>

          {/* LADO DIREITO: PASSOS ROLÁVEIS (50-55%) COM LINHA VERTICAL DE PROGRESSO */}
          <div className="col-span-7 pl-6 xl:pl-10 relative">
            
            {/* LINHA DE PROGRESSO DO SHOWCASE + NAVEGAÇÃO LATERAL (01, 02, 03, 04) */}
            <div className="absolute left-0 top-12 bottom-24 w-[2px] bg-white/20">
              <div
                className="w-full bg-[#C86F42] transition-all duration-300 ease-out shadow-sm"
                style={{ height: `${Math.min(100, Math.max(5, scrollProgress * 100))}%` }}
              />
            </div>

            {/* ITENS ROLÁVEIS (4 etapas bem espaçadas) */}
            <div className="space-y-48 py-16">
              {STEPS.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    className="relative pl-8 transition-all duration-500 ease-out min-h-[360px] flex flex-col justify-center"
                    style={{
                      opacity: isActive ? 1 : 0.35,
                      transform: isActive ? 'translateY(0)' : 'translateY(12px)',
                    }}
                  >
                    {/* Indicador no trilho */}
                    <div
                      className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 bg-white transition-all duration-300"
                      style={{
                        borderColor: isActive ? step.accentColor : '#536B45',
                        backgroundColor: isActive ? step.accentColor : '#07110c',
                        transform: isActive ? 'scale(1.2)' : 'scale(1)',
                      }}
                    />

                    {/* Número da etapa */}
                    <span
                      className="text-4xl font-black tracking-tight mb-2 block"
                      style={{ color: isActive ? step.accentColor : '#6b7280' }}
                    >
                      {step.num}
                    </span>

                    {/* Sobrancelha com Terracotta/Dourado Accent */}
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: step.accentColor }}
                      />
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: step.accentColor }}
                      >
                        {step.eyebrow}
                      </span>
                    </div>

                    {/* Título & Subtítulo */}
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                      {step.title} {step.subtitle}
                    </h3>

                    {/* Descrição */}
                    <p className="text-base sm:text-lg text-stone-200 max-w-lg leading-relaxed font-normal">
                      {step.description}
                    </p>

                    {/* Card de contexto da etapa com glassmorphism rústico */}
                    <div className="mt-6 p-4 rounded-xl bg-[#0f1b14]/85 backdrop-blur-md border border-white/10 max-w-md shadow-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs shadow-inner"
                          style={{
                            backgroundColor: `${step.accentColor}25`,
                            color: step.accentColor,
                            border: `1px solid ${step.accentColor}50`,
                          }}
                        >
                          {step.num}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white uppercase tracking-wider">
                            {step.indicator}
                          </p>
                          <p className="text-xs text-stone-300">
                            Registro direto em poucos segundos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE: SEQUÊNCIA VERTICAL LIMPA
          ========================================================================= */}
      <div className="lg:hidden px-5 pb-24 space-y-20 relative z-10 max-w-md mx-auto">
        {STEPS.map((step) => (
          <div key={step.id} className="space-y-6">
            {/* Texto do passo */}
            <div className="text-center space-y-2">
              <span
                className="text-2xl font-black tracking-tight"
                style={{ color: step.accentColor }}
              >
                {step.num}
              </span>

              <div className="flex items-center justify-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: step.accentColor }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: step.accentColor }}
                >
                  {step.eyebrow}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {step.title} {step.subtitle}
              </h3>

              <p className="text-sm text-stone-300 leading-relaxed px-2">
                {step.description}
              </p>
            </div>

            {/* Mockup do passo ocupando 85-92% da largura */}
            <div className="w-full max-w-[340px] mx-auto shadow-xl rounded-[44px]">
              <PhoneFrame variant="dark" badge={step.indicator} withSpotlight={false}>
                <AppScreenView step={step.id} />
              </PhoneFrame>
            </div>
          </div>
        ))}

        <div className="text-center pt-4">
          <p className="text-sm text-stone-300 font-medium italic">
            “É assim que o Minha Safra acompanha sua rotina.”
          </p>
        </div>
      </div>

      {/* Divisor orgânico suave na base para conectar harmonicamente com a sexta dobra */}
      <div className="relative w-full z-20 mt-12 sm:mt-16">
        <OrganicTerrainDivider height={44} fill="#0b100d" />
      </div>
    </section>
  );
}
