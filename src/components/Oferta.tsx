import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check } from 'lucide-react';
import sproutTextureImg from '../assets/images/minha_safra_sprout_texture_1790947429542.jpg';
import { FieldRowsPattern, OrganicGrainTexture, HarvestAccentLine, TopographicLines } from './RuralAccents';

interface OfertaProps {
  onOpenCheckout: () => void;
}

export default function Oferta({ onOpenCheckout }: OfertaProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  const benefits = [
    'Registre seus gastos',
    'Registre sua produção',
    'Registre suas vendas',
    'Acompanhe seus números',
    'Organize clientes',
    'Facilite contatos pelo WhatsApp',
  ];

  return (
    <section
      id="oferta"
      className="relative pt-24 sm:pt-32 pb-28 sm:pb-36 bg-[#0B1E13] text-stone-100 overflow-hidden"
      ref={ref}
    >
      {/* 
        =======================================================================
        BACKGROUND: ÍCONE MINHA SAFRA EM VIDRO VERDE TRANSLÚCIDO + TEXTURA
        COM TRANSIÇÕES HARMÔNICAS 10ª → 11ª E 11ª → 12ª (SEM LINHAS VISÍVEIS)
        =======================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={sproutTextureImg}
          alt="Textura verde floresta com o ícone Minha Safra em relevo translúcido esmeralda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
          style={{
            transform: isVisible ? 'scale(1.015)' : 'scale(1.04)',
          }}
        />

        {/* Overlay escuro em Verde Floresta Profundo (#0B1E13) */}
        <div className="absolute inset-0 bg-[#0B1E13]/80 sm:bg-[#0B1E13]/70 backdrop-blur-[0.2px]" />

        {/* 
          TRANSIÇÃO SUPERIOR 10ª → 11ª DOBRA:
          Funde gradualmente com a base da 10ª dobra sem linha aparente
        */}
        <div
          className="absolute inset-x-0 top-0 h-44 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #0B1E13 0%, rgba(11, 30, 19, 0.9) 35%, rgba(11, 30, 19, 0.4) 70%, transparent 100%)',
          }}
        />

        {/* Halo esmeralda centralizado valorizando o card de preço */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.14)_0%,transparent_65%)] pointer-events-none" />

        {/* Textura tátil orgânica e detalhes discretos */}
        <OrganicGrainTexture opacity={0.035} />
        <TopographicLines color="rgba(52, 211, 153, 0.06)" />
        <FieldRowsPattern stroke="rgba(217, 173, 91, 0.04)" />

        {/* 
          TRANSIÇÃO HARMÔNICA 11ª → 12ª DOBRA:
          Funde gradualmente o tom verde profundo (#0B1E13) com o verde noturno da 12ª dobra (Faq #0c1a11)
          com grande altura (h-48 a h-64) e múltiplos pontos de parada (stops) suaves, sem divisores rígidos.
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-64 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(11, 30, 19, 0.25) 30%, rgba(11, 28, 18, 0.65) 60%, rgba(12, 26, 17, 0.95) 85%, #0c1a11 100%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Card grande e centralizado com soft-card-lift e spotlight */}
        <div
          className={`bg-[#0f2417]/90 backdrop-blur-md rounded-3xl p-8 sm:p-14 border border-emerald-500/30 shadow-2xl text-center max-w-2xl mx-auto soft-card-lift mockup-reveal-center-init ${
            isVisible ? 'mockup-reveal-active' : ''
          }`}
        >
          {/* Sobrancelha com Harvest Accent */}
          <div className="flex justify-center mb-3">
            <HarvestAccentLine color="#D9AD5B" />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D9AD5B] uppercase mb-3">
            ACESSO AO MINHA SAFRA
          </p>

          {/* Título */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 [text-wrap:balance] drop-shadow-md">
            Comece a organizar sua safra.
          </h2>

          {/* Preço grande em destaque */}
          <div className="my-8">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-3xl sm:text-4xl font-semibold text-[#D9AD5B]">R$</span>
              <span className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight tabular-nums drop-shadow-md">
                20
              </span>
            </div>
            <p className="text-base sm:text-lg text-emerald-200/90 font-medium mt-2">
              Pagamento único
            </p>
          </div>

          {/* Lista curta com soft fade up */}
          <div className="my-10 max-w-md mx-auto text-left space-y-3.5 border-y border-emerald-800/40 py-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1b3525] text-[#34d399] flex items-center justify-center shrink-0 border border-emerald-700/50">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-base sm:text-lg text-stone-200 font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Grande */}
          <button
            onClick={onOpenCheckout}
            type="button"
            className="w-full sm:w-auto px-10 py-5 bg-[#C86F42] hover:bg-[#b56035] text-white rounded-xl font-bold text-lg shadow-xl shadow-stone-950/40 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            QUERO ORGANIZAR MINHA SAFRA
          </button>

          <p className="text-xs text-stone-300 mt-6">
            Acesso vitalício. Sem mensalidades ou renovações.
          </p>
        </div>
      </div>
    </section>
  );
}
