import React from 'react';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { AppButton } from './AppButton';

interface BlogSectionProps {
  onReadPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onReadPost }) => {
  return (
    <section id="blog" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Luxury typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 uppercase tracking-widest px-3 py-1 rounded-full">
            Khối L · Kiến thức & Kinh nghiệm thực chiến
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-luxury">
            Cẩm nang làm tủ bếp inox 304 chuẩn FIND
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Trang bị kiến thức vật liệu và kinh nghiệm nghiệm thu để không bao giờ bị các đơn vị thiếu uy tín qua mặt.
          </p>
        </div>

        {/* 3 Articles Grid with Hover Zoom Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BLOG_POSTS.map((post, idx) => {
            const getBlogImage = () => {
              const prompts = [
                'mẫu công trình tủ bếp inox 304 thực tế tại nhà phố, nội thất bếp hiện đại, ảnh chụp thực tế công trình hoàn thiện đẹp, ánh sáng tự nhiên',
                'tư vấn chọn mua tủ bếp inox 304, chuyên gia nội thất đang giải thích về vật liệu inox, phòng showroom tủ bếp, tư vấn khách hàng',
                'bảo dưỡng tủ bếp inox 304, người phụ nữ lau chùi tủ bếp bằng khăn mềm, quy trình chăm sóc bảo quản tủ inox, sạch sẽ bóng bẩy'
              ];
              const prompt = encodeURIComponent(prompts[idx % prompts.length]);
              return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt}&image_size=landscape_4_3`;
            };
            const getAltText = () => {
              const alts = [
                'Hình ảnh công trình tủ bếp Inox 304 thực tế',
                'Hình ảnh tư vấn chọn tủ bếp Inox 304',
                'Hình ảnh bảo dưỡng và chăm sóc tủ bếp Inox 304'
              ];
              return alts[idx % alts.length];
            };
            return (
              <article
                key={post.id}
                onClick={() => onReadPost(post)}
                className="bg-white rounded-2xl border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Blog Post Thumbnail Image */}
                  <div className="w-full h-44 overflow-hidden border-b border-slate-100">
                    <img
                      src={getBlogImage()}
                      alt={getAltText()}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Meta info */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span className="text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded">{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-snug font-['Arimo'] uppercase">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Key takeaway */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-700 leading-normal">
                      <strong className="text-blue-900 block mb-0.5">Điểm then chốt:</strong>
                      {post.keyTakeaway}
                    </div>
                  </div>
                </div>

                {/* Read button with Arrow Slide */}
                <div className="px-6 py-4 mx-6 mt-2 mb-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-rose-600 transition-colors">
                  <span>Đọc bài viết chi tiết</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Wireframe Button: "Xem tất cả bài viết" with AppButton */}
        <div className="text-center">
          <AppButton
            variant="hover-fill"
            colorScheme="blue"
            size="md"
            rounded="xl"
            onClick={() => onReadPost(BLOG_POSTS[0])}
            icon={<BookOpen className="w-4 h-4" />}
            className="shadow-sm uppercase tracking-wider font-extrabold"
          >
            Xem tất cả bài viết kiến thức chuyên sâu
          </AppButton>
        </div>

      </div>
    </section>
  );
};
