import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, Copy, Share2, MessageCircle, ArrowRight } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import { OrganicGrainTexture, TopographicLines, HarvestAccentLine } from './RuralAccents';

export default function MockupWhatsAppDual() {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: phonesRef, isVisible: isPhonesVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="pt-24 sm:pt-32 pb-28 sm:pb-36 bg-[#0e1511] text-white overflow-hidden relative">
      {/* 
        =======================================================================
        BACKGROUND: HARMONIOUS ATMOSPHERE & SEAMLESS 7ª → 8ª SECTION BLEND
        =======================================================================
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Ponte de transição superior: recebe suavemente a 6ª dobra (#0b100d / #0e1511) */}
        <div
          className="absolute inset-x-0 top-0 h-40 sm:h-56 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #0b100d 0%, rgba(14, 21, 17, 0.7) 45%, transparent 100%)',
          }}
        />

        {/* Gradiente radial aconchegante verde-mata */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(32,56,42,0.3)_0%,transparent_75%)] pointer-events-none" />

        {/* Linhas topográficas discretas e textura de grão */}
        <OrganicGrainTexture opacity={0.035} />
        <TopographicLines color="rgba(52, 211, 153, 0.06)" />

        {/* 
          TRANSIÇÃO HARMÔNICA 7ª → 8ª DOBRA:
          Funde gradualmente o tom #0e1511 com a atmosfera noturna/entardecer da 8ª dobra (CampoConexao)
          com grande altura (h-48 a h-64) em múltiplos pontos de parada (stops) suaves.
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-64 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(14, 21, 17, 0.3) 30%, rgba(14, 21, 17, 0.75) 60%, rgba(14, 21, 17, 0.95) 85%, #0e1511 100%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header com Soft Fade Up */}
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 sm:mb-20 fade-up-init ${isHeaderVisible ? 'fade-up-active' : ''}`}>
          <div className="flex justify-center mb-3">
            <HarvestAccentLine color="#C86F42" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            RELATÓRIO NO WHATSAPP
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] [text-wrap:balance] mb-4 drop-shadow-md">
            Envie o resumo da safra
            <br />
            <span className="text-emerald-300 font-semibold">
              em 1 toque no WhatsApp.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-normal max-w-2xl mx-auto drop-shadow-sm">
            Chega de digitar mensagem por mensagem ou fazer conta de cabeça. O Minha Safra monta
            o resumo da sua produção e coloca direto na conversa com seu comprador ou sócio.
          </p>
        </div>

        {/* 
          =======================================================================
          DUAL PHONE SHOWCASE: Smartphone 1 (Minha Safra) + Smartphone 2 (WhatsApp)
          =======================================================================
        */}
        <div
          ref={phonesRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto"
        >
          {/* SMARTPHONE 1: TELA NO MINHA SAFRA (Gerando Resumo) */}
          <div
            className={`lg:col-span-5 max-w-xs mx-auto w-full mockup-reveal-left-init ${
              isPhonesVisible ? 'mockup-reveal-active' : ''
            }`}
          >
            <div className="text-center mb-3">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold uppercase tracking-wider text-emerald-300 border border-white/15">
                Passo 1: No Minha Safra
              </span>
            </div>

            <PhoneFrame variant="dark" badge="Resumo Gerado">
              <div className="flex flex-col h-full bg-[#0d1611] text-white p-4 justify-between select-none">
                {/* Cabeçalho do App */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-emerald-900/40">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold text-stone-200">Safra Principal 2026</span>
                    </div>
                    <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded-full font-semibold border border-emerald-700/50">
                      Atualizado
                    </span>
                  </div>

                  {/* Card do Resumo Pronto */}
                  <div className="bg-[#14251C] rounded-2xl p-4 border border-emerald-700/50 shadow-md">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#D9AD5B] mb-1">
                      Relatório de Produção
                    </p>
                    <h4 className="text-base font-extrabold text-white">
                      Lote 03 — Milho Safrinha
                    </h4>

                    {/* Linhas de resumo */}
                    <div className="mt-3 space-y-1.5 text-xs">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-stone-300">Volume Total:</span>
                        <span className="font-bold text-white">1.840 sacas</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-stone-300">Disponível:</span>
                        <span className="font-bold text-emerald-300">920 sacas</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-stone-300">Preço Sugerido:</span>
                        <span className="font-bold text-[#D9AD5B]">R$ 68,00 / sc</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-stone-300">Total Estimado:</span>
                        <span className="font-extrabold text-white">R$ 62.560,00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botões de Ação no App */}
                <div className="space-y-2 pt-3">
                  <div className="w-full py-3 px-3 bg-[#25D366] hover:bg-[#20ba59] text-emerald-950 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer">
                    <Share2 className="w-4 h-4 text-emerald-950" />
                    <span>Compartilhar no WhatsApp</span>
                  </div>

                  <div className="w-full py-2 px-3 bg-white/5 border border-white/10 text-stone-300 rounded-xl font-medium text-[11px] flex items-center justify-center gap-2">
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Texto Completo</span>
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </div>

          {/* SETA CENTRAL DE FLUXO (DESKTOP E MOBILE) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-2">
            <div className="w-12 h-12 rounded-full bg-emerald-950/90 border border-emerald-500/40 flex items-center justify-center text-[#25D366] shadow-lg shadow-black/40">
              <ArrowRight className="w-5 h-5 hidden lg:block" />
              <MessageCircle className="w-5 h-5 lg:hidden" />
            </div>
            <p className="text-xs font-bold text-emerald-300 uppercase tracking-widest mt-2">
              Em 1 clique
            </p>
          </div>

          {/* SMARTPHONE 2: CONVERSA NO WHATSAPP COM A MENSAGEM RECEBIDA */}
          <div
            className={`lg:col-span-5 max-w-xs mx-auto w-full mockup-reveal-right-init ${
              isPhonesVisible ? 'mockup-reveal-active' : ''
            }`}
          >
            <div className="text-center mb-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#25D366]/20 text-[11px] font-bold uppercase tracking-wider text-[#25D366] border border-[#25D366]/30">
                Passo 2: Mensagem Pronta
              </span>
            </div>

            <PhoneFrame variant="light" badge="WhatsApp">
              <div className="flex flex-col h-full bg-[#E5DDD5] text-stone-800 select-none">
                {/* Header do WhatsApp */}
                <div className="bg-[#075E54] text-white px-3 py-2.5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-stone-300 text-stone-800 flex items-center justify-center text-xs font-bold">
                      JC
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">João Cerealista</p>
                      <p className="text-[10px] text-emerald-200">online</p>
                    </div>
                  </div>
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                </div>

                {/* Corpo do Chat com Balão de Mensagem */}
                <div className="flex-1 p-3 flex flex-col justify-end space-y-2 text-xs">
                  {/* Balão do Comprador */}
                  <div className="self-start max-w-[85%] bg-white rounded-lg rounded-tl-none p-2 shadow-xs border border-stone-200/60">
                    <p className="text-[11px] text-stone-800">
                      Boa tarde, amigo! Tem lote de milho disponível para essa semana?
                    </p>
                    <span className="text-[9px] text-stone-600 block text-right mt-0.5">14:22</span>
                  </div>

                  {/* Balão enviado pelo Minha Safra */}
                  <div className="self-end max-w-[90%] bg-[#DCF8C6] rounded-lg rounded-tr-none p-2.5 shadow-xs border border-emerald-200">
                    <p className="text-[11px] font-bold text-emerald-950 mb-1">
                      🌾 RESUMO MINHA SAFRA 2026
                    </p>
                    <div className="text-[10px] text-stone-800 space-y-0.5 leading-relaxed font-sans">
                      <p><strong>Lote:</strong> Milho Safrinha (Lote 03)</p>
                      <p><strong>Disponível:</strong> 920 sacas de 60kg</p>
                      <p><strong>Local:</strong> Sítio Boa Esperança</p>
                      <p><strong>Preço:</strong> R$ 68,00 / sc à vista</p>
                      <p className="pt-1 text-[9px] text-emerald-900 italic">
                        Relatório gerado direto pelo app Minha Safra.
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[9px] text-stone-600">14:23</span>
                      <Check className="w-3 h-3 text-[#34B7F1]" />
                    </div>
                  </div>
                </div>

                {/* Input Fake do WhatsApp */}
                <div className="bg-[#F0F0F0] p-2 flex items-center gap-2 border-t border-stone-300">
                  <div className="flex-1 bg-white rounded-full px-3 py-1 text-[11px] text-stone-600">
                    Mensagem
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center text-white">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </div>
        </div>

        {/* 3 Diferenciais objetivos do WhatsApp abaixo */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <div className="bg-[#14251C]/90 backdrop-blur-md rounded-2xl p-5 border border-emerald-900/60 shadow-md text-center">
            <h4 className="text-sm font-bold text-white mb-1">Sem Erro de Conta</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              O valor total e a quantidade são somados pelo aplicativo antes de enviar.
            </p>
          </div>

          <div className="bg-[#14251C]/90 backdrop-blur-md rounded-2xl p-5 border border-emerald-900/60 shadow-md text-center">
            <h4 className="text-sm font-bold text-white mb-1">Mais Respeito Comercial</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Mensagem clara e profissional que passa segurança para quem compra de você.
            </p>
          </div>

          <div className="bg-[#14251C]/90 backdrop-blur-md rounded-2xl p-5 border border-emerald-900/60 shadow-md text-center">
            <h4 className="text-sm font-bold text-white mb-1">Zero Redigitação</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Tocou em compartilhar, escolheu a conversa e a mensagem já vai pronta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
