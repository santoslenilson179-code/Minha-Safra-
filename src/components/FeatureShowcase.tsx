import React from 'react';

interface FeatureShowcaseProps {
  eyebrow: string;
  title: string | React.ReactNode;
  description: string;
  imageSide?: 'left' | 'right';
  backgroundVariant?: 'cream' | 'sand' | 'forest' | 'deep';
  mockup: React.ReactNode;
  discreetNote?: string;
  badge?: string;
  floatingCard?: React.ReactNode;
}

export default function FeatureShowcase({
  eyebrow,
  title,
  description,
  imageSide = 'right',
  backgroundVariant = 'cream',
  mockup,
  discreetNote = 'Exemplo demonstrativo.',
  badge,
  floatingCard,
}: FeatureShowcaseProps) {
  const bgStyles = {
    cream: 'bg-[#FAF8F5] text-stone-900',
    sand: 'bg-[#F3EFEA] border-y border-stone-200/60 text-stone-900',
    forest: 'bg-[#14251C] text-stone-100 border-y border-emerald-900/40',
    deep: 'bg-[#0E1B13] text-stone-100',
  }[backgroundVariant];

  const eyebrowColor = {
    cream: 'text-emerald-800',
    sand: 'text-emerald-800',
    forest: 'text-emerald-300',
    deep: 'text-emerald-400',
  }[backgroundVariant];

  const descColor = {
    cream: 'text-stone-700',
    sand: 'text-stone-700',
    forest: 'text-stone-300',
    deep: 'text-stone-300',
  }[backgroundVariant];

  const noteColor = {
    cream: 'text-stone-400',
    sand: 'text-stone-500',
    forest: 'text-stone-400',
    deep: 'text-stone-400',
  }[backgroundVariant];

  const textOrder = imageSide === 'right' ? 'lg:order-1' : 'lg:order-2';
  const mockupOrder = imageSide === 'right' ? 'lg:order-2' : 'lg:order-1';

  return (
    <section className={`py-24 sm:py-32 overflow-hidden ${bgStyles}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className={`lg:col-span-6 space-y-6 ${textOrder}`}>
            <p className={`text-xs sm:text-sm font-semibold tracking-wider uppercase ${eyebrowColor}`}>
              {eyebrow}
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] [text-wrap:balance]">
              {title}
            </h2>

            <p className={`text-lg sm:text-xl font-normal leading-relaxed ${descColor}`}>
              {description}
            </p>
          </div>

          {/* Mockup Column */}
          <div className={`lg:col-span-6 flex flex-col items-center relative ${mockupOrder}`}>
            <div className="relative w-full flex justify-center">
              {mockup}
              {floatingCard && (
                <div className="absolute -bottom-6 -right-2 sm:-right-6 z-20 hidden sm:block">
                  {floatingCard}
                </div>
              )}
            </div>

            {discreetNote && (
              <p className={`text-xs mt-6 text-center ${noteColor}`}>
                {discreetNote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
