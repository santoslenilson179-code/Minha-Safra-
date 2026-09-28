import PhoneFrame from './PhoneFrame';
import heroImg from '../assets/images/whatsapp_rural_producer_1790529897001.jpg';

export default function CampoConexao() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center text-white">
      {/* Background rural photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Produtor rural no pomar em luz natural"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark forest-green overlay */}
        <div className="absolute inset-0 bg-[#06140B]/85 sm:bg-[#07170D]/85 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Sobrancelha */}
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-3">
          DO CAMPO AO CELULAR
        </p>

        {/* Título */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
          Feito para acompanhar sua rotina.
        </h2>

        {/* Descrição */}
        <p className="text-lg sm:text-xl text-stone-200 max-w-xl mx-auto mb-14 leading-relaxed font-normal">
          Do campo ao registro, sem complicação.
        </p>

        {/* Smartphone mockup em primeiro plano */}
        <div className="max-w-xs sm:max-w-sm mx-auto shadow-2xl">
          <PhoneFrame variant="light" badge="Simplicidade Direta">
            <div className="flex-1 flex flex-col justify-center items-center text-center p-4 space-y-4">
              <span className="text-5xl select-none" role="img" aria-label="Plantação">🌱</span>
              <h3 className="text-xl font-extrabold text-stone-900 tracking-tight">
                Minha Safra 2026
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Tudo pronto para anotar seus gastos, colheitas e vendas direto da roça.
              </p>
              <div className="w-full py-3 bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-xs">
                Abrir Meu Controle
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
