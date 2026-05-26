import React from 'react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => (
  <footer className="bg-brand-green-dark text-white py-10 sm:py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-1 bg-white rounded-2xl border-4 border-brand-yellow">
              <BrandLogo className="w-16 h-16" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black text-brand-red uppercase tracking-tight">Nextgen English</h3>
            <p className="text-white/70 font-serif italic text-sm mt-1">"Learn English , Lead the way"</p>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-brand-yellow font-black uppercase tracking-[0.2em] relative inline-block">
            LIÊN HỆ
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/10" />
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <span className="text-brand-teal mt-1">📍</span>
              <span className="text-sm font-bold text-white/90 group-hover:text-brand-yellow transition-colors cursor-pointer">Số 32 Tổ 31B K9, Quang Trung, Phường Uông Bí, Quảng Ninh</span>
            </li>
            <li className="flex items-start gap-3 group">
              <span className="text-brand-teal mt-1">📞</span>
              <span className="text-sm font-bold text-white/90 group-hover:text-brand-yellow transition-colors cursor-pointer">Hotline: 0986 197 229 / 0334 141 989</span>
            </li>
            <li className="flex items-start gap-3 group">
              <span className="text-brand-teal mt-1">✉️</span>
              <span className="text-sm font-bold text-white/90 group-hover:text-brand-yellow transition-colors cursor-pointer">nextgen.uongbi@gmail.com</span>
            </li>
            <li className="flex items-start gap-3 group">
              <span className="text-brand-teal mt-1">🌐</span>
              <a href="https://www.facebook.com/people/Trung-T%C3%A2m-Ngoa%CC%A3i-Ng%C6%B0%CC%83-Nextgen-U%C3%B4ng-Bi%CC%81/61575042515566/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white/90 group-hover:text-brand-yellow transition-colors cursor-pointer underline underline-offset-2 decoration-white/30">Fanpage Facebook</a>
            </li>
          </ul>
        </div>

        {/* Slogan */}
        <div className="space-y-6">
          <h4 className="text-brand-yellow font-black uppercase tracking-[0.2em] relative inline-block">
            SLOGAN
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/10" />
          </h4>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] space-y-4">
            <p className="text-lg font-serif italic text-white font-bold leading-relaxed">
              "Learn English , Lead the way"
            </p>
            <div className="h-0.5 bg-white/10 w-full" />
            <p className="text-base font-black text-brand-teal uppercase tracking-widest text-[13px]">
              HỌC TIẾNG ANH . DẪN LỐI TƯƠNG LAI.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-xs text-white/50">© 2026 Nextgen English. Một trường Anh ngữ chuyên nghiệp & hiện đại.</p>
        <div className="flex gap-4 text-xs text-white/50">
          <span className="hover:text-brand-yellow cursor-pointer transition-colors">Chính sách bảo mật</span>
          <span className="hover:text-brand-yellow cursor-pointer transition-colors">Điều khoản dịch vụ</span>
        </div>
      </div>
    </div>
  </footer>
);
