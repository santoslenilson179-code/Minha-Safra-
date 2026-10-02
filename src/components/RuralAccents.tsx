import React from 'react';

// 1. Organic Grain Texture overlay for rustic/matte print feel
export function OrganicGrainTexture({ opacity = 0.035 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(20, 37, 28, 0.4) 1px, transparent 0)`,
        backgroundSize: '16px 16px',
      }}
      aria-hidden="true"
    />
  );
}

// 2. Field Rows Pattern: sutil padrão de sulcos/linhas de plantação agrícola
export function FieldRowsPattern({
  className = '',
  orientation = 'horizontal',
  stroke = 'rgba(217, 173, 91, 0.08)', // #D9AD5B Dourado Safra sutil
}: {
  className?: string;
  orientation?: 'horizontal' | 'diagonal';
  stroke?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`field-rows-${orientation}`}
            width={orientation === 'horizontal' ? '100%' : '48'}
            height="32"
            patternUnits="userSpaceOnUse"
            patternTransform={orientation === 'diagonal' ? 'rotate(15)' : undefined}
          >
            <line x1="0" y1="0" x2="100%" y2="0" stroke={stroke} strokeWidth="1" strokeDasharray="6 12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#field-rows-${orientation})`} />
      </svg>
    </div>
  );
}

// 3. Topographic Lines: curvas de nível discretas inspiradas no relevo do campo
export function TopographicLines({
  className = '',
  color = 'rgba(200, 111, 66, 0.12)', // #C86F42 Terracota sutil
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover opacity-50"
        preserveAspectRatio="none"
      >
        <path
          d="M-50,220 C200,160 450,280 750,200 C1050,120 1150,260 1300,220"
          stroke={color}
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />
        <path
          d="M-50,290 C220,230 480,340 780,270 C1080,200 1180,330 1300,300"
          stroke={color}
          strokeWidth="1"
        />
        <path
          d="M-50,370 C240,320 500,410 820,350 C1100,290 1200,410 1300,380"
          stroke={color}
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />
      </svg>
    </div>
  );
}

// 4. Contour Divider: divisores de nível topográficos suaves entre seções
export function ContourDivider({
  fillTop = '#FAF8F5',
  fillBottom = '#14251C',
  height = 36,
  flip = false,
}: {
  fillTop?: string;
  fillBottom?: string;
  height?: number;
  flip?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none z-10 pointer-events-none ${
        flip ? 'rotate-180' : ''
      }`}
      style={{ height: `${height}px`, background: fillTop }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-full"
        style={{ fill: fillBottom }}
      >
        <path d="M0,0 C150,55 350,90 600,60 C850,30 1050,75 1200,25 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}

// 5. Organic Terrain Divider (Curva de relevo/horizonte sutil entre Hero e Segunda Dobra)
export function OrganicTerrainDivider({
  height = 56,
  fill = '#14251C',
}: {
  height?: number;
  fill?: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none select-none z-20 pointer-events-none"
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="relative block w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 L0,48 C240,16 480,56 720,32 C960,10 1200,44 1440,24 L1440,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

// 6. Harvest Accent Line: linha fina com acento terracota/dourado
export function HarvestAccentLine({
  className = '',
  color = '#C86F42', // Terracota
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-[2px] w-8 rounded-full" style={{ backgroundColor: color }} />
      <div className="w-1.5 h-1.5 rounded-full bg-[#D9AD5B]" />
      <div className="h-[1px] w-14 rounded-full bg-stone-300/60" />
    </div>
  );
}

// 7. Terracotta Accent badge dot
export function TerracottaDot() {
  return <span className="inline-block w-2 h-2 rounded-full bg-[#C86F42] align-middle mr-1.5 shadow-xs" />;
}
