import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dor from './components/Dor';
import Solucao from './components/Solucao';
import Demonstracao from './components/Demonstracao';
import ComoFunciona from './components/ComoFunciona';
import Beneficios from './components/Beneficios';
import WhatsAppSection from './components/WhatsAppSection';
import Jornada from './components/Jornada';
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
      {/* 1. Header with strict top bar contract */}
      <Header onOpenCheckout={() => setIsCheckoutOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero — Uma única mensagem */}
        <Hero />

        {/* 3. Segunda dobra — Aprofundar a dor */}
        <Dor />

        {/* 4. Terceira dobra — Entregar a solução */}
        <Solucao />

        {/* 5. Demonstração — Mostrar em vez de explicar */}
        <Demonstracao />

        {/* 6. Como funciona — Três passos */}
        <ComoFunciona />

        {/* 7. Benefícios — Feito para facilitar */}
        <Beneficios />

        {/* 8. WhatsApp — Benefício simples */}
        <WhatsAppSection />

        {/* 9. Jornada — Do campo à venda */}
        <Jornada />

        {/* 10. Quebrar a objeção "É difícil" */}
        <Simplicidade />

        {/* 11. Oferta — Pagamento único R$ 20 */}
        <Oferta onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* 12. FAQ — 5 Objeções reais */}
        <Faq />

        {/* 13. Fechamento — Rural sunset + CTA */}
        <Fechamento onOpenCheckout={() => setIsCheckoutOpen(true)} />
      </main>

      {/* 14. Quiet Footer */}
      <Footer />

      {/* 15. Real Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}
