import React from 'react';
import { PhoneCall, Ruler, Box, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/mockData';

export const WorkflowSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <PhoneCall className="w-5 h-5 text-sky-600" />;
      case 1:
        return <Ruler className="w-5 h-5 text-indigo-600" />;
      case 2:
        return <Box className="w-5 h-5 text-purple-600" />;
      case 3:
        return <Wrench className="w-5 h-5 text-emerald-600" />;
      case 4:
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="quy-trinh" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-semibold text-sky-600 uppercase tracking-widest">
            Khối J · Dịch vụ chuyên nghiệp
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            Quy trình 5 bước từ xưởng đến gian bếp nhà bạn
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Khép kín, bài bản, không phát sinh chi phí và cam kết tiến độ thần tốc chỉ từ 7–10 ngày.
          </p>
        </div>

        {/* 5-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {WORKFLOW_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center">
                    {getStepIcon(index)}
                  </div>
                  <span className="font-['Arimo'] text-2xl font-black text-slate-300 group-hover:text-sky-500 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 font-['Arimo'] uppercase tracking-tight mb-1">
                  {item.title}
                </h3>

                {/* Time badge */}
                <div className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded w-fit mb-2.5">
                  {item.time}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress connector indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Giai đoạn 0{index + 1}</span>
                {index < 4 ? (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition-transform" />
                ) : (
                  <span className="text-emerald-600 font-bold">Hoàn tất</span>
                )}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
