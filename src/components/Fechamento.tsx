import { useScrollReveal } from '../hooks/useScrollReveal';
import fechamentoImg from '../assets/images/fechamento_rural_sunset_1790529907451.jpg';
import { OrganicGrainTexture, HarvestAccentLine } from './RuralAccents';

interface FechamentoProps {
  onOpenCheckout: () => void;
}

export default function Fechamento({ onOpenCheckout }: FechamentoProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center text-white bg-[#06140B]" ref={ref}>
      {/* Background photograph com Field Parallax sutil e transição superior harmônica */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={fechamentoImg}
          alt="Paisagem de plantação rural ao entardecer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
          style={{
            transform: isVisible ? 'scale(1.02)' : 'scale(1.05)',
          }}
        />

        {/* Dark forest-green overlay */}
        <div className="absolute inset-0 bg-[#06140B]/85 sm:bg-[#08180E]/80 backdrop-blur-[1px]" />

        {/* 
          TRANSIÇÃO SUPERIOR 12ª → 13ª DOBRA:
          Funde perfeitamente com a base da 12ª dobra (Faq) sem qualquer linha visível
        */}
        <div
          className="absolute inset-x-0 top-0 h-44 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #06140B 0%, rgba(6, 20, 11, 0.9) 35%, rgba(6, 20, 11, 0.4) 70%, transparent 100%)',
          }}
        />

        <OrganicGrainTexture opacity={0.035} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className={`flex justify-center mb-3 fade-up-init ${isVisible ? 'fade-up-active' : ''}`}>
          <HarvestAccentLine color="#D9AD5B" />
        </div>

        {/* Título com Soft Fade Up */}
        <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 [text-wrap:balance] fade-up-init ${isVisible ? 'fade-up-active' : ''}`}>
          Sua safra já dá trabalho demais.
        </h2>

        {/* Complemento */}
        <p className={`text-xl sm:text-2xl lg:text-3xl font-medium text-emerald-200 mb-6 fade-up-init ${isVisible ? 'fade-up-active' : ''}`} style={{ transitionDelay: '100ms' }}>
          Organizar seus números não precisa dar.
        </p>

        {/* Texto */}
        <p className={`text-base sm:text-lg text-stone-300 max-w-xl mx-auto mb-10 leading-relaxed fade-up-init ${isVisible ? 'fade-up-active' : ''}`} style={{ transitionDelay: '200ms' }}>
          Gastos, produção e vendas organizados de forma simples.
        </p>

        {/* Preço e CTA */}
        <div className={`flex flex-col items-center gap-3 fade-up-init ${isVisible ? 'fade-up-active' : ''}`} style={{ transitionDelay: '300ms' }}>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl text-[#D9AD5B] font-semibold">R$</span>
            <span className="text-5xl sm:text-6xl font-extrabold text-white tabular-nums tracking-tight">
              20
            </span>
            <span className="text-sm sm:text-base text-emerald-200/90 font-medium">
              / Pagamento único
            </span>
          </div>

          <p className="text-xs text-stone-400 mb-4">
            Acesso imediato e vitalício.
          </p>

          <button
            onClick={onOpenCheckout}
            type="button"
            className="w-full sm:w-auto px-10 py-5 bg-[#C86F42] hover:bg-[#b56035] text-white rounded-xl font-bold text-lg shadow-xl shadow-stone-950/40 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            QUERO ORGANIZAR MINHA SAFRA AGORA
          </button>
        </div>
      </div>
    </section>
  );
}
