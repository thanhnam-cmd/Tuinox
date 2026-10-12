import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center space-y-3 mb-14">
          <div className="text-xs font-semibold text-sky-600 uppercase tracking-widest">
            Khối N · Giải đáp thắc mắc
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            Câu hỏi thường gặp về tủ bếp inox 304
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tổng hợp những băn khoăn phổ biến nhất của các gia chủ trước khi quyết định thi công.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-['Arimo'] uppercase tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-sky-700' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 space-y-2.5 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                    {item.highlight && (
                      <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-sky-900 text-xs font-medium flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{item.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
