import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TopographicLines, FieldRowsPattern, OrganicGrainTexture } from './RuralAccents';

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
  const { ref: textRef, isVisible: isTextVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: mockupRef, isVisible: isMockupVisible } = useScrollReveal({ threshold: 0.15 });

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

  // Alternating Mockup Reveal class: se a imagem está na direita entra pela direita, se está na esquerda entra pela esquerda
  const mockupRevealInitClass = imageSide === 'right' ? 'mockup-reveal-right-init' : 'mockup-reveal-left-init';

  return (
    <section className={`py-24 sm:py-32 overflow-hidden relative ${bgStyles}`}>
      {/* Sutil textura de grão e linhas topográficas/field rows */}
      <OrganicGrainTexture opacity={0.03} />
      {backgroundVariant === 'forest' || backgroundVariant === 'deep' ? (
        <FieldRowsPattern stroke="rgba(217, 173, 91, 0.04)" />
      ) : (
        <TopographicLines color="rgba(200, 111, 66, 0.06)" />
      )}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column with Soft Fade Up */}
          <div
            ref={textRef}
            className={`lg:col-span-6 space-y-6 ${textOrder} fade-up-init ${
              isTextVisible ? 'fade-up-active' : ''
            }`}
          >
            {/* Sobrancelha com Terracotta Accent line */}
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[2px] rounded-full bg-[#C86F42]" />
              <p className={`text-xs sm:text-sm font-semibold tracking-wider uppercase ${eyebrowColor}`}>
                {eyebrow}
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] [text-wrap:balance]">
              {title}
            </h2>

            <p className={`text-lg sm:text-xl font-normal leading-relaxed ${descColor}`}>
              {description}
            </p>
          </div>

          {/* Mockup Column with Alternating Reveal & Phone Depth */}
          <div
            ref={mockupRef}
            className={`lg:col-span-6 flex flex-col items-center relative ${mockupOrder} ${mockupRevealInitClass} ${
              isMockupVisible ? 'mockup-reveal-active' : ''
            }`}
          >
            <div className="relative w-full flex justify-center">
              {mockup}
              {floatingCard && (
                <div className="absolute -bottom-6 -right-2 sm:-right-6 z-20 hidden sm:block soft-card-lift">
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
