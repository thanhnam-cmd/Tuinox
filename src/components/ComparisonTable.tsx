import React from 'react';
import { Check, X, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';
import { COMPARISON_DATA } from '../data/mockData';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="so-sanh-giai-phap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-semibold text-sky-600 uppercase tracking-widest">
            Giải pháp vượt trội · Bền trọn đời
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            Bảng so sánh chi tiết các loại tủ bếp
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Minh bạch từng tiêu chí giúp anh/chị đưa ra quyết định đầu tư thông minh và tiết kiệm lâu dài cho ngôi nhà.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Table Header */}
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4 bg-slate-50/70">
                    Tiêu chí đánh giá
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-600 w-1/4 bg-slate-50/40">
                    <div className="flex items-center gap-1.5">
                      <span>Tủ gỗ / MFC / MDF</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-600 w-1/4 bg-slate-50/40">
                    <div className="flex items-center gap-1.5">
                      <span>Inox thường (201)</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-sky-800 w-1/4 bg-sky-50/60 border-l border-sky-100">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sky-600" />
                      <span className="text-sm font-extrabold text-slate-900 font-['Arimo'] uppercase">
                        Inox 304 Của Chúng Tôi
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    
                    {/* Criterion Title */}
                    <td className="py-4 px-6 font-semibold text-slate-900 bg-slate-50/40">
                      {row.criterion}
                    </td>

                    {/* Column 1: Wood */}
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3" />
                        </div>
                        <span className="text-xs sm:text-sm">{row.wood}</span>
                      </div>
                    </td>

                    {/* Column 2: Normal Inox */}
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                          <ShieldAlert className="w-3 h-3" />
                        </div>
                        <span className="text-xs sm:text-sm">{row.normalInox}</span>
                      </div>
                    </td>

                    {/* Column 3: Our Inox 304 */}
                    <td className="py-4 px-6 text-slate-900 font-medium bg-sky-50/30 border-l border-sky-100">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-sky-950 font-semibold">
                          {row.ourInox}
                        </span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Table Bottom Footnote */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-sky-600 shrink-0" />
              <span>
                Toàn bộ thông số dựa trên kết quả kiểm định thực tế và tiêu chuẩn phôi thép Posco.
              </span>
            </div>
            <a
              href="#minh-bach-chat-lieu"
              className="text-sky-700 font-semibold hover:text-sky-900 hover:underline transition-colors shrink-0"
            >
              Xem kết quả test Quatest 1 & hóa chất →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
