import React from 'react';
import { Award, FileText, Factory, Home } from 'lucide-react';
import { TRUST_METRICS } from '../data/mockData';
import { useCountUp } from '../hooks/useCountUp';

interface TrustMetricProps {
  metric: typeof TRUST_METRICS[number];
}

const TrustMetric: React.FC<TrustMetricProps> = ({ metric }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'm1':
        return <Award className="w-6 h-6" style={{ color: '#C69A55' }} />;
      case 'm2':
        return <FileText className="w-6 h-6" style={{ color: '#C69A55' }} />;
      case 'm3':
        return <Factory className="w-6 h-6" style={{ color: '#C69A55' }} />;
      case 'm4':
        return <Home className="w-6 h-6" style={{ color: '#C69A55' }} />;
      default:
        return <Award className="w-6 h-6" style={{ color: '#C69A55' }} />;
    }
  };

  const hasCountUp = typeof metric.target === 'number';
  const { count, ref } = useCountUp({ target: metric.target ?? 0 });

  return (
    <div className="relative flex items-start gap-3.5 sm:gap-4 group cursor-default min-w-0">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:-translate-y-0.5"
        style={{
          backgroundColor: '#F7F5F0',
          border: '1px solid rgba(198,154,85,0.2)',
        }}
      >
        {getIcon(metric.id)}
      </div>

      <div className="min-w-0 flex-1">
        {hasCountUp ? (
          <div
            className="text-[1.35rem] sm:text-[1.45rem] lg:text-[1.5rem] font-bold tracking-tight leading-[1.15] font-['Be_Vietnam_Pro',sans-serif] break-words"
            style={{ color: '#102744' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.color = '#C69A55'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.color = '#102744'; }}
          >
            {metric.prefix}
            <span ref={ref}>{count}</span>
            {metric.suffix}
          </div>
        ) : (
          <div
            className="text-[1.35rem] sm:text-[1.45rem] lg:text-[1.5rem] font-bold tracking-tight leading-[1.15] font-['Be_Vietnam_Pro',sans-serif] whitespace-pre-line"
            style={{ color: '#102744' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.color = '#C69A55'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.color = '#102744'; }}
          >
            {metric.value}
          </div>
        )}
        <div
          className="mt-1 text-[11px] font-bold uppercase leading-snug font-['Be_Vietnam_Pro',sans-serif]"
          style={{ color: '#C69A55', letterSpacing: '0.04em' }}
        >
          {metric.subtext}
        </div>
        <div
          className="mt-1 text-[12.5px] leading-snug font-['Be_Vietnam_Pro',sans-serif]"
          style={{ color: '#26364A' }}
        >
          {metric.detail}
        </div>
      </div>
    </div>
  );
};

export const TrustBar: React.FC = () => {
  return (
    <section className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-10 sm:pb-12 lg:pb-16">
      <div className="mt-8 sm:mt-10 lg:mt-12">
        <div
          className="rounded-2xl sm:rounded-[22px] px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 overflow-hidden"
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0 12px 34px rgba(16,39,68,0.08), 0 3px 8px rgba(16,39,68,0.04)',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {TRUST_METRICS.map((metric, index) => (
              <div key={metric.id} className="relative">
                {index > 0 && (
                  <div
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(50%+16px)] w-px h-14"
                    style={{ backgroundColor: '#E3E7ED' }}
                    aria-hidden="true"
                  />
                )}
                <TrustMetric metric={metric} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
