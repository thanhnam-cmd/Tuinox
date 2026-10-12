import React from 'react';
import { X, Clock, Calendar, CheckCircle2, Share2, BookOpen } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onConsultationRequest: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  onClose,
  onConsultationRequest,
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/60">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="text-sky-700 font-bold">{post.category}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Arimo'] uppercase tracking-tight">
              {post.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Đóng bài viết"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-slate-700 leading-relaxed">
          {/* Featured Blog Image Banner */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              src={
                post.category.includes('Công trình')
                  ? 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Real%20Vietnamese%20stainless%20steel%20304%20kitchen%20project%20photo%20before%20after%20installation%2C%20family%20kitchen%20completed%20with%20grey%20glass%20doors%20and%20LED%20lighting%2C%20photorealistic&image_size=landscape_16_9'
                  : post.category.includes('Tư vấn')
                  ? 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20Vietnamese%20kitchen%20consultant%20engineer%20showing%20stainless%20steel%20304%20material%20sample%20to%20customer%20couple%20in%20modern%20showroom%2C%20photorealistic&image_size=landscape_16_9'
                  : 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Housewife%20cleaning%20stainless%20steel%20kitchen%20cabinet%20surface%20with%20microfiber%20cloth%20in%20bright%20modern%20Vietnamese%20home%2C%20maintenance%20guide%2C%20photorealistic&image_size=landscape_16_9'
              }
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Key Takeaway Box */}
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-sky-950 font-medium">
            <strong className="text-sky-900 block mb-1">Tóm tắt cốt lõi:</strong>
            {post.keyTakeaway}
          </div>

          {/* Paragraphs */}
          {post.content.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}

          {/* Expert Advice Note */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Lời khuyên từ kỹ sư trưởng INOXIA 304</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              "Khi chọn tủ bếp, đừng chỉ nhìn vào vẻ hào nhoáng bề ngoài của cánh tủ. Hãy yêu cầu kiểm tra khoang thùng bên dưới, đặc biệt là khu vực chậu rửa. Một bộ tủ bếp dùng Inox 304 chuẩn sẽ bảo vệ khoản đầu tư của gia đình bạn suốt hơn 20 năm mà không phát sinh bất kỳ chi phí sửa chữa nào."
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500">
            Bạn cần tư vấn giải pháp trực tiếp cho căn bếp của mình?
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Đóng lại
            </button>
            <button
              onClick={() => {
                onClose();
                onConsultationRequest();
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              Nhận tư vấn vật liệu miễn phí
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
