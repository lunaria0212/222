import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA } from './data/presentationData';
import { GREEN_BUILDING_EXAMPLES } from './data/greenBuildingExamples';
import { HeaderNav } from './components/HeaderNav';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { SlideThumbnailsModal } from './components/SlideThumbnailsModal';
import { CalculatorModal } from './components/CalculatorModal';
import { GreenBuildingModal } from './components/GreenBuildingModal';
import { ExportModal } from './components/ExportModal';
import {
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide20,
} from './components/slides/SlideVisuals';
import confetti from 'canvas-confetti';
import { ArrowLeft, ArrowRight, Building, Sparkles, MapPin, Award } from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(true);
  const [isThumbnailsOpen, setIsThumbnailsOpen] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isGreenBuildingModalOpen, setIsGreenBuildingModalOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [selectedModalSlideId, setSelectedModalSlideId] = useState<number>(1);
  const [bgStyle, setBgStyle] = useState<'watermark' | 'immersive' | 'none'>('watermark');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);

  // 20-minute Presentation Timer (in seconds)
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Timer Tick
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const handleToggleTimer = () => setIsTimerRunning((prev) => !prev);
  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(0);
  };

  const handleToggleBgStyle = () => {
    setBgStyle((prev) =>
      prev === 'watermark' ? 'immersive' : prev === 'immersive' ? 'none' : 'watermark'
    );
  };

  const handleOpenGreenBuilding = (slideId: number) => {
    setSelectedModalSlideId(slideId);
    setIsGreenBuildingModalOpen(true);
  };

  const currentSlide = SLIDES_DATA[currentSlideIndex];
  const currentGreenBuilding = GREEN_BUILDING_EXAMPLES[currentSlide.id];

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const nextIndex = Math.min(SLIDES_DATA.length - 1, prev + 1);
      // Trigger confetti celebration on handover to Speaker B (Slide 10 -> Slide 11)
      if (prev === 9 && nextIndex === 10) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.5 },
        });
      }
      return nextIndex;
    });
  }, []);

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Toggle Fullscreen
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCalculatorOpen || isGreenBuildingModalOpen) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === 'o' || e.key === 'O' || e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setIsThumbnailsOpen((prev) => !prev);
      } else if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        setIsCalculatorOpen((prev) => !prev);
      } else if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        handleOpenGreenBuilding(currentSlideIndex + 1);
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setIsExportOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isCalculatorOpen, isGreenBuildingModalOpen, currentSlideIndex]);

  // Render individual slide component
  const renderSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return <Slide01 />;
      case 1:
        return <Slide02 />;
      case 2:
        return <Slide03 />;
      case 3:
        return <Slide04 />;
      case 4:
        return <Slide05 />;
      case 5:
        return <Slide06 />;
      case 6:
        return <Slide07 />;
      case 7:
        return <Slide08 />;
      case 8:
        return <Slide09 />;
      case 9:
        return <Slide10 />;
      case 10:
        return <Slide11 />;
      case 11:
        return <Slide12 />;
      case 12:
        return <Slide13 />;
      case 13:
        return <Slide14 />;
      case 14:
        return <Slide15 />;
      case 15:
        return <Slide16 />;
      case 16:
        return <Slide17 />;
      case 17:
        return <Slide18 />;
      case 18:
        return <Slide19 />;
      case 19:
        return <Slide20 />;
      default:
        return <Slide01 />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 flex flex-col font-fangsong select-none">
      {/* Top Navigation & Controls */}
      <HeaderNav
        currentSlideIndex={currentSlideIndex}
        totalSlides={SLIDES_DATA.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectSlide={handleSelectSlide}
        isNotesOpen={isNotesOpen}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        onOpenThumbnails={() => setIsThumbnailsOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        isPrintMode={isPrintMode}
        onTogglePrintMode={() => setIsPrintMode((prev) => !prev)}
        timerSeconds={timerSeconds}
        isTimerRunning={isTimerRunning}
        onToggleTimer={handleToggleTimer}
        onResetTimer={handleResetTimer}
        onOpenGreenBuildings={() => handleOpenGreenBuilding(currentSlideIndex + 1)}
        bgStyle={bgStyle}
        onToggleBgStyle={handleToggleBgStyle}
      />

      {/* Main Presentation Stage */}
      {isPrintMode ? (
        // Print / Overview Mode: Render all 20 slides in sequence with corresponding green building background
        <main className="flex-1 bg-slate-100 p-6 overflow-y-auto space-y-8 max-w-6xl mx-auto w-full print:hidden">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
            <h1 className="text-2xl font-black text-slate-900">
              EEWH-RS 2026 綠建築評估手冊（住宿類）全 20 頁投影片總覽
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              雙人 20 分鐘報告專用手冊 · 張玥 (P1~10) ｜ 郭邦翔 (P11~20) · 每頁均配有專屬 3D 綠建築案例
            </p>
          </div>

          {SLIDES_DATA.map((slide, idx) => {
            const gb = GREEN_BUILDING_EXAMPLES[slide.id];
            return (
              <div
                key={slide.id}
                className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden relative"
              >
                {/* Header Bar */}
                <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-emerald-400">
                      第 {slide.id} 頁 · {slide.title}
                    </span>
                    {gb && (
                      <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800">
                        🏛️ 3D 典範：{gb.name}
                      </span>
                    )}
                  </div>
                  <span className="text-slate-400 font-mono">
                    {slide.speaker === 'A' ? '張玥' : '郭邦翔'} · {slide.timeRange}
                  </span>
                </div>

                {/* Slide Viewport with Background */}
                <div className="p-6 aspect-[16/9] max-h-[580px] overflow-hidden relative">
                  {/* Slide background */}
                  {gb && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                      <img
                        src={gb.imageUrl}
                        alt={gb.name}
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/images/green_residential_render_1793252243793.jpg';
                        }}
                        className="w-full h-full object-cover opacity-35 mix-blend-multiply filter contrast-125 saturate-120"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/50 via-white/70 to-emerald-50/40" />
                    </div>
                  )}
                  <div className="relative z-10 h-full">
                    {renderSlideContent(idx)}
                  </div>
                </div>

                {/* Speaker Script Card */}
                <div className="bg-slate-50 p-4 border-t border-slate-200 text-xs text-slate-700">
                  <div className="font-bold text-slate-800 mb-1 flex items-center justify-between">
                    <span>🎙️ 講者口播講稿：</span>
                    {gb && (
                      <span className="text-emerald-700 font-normal">
                        📍 建築地標：{gb.location}（{gb.ratingBadge}）
                      </span>
                    )}
                  </div>
                  <p className="leading-relaxed">{slide.speakerScript}</p>
                </div>
              </div>
            );
          })}
        </main>
      ) : (
        // Standard Interactive Slide Presentation Mode
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative print:hidden">
          {/* Slide Stage Container */}
          <main className="flex-1 flex items-center justify-center p-2 sm:p-4 bg-slate-950/95 overflow-y-auto">
            <div className="w-full max-w-5xl bg-white/95 rounded-2xl shadow-2xl border border-slate-800 flex flex-col p-4 sm:p-5 relative min-h-[540px] max-h-[calc(100vh-76px)] overflow-y-auto transition-all duration-300">
              {/* Dynamic Green Building Background / 3D Render Layer */}
              {bgStyle !== 'none' && currentGreenBuilding && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-0 transition-opacity duration-700">
                  <img
                    src={currentGreenBuilding.imageUrl}
                    alt={currentGreenBuilding.name}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/images/green_residential_render_1793252243793.jpg';
                    }}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      bgStyle === 'watermark'
                        ? 'opacity-38 mix-blend-multiply filter contrast-125 saturate-125'
                        : 'opacity-65 filter brightness-100 contrast-115 saturate-125'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-500 ${
                      bgStyle === 'watermark'
                        ? 'bg-gradient-to-t from-emerald-50/50 via-white/70 to-emerald-50/40'
                        : 'bg-gradient-to-t from-emerald-950/20 via-white/50 to-white/60'
                    }`}
                  />
                </div>
              )}

              {/* Speaker Progress Top Indicator */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 flex overflow-hidden z-20">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{
                    width: `${((currentSlideIndex + 1) / SLIDES_DATA.length) * 100}%`,
                  }}
                />
              </div>

              {/* Top Banner on Slide: 3D Building Showcase Pill */}
              {currentGreenBuilding && (
                <div className="relative z-10 flex items-center justify-between pb-1 text-xs select-none">
                  <button
                    onClick={() => handleOpenGreenBuilding(currentSlide.id)}
                    className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50/95 hover:bg-emerald-100/95 text-emerald-800 border border-emerald-300/80 shadow-2xs transition-all cursor-pointer"
                    title="點擊展開此綠建築 3D 模型工法剖析與節能數據 (快速鍵 B)"
                  >
                    <Building className="w-3.5 h-3.5 text-emerald-700 group-hover:scale-110 transition-transform" />
                    <span className="font-bold">🏛️ 本頁 3D 綠建築典範：</span>
                    <span className="truncate max-w-[160px] sm:max-w-xs font-semibold">
                      {currentGreenBuilding.name}
                    </span>
                    {currentGreenBuilding.is3dRender && (
                      <span className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-700 bg-amber-100/80 px-1.5 py-0.2 rounded">
                        <Sparkles className="w-2.5 h-2.5" /> 3D渲染
                      </span>
                    )}
                    <span className="text-[10px] text-emerald-600 underline ml-1">
                      檢視 3D 剖析 →
                    </span>
                  </button>

                  <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    <span>{currentGreenBuilding.location}</span>
                  </div>
                </div>
              )}

              {/* Render Current Slide */}
              <div className="flex-1 flex flex-col justify-between overflow-y-auto py-1 relative z-10">
                {renderSlideContent(currentSlideIndex)}
              </div>

              {/* Bottom Quick Controls Bar on Slide */}
              <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-100 text-xs text-slate-400 select-none shrink-0 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700">
                    {currentSlide.part}
                  </span>
                  <span className="hidden sm:inline text-slate-300">·</span>
                  <span className="hidden sm:inline text-slate-500 italic truncate max-w-md">
                    {currentSlide.funMetaphor}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-slate-600">
                    {currentSlideIndex + 1} / {SLIDES_DATA.length}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrev}
                      disabled={currentSlideIndex === 0}
                      className="p-1 rounded hover:bg-slate-100 text-slate-500 disabled:opacity-20 cursor-pointer"
                      title="上一頁"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentSlideIndex === SLIDES_DATA.length - 1}
                      className="p-1 rounded hover:bg-slate-100 text-slate-500 disabled:opacity-20 cursor-pointer"
                      title="下一頁"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Right/Bottom Collapsible Speaker Notes Drawer */}
          <SpeakerNotesDrawer
            isOpen={isNotesOpen}
            onClose={() => setIsNotesOpen(false)}
            currentSlide={currentSlide}
          />
        </div>
      )}

      {/* Modals */}
      <SlideThumbnailsModal
        isOpen={isThumbnailsOpen}
        onClose={() => setIsThumbnailsOpen(false)}
        currentIndex={currentSlideIndex}
        onSelectSlide={handleSelectSlide}
      />

      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <GreenBuildingModal
        isOpen={isGreenBuildingModalOpen}
        onClose={() => setIsGreenBuildingModalOpen(false)}
        currentSlideId={selectedModalSlideId}
        onSelectSlide={handleSelectSlide}
      />

      {/* Export Presentation Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        onTriggerPrint={() => window.print()}
        currentSlideIndex={currentSlideIndex}
      />

      {/* Dedicated Printable Presentation Container for window.print() */}
      <div className="hidden print:block printable-presentation-container">
        {SLIDES_DATA.map((slide, idx) => {
          const gb = GREEN_BUILDING_EXAMPLES[slide.id];
          return (
            <div key={`print-slide-${slide.id}`} className="printable-slide-page">
              {/* Watermark Background with enhanced architectural depth */}
              {gb && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                  <img
                    src={gb.imageUrl}
                    alt={gb.name}
                    className="w-full h-full object-cover opacity-35 mix-blend-multiply filter contrast-125 saturate-120"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/50 via-white/70 to-emerald-50/40" />
                </div>
              )}

              {/* Print Header Bar */}
              <div className="relative z-10 flex items-center justify-between pb-2 mb-2 border-b-2 border-emerald-700 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-emerald-700 text-white font-black rounded text-[10px] tracking-wider">
                    EEWH-RS 2026
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    第 {slide.id} 頁 · {slide.title}
                  </span>
                  {gb && (
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded border border-emerald-300">
                      🏛️ 典範：{gb.name}（{gb.ratingBadge}）
                    </span>
                  )}
                </div>
                <div className="text-slate-600 font-mono text-xs font-bold">
                  主講：{slide.speaker === 'A' ? '張玥' : '郭邦翔'} ｜ {slide.timeRange}
                </div>
              </div>

              {/* Slide Content */}
              <div className="relative z-10 flex-1 flex flex-col justify-between overflow-hidden">
                {renderSlideContent(idx)}
              </div>

              {/* Print Footer Bar */}
              <div className="relative z-10 pt-2 mt-2 border-t border-slate-300 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                <span>內政部建築研究所 · 2026 最新版綠建築評估手冊（住宿類 EEWH-RS）雙人專題報告</span>
                <span className="font-bold text-slate-800 font-mono">第 {slide.id} / 20 頁</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
