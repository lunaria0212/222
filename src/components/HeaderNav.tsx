import React from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  FileText,
  Grid,
  Calculator,
  ChevronLeft,
  ChevronRight,
  Printer,
  Volume2,
  VolumeX,
  Building,
  Image as ImageIcon,
  Sparkles,
} from 'lucide-react';
import { SPEAKERS, SLIDES_DATA } from '../data/presentationData';

interface HeaderNavProps {
  currentSlideIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  isNotesOpen: boolean;
  onToggleNotes: () => void;
  onOpenThumbnails: () => void;
  onOpenCalculator: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isPrintMode: boolean;
  onTogglePrintMode: () => void;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  onOpenGreenBuildings: () => void;
  bgStyle: 'watermark' | 'immersive' | 'none';
  onToggleBgStyle: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentSlideIndex,
  totalSlides,
  onPrev,
  onNext,
  isNotesOpen,
  onToggleNotes,
  onOpenThumbnails,
  onOpenCalculator,
  isFullscreen,
  onToggleFullscreen,
  isPrintMode,
  onTogglePrintMode,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
  onOpenGreenBuildings,
  bgStyle,
  onToggleBgStyle,
}) => {
  const currentSlide = SLIDES_DATA[currentSlideIndex];
  const isSpeakerA = currentSlide.speaker === 'A';

  // Format timer MM:SS
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const timeString = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  // Timer pace indicator (Target: 20 mins = 1200s, Speaker A = 600s, Speaker B = 600s)
  const isOver10 = timerSeconds >= 600 && isSpeakerA;
  const isOver20 = timerSeconds >= 1200;

  return (
    <header className="bg-slate-900 text-white px-4 py-2.5 shadow-md flex items-center justify-between gap-2 select-none border-b border-slate-800">
      {/* Left: App Logo & Current Slide / Speaker Badge */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-black text-sm text-white shadow-2xs">
            RS
          </span>
          <div className="hidden sm:block">
            <div className="text-xs font-bold text-emerald-400">
              EEWH-RS 2026 住宿類手冊
            </div>
            <div className="text-[10px] text-slate-400">20分鐘雙人圖表簡報</div>
          </div>
        </div>

        {/* Current Speaker Pill with Time allotment */}
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
            isSpeakerA
              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700'
              : 'bg-teal-950/80 text-teal-300 border border-teal-700'
          }`}
        >
          <span className="w-2 h-2 rounded-full animate-pulse bg-current" />
          <span>{isSpeakerA ? '張玥 (0-10m)' : '郭邦翔 (10-20m)'}</span>
          <span className="text-[10px] text-slate-400 hidden md:inline">
            · 頁 {currentSlideIndex + 1}/{totalSlides}
          </span>
        </div>
      </div>

      {/* Center: Presentation Timer & Speaker Switch Indicator */}
      <div className="flex items-center gap-3 bg-slate-800/90 px-3 py-1 rounded-xl border border-slate-700 shadow-inner">
        <div className="flex items-center gap-1.5">
          <button
            onClick={onToggleTimer}
            className="p-1 rounded-md hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={isTimerRunning ? '暫停計時' : '開始計時'}
          >
            {isTimerRunning ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
          </button>
          <span
            className={`font-mono text-sm font-black ${
              isOver20
                ? 'text-rose-400 animate-pulse'
                : isOver10
                ? 'text-amber-400'
                : 'text-slate-100'
            }`}
          >
            {timeString}
          </span>
          <span className="text-[10px] text-slate-400 font-mono">/ 20:00</span>
          <button
            onClick={onResetTimer}
            className="p-1 rounded-md hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            title="重設計時器"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Handover reminder banner if near 10m */}
        {currentSlideIndex === 9 && (
          <span className="hidden lg:inline text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold border border-amber-500/40">
            ⚠️ 準備交棒給郭邦翔
          </span>
        )}
      </div>

      {/* Right: Slide Controls & Interactive Tools */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-0.5 bg-slate-800 p-0.5 rounded-lg border border-slate-700">
          <button
            onClick={onPrev}
            disabled={currentSlideIndex === 0}
            className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
            title="上一頁 (←)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono px-1 font-bold text-slate-300">
            {currentSlideIndex + 1}/{totalSlides}
          </span>
          <button
            onClick={onNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
            title="下一頁 (→ 或 空白鍵)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Green Building Case Library Button */}
        <button
          onClick={onOpenGreenBuildings}
          className="p-1.5 text-xs font-medium bg-teal-600/30 hover:bg-teal-600 text-teal-300 hover:text-white border border-teal-500/40 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
          title="開啟 20 大綠建築 3D 案例庫 (B)"
        >
          <Building className="w-4 h-4 text-emerald-400" />
          <span className="hidden xl:inline">3D 建築案例</span>
        </button>

        {/* Background Style Toggle */}
        <button
          onClick={onToggleBgStyle}
          className={`p-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1 cursor-pointer border ${
            bgStyle === 'immersive'
              ? 'bg-emerald-600/40 text-emerald-300 border-emerald-500'
              : bgStyle === 'watermark'
              ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              : 'bg-slate-800/60 text-slate-400 border-slate-800'
          }`}
          title={`切換綠建築底圖模式（目前：${
            bgStyle === 'watermark'
              ? '柔和浮水印'
              : bgStyle === 'immersive'
              ? '3D沉浸全景'
              : '無底圖'
          }）`}
        >
          <ImageIcon className="w-4 h-4" />
          <span className="hidden 2xl:inline">
            {bgStyle === 'watermark'
              ? '浮水印底圖'
              : bgStyle === 'immersive'
              ? '沉浸3D'
              : '純淨模式'}
          </span>
        </button>

        {/* Calculator Button */}
        <button
          onClick={onOpenCalculator}
          className="p-1.5 text-xs font-medium bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
          title="開啟 EEWH-RS 指標試算機 (C)"
        >
          <Calculator className="w-4 h-4" />
          <span className="hidden md:inline">試算機</span>
        </button>

        {/* Speaker Notes Toggle */}
        <button
          onClick={onToggleNotes}
          className={`p-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1 cursor-pointer border ${
            isNotesOpen
              ? 'bg-amber-500/30 text-amber-300 border-amber-500/50'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
          title="開啟/關閉講者口播手卡 (N)"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden md:inline">講稿手卡</span>
        </button>

        {/* Thumbnails Overview */}
        <button
          onClick={onOpenThumbnails}
          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer"
          title="20頁縮圖總覽 (O)"
        >
          <Grid className="w-4 h-4" />
        </button>

        {/* Full View / Print Mode Toggle */}
        <button
          onClick={onTogglePrintMode}
          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
            isPrintMode
              ? 'bg-teal-600 text-white border-teal-500'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
          title={isPrintMode ? '返回簡報播放模式' : '檢視所有 20 頁模式（列印/速閱）'}
        >
          <Printer className="w-4 h-4" />
        </button>

        {/* Fullscreen */}
        <button
          onClick={onToggleFullscreen}
          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer"
          title={isFullscreen ? '離開全螢幕 (F)' : '全螢幕播放 (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
