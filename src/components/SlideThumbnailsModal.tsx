import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { SLIDES_DATA } from '../data/presentationData';
import { GREEN_BUILDING_EXAMPLES } from '../data/greenBuildingExamples';

interface SlideThumbnailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideThumbnailsModal: React.FC<SlideThumbnailsModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold">20 頁投影片總覽導航</h2>
            <p className="text-xs text-slate-400">
              雙人報告架構：張玥 (第 1~10 頁) ｜ 郭邦翔 (第 11~20 頁)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="關閉總覽"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid List */}
        <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {SLIDES_DATA.map((slide, idx) => {
            const isSelected = idx === currentIndex;
            const isSpeakerA = slide.speaker === 'A';

            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`text-left p-3 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between min-h-[175px] relative ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-300'
                    : 'border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                        isSpeakerA
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-teal-100 text-teal-800'
                      }`}
                    >
                      P{slide.id} · {isSpeakerA ? '張玥' : '郭邦翔'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {slide.timeRange.split(' - ')[0]}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1 leading-tight">
                    {slide.title}
                  </h4>
                </div>

                {/* 3D Green Building Mini Preview */}
                {GREEN_BUILDING_EXAMPLES[slide.id] && (
                  <div className="relative rounded-lg overflow-hidden h-14 my-1 border border-slate-200">
                    <img
                      src={GREEN_BUILDING_EXAMPLES[slide.id].imageUrl}
                      alt={GREEN_BUILDING_EXAMPLES[slide.id].name}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/images/green_residential_render_1793252243793.jpg';
                      }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1">
                      <span className="text-[9px] text-white font-bold truncate">
                        {GREEN_BUILDING_EXAMPLES[slide.id].name}
                      </span>
                    </div>
                  </div>
                )}

                <div className="text-[10px] text-slate-500 truncate pt-0.5 border-t border-slate-100">
                  {slide.part}
                </div>

                {isSelected && (
                  <span className="absolute -top-1.5 -right-1.5 p-0.5 bg-emerald-600 text-white rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
