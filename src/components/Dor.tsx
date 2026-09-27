import cadernoImg from '../assets/images/caderno_celular_campo_1790529885603.jpg';

export default function Dor() {
  return (
    <section id="dor" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text column - Generous whitespace */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-800 uppercase">
              NO DIA A DIA
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.2] [text-wrap:balance]">
              O trabalho está no campo.
              <br />
              <span className="text-stone-600 font-semibold">
                As contas ficam espalhadas.
              </span>
            </h2>

            <div className="pt-2 space-y-4 max-w-xl text-lg sm:text-xl text-stone-700 leading-relaxed font-normal">
              <p>
                Um gasto no caderno. Uma venda no WhatsApp. Outra informação guardada na cabeça.
              </p>
              <p className="text-stone-600">
                Quando chega a hora de juntar tudo, fica mais difícil enxergar como foi a safra.
              </p>
            </div>
          </div>

          {/* Single photograph column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-stone-300/40 border border-stone-200/80 bg-stone-100">
              <img
                src={cadernoImg}
                alt="Caderno de anotações, celular e ambiente de fazenda"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
