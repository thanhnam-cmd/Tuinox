import React, { useState, useRef, useEffect } from 'react';
import { Phone, X, Menu, ArrowRight, ShieldCheck, Sparkles, Award, FileText, Factory, Home } from 'lucide-react';
import { AppButton } from './AppButton';

interface HeaderProps {
  onOpenQuote: () => void;
  onSearchSelect?: (targetId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onSearchSelect }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Giữ nguyên menu cũ - KHÔNG đổi URL và href
  const navLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Thùng tủ', href: '#danh-muc-san-pham' },
    { label: 'Cánh tủ', href: '#danh-muc-san-pham' },
    { label: 'Giải pháp', href: '#giai-phap-mau' },
    { label: 'Phụ kiện', href: '#danh-muc-san-pham' },
    { label: 'Nhà xưởng', href: '#nha-xuong' },
    { label: 'Dịch vụ', href: '#quy-trinh' },
    { label: 'Blog', href: '#blog' },
  ];

  // Quick filter tags below menu
  const quickTags = [
    { label: 'Mẫu Cánh Kính Slim', target: 'giai-phap-mau' },
    { label: 'Thùng Inox 304 Posco', target: 'danh-muc-san-pham' },
    { label: 'Bảng So Sánh 304', target: 'so-sanh-giai-phap' },
    { label: 'Test Axit & Nam Châm', target: 'minh-bach-chat-lieu' },
    { label: 'Dự Toán Chi Phí', target: 'bao-gia-form' },
    { label: 'Tour Nhà Xưởng 3.500m²', target: 'nha-xuong' },
  ];

  const searchSuggestions = [
    { label: 'Mẫu Cánh Kính Khung Slim Titan', category: 'Giải pháp', target: 'giai-phap-mau' },
    { label: 'Thùng tủ Inox 304 Posco dập CNC', category: 'Vật liệu', target: 'danh-muc-san-pham' },
    { label: 'Bảng so sánh Inox 304 vs Inox 201', category: 'So sánh', target: 'so-sanh-giai-phap' },
    { label: 'Test thuốc thử axit & nam châm', category: 'Minh bạch', target: 'minh-bach-chat-lieu' },
    { label: 'Dự toán chi phí theo mét dài', category: 'Báo giá', target: 'bao-gia-form' },
    { label: 'Tour tham quan nhà xưởng 3.500m²', category: 'Nhà xưởng', target: 'nha-xuong' },
  ];

  const filteredSuggestions = searchSuggestions.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectSuggestion = (targetId: string) => {
    setIsSearchFocused(false);
    setSearchQuery('');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E3E7ED] transition-all duration-200"
      style={{ boxShadow: '0 1px 2px rgba(16,39,68,0.04)' }}
    >
      {/* ROW 1: FULL NAVIGATION BAR - Premium Minimalist Luxury */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px] gap-4">

          {/* LOGO — Giữ nguyên đường dẫn logo user đã chọn */}
          <a href="#hero" className="flex items-center shrink-0 group py-1" title="FIND TUBEPINOX.VN - Trang chủ">
            <img
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Corporate%20logo%20FIND%20TUBEPINOX.VN%2C%20word%20FIND%20in%20bold%20navy%20blue%20uppercase%20with%20letter%20F%20containing%20red%20accent%20inner%20shape%2C%20registered%20trademark%20R%20in%20red%20circle%20top%20right.%20Below%20blue%20underline%20bar%20and%20two%20small%20blue%20squares%20and%20text%20TUBEPINOX.VN%20with%20letters%20T%20and%20I%20in%20red%2C%20remaining%20U%20B%20E%20P%20N%20O%20X%20VN%20in%20navy%20blue.%20Clean%20flat%20logo%2C%20white%20background%2C%20professional%20industrial%20brand&image_size=landscape_16_9"
              onError={(e) => {
                e.currentTarget.src = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Logo%20text%20FIND%20navy%20blue%20red%20TUBEPINOX&image_size=square_hd';
              }}
              alt="FIND TUBEPINOX.VN Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          {/* MENU — Navy, font 600, underline champagne hover */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[14px] font-semibold text-[#102744] tracking-tight font-['Be_Vietnam_Pro',sans-serif]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative whitespace-nowrap shrink-0 py-2 transition-colors duration-200 group hover:text-[#C69A55]"
              >
                {link.label}
                {/* Hover underline Champagne mảnh */}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 rounded-full transition-all duration-300 ease-out bg-[#C69A55] group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS — Hotline + CTA Navy solid */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href="tel:0975268168"
              className="hidden sm:flex items-center gap-2 text-[13px] font-semibold text-[#102744] hover:text-[#C69A55] px-0 py-2 transition-colors whitespace-nowrap font-['Be_Vietnam_Pro',sans-serif]"
            >
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F7F5F0] border border-[#E3E7ED]">
                <Phone className="w-4 h-4" style={{ color: '#C69A55' }} />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] uppercase tracking-wide text-[#6A7A90] font-medium">Hotline</span>
                <span className="font-bold text-[15px]">0975.268.168</span>
              </div>
            </a>

            {/* Nút CTA Báo Giá — Nền Navy #102744, chữ trắng, bo 10px, hover Navy sáng hơn + nâng 2px */}
            <button
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center gap-2 text-white font-semibold tracking-wide rounded-[10px] px-5 py-3 text-[14px] h-[50px] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-['Be_Vietnam_Pro',sans-serif] group overflow-hidden whitespace-nowrap"
              style={{ backgroundColor: '#102744', boxShadow: '0 6px 20px rgba(16,39,68,0.18)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1B3A65'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#102744'; }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                BÁO GIÁ NGAY
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#102744] hover:bg-[#F7F5F0] transition-colors lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer — Đổi palette Navy/Champagne/Ngà */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E3E7ED] bg-white px-4 py-6 shadow-xl animate-in fade-in duration-150">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 text-[15px] font-semibold text-[#102744] hover:bg-[#F7F5F0] hover:text-[#C69A55] rounded-lg transition-colors font-['Be_Vietnam_Pro',sans-serif]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-[#E3E7ED] flex flex-col gap-3">
              <a
                href="tel:0975268168"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-[10px] bg-[#F7F5F0] text-[14px] font-semibold text-[#102744] border border-[#E3E7ED]"
              >
                <Phone className="w-4 h-4" style={{ color: '#C69A55' }} />
                <span>Hotline: 0975.268.168</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="inline-flex items-center justify-center gap-2 w-full text-white font-semibold tracking-wide rounded-[10px] px-5 py-3 text-[14px] h-[50px]"
                style={{ backgroundColor: '#102744', boxShadow: '0 6px 20px rgba(16,39,68,0.18)' }}
              >
                NHẬN BẢO GIÁ CHI TIẾT
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
