import React from 'react';
import { X, Clock, User, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { SlideItem, SpeakerInfo } from '../types';
import { SPEAKERS, SLIDES_DATA } from '../data/presentationData';
import { GREEN_BUILDING_EXAMPLES } from '../data/greenBuildingExamples';

interface SpeakerNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: SlideItem;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
}) => {
  if (!isOpen) return null;

  const speaker: SpeakerInfo = SPEAKERS[currentSlide.speaker];
  const nextSlide = SLIDES_DATA[currentSlide.id] || null; // 0-indexed next is currentSlide.id

  return (
    <aside className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-slate-200 shadow-xl flex flex-col h-auto lg:h-full z-20 overflow-y-auto">
      {/* Top Banner */}
      <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">
            講者手卡 · 演講口播備忘稿
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="關閉手卡"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 space-y-4 text-xs">
        {/* Speaker Card */}
        <div
          className={`p-3 rounded-xl border flex items-center justify-between ${
            currentSlide.speaker === 'A'
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
              : 'bg-teal-50/80 border-teal-200 text-teal-950'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs ${
                currentSlide.speaker === 'A' ? 'bg-emerald-600' : 'bg-teal-600'
              }`}
            >
              {currentSlide.speaker === 'A' ? '張' : '郭'}
            </div>
            <div>
              <div className="font-bold">{speaker.name}</div>
              <div className="text-[10px] text-slate-500">{speaker.role}</div>
            </div>
          </div>
          <div className="text-right">
            <span className="flex items-center gap-1 font-mono font-bold text-[11px] text-slate-600">
              <Clock className="w-3 h-3" /> {currentSlide.timeRange}
            </span>
            <span className="text-[10px] text-slate-400">建議發言 60 秒</span>
          </div>
        </div>

        {/* Fun Metaphor Cue */}
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
          <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            趣味吸睛金句（開口抓住台下目光）：
          </div>
          <p className="text-slate-700 leading-relaxed text-[11px] italic">
            「{currentSlide.funMetaphor}」
          </p>
        </div>

        {/* Speaker Oral Script */}
        <div className="space-y-1.5">
          <div className="font-bold text-slate-800 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-emerald-600" />
            講者本頁口播講稿（自然口語風格）：
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 leading-relaxed text-xs space-y-2 whitespace-pre-line">
            {currentSlide.speakerScript}
          </div>
        </div>

        {/* Green Building Case Reference Cue */}
        {GREEN_BUILDING_EXAMPLES[currentSlide.id] && (
          <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-xs">
            <div className="font-bold text-teal-900 flex items-center gap-1 mb-1">
              <span>🏛️ 本頁 3D 綠建築案例引言提詞：</span>
            </div>
            <p className="text-[11px] text-teal-800">
              「請看背景與案例【{GREEN_BUILDING_EXAMPLES[currentSlide.id].name}】，位在{GREEN_BUILDING_EXAMPLES[currentSlide.id].location}，獲得 {GREEN_BUILDING_EXAMPLES[currentSlide.id].ratingBadge}，工法核心為{GREEN_BUILDING_EXAMPLES[currentSlide.id].tagline}。」
            </p>
          </div>
        )}

        {/* Key Takeaway */}
        <div className="p-3 bg-slate-900 text-white rounded-xl space-y-1">
          <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
            本頁一句話核心結論（結尾必講）：
          </div>
          <div className="text-[11px] font-medium leading-snug">
            {currentSlide.keyTakeaway}
          </div>
        </div>

        {/* Next Slide Teaser */}
        {nextSlide && (
          <div className="p-2.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 text-[11px] text-slate-500 flex items-center justify-between">
            <div className="truncate">
              <span className="font-semibold text-slate-700">下一頁預告：</span>
              <span className="ml-1 text-slate-600">{nextSlide.title}</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </div>
        )}
      </div>
    </aside>
  );
};
