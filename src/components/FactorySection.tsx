import React, { useState } from 'react';
import { Factory, Calendar, Cpu, Gauge, CheckSquare, Sparkles, Play, ShieldCheck } from 'lucide-react';
import { AppButton } from './AppButton';

interface FactorySectionProps {
  onBookTour: () => void;
}

export const FactorySection: React.FC<FactorySectionProps> = ({ onBookTour }) => {
  const [activeZone, setActiveZone] = useState<number>(0);
  const [isPlayingVirtual, setIsPlayingVirtual] = useState(false);

  const zones = [
    {
      title: 'Phân khu Cắt Laser CNC Sợi Quang 6000W',
      desc: 'Cắt phôi inox 304 chuẩn xác từng 0.05mm từ cuộn Posco nhập khẩu, đường cắt mịn bóng không để lại ba-vớ hay cháy cạnh.',
      machine: 'Máy Fiber Laser Amada Nhật Bản',
      standard: 'Dung sai ±0.05mm',
    },
    {
      title: 'Phân khu Chấn Gấp Thủy Lực Đa Điểm',
      desc: 'Bẻ gập ngàm liên kết không mối hàn lộ, tạo các gờ bo tròn mềm mại và dập gân chữ X tăng cứng chịu lực lên tới 150kg.',
      machine: 'Máy chấn CNC Amada 100 Tấn',
      standard: 'Góc bẻ 90° chuẩn xác tuyệt đối',
    },
    {
      title: 'Phân khu Dán Tiêu Âm Tổ Ong Nhôm',
      desc: 'Ép chân không màng nhôm tổ ong hàng không vào giữa 2 lớp inox để triệt tiêu tiếng vang kim loại, tạo độ êm ái hoàn hảo.',
      machine: 'Buồng ép nhiệt chân không áp suất cao',
      standard: 'Giảm 95% tiếng ồn va đập',
    },
    {
      title: 'Phân khu Kiểm Định QC 5 Bước & Đóng Gói',
      desc: 'Kiểm tra độ phẳng, thử hóa chất 304 ngẫu nhiên từng kiện, khắc mã QR truy xuất và đóng bọc màng PE chống trầy xước.',
      machine: 'Thiết bị đo quang phổ Niton XL2',
      standard: '100% sản phẩm đạt chuẩn ISO 9001',
    },
  ];

  return (
    <section id="nha-xuong" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-semibold text-sky-600 uppercase tracking-widest">
            Khối I · Năng lực sản xuất thực tế
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            Xưởng sản xuất trực tiếp – Công nghệ CNC tiên tiến
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Khách hàng được trực tiếp đến tham quan xưởng, tận mắt xem quy trình cắt chấn và thử vật liệu trước khi ký hợp đồng.
          </p>
        </div>

        {/* 4 Key Factory Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-600 mx-auto flex items-center justify-center mb-2 shadow-xs">
              <Factory className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Arimo']">
              3.500 m²
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase mt-0.5">
              Diện tích xưởng chính
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Phân khu tiêu chuẩn khép kín</div>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-indigo-600 mx-auto flex items-center justify-center mb-2 shadow-xs">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Arimo']">
              12 Máy CNC
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase mt-0.5">
              Hệ thống máy Amada
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Laser sợi quang & chấn thủy lực</div>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-emerald-600 mx-auto flex items-center justify-center mb-2 shadow-xs">
              <Gauge className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Arimo']">
              200 Bộ/Tháng
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase mt-0.5">
              Công suất xuất xưởng
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Giao hàng đúng hẹn 100%</div>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-amber-600 mx-auto flex items-center justify-center mb-2 shadow-xs">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Arimo']">
              5 Bước QC
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase mt-0.5">
              Kiểm định nghiêm ngặt
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Dấu mộc chứng nhận từng bộ</div>
          </div>

        </div>

        {/* Interactive Workshop Tour & Zone Explorer */}
        <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12">
          
          {/* Visual Interactive Tour Area */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Tour Ảo Dây Chuyền Sản Xuất
                </span>
              </div>
              <span className="text-xs text-sky-400 font-mono">
                KHU VỰC 0{activeZone + 1}/04
              </span>
            </div>

            {/* Vector Machine Simulation Canvas */}
            <div className="my-6 py-6 w-full aspect-[16/9] bg-slate-800/80 rounded-xl border border-slate-700/80 p-4 flex items-center justify-center relative overflow-hidden">
              
              {/* Laser CNC cutting machine vector graphics */}
              <svg viewBox="0 0 400 220" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
                {/* Factory floor grid */}
                <line x1="20" y1="180" x2="380" y2="180" stroke="#334155" strokeWidth="2" />
                <line x1="40" y1="180" x2="10" y2="215" stroke="#1E293B" strokeWidth="1" />
                <line x1="360" y1="180" x2="390" y2="215" stroke="#1E293B" strokeWidth="1" />

                {/* Machine Base */}
                <rect x="50" y="70" width="300" height="110" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                <rect x="70" y="85" width="260" height="85" rx="4" fill="#0F172A" />

                {/* Stainless steel sheet on bed */}
                <rect x="85" y="110" width="230" height="45" rx="2" fill="#94A3B8" stroke="#CBD5E1" strokeWidth="1" />
                
                {/* CNC Gantry Beam */}
                <rect x="180" y="75" width="40" height="95" rx="3" fill="#334155" stroke="#38BDF8" strokeWidth="1" />
                
                {/* Laser Head */}
                <polygon points="195,110 205,110 202,125 198,125" fill="#38BDF8" />
                
                {/* Active Laser Spark Effect */}
                <circle cx="200" cy="128" r="3" fill="#FDE047" />
                <line x1="200" y1="128" x2="188" y2="140" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="200" y1="128" x2="212" y2="138" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="200" y1="128" x2="195" y2="145" stroke="#FDE047" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="200" y1="128" x2="208" y2="146" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" />

                {/* Laser cutting line */}
                <line x1="120" y1="128" x2="200" y2="128" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3,2" />

                {/* Status text */}
                <text x="200" y="195" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="bold">
                  AMADA FIBER LASER - CẮT KHUNG MODULE TỦ BẾP INOX 304
                </text>
              </svg>

              {/* Simulation status tag */}
              <div className="absolute bottom-3 left-3 bg-slate-900/90 text-[10px] text-sky-300 font-mono px-2 py-1 rounded border border-slate-700">
                STATUS: CNC ACTIVE · CẮT PHÔI 0.8MM
              </div>
            </div>

            {/* Bottom Playback Mode */}
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Địa chỉ xưởng: Lô 08, KCN Quốc Oai, Hà Nội (Cách TT 15km)</span>
              <span className="text-emerald-400 font-semibold">Đón tiếp 8h00 - 18h00 tất cả các ngày</span>
            </div>

          </div>

          {/* Right Controller: 4 Stages & Booking Action */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-950 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              <div className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
                4 Phân khu sản xuất chính
              </div>

              {/* Zone Selector Buttons */}
              <div className="space-y-3">
                {zones.map((z, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveZone(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      activeZone === idx
                        ? 'bg-slate-900 border-sky-500 shadow-xs'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">
                        {idx + 1}. {z.title}
                      </span>
                      {activeZone === idx && (
                        <span className="text-[10px] font-bold text-sky-400 bg-sky-950 px-1.5 py-0.5 rounded">
                          Đang xem
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
                      {z.desc}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1.5 border-t border-slate-800">
                      <span>Thiết bị: {z.machine}</span>
                      <span className="text-sky-300 font-medium">{z.standard}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wireframe Button: "Đặt lịch tham quan xưởng" */}
            <div className="pt-6 mt-6 border-t border-slate-800">
              <AppButton
                variant="animated-border"
                colorScheme="blue"
                size="md"
                rounded="xl"
                fullWidth
                onClick={onBookTour}
                icon={<Calendar className="w-4 h-4 text-sky-400" />}
                className="uppercase tracking-wider font-extrabold"
              >
                Đặt lịch tham quan xưởng trực tiếp
              </AppButton>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                *Xe đưa đón miễn phí tại showroom hoặc tận nhà cho khách đặt trước.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
