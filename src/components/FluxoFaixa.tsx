import { useScrollReveal } from '../hooks/useScrollReveal';
import { FieldRowsPattern, OrganicGrainTexture } from './RuralAccents';

export default function FluxoFaixa() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const steps = [
    {
      id: 'gastei',
      num: '01',
      emoji: '💸',
      label: 'GASTEI',
      sub: 'Comprei / Despesa',
      color: '#C86F42', // Terracota
    },
    {
      id: 'produzi',
      num: '02',
      emoji: '📦',
      label: 'PRODUZI',
      sub: 'Colheita no campo',
      color: '#22c55e', // Verde
    },
    {
      id: 'vendi',
      num: '03',
      emoji: '💰',
      label: 'VENDI',
      sub: 'Entrou dinheiro',
      color: '#D9AD5B', // Dourado Safra
    },
    {
      id: 'acompanhei',
      num: '04',
      emoji: '📊',
      label: 'ACOMPANHEI',
      sub: 'Resultado claro',
      color: '#34d399', // Esmeralda
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#14251C] text-stone-100 border-y border-emerald-900/60 relative overflow-hidden">
      {/* Detalhes rurais discretos */}
      <OrganicGrainTexture opacity={0.04} />
      <FieldRowsPattern stroke="rgba(217, 173, 91, 0.05)" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Narrativa da Jornada do Produtor */}
        <div className={`text-center max-w-xl mx-auto mb-14 fade-up-init ${isVisible ? 'fade-up-active' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b3325] border border-emerald-800/60 text-xs font-bold text-[#D9AD5B] uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C86F42]" />
            A JORNADA DO PRODUTOR NO APLICATIVO
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Do campo ao resultado em 4 passos
          </h3>
          <p className="text-sm text-stone-300 mt-2">
            Cada etapa conecta o que você fez na roça com o fechamento da safra.
          </p>
        </div>

        {/* Desktop Horizontal Flow com linha contínua conectando as etapas */}
        <div className="hidden md:block relative">
          {/* Linha guia contínua em terracota / dourado */}
          <div
            className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#C86F42]/40 via-[#D9AD5B]/60 to-[#34d399]/50 z-0 transition-opacity duration-700"
            style={{ opacity: isVisible ? 1 : 0 }}
          />

          <div className="grid grid-cols-4 gap-4 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const delayMs = idx * 120;
              return (
                <div
                  key={step.id}
                  className={`bg-[#183023] rounded-2xl p-5 border border-emerald-800/60 soft-card-lift flex flex-col items-center text-center shadow-lg transition-all duration-700 ease-out`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(22px)',
                    transitionDelay: `${delayMs}ms`,
                  }}
                >
                  {/* Badge da etapa */}
                  <div className="flex items-center justify-between w-full mb-3 text-[11px] font-extrabold text-stone-400">
                    <span className="px-2 py-0.5 rounded-md bg-[#0f2117] border border-emerald-900/80 text-emerald-400">
                      PASSO {step.num}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>

                  {/* Ícone */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0f2117] border border-emerald-800/40 flex items-center justify-center text-3xl mb-3 shadow-inner">
                    <span role="img" aria-label={step.label}>
                      {step.emoji}
                    </span>
                  </div>

                  {/* Rótulo */}
                  <h4
                    className="text-base font-extrabold tracking-wider uppercase mb-1"
                    style={{ color: step.color }}
                  >
                    {step.label}
                  </h4>
                  <p className="text-xs text-stone-300 font-medium">
                    {step.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline com Linha Contínua */}
        <div className="md:hidden relative max-w-sm mx-auto pl-4">
          {/* Linha vertical terracota/dourado */}
          <div
            className="absolute top-4 bottom-4 left-7 w-[2px] bg-gradient-to-b from-[#C86F42] via-[#D9AD5B] to-[#34d399] transition-opacity duration-700"
            style={{ opacity: isVisible ? 1 : 0 }}
          />

          <div className="space-y-4">
            {steps.map((step, idx) => {
              const delayMs = idx * 100;
              return (
                <div
                  key={step.id}
                  className="relative flex items-center gap-4 transition-all duration-700 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
                    transitionDelay: `${delayMs}ms`,
                  }}
                >
                  {/* Marcador da linha */}
                  <div
                    className="w-7 h-7 rounded-full bg-[#14251C] border-2 flex items-center justify-center text-[10px] font-black text-white shrink-0 z-10 shadow-sm"
                    style={{ borderColor: step.color }}
                  >
                    {step.num}
                  </div>

                  {/* Card do passo */}
                  <div className="flex-1 bg-[#183023] rounded-2xl p-4 border border-emerald-800/60 shadow-md flex items-center gap-3.5 soft-card-lift">
                    <span className="text-2xl select-none">{step.emoji}</span>
                    <div>
                      <h4
                        className="text-sm font-extrabold tracking-wider uppercase leading-tight"
                        style={{ color: step.color }}
                      >
                        {step.label}
                      </h4>
                      <p className="text-[11px] text-stone-300 mt-0.5">
                        {step.sub}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resumo da jornada sutil no rodapé */}
        <div className={`mt-10 text-center fade-up-init ${isVisible ? 'fade-up-active' : ''}`} style={{ transitionDelay: '500ms' }}>
          <p className="text-xs text-stone-400 font-medium">
            CAMPO <span className="text-[#C86F42]">↓</span> REGISTRO <span className="text-[#C86F42]">↓</span> ORGANIZAÇÃO <span className="text-[#D9AD5B]">↓</span> VENDA <span className="text-[#34d399]">↓</span> RESULTADO
          </p>
        </div>
      </div>
    </section>
  );
}
