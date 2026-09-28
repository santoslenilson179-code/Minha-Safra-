import { MessageCircle, UserPlus, Phone, Search } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import FeatureShowcase from './FeatureShowcase';

export default function MockupClientes() {
  const phoneContent = (
    <div className="flex-1 flex flex-col justify-between py-2 text-stone-900">
      {/* Top Header */}
      <div className="pb-3 border-b border-stone-200 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
          Meus Clientes
        </span>
        <button className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-1 rounded-lg">
          <UserPlus className="w-3 h-3" />
          <span>Novo</span>
        </button>
      </div>

      {/* Search Input Mock */}
      <div className="mt-3 mb-2 p-2 bg-stone-100 rounded-xl flex items-center gap-2 text-xs text-stone-500">
        <Search className="w-3.5 h-3.5 text-stone-400" />
        <span>Buscar comprador...</span>
      </div>

      {/* Clients List */}
      <div className="space-y-2.5 my-2">
        {/* Client 1 */}
        <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-900 block">Hortifrúti Central</span>
            <span className="text-[11px] text-stone-500 block">Compra: Manga, Maracujá</span>
          </div>
          <button className="px-2.5 py-1.5 bg-[#25D366] text-white rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-xs">
            <MessageCircle className="w-3 h-3 fill-current" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Client 2 */}
        <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-900 block">Mercado São Pedro</span>
            <span className="text-[11px] text-stone-500 block">Compra: Manga Palmer</span>
          </div>
          <button className="px-2.5 py-1.5 bg-[#25D366] text-white rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-xs">
            <MessageCircle className="w-3 h-3 fill-current" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Client 3 */}
        <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-900 block">Distribuidora Vale</span>
            <span className="text-[11px] text-stone-500 block">Compra: Cargas Fechadas</span>
          </div>
          <button className="px-2.5 py-1.5 bg-[#25D366] text-white rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-xs">
            <MessageCircle className="w-3 h-3 fill-current" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 text-center text-xs text-emerald-900 font-semibold">
        3 compradores frequentes cadastrados
      </div>
    </div>
  );

  return (
    <FeatureShowcase
      eyebrow="SEUS CONTATOS"
      title={
        <>
          Seus compradores
          <br />
          <span className="text-emerald-900 font-semibold">mais perto.</span>
        </>
      }
      description="Cadastre seus contatos e facilite a próxima conversa."
      imageSide="left"
      backgroundVariant="cream"
      mockup={<PhoneFrame variant="light" badge="Tela Meus Clientes">{phoneContent}</PhoneFrame>}
      discreetNote="Exemplo demonstrativo."
    />
  );
}
