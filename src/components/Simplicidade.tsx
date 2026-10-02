import { useScrollReveal } from '../hooks/useScrollReveal';
import farmerSunsetPhoneImg from '../assets/images/farmer_sunset_phone_field_1790950925226.jpg';
import { OrganicGrainTexture, TopographicLines, HarvestAccentLine } from './RuralAccents';

export default function Simplicidade() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  const features = [
    {
      symbol: 'Aa',
      label: 'LETRAS GRANDES',
      desc: 'Fácil de ler embaixo do sol ou no galpão.',
    },
    {
      symbol: '☝',
      label: 'BOTÕES FÁCEIS',
      desc: 'Áreas de toque amplas para quem está na lida.',
    },
    {
      symbol: '💬',
      label: 'PALAVRAS SIMPLES',
      desc: 'Sem jargões complicados de contabilidade.',
    },
    {
      symbol: '📱',
      label: 'FEITO PARA CELULAR',
      desc: 'Funciona rápido no aparelho que você já tem.',
    },
  ];

  return (
    <section
      id="simplicidade"
      className="relative pt-24 sm:pt-32 pb-28 sm:pb-36 text-white overflow-hidden bg-[#18261e]"
      ref={ref}
    >
      {/* 
        =======================================================================
        BACKGROUND: PRODUTOR RURAL COM CELULAR NA PLANTAÇÃO AO PÔR DO SOL
        COM TRANSIÇÕES HARMÔNICAS 9ª → 10ª E 10ª → 11ª (SEM LINHAS VISÍVEIS)
        =======================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={farmerSunsetPhoneImg}
          alt="Produtor rural com chapéu de palha usando o aplicativo Minha Safra no smartphone no meio da plantação ao pôr do sol dourado"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_35%] transition-transform duration-1000 ease-out"
          style={{
            transform: isVisible ? 'scale(1.015)' : 'scale(1.04)',
          }}
        />

        {/* Overlay escuro em tom Verde Floresta (#18261e) para leitura agradável e calorosa */}
        <div className="absolute inset-0 bg-[#14231b]/80 sm:bg-[#14231b]/70 backdrop-blur-[0.2px]" />

        {/* 
          TRANSIÇÃO SUPERIOR 9ª → 10ª DOBRA:
          Funde gradualmente com a 9ª dobra (Beneficios) sem cortes
        */}
        <div
          className="absolute inset-x-0 top-0 h-44 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #18261e 0%, rgba(20, 35, 27, 0.9) 35%, rgba(20, 35, 27, 0.4) 70%, transparent 100%)',
          }}
        />

        {/* Gradiente radial aconchegante valorizando a luz poente dourada */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_20%,#14231b_90%)] pointer-events-none" />

        {/* Textura tátil orgânica e linhas topográficas sutis */}
        <OrganicGrainTexture opacity={0.035} />
        <TopographicLines color="rgba(217, 173, 91, 0.08)" />

        {/* 
          TRANSIÇÃO HARMÔNICA 10ª → 11ª DOBRA:
          Funde gradualmente a cena do produtor ao pôr do sol (#18261e) com a 11ª dobra (Oferta #0B1E13)
          com grande altura (h-48 a h-64) e múltiplos pontos de parada (stops) suaves.
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-64 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(20, 35, 27, 0.25) 30%, rgba(16, 33, 23, 0.65) 60%, rgba(11, 30, 19, 0.95) 85%, #0B1E13 100%)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Title com Soft Fade Up */}
        <div className={`fade-up-init ${isVisible ? 'fade-up-active' : ''}`}>
          <div className="flex justify-center mb-3">
            <HarvestAccentLine color="#C86F42" />
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9AD5B]" />
            PRATICIDADE NA ROÇA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance] drop-shadow-md">
            Você não precisa entender de sistemas.
          </h2>
          <p className="text-xl sm:text-2xl text-emerald-300 font-semibold mb-16 drop-shadow-sm">
            O Minha Safra foi feito para ser simples.
          </p>
        </div>

        {/* 4 Características com Soft Card Lift em glassmorphism rústico escuro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((item, idx) => {
            const delayMs = idx * 100;
            return (
              <div
                key={item.label}
                className="bg-[#0f1f16]/85 backdrop-blur-md rounded-2xl p-7 border border-white/10 hover:border-emerald-500/50 shadow-lg shadow-black/40 flex flex-col items-center text-center soft-card-lift transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${delayMs}ms`,
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-2xl font-bold text-[#D9AD5B] mb-4 select-none shadow-inner">
                  {item.symbol}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wider mb-2">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Texto final */}
        <div
          className={`fade-up-init ${isVisible ? 'fade-up-active' : ''}`}
          style={{ transitionDelay: '450ms' }}
        >
          <div className="inline-block px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-md">
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
              Abra. Registre. Continue seu trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
