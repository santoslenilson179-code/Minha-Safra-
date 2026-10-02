import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dor from './components/Dor';
import HomeOverview from './components/HomeOverview';
import ComoFunciona from './components/ComoFunciona';
import StickyProductShowcase from './components/StickyProductShowcase';
import HarvestProgressLine from './components/HarvestProgressLine';
import MockupWhatsAppDual from './components/MockupWhatsAppDual';
import CampoConexao from './components/CampoConexao';
import Beneficios from './components/Beneficios';
import Simplicidade from './components/Simplicidade';
import Oferta from './components/Oferta';
import Faq from './components/Faq';
import Fechamento from './components/Fechamento';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      {/* Top Header */}
      <Header onOpenCheckout={() => setIsCheckoutOpen(true)} />

      <main className="flex-1">
        {/* 01 — HERO: Dor + solução + fotografia do trator e plantação */}
        <Hero />

        {/* 02 — PROBLEMA: Informações espalhadas no dia a dia */}
        <Dor />

        {/* 03 — APRESENTAÇÃO: Grande mockup da Home real */}
        <HomeOverview />

        {/* 04 — COMO FUNCIONA: 3 passos objetivos */}
        <ComoFunciona />

        {/* 05 — STICKY PRODUCT SHOWCASE:
            No Desktop: celular sticky à esquerda (top: 100px) trocando suavemente
            as 4 telas reais (Gastos, Produção, Vendas, Resultado) conforme o visitante
            rola os passos 01, 02, 03, 04 à direita.
            No Mobile: sequência vertical limpa com mockups proporcionais. */}
        <StickyProductShowcase />

        {/* 06 — HARVEST PROGRESS LINE:
            Continuidade visual direta da linha do showcase, resumindo a jornada
            GASTEI → PRODUZI → VENDI → ACOMPANHEI com preenchimento em scroll,
            fechando com o selo "Tudo organizado. Sem complicação." e a ponte para o WhatsApp. */}
        <HarvestProgressLine />

        {/* 07 — OFERTA / WHATSAPP: Demonstração com 2 celulares */}
        <MockupWhatsAppDual />

        {/* 08 — CONEXÃO DO CAMPO AO APP: Fotografia rural + Smartphone em 1º plano */}
        <CampoConexao />

        {/* 09 — BENEFÍCIOS: Grade dos recursos do app (+ Vendi / - Gastei / WhatsApp...) */}
        <Beneficios />

        {/* 10 — SIMPLICIDADE: Letras grandes + botões fáceis + celular */}
        <Simplicidade />

        {/* 11 — OFERTA COMERCIAL: R$20 pagamento único */}
        <Oferta onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* 12 — FAQ: Dúvidas principais */}
        <Faq />

        {/* 13 — CTA FINAL: Fotografia rural entardecer + CTA */}
        <Fechamento onOpenCheckout={() => setIsCheckoutOpen(true)} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}
