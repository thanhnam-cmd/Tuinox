import React from 'react';
import { Shield, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { AppButton } from './AppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white border-t-2 border-blue-900/60 pt-16 pb-24 lg:pb-16 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Official FIND Logo & Company Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <a href="#hero" className="inline-block p-1.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md hover:scale-105 transition-transform">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Corporate%20logo%20FIND%20TUBEPINOX.VN%2C%20word%20FIND%20in%20bold%20navy%20blue%20uppercase%20with%20letter%20F%20containing%20red%20accent%20inner%20shape%2C%20registered%20trademark%20R%20in%20red%20circle%20top%20right.%20Below%20blue%20underline%20bar%20and%20two%20small%20blue%20squares%20and%20text%20TUBEPINOX.VN%20with%20letters%20T%20and%20I%20in%20red%2C%20remaining%20U%20B%20E%20P%20N%20O%20X%20VN%20in%20navy%20blue.%20Clean%20flat%20logo%2C%20white%20background%2C%20professional%20industrial%20brand&image_size=landscape_16_9"
                  onError={(e) => {
                    e.currentTarget.src = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Logo%20text%20FIND%20navy%20blue%20red%20TUBEPINOX&image_size=square_hd';
                  }}
                  alt="FIND TUBEPINOX.VN Logo"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Nhà máy sản xuất tủ bếp Inox 304 chuẩn thương hiệu <strong>FIND (TUBEPINOX.VN)</strong>. Công nghệ chấn dập CNC module rời Posco cao cấp, cam kết không mối mọt, kháng nước 100%, bảo hành 20 năm.
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <div><strong>Website:</strong> TUBEPINOX.VN</div>
              <div><strong>MST:</strong> 0108929304 - Sở KH&ĐT Hà Nội cấp</div>
              <div><strong>Chứng chỉ:</strong> ISO 9001:2015 & Quatest 1</div>
            </div>
          </div>

          {/* Col 2: Hệ thống Xưởng & Showroom */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-rose-500 font-['Arimo']">
              Hệ thống xưởng sản xuất
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Xưởng chính Miền Bắc:</strong>
                  Lô 08, KCN Quốc Oai, H. Quốc Oai, Hà Nội (3.500m²)
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Chi nhánh Miền Nam:</strong>
                  Số 186 QL1A, P. An Phú Đông, Quận 12, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Showroom trưng bày mẫu:</strong>
                  Số 45 Nguyễn Chánh, P. Trung Hòa, Cầu Giấy, Hà Nội
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Liên kết nhanh & Chính sách */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-blue-400 font-['Arimo']">
              Chính sách & Pháp lý
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a href="#quy-trinh" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-rose-500" />
                  <span>Chính sách bảo hành kết cấu 20 năm</span>
                </a>
              </li>
              <li>
                <a href="#minh-bach-chat-lieu" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-rose-500" />
                  <span>Cam kết đền gấp 3 nếu sai Inox 304</span>
                </a>
              </li>
              <li>
                <a href="#quy-trinh" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-rose-500" />
                  <span>Quy trình đo đạc khảo sát 3D miễn phí</span>
                </a>
              </li>
              <li>
                <a href="#bao-gia-form" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-rose-500" />
                  <span>Chính sách thanh toán theo tiến độ nghiệm thu</span>
                </a>
              </li>
              <li>
                <a href="#nha-xuong" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-rose-500" />
                  <span>Đăng ký xe đưa đón tham quan xưởng</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Hỗ trợ khách hàng & CTA */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white font-['Arimo']">
              Hỗ trợ khách hàng 24/7
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 animate-bounce" />
                <span>Hotline xưởng: <strong>0975.268.168</strong> (Zalo 24/7)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Email: contact@tubepinox.vn</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Giờ làm việc: 8h00 – 19h00 (Kể cả T7 & CN)</span>
              </div>
            </div>

            <div className="pt-2">
              <AppButton
                variant="shine-sweep"
                colorScheme="red"
                size="sm"
                rounded="xl"
                fullWidth
                onClick={() => {
                  const el = document.getElementById('bao-gia-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="uppercase tracking-wider font-extrabold"
              >
                Yêu cầu khảo sát tại nhà
              </AppButton>
            </div>
          </div>

        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 FIND TUBEPINOX.VN – Bản quyền thuộc về Xưởng Sản Xuất Tủ Bếp Inox 304 Chuẩn.
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-white transition-colors">Về đầu trang ↑</a>
            <span>·</span>
            <a href="#minh-bach-chat-lieu" className="hover:text-white transition-colors">Chứng nhận Quatest 1</a>
            <span>·</span>
            <a href="#so-sanh-giai-phap" className="hover:text-white transition-colors">Bảng so sánh 304</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
