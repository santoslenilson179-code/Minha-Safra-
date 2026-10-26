import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'whatsapp';
  className?: string;
  badge?: string;
  withSpotlight?: boolean;
}

export default function PhoneFrame({
  children,
  variant = 'light',
  className = '',
  badge,
  withSpotlight = true,
}: PhoneFrameProps) {
  const isDarkish = variant === 'dark' || variant === 'whatsapp';

  return (
    <div className={`relative mx-auto w-full max-w-[340px] sm:max-w-[380px] group ${className}`}>
      {/* Soft Spotlight atrás do celular */}
      {withSpotlight && (
        <div
          className={isDarkish ? 'phone-soft-spotlight-forest' : 'phone-soft-spotlight'}
          aria-hidden="true"
        />
      )}

      {/* Outer Phone Shell in Forest Green matching attachment:
          Borda/chassi externa com verde floresta (#122419), anel com verde musgo escuro (#1a3525)
          e bisel arredondado característico dos smartphones modernos com tom verde militar / floresta profunda. */}
      <div
        className={`relative rounded-[48px] p-3 sm:p-3.5 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.01] ${
          isDarkish
            ? 'bg-[#122419] shadow-emerald-950/60 border-4 border-[#1c3826] ring-1 ring-emerald-500/20'
            : 'bg-[#152a1d] shadow-emerald-950/40 border-4 border-[#1f3c2b] ring-1 ring-emerald-500/15'
        }`}
      >
        {/* Dynamic Island / Speaker Notch com acabamento verde muito escuro e lente frontal */}
        <div className="absolute top-4 sm:top-4.5 left-1/2 -translate-x-1/2 z-30 h-4 w-28 bg-[#09140e] rounded-full flex items-center justify-center gap-2 border border-[#162e20]/60 shadow-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-[#050b07] border border-[#1a3826]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1b432a]" />
        </div>

        {/* Screen Display */}
        <div
          className={`relative rounded-[38px] overflow-hidden min-h-[580px] sm:min-h-[620px] flex flex-col justify-between ${
            variant === 'whatsapp'
              ? 'bg-[#0B141A] text-stone-100'
              : variant === 'dark'
              ? 'bg-[#0a1610] text-stone-100'
              : 'bg-[#FAF8F5] text-stone-900'
          }`}
        >
          {/* Top Status Bar */}
          <div
            className={`pt-6 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold tracking-tight ${
              isDarkish ? 'text-stone-300 opacity-85' : 'text-stone-800 opacity-75'
            }`}
          >
            <span>09:41</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* App Screen Content */}
          <div className="flex-1 flex flex-col px-4 pb-4 overflow-y-auto">
            {children}
          </div>

          {/* Home Indicator Bar */}
          <div className="pb-2 pt-1 flex justify-center">
            <div
              className={`w-32 h-1 rounded-full ${
                isDarkish ? 'bg-emerald-900/40' : 'bg-stone-400/40'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      {badge && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#102419]/95 text-emerald-200 backdrop-blur-md shadow-lg border border-emerald-500/40 text-xs font-bold whitespace-nowrap z-20 transition-transform duration-300 group-hover:-translate-y-0.5">
          {badge}
        </div>
      )}
    </div>
  );
}
