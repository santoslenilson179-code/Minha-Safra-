import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import yellowHarvesterImg from '../assets/images/yellow_harvester_corn_sunset_1790952419955.jpg';
import { OrganicGrainTexture, HarvestAccentLine, TopographicLines } from './RuralAccents';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  const faqs = [
    {
      q: 'O Minha Safra é difícil de usar?',
      a: 'Não. Ele foi pensado para ter palavras simples, letras grandes e ações fáceis de identificar.',
    },
    {
      q: 'Preciso saber usar planilhas?',
      a: 'Não. Os registros são feitos diretamente no aplicativo.',
    },
    {
      q: 'Posso falar com meus clientes?',
      a: 'O Minha Safra facilita a preparação da oferta e a abertura da conversa pelo WhatsApp.',
    },
    {
      q: 'Como o resultado é calculado?',
      a: 'Com base nos gastos e vendas que você registra.',
    },
    {
      q: 'Quanto custa?',
      a: 'R$20 em pagamento único.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="duvidas"
      className="relative pt-24 sm:pt-32 pb-28 sm:pb-36 text-white overflow-hidden bg-[#0c1a11]"
      ref={ref}
    >
      {/* 
        =======================================================================
        BACKGROUND: COLHEITADEIRA AMARELA NA LAVOURA DE MILHO AO PÔR DO SOL
        COM TRANSIÇÕES HARMÔNICAS 11ª → 12ª E 12ª → 13ª (SEM LINHAS VISÍVEIS)
        =======================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={yellowHarvesterImg}
          alt="Vista da plataforma da colheitadeira amarela avançando sobre as fileiras verdes de milho sob o pôr do sol dourado"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_35%] transition-transform duration-1000 ease-out"
          style={{
            transform: isVisible ? 'scale(1.015)' : 'scale(1.04)',
          }}
        />

        {/* Overlay escuro em tom Verde Floresta (#0c1a11) para leitura de alto contraste */}
        <div className="absolute inset-0 bg-[#0a160e]/82 sm:bg-[#0a160e]/74 backdrop-blur-[0.2px]" />

        {/* 
          TRANSIÇÃO SUPERIOR 11ª → 12ª DOBRA:
          Funde gradualmente com a base da 11ª dobra (Oferta) sem corte visual
        */}
        <div
          className="absolute inset-x-0 top-0 h-44 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #0c1a11 0%, rgba(10, 22, 14, 0.9) 35%, rgba(10, 22, 14, 0.4) 70%, transparent 100%)',
          }}
        />

        {/* Gradiente radial central suave valorizando a luz dourada do sol e as perguntas */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,#0a160e_90%)] pointer-events-none" />

        {/* Textura tátil orgânica e relevo de curvas de nível */}
        <OrganicGrainTexture opacity={0.035} />
        <TopographicLines color="rgba(217, 173, 91, 0.06)" />

        {/* 
          TRANSIÇÃO HARMÔNICA 12ª → 13ª DOBRA:
          Funde gradualmente o tom do milharal ao entardecer (#0c1a11) com o verde-noite da 13ª dobra (Fechamento #06140B)
          com grande altura (h-48 a h-64) e múltiplos pontos de parada (stops) suaves, sem divisores rígidos.
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-64 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(10, 22, 14, 0.25) 30%, rgba(8, 21, 13, 0.65) 60%, rgba(6, 20, 11, 0.95) 85%, #06140B 100%)',
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className={`text-center mb-16 sm:mb-20 fade-up-init ${isVisible ? 'fade-up-active' : ''}`}>
          <div className="flex justify-center mb-3">
            <HarvestAccentLine color="#D9AD5B" />
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9AD5B]" />
            DÚVIDAS FREQUENTES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance] drop-shadow-md">
            Perguntas comuns.
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            Respostas diretas para quem quer clareza antes de começar.
          </p>
        </div>

        {/* 5 Real Objections com Soft Card Lift em glassmorphism escuro */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const delayMs = idx * 70;
            return (
              <div
                key={faq.q}
                className="bg-[#0f2217]/90 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-500/40 overflow-hidden shadow-lg shadow-black/40 soft-card-lift transition-all duration-600 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
                  transitionDelay: `${delayMs}ms`,
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-lg sm:text-xl text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#D9AD5B] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1e442f] text-emerald-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-stone-200 text-base sm:text-lg leading-relaxed border-t border-white/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
