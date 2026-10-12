import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, CheckCircle2, Car } from 'lucide-react';

interface FactoryBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FactoryBookingModal: React.FC<FactoryBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '2026-10-15',
    timeSlot: '09:30',
    visitorsCount: '2 người',
    needsPickup: true,
    pickupAddress: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/70">
          <div>
            <span className="text-[11px] font-bold text-sky-700 uppercase tracking-widest block mb-1">
              Trải nghiệm thực tế · Miễn phí 100%
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-['Arimo'] uppercase tracking-tight">
              Đặt lịch tham quan nhà xưởng sản xuất
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto text-xs">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-['Arimo'] uppercase">
                Đặt lịch thành công!
              </h4>
              <p className="text-slate-600 max-w-sm mx-auto">
                Chuyên viên điều phối xưởng đã ghi nhận lịch hẹn của anh/chị <strong>{formData.name}</strong> vào ngày <strong>{formData.date}</strong> lúc <strong>{formData.timeSlot}</strong>. Xe đón sẽ liên hệ trước 1 tiếng.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold uppercase tracking-wider"
                >
                  Xác nhận đóng
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Họ và tên của anh/chị <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Số điện thoại liên hệ <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Ngày tham quan
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Khung giờ
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="09:00">09:00 Sáng</option>
                    <option value="10:30">10:30 Sáng</option>
                    <option value="14:00">14:00 Chiều</option>
                    <option value="15:30">15:30 Chiều</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Số người đi
                  </label>
                  <select
                    value={formData.visitorsCount}
                    onChange={(e) => setFormData({ ...formData, visitorsCount: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="1 người">1 người</option>
                    <option value="2 người">2 người (vợ chồng)</option>
                    <option value="3-4 người">3-4 người (gia đình)</option>
                  </select>
                </div>
              </div>

              {/* Shuttle pickup option */}
              <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-sky-900">
                  <input
                    type="checkbox"
                    checked={formData.needsPickup}
                    onChange={(e) => setFormData({ ...formData, needsPickup: e.target.checked })}
                    className="rounded text-sky-600 focus:ring-sky-500"
                  />
                  <span>Đăng ký xe ô tô đưa đón tận nhà miễn phí (bán kính &lt; 30km)</span>
                </label>

                {formData.needsPickup && (
                  <input
                    type="text"
                    placeholder="Nhập địa chỉ đón (ví dụ: Tòa R1 Vinhomes Smart City)"
                    value={formData.pickupAddress}
                    onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                    className="w-full bg-white border border-sky-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Xác nhận đặt lịch tham quan xưởng</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
