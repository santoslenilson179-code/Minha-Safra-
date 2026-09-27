import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Jornada() {
  const steps = [
    { emoji: '📦', label: 'PRODUZI' },
    { emoji: '🥭', label: 'OFERECI' },
    { emoji: '💬', label: 'CONVERSEI' },
    { emoji: '💰', label: 'VENDI' },
    { emoji: '📊', label: 'REGISTREI' },
  ];

  return (
    <section id="jornada" className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 [text-wrap:balance]">
            Do campo à venda.
          </h2>
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden md:flex items-center justify-between max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-center text-4xl mb-3 select-none">
                  {step.emoji}
                </div>
                <span className="text-xs lg:text-sm font-bold tracking-widest text-stone-900 uppercase">
                  {step.label}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div className="px-4 lg:px-6 text-stone-300">
                  <ArrowRight className="w-6 h-6 stroke-[2.5]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical flow */}
        <div className="md:hidden flex flex-col items-center space-y-3 max-w-xs mx-auto">
          {steps.map((step, idx) => (
            <div key={step.label} className="flex flex-col items-center w-full">
              <div className="w-full bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center gap-4">
                <span className="text-3xl select-none">{step.emoji}</span>
                <span className="text-base font-bold tracking-wider text-stone-900 uppercase">
                  {step.label}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div className="py-2 text-stone-400">
                  <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
