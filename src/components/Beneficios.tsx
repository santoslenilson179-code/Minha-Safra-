export default function Beneficios() {
  return (
    <section id="beneficios" className="py-24 sm:py-32 bg-[#0d1e15] text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            O QUE VOCÊ TEM NO APLICATIVO
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
            Feito para facilitar.
          </h2>
        </div>

        {/* Layout matching user screenshot */}
        <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
          {/* Top Row: 2 Big Cards (+ VENDI / - GASTEI) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {/* + VENDI */}
            <div className="bg-[#13281c] rounded-3xl p-8 sm:p-10 border-2 border-[#d4af37]/80 hover:border-[#d4af37] transition-all flex flex-col items-center text-center shadow-lg group">
              {/* Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-stone-600/70 bg-[#0d1d14] flex items-center justify-center text-3xl sm:text-4xl mb-5 shadow-inner group-hover:scale-105 transition-transform">
                <span role="img" aria-label="Saco de dinheiro">💰</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#e5b544] tracking-wide mb-2">
                + VENDI
              </h3>
              <p className="text-base sm:text-lg text-stone-200 font-medium">
                Entrou dinheiro
              </p>
            </div>

            {/* - GASTEI */}
            <div className="bg-[#13281c] rounded-3xl p-8 sm:p-10 border-2 border-[#d97736]/80 hover:border-[#d97736] transition-all flex flex-col items-center text-center shadow-lg group">
              {/* Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-stone-600/70 bg-[#0d1d14] flex items-center justify-center text-3xl sm:text-4xl mb-5 shadow-inner group-hover:scale-105 transition-transform">
                <span role="img" aria-label="Notas com asas">💸</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#e07a3c] tracking-wide mb-2">
                - GASTEI
              </h3>
              <p className="text-base sm:text-lg text-stone-200 font-medium">
                Comprei / Despesa
              </p>
            </div>
          </div>

          {/* Bottom Row: 3 Compact Cards (WhatsApp / Calculadora / Colheita) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {/* WhatsApp */}
            <div className="bg-[#14291e] rounded-2xl p-6 sm:p-7 border border-emerald-900/50 hover:border-emerald-700/60 transition-all flex flex-col items-center text-center shadow-md">
              <div className="text-3xl sm:text-4xl mb-3" role="img" aria-label="WhatsApp Celular">
                📲
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                WhatsApp
              </h4>
              <p className="text-sm font-semibold text-[#25D366]">
                Relatório
              </p>
            </div>

            {/* Calculadora */}
            <div className="bg-[#14291e] rounded-2xl p-6 sm:p-7 border border-emerald-900/50 hover:border-emerald-700/60 transition-all flex flex-col items-center text-center shadow-md">
              <div className="text-3xl sm:text-4xl mb-3" role="img" aria-label="Calculadora / Ábaco">
                🧮
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Calculadora
              </h4>
              <p className="text-sm font-semibold text-[#e5b544]">
                Simular lucro
              </p>
            </div>

            {/* Colheita */}
            <div className="bg-[#14291e] rounded-2xl p-6 sm:p-7 border border-emerald-900/50 hover:border-emerald-700/60 transition-all flex flex-col items-center text-center shadow-md">
              <div className="text-3xl sm:text-4xl mb-3" role="img" aria-label="Caixa colheita">
                📦
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Colheita
              </h4>
              <p className="text-sm font-semibold text-stone-300">
                Registrar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
