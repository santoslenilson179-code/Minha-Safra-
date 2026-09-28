import { MessageCircle, ArrowRight, Send, Check } from 'lucide-react';
import PhoneFrame from './PhoneFrame';

export default function MockupWhatsAppDual() {
  return (
    <section className="py-24 sm:py-32 bg-[#F3EFEA] border-y border-stone-200/60 text-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-800 uppercase mb-3">
            SEUS CLIENTES
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15] [text-wrap:balance] mb-4">
            Produziu?
            <br />
            <span className="text-emerald-900 font-semibold">
              Agora ficou mais fácil oferecer.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal max-w-2xl mx-auto">
            Prepare sua oferta no Minha Safra e continue a conversa com o comprador pelo WhatsApp.
          </p>

          {/* Fluxo visual indicator */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 text-xs sm:text-sm font-bold text-stone-600 uppercase tracking-wider">
            <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 shadow-xs">Minha Safra</span>
            <ArrowRight className="w-4 h-4 text-emerald-700" />
            <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 shadow-xs">Criar Oferta</span>
            <ArrowRight className="w-4 h-4 text-emerald-700" />
            <span className="px-3 py-1.5 rounded-lg bg-[#25D366]/20 text-[#0c6b30] border border-[#25D366]/40 shadow-xs">WhatsApp</span>
          </div>
        </div>

        {/* Dual Phone Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Phone 1: Minha Safra - Criação de Oferta */}
          <div className="flex flex-col items-center">
            <PhoneFrame variant="light" badge="1. Criar Oferta no Minha Safra">
              <div className="flex-1 flex flex-col justify-between py-2">
                <div className="pb-3 border-b border-stone-200 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    Nova Oferta
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium">Lote Pronto</span>
                </div>

                <div className="space-y-2.5 my-3 text-left">
                  <div>
                    <label className="text-[10px] font-bold text-stone-600 uppercase tracking-wider block mb-0.5">Produto</label>
                    <div className="p-2.5 bg-white rounded-lg border border-stone-200 text-xs font-bold text-stone-900 flex items-center gap-1.5">
                      <span>🥭</span>
                      <span>Manga Palmer</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold text-stone-600 uppercase tracking-wider block mb-0.5">Quantidade</label>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200 text-xs font-bold text-stone-900">
                        800 kg
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-stone-600 uppercase tracking-wider block mb-0.5">Preço</label>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200 text-xs font-bold text-emerald-800">
                        R$ 2,50 / kg
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold text-stone-600 uppercase tracking-wider block mb-0.5">Local</label>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200 text-xs font-semibold text-stone-700">
                        Sítio Boa Esperança
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-stone-600 uppercase tracking-wider block mb-0.5">Situação</label>
                      <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs font-bold text-emerald-800">
                        Colhido / Disponível
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>FALAR PELO WHATSAPP</span>
                </button>
              </div>
            </PhoneFrame>
          </div>

          {/* Phone 2: WhatsApp Screen */}
          <div className="flex flex-col items-center">
            <PhoneFrame variant="light" badge="2. Conversa no WhatsApp">
              <div className="flex-1 flex flex-col justify-between py-2">
                {/* WhatsApp Chat Header */}
                <div className="pb-3 border-b border-stone-200 flex items-center justify-between bg-stone-50 -mx-4 -mt-2 px-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                      HC
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold text-stone-900 block leading-tight">Hortifrúti Central</span>
                      <span className="text-[10px] text-emerald-700 block">Online</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-stone-400">WhatsApp</span>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-3 my-4 text-left">
                  {/* Generated Message bubble */}
                  <div className="p-3.5 rounded-2xl rounded-tr-none bg-[#DCF8C6] text-stone-900 text-xs shadow-xs ml-4 border border-[#c4eab0] space-y-1.5">
                    <p className="font-medium leading-relaxed">
                      Olá! Acabamos de colher um lote de Manga Palmer fresca no Sítio Boa Esperança.
                    </p>
                    <div className="p-2 rounded bg-white/70 text-[11px] font-semibold space-y-0.5">
                      <div>🥭 Manga Palmer</div>
                      <div>📦 800 kg disponíveis</div>
                      <div>💰 R$ 2,50/kg</div>
                    </div>
                    <p className="text-[10px] text-stone-500 text-right">09:42 ✓✓</p>
                  </div>

                  {/* Buyer response */}
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-white text-stone-900 text-xs shadow-xs mr-4 border border-stone-200">
                    <p className="font-medium leading-relaxed">
                      Bom dia! Pode separar 300 kg para entrega amanhã cedo?
                    </p>
                    <p className="text-[10px] text-stone-400 text-right">09:44</p>
                  </div>
                </div>

                {/* WhatsApp Input Mock */}
                <div className="pt-2 flex items-center gap-2">
                  <div className="flex-1 p-2 bg-stone-100 rounded-full text-xs text-stone-400 px-3">
                    Mensagem...
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </div>
        </div>

        {/* Discreet required copy */}
        <p className="text-sm text-stone-600 mt-10 text-center max-w-xl mx-auto font-normal">
          O Minha Safra prepara a mensagem. Você continua a negociação pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
