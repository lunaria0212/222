import React, { useState } from 'react';
import { Calculator, X, CheckCircle2, AlertTriangle, Sparkles, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({ isOpen, onClose }) => {
  // EEWH-RS Scores
  const [rs1, setRs1] = useState<number>(8.5); // 生物多樣性 (0-14)
  const [rs2, setRs2] = useState<number>(6.0); // 基地保水 (0-9)
  const [scoreEE, setScoreEE] = useState<number>(75); // BERS SCORE_EE (50-100)
  const [cfr, setCfr] = useState<number>(20); // 減碳率 CFR% (0-40)
  const [ie, setIe] = useState<number>(75); // 室內環境 IE (60-100)
  const [wi, setWi] = useState<number>(4.2); // 水資源 WI (2.0-10.0)

  if (!isOpen) return null;

  // Formulas from EEWH-RS 2026 Manual:
  // RS3: 0.6 * (SCORE_EE - 50.0), clamped 0 to 30
  const calcRs3 = Math.min(30, Math.max(0, +(0.6 * (scoreEE - 50)).toFixed(2)));
  // RS4: 0.425 * CFR(%), clamped 0 to 17
  const calcRs4 = Math.min(17, Math.max(0, +(0.425 * cfr).toFixed(2)));
  // RS5: 18.67 * ((IE - 60)/60) + 1.5, clamped 0 to 18
  const calcRs5 = Math.min(18, Math.max(0, +(18.67 * ((ie - 60) / 60) + 1.5).toFixed(2)));
  // RS6: 2.50 * ((WI - 2.0)/2.0) + 1.5, clamped 0 to 12
  const calcRs6 = Math.min(12, Math.max(0, +(2.50 * ((wi - 2.0) / 2.0) + 1.5).toFixed(2)));

  const totalRS = +(rs1 + rs2 + calcRs3 + calcRs4 + calcRs5 + calcRs6).toFixed(1);

  // Gates Check:
  // Gate 1: Energy Efficiency SCORE_EE >= 50 (i.e. calcRs3 > 0)
  const energyPass = scoreEE >= 50 && calcRs3 > 0;
  // Gate 2: Water Resources RS6 >= 3.5
  const waterPass = calcRs6 >= 3.5;
  const gatesPassed = energyPass && waterPass;

  // Grade mapping:
  let grade = '不合格';
  let badgeColor = 'bg-rose-100 text-rose-800 border-rose-300';
  let medalIcon = '❌';

  if (gatesPassed) {
    if (totalRS >= 79) {
      grade = '💎 鑽石級 (Diamond)';
      badgeColor = 'bg-cyan-100 text-cyan-900 border-cyan-400 font-bold';
      medalIcon = '💎';
    } else if (totalRS >= 66) {
      grade = '🥇 黃金級 (Gold)';
      badgeColor = 'bg-amber-100 text-amber-900 border-amber-400 font-bold';
      medalIcon = '🥇';
    } else if (totalRS >= 58) {
      grade = '🥈 銀級 (Silver)';
      badgeColor = 'bg-slate-200 text-slate-800 border-slate-400 font-semibold';
      medalIcon = '🥈';
    } else if (totalRS >= 50) {
      grade = '🥉 銅級 (Bronze)';
      badgeColor = 'bg-orange-100 text-orange-900 border-orange-400 font-semibold';
      medalIcon = '🥉';
    } else {
      grade = '✅ 合格級 (Certified)';
      badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
      medalIcon = '🌱';
    }
  }

  const applyPreset = (preset: 'basic' | 'silver' | 'diamond') => {
    if (preset === 'basic') {
      setRs1(5);
      setRs2(4);
      setScoreEE(60); // RS3 = 6
      setCfr(10); // RS4 = 4.25
      setIe(68); // RS5 = 3.99
      setWi(3.7); // RS6 = 3.63 (passes gate 3.5)
    } else if (preset === 'silver') {
      setRs1(9);
      setRs2(6);
      setScoreEE(78); // RS3 = 16.8
      setCfr(22); // RS4 = 9.35
      setIe(76); // RS5 = 6.48
      setWi(5.5); // RS6 = 5.88
    } else {
      setRs1(13.5);
      setRs2(8.5);
      setScoreEE(95); // RS3 = 27
      setCfr(35); // RS4 = 14.88
      setIe(95); // RS5 = 12.39
      setWi(8.5); // RS6 = 9.63
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-emerald-100 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-600 text-white rounded-xl shadow-xs">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                EEWH-RS 2026 綠建築指標試算機
              </h2>
              <p className="text-xs text-slate-500">
                依據手冊表 1.8 計分公式與表 1.9 分級界線即時模擬
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="關閉試算機"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset quick buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate-500">快速載入範本：</span>
          <button
            onClick={() => applyPreset('basic')}
            className="px-3 py-1 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            標準達標案 (合格級)
          </button>
          <button
            onClick={() => applyPreset('silver')}
            className="px-3 py-1 text-xs font-medium bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-lg transition-colors cursor-pointer"
          >
            優良住宅案 (銀級)
          </button>
          <button
            onClick={() => applyPreset('diamond')}
            className="px-3 py-1 text-xs font-medium bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            頂級近零碳好宅 (鑽石級)
          </button>
        </div>

        {/* Main Controls Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Ecology & Energy */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              生態範疇（上限 23 分）與節能範疇（上限 30 分）
            </h3>

            {/* RS1 生物多樣性 */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-700">
                  1. 生物多樣性指標 (RS1)
                </label>
                <span className="text-xs font-bold text-emerald-700">{rs1} 分 / 14分</span>
              </div>
              <input
                type="range"
                min="0"
                max="14"
                step="0.5"
                value={rs1}
                onChange={(e) => setRs1(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                綠化固碳量＋生態小島/混合密林＋鳥類防撞開窗
              </p>
            </div>

            {/* RS2 基地保水 */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-700">
                  2. 基地保水指標 (RS2)
                </label>
                <span className="text-xs font-bold text-emerald-700">{rs2} 分 / 9分</span>
              </div>
              <input
                type="range"
                min="0"
                max="9"
                step="0.5"
                value={rs2}
                onChange={(e) => setRs2(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                低建蔽率＋透水鋪面＋草溝滲透雨水池
              </p>
            </div>

            {/* RS3 建築能效 (門檻指標) */}
            <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 text-[10px] bg-amber-500 text-white rounded font-bold">
                    門檻
                  </span>
                  <label className="text-xs font-semibold text-slate-800">
                    3. 建築能效指標 (RS3)
                  </label>
                </div>
                <span className="text-xs font-bold text-amber-800">
                  RS3: {calcRs3} 分 / 30分
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs text-slate-600">
                  能效得分 SCORE<sub>EE</sub>:
                </span>
                <input
                  type="range"
                  min="40"
                  max="100"
                  step="1"
                  value={scoreEE}
                  onChange={(e) => setScoreEE(parseInt(e.target.value))}
                  className="flex-1 accent-amber-600 cursor-pointer"
                />
                <span className="text-xs font-mono font-bold text-amber-900 min-w-9">
                  {scoreEE}分
                </span>
              </div>
              <div className="mt-2 text-[11px] flex items-center justify-between">
                <span className="text-slate-500">
                  公式: 0.6 × ({scoreEE} - 50)
                </span>
                {energyPass ? (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 門檻通過 (SCORE≧50)
                  </span>
                ) : (
                  <span className="text-rose-700 font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> 門檻未過！無法認證
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Waste Reduction & Health */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              減廢範疇（上限 17 分）與健康範疇（上限 30 分）
            </h3>

            {/* RS4 低蘊含碳 */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-700">
                  4. 低蘊含碳指標 (RS4)
                </label>
                <span className="text-xs font-bold text-teal-700">
                  RS4: {calcRs4} 分 / 17分
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs text-slate-600">減碳率 CFR:</span>
                <input
                  type="range"
                  min="0"
                  max="40"
                  step="1"
                  value={cfr}
                  onChange={(e) => setCfr(parseInt(e.target.value))}
                  className="flex-1 accent-teal-600 cursor-pointer"
                />
                <span className="text-xs font-mono font-bold text-teal-900 min-w-9">
                  {cfr}%
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                公式: 0.425 × {cfr}%（低碳混凝土、免粉刷金屬模板、建築延壽）
              </p>
            </div>

            {/* RS5 室內環境 */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-700">
                  5. 室內環境指標 (RS5)
                </label>
                <span className="text-xs font-bold text-teal-700">
                  RS5: {calcRs5} 分 / 18分
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs text-slate-600">綜合評分 IE:</span>
                <input
                  type="range"
                  min="60"
                  max="105"
                  step="1"
                  value={ie}
                  onChange={(e) => setIe(parseInt(e.target.value))}
                  className="flex-1 accent-teal-600 cursor-pointer"
                />
                <span className="text-xs font-mono font-bold text-teal-900 min-w-9">
                  {ie}分
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                隔音20dB緩衝材＋採光NL＋當層排氣15分＋公用通風20分
              </p>
            </div>

            {/* RS6 水資源 (門檻指標) */}
            <div className="p-3.5 bg-sky-50/80 rounded-xl border border-sky-200">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 text-[10px] bg-sky-600 text-white rounded font-bold">
                    門檻
                  </span>
                  <label className="text-xs font-semibold text-slate-800">
                    6. 水資源指標 (RS6)
                  </label>
                </div>
                <span className="text-xs font-bold text-sky-800">
                  RS6: {calcRs6} 分 / 12分
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs text-slate-600">水資源指標 WI:</span>
                <input
                  type="range"
                  min="2.0"
                  max="10.0"
                  step="0.2"
                  value={wi}
                  onChange={(e) => setWi(parseFloat(e.target.value))}
                  className="flex-1 accent-sky-600 cursor-pointer"
                />
                <span className="text-xs font-mono font-bold text-sky-900 min-w-9">
                  {wi}
                </span>
              </div>
              <div className="mt-2 text-[11px] flex items-center justify-between">
                <span className="text-slate-500">
                  公式: 2.5 × (({wi} - 2)/2) + 1.5
                </span>
                {waterPass ? (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 門檻通過 (RS6≧3.5)
                  </span>
                ) : (
                  <span className="text-rose-700 font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> 門檻未過！未達3.5分
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Results Banner */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-3xl">{medalIcon}</div>
            <div>
              <div className="text-xs text-slate-400">總得分 RS (滿分100分)</div>
              <div className="text-3xl font-black text-emerald-400">
                {totalRS}{' '}
                <span className="text-xs text-slate-300 font-normal">分</span>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-700 hidden md:block" />
            <div>
              <div className="text-xs text-slate-400">評定等級結果</div>
              <div className={`px-3 py-1 rounded-lg border text-sm font-bold inline-block mt-0.5 ${badgeColor}`}>
                {grade}
              </div>
            </div>
          </div>

          <div className="text-xs text-right text-slate-300">
            {gatesPassed ? (
              <p className="text-emerald-300 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 inline" />
                兩大門檻（建築能效、水資源）全數合格！
              </p>
            ) : (
              <p className="text-rose-300 flex items-center gap-1">
                <AlertTriangle className="w-4 h-4 text-rose-400 inline" />
                門檻指標未合格，依規定不予核發綠建築標章！
              </p>
            )}
            <p className="text-[11px] text-slate-400 mt-1">
              分級門檻：合格&lt;50 ｜ 銅50 ｜ 銀58 ｜ 黃金66 ｜ 鑽石79+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
