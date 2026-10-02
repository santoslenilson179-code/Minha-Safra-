import { useScrollReveal } from '../hooks/useScrollReveal';
import PhoneFrame from './PhoneFrame';
import cornHarvestSunsetImg from '../assets/images/forage_harvester_corn_sunset_1790948174355.jpg';
import { FieldRowsPattern, OrganicGrainTexture, HarvestAccentLine } from './RuralAccents';

export default function CampoConexao() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      className="relative pt-24 sm:pt-32 pb-28 sm:pb-36 overflow-hidden text-white bg-[#0e1511]"
      ref={ref}
    >
      {/* 
        =======================================================================
        BACKGROUND: COLHEITA NOTURNA NO CAMPO (FORRAGEIRA & TRATORES AO ENTARDECER)
        COM TRANSIÇÕES HARMÔNICAS 7ª → 8ª E 8ª → 9ª (SEM LINHAS VISÍVEIS)
        =======================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={cornHarvestSunsetImg}
          alt="Colheita noturna no campo com colheitadeira forrageira descarregando silagem em tratores com faróis iluminando a restolho sob o céu do entardecer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_38%] field-parallax-subtle transition-transform duration-1000 ease-out"
          style={{
            transform: isVisible ? 'scale(1.015)' : 'scale(1.04)',
          }}
        />

        {/* Overlay escuro em tom noturno / verde floresta (#0e1511) com leve difusão */}
        <div className="absolute inset-0 bg-[#0e1511]/75 sm:bg-[#0e1511]/65 backdrop-blur-[0.2px]" />

        {/* 
          TRANSIÇÃO SUPERIOR 7ª → 8ª DOBRA:
          Funde perfeitamente com a base da 7ª dobra (#0e1511) com degradê amplo e suave
        */}
        <div
          className="absolute inset-x-0 top-0 h-44 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #0e1511 0%, rgba(14, 21, 17, 0.9) 35%, rgba(14, 21, 17, 0.4) 70%, transparent 100%)',
          }}
        />

        {/* Gradiente radial central suave valorizando a luz dos tratores e o smartphone */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,#0e1511_90%)] pointer-events-none" />

        {/* Textura tátil orgânica e sulcos de campo */}
        <OrganicGrainTexture opacity={0.035} />
        <FieldRowsPattern stroke="rgba(217, 173, 91, 0.05)" />

        {/* 
          TRANSIÇÃO HARMÔNICA 8ª → 9ª DOBRA:
          Funde gradualmente a cena da colheita (#0e1511) com o verde da 9ª dobra (Beneficios #0d1e15)
          com grande altura (h-48 a h-64) em múltiplos pontos de parada (stops) suaves, sem divisores rígidos.
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-64 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(14, 21, 17, 0.25) 30%, rgba(13, 30, 21, 0.65) 60%, rgba(13, 30, 21, 0.95) 85%, #0d1e15 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Sobrancelha com Harvest Accent Line */}
        <div className={`flex flex-col items-center mb-3 fade-up-init ${isVisible ? 'fade-up-active' : ''}`}>
          <HarvestAccentLine color="#D9AD5B" className="mb-2" />
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D9AD5B] uppercase">
            DO CAMPO AO CELULAR
          </p>
        </div>

        {/* Título com Soft Fade Up */}
        <h2
          className={`text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 [text-wrap:balance] drop-shadow-md fade-up-init ${
            isVisible ? 'fade-up-active' : ''
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Feito para acompanhar sua rotina.
        </h2>

        {/* Descrição */}
        <p
          className={`text-lg sm:text-xl text-stone-200 max-w-xl mx-auto mb-14 leading-relaxed font-normal drop-shadow-sm fade-up-init ${
            isVisible ? 'fade-up-active' : ''
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Do campo ao registro, sem complicação.
        </p>

        {/* Smartphone mockup em primeiro plano com Phone Depth Reveal suave */}
        <div
          className={`max-w-xs sm:max-w-sm mx-auto shadow-2xl mockup-reveal-center-init ${
            isVisible ? 'mockup-reveal-active' : ''
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <PhoneFrame variant="light" badge="Simplicidade Direta">
            <div className="flex-1 flex flex-col justify-center items-center text-center p-4 space-y-4">
              <span className="text-5xl select-none" role="img" aria-label="Plantação">🌱</span>
              <h3 className="text-xl font-extrabold text-stone-900 tracking-tight">
                Minha Safra 2026
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Tudo pronto para anotar seus gastos, colheitas e vendas direto da roça.
              </p>
              <div className="w-full py-3 bg-[#14251C] hover:bg-[#20382A] text-white rounded-xl text-xs font-bold shadow-xs transition-colors">
                Abrir Meu Controle
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
