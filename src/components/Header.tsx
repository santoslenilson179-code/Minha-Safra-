import { useState } from 'react';
import { Sprout, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export default function Header({ onOpenCheckout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B1E13]/90 backdrop-blur-md border-b border-emerald-900/40 text-stone-100 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white hover:text-emerald-300 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Sprout className="w-5 h-5" />
          </div>
          <span>Minha Safra</span>
        </a>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a href="#como-funciona" className="hover:text-white transition-colors">
            Como funciona
          </a>
          <a href="#beneficios" className="hover:text-white transition-colors">
            Recursos
          </a>
          <a href="#jornada" className="hover:text-white transition-colors">
            Do campo à venda
          </a>
          <a href="#duvidas" className="hover:text-white transition-colors">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCheckout}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-sm active:scale-[0.98] whitespace-nowrap"
          >
            Quero Começar
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1E13] border-b border-emerald-900/60 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-base font-medium text-stone-200">
            <a 
              href="#como-funciona" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400"
            >
              Como funciona
            </a>
            <a 
              href="#beneficios" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400"
            >
              Recursos
            </a>
            <a 
              href="#jornada" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400"
            >
              Do campo à venda
            </a>
            <a 
              href="#duvidas" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400"
            >
              Dúvidas
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all"
            >
              Quero Começar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
