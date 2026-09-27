import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
      a: 'R$20.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-800 uppercase mb-3">
            DÚVIDAS FREQUENTES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 [text-wrap:balance]">
            Perguntas comuns.
          </h2>
        </div>

        {/* 5 Real Objections */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-bold text-stone-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-800' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-base sm:text-lg text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
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
