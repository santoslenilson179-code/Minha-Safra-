import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erro capturado na renderização do Minha Safra:', error, errorInfo);
  }

  handleReload = () => {
    try {
      if ('serviceWorker' in navigator && navigator.serviceWorker.getRegistrations) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations.forEach((registration) => {
            registration.unregister().catch(() => {});
          });
        }).catch(() => {});
      }
    } catch {
      // Ignore cleanup errors
    }

    const url = new URL(window.location.href);
    url.searchParams.set('v', String(Date.now()));
    window.location.replace(url.toString());
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#14251C] text-white flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-[#0B1E13] border border-emerald-500/30 rounded-3xl p-8 text-center shadow-2xl space-y-5">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-2xl">
              🌱
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-extrabold tracking-tight text-white">
                Algo impediu o carregamento da página
              </h1>
              <p className="text-sm text-stone-200 leading-relaxed">
                Isso pode acontecer por instabilidade na conexão ou versão desatualizada em cache no celular.
              </p>
            </div>
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full py-3.5 px-6 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold rounded-xl text-base transition-colors cursor-pointer"
              >
                Recarregar página
              </button>
              <button
                type="button"
                onClick={() => this.setState({ hasError: false })}
                className="w-full py-3 px-6 bg-white/10 hover:bg-white/15 text-stone-200 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
              >
                Tentar novamente
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
