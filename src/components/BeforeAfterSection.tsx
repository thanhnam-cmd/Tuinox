import React, { useState } from 'react';
import { Star, CheckCircle, Quote, Sparkles, MapPin, Play } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const projects = [
    {
      title: 'Cải tạo tủ bếp ẩm mốc tại Chung cư Vinhomes Smart City',
      location: 'Nam Từ Liêm, Hà Nội',
      problem: 'Tủ gỗ công nghiệp cũ bị ngấm nước từ đường ống chậu rửa làm mục đáy, bốc mùi ẩm mốc và xệ cánh sau 3 năm.',
      solution: 'Thay thế trọn bộ khung thùng Inox 304 nguyên tấm Posco dập CNC, cánh kính xám titan mờ viền nhôm Anode tràn viền.',
      timeSpent: 'Thi công chỉ 1 ngày duy nhất',
      customerName: 'Anh Vũ Đình Thắng',
      customerRole: 'Chủ căn hộ 2 phòng ngủ',
      quote: '"Thực sự ưng ý! Trước đây sợ tủ inox sẽ ồn và thô như quán ăn, nhưng khi lắp xong cánh kính nhìn sang hơn hẳn tủ gỗ, đóng mở êm ru không một tiếng động."',
    },
    {
      title: 'Thay thế tủ gỗ bị mối mọt tại Nhà phố Cầu Giấy',
      location: 'Cầu Giấy, Hà Nội',
      problem: 'Mối ăn rỗng toàn bộ khung xà tủ dưới, ốc bản lề rơi ra không thể bắt lại, gia đình phải dùng tạm dây buộc cánh.',
      solution: 'Lắp đặt thùng Inox 304 module độc lập chịu lực 120kg/khoang, cánh Acrylic trắng sứ noline sáng bóng.',
      timeSpent: 'Hoàn thiện sau 8 ngày chốt vẽ',
      customerName: 'Chị Mai Lan Phương',
      customerRole: 'Nội trợ gia đình 3 thế hệ',
      quote: '"Mùa nồm vừa rồi sàn nhà ướt sũng mà đáy tủ inox vẫn khô cong, lau chùi dầu mỡ chỉ mất 2 phút bằng khăn ẩm. Cảm ơn xưởng rất nhiều!"',
    },
  ];

  const currentProject = projects[selectedCase];

  return (
    <section id="cong-trinh" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-semibold text-sky-600 uppercase tracking-widest">
            Khối K · Thực tế kiểm chứng
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            Công trình trước & sau khi cải tạo
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Xem sự khác biệt hoàn toàn giữa tủ bếp gỗ công nghiệp xuống cấp và tủ Inox 304 chuẩn xưởng.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="p-1 bg-slate-100 rounded-xl inline-flex gap-1 text-xs font-semibold">
            {projects.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCase(idx)}
                className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  selectedCase === idx
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Công trình #{idx + 1}: {p.customerName} ({p.location.split(',')[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Before & After Comparison Splitter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Interactive Split Canvas Slider */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/10] bg-slate-100 select-none">
              
              {/* Background: "SAU KHI CẢI TẠO (INX 304 MỚI)" */}
              <div className="absolute inset-0 bg-slate-50 flex flex-col justify-between p-0">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=t%E1%BB%A7%20b%E1%BA%BFp%20inox%20304%20m%E1%BB%9Bi%20ho%C3%A0n%20thi%E1%BB%87n%2C%20c%C3%A1nh%20k%C3%ADnh%20slim%20x%C3%A1m%20titan%20vi%E1%BB%81n%20nh%C3%B4m%20anode%20sang%20tr%E1%BB%8Dng%2C%20m%E1%BA%B7t%20%C4%91%C3%A1%20countertop%20tr%E1%BA%AFng%20s%C3%A1ng%2C%20n%E1%BB%99i%20th%E1%BA%A5t%20b%E1%BA%BFp%20hi%E1%BB%87n%20%C4%91%E1%BA%A1i%20cao%20c%E1%BA%A5p%2C%20%C3%A1nh%20s%C3%A1ng%20%E1%BA%A9m%20%C3%A1p&image_size=landscape_16_9"
                  alt="Sau cải tạo: Tủ bếp Inox 304 cánh kính Slim sang trọng hoàn thiện mới"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 right-4 z-10 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  SAU: Inox 304 Sáng Bóng & Kháng Nước
                </div>
              </div>

              {/* Foreground: "TRƯỚC KHI CẢI TẠO (TỦ GỖ MỤC)" clipped by sliderPos */}
              <div
                className="absolute inset-0 overflow-hidden bg-amber-50/90 border-r-2 border-white shadow-xl"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="w-full h-full relative" style={{ width: '100%', minWidth: '400px' }}>
                  <img
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=t%E1%BB%A7%20b%E1%BA%BFp%20g%E1%BB%97%20c%C3%B4ng%20nghi%E1%BB%87p%20c%C5%A9%20xu%E1%BB%91ng%20c%E1%BA%A5p%20nghi%C3%AAm%20tr%E1%BB%8Dng%2C%20m%E1%BB%91i%20m%E1%BB%8Dn%20m%E1%BB%A5c%20n%C3%A1t%2C%20ng%E1%BA%A9m%20n%C6%B0%E1%BB%9Bc%20%E1%BA%A9m%20m%E1%BB%91c%20%C4%91en%2C%20c%C3%A1nh%20t%E1%BB%A7%20x%E1%BB%87%20b%E1%BB%8Ft%20b%E1%BA%A3n%20l%E1%BB%81%20bung%20v%C3%ADt%2C%20g%E1%BB%97%20tr%C6%B0%C6%A1ng%20n%E1%BB%97%20n%E1%BA%ADp%2C%20nh%C3%A0%20b%E1%BA%BFp%20b%E1%BB%8B%20h%E1%BB%8Fng&image_size=landscape_16_9"
                    alt="Trước cải tạo: Tủ bếp gỗ cũ mối mọt mục nát ngấm nước ẩm mốc xuống cấp"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-4 left-4 z-10 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    TRƯỚC: Tủ gỗ mục nát ngấm nước
                  </div>
                </div>
              </div>

              {/* Draggable Slider Control Bar */}
              <div
                className="absolute top-0 bottom-0 z-20 -translate-x-1/2 flex items-center justify-center cursor-ew-resize pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-slate-800 shadow-lg border-2 border-sky-500 flex items-center justify-center text-xs font-bold">
                  ↔
                </div>
              </div>

              {/* Real range input overlaid for accessibility and drag gesture */}
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Kéo thanh trượt để so sánh trước và sau cải tạo"
              />

            </div>

            {/* Hint text */}
            <div className="text-center text-xs text-slate-500 mt-2 font-medium">
              *Kéo thanh trượt sang trái hoặc phải để so sánh trực quan thực tế
            </div>
          </div>

          {/* Right: Project Narrative & Customer Review */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentProject.location}</span>
                <span>·</span>
                <span className="text-slate-400">{currentProject.timeSpent}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-['Arimo'] uppercase tracking-tight">
                {currentProject.title}
              </h3>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-900">
                  <strong>Vấn đề trước đây:</strong> {currentProject.problem}
                </div>
                <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-100 text-sky-900">
                  <strong>Phương án xưởng thực hiện:</strong> {currentProject.solution}
                </div>
              </div>
            </div>

            {/* Customer Testimonial Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 relative">
              <Quote className="w-8 h-8 text-slate-300 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                {currentProject.quote}
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                  {currentProject.customerName.charAt(currentProject.customerName.lastIndexOf(' ') + 1)}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>{currentProject.customerName}</span>
                    <CheckCircle className="w-3 h-3 text-sky-600" />
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {currentProject.customerRole}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
