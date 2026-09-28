import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
  badge?: string;
}

export default function PhoneFrame({
  children,
  variant = 'light',
  className = '',
  badge,
}: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[340px] sm:max-w-[380px] ${className}`}>
      {/* Outer Phone Shell */}
      <div className="relative rounded-[48px] p-3 sm:p-3.5 bg-[#142319] shadow-2xl shadow-emerald-950/30 border-4 border-stone-800/80 ring-1 ring-black/40">
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-4 sm:top-4.5 left-1/2 -translate-x-1/2 z-30 h-4 w-28 bg-[#0a120c] rounded-full flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-800/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1b3323]" />
        </div>

        {/* Screen Display */}
        <div
          className={`relative rounded-[38px] overflow-hidden min-h-[580px] sm:min-h-[620px] flex flex-col justify-between ${
            variant === 'dark' ? 'bg-[#0E1E14] text-stone-100' : 'bg-[#FAF8F5] text-stone-900'
          }`}
        >
          {/* Top Status Bar Bar */}
          <div className="pt-6 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold tracking-tight opacity-75">
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
            <div className="w-32 h-1 rounded-full bg-stone-400/40" />
          </div>
        </div>
      </div>

      {/* Floating Badge (optional) */}
      {badge && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-stone-200 text-xs font-bold text-stone-800 whitespace-nowrap z-20">
          {badge}
        </div>
      )}
    </div>
  );
}
