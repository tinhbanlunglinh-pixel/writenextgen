import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  apiKey: string;
  onOpenApiKeyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ apiKey, onOpenApiKeyModal }) => (
  <header className="bg-white border-b-4 border-brand-green-dark sticky top-0 z-50 shadow-sm">
    <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between">
      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        <BrandLogo className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" />
        <h1 className="text-lg sm:text-2xl font-black tracking-tight text-brand-red uppercase truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Nextgen English</h1>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <button 
          onClick={onOpenApiKeyModal}
          className="flex flex-col items-end group"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-brand-green/10 hover:bg-brand-green/20 rounded-xl transition-all border border-brand-green/30">
            <Zap size={14} className="text-brand-red sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-extrabold text-brand-green-dark whitespace-nowrap">Cài đặt API Key</span>
          </div>
          {!apiKey && (
            <span className="text-[9px] sm:text-[10px] font-bold text-red-500 mt-1 animate-pulse bg-white/90 px-2 py-0.5 rounded-full shadow-sm">
              Lấy API key để sử dụng app
            </span>
          )}
        </button>

        <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full"><CheckCircle2 size={16} className="text-brand-green-dark" /> Learn English , Lead the way</span>
        </div>
      </div>
    </div>
  </header>
);
