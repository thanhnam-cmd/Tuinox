import React, { useState, useEffect } from 'react';
import { Calculator, Send, CheckCircle2, Upload, Clock, FileCheck, ShieldAlert, Sparkles, PhoneCall } from 'lucide-react';
import { QuoteFormData } from '../types';
import { AppButton } from './AppButton';

interface QuoteSectionProps {
  prefilledModel?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ prefilledModel }) => {
  // Quick Estimator State
  const [estLength, setEstLength] = useState<number>(3.5);
  const [estScope, setEstScope] = useState<'both' | 'lower-only' | 'full-height'>('both');
  const [estDoorType, setEstDoorType] = useState<'glass-slim' | 'acrylic' | 'wood-grain'>('glass-slim');

  // Form Submission State
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    area: 'Hà Nội',
    cabinetType: 'Cả bộ tủ trên và tủ dưới',
    lengthMeters: 3.5,
    selectedModel: prefilledModel || 'Chưa chọn (Nhờ kỹ sư tư vấn)',
    notes: '',
    fileName: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [fileUploadedName, setFileUploadedName] = useState<string>('');

  // Synchronize when prefilledModel changes
  useEffect(() => {
    if (prefilledModel) {
      setFormData((prev) => ({
        ...prev,
        selectedModel: prefilledModel,
      }));
    }
  }, [prefilledModel]);

  // Dynamic estimate calculation
  const calculatedEstimate = React.useMemo(() => {
    let baseRatePerMeter = 6500000; // Base VND per meter for both upper + lower 304 chassis
    if (estScope === 'lower-only') baseRatePerMeter = 4200000;
    if (estScope === 'full-height') baseRatePerMeter = 8200000;

    let doorMultiplier = 1.0;
    if (estDoorType === 'glass-slim') doorMultiplier = 1.25;
    if (estDoorType === 'acrylic') doorMultiplier = 1.1;

    const minTotal = Math.round((estLength * baseRatePerMeter * doorMultiplier * 0.95) / 100000) * 100000;
    const maxTotal = Math.round((estLength * baseRatePerMeter * doorMultiplier * 1.08) / 100000) * 100000;

    return {
      min: minTotal.toLocaleString('vi-VN') + ' đ',
      max: maxTotal.toLocaleString('vi-VN') + ' đ',
    };
  }, [estLength, estScope, estDoorType]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileUploadedName(file.name);
      setFormData((prev) => ({ ...prev, fileName: file.name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Vui lòng điền họ tên và số điện thoại để nhận bảng bóc tách chi tiết.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="bao-gia-form" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-semibold text-sky-600 uppercase tracking-widest">
            Khối M · Minh bạch tài chính
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            Dự toán chi phí & Đặt hàng chuẩn xưởng
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Kéo thước đo để tính nhanh khoảng giá, hoặc để lại thông tin để kỹ sư bóc tách chi tiết từng khoang phụ kiện trong 30 phút.
          </p>
        </div>

        {/* 1. Quick Cost Estimator Bar */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8">
            
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Công cụ tính nhanh dự toán chi phí tủ bếp Inox 304</span>
              </div>

              {/* Slider for kitchen length */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                  <span className="text-slate-300">Chiều dài mét dài (tổng bếp):</span>
                  <span className="text-sky-300 font-bold text-sm">{estLength.toFixed(1)} mét dài</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="8"
                  step="0.5"
                  value={estLength}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setEstLength(val);
                    setFormData((prev) => ({ ...prev, lengthMeters: val }));
                  }}
                  className="w-full accent-sky-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>2.0m (Nhỏ gọn)</span>
                  <span>4.0m (Tiêu chuẩn)</span>
                  <span>6.0m+ (Rộng rãi)</span>
                </div>
              </div>

              {/* Scope & Door Switchers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Hạng mục thi công:</label>
                  <select
                    value={estScope}
                    onChange={(e) => setEstScope(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  >
                    <option value="both">Cả bộ tủ trên & tủ dưới</option>
                    <option value="lower-only">Chỉ làm tủ bếp dưới</option>
                    <option value="full-height">Tủ kịch trần (3 tầng)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Hệ cánh tủ:</label>
                  <select
                    value={estDoorType}
                    onChange={(e) => setEstDoorType(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  >
                    <option value="glass-slim">Cánh kính cường lực khung Slim</option>
                    <option value="acrylic">Cánh Acrylic bóng gương Noline</option>
                    <option value="wood-grain">Cánh phủ Laminate vân gỗ</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Estimated Price Tag Output */}
            <div className="lg:w-72 bg-slate-800/80 rounded-xl border border-slate-700 p-5 text-center flex flex-col justify-center shrink-0">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Dự toán tham khảo trọn gói
              </span>
              <div className="text-xl sm:text-2xl font-black text-sky-400 font-['Arimo'] mt-1">
                {calculatedEstimate.min}
              </div>
              <span className="text-xs text-slate-400">đến {calculatedEstimate.max}</span>
              <div className="mt-3 pt-2 border-t border-slate-700/80 text-[10px] text-slate-400">
                Đã gồm thùng Inox 304 Posco + Cánh + Bản lề giảm chấn + Lắp đặt hoàn thiện
              </div>
            </div>

          </div>
        </div>

        {/* 2. Main Wireframe Form & Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Input Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-['Arimo'] uppercase">
                  Đã nhận yêu cầu báo giá thành công!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Kỹ sư phụ trách xưởng sẽ liên hệ lại với anh/chị <strong>{formData.fullName}</strong> qua số điện thoại <strong>{formData.phone}</strong> trong vòng 30 phút với bảng bóc tách chi tiết.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors"
                  >
                    Gửi thêm yêu cầu khác
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3 mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Điền thông tin nhận báo giá chi tiết
                  </span>
                  {prefilledModel && (
                    <span className="text-[11px] font-semibold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                      Đã chọn: {prefilledModel}
                    </span>
                  )}
                </div>

                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Họ và tên của anh/chị <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn Tuấn"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Số điện thoại (Zalo) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="09xx xxx xxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* Row 2: Khu vực & Loại tủ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Khu vực công trình
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="Hà Nội">Hà Nội & lân cận</option>
                      <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh & Bình Dương</option>
                      <option value="Đà Nẵng">Đà Nẵng & miền Trung</option>
                      <option value="Hải Phòng">Hải Phòng & Quảng Ninh</option>
                      <option value="Tỉnh khác">Các tỉnh thành khác toàn quốc</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Hạng mục tủ cần làm
                    </label>
                    <select
                      value={formData.cabinetType}
                      onChange={(e) => setFormData({ ...formData, cabinetType: e.target.value })}
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="Cả bộ tủ trên và tủ dưới">Cả bộ tủ trên và tủ dưới</option>
                      <option value="Chỉ làm tủ bếp dưới">Chỉ làm tủ bếp dưới</option>
                      <option value="Tủ kịch trần kèm bàn đảo">Tủ kịch trần kèm bàn đảo</option>
                      <option value="Tủ lavabo Inox phòng tắm">Tủ lavabo Inox phòng tắm</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Mẫu cánh đã chọn & Kích thước */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mẫu cánh / Tay nắm ưu thích
                    </label>
                    <input
                      type="text"
                      value={formData.selectedModel}
                      onChange={(e) => setFormData({ ...formData, selectedModel: e.target.value })}
                      placeholder="Mẫu kính titan, acrylic..."
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Chiều dài dự kiến (mét dài)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.lengthMeters}
                      onChange={(e) => setFormData({ ...formData, lengthMeters: Number(e.target.value) })}
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* Upload File / Drawing */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Upload bản vẽ mặt bằng hoặc ảnh hiện trạng bếp (nếu có)
                  </label>
                  <label className="border-2 border-dashed border-slate-300 hover:border-sky-500 rounded-xl p-3 flex items-center justify-center gap-2 bg-white cursor-pointer transition-colors">
                    <Upload className="w-4 h-4 text-sky-600" />
                    <span className="text-xs text-slate-600">
                      {fileUploadedName ? `Đã chọn: ${fileUploadedName}` : 'Bấm để chọn file ảnh / bản vẽ PDF / CAD'}
                    </span>
                    <input
                      type="file"
                      accept="image/*,.pdf,.dwg"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ghi chú thêm yêu cầu đặc biệt
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ví dụ: Cần khoang để máy rửa bát Bosch, hút mùi âm tủ..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Submit Button with AppButton */}
                <AppButton
                  type="submit"
                  variant="shine-sweep"
                  colorScheme="red"
                  size="lg"
                  rounded="xl"
                  fullWidth
                  icon={<Send className="w-4 h-4 text-white" />}
                  className="uppercase tracking-wider font-black shadow-lg shadow-rose-600/30"
                >
                  Gửi yêu cầu nhận báo giá & bản vẽ 3D
                </AppButton>
              </form>
            )}
          </div>

          {/* Right: Commitments (Cam kết từ xưởng) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-6 sm:p-7 space-y-6">
              
              <div>
                <span className="text-[11px] font-bold text-sky-700 uppercase tracking-widest block mb-1">
                  Chính sách chuẩn xưởng
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-['Arimo'] uppercase tracking-tight">
                  Cam kết vàng với khách hàng
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white text-sky-600 flex items-center justify-center shrink-0 shadow-xs border border-sky-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Phản hồi trong 30 phút</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Kỹ sư thiết kế trực tiếp phân tích mặt bằng và gửi bảng bóc tách chi tiết qua Zalo ngay trong 30 phút.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-xs border border-sky-100">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Báo giá minh bạch, không phát sinh</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Liệt kê chi tiết từng mét dài thùng tủ, ray trượt, bản lề, phụ kiện; cam kết đúng 100% con số trong hợp đồng.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white text-rose-600 flex items-center justify-center shrink-0 shadow-xs border border-sky-100">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Hợp đồng ghi rõ vật liệu & Đền bù x3</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Cam kết bằng văn bản có dấu mộc pháp nhân: đền gấp 3 lần giá trị nếu phát hiện pha tạp Inox 201.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Call hotline */}
              <div className="pt-4 border-t border-sky-200/80 flex items-center justify-between">
                <div className="text-xs text-slate-600">
                  Cần khảo sát gấp trong ngày?
                </div>
                <a
                  href="tel:0975268168"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-white px-3 py-1.5 rounded-lg border border-sky-200 shadow-xs hover:bg-sky-50 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
                  <span>0975.268.168</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
