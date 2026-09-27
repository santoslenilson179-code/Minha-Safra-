import { useState } from 'react';
import { MessageCircle, Check, Send } from 'lucide-react';
import whatsappImg from '../assets/images/whatsapp_rural_producer_1790529897001.jpg';

export default function WhatsAppSection() {
  const [showSimulatedChat, setShowSimulatedChat] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-[#F3EFEA] border-y border-stone-200/60 text-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photograph Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-stone-300/40 border border-stone-200/80 bg-stone-100">
              <img
                src={whatsappImg}
                alt="Produtor rural utilizando WhatsApp no pomar"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Text & Offer card column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-800 uppercase">
              SEUS CLIENTES
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.2] [text-wrap:balance]">
              Produziu?
              <br />
              <span className="text-emerald-900 font-semibold">
                Agora ficou mais fácil oferecer.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal">
              Monte sua oferta no Minha Safra e continue a conversa pelo WhatsApp.
            </p>

            {/* Exemplo Pequeno e Real */}
            <div className="pt-2">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" role="img" aria-label="Manga">🥭</span>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">Manga Palmer</h3>
                    <p className="text-xs text-stone-500">Lote colhido disponível</p>
                  </div>
                </div>

                <div className="flex items-baseline justify-between py-3 border-y border-stone-100 mb-4">
                  <div>
                    <span className="text-xs text-stone-500 block">Quantidade</span>
                    <span className="text-base font-bold text-stone-900 tabular-nums">800 kg</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-stone-500 block">Preço</span>
                    <span className="text-base font-bold text-emerald-800 tabular-nums">R$ 2,50/kg</span>
                  </div>
                </div>

                {/* Botão Falar pelo WhatsApp */}
                <button
                  type="button"
                  onClick={() => setShowSimulatedChat(!showSimulatedChat)}
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>FALAR PELO WHATSAPP</span>
                </button>

                {/* Simulated message disclosure */}
                {showSimulatedChat && (
                  <div className="mt-4 p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-2 animate-fadeIn">
                    <div className="flex items-center justify-between font-bold text-emerald-900">
                      <span className="flex items-center gap-1.5">
                        <Send className="w-3.5 h-3.5 text-emerald-700" />
                        Mensagem gerada pelo Minha Safra:
                      </span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">Pronta</span>
                    </div>
                    <p className="italic bg-white p-2.5 rounded-lg border border-emerald-100 text-stone-800">
                      “Olá! Acabamos de colher 800 kg de Manga Palmer fresca. Preço R$ 2,50/kg. Gostaria de separar uma quantidade para sua entrega?”
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Você pode ajustar o texto antes de enviar para qualquer cliente da sua lista.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Nota discreta requerida */}
            <p className="text-sm sm:text-base text-stone-600 font-normal pt-1">
              O aplicativo prepara a mensagem. Você continua a negociação pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
