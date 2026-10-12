import React, { useState, useMemo } from 'react';
import { Check, Filter, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SOLUTION_MODELS } from '../data/mockData';
import { SolutionModel } from '../types';
import { AppButton } from './AppButton';

interface SolutionConfiguratorProps {
  onSelectModel: (model: SolutionModel) => void;
  selectedModelId?: string;
}

export const SolutionConfigurator: React.FC<SolutionConfiguratorProps> = ({
  onSelectModel,
  selectedModelId,
}) => {
  const [styleFilter, setStyleFilter] = useState<string>('all');
  const [handleFilter, setHandleFilter] = useState<string>('all');
  const [layoutFilter, setLayoutFilter] = useState<string>('all');
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  const filteredModels = useMemo(() => {
    return SOLUTION_MODELS.filter((item) => {
      const matchStyle = styleFilter === 'all' || item.style === styleFilter;
      const matchHandle = handleFilter === 'all' || item.handleType === handleFilter;
      const matchLayout = layoutFilter === 'all' || item.kitchenLayout === layoutFilter;
      return matchStyle && matchHandle && matchLayout;
    });
  }, [styleFilter, handleFilter, layoutFilter]);

  // Render Floating SVG Door & Handle graphic representation for each model
  const renderDoorHandleSvg = (model: SolutionModel) => {
    const isHovered = activeHoverId === model.id;

    const getImagePrompt = () => {
      if (model.surfaceTexture === 'glass') {
        return `mẫu tủ bếp inox 304 cánh kính Slim ${model.colorName} viền nhôm anode tràn viền, tay nắm ${model.handleName}, thiết kế ${model.styleName} sang trọng, nội thất bếp hiện đại`;
      }
      if (model.surfaceTexture === 'acrylic') {
        return `mẫu tủ bếp inox 304 cánh acrylic bóng gương ${model.colorName}, tay nắm ${model.handleName}, phong cách ${model.styleName}, bếp nhà phố đẹp`;
      }
      return `mẫu tủ bếp inox 304 cánh vân gỗ ${model.colorName} sang trọng, tay nắm ${model.handleName}, ${model.styleName}, bố trí ${model.kitchenLayoutName}`;
    };

    const prompt = encodeURIComponent(getImagePrompt());
    const imgSrc = `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt}&image_size=landscape_4_3`;

    return (
      <img
        src={imgSrc}
        alt={`${model.name} - ${model.styleName} ${model.colorName}`}
        className={`w-full h-full select-none transition-all duration-500 object-cover rounded-lg ${
          isHovered ? 'scale-105' : 'animate-float-gentle'
        }`}
      />
    );
  };

  return (
    <section id="giai-phap-mau" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-block text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 uppercase tracking-widest px-3 py-1 rounded-full">
            Khối G · Giải pháp phối màu & tay nắm
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            Mẫu cánh tủ & tay nắm ghép sẵn
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Lựa chọn phong cách yêu thích, hệ thống sẽ tự động ghép mẫu cánh và tay nắm chuẩn xác vào bản dự toán chi phí.
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 mb-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-extrabold text-blue-900 uppercase tracking-wider">
            <Filter className="w-4 h-4 text-rose-600" />
            <span>Bộ lọc thiết kế thông minh FIND</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1.5">
                1. Phong cách
              </label>
              <select
                value={styleFilter}
                onChange={(e) => setStyleFilter(e.target.value)}
                className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="all">Tất cả phong cách</option>
                <option value="modern">Hiện đại (Modern)</option>
                <option value="minimalist">Tối giản (Minimalist)</option>
                <option value="classic">Tân cổ điển (Classic)</option>
                <option value="luxury">Sang trọng (Luxury)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1.5">
                2. Loại tay nắm
              </label>
              <select
                value={handleFilter}
                onChange={(e) => setHandleFilter(e.target.value)}
                className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="all">Tất cả kiểu tay nắm</option>
                <option value="gola-j">Tay vát âm Gola / Chữ J</option>
                <option value="edge-bevel">Cạnh vát 45° không tay nắm</option>
                <option value="bar-brushed">Tay chữ U phay xước</option>
                <option value="knob-minimal">Tay núm tròn tối giản</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1.5">
                3. Bố trí không gian
              </label>
              <select
                value={layoutFilter}
                onChange={(e) => setLayoutFilter(e.target.value)}
                className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="all">Tất cả kiểu bố trí</option>
                <option value="i-shape">Bếp chữ I (thẳng tường)</option>
                <option value="l-shape">Bếp chữ L (góc chữ L)</option>
                <option value="u-shape">Bếp chữ U (rộng rãi)</option>
                <option value="island">Bếp có bàn đảo (Island)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs text-slate-500 font-medium">
            <span>Hiển thị: <strong className="text-blue-700">{filteredModels.length}</strong> mẫu thiết kế phù hợp</span>
            {(styleFilter !== 'all' || handleFilter !== 'all' || layoutFilter !== 'all') && (
              <button
                onClick={() => {
                  setStyleFilter('all');
                  setHandleFilter('all');
                  setLayoutFilter('all');
                }}
                className="text-rose-600 hover:text-rose-800 font-bold cursor-pointer"
              >
                Xóa bộ lọc
              </button>
            )}
          </div>
        </div>

        {/* Floating Images & Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => {
            const isSelected = selectedModelId === model.id;

            return (
              <div
                key={model.id}
                onMouseEnter={() => setActiveHoverId(model.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className={`rounded-2xl border-2 transition-all duration-500 flex flex-col justify-between overflow-hidden bg-white hover:-translate-y-2 cursor-pointer ${
                  isSelected
                    ? 'border-blue-600 ring-4 ring-blue-500/20 shadow-2xl neon-box-blue'
                    : 'border-slate-100 shadow-md hover:shadow-2xl hover:border-blue-400'
                }`}
              >
                <div>
                  {/* Floating Image Canvas */}
                  <div className="h-56 bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-100 p-3 relative flex items-center justify-center perspective-1000">
                    {renderDoorHandleSvg(model)}

                    {model.popularBadge && (
                      <span className="absolute top-3 left-3 text-[10px] font-black text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full shadow-xs">
                        {model.popularBadge}
                      </span>
                    )}

                    <span className="absolute top-3 right-3 text-[11px] font-mono font-bold text-blue-900 bg-white/95 border border-slate-200 px-2.5 py-1 rounded shadow-xs">
                      {model.code}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-black text-slate-900 font-['Arimo'] uppercase tracking-tight">
                          {model.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5 font-medium">
                          <span className="text-blue-700">{model.styleName}</span>
                          <span>·</span>
                          <span>{model.kitchenLayoutName}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {model.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-500">
                      <div className="flex items-center justify-between">
                        <span>Gam màu:</span>
                        <div className="flex items-center gap-1.5 font-bold text-slate-800">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0 shadow-xs"
                            style={{ backgroundColor: model.colorHex }}
                          />
                          <span>{model.colorName}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tay nắm:</span>
                        <span className="font-bold text-slate-800">{model.handleName}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wireframe Button: "Chọn mẫu này" using AppButton */}
                <div className="p-5 pt-0">
                  <AppButton
                    variant={isSelected ? 'neon-glow' : 'shine-sweep'}
                    colorScheme={isSelected ? 'blue' : 'gradient-mix'}
                    size="sm"
                    rounded="xl"
                    fullWidth
                    onClick={() => onSelectModel(model)}
                    icon={isSelected ? <Check className="w-4 h-4" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    className="uppercase tracking-wider font-extrabold"
                  >
                    {isSelected ? 'Đã chọn mẫu này vào form' : 'Chọn mẫu này'}
                  </AppButton>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
