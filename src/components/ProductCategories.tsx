import React from 'react';
import { ArrowRight, CheckCircle2, Box, Sparkles, Sliders } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/mockData';
import { ProductModule } from '../types';
import { AppButton } from './AppButton';

interface ProductCategoriesProps {
  onSelectCategory: (category: ProductModule) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onSelectCategory }) => {
  const renderCategoryVector = (type: string) => {
    switch (type) {
      case 'cabinet-box':
        return (
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=th%C3%B9ng%20t%E1%BB%A7%20b%E1%BA%BFp%20inox%20304%20nguy%C3%AAn%20t%E1%BA%A9m%20d%E1%BA%ADp%20ch%E1%BA%A5n%20CNC%20Posco%2C%20s%E1%BA%A3n%20ph%E1%BA%A9m%20module%20in%20t%E1%BB%A9a%20ri%C3%AAng%2C%20b%E1%BA%A7u%20bi%E1%BB%83n%20s%C3%A1ng%20b%C3%B3ng%2C%20ch%E1%BA%A5t%20li%E1%BB%87u%20cao%20c%E1%BA%A5p&image_size=landscape_4_3"
            alt="Thùng tủ bếp Inox 304 dập chấn CNC Posco"
            className="w-full h-full animate-float-gentle object-cover rounded-lg"
          />
        );

      case 'cabinet-doors':
        return (
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=c%C3%A1nh%20t%E1%BB%A7%20b%E1%BA%BFp%20k%C3%ADnh%20Slim%20Anode%20x%C3%A1m%20titan%2C%20c%C3%A1nh%20acrylic%20b%C3%B3ng%20g%C6%B0%C6%A1ng%20tr%E1%BA%AFng%20s%E1%BB%AD%2C%20c%C3%A1nh%20v%C3%A2n%20g%E1%BB%97%20sang%20tr%E1%BB%8Dng%2C%20b%E1%BB%99%20s%C6%B0u%20t%E1%BA%ADp%20m%E1%BA%ABu%20c%C3%A1nh%20t%E1%BB%A7&image_size=landscape_4_3"
            alt="Các mẫu cánh kính Slim, Acrylic bóng gương, Vân gỗ cao cấp"
            className="w-full h-full animate-float-3d object-cover rounded-lg"
          />
        );

      case 'cabinet-accessories':
        return (
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=m%E1%BA%B7t%20%C4%91%C3%A1%20countertop%20t%E1%BB%AB%20th%C3%A0nh%20quartz%20cao%20c%E1%BA%A5p%2C%20b%C3%A0n%20%C4%91%C3%A1%20b%E1%BA%BFp%20xanh%20d%C6%B0%C6%A1ng%20v%C3%A0n%20tr%E1%BA%AFng%2C%20ph%E1%BB%A7%20ki%E1%BB%87n%20t%E1%BB%A7%20b%E1%BA%BFp%20blum%20hafele&image_size=landscape_4_3"
            alt="Bàn đá countertop quartz cao cấp kèm phụ kiện Blum Hafele"
            className="w-full h-full animate-float-gentle object-cover rounded-lg"
          />
        );

      default:
        return null;
    }
  };

  return (
    <section id="danh-muc-san-pham" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 uppercase tracking-widest px-3 py-1 rounded-full">
            Hệ sinh thái sản phẩm đồng bộ FIND
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            3 Trụ cột tạo nên chiếc tủ bếp Inox 304 hoàn hảo
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Cấu tạo module độc lập, dễ dàng nâng cấp thay thế từng phần mà không ảnh hưởng kết cấu chung.
          </p>
        </div>

        {/* 3 Major Category Cards with Floating Images & Hover Zoom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                {/* Floating Image Vector Canvas */}
                <div className="w-full h-52 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3 relative overflow-hidden perspective-1000">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                    {renderCategoryVector(item.illustrationType)}
                  </div>
                  
                  <span className="absolute top-3 right-3 text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 font-['Arimo'] uppercase tracking-tight group-hover:text-blue-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {item.specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">{spec.label}:</span>
                        <span className="font-bold text-slate-800 text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Wireframe Button: "Xem chi tiết" with AppButton */}
              <div className="p-6 pt-0">
                <AppButton
                  variant="3d-press"
                  colorScheme="blue"
                  size="sm"
                  rounded="xl"
                  fullWidth
                  onClick={() => onSelectCategory(item)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="uppercase tracking-wider font-bold"
                >
                  Xem chi tiết thông số
                </AppButton>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
