import React, { useState } from 'react';
import {
  X,
  Printer,
  FileDown,
  Copy,
  Check,
  Sparkles,
  Presentation,
  SlidersHorizontal,
  Info,
  Layers,
  Award
} from 'lucide-react';
import { SLIDES_DATA, SPEAKERS } from '../data/presentationData';
import { GREEN_BUILDING_EXAMPLES } from '../data/greenBuildingExamples';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerPrint: () => void;
  currentSlideIndex: number;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  onTriggerPrint,
  currentSlideIndex,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [exportFormat, setExportFormat] = useState<'all' | 'speakerA' | 'speakerB'>('all');

  if (!isOpen) return null;

  // Generate complete markdown script for presentation
  const generateMarkdownScript = () => {
    let md = `# 2026 EEWH-RS 綠建築評估手冊（住宿類）20分鐘雙人簡報演講全稿手卡\n\n`;
    md += `> 內政部建築研究所 2026 最新版 · 雙人分工報告 · 總時長 20 分鐘\n`;
    md += `> 講者分配：張玥 (第 1~10 頁，00:00 - 10:00) ｜ 郭邦翔 (第 11~20 頁，10:00 - 20:00)\n\n`;
    md += `---\n\n`;

    const filteredSlides = SLIDES_DATA.filter((s) => {
      if (exportFormat === 'speakerA') return s.speaker === 'A';
      if (exportFormat === 'speakerB') return s.speaker === 'B';
      return true;
    });

    filteredSlides.forEach((slide) => {
      const speakerName = slide.speaker === 'A' ? '張玥' : '郭邦翔';
      const gb = GREEN_BUILDING_EXAMPLES[slide.id];
      md += `### 第 ${slide.id} 頁 · ${slide.title}\n`;
      md += `**【講者】**：${speakerName} ｜ **【時段】**：${slide.timeRange} ｜ **【階段】**：${slide.part}\n\n`;
      md += `**【單元副標】**：${slide.subtitle}\n\n`;
      md += `**【開場吸睛金句】**：「${slide.funMetaphor}」\n\n`;
      md += `**【🎙️ 講者口播逐字稿（建議60秒）】**：\n${slide.speakerScript}\n\n`;
      md += `**【本頁核心結論】**：${slide.keyTakeaway}\n\n`;
      if (gb) {
        md += `**【🏛️ 3D 綠建築案例】**：${gb.name}（${gb.location} · ${gb.ratingBadge}）\n`;
        md += `*工法亮點*：${gb.structuralHighlights.join('；')}\n\n`;
      }
      md += `---\n\n`;
    });

    return md;
  };

  const handleCopyScript = () => {
    const script = generateMarkdownScript();
    navigator.clipboard.writeText(script).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleDownloadScript = () => {
    const script = generateMarkdownScript();
    const blob = new Blob([script], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `2026_EEWH_RS_雙人簡報演講講稿_${exportFormat}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 select-none">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-700 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shadow-xs">
              <Printer className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>匯出簡報 · PDF / PPT 講稿列印中心</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                  20 頁全彩
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                完整匯出高畫質圖表、3D建築浮水印背景與雙人演說講稿
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="關閉匯出對話框"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto space-y-5 text-slate-800 text-xs">
          {/* Main Action Card: PDF Print */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 shadow-sm space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-700 text-white text-[10px] font-bold rounded-md mb-1.5">
                  <Sparkles className="w-3 h-3" /> 推薦方式
                </span>
                <h3 className="text-sm font-black text-emerald-950">
                  匯出為完整 20 頁高畫質 PDF 簡報
                </h3>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  使用瀏覽器原生列印引擎，自動套用 CSS 橫向分頁（A4 Landscape）與全彩建築底圖
                </p>
              </div>
            </div>

            <div className="p-3 bg-white/90 rounded-lg border border-emerald-200 text-[11px] space-y-1.5 text-slate-700">
              <div className="font-bold text-emerald-900 flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-emerald-600" />
                瀏覽器「另存為 PDF」最佳列印設定指南：
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-1">
                <li>
                  <strong className="text-slate-800">目的地 (Destination)</strong>：選擇「另存為 PDF (Save as PDF)」
                </li>
                <li>
                  <strong className="text-slate-800">方向 (Layout)</strong>：務必選擇「<strong>橫向 (Landscape)</strong>」
                </li>
                <li>
                  <strong className="text-slate-800">背景圖形 (Background graphics)</strong>：務必<strong>勾選打勾</strong>，以保留 3D 建築綠化浮水印與指標圖表配色
                </li>
                <li>
                  <strong className="text-slate-800">邊界 (Margins)</strong>：選擇「<strong>無 (None)</strong>」或「預設」
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                onClose();
                onTriggerPrint();
              }}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <Printer className="w-4 h-4" />
              <span>立即啟動列印對話框（另存為 PDF）</span>
            </button>
          </div>

          {/* Secondary Action: Export Scripts & Outline */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <Presentation className="w-4 h-4 text-teal-600" />
                  匯出 PPT 演講講稿與章節大綱
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  包含張玥與郭邦翔的雙人口播逐字稿、金句、換手時間點與案例數據
                </p>
              </div>
              {/* Filter tabs */}
              <div className="flex items-center bg-slate-200 p-0.5 rounded-lg text-[10px] font-bold">
                <button
                  onClick={() => setExportFormat('all')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    exportFormat === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  全20頁
                </button>
                <button
                  onClick={() => setExportFormat('speakerA')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    exportFormat === 'speakerA' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  張玥
                </button>
                <button
                  onClick={() => setExportFormat('speakerB')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    exportFormat === 'speakerB' ? 'bg-teal-600 text-white shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  郭邦翔
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={handleCopyScript}
                className="py-2 px-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copied ? '已複製到剪貼簿！' : '一鍵複製演講稿'}</span>
              </button>

              <button
                onClick={handleDownloadScript}
                className="py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <FileDown className="w-4 h-4 text-emerald-400" />
                <span>下載講稿文件 (.md)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>💡 提示：在任何頁面按下鍵盤快速鍵即可隨時喚出手卡或總覽</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-white hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-300 font-bold cursor-pointer"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
};
