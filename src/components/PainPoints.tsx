import React from 'react';
import { Bug, Droplets, Magnet, Wrench, ArrowDown } from 'lucide-react';
import { PAIN_POINTS } from '../data/mockData';
import { AppButton } from './AppButton';

export const PainPoints: React.FC = () => {
  const scrollToSolution = () => {
    const el = document.getElementById('so-sanh-giai-phap');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderDamageIllustration = (id: string) => {
    const baseClass = "w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover rounded-lg";

    switch (id) {
      case 'moi-mot':
        return (
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ng%C6%B0%E1%BB%9Di%20ph%E1%BB%A5%20n%E1%BB%AF%20kh%C3%B4ch%20h%C3%A0ng%20r%E1%BB%B1t%20r%C3%A8%20nh%C3%ACn%20t%E1%BB%A7%20b%E1%BA%BFp%20g%E1%BB%97%20b%E1%BB%8B%20m%E1%BB%91i%20m%E1%BB%8Dn%20r%E1%BB%97ng%20ru%E1%BB%9Bt%2C%20c%E1%BB%91t%20v%C3%A1n%20MDF%20b%E1%BB%8B%20m%E1%BB%91i%20%C4%83n%20h%E1%BB%8Fng%2C%20n%E1%BB%99i%20th%E1%BA%A5t%20xu%E1%BB%91ng%20c%E1%BA%A5p%2C%20di%E1%BB%85n%20b%C3%ACnh%20lo%20%E1%BA%AFng%2C%20nh%C3%A0%20b%E1%BA%BFp%20c%C5%A9&image_size=landscape_4_3"
            alt="Người dùng rụt rè lo lắng nhìn tủ bếp gỗ bị mối mọt rỗng ruột, cốt ván MDF hỏng nặng"
            className={baseClass}
          />
        );

      case 'ngam-nuoc':
        return (
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ch%E1%BB%A7%20nh%C3%A0%20r%E1%BB%B1t%20r%C3%A8%20nh%C3%ACn%20%C4%91%C3%A1y%20t%E1%BB%A7%20b%E1%BA%BFp%20ng%E1%BA%A9m%20n%C6%B0%E1%BB%9Bc%20tr%C6%B0%C6%A1ng%20n%E1%BB%97%2C%20m%E1%BB%91c%20%C4%91en%20loang%20l%E1%BB%95%2C%20n%E1%BB%93c%20d%E1%BB%8B%20ch%E1%BA%ADy%20t%E1%BB%AB%20%C4%91%C6%B0%E1%BB%9Dng%20%E1%BB%91ng%2C%20di%E1%BB%85n%20b%C3%ACnh%20th%E1%BA%A5t%20v%E1%BB%8Dng%2C%20b%E1%BA%BFp%20%E1%BA%A9m%20%C6%B0%E1%BB%9Bt%20m%C3%B9a%20n%E1%BB%97m&image_size=landscape_4_3"
            alt="Người dùng lo lắng nhìn tủ bếp ngấm nước trương nở, mốc đen loang lổ sau mùa nồm"
            className={baseClass}
          />
        );

      case 'chat-lieu-gia':
        return (
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=kh%C3%A1ch%20h%C3%A0ng%20r%E1%BB%B1t%20r%C3%A8%20nh%C3%ACn%20t%E1%BB%A7%20inox%20gi%E1%BA%A3%20201%20b%E1%BB%8B%20r%E1%BB%89%20%E1%BB%91%20loang%20l%E1%BB%95%2C%20v%E1%BA%BFt%20g%E1%BB%81%20r%E1%BB%89%20n%C3%A2u%20tr%C3%AAn%20b%C3%A9%20m%E1%BA%B7t%20inox%2C%20ch%E1%BA%A5t%20li%E1%BB%87u%20pha%20t%E1%BA%A1p%2C%20di%E1%BB%85n%20b%C3%ACnh%20b%C3%ACnh%20th%C6%B0%E1%BB%9Dng%20b%E1%BB%8B%20l%E1%BB%AFa%2C%20t%E1%BB%A7%20b%E1%BA%BFp%20xu%E1%BB%91ng%20c%E1%BA%A5p&image_size=landscape_4_3"
            alt="Người dùng bị lừa rụt rè nhìn tủ inox 201 pha tạp bị rỉ ố loang lổ, chất liệu giả"
            className={baseClass}
          />
        );

      case 'nhanh-xuong-cap':
        return (
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=gia%20%C4%91%C3%ACnh%20r%E1%BB%B1t%20r%C3%A8%20nh%C3%ACn%20c%C3%A1nh%20t%E1%BB%A7%20b%E1%BA%BFp%20x%E1%BB%87%20h%E1%BB%8Fng%20b%E1%BA%A3n%20l%E1%BB%81%20bung%20v%C3%ADt%20sau%202%20n%C4%83m%20s%E1%BB%AD%20d%E1%BB%A5ng%2C%20c%E1%BB%91t%20m%C3%B9n%20c%C6%B0a%20m%E1%BB%A5c%20n%C3%A1t%2C%20c%C3%A1nh%20cong%20kh%C3%B4ng%20%C4%91%C3%B3ng%20kh%C3%A9p%2C%20di%E1%BB%85n%20b%C3%ACnh%20kh%C3%B3%20ch%E1%BB%8Bu%2C%20n%E1%BB%99i%20th%E1%BA%A5t%20nhanh%20xu%E1%BB%91ng%20c%E1%BA%A5p&image_size=landscape_4_3"
            alt="Gia đình khó chịu nhìn cánh tủ bếp xệ, bản lề bung vít, nhanh xuống cấp sau 2 năm dùng"
            className={baseClass}
          />
        );

      default:
        return null;
    }
  };

  const getHeaderIcon = (id: string) => {
    switch (id) {
      case 'moi-mot':
        return <Bug className="w-5 h-5 text-amber-600" />;
      case 'ngam-nuoc':
        return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'chat-lieu-gia':
        return <Magnet className="w-5 h-5 text-rose-600" />;
      case 'nhanh-xuong-cap':
        return <Wrench className="w-5 h-5 text-slate-700" />;
      default:
        return null;
    }
  };

  return (
    <section id="noi-dau-khach-hang" className="py-20 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-block text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 uppercase tracking-widest px-3 py-1 rounded-full">
            Thực trạng phòng bếp Việt Nam
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            Tủ bếp của anh/chị đang gặp những chuyện này?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Hàng ngàn gia đình phải đập bỏ tủ bếp gỗ chỉ sau vài mùa nồm ẩm vì những tổn hại không thể phục hồi.
          </p>
        </div>

        {/* 4 Pain Point Cards with Hover Zoom (Hiệu ứng Hover Zoom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border-2 border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 transition-all duration-500 p-5 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                {/* Visual Illustration with Hover Zoom */}
                <div className="w-full h-36 rounded-xl overflow-hidden mb-4 border border-slate-100 bg-slate-50 flex items-center justify-center">
                  {renderDamageIllustration(card.id)}
                </div>

                {/* Card Title & Icon */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors">
                    {getHeaderIcon(card.id)}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 font-['Arimo'] uppercase tracking-tight group-hover:text-blue-700 transition-colors">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs font-bold text-slate-700 mb-2">
                  {card.summary}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.detail}
                </p>
              </div>

              {/* Verified Stat tag */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-rose-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                <span>{card.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Wireframe instruction: "Cuối khối: mũi tên 'Giải pháp là…' kéo xuống khối E." with 3D button */}
        <div className="mt-14 text-center">
          <AppButton
            variant="hover-fill"
            colorScheme="blue"
            size="lg"
            rounded="full"
            onClick={scrollToSolution}
            icon={<ArrowDown className="w-4 h-4 animate-bounce" />}
            className="shadow-md font-bold uppercase tracking-wider"
          >
            Giải pháp là gì? Xem bảng so sánh Inox 304 FIND
          </AppButton>
        </div>

      </div>
    </section>
  );
};
