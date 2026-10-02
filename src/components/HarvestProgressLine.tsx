import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  FileSpreadsheet,
  Wheat,
  Scale,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import seederNightImg from '../assets/images/seeder_fertilizer_bag_night_1790947205742.jpg';
import {
  FieldRowsPattern,
  OrganicGrainTexture,
  HarvestAccentLine,
  OrganicTerrainDivider,
} from './RuralAccents';

interface ProgressStep {
  id: string;
  stage: string;
  timeframe: string;
  title: string;
  actionSummary: string;
  icon: typeof FileSpreadsheet;
  badge: string;
  accentColor: string;
  kpis: { label: string; value: string }[];
}

const HARVEST_STAGES: ProgressStep[] = [
  {
    id: 'preparo',
    stage: 'ETAPA 01',
    timeframe: 'Início do Ciclo',
    title: 'Preparo & Insumos',
    actionSummary: 'Adubo, sementes, diesel e serviços lançados em segundos.',
    icon: FileSpreadsheet,
    badge: 'Controle de Custos',
    accentColor: '#C86F42', // Terracota
    kpis: [
      { label: 'Custos Iniciais', value: '100% anotados' },
      { label: 'Insumos', value: 'Cadastrados' },
    ],
  },
  {
    id: 'manejo',
    stage: 'ETAPA 02',
    timeframe: 'Desenvolvimento',
    title: 'Manejo & Despesas',
    actionSummary: 'Diárias, pulverizações e manutenção no ritmo do campo.',
    icon: Wheat,
    badge: 'Acompanhamento Ativo',
    accentColor: '#D9AD5B', // Dourado Safra
    kpis: [
      { label: 'Diárias & Mão de Obra', value: 'Em dia' },
      { label: 'Sem papelada', value: 'No celular' },
    ],
  },
  {
    id: 'colheita',
    stage: 'ETAPA 03',
    timeframe: 'Ponto Alto',
    title: 'Colheita & Produção',
    actionSummary: 'Sacas, caixas ou toneladas registradas direto na roça.',
    icon: Scale,
    badge: 'Volume Colhido',
    accentColor: '#22c55e', // Verde
    kpis: [
      { label: 'Total Produzido', value: 'Apurado' },
      { label: 'Romaneios', value: 'Organizados' },
    ],
  },
  {
    id: 'comercializacao',
    stage: 'ETAPA 04',
    timeframe: 'Fechamento Real',
    title: 'Vendas & Lucro Real',
    actionSummary: 'Total vendido menos total gasto. Seu resultado sem mistério.',
    icon: CheckCircle2,
    badge: 'Resultado Limpo',
    accentColor: '#34d399', // Esmeralda
    kpis: [
      { label: 'Vendas Totais', value: 'Fechadas' },
      { label: 'Lucro Líquido', value: 'Na palma da mão' },
    ],
  },
];

export default function HarvestProgressLine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;

      // Calcular progresso quando a seção entra na tela
      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (totalHeight + windowHeight * 0.4))
      );
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="jornada"
      ref={containerRef}
      className="relative bg-[#0b100d] text-white pt-16 pb-24 sm:pb-32 overflow-hidden"
    >
      {/* 
        =======================================================================
        BACKGROUND: ABASTECIMENTO NOTURNO NO CAMPO + PONTES DE TRANSIÇÃO
        =======================================================================
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={seederNightImg}
          alt="Abastecimento noturno no campo com guincho abastecendo plantadeira com big bag de sementes e adubo sob refletores"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_40%] transition-transform duration-1000 ease-out"
          style={{
            transform: `scale(${1 + scrollProgress * 0.03})`,
          }}
        />

        {/* Overlay escuro de alta legibilidade em Verde Floresta / Noite (#0b100d) */}
        <div className="absolute inset-0 bg-[#0b100d]/75 sm:bg-[#0b100d]/65 backdrop-blur-[0.2px]" />

        {/* Ponte de transição superior: recebe perfeitamente a quinta dobra (#07110c / #0b100d) */}
        <div
          className="absolute inset-x-0 top-0 h-40 sm:h-56 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #07110c 0%, rgba(11, 16, 13, 0.85) 50%, transparent 100%)',
          }}
        />

        {/* Gradiente radial aconchegante valorizando a luz do abastecimento e plantio */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_20%,#0b100d_90%)] pointer-events-none" />

        {/* Padrão de sulcos/linhas de campo e textura tátil */}
        <FieldRowsPattern stroke="rgba(217, 173, 91, 0.06)" />
        <OrganicGrainTexture opacity={0.035} />

        {/* 
          Ponte de transição inferior harmoniosa para a 7ª dobra (MockupWhatsAppDual):
          Conectando a atmosfera noturna do plantio/colheita com a dobra de envio do relatório (#0e1511)
        */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(11, 16, 13, 0.5) 35%, rgba(14, 21, 17, 0.85) 75%, #0e1511 100%)',
          }}
        />
      </div>

      {/* Conteúdo da Jornada */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-8 sm:pt-12">
        {/* Curva SVG discreta conectando a linha vertical do showcase com a linha horizontal */}
        <div className="hidden lg:flex items-center justify-start pl-16 mb-8 text-[#C86F42]" aria-hidden="true">
          <svg width="180" height="48" viewBox="0 0 180 48" fill="none">
            <path
              d="M 12 0 V 24 Q 12 36 28 36 H 170"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
              className="opacity-40"
            />
          </svg>
        </div>

        {/* Header da Jornada */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 sm:mb-20 fade-up-init ${
            isHeaderVisible ? 'fade-up-active' : ''
          }`}
        >
          <div className="flex justify-center mb-3">
            <HarvestAccentLine color="#D9AD5B" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4 backdrop-blur-md shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#D9AD5B]" />
            DO PLANTIO AO FECHAMENTO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] [text-wrap:balance] drop-shadow-md">
            Sua safra.
            <br />
            <span className="text-emerald-300 font-semibold">
              Passo a passo, até o resultado final.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-stone-200 mt-4 leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-sm">
            O Minha Safra acompanha cada momento do seu ciclo agrícola. Veja como suas anotações
            constroem a visão completa do seu lucro.
          </p>
        </div>

        {/* 
          =======================================================================
          LINHA DE PROGRESSO HORIZONTAL (DESKTOP) / PROGRESSÃO VERTICAL (MOBILE)
          =======================================================================
        */}
        <div className="relative">
          {/* Trilho base horizontal no Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[3px] bg-white/20 rounded-full z-0">
            {/* Preenchimento animado via scroll */}
            <div
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${Math.min(100, Math.max(10, scrollProgress * 115))}%`,
                background:
                  'linear-gradient(90deg, #C86F42 0%, #D9AD5B 40%, #22c55e 75%, #34d399 100%)',
              }}
            />
          </div>

          {/* Cards dos 4 momentos da safra */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {HARVEST_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isPastCurrent = scrollProgress > (idx + 0.2) * 0.22;

              return (
                <div
                  key={stage.id}
                  className="bg-[#0f1712]/85 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/40 shadow-xl shadow-black/40 flex flex-col justify-between soft-card-lift transition-all duration-700 ease-out relative group"
                  style={{
                    borderColor: isPastCurrent ? `${stage.accentColor}60` : undefined,
                  }}
                >
                  {/* Topo do Card: Badge de estágio e ícone */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Nó indicador no topo */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-md transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `${stage.accentColor}25`,
                          color: stage.accentColor,
                          border: `1.5px solid ${stage.accentColor}`,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span className="text-[11px] font-bold tracking-widest uppercase text-stone-300/80 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                        {stage.timeframe}
                      </span>
                    </div>

                    <div className="space-y-1 mb-3">
                      <p
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: stage.accentColor }}
                      >
                        {stage.stage}
                      </p>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {stage.title}
                      </h3>
                    </div>

                    <p className="text-sm text-stone-300 leading-relaxed font-normal mb-5">
                      {stage.actionSummary}
                    </p>
                  </div>

                  {/* Base do Card: Indicadores de controle simples */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    {stage.kpis.map((kpi, kpiIdx) => (
                      <div
                        key={kpiIdx}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-stone-300">{kpi.label}</span>
                        <span
                          className="font-bold"
                          style={{ color: stage.accentColor }}
                        >
                          {kpi.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Indicador de progresso suave no topo do card (Desktop) */}
                  <div
                    className="hidden lg:block absolute -top-[19px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-white transition-all duration-300 shadow-sm"
                    style={{
                      borderColor: isPastCurrent ? stage.accentColor : '#536B45',
                      backgroundColor: isPastCurrent ? stage.accentColor : '#0b100d',
                      transform: isPastCurrent ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Resumo de Confiança abaixo da linha */}
        <div className="mt-16 sm:mt-20 text-center max-w-xl mx-auto">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-md">
            <p className="text-xs uppercase tracking-widest text-[#D9AD5B] font-bold mb-1">
              TRANQUILIDADE NA PRÁTICA
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm">
              Tudo organizado. Sem complicação.
            </h3>
            <p className="text-sm text-stone-300 mt-2">
              Do registro rápido na roça ao fechamento claro do seu resultado.
            </p>
          </div>

          {/* PONTE PARA WHATSAPP: Conecta controle + comercialização */}
          <div className="pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-xs sm:text-sm font-bold text-white">
              <span>E quando chega a hora de oferecer sua produção?</span>
              <ArrowRight className="w-4 h-4 text-[#D9AD5B]" />
            </div>
          </div>
        </div>
      </div>

      {/* Divisor orgânico suave na base para conectar harmonicamente com a sétima dobra */}
      <div className="relative w-full z-20 mt-14 sm:mt-20">
        <OrganicTerrainDivider height={44} fill="#0e1511" />
      </div>
    </section>
  );
}
