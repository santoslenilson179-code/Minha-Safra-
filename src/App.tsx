import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dor from './components/Dor';
import HomeOverview from './components/HomeOverview';
import ComoFunciona from './components/ComoFunciona';
import FluxoFaixa from './components/FluxoFaixa';
import MockupGastos from './components/MockupGastos';
import MockupProducao from './components/MockupProducao';
import MockupVendas from './components/MockupVendas';
import MockupResultado from './components/MockupResultado';
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

        {/* 04 — COMO FUNCIONA: 3 passos + Faixa de fluxo */}
        <ComoFunciona />
        <FluxoFaixa />

        {/* 05 — GASTOS: Mockup registrar gasto (Texto esq / Mockup dir) */}
        <MockupGastos />

        {/* 06 — PRODUÇÃO: Mockup registrar produção (Mockup esq / Texto dir) */}
        <MockupProducao />

        {/* 07 — VENDAS: Mockup registrar venda (Texto esq / Mockup dir) */}
        <MockupVendas />

        {/* 08 — RESULTADO: Grande mockup do resultado em verde floresta */}
        <MockupResultado />

        {/* 09 — OFERTA / WHATSAPP: Demonstração com 2 celulares */}
        <MockupWhatsAppDual />

        {/* 11 — CONEXÃO DO CAMPO AO APP: Fotografia rural + Smartphone em 1º plano */}
        <CampoConexao />

        {/* 12 — BENEFÍCIOS: Grade dos recursos do app (+ Vendi / - Gastei / WhatsApp...) */}
        <Beneficios />

        {/* 13 — SIMPLICIDADE: Letras grandes + botões fáceis + celular */}
        <Simplicidade />

        {/* 14 — OFERTA COMERCIAL: R$20 pagamento único */}
        <Oferta onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* 15 — FAQ: Dúvidas principais */}
        <Faq />

        {/* 16 — CTA FINAL: Fotografia rural entardecer + CTA */}
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
