import { useState } from 'react';
import { Sprout, ArrowDown } from 'lucide-react';
import tractorLocalImg from '../assets/images/tractor_crops_sunset_1790532795052.jpg';

const HERO_REMOTE_URL = 'https://i.ibb.co/C52tHXHV/Donna-Jos-Sia.jpg';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(HERO_REMOTE_URL);

  const handleScrollToNext = () => {
    const el = document.getElementById('dor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background rural photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc}
          onError={() => setImgSrc(tractorLocalImg)}
          alt="Trator pulverizando plantação em linhas agrícolas ao entardecer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_35%]"
        />
        {/* Subtle dark forest overlay tailored for the tractor background */}
        <div className="absolute inset-0 bg-[#06140B]/75 sm:bg-gradient-to-r sm:from-[#05120A]/90 sm:via-[#06140B]/75 sm:to-[#06140B]/60" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center sm:text-left flex flex-col items-center sm:items-start">
        {/* Logo Minha Safra */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
            <Sprout className="w-6 h-6" />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Minha Safra
          </span>
        </div>

        {/* Sobrancelha */}
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-300 uppercase mb-4">
          PARA QUEM VIVE DA PRODUÇÃO
        </p>

        {/* H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-3xl mb-4 [text-wrap:balance]">
          Você sabe quanto realmente sobrou da sua safra?
        </h1>

        {/* Logo abaixo */}
        <p className="text-xl sm:text-2xl font-medium text-emerald-100/90 mb-5">
          Controle sua safra sem complicação.
        </p>

        {/* Descrição */}
        <p className="text-base sm:text-lg text-stone-300 max-w-2xl mb-10 leading-relaxed">
          Anote seus gastos, produção e vendas pelo celular e acompanhe seus números de forma simples.
        </p>

        {/* UM botão */}
        <div>
          <button
            onClick={handleScrollToNext}
            className="inline-flex items-center gap-3 px-8 py-4 text-base sm:text-lg font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-950/40 active:scale-[0.98] cursor-pointer"
          >
            <span>VER COMO FUNCIONA</span>
            <ArrowDown className="w-5 h-5 text-emerald-950/80" />
          </button>
        </div>
      </div>
    </section>
  );
}
