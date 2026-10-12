import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, PencilRuler, Truck, Award, Factory, Phone } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
  onFactoryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onFactoryClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const realSlides = [
    {
      id: 'slide-2',
      imagePath: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20L%20shaped%20kitchen%20cabinets%20with%20glossy%20grey%20titanium%20and%20white%20porcelain%20glass%20doors%2C%20stainless%20steel%20304%20construction%2C%20black%20countertop%2C%20LED%20strip%20lighting%20under%20cabinet%2C%20built%20in%20oven%20microwave%2C%20marble%20floor%2C%20Vietnamese%20real%20project%2C%20photorealistic%2C%20high%20quality&image_size=landscape_16_9',
      fallbackPath: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Stainless%20steel%20kitchen%20cabinet%20grey%20glass%20door%20modern&image_size=landscape_16_9',
      altText: 'Ảnh #2: Tủ bếp Inox 304 cánh kính Xám Titan & Trắng Sứ tràn viền',
    },
    {
      id: 'slide-3',
      imagePath: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Luxury%20U%20shaped%20kitchen%20with%20champagne%20beige%20glossy%20glass%20doors%2C%20stainless%20steel%20304%20body%2C%20Blum%20Aventos%20lift%20up%20mechanism%20doors%20open%2C%20pull%20out%20stainless%20steel%20pantry%20tall%20unit%20with%20wire%20baskets%20open%2C%20LED%20warm%20yellow%20under%20cabinet%20lighting%2C%20ceiling%20fan%2C%20Italian%20marble%20floor%2C%20real%20Vietnamese%20interior%2C%20photorealistic&image_size=landscape_16_9',
      fallbackPath: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Beige%20champagne%20kitchen%20inox%20cabinet%20Blum%20lift&image_size=landscape_16_9',
      altText: 'Ảnh #3: Tủ bếp Inox 304 cánh kính Champagne tay nâng Blum',
    },
    {
      id: 'slide-4',
      imagePath: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=4%20panel%20collage%20of%20Walnut%20wood%20grain%20kitchen%20cabinets%20L%20shaped%20with%20waterfall%20marble%20central%20kitchen%20island%20countertop%2C%20white%20upper%20cabinets%2C%20stainless%20steel%20built%20in%20refrigerator%2C%20wooden%20stools%2C%20herringbone%20wood%20floor%2C%20Vietnamese%20luxury%20interior%20design%2C%20warm%20lighting%2C%20photorealistic&image_size=landscape_16_9',
      fallbackPath: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Walnut%20wood%20kitchen%20island%20waterfall%20marble&image_size=landscape_16_9',
      altText: 'Ảnh #4: Tủ bếp Inox 304 vân gỗ Óc Chó kèm bàn đảo Waterfall',
    },
    {
      id: 'slide-5',
      imagePath: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=4%20panel%20grid%20collage%20of%20neoclassical%20royal%20luxury%20villa%20kitchen%20with%20dark%20walnut%20wood%20classic%20crown%20molding%20cabinets%2C%20white%20marble%20countertop%20central%20island%20with%20built%20in%20wine%20cooler%2C%20stainless%20steel%20refrigerator%2C%20arch%20doorway%2C%20coffered%20ceiling%20with%20cove%20LED%20lighting%2C%20Vietnamese%20luxury%20villa%2C%20photorealistic&image_size=landscape_16_9',
      fallbackPath: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Neoclassical%20luxury%20villa%20kitchen%20wood%20island&image_size=landscape_16_9',
      altText: 'Ảnh #5: Tủ bếp Biệt Thự Tân Cổ Điển Hoàng Gia khung Inox 304',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % realSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [realSlides.length]);

  const BENEFIT_4 = [
    { icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />, title: 'INOX 304\nchính hãng', desc: 'Cao cấp, bền bỉ\ntheo thời gian' },
    { icon: <PencilRuler className="w-5 h-5" strokeWidth={1.75} />, title: 'Thiết kế\ntheo yêu cầu', desc: '3D tận nhà\ntheo đo đạc' },
    { icon: <Truck className="w-5 h-5" strokeWidth={1.75} />, title: 'Vận chuyển\ntoàn quốc', desc: 'Giao hàng\ntận nơi miễn phí' },
    { icon: <Award className="w-5 h-5" strokeWidth={1.75} />, title: 'Bảo hành\n20 năm', desc: 'Cam kết trong\nhợp đồng' },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden select-none h-[580px] sm:h-[520px] lg:h-[540px] xl:h-[560px]"
      style={{ backgroundColor: '#09192D' }}
    >
      {/* ẢNH SLIDER NỀN — chiều cao bị khóa theo section, không bị nội dung kéo dài */}
      <div className="absolute inset-0">
        {realSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              activeSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.imagePath}
              onError={(e) => { e.currentTarget.src = slide.fallbackPath; }}
              alt={slide.altText}
              className="w-full h-full object-cover object-right lg:object-[70%_center]"
              loading="eager"
              decoding="async"
            />
          </div>
        ))}

        <div
          className="absolute inset-0 z-20"
          style={{
            background:
              'linear-gradient(90deg, rgba(9,25,45,0.96) 0%, rgba(9,25,45,0.88) 22%, rgba(9,25,45,0.70) 42%, rgba(9,25,45,0.35) 68%, rgba(9,25,45,0.12) 86%, rgba(9,25,45,0.04) 100%)',
          }}
        />
        <div
          className="absolute left-0 right-0 bottom-0 z-20 pointer-events-none"
          style={{ height: '72px', background: 'linear-gradient(to bottom, rgba(247,245,240,0) 0%, rgba(247,245,240,0.55) 100%)' }}
        />
      </div>

      {/* NỘI DUNG CHÍNH — tiêu đề + CTA, không gồm 4 lợi ích (để không đẩy chiều cao slide) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full pt-4 sm:pt-5 lg:pt-6 pb-[168px] sm:pb-[176px]">
          <div className="lg:col-span-6 xl:col-span-5 text-white flex flex-col justify-start lg:justify-center space-y-3 sm:space-y-4 min-h-0">
            <div className="space-y-1 sm:space-y-1.5 max-w-[560px]">
              <h1
                className="hero-cinematic-line font-['Be_Vietnam_Pro',sans-serif] font-bold text-white"
                style={{
                  fontSize: 'clamp(20px, 2.6vw, 34px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  animationDelay: '0.3s',
                }}
              >
                TỦ BẾP INOX 304 CHUẨN
              </h1>

              <h1
                className="hero-cinematic-line font-['Be_Vietnam_Pro',sans-serif]"
                style={{
                  color: '#C69A55',
                  fontSize: 'clamp(26px, 3.8vw, 48px)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  textShadow: '0 6px 24px rgba(9,25,45,0.5)',
                  animationDelay: '0.55s',
                }}
              >
                KHÔNG MỐI MỌT
              </h1>

              <h1
                className="hero-cinematic-line font-['Be_Vietnam_Pro',sans-serif] font-bold text-white"
                style={{
                  fontSize: 'clamp(20px, 2.6vw, 34px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  animationDelay: '0.8s',
                }}
              >
                KHÔNG NGẤM NƯỚC
              </h1>

              <div
                className="flex items-center gap-3 pt-0.5 hero-cinematic-line"
                style={{ animationDelay: '1.05s' }}
              >
                <span className="w-10 h-[2px] shrink-0" style={{ backgroundColor: '#C69A55' }} />
                <span
                  className="font-['Be_Vietnam_Pro',sans-serif] font-semibold"
                  style={{
                    color: '#C69A55',
                    fontSize: 'clamp(15px, 1.7vw, 20px)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Bền Bỉ 20 Năm
                </span>
              </div>
            </div>

            <div
              className="hero-cinematic-line space-y-2.5"
              style={{ animationDelay: '1.55s' }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onQuoteClick}
                  className="group inline-flex items-center justify-center gap-2 text-white font-semibold rounded-[10px] px-5 sm:px-6 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-['Be_Vietnam_Pro',sans-serif] whitespace-nowrap overflow-hidden"
                  style={{
                    backgroundColor: '#102744',
                    height: '44px',
                    fontSize: '14px',
                    boxShadow: '0 8px 22px rgba(16,39,68,0.32)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1B3A65'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#102744'; }}
                >
                  <span className="inline-flex items-center gap-2">
                    NHẬN BÁO GIÁ MIỄN PHÍ
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>

                <button
                  onClick={onFactoryClick}
                  className="group inline-flex items-center justify-center gap-2 rounded-[10px] px-4 sm:px-5 font-semibold transition-all duration-250 hover:-translate-y-0.5 active:translate-y-0 font-['Be_Vietnam_Pro',sans-serif] whitespace-nowrap"
                  style={{
                    height: '44px',
                    fontSize: '14px',
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    border: '1.5px solid rgba(198,154,85,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.backgroundColor = 'white';
                    btn.style.color = '#102744';
                    btn.style.borderColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.backgroundColor = 'rgba(255,255,255,0.02)';
                    btn.style.color = 'white';
                    btn.style.borderColor = 'rgba(198,154,85,0.6)';
                  }}
                >
                  <Factory className="w-4 h-4 shrink-0" strokeWidth={2} />
                  XEM NHÀ XƯỞNG 3.500M²
                </button>
              </div>

              <a
                href="tel:0975268168"
                className="inline-flex items-center gap-2 rounded-[10px] px-4 font-semibold text-white/95 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-['Be_Vietnam_Pro',sans-serif] whitespace-nowrap"
                style={{
                  height: '38px',
                  fontSize: '13px',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
              >
                <Phone className="w-3.5 h-3.5" style={{ color: '#C69A55' }} />
                Gọi ngay: <span className="font-bold" style={{ color: '#C69A55' }}>0975.268.168</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" aria-hidden="true" />
        </div>
      </div>

      {/* 4 LỢI ÍCH — overlay đáy slide, không tham gia tính chiều cao */}
      <div className="absolute inset-x-0 bottom-[92px] sm:bottom-[100px] lg:bottom-[108px] z-30 hero-cinematic-line" style={{ animationDelay: '1.8s' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-4 lg:gap-x-8 w-full max-w-[980px]">
            {BENEFIT_4.map((b, i) => (
              <div key={i} className="flex items-center gap-3 min-w-0">
                <div
                  className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: 'transparent', border: '1.5px solid rgba(198,154,85,0.85)', color: '#C69A55' }}
                >
                  {b.icon}
                </div>
                <div className="min-w-0">
                  <div
                    className="text-[13px] sm:text-[14px] font-semibold font-['Be_Vietnam_Pro',sans-serif] leading-tight whitespace-pre-line"
                    style={{ color: '#C69A55' }}
                  >
                    {b.title}
                  </div>
                  <div
                    className="mt-0.5 text-[11px] sm:text-[12px] leading-snug font-['Be_Vietnam_Pro',sans-serif] whitespace-pre-line"
                    style={{ color: 'rgba(255,255,255,0.88)' }}
                  >
                    {b.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-9 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        {realSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Chuyển đến ảnh ${idx + 2}`}
            className="transition-all duration-300 rounded-full cursor-pointer"
            style={{
              width: activeSlide === idx ? '30px' : '7px',
              height: '7px',
              backgroundColor: activeSlide === idx ? '#C69A55' : 'rgba(255,255,255,0.3)',
              boxShadow: activeSlide === idx ? '0 4px 12px rgba(198,154,85,0.4)' : undefined,
            }}
          />
        ))}
      </div>

      <div
        className="hidden lg:flex absolute right-8 bottom-8 z-40 items-center gap-2 text-[12px] font-semibold tracking-widest"
        style={{ color: 'rgba(255,255,255,0.8)' }}
      >
        <span className="tabular-nums" style={{ color: '#C69A55' }}>0{activeSlide + 1}</span>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>—</span>
        <span className="tabular-nums">0{realSlides.length}</span>
      </div>
    </section>
  );
};
