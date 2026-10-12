import React, { useState } from 'react';
import { Sparkles, Sliders, CheckCircle2, RefreshCw, Zap, Play } from 'lucide-react';
import { AppButton, ButtonVariant, ButtonColorScheme, ButtonSize, ButtonRounded } from './AppButton';

export const ButtonShowcaseSection: React.FC = () => {
  const [activeColor, setActiveColor] = useState<ButtonColorScheme>('blue');
  const [activeSize, setActiveSize] = useState<ButtonSize>('md');
  const [activeRounded, setActiveRounded] = useState<ButtonRounded>('xl');
  const [lastClicked, setLastClicked] = useState<string>('Chưa bấm nút nào');

  const variantsList: { key: ButtonVariant; name: string; desc: string }[] = [
    { key: 'hover-fill', name: '01. Hover Fill', desc: 'Màu nền quét từ trái sang phải, chữ đổi màu mượt' },
    { key: 'scale-hover', name: '02. Scale Hover', desc: 'Hiệu ứng nảy đàn hồi (spring scale) khi rê chuột & bấm' },
    { key: 'neon-glow', name: '03. Neon Glow', desc: 'Viền phát sáng hào quang neon nhiều tầng trong bóng tối' },
    { key: 'gradient', name: '04. Gradient', desc: 'Dải màu chuyển sắc Xanh - Trắng - Đỏ di chuyển liên tục' },
    { key: 'magnetic', name: '05. Magnetic', desc: 'Hút theo tọa độ chuột khi di chuyển gần tâm nút' },
    { key: 'liquid', name: '06. Liquid Wave', desc: 'Sóng chất lỏng hữu cơ cuộn trào 360 độ bên trong' },
    { key: 'animated-border', name: '07. Animated Border', desc: 'Viền sáng xoay tròn theo góc conic 360 độ huyền ảo' },
    { key: 'shine-sweep', name: '08. Shine Sweep', desc: 'Tia sáng kim loại lướt chéo qua mặt nút sang trọng' },
    { key: 'ripple', name: '09. Ripple Click', desc: 'Sóng tròn lan tỏa từ đúng điểm ngón tay hoặc chuột chạm' },
    { key: '3d-press', name: '10. 3D Press', desc: 'Nút vật lý 3D bóng đổ dày, lún xuống chân thật khi ấn' },
    { key: 'arrow-slide', name: '11. Arrow Slide', desc: 'Mũi tên chỉ hướng trượt mượt mà khi hover' },
    { key: 'glassmorphism', name: '12. Glassmorphism', desc: 'Kính mờ phủ sương cao cấp với viền phản chiếu ánh sáng' },
  ];

  
};
