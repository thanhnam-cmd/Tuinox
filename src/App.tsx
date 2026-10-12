/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { PainPoints } from './components/PainPoints';
import { ComparisonTable } from './components/ComparisonTable';
import { ProductCategories } from './components/ProductCategories';
import { SolutionConfigurator } from './components/SolutionConfigurator';
import { MaterialProof } from './components/MaterialProof';
import { FactorySection } from './components/FactorySection';
import { WorkflowSection } from './components/WorkflowSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { BlogSection } from './components/BlogSection';
import { QuoteSection } from './components/QuoteSection';
import { FaqSection } from './components/FaqSection';
import { ButtonShowcaseSection } from './components/ButtonShowcaseSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

import { ProductDetailModal } from './components/Modals/ProductDetailModal';
import { BlogModal } from './components/Modals/BlogModal';
import { FactoryBookingModal } from './components/Modals/FactoryBookingModal';

import { BlogPost, ProductModule, SolutionModel } from './types';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Activate Scroll Reveal on entire site
  useScrollReveal();

  // Modal states
  const [selectedProduct, setSelectedProduct] = useState<ProductModule | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isFactoryModalOpen, setIsFactoryModalOpen] = useState(false);

  // Selected solution model from Section G to pre-fill into Section M
  const [prefilledModelName, setPrefilledModelName] = useState<string>('');
  const [selectedModelId, setSelectedModelId] = useState<string>('');

  // Smooth scroll helper to Quote Section
  const handleScrollToQuote = (customModel?: string) => {
    if (customModel) {
      setPrefilledModelName(customModel);
    }
    const el = document.getElementById('bao-gia-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler when user selects a model from Section G (Mẫu cánh + tay nắm)
  const handleSelectModel = (model: SolutionModel) => {
    setSelectedModelId(model.id);
    const modelFullText = `${model.code} - ${model.name} (${model.handleName}, màu ${model.colorName})`;
    setPrefilledModelName(modelFullText);
    
    // Smooth scroll down to Section M
    handleScrollToQuote(modelFullText);
  };

  // Smooth scroll to Factory Section
  const handleScrollToFactory = () => {
    const el = document.getElementById('nha-xuong');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#26364A] flex flex-col font-['Be_Vietnam_Pro',sans-serif] selection:bg-[#C69A55] selection:text-[#09192D]">
      {/* A · Sticky Top Bar Header */}
      <Header onOpenQuote={() => handleScrollToQuote()} />

      <main className="flex-1">
        {/* B · Hero Section */}
        <Hero
          onQuoteClick={() => handleScrollToQuote()}
          onFactoryClick={handleScrollToFactory}
        />

        {/* C · Thanh uy tín (Trust Bar) */}
        <div className="reveal-left">
          <TrustBar />
        </div>

        {/* D · Nỗi đau khách hàng (Customer Pain Points) */}
        <div className="reveal-right">
          <PainPoints />
        </div>

        {/* E · Giải pháp / So sánh (Comparison Table) */}
        <div className="reveal-left">
          <ComparisonTable />
        </div>

        {/* F · Danh mục sản phẩm (Product Categories) */}
        <div className="reveal-right">
          <ProductCategories
            onSelectCategory={(cat) => setSelectedProduct(cat)}
          />
        </div>

        {/* G · Giải pháp: mẫu cánh + tay nắm (Solution Configurator) */}
        <div className="reveal-left">
          <SolutionConfigurator
            onSelectModel={handleSelectModel}
            selectedModelId={selectedModelId}
          />
        </div>

        {/* H · Minh bạch chất liệu (Material Transparency & Proof) */}
        <div className="reveal-right">
          <MaterialProof />
        </div>

        {/* I · Nhà xưởng (Factory Tour & Stats) */}
        <div className="reveal-left">
          <FactorySection
            onBookTour={() => setIsFactoryModalOpen(true)}
          />
        </div>

        {/* J · Dịch vụ / Quy trình (5-Step Workflow) */}
        <div className="reveal-right">
          <WorkflowSection />
        </div>

        {/* K · Công trình & Đánh giá (Before / After Real Projects) */}
        <div className="reveal-left">
          <BeforeAfterSection />
        </div>

        {/* L · Blog / Cẩm nang kiến thức */}
        <div className="reveal-right">
          <BlogSection
            onReadPost={(post) => setSelectedPost(post)}
          />
        </div>

        {/* M · Báo giá / Đặt hàng (Interactive Quote Calculator & Form) */}
        <div className="reveal-left">
          <QuoteSection
            prefilledModel={prefilledModelName}
          />
        </div>

        {/* N · FAQ (Frequently Asked Questions) */}
        <div className="reveal-right">
          <FaqSection />
        </div>

        {/* 12-Button Interactive Design System Showcase */}
        <div className="reveal-left">
          <ButtonShowcaseSection />
        </div>
      </main>

      {/* O · Footer */}
      <Footer />

      {/* Floating CTA Buttons on Mobile & Scroll-To-Top */}
      <FloatingActions
        onQuoteClick={() => handleScrollToQuote()}
      />

      {/* Category Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForQuote={(name) => handleScrollToQuote(name)}
      />

      {/* Blog Article Reader Modal */}
      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onConsultationRequest={() => handleScrollToQuote()}
      />

      {/* Factory Visit Booking Modal */}
      <FactoryBookingModal
        isOpen={isFactoryModalOpen}
        onClose={() => setIsFactoryModalOpen(false)}
      />
    </div>
  );
}
