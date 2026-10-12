import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Layers } from 'lucide-react';
import { ProductModule } from '../../types';

interface ProductDetailModalProps {
  product: ProductModule | null;
  onClose: () => void;
  onSelectForQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectForQuote,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div>
            <span className="text-[11px] font-bold text-sky-700 uppercase tracking-widest block mb-1">
              Chi tiết cấu tạo kỹ thuật · {product.badge}
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-['Arimo'] uppercase tracking-tight">
              {product.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Product Hero Image */}
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-gradient-to-br from-slate-50 to-sky-50/60">
            <img
              src={
                product.badge.includes('Thùng')
                  ? 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Industrial%20stainless%20steel%20304%20sheet%20metal%20cabinet%20box%20body%20production%20at%20CNC%20laser%20cutting%20factory%20workshop%2C%20Posco%20material%2C%20clean%20manufacturing%2C%20photorealistic&image_size=landscape_4_3'
                  : product.badge.includes('Cánh')
                  ? 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20kitchen%20cabinet%20doors%20collection%20sample%20panel%3A%20glossy%20glass%20grey%20titanium%2C%20acrylic%20white%2C%20walnut%20wood%20grain%2C%20slim%20aluminum%20frame%2C%20Vietnamese%20showroom%2C%20photorealistic&image_size=landscape_4_3'
                  : 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Luxury%20quartz%20stone%20kitchen%20countertop%20samples%20on%20display%2C%20white%20marble%20grey%20veins%2C%20stainless%20steel%20sink%2C%20Vietnamese%20interior%20design%2C%20photorealistic&image_size=landscape_4_3'
              }
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-slate-600 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Technical Specs Table */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-600" />
              <span>Bảng thông số kỹ thuật xuất xưởng</span>
            </h4>
            <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
              {product.specs.map((item, idx) => (
                <div key={idx} className="flex justify-between p-3 bg-white">
                  <span className="font-medium text-slate-500">{item.label}</span>
                  <span className="font-bold text-slate-900 text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Ưu điểm vượt trội so với thị trường
            </h4>
            <div className="space-y-2">
              {product.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality badge banner */}
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 flex items-center gap-3 text-xs text-sky-900">
            <ShieldCheck className="w-6 h-6 text-sky-600 shrink-0" />
            <div>
              <strong>Tiêu chuẩn xuất xưởng nghiêm ngặt:</strong> 100% phôi inox được kiểm tra độ dày và thành phần trước khi đưa lên máy cắt laser CNC.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Đóng lại
          </button>
          <button
            onClick={() => {
              onSelectForQuote(product.name);
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Chọn hạng mục này để báo giá</span>
            <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

      </div>
    </div>
  );
};
