import { useState } from 'react';
import { X, Check, Copy, ShieldCheck, QrCode } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [crop, setCrop] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'form' | 'success'>('form');

  if (!isOpen) return null;

  const handleCopyPix = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136minhasafra-app-pix-chave-20reais520400005303986540520.005802BR5920Minha Safra Oficial6009Sao Paulo62070503***6304E8A2');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B1E13] px-6 py-5 flex items-center justify-between text-white">
          <div>
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
              Acesso Imediato
            </span>
            <h3 className="text-xl font-bold">Minha Safra no seu Celular</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {status === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Price summary */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <div>
                <p className="font-bold text-stone-900 text-sm">Acesso Vitalício Minha Safra</p>
                <p className="text-xs text-stone-500">Pagamento único · Sem mensalidades</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-emerald-800 tabular-nums">R$ 20</span>
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Seu Nome
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: João da Silva"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                WhatsApp (para envio do link de acesso)
              </label>
              <input
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Ex: (87) 99999-9999"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                O que você produz? (opcional)
              </label>
              <input
                type="text"
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                placeholder="Ex: Manga, Uva, Milho, Café, Hortaliças..."
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-sm"
              />
            </div>

            {/* Payment method selector */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Forma de Pagamento
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-3 px-4 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'pix'
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-emerald-700" />
                  <span>PIX (Instantâneo)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cartao')}
                  className={`py-3 px-4 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'cartao'
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span>Cartão de Crédito</span>
                </button>
              </div>
            </div>

            {/* PIX copy button if PIX */}
            {paymentMethod === 'pix' && (
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-2">
                <p className="text-xs text-stone-600">
                  Chave PIX Copia e Cola disponível após confirmar seus dados.
                </p>
                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 py-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Chave PIX copiada!' : 'Copiar chave PIX teste'}</span>
                </button>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-4 text-base font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md active:scale-[0.98]"
            >
              Confirmar e Receber no WhatsApp
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Garantia de simplicidade e suporte direto</span>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-stone-900 mb-1">
                Tudo pronto, {name || 'produtor'}!
              </h4>
              <p className="text-sm text-stone-600">
                Seu pedido foi registrado. Enviamos as instruções e o link direto para o número{' '}
                <span className="font-bold text-stone-800">{whatsapp || 'informado'}</span>.
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-left text-xs text-stone-600 space-y-1">
              <p className="font-bold text-stone-900">Próximos passos:</p>
              <p>1. Abra seu WhatsApp.</p>
              <p>2. Toque no link que enviamos da equipe Minha Safra.</p>
              <p>3. Comece a anotar seus números em menos de 1 minuto.</p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 text-sm font-bold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all"
            >
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
