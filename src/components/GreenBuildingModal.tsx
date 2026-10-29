import React, { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Building,
  MapPin,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
  Info,
  Maximize2,
  CheckCircle2,
} from 'lucide-react';
import { GREEN_BUILDING_EXAMPLES } from '../data/greenBuildingExamples';
import { SLIDES_DATA } from '../data/presentationData';

interface GreenBuildingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideId: number;
  onSelectSlide?: (slideIndex: number) => void;
}

export const GreenBuildingModal: React.FC<GreenBuildingModalProps> = ({
  isOpen,
  onClose,
  currentSlideId,
  onSelectSlide,
}) => {
  const [activeSlideId, setActiveSlideId] = useState<number>(currentSlideId);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Sync with prop when opened
  React.useEffect(() => {
    setActiveSlideId(currentSlideId);
  }, [currentSlideId, isOpen]);

  if (!isOpen) return null;

  const example =
    GREEN_BUILDING_EXAMPLES[activeSlideId] || GREEN_BUILDING_EXAMPLES[1];
  const slideMeta = SLIDES_DATA.find((s) => s.id === activeSlideId);

  const handlePrev = () => {
    setActiveSlideId((prev) => (prev > 1 ? prev - 1 : 20));
  };

  const handleNext = () => {
    setActiveSlideId((prev) => (prev < 20 ? prev + 1 : 1));
  };

  const handleJumpToSlide = () => {
    if (onSelectSlide) {
      onSelectSlide(activeSlideId - 1);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden text-slate-800"
        role="dialog"
        aria-modal="true"
        aria-labelledby="green-building-modal-title"
      >
        {/* Top Header Bar */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600/90 flex items-center justify-center text-white shadow-xs">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-400 tracking-wider">
                  2026 EEWH-RS 綠建築 3D 典範案例庫
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  第 {activeSlideId} 頁 · 對應案例
                </span>
                {example.is3dRender && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> 3D 模型渲染
                  </span>
                )}
              </div>
              <h2
                id="green-building-modal-title"
                className="text-base sm:text-lg font-bold text-white tracking-wide truncate max-w-md sm:max-w-xl"
              >
                {example.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev/Next buttons */}
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-md hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="上一個建築案例"
                aria-label="上一個建築案例"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold px-2 text-slate-300">
                {activeSlideId} / 20
              </span>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-md hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="下一個建築案例"
                aria-label="下一個建築案例"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="關閉視窗"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Main Visual Presentation Card */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 group shadow-lg aspect-[16/9] max-h-[380px] sm:max-h-[420px] flex items-center justify-center">
            <img
              src={example.imageUrl}
              alt={example.name}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null;
                target.src = '/src/assets/images/green_residential_render_1793252243793.jpg';
              }}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'group-hover:scale-102 cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed((prev) => !prev)}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-emerald-600/95 text-white text-xs font-bold rounded-lg shadow-md backdrop-blur-sm flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                {example.ratingBadge}
              </span>
              <span className="px-3 py-1 bg-slate-900/80 text-slate-200 text-xs font-medium rounded-lg shadow-md backdrop-blur-sm flex items-center gap-1.5 border border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {example.location}
              </span>
            </div>

            {/* Bottom Floating Info Banner on Image */}
            <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xl">
              <div>
                <div className="text-xs text-emerald-400 font-bold mb-0.5">
                  🌟 3D 建築設計核心意象
                </div>
                <div className="text-sm font-semibold text-white">
                  {example.tagline}
                </div>
              </div>
              <button
                onClick={() => setIsZoomed((prev) => !prev)}
                className="shrink-0 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer self-start sm:self-auto"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                {isZoomed ? '縮小視角' : '放大切換'}
              </button>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {example.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-50/40 border border-emerald-100 flex items-center gap-3 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 font-bold text-lg flex items-center justify-center shadow-xs shrink-0 border border-emerald-200">
                  {metric.icon || '📌'}
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold">
                    {metric.label}
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-800">
                    {metric.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3D Structural Highlights */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>3D 建築工法與綠色構造剖析：</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {example.structuralHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-2 shadow-2xs"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed font-medium">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Paragraph Description */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
            <div className="font-bold text-slate-800 flex items-center gap-2">
              <Info className="w-4 h-4 text-teal-600" />
              與 2026 EEWH-RS 投影片課程的專業對應：
            </div>
            <p>{example.description}</p>
            {slideMeta && (
              <div className="p-2.5 rounded-lg bg-teal-50/70 border border-teal-200 text-xs text-teal-900 flex items-center justify-between">
                <span>
                  本建築對應投影片主題：<strong>【{slideMeta.title}】</strong>
                </span>
                <span className="text-slate-500 text-[11px]">
                  {slideMeta.part}
                </span>
              </div>
            )}
          </div>

          {/* Quick 20 Building Carousel Selector */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
              <span>快速切換 20 大綠建築案例：</span>
              <span>點擊縮圖即時查看</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 overflow-x-auto pb-1">
              {Object.values(GREEN_BUILDING_EXAMPLES).map((ex) => {
                const isActive = ex.slideId === activeSlideId;
                return (
                  <button
                    key={ex.slideId}
                    onClick={() => setActiveSlideId(ex.slideId)}
                    className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all cursor-pointer group ${
                      isActive
                        ? 'border-emerald-600 ring-2 ring-emerald-400 scale-105 shadow-md'
                        : 'border-slate-200 hover:border-emerald-400 opacity-70 hover:opacity-100'
                    }`}
                    title={`第 ${ex.slideId} 頁 · ${ex.name}`}
                  >
                    <img
                      src={ex.imageUrl}
                      alt={ex.name}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/src/assets/images/green_residential_render_1793252243793.jpg';
                      }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center text-white text-xs font-bold">
                      {ex.slideId}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>全棟採用 2026 EEWH-RS 住宿類評估規範標準</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleJumpToSlide}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              跳轉到第 {activeSlideId} 頁簡報
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-200 border border-slate-300 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
