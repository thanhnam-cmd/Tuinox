import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, FileText, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onQuoteClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onQuoteClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to top button (Desktop & Tablet) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-40 hidden sm:flex w-10 h-10 rounded-full bg-white text-slate-800 border border-slate-300 shadow-lg items-center justify-center hover:bg-slate-50 transition-transform hover:-translate-y-0.5 cursor-pointer"
          aria-label="Về đầu trang"
        >
          <ArrowUp className="w-4 h-4 text-slate-600" />
        </button>
      )}

      {/* Floating Sticky Bottom Bar for Mobile (< 15% of viewport height) */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl px-3 py-2.5">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
          
          {/* Action 1: Zalo */}
          <a
            href="https://zalo.me/0975268168"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 font-bold text-[11px] active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 text-blue-600 mb-0.5" />
            <span>Chat Zalo</span>
          </a>

          {/* Action 2: Gọi ngay */}
          <a
            href="tel:0975268168"
            className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 font-bold text-[11px] active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-rose-600 mb-0.5 animate-bounce" />
            <span>Gọi ngay</span>
          </a>

          {/* Action 3: Báo giá */}
          <button
            onClick={onQuoteClick}
            className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-gradient-to-r from-blue-700 to-rose-600 text-white font-bold text-[11px] active:scale-95 transition-transform shadow-md cursor-pointer"
          >
            <FileText className="w-4 h-4 text-yellow-300 mb-0.5" />
            <span>Báo giá</span>
          </button>

        </div>
      </div>
    </>
  );
};
