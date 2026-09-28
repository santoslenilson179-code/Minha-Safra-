import { ArrowRight, ArrowDown } from 'lucide-react';

export default function FluxoFaixa() {
  const steps = [
    { emoji: '💸', label: 'GASTEI' },
    { emoji: '📦', label: 'PRODUZI' },
    { emoji: '💰', label: 'VENDI' },
    { emoji: '📊', label: 'ACOMPANHEI' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#14251C] text-stone-100 border-y border-emerald-900/60">
      <div className="max-w-5xl mx-auto px-6">
        {/* Desktop Horizontal Flow */}
        <div className="hidden md:flex items-center justify-between">
          {steps.map((step, idx) => (
            <div key={step.label} className="flex items-center">
              <div className="flex items-center gap-3 bg-[#1d3528] px-6 py-4 rounded-2xl border border-emerald-700/50 shadow-md">
                <span className="text-3xl select-none" role="img" aria-label={step.label}>
                  {step.emoji}
                </span>
                <span className="text-sm font-extrabold tracking-widest uppercase text-white">
                  {step.label}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div className="px-4 lg:px-6 text-emerald-400">
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Vertical Flow */}
        <div className="md:hidden flex flex-col items-center space-y-2 max-w-xs mx-auto">
          {steps.map((step, idx) => (
            <div key={step.label} className="flex flex-col items-center w-full">
              <div className="w-full flex items-center justify-center gap-3 bg-[#1d3528] p-4 rounded-2xl border border-emerald-700/50 shadow-md">
                <span className="text-2xl select-none">{step.emoji}</span>
                <span className="text-sm font-extrabold tracking-wider uppercase text-white">
                  {step.label}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div className="py-1 text-emerald-400">
                  <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
