import { Sprout } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#07130A] border-t border-emerald-950/80 text-stone-400 py-12 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Sprout className="w-4 h-4" />
          </div>
          <span className="font-bold text-base text-stone-200">Minha Safra</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
          <a href="#como-funciona" className="hover:text-stone-200 transition-colors">
            Como funciona
          </a>
          <a href="#beneficios" className="hover:text-stone-200 transition-colors">
            Recursos
          </a>
          <a href="#jornada" className="hover:text-stone-200 transition-colors">
            Do campo à venda
          </a>
          <a href="#duvidas" className="hover:text-stone-200 transition-colors">
            Dúvidas
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-stone-500 text-center md:text-right">
          © {new Date().getFullYear()} Minha Safra. Feito para o produtor rural.
        </p>
      </div>
    </footer>
  );
}
