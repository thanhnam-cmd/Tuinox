import React, { useState } from 'react';
import { ShieldCheck, FileCheck, FlaskConical, QrCode, Magnet, Check, AlertTriangle, Search } from 'lucide-react';

export const MaterialProof: React.FC = () => {
  const [activeTest, setActiveTest] = useState<'chemical' | 'magnet'>('chemical');
  const [batchCodeInput, setBatchCodeInput] = useState('');
  const [batchResult, setBatchResult] = useState<{
    found: boolean;
    batchNo?: string;
    steelSource?: string;
    date?: string;
    qcInspector?: string;
    niContent?: string;
    crContent?: string;
  } | null>(null);

  const handleLookupBatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!batchCodeInput.trim()) return;

    // Simulate batch lookup
    setBatchResult({
      found: true,
      batchNo: batchCodeInput.toUpperCase(),
      steelSource: 'Posco Hàn Quốc (Cuộn cán nguội SUS304 2B)',
      date: '18/08/2026',
      qcInspector: 'KTV. Hoàng Minh Tuấn (QC Lead)',
      niContent: '8.18% (Đạt chuẩn ≥ 8.05%)',
      crContent: '18.34% (Đạt chuẩn ≥ 18.00%)',
    });
  };

  return (
    <section id="minh-bach-chat-lieu" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-semibold text-sky-600 uppercase tracking-widest">
            Khối H · Trực diện nỗi đau thị trường
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            Minh bạch chất liệu – Nói không với inox 201 pha tạp
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Chúng tôi công khai 100% hồ sơ vật liệu và kiểm tra trực tiếp bằng hóa chất ngay trước mặt gia chủ khi bàn giao.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Pillar 1: Chứng nhận CO/CQ Quatest */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-['Arimo'] uppercase mb-2">
                Chứng nhận CO/CQ & Quatest 1
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Giấy chứng nhận nguồn gốc xuất xưởng Posco và phiếu kết quả thử nghiệm số 26/TN/VLXD do Trung tâm Kỹ thuật Tiêu chuẩn Đo lường Chất lượng cấp.
              </p>

              {/* Certificate Image */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=gi%E1%BA%A5y%20ch%E1%BB%A9ng%20nh%E1%BA%ADn%20CO%20CQ%20ch%E1%BA%A5t%20li%E1%BB%87u%20inox%20304%2C%20phi%E1%BA%BFu%20th%E1%BB%AD%20nghi%E1%BB%87m%20Quatest%201%2C%20ch%E1%BB%A9ng%20nh%E1%BA%ADn%20ngu%E1%BB%93n%20g%E1%BB%91c%20xu%E1%BA%A5t%20x%C6%B0%E1%BB%9Fng%20Posco%2C%20th%C3%B4ng%20s%E1%BB%91%20h%E1%BA%A1m%20l%C6%B0%E1%BB%9Dng%20Ni%20Cr%2C%20d%E1%BA%A5u%20m%E1%BB%99c%20%C4%91%E1%BB%8F%20ki%E1%BB%83m%20%C4%91%E1%BB%8Bnh%2C%20ch%E1%BB%AF%20k%C3%BD%20gi%C3%A1m%20%C4%91%E1%BB%8Bnh%20vi%C3%AAn&image_size=landscape_4_3"
                  alt="Chứng nhận CO/CQ và Phiếu thử nghiệm Quatest 1 vật liệu Inox 304 Posco"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Cung cấp bản cứng kèm dấu mộc trong hợp đồng</span>
            </div>
          </div>

          {/* Pillar 2: Test 304 Trực tiếp Simulator */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-['Arimo'] uppercase mb-2">
                Test 304 trực tiếp tại xưởng & tại nhà
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Mô phỏng 2 bài test thực tế khách hàng sẽ được kiểm chứng trực tiếp khi nghiệm thu công trình.
              </p>

              {/* Interactive test switcher */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg mb-4 text-xs font-semibold">
                <button
                  onClick={() => setActiveTest('chemical')}
                  className={`flex-1 py-1.5 rounded-md transition-colors cursor-pointer ${
                    activeTest === 'chemical' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Thuốc thử quang phổ
                </button>
                <button
                  onClick={() => setActiveTest('magnet')}
                  className={`flex-1 py-1.5 rounded-md transition-colors cursor-pointer ${
                    activeTest === 'magnet' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Nam châm vĩnh cửu
                </button>
              </div>

              {/* Chemical Test Preview */}
              {activeTest === 'chemical' && (
                <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/70 space-y-3">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ki%E1%BB%83m%20tra%20ch%E1%BA%A5t%20li%E1%BB%87u%20inox%20b%E1%BA%B1ng%20thu%E1%BB%91c%20th%E1%BB%AD%20quang%20ph%E1%BB%95%20axit%2C%202%20m%E1%BA%ABu%20in%20so%20s%C3%A1nh%20trong%20t%E1%BB%ABng%20%C4%91%C3%A9p%2C%20m%E1%BA%ABu%20tr%C3%A1i%20inox%20304%20chu%E1%BA%A9n%20gi%E1%BB%AF%20nguy%C3%AAn%20m%C3%A0u%2C%20m%E1%BA%ABu%20ph%E1%BA%A3i%20inox%20201%20pha%20t%E1%BA%A1p%20b%E1%BB%8B%20h%C3%B3a%20%C4%91%E1%BB%8F%20g%E1%BA%A1ch%2C%20l%E1%BB%9B%20thu%E1%BB%91c%20th%E1%BB%AD%2C%20k%E1%BB%B9%20thu%E1%BA%ADt%20vi%C3%AAn%20test%20ch%E1%BA%A5t%20li%E1%BB%87u&image_size=landscape_4_3"
                      alt="So sánh test thuốc thử axit: Inox 304 chuẩn giữ màu xám trắng, Inox 201 pha tạp hóa đỏ gạch ngay lập tức"
                      className="w-full h-44 object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                    <div className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">Inox 304: Giữ màu sau 3 phút</div>
                    <div className="font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded">Inox 201: Hóa đỏ sau 15 giây</div>
                  </div>
                  <p className="text-[11px] text-slate-500 text-center">
                    *Kỹ thuật viên mang sẵn lọ thuốc thử axit kiểm tra mọi khoang tủ khi bàn giao.
                  </p>
                </div>
              )}

              {/* Magnet Test Preview */}
              {activeTest === 'magnet' && (
                <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/70 space-y-3">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ki%E1%BB%83m%20tra%20inox%20b%E1%BA%B1ng%20nam%20ch%C3%A2m%20v%C4%A9nh%20c%E1%BB%ADu%2C%20so%20s%C3%A1nh%202%20m%E1%BA%ABu%2C%20m%E1%BA%ABu%20tr%C3%A1i%20nam%20ch%C3%A2m%20kh%C3%B4ng%20h%C3%BAt%20inox%20304%2C%20m%E1%BA%ABu%20ph%E1%BA%A3i%20nam%20ch%C3%A2m%20h%C3%BAt%20ch%E1%BA%B7t%20m%E1%BA%A1nh%20m%E1%BA%BD%20v%C3%A0o%20in%20201%20th%C3%A9p%20m%E1%BA%A1%2C%20nam%20ch%C3%A2m%20neodimium%2C%20ch%E1%BB%A9ng%20minh%20ch%E1%BA%A5t%20li%E1%BB%87u%20th%E1%BA%A1t&image_size=landscape_4_3"
                      alt="So sánh test nam châm: Inox 304 chuẩn không hút nam châm, Inox 201 pha tạp bị nam châm hít chặt mạnh"
                      className="w-full h-44 object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                    <div className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">Inox 304: Không hút nam châm</div>
                    <div className="font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded">Inox 201: Nam châm hít chặt</div>
                  </div>
                  <p className="text-[11px] text-slate-500 text-center">
                    *Nam châm Neodimium lực hút mạnh được trang bị cho khách hàng tự tay test.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Nếu phát hiện pha Inox 201: Đền bù 300%</span>
            </div>
          </div>

          {/* Pillar 3: Tem khắc mã lô laser QR */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-['Arimo'] uppercase mb-2">
                Tem khắc mã lô laser QR truy xuất
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Từng module thùng tủ xuất xưởng đều được khắc laser mã QR định danh duy nhất để tra cứu nhật ký sản xuất và bảo hành điện tử.
              </p>

              {/* Interactive QR Lookup */}
              <form onSubmit={handleLookupBatch} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={batchCodeInput}
                    onChange={(e) => setBatchCodeInput(e.target.value)}
                    placeholder="Nhập mã lô (thử: INX-882)"
                    className="flex-1 text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Tra cứu</span>
                  </button>
                </div>
              </form>

              {/* Lookup Result Box */}
              {batchResult && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1.5 animate-in fade-in">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Mã lô: {batchResult.batchNo} - HỢP LỆ</span>
                  </div>
                  <div className="text-slate-600 text-[11px]">
                    <div><strong>Nguồn thép:</strong> {batchResult.steelSource}</div>
                    <div><strong>Hàm lượng Ni:</strong> {batchResult.niContent}</div>
                    <div><strong>Ngày xuất xưởng:</strong> {batchResult.date}</div>
                    <div><strong>Kiểm định viên:</strong> {batchResult.qcInspector}</div>
                  </div>
                </div>
              )}

              {!batchResult && (
                <div className="mt-3 p-3 rounded-xl border border-dashed border-slate-200 text-center text-xs text-slate-400">
                  Gợi ý: Nhập mã <span className="font-mono text-sky-600 font-bold">INX-882</span> hoặc bấm nút Tra cứu để xem nhật ký xuất xưởng mẫu.
                </div>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Lưu vết dữ liệu sản phẩm trong 20 năm</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
