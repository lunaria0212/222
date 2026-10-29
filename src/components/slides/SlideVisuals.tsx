import React, { useState } from 'react';
import {
  TreePine,
  Zap,
  Trash2,
  HeartPulse,
  Droplets,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  Leaf,
  Wind,
  Sun,
  Volume2,
  CheckCircle2,
  Globe2,
  Calendar,
  Building2,
  Home,
  Check,
  Flame,
  Gauge,
  Smile,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../../data/presentationData';
const greenCondo3d = '/src/assets/images/green_residential_render_1793252243793.jpg';
const timberClt3d = '/src/assets/images/low_carbon_timber_3d_1793252269974.jpg';
const energyCutaway3d = '/src/assets/images/energy_systems_3d_1793252284798.jpg';
const verticalForest3d = '/src/assets/images/vertical_forest_3d_1793252300653.jpg';
const magicSchool3d = '/src/assets/images/magic_school_ncku_1793255156410.jpg';
const ecoSponge3d = '/src/assets/images/eco_sponge_biodiversity_1793255171812.jpg';

// Slide 1: Cover
export const Slide01: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2">
      <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-xl shadow-xs">
            RS
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-800 tracking-wider">
              內政部建築研究所 · 2026 EDITION
            </div>
            <div className="text-sm font-semibold text-slate-700">
              綠建築評估手冊－住宿類（EEWH-RS）
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold rounded-lg shadow-2xs">
            🌟 2026 全新大改版
          </span>
          <span className="px-3 py-1 bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold rounded-lg shadow-2xs">
            ⚡ 三軌合一新架構
          </span>
        </div>
      </div>

      <div className="my-auto py-4 text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/80 text-emerald-900 rounded-full text-xs font-semibold">
          <Leaf className="w-4 h-4 text-emerald-600" />
          台灣綠建築 25 年歷史重大轉型 · 邁向 2050 淨零碳排
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          2026 新世代綠建築評估手冊
          <span className="block text-emerald-600 mt-1">住宿類 EEWH-RS 深度圖解</span>
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          20 分鐘帶你看懂：九大指標精簡為六大指標、建築能效 BERS、低蘊含碳 LEBR、
          集合住宅當層排氣與同層排水超實用福利！
        </p>

        {/* 3D Showcase Card in Cover */}
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/90 border border-emerald-200/90 shadow-xs text-left max-w-2xl mx-auto backdrop-blur-xs">
          <img
            src={greenCondo3d}
            alt="3D 綠建築示範模型"
            className="w-16 h-12 object-cover rounded-lg shadow-2xs border border-emerald-100 shrink-0"
          />
          <div className="text-xs">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <span>🏛️ 2026 EEWH-RS 示範住宅 3D 渲染圖</span>
              <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-bold">
                BERS 1+ 級
              </span>
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              立體挑空深陽台 · 屋頂雙面發電光電板 · 複層微氣候通風中庭（台北內湖示範基地）
            </div>
          </div>
        </div>

        {/* Dual Speaker Allocation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-left">
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 bg-emerald-600 text-white text-xs font-bold rounded-md">
                張玥（前半場 10 分鐘）
              </span>
              <span className="text-xs font-mono font-bold text-emerald-700">00:00 - 10:00</span>
            </div>
            <h4 className="font-bold text-slate-800 text-sm">宏觀戰略與架構升級</h4>
            <p className="text-xs text-slate-600 mt-1">
              ① 2050 淨零路徑 ｜ ② 台灣 EEWH 歷史 ｜ ③ 9大變6大 ｜ ④ 三軌合一 ｜ ⑤ 能效 BERS 核心
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-100/50 border border-teal-200 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 bg-teal-600 text-white text-xs font-bold rounded-md">
                郭邦翔（後半場 10 分鐘）
              </span>
              <span className="text-xs font-mono font-bold text-teal-700">10:00 - 20:00</span>
            </div>
            <h4 className="font-bold text-slate-800 text-sm">低碳實戰與健康居所</h4>
            <p className="text-xs text-slate-600 mt-1">
              ⑥ 低蘊含碳 LEBR ｜ ⑦ 高雄社宅案例 ｜ ⑧ 當層排氣與同層排水 ｜ ⑨ 菩薩寺創新加分 ｜ ⑩ 現場 Q&A
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
        <span>報告時間：約 20 分鐘（雙人各 10 分鐘）</span>
        <span>投影片共 20 頁 · 趣味圖表互動模式</span>
      </div>
    </div>
  );
};

// Slide 2: Net Zero Timeline
export const Slide02: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2030);

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-emerald-700">第 2 頁 · 時代背景與政策推動</span>
          <span className="text-xs font-mono text-slate-400">張玥 · 01:00 - 02:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          為什麼非改不可？全球沸騰與 2050 淨零路徑
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          依據國發會「臺灣 2050 淨零排放路徑」及歐盟 EPBD 2024 全生命週期 WLCA 管制趨勢
        </p>
      </div>

      {/* Interactive Timeline Staircase */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            onClick={() => setActiveStep(2030)}
            className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
              activeStep === 2030
                ? 'border-emerald-500 bg-emerald-50/80 shadow-md scale-102'
                : 'border-slate-200 bg-white hover:border-emerald-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-black text-emerald-800">2030 年</span>
              <span className="px-2 py-0.5 bg-emerald-200 text-emerald-800 text-[10px] font-bold rounded">
                公有領頭
              </span>
            </div>
            <div className="text-xs font-bold text-slate-800 mt-2">所有公有新建建築</div>
            <div className="text-sm font-black text-emerald-700 mt-0.5">達能效 1 級或近零碳 (1+)</div>
            <div className="mt-2 text-[11px] text-slate-500 leading-relaxed">
              公有辦公、服務類率先自 112 年納管，115 年全面達近零碳門檻！
            </div>
          </div>

          <div
            onClick={() => setActiveStep(2040)}
            className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
              activeStep === 2040
                ? 'border-teal-500 bg-teal-50/80 shadow-md scale-102'
                : 'border-slate-200 bg-white hover:border-teal-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-black text-teal-800">2040 年</span>
              <span className="px-2 py-0.5 bg-teal-200 text-teal-800 text-[10px] font-bold rounded">
                既有更新
              </span>
            </div>
            <div className="text-xs font-bold text-slate-800 mt-2">50% 既有建築物</div>
            <div className="text-sm font-black text-teal-700 mt-0.5">更新為能效 1 級或近零碳</div>
            <div className="mt-2 text-[11px] text-slate-500 leading-relaxed">
              結合 EEWH-EB&RN 既有建築改善手冊，啟動都市龐大建築庫能效翻新！
            </div>
          </div>

          <div
            onClick={() => setActiveStep(2050)}
            className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
              activeStep === 2050
                ? 'border-cyan-500 bg-cyan-50/80 shadow-md scale-102'
                : 'border-slate-200 bg-white hover:border-cyan-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-black text-cyan-800">2050 年</span>
              <span className="px-2 py-0.5 bg-cyan-200 text-cyan-800 text-[10px] font-bold rounded">
                全面淨零
              </span>
            </div>
            <div className="text-xs font-bold text-slate-800 mt-2">100% 新建 ＋ 85% 既有</div>
            <div className="text-sm font-black text-cyan-700 mt-0.5">全數達成近零碳建築目標</div>
            <div className="mt-2 text-[11px] text-slate-500 leading-relaxed">
              達成國家總體淨零排放路徑，全生命週期零碳排願景成真！
            </div>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="mt-4 p-3.5 bg-slate-900 text-white rounded-xl flex items-center gap-4 text-xs">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-emerald-400">歐盟最新 EPBD 2024 法令啟發：</span>
            過去僅管制開冷氣、開燈的「營運碳（Operational Carbon）」，現在必須全面同步管制建材開採製造的「低蘊含碳（Embodied Carbon）」，這就是全生命週期評估 WLCA！
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
        <span>💡 趣味筆記：建築不再只是遮風避雨，而是對抗氣候暖化的全球最前線碳堡壘！</span>
        <span className="font-semibold text-emerald-700">點擊上方年份可查看各階段任務</span>
      </div>
    </div>
  );
};

// Slide 3: Global Map & Taiwan Miracle
export const Slide03: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-emerald-700">第 3 頁 · 台灣綠建築的驕傲</span>
          <span className="text-xs font-mono text-slate-400">張玥 · 02:00 - 03:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          亞洲第一、全球第四！台灣 EEWH 的傲人歷史
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          1999 年創制以來，走過 25 年，累計審定通過突破 15,000 件！
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* World Timeline */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            世界四大開山鼻祖評估系統（按發表年份）
          </div>

          <div className="relative pl-6 space-y-3 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            <div className="relative flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <span className="absolute -left-6 top-3 w-3 h-3 rounded-full bg-slate-400" />
              <div>
                <span className="font-black text-slate-700">1990 英國 BREEAM</span>
                <span className="text-slate-500 ml-2">全球第一套綠建築評估法</span>
              </div>
              <span className="text-slate-400 font-mono">始祖</span>
            </div>

            <div className="relative flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <span className="absolute -left-6 top-3 w-3 h-3 rounded-full bg-slate-400" />
              <div>
                <span className="font-black text-slate-700">1996 美國 LEED</span>
                <span className="text-slate-500 ml-2">商業採購導向、國際知名度高</span>
              </div>
              <span className="text-slate-400 font-mono">美洲先鋒</span>
            </div>

            <div className="relative flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <span className="absolute -left-6 top-3 w-3 h-3 rounded-full bg-slate-400" />
              <div>
                <span className="font-black text-slate-700">1998 加拿大 GBTool</span>
                <span className="text-slate-500 ml-2">學術型多國環境分析</span>
              </div>
              <span className="text-slate-400 font-mono">研究導向</span>
            </div>

            {/* Taiwan EEWH Highlight */}
            <div className="relative flex items-center justify-between p-3.5 bg-gradient-to-r from-emerald-100 to-teal-50 rounded-xl border-2 border-emerald-500 shadow-sm text-xs">
              <span className="absolute -left-6 top-4 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-200" />
              <div>
                <div className="font-black text-emerald-950 text-sm flex items-center gap-1.5">
                  🇹🇼 1999 台灣 EEWH 系統
                  <span className="px-2 py-0.5 bg-emerald-700 text-white rounded text-[10px]">
                    亞洲第 1 · 全球第 4
                  </span>
                </div>
                <div className="text-emerald-800 text-[11px] mt-0.5">
                  首創針對「亞熱帶高溫高濕氣候」、被動節能優先、平價普及化
                </div>
              </div>
              <span className="font-black text-emerald-700 text-base">亞洲黑馬</span>
            </div>

            <div className="relative flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <span className="absolute -left-6 top-3 w-3 h-3 rounded-full bg-slate-400" />
              <div>
                <span className="font-black text-slate-700">2002 日本 CASBEE</span>
                <span className="text-slate-500 ml-2">日本綜合環境性能評估</span>
              </div>
              <span className="text-slate-400 font-mono">亞洲後續</span>
            </div>
          </div>
        </div>

        {/* Taiwan EEWH 3 Big Features & Magic School */}
        <div className="lg:col-span-5 space-y-2.5">
          {/* Magic School Image Showcase Card */}
          <div className="p-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-300 flex items-center gap-3 shadow-2xs">
            <img
              src={magicSchool3d}
              alt="成功大學綠色魔法學校"
              className="w-16 h-12 object-cover rounded-lg shadow-2xs border border-emerald-200 shrink-0"
            />
            <div className="text-xs">
              <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                <span>🏛️ 旗艦典範：成大綠色魔法學校</span>
                <span className="text-[10px] bg-emerald-700 text-white px-1.5 py-0.2 rounded font-bold">
                  鑽石級
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mt-0.5">
                自然浮力通風煙囪 · 階梯空中花園 · 亞熱帶被動設計世界最高分
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-white rounded-xl border border-emerald-200 shadow-xs">
            <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              堅持「綜合性能評估」非昂貴菜單採購
            </div>
            <p className="text-[11px] text-slate-600 mt-0.5">
              不走歐美鼓勵昂貴設備的商業採購陷阱，讓建築師能依基地自由搭配最經濟平價的被動設計！
            </p>
          </div>

          <div className="p-2.5 bg-emerald-800 text-white rounded-xl shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs text-emerald-300 font-medium">台灣累計審定通過</div>
              <div className="text-xl font-black text-white">15,000+ 件</div>
            </div>
            <span className="text-[10px] bg-emerald-700/80 border border-emerald-600 px-2 py-1 rounded text-emerald-100 max-w-[170px] text-right">
              綠建築標章與候選證書，高居全球密度最高！
            </span>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 趣味比喻：當國外在比誰裝的高科技冷氣貴時，台灣阿嬤說：「開窗通風、做好屋頂遮陽，才是真綠建築！」
      </div>
    </div>
  );
};

// Slide 4: 9 to 6 Indicators Transformation
export const Slide04: React.FC = () => {
  const [selectedChange, setSelectedChange] = useState<number>(1);

  const changes = [
    {
      id: 1,
      name: '日常節能 ➔ 建築能效指標',
      before: '日常節能指標（ENVLOAD、空調、照明分項加權）',
      after: '建築能效指標 (RS3，滿分 30 分，直連 BERS 系統)',
      reason: '全面改用單一量化碳排評估法 (R-BERSn)，消除了過去拼湊權重的盲區，直奔 1+ 到 7 級能效標準！',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      tag: '核心王牌',
    },
    {
      id: 2,
      name: 'CO2 減量 ＋ 廢棄物減量 ➔ 低蘊含碳指標',
      before: '二氧化碳減量指標 ＋ 廢棄物減量指標（舊雙指標）',
      after: '低蘊含碳指標 (RS4，滿分 17 分，直連 LEBR 系統)',
      reason: '呼應國際 WLCA 全生命週期規範，整併為科學量化之建材減碳率 CFR，主抓水泥、鋼筋、施工與拆除廢棄！',
      icon: <Trash2 className="w-5 h-5 text-teal-500" />,
      tag: '低碳革新',
    },
    {
      id: 3,
      name: '綠化量 ＋ 生物多樣性 ➔ 生物多樣性指標',
      before: '綠化量指標（總固碳） ＋ 生物多樣性指標（舊獨立分項）',
      after: '生物多樣性指標 (RS1，滿分 14 分)',
      reason: '以原綠化固碳量為基本分，加上生態小島、密林、以及新納入的「鳥類防窗殺」加減分，合而為一！',
      icon: <TreePine className="w-5 h-5 text-emerald-500" />,
      tag: '生態整合',
    },
    {
      id: 4,
      name: '刪除污水垃圾指標 ➔ 整併入水資源指標',
      before: '污水垃圾改善指標（常被視為例行文書、鑑別度鈍化）',
      after: '移至水資源指標查核 (RS6，滿分由 8 分提升至 12 分)',
      reason: '垃圾分類已成全民習慣無鑑別度；污水接管查核則直接轉入水資源指標（佔 2 分），門檻提升至 3.5 分！',
      icon: <Droplets className="w-5 h-5 text-sky-500" />,
      tag: '精簡去蕪',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-emerald-700">第 4 頁 · 體系大瘦身</span>
          <span className="text-xs font-mono text-slate-400">張玥 · 03:00 - 04:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          業界最狂瘦身操！「九大指標」精簡為「六大指標」
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          排除鈍化重複項目，與國際 BERS、LEBR 無縫接軌，四大範疇依舊堅挺！
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Left selector */}
        <div className="md:col-span-5 space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            點選查看 4 大整併亮點：
          </div>
          {changes.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedChange(c.id)}
              className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                selectedChange === c.id
                  ? 'border-emerald-600 bg-emerald-50/80 shadow-xs ring-1 ring-emerald-400'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white shadow-2xs">{c.icon}</div>
                <div className="text-xs font-bold text-slate-800">{c.name}</div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                {c.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Right Detail Card */}
        <div className="md:col-span-7">
          {(() => {
            const current = changes.find((c) => c.id === selectedChange)!;
            return (
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold px-2.5 py-1 bg-emerald-600 text-white rounded-md">
                      {current.name}
                    </span>
                    <span className="text-xs font-medium text-slate-400">變更理由詳解</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 my-4">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <div className="text-[11px] font-bold text-slate-400 uppercase">2023 舊版做法</div>
                      <div className="font-semibold text-slate-700 mt-1">{current.before}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                      <div className="text-[11px] font-bold text-emerald-600 uppercase">2026 新版進化</div>
                      <div className="font-bold text-emerald-900 mt-1">{current.after}</div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 leading-relaxed bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/60">
                    <span className="font-bold text-amber-900 block mb-1">🎯 為什麼這樣改？</span>
                    {current.reason}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span>四大範疇依然保持：生態 · 節能 · 減廢 · 健康</span>
                  <span className="text-emerald-700 font-semibold">提升鑑別度 ＆ 簡化送審文件</span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 趣味比喻：就像把皮夾裡 9 張零碎折價券，整合成 6 張高回饋的黑卡，出門更輕盈、權益更超值！
      </div>
    </div>
  );
};

// Slide 5: Three Tracks in One (三軌合一)
export const Slide05: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-emerald-700">第 5 頁 · 史詩級合體</span>
          <span className="text-xs font-mono text-slate-400">張玥 · 04:00 - 05:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          重磅亮點：「三軌合一」近零碳建築神級架構
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          一次申請，三項標章標示全包：綠建築標章 ＋ 建築能效標示 (BERS) ＋ 低碳建築標示 (LEBR)
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Track 1 */}
        <div className="p-4 rounded-xl bg-gradient-to-b from-emerald-50 to-emerald-100/40 border border-emerald-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-sm mb-2">
              1
            </div>
            <h3 className="font-bold text-emerald-950 text-base">綠建築標章</h3>
            <p className="text-xs text-emerald-700 font-medium">EEWH 綜合體系</p>
            <div className="mt-3 text-xs text-slate-600 space-y-1.5">
              <p>• 四大範疇、六大指標總和</p>
              <p>• 檢驗生態、保水、健康、水資源</p>
              <p>• 全國通行超過 25 年的權威品牌</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-200 text-[11px] font-bold text-emerald-800">
            底層基盤：環境品質全面把關
          </div>
        </div>

        {/* Track 2 */}
        <div className="p-4 rounded-xl bg-gradient-to-b from-amber-50 to-amber-100/40 border border-amber-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-black text-sm mb-2">
              2
            </div>
            <h3 className="font-bold text-amber-950 text-base">建築能效標示</h3>
            <p className="text-xs text-amber-700 font-medium">BERS 營運碳 (OC)</p>
            <div className="mt-3 text-xs text-slate-600 space-y-1.5">
              <p>• 評估建築日常營運耗電與能效</p>
              <p>• 分級標示：1+ 級 (近零碳) 至 7 級</p>
              <p>• 佔建築全生命週期碳排 70%！</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-[11px] font-bold text-amber-800">
            動態能耗：消滅日常吃電怪獸
          </div>
        </div>

        {/* Track 3 */}
        <div className="p-4 rounded-xl bg-gradient-to-b from-teal-50 to-teal-100/40 border border-teal-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black text-sm mb-2">
              3
            </div>
            <h3 className="font-bold text-teal-950 text-base">低碳建築標示</h3>
            <p className="text-xs text-teal-700 font-medium">LEBR 蘊含碳 (EC)</p>
            <div className="mt-3 text-xs text-slate-600 space-y-1.5">
              <p>• 評估建材生產、施工、拆除碳排</p>
              <p>• 分級標示：1+ 級 (超低碳) 至 6 級</p>
              <p>• 佔建築生命週期碳排 30%！</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-teal-200 text-[11px] font-bold text-teal-800">
            靜態碳排：掌握水泥鋼筋碳足跡
          </div>
        </div>
      </div>

      {/* Synergistic WLCA Formula Box */}
      <div className="p-3 bg-slate-900 text-white rounded-xl flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <span className="font-bold text-emerald-400">建築全生命週期碳排 WLCA 公式：</span>
            <span> WLCA = 營運碳排 OC (BERS 管制) ＋ 蘊含碳排 EC (LEBR 管制)</span>
          </div>
        </div>
        <span className="text-[11px] text-slate-300 hidden md:block">
          一次審查免重複送件，對接 ESG 永續融資利器！
        </span>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 趣味比喻：一兼二顧，摸蜊仔兼洗褲！以前要跑三趟公文，現在一次送審，三張國家級王牌證書一次到齊！
      </div>
    </div>
  );
};

// Slide 6: EEWH Family Matrix & RS Focus
export const Slide06: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-emerald-700">第 6 頁 · 綠建築家族體系</span>
          <span className="text-xs font-mono text-slate-400">張玥 · 05:00 - 06:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          EEWH 家族大閱兵：住宿類 (RS) 的精準定位
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          六大專用版本各司其職，EEWH-RS 專門守護每天睡覺生活的好宅
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div className="font-bold text-slate-800">EEWH-BC 基本型</div>
          <div className="text-[11px] text-slate-500 mt-1">辦公室、商場、學校、文教等最通用的母平台。</div>
        </div>

        {/* Featured RS */}
        <div className="p-3 rounded-xl bg-emerald-100/80 border-2 border-emerald-600 text-xs shadow-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-emerald-950">EEWH-RS 住宿類 ⭐</span>
            <span className="text-[10px] bg-emerald-700 text-white px-1.5 py-0.5 rounded font-bold">
              本手冊主角
            </span>
          </div>
          <div className="text-[11px] text-emerald-900 mt-1 leading-snug">
            專為特定人常或短期住宿之建築物（H1宿舍、H2住宅）量身定作！特別加計當層排氣與同層排水。
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div className="font-bold text-slate-800">EEWH-GF 廠房類</div>
          <div className="text-[11px] text-slate-500 mt-1">以一般室內作業為主的工廠建築物，重視製程與通風。</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div className="font-bold text-slate-800">EEWH-EB&RN 既有及改善</div>
          <div className="text-[11px] text-slate-500 mt-1">取得使用執照 5 年以上老建築更新改造，企業 ESG 必備。</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div className="font-bold text-slate-800">EEWH-EC 社區類</div>
          <div className="text-[11px] text-slate-500 mt-1">任何合法新建或既有之複合建築群、微型生態城市。</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div className="font-bold text-slate-800">EEWH-OS 境外版</div>
          <div className="text-[11px] text-slate-500 mt-1">適用境外台商建築，採用當地氣候基準法行銷全球。</div>
        </div>
      </div>

      <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-1">
        <span className="font-bold text-emerald-900">🏢 複合用途建築物怎麼判定手冊？</span>
        <p className="text-slate-600">
          原則以「樓地板面積最大」的類型為主類建築；複合大樓中若有 1,000 m² 以下的非主類建築物，直接歸入主類建築評估，省去繁瑣切分！
        </p>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 趣味比喻：就像量身訂做衣服，辦公大樓穿 BC 西裝，工廠穿 GF 工作服，我們每天睡覺的家，就要穿舒舒服服的 RS！
      </div>
    </div>
  );
};

// Slide 7: Score Distribution (100-point breakdown)
export const Slide07: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-emerald-700">第 7 頁 · 配分大密碼</span>
          <span className="text-xs font-mono text-slate-400">張玥 · 06:00 - 07:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          EEWH-RS 滿分 100 分大解密：權重怎麼分？
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          四大範疇配分：生態 23 分 · 節能 30 分 · 減廢 17 分 · 健康 30 分
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Visual Bar / Category Display */}
        <div className="md:col-span-7 space-y-3">
          {/* Ecology */}
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-emerald-900">🌿 生態範疇（Ecology）</span>
              <span className="font-black text-emerald-800">23 分</span>
            </div>
            <div className="w-full bg-emerald-200/60 rounded-full h-2.5 mb-2 overflow-hidden flex">
              <div className="bg-emerald-600 h-full" style={{ width: '60.8%' }} title="生物多樣性 14分" />
              <div className="bg-emerald-400 h-full" style={{ width: '39.2%' }} title="基地保水 9分" />
            </div>
            <div className="flex justify-between text-[11px] text-slate-600">
              <span>• 生物多樣性指標：14 分</span>
              <span>• 基地保水指標：9 分</span>
            </div>
          </div>

          {/* Energy */}
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-amber-900">⚡ 節能範疇（Energy Saving）</span>
                <span className="text-[10px] bg-amber-600 text-white px-1.5 rounded font-bold">
                  門檻指標
                </span>
              </div>
              <span className="font-black text-amber-800">30 分</span>
            </div>
            <div className="w-full bg-amber-200/60 rounded-full h-2.5 mb-2 overflow-hidden">
              <div className="bg-amber-500 h-full w-full" />
            </div>
            <div className="text-[11px] text-slate-600">
              • 建築能效指標 (RS3)：30 分（全場單項最高分！佔全生命週期碳排 70%）
            </div>
          </div>

          {/* Waste */}
          <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-teal-900">♻️ 減廢範疇（Waste Reduction）</span>
              <span className="font-black text-teal-800">17 分</span>
            </div>
            <div className="w-full bg-teal-200/60 rounded-full h-2.5 mb-2 overflow-hidden">
              <div className="bg-teal-600 h-full w-full" />
            </div>
            <div className="text-[11px] text-slate-600">
              • 低蘊含碳指標 (RS4)：17 分（建材水泥鋼筋、低碳工法與延壽）
            </div>
          </div>

          {/* Health */}
          <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sky-900">❤️ 健康範疇（Health）</span>
                <span className="text-[10px] bg-sky-600 text-white px-1.5 rounded font-bold">
                  含水門檻
                </span>
              </div>
              <span className="font-black text-sky-800">30 分</span>
            </div>
            <div className="w-full bg-sky-200/60 rounded-full h-2.5 mb-2 overflow-hidden flex">
              <div className="bg-sky-600 h-full" style={{ width: '60%' }} title="室內環境 18分" />
              <div className="bg-sky-400 h-full" style={{ width: '40%' }} title="水資源 12分" />
            </div>
            <div className="flex justify-between text-[11px] text-slate-600">
              <span>• 室內環境指標：18 分</span>
              <span>• 水資源指標：12 分 (需≧3.5)</span>
            </div>
          </div>
        </div>

        {/* BC vs RS Differentiation Comparison */}
        <div className="md:col-span-5 p-4 bg-slate-900 text-white rounded-2xl text-xs space-y-3">
          <div className="text-amber-400 font-bold flex items-center gap-1">
            <Award className="w-4 h-4" />
            為什麼 RS 採用「差異化配分」？
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            基本型 BC 版的能效是 34 分，而住宿類 RS 版因住宅生活型態、設備可控度不同，特別將 4 分移撥給健康範疇：
          </p>
          <div className="space-y-1.5 bg-slate-800 p-2.5 rounded-lg border border-slate-700 text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-400">室內環境指標：</span>
              <span className="text-emerald-400 font-bold">BC 15分 ➔ RS 18分 (+3)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">水資源指標：</span>
              <span className="text-emerald-400 font-bold">BC 10分 ➔ RS 12分 (+2)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">建築能效指標：</span>
              <span className="text-amber-400 font-bold">BC 34分 ➔ RS 30分 (-4)</span>
            </div>
          </div>
          <p className="text-slate-400 text-[10px]">
            更加貼近住宅安寧（隔音）、防疫（當層排氣）、省水與長者健康生活！
          </p>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 趣味比喻：節能與健康各佔 30 分，雙拳出擊！蓋一棟好房子，省電顧荷包、健康顧身體，兩手都要抓！
      </div>
    </div>
  );
};

// Slide 8: Mandatory Threshold Gates
export const Slide08: React.FC = () => {
  const [energyScore, setEnergyScore] = useState<number>(65);
  const [waterScore, setWaterScore] = useState<number>(4.0);

  const energyPass = energyScore >= 50;
  const waterPass = waterScore >= 3.5;
  const certified = energyPass && waterPass;

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-rose-700">第 8 頁 · 生死防線</span>
          <span className="text-xs font-mono text-slate-400">張玥 · 07:00 - 08:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          兩大「絕對門檻指標」：沒過就直接出局！
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          在 EEWH 系統中，其他四項沒得分只是分數低，但這兩大守門神沒過＝零認證！
        </p>
      </div>

      {/* Two Gates Cards */}
      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Gate 1: Energy */}
        <div className="p-4 rounded-2xl bg-amber-50/80 border-2 border-amber-300 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 bg-amber-600 text-white text-xs font-bold rounded-md">
                生死門檻 ①
              </span>
              <span className="text-xs font-bold text-amber-900">建築能效指標 (RS3)</span>
            </div>

            <div className="mt-3 space-y-2 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-amber-200">
                <span className="font-bold text-slate-800 block mb-1">外殼節能三大基準底線：</span>
                <p className="text-slate-600 text-[11px]">• 屋頂平均熱傳透率 Uar &lt; 0.8 W/(m²·K)</p>
                <p className="text-slate-600 text-[11px]">• 天窗日射透過率 HWs &lt; HWsc 基準值</p>
                <p className="text-slate-600 text-[11px]">• 外殼玻璃可見光反射率 Rvi &lt; 0.2</p>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-amber-200">
                <span className="font-bold text-slate-800 block mb-1">能效分數底線：</span>
                <p className="text-amber-800 font-bold text-[11px]">
                  能效得分 SCORE<sub>EE</sub> 必須 ≧ 50 分（即系統得分 RS3 &gt; 0 分）
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-amber-200 flex items-center justify-between text-xs">
            <span className="text-slate-600">模擬能效 SCORE<sub>EE</sub>:</span>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="30"
                max="90"
                value={energyScore}
                onChange={(e) => setEnergyScore(parseInt(e.target.value))}
                className="w-24 accent-amber-600 cursor-pointer"
              />
              <span className={`font-bold ${energyPass ? 'text-emerald-700' : 'text-rose-600'}`}>
                {energyScore}分 ({energyPass ? '合格' : '不合格'})
              </span>
            </div>
          </div>
        </div>

        {/* Gate 2: Water */}
        <div className="p-4 rounded-2xl bg-sky-50/80 border-2 border-sky-300 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 bg-sky-600 text-white text-xs font-bold rounded-md">
                生死門檻 ②
              </span>
              <span className="text-xs font-bold text-sky-900">水資源指標 (RS6)</span>
            </div>

            <div className="mt-3 space-y-2 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-sky-200">
                <span className="font-bold text-slate-800 block mb-1">最低分數硬性規定：</span>
                <p className="text-sky-900 font-black text-sm">
                  系統得分 RS6 必須 ≧ 3.5 分！
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  （2026 版納入污水設施查核 2 分，門檻由過去 1.5 分提高至 3.5 分）
                </p>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-sky-200">
                <span className="font-bold text-slate-800 block mb-1">過關秘訣組合包：</span>
                <p className="text-slate-600 text-[11px]">
                  全面採用金級省水馬桶 (+3分) ＋ 污水管確實接管 (+2分) ＋ 淋浴代替浴缸 (+1分) ＝ 輕鬆衝過 3.5 分！
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-sky-200 flex items-center justify-between text-xs">
            <span className="text-slate-600">模擬水資源 RS6:</span>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="1.0"
                max="8.0"
                step="0.5"
                value={waterScore}
                onChange={(e) => setWaterScore(parseFloat(e.target.value))}
                className="w-24 accent-sky-600 cursor-pointer"
              />
              <span className={`font-bold ${waterPass ? 'text-emerald-700' : 'text-rose-600'}`}>
                {waterScore}分 ({waterPass ? '合格' : '不合格'})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Simulator Verdict */}
      <div className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
        certified ? 'bg-emerald-100/80 border-emerald-300 text-emerald-950' : 'bg-rose-100/80 border-rose-300 text-rose-950'
      }`}>
        <div className="flex items-center gap-2 font-bold">
          {certified ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <ShieldAlert className="w-5 h-5 text-rose-600" />}
          門檻判定結果：{certified ? '✅ 雙門檻全數通過！具備申請綠建築標章資格！' : '❌ 門檻未過！依手冊規定無法核發綠建築標章！'}
        </div>
        <span className="text-[11px] text-slate-500">（滑動上方拉桿可即時模擬）</span>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 趣味比喻：就像大學畢業門檻，體育跟英文沒過，就算主修考 100 分也拿不到畢業證書！
      </div>
    </div>
  );
};

// Slide 9: Ecology Category (Biodiversity & Water Retention)
export const Slide09: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-emerald-700">第 9 頁 · 指標一＆二【生態範疇】</span>
          <span className="text-xs font-mono text-slate-400">張玥 · 08:00 - 09:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          生態雙雄：生物多樣性（14分）＋ 基地保水（9分）
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          打造會呼吸的海綿社區，2026 版更首度納入「鳥類防窗殺」友善設計！
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Biodiversity */}
        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
              <TreePine className="w-4 h-4 text-emerald-600" />
              指標一：生物多樣性指標 (RS1，上限14分)
            </h3>
            <span className="text-xs font-bold text-emerald-800">14 分</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-white rounded-lg border border-emerald-100">
              <span className="font-bold text-slate-800">🌳 基本綠化固碳策略：</span>
              <p className="text-slate-600 text-[11px] mt-0.5">
                • 儘量縮小建蔽率，爭取綠地面積 &gt; 15%
              </p>
              <p className="text-slate-600 text-[11px]">
                • 種植喬木、複層原生種、誘鳥誘蝶植物
              </p>
            </div>

            {/* Bird safety highlight */}
            <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-1 text-amber-900 font-bold">
                <span>🕊️ 2026 重磅新規：防鳥類窗殺設計！</span>
              </div>
              <p className="text-slate-600 text-[11px] mt-1 leading-snug">
                地面高度 1m ~ 12m 範圍之建築玻璃開窗、女兒牆、天橋，盡量採用霧面、點陣圖案、金屬網或外隔柵，防止鳥類誤撞傷亡！
              </p>
            </div>

            <div className="p-2 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-500">
              公式：RS1 = UM × 10.6 ((TCO2 - TCO2c)/TCO2c) + 1.5 + ΣBDi
            </div>
          </div>
        </div>

        {/* Base Water Retention */}
        <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-cyan-900 text-sm flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-cyan-600" />
              指標二：基地保水指標 (RS2，上限9分)
            </h3>
            <span className="text-xs font-bold text-cyan-800">9 分</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-white rounded-lg border border-cyan-100">
              <span className="font-bold text-slate-800">🌊 海綿城市工法：</span>
              <p className="text-slate-600 text-[11px] mt-0.5">• 車道、步道、中庭廣場全面透水鋪面</p>
              <p className="text-slate-600 text-[11px]">• 排水路維持生態草溝、滲透管溝</p>
              <p className="text-slate-600 text-[11px]">• 避免地下室 100% 挖滿，保留原生滲透層</p>
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-cyan-100">
              <span className="font-bold text-slate-800">💧 透水不良黏土層救星：</span>
              <p className="text-slate-600 text-[11px] mt-0.5">
                • 屋頂或陽台設計良質壤土人工花圃
              </p>
              <p className="text-slate-600 text-[11px]">
                • 球場/中庭地下埋設組合式蓄水框架或礫石層
              </p>
            </div>

            <div className="p-2 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-500">
              公式：RS2 = 4.0 × ((λ - λc) / λc) + 1.5 ｜ (0.0 ≦ RS2 ≦ 9.0)
            </div>
          </div>
        </div>
      </div>

      {/* 3D Showcase Card in Slide 9 */}
      <div className="p-2 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-xl border border-emerald-300 flex items-center gap-3 shadow-2xs my-1">
        <img
          src={ecoSponge3d}
          alt="生態海綿與防鳥窗殺示範社區"
          className="w-14 h-11 object-cover rounded-lg shadow-2xs border border-emerald-200 shrink-0"
        />
        <div className="text-xs">
          <div className="font-bold text-emerald-950 flex items-center gap-1.5">
            <span>🏛️ 2026 生態範疇 3D 示範社區</span>
            <span className="text-[10px] bg-teal-700 text-white px-1.5 py-0.2 rounded font-bold">
              RS1+RS2 典範
            </span>
          </div>
          <div className="text-[11px] text-slate-600 mt-0.5">
            防鳥窗殺 5×10cm 點陣印花玻璃 · 全區連鎖透水磚海綿鋪面 · 原生水生花園與誘蝶陽台
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 趣味比喻：地上給鳥兒留安全通道，地下給雨水留回家之路！讓你的家像熱帶雨林一樣充滿活力！
      </div>
    </div>
  );
};

// Slide 10: Energy Category (R-BERSn) & Speaker Handover
export const Slide10: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-amber-700">第 10 頁 · 張玥 壓軸 · 能效顛峰</span>
          <span className="text-xs font-mono text-slate-400">張玥 · 09:00 - 10:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          指標三【節能範疇】：R-BERSn 能效 1+ 級封王！
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          滿分 30 分 · 佔建築全生命週期碳排 70%！住宅 4 大設備 ＋ 3 大公設節能心法
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* R-BERSn Level Scale */}
        <div className="md:col-span-5 p-4 bg-slate-900 text-white rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400">R-BERSn 能效等級</span>
              <span className="text-[10px] text-slate-400">新建住宅能效標示</span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="p-2 rounded-lg bg-emerald-600/90 text-white font-bold flex justify-between items-center shadow-xs">
                <span>⭐ 1+ 級 (近零碳建築)</span>
                <span className="font-mono text-xs">90~100 分</span>
              </div>
              <div className="p-1.5 rounded-lg bg-emerald-800/80 text-emerald-100 flex justify-between items-center text-[11px]">
                <span>1 級</span>
                <span className="font-mono">80~&lt;90 分</span>
              </div>
              <div className="p-1.5 rounded-lg bg-teal-800/80 text-teal-100 flex justify-between items-center text-[11px]">
                <span>2 級</span>
                <span className="font-mono">70~&lt;80 分</span>
              </div>
              <div className="p-1.5 rounded-lg bg-cyan-900/80 text-cyan-100 flex justify-between items-center text-[11px]">
                <span>3 級</span>
                <span className="font-mono">60~&lt;70 分</span>
              </div>
              <div className="p-1.5 rounded-lg bg-amber-900/60 text-amber-200 flex justify-between items-center text-[11px]">
                <span>4 級（基準門檻）</span>
                <span className="font-mono">50~&lt;60 分</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-700 text-[11px] text-amber-300">
            換算得分：RS3 = 0.6 × (SCORE<sub>EE</sub> - 50.0) ｜ 滿分 30 分
          </div>
        </div>

        {/* 4+3 Energy Saving Tactics */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1.5">
              <Home className="w-4 h-4 text-emerald-600" />
              住宅專用「四大固定設備」節能要訣：
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
              <div className="p-1.5 bg-slate-50 rounded">① 一級能效變頻冷氣</div>
              <div className="p-1.5 bg-slate-50 rounded">② 全面 LED 照度適中</div>
              <div className="p-1.5 bg-slate-50 rounded">③ 一級瓦斯爐或 IH 爐</div>
              <div className="p-1.5 bg-slate-50 rounded">④ 一級熱水器/熱泵管路保溫</div>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1.5">
              <Building2 className="w-4 h-4 text-teal-600" />
              集合住宅「三大公設機械設備」節能要訣：
            </div>
            <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-600 text-center">
              <div className="p-1.5 bg-slate-50 rounded font-medium">永磁變頻電梯</div>
              <div className="p-1.5 bg-slate-50 rounded font-medium">地下室 CO 變頻排風</div>
              <div className="p-1.5 bg-slate-50 rounded font-medium">適當揚程揚水泵</div>
            </div>
          </div>

          {/* Handover Notice Card */}
          <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤝</span>
              <div>
                <div className="text-xs font-bold">張玥 完成前半場 10 分鐘！</div>
                <div className="text-[11px] text-emerald-100">
                  接下來把麥克風交給郭邦翔，解密低蘊含碳與實戰案例！
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-emerald-200 shrink-0" />
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 張玥 結語：守住屋頂隔熱，配上一級節能家電，30 分入袋超簡單！接下來請郭邦翔 登場！
      </div>
    </div>
  );
};

// Slide 11: Speaker B Takeover & Embodied Carbon Iceberg
export const Slide11: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-teal-700">第 11 頁 · 郭邦翔 接棒登場</span>
          <span className="text-xs font-mono text-slate-400">郭邦翔 · 10:00 - 11:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          郭邦翔 登場！打擊建築「隱形排碳」
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          【減廢範疇】低蘊含碳指標 LEBR（17分）：建構全生命週期的碳冰山觀念
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Iceberg Graphic Card */}
        <div className="md:col-span-6 p-4 rounded-2xl bg-gradient-to-b from-sky-100 via-teal-100/60 to-slate-200 border border-teal-200 shadow-sm relative overflow-hidden">
          <div className="text-center font-bold text-slate-800 text-sm mb-3">
            🏔️ 建築全生命週期「碳排冰山理論」
          </div>

          <div className="space-y-3 relative z-10">
            {/* Water Surface / Operational Carbon */}
            <div className="p-3 bg-amber-100/90 rounded-xl border border-amber-300 text-xs">
              <div className="flex justify-between items-center font-bold text-amber-950">
                <span>🌊 水面上：營運碳（Operational Carbon）</span>
                <span className="text-amber-800 font-black">約 70%</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-1">
                住戶每天吹冷氣、開燈、洗澡熱水、電梯運轉的日常能源消耗（由 BERS 能效管制）
              </p>
            </div>

            {/* Sea Level Line */}
            <div className="border-b-2 border-dashed border-sky-400 text-center">
              <span className="bg-sky-200 text-sky-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                海平面分界線
              </span>
            </div>

            {/* Underwater / Embodied Carbon */}
            <div className="p-3 bg-teal-800 text-white rounded-xl shadow-xs text-xs">
              <div className="flex justify-between items-center font-bold">
                <span>🧊 水面下：蘊含碳（Embodied Carbon）</span>
                <span className="text-teal-300 font-black">約 30%</span>
              </div>
              <p className="text-[11px] text-teal-100 mt-1">
                開採砂石、煉鋼煉水泥、卡車運輸、施工現場吊裝、未來修繕與怪手拆除廢棄！（由 LEBR 管制）
              </p>
            </div>
          </div>
        </div>

        {/* LEBR Scale & Formula */}
        <div className="md:col-span-6 space-y-3">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <h4 className="font-bold text-slate-800 text-xs flex items-center gap-1.5 mb-2">
              <Layers className="w-4 h-4 text-teal-600" />
              低蘊含碳建築標示 (LEBR) 八等級尺規：
            </h4>
            <div className="grid grid-cols-4 gap-1.5 text-center text-[11px]">
              <div className="p-1.5 bg-emerald-600 text-white rounded font-bold">1+ 級 (超低碳)</div>
              <div className="p-1.5 bg-emerald-100 text-emerald-900 rounded font-semibold">1 級</div>
              <div className="p-1.5 bg-teal-100 text-teal-900 rounded font-semibold">2 級</div>
              <div className="p-1.5 bg-cyan-100 text-cyan-900 rounded font-semibold">3 級</div>
              <div className="p-1.5 bg-sky-100 text-sky-900 rounded font-semibold">4 級</div>
              <div className="p-1.5 bg-amber-100 text-amber-900 rounded font-semibold">5 級</div>
              <div className="p-1.5 bg-orange-100 text-orange-900 rounded font-semibold">6 級</div>
              <div className="p-1.5 bg-slate-100 text-slate-600 rounded">7 級</div>
            </div>
          </div>

          <div className="p-3.5 bg-teal-50 rounded-xl border border-teal-200 text-xs">
            <span className="font-bold text-teal-950 block mb-1">
              📐 RS 版低蘊含碳指標得分計算公式：
            </span>
            <div className="font-mono text-sm font-black text-teal-800">
              RS4 = 0.425 × 減碳率 CFR (%) ｜ (RS4 ≦ 17.0 分)
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              ⚠️ 注意：基本型 BC 版係數是 0.45 (上限18分)，住宿類 RS 版係數是 0.425 (上限17分)！
            </p>
          </div>

          {/* 3D Model Card */}
          <div className="p-2.5 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-xl border border-amber-200/90 flex items-center gap-3 shadow-2xs">
            <img
              src={timberClt3d}
              alt="CLT Timber Hybrid 3D Model"
              className="w-16 h-12 object-cover rounded-lg shadow-2xs border border-amber-200 shrink-0"
            />
            <div className="text-xs">
              <span className="font-bold text-amber-950">🏛️ 3D 低碳工法剖面典範：</span>
              <span className="text-slate-600 block text-[11px] mt-0.5">
                交叉層積木構造 (CLT) 預鑄工法，自帶固碳 850 kgCO₂e/m³，施工期大幅縮短 40%！
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 郭邦翔 趣味比喻：大家以前只看水面上的冷氣電費，但水面下巨大的水泥鋼筋才是隱形碳大戶！LEBR 把它抓出來曬太陽！
      </div>
    </div>
  );
};

// Slide 12: Kaohsiung 14F Social Housing LEBR Real Case
export const Slide12: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-teal-700">第 12 頁 · 手冊附錄真實案例</span>
          <span className="text-xs font-mono text-slate-400">郭邦翔 · 11:00 - 12:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          實戰拆解！高雄 14 樓社會住宅低碳大解密
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          左營 4 棟 RC 集合住宅（地上14層/地下3層）如何靠三大絕招榮獲「1+ 級」超低碳認證！
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Pie Chart / Carbon Breakdown */}
        <div className="md:col-span-5 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs text-xs space-y-2">
          <div className="font-bold text-slate-800 mb-2">
            📊 地上層資材碳排佔比（合計 21,615 噸 CO2e）
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div>
              <div className="flex justify-between font-bold text-teal-900">
                <span>1. 主結構體工程 (大宗!)</span>
                <span>59.84%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-teal-600 h-full" style={{ width: '59.84%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-700">
                <span>2. 不透光帷幕/一般外牆</span>
                <span>13.42%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-slate-500 h-full" style={{ width: '13.42%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-700">
                <span>3. 室內地坪工程</span>
                <span>10.66%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-slate-400 h-full" style={{ width: '10.66%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-700">
                <span>4. 外牆外裝飾（磁磚）</span>
                <span>7.16%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-slate-400 h-full" style={{ width: '7.16%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-700">
                <span>5. 內隔間＋門窗＋戶外地坪</span>
                <span>8.92%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-slate-300 h-full" style={{ width: '8.92%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Winning Strategies & Final Result */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs">
            <span className="font-bold text-emerald-900 block mb-1">
              🏆 高雄社宅過關三大王牌策略：
            </span>
            <ul className="space-y-1 text-slate-700 text-[11px]">
              <li>
                <b>① 全面採用低碳高性能混凝土：</b>
                水泥強度效益倍數 CSER 檢討，減碳比高達 0.91（直接省 9% 結構碳！）
              </li>
              <li>
                <b>② 外牆金屬模板施工：</b>免傳統粗底水泥砂漿粉刷，兼顧平整度與節省建材。
              </li>
              <li>
                <b>③ 營造廠榮獲工程金質獎：</b>
                獲得建築延壽優惠係數 LL = 0.05，生命週期碳排再折減！
              </li>
            </ul>
          </div>

          <div className="p-3.5 bg-slate-900 text-white rounded-xl flex items-center justify-between text-xs">
            <div>
              <div className="text-[11px] text-slate-400">最終減碳率 CFR</div>
              <div className="text-xl font-black text-emerald-400">20.51% 減碳</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-slate-400">LEBR 標示與得分</div>
              <div className="text-sm font-bold text-amber-400">
                榮獲 1+ 級 (超低碳) ｜ RS4 = 8.27 分
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 郭邦翔 趣味筆記：減重先瘦大肚子！結構佔 60% 碳排，換成低碳混凝土就像換成燕麥燕窩，身材馬上輕盈！
      </div>
    </div>
  );
};

// Slide 13: Indoor Environmental Quality (IE)
export const Slide13: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-teal-700">第 13 頁 · 指標五【健康範疇】</span>
          <span className="text-xs font-mono text-slate-400">郭邦翔 · 12:00 - 13:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          指標五【室內環境 IE】：音、光、風、材的四重奏
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          滿分由 12 分大幅調升至 18 分！守護人類 90% 待在室內的健康生活
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Acoustic */}
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <Volume2 className="w-5 h-5 text-indigo-600" />
            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-indigo-50 text-indigo-700 rounded">
              權重 0.2
            </span>
          </div>
          <h4 className="font-bold text-slate-800 text-xs">1. 音環境</h4>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            • RC 外牆 15cm 隔音<br />
            • 氣密窗 2 級 (Rw≧35dB)<br />
            • 15cm 樓板＋緩衝材減噪 ΔLw ≧ 20dB
          </p>
          <div className="text-[10px] text-indigo-800 font-semibold pt-1 border-t border-slate-100">
            告別樓上跑步跳繩！
          </div>
        </div>

        {/* Light */}
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <Sun className="w-5 h-5 text-amber-500" />
            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded">
              權重 0.2
            </span>
          </div>
          <h4 className="font-bold text-slate-800 text-xs">2. 光環境</h4>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            • 高透光清玻璃/Low-E<br />
            • 嚴禁高反射深色玻璃<br />
            • 居室自然採光 NL 指標<br />
            • 防眩光燈罩與格柵
          </p>
          <div className="text-[10px] text-amber-800 font-semibold pt-1 border-t border-slate-100">
            房間明亮、不刺眼！
          </div>
        </div>

        {/* Ventilation */}
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <Wind className="w-5 h-5 text-teal-600" />
            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-teal-50 text-teal-700 rounded">
              權重 0.3
            </span>
          </div>
          <h4 className="font-bold text-slate-800 text-xs">3. 通風環境</h4>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            • 對流通風潛力 VP 指標<br />
            • 建築深度維持 15m 內<br />
            • 一字型、L型、ㄇ型通風佳<br />
            • 空調加裝新鮮外氣系統
          </p>
          <div className="text-[10px] text-teal-800 font-semibold pt-1 border-t border-slate-100">
            空氣對流自然涼爽！
          </div>
        </div>

        {/* Green Materials */}
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <Leaf className="w-5 h-5 text-emerald-600" />
            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded">
              權重 0.3
            </span>
          </div>
          <h4 className="font-bold text-slate-800 text-xs">4. 綠建材裝修</h4>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            • 簡樸粉刷裝潢 (少即是多)<br />
            • 綠建材標章採用率 Rg<br />
            • 低甲醛、低 TVOC 塗料<br />
            • 獎勵國產木竹材
          </p>
          <div className="text-[10px] text-emerald-800 font-semibold pt-1 border-t border-slate-100">
            拒絕致癌裝潢毒氣！
          </div>
        </div>
      </div>

      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs flex justify-between items-center">
        <span className="text-slate-700">
          綜合計算：IE = Σ(Xi × Yi) ➔ 系統得分 RS5 = 18.67 × ((IE - 60.0) / 60.0) + 1.5 ｜ (最高 18 分)
        </span>
        <span className="font-bold text-emerald-800">私有住宅交屋未裝潢免評</span>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 郭邦翔 趣味比喻：靜如深山、亮如晨曦、風如草原、空氣清如森林，這才是現代人最渴望的夢想好宅！
      </div>
    </div>
  );
};

// Slide 14: Housing Bonus Cheats
export const Slide14: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-teal-700">第 14 頁 · 集合住宅專屬福利</span>
          <span className="text-xs font-mono text-slate-400">郭邦翔 · 13:00 - 14:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          集合住宅專屬福利！三大「加分神技」
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          非透天大樓才有的特殊優惠：當層排氣 ＋ 同層排水 ＋ 公用空間自然通風
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Cheat 1 */}
        <div className="p-4 rounded-xl bg-gradient-to-b from-emerald-50 to-white border border-emerald-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-xl mb-1">💨</div>
            <h3 className="font-bold text-slate-800 text-sm">1. 衛浴當層排氣</h3>
            <span className="text-xs font-bold text-emerald-700">室內環境直接給 15 分！</span>
            <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
              因應 COVID 防疫需求，每戶衛浴廢氣直接往外牆獨立排放，不共用垂直管道間！
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-emerald-100 text-[10px] text-emerald-800 font-semibold">
            🚫 杜絕樓下抽菸、樓上聞味噩夢！
          </div>
        </div>

        {/* Cheat 2 */}
        <div className="p-4 rounded-xl bg-gradient-to-b from-sky-50 to-white border border-sky-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-xl mb-1">🚿</div>
            <h3 className="font-bold text-slate-800 text-sm">2. 同層排水與整體衛浴</h3>
            <span className="text-xs font-bold text-sky-700">水資源直接各加 1.5 分！</span>
            <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
              排水管路做在自家降板樓層或牆前壁掛，不穿透樓下鄰居天花板！
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-sky-100 text-[10px] text-sky-800 font-semibold">
            🚫 漏水維修自家搞定，不再撕破臉！
          </div>
        </div>

        {/* Cheat 3 */}
        <div className="p-4 rounded-xl bg-gradient-to-b from-amber-50 to-white border border-amber-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-xl mb-1">🌿</div>
            <h3 className="font-bold text-slate-800 text-sm">3. 公用空間自然通風</h3>
            <span className="text-xs font-bold text-amber-700">室內環境再加最高 20 分！</span>
            <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
              電梯大廳、梯廳、樓梯間全面設計可開窗戶，促進自然對流，減少公共電費！
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-amber-100 text-[10px] text-amber-800 font-semibold">
            ⚡ 梯廳明亮涼爽，省下管理公電！
          </div>
        </div>
      </div>

      <div className="p-3 bg-slate-900 text-white rounded-xl flex items-center justify-between text-xs">
        <span className="text-emerald-300 font-bold">
          🎁 這三項合計可為大樓換算系統總分帶來最多 3 分的巨大紅利！
        </span>
        <span className="text-slate-400 text-[11px]">
          （註：透天住宅因無公設與管道間共用問題，此項認定為 0 分）
        </span>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 郭邦翔 趣味比喻：買大樓最怕鄰居吵、樓上漏水、廁所聞到菸味！手冊直接給這三大良心設計「開外掛加分」！
      </div>
    </div>
  );
};

// Slide 15: Water Savings (RS6 >= 3.5 threshold)
export const Slide15: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-sky-700">第 15 頁 · 指標六【水資源指標】</span>
          <span className="text-xs font-mono text-slate-400">郭邦翔 · 14:00 - 15:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          水資源保衛戰：一滴水當兩滴用的節水哲學
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          滿分 12 分 · 絕對門檻 RS6 ≧ 3.5 分！從金級馬桶到工地袪水監測
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Table of points */}
        <div className="md:col-span-7 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-2 text-xs">
          <div className="font-bold text-slate-800 border-b border-slate-100 pb-2">
            💧 水資源指標 (WI) 關鍵得分項目盤點：
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between p-1.5 bg-slate-50 rounded">
              <span>🚽 金級省水標章兩段式馬桶</span>
              <span className="font-bold text-emerald-700">+3.0 分（權重大）</span>
            </div>
            <div className="flex justify-between p-1.5 bg-slate-50 rounded">
              <span>🚿 浴室淋浴替代浴缸 ≧ 50%</span>
              <span className="font-bold text-emerald-700">+1.0 分</span>
            </div>
            <div className="flex justify-between p-1.5 bg-slate-50 rounded">
              <span>🌀 冷氣冷凝水回收再利用系統</span>
              <span className="font-bold text-emerald-700">+2.0 分</span>
            </div>
            <div className="flex justify-between p-1.5 bg-slate-50 rounded">
              <span>🚰 污水管確實接至下水道（新規）</span>
              <span className="font-bold text-emerald-700">+2.0 分</span>
            </div>
            <div className="flex justify-between p-1.5 bg-slate-50 rounded">
              <span>🏗️ 施工地下水袪水儲存再利用＋水錶</span>
              <span className="font-bold text-emerald-700">+1.0 ~ 2.0 分</span>
            </div>
            <div className="flex justify-between p-1.5 bg-rose-50 rounded text-rose-800">
              <span>⚠️ 私人按摩浴缸/豪華SPA超過50%</span>
              <span className="font-bold text-rose-600">-2.0 分 (倒扣懲罰)</span>
            </div>
          </div>
        </div>

        {/* Gate & Formula */}
        <div className="md:col-span-5 space-y-3">
          <div className="p-3.5 bg-sky-50 rounded-xl border-2 border-sky-300 text-xs">
            <span className="font-bold text-sky-950 block mb-1">
              🎯 門檻計算公式（手冊式 2-6.2）：
            </span>
            <div className="font-mono font-black text-sky-800 text-sm">
              RS6 = 2.50 × ((WI - 2.0) / 2.0) + 1.5
            </div>
            <div className="mt-2 text-rose-700 font-bold text-[11px] bg-rose-50 p-2 rounded border border-rose-200">
              🚨 警告：RS6 必須 ≧ 3.5 分！未達標者綠建築直接判定不合格！
            </div>
          </div>

          <div className="p-3 bg-slate-900 text-white rounded-xl text-xs space-y-1">
            <span className="text-amber-400 font-bold">為什麼台灣這麼在乎節水？</span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              台灣年降雨量雖高，但山高坡陡水流急，每人分配雨量僅世界平均 1/6，是聯合國認定的缺水地區！建築節水刻不容緩。
            </p>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 郭邦翔 趣味筆記：馬桶選對金級省水，污水管接好，門檻 3.5 輕鬆越過，還能幫管委會大省水費！
      </div>
    </div>
  );
};

// Slide 16: Innovative Design Case A: Taichung Pusa Temple
export const Slide16: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-teal-700">第 16 頁 · 綠建築創新設計實例 A</span>
          <span className="text-xs font-mono text-slate-400">郭邦翔 · 15:00 - 16:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          禪意與自然共生：台中「菩薩寺」的滿分奇蹟
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          手冊第 11 頁實例 A：完全零空調、全自然採光，超越傳統手冊公式的極致設計！
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Story description */}
        <div className="md:col-span-7 space-y-3 text-xs text-slate-700 leading-relaxed">
          <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span>🏛️ 建築檔案：台中大里菩薩寺（RC 清水模造）</span>
            </div>
            <p className="text-[11px] text-slate-600">
              基地面積 377 m²，總樓地板面積 634.71 m²，曾入圍台灣建築獎與台中都市空間設計大賞。
            </p>
          </div>

          <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1.5">
            <span className="font-bold text-emerald-900 text-xs block">✨ 震撼評審的四大非量化巧思：</span>
            <p className="text-[11px] text-slate-700">
              • <b>完全零空調：</b>利用空間開窗與內縮，塑造自然風通道，盛夏依然清涼安寧。
            </p>
            <p className="text-[11px] text-slate-700">
              • <b>整面玻璃引進老榆樹：</b>二樓大殿以老榆樹枝枒與四季天光為背景，人與自然深度對話。
            </p>
            <p className="text-[11px] text-slate-700">
              • <b>全碎石綠地庭院：</b>庭院全為天然碎石與植栽，雨水 100% 滲透涵養地下水。
            </p>
            <p className="text-[11px] text-slate-700">
              • <b>不假修飾的清水混凝土：</b>減少裝潢板材與化學塗料，實現極致低蘊含碳！
            </p>
          </div>
        </div>

        {/* Verdict Badge */}
        <div className="md:col-span-5 p-5 bg-slate-900 text-white rounded-2xl text-center space-y-3">
          <div className="text-3xl">🕊️</div>
          <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
            綠建築技術認定小組裁決
          </div>
          <div className="text-xl font-black text-white">認定「滿分」優惠！</div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            精神層面與實質環境貢獻超越了量化公式，經「綠建築技術認定小組」審查通過，在生態、建築能效、低蘊含碳指標均認定為最高滿分！
          </p>
          <div className="pt-2 border-t border-slate-700 text-[10px] text-slate-400">
            法源：手冊第 1-5 節「綠建築創新設計優惠加分原則」
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 郭邦翔 趣味比喻：綠建築不是堆砌高科技設備！菩薩寺證明：老榆樹的樹蔭與一口清涼風，比冷氣機更神聖！
      </div>
    </div>
  );
};

// Slide 17: Innovative Cases B & C: Delta Tainan Plant & NCKU Magic School
export const Slide17: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-teal-700">第 17 頁 · 綠建築創新設計實例 B & C</span>
          <span className="text-xs font-mono text-slate-400">郭邦翔 · 16:00 - 17:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          科技與自然的交鋒：地下採光天溝 ＆ 浮力通風塔
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          手冊第 12~15 頁實例 B（台達電南科廠）與實例 C（成大綠色魔法學校）
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Case B: Delta Electronics */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-900 text-xs">案例 B：台達電子南科廠房</span>
            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">
              優惠加分 +4分
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-amber-50/60 rounded-lg border border-amber-100">
              <span className="font-bold text-amber-900">☀️ 地下室採光天溝 ＋ 天井：</span>
              <p className="text-[11px] text-slate-600 mt-0.5">
                地下室四周挖天溝、中間挖採光天井，讓陰暗潮濕地下室變得光亮乾爽如半戶外！
              </p>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
              <span className="font-bold text-slate-800">💨 CO 濃度偵測自動排風：</span>
              <p className="text-[11px] text-slate-600 mt-0.5">
                地下室達 10 ppm 才啟動排風機，節省 80% 以上排風用電！
              </p>
            </div>

            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-800 font-bold text-[11px] flex justify-between">
              <span>每年節省電費約 14.8 萬元</span>
              <span>每年減碳 40,588 kg CO2！</span>
            </div>
          </div>
        </div>

        {/* Case C: NCKU Magic School */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-900 text-xs">案例 C：成功大學綠色魔法學校</span>
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
              全球節能典範
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-emerald-50/60 rounded-lg border border-emerald-100">
              <span className="font-bold text-emerald-900">🗼 太陽能浮力通風塔：</span>
              <p className="text-[11px] text-slate-600 mt-0.5">
                200 人國際會議廳，當室外溫度 &lt; 28℃ 時完全關閉空調！改採無動力浮力通風。
              </p>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
              <span className="font-bold text-slate-800">🌬️ CFD 流場模擬舒適保證：</span>
              <p className="text-[11px] text-slate-600 mt-0.5">
                室內溫度保持在 30℃ 以下，風速維持 0.1~0.6 m/s 舒適範圍，每小時換氣 5~8 次。
              </p>
            </div>

            <div className="p-2 bg-teal-50 rounded-lg text-teal-800 font-bold text-[11px] flex justify-between">
              <span>全年空調節能高達 22.5%！</span>
              <span>深具科學說服力之示範案例</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 郭邦翔 趣味筆記：陽光引進地下室，熱氣由煙囪自己跑出去！工程師的浪漫就是讓大自然替你上班！
      </div>
    </div>
  );
};

// Slide 18: Grading Scale (5 Tiers & Log-Normal Distribution)
export const Slide18: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-teal-700">第 18 頁 · 等級天梯</span>
          <span className="text-xs font-mono text-slate-400">郭邦翔 · 17:00 - 18:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          分級修煉之路：從合格級一路攻頂「鑽石級」！
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          五等級對數常態分布尺度（表 1.9）：合格容易、高分極難的嚴謹鑑別制度
        </p>
      </div>

      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* 5-Tier Pyramid */}
        <div className="md:col-span-7 space-y-2">
          {/* Diamond */}
          <div className="p-3 bg-gradient-to-r from-cyan-600 to-sky-700 text-white rounded-xl shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">💎</span>
              <div>
                <div className="font-black text-sm">鑽石級（Diamond）</div>
                <div className="text-[10px] text-cyan-200">最高榮譽 · 前 5% 頂尖綠建築</div>
              </div>
            </div>
            <div className="font-mono font-black text-base text-cyan-100">RS ≧ 79 分</div>
          </div>

          {/* Gold */}
          <div className="p-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🥇</span>
              <div>
                <div className="font-bold text-xs">黃金級（Gold）</div>
                <div className="text-[10px] text-amber-100">前 15% 標竿建築</div>
              </div>
            </div>
            <div className="font-mono font-bold text-sm">66 ≦ RS &lt; 79 分</div>
          </div>

          {/* Silver */}
          <div className="p-2.5 bg-gradient-to-r from-slate-400 to-slate-500 text-white rounded-xl shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🥈</span>
              <div>
                <div className="font-bold text-xs">銀級（Silver）</div>
                <div className="text-[10px] text-slate-200">優良示範建築 (前 20%)</div>
              </div>
            </div>
            <div className="font-mono font-bold text-sm">58 ≦ RS &lt; 66 分</div>
          </div>

          {/* Bronze */}
          <div className="p-2.5 bg-gradient-to-r from-orange-400 to-amber-600 text-white rounded-xl shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🥉</span>
              <div>
                <div className="font-bold text-xs">銅級（Bronze）</div>
                <div className="text-[10px] text-orange-100">良好水準 (前 30%)</div>
              </div>
            </div>
            <div className="font-mono font-bold text-sm">50 ≦ RS &lt; 58 分</div>
          </div>

          {/* Certified */}
          <div className="p-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🌱</span>
              <div>
                <div className="font-bold text-xs">合格級（Certified）</div>
                <div className="text-[10px] text-emerald-200">達標門檻 (後 30%)</div>
              </div>
            </div>
            <div className="font-mono font-bold text-sm">RS &lt; 50 分</div>
          </div>
        </div>

        {/* Statistical Analysis Box */}
        <div className="md:col-span-5 p-4 bg-slate-900 text-white rounded-2xl text-xs space-y-3">
          <div className="font-bold text-amber-400 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            2026 分級界線微調的科學依據
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            內政部成大團隊統計了 2019~2023 年共 <b>145 件 EEWH-RS</b> 實際案例，因新版引入 BERS、LEBR 與當層排氣優惠，案件平均總分提升了約 <b>13 分</b>！
          </p>
          <div className="p-2.5 bg-slate-800 rounded-lg border border-slate-700 text-[11px] text-emerald-300">
            ✓ 為了維持證書含金量，EEWH-RS 分級界線全面調升，維持「合格容易、高分極難」的鑑別力！
          </div>
          <div className="text-[10px] text-slate-400">
            兩大門檻指標未過者，即便總分達 80 分亦無法取得合格級認證！
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 郭邦翔 趣味比喻：就像手遊爬天梯，合格級是拿到排位資格，想戴上鑽石皇冠，每一科都要當學霸！
      </div>
    </div>
  );
};

// Slide 19: 2026 Revision Summary (Appendix 2 Cheat Sheet)
export const Slide19: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-teal-700">第 19 頁 · 2026 改版精華</span>
          <span className="text-xs font-mono text-slate-400">郭邦翔 · 18:00 - 19:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          2026 新舊版大比拼：一張表看懂所有變革！
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          手冊附錄二修正概要精萃：政策導向、指標簡化與住宅專屬優惠
        </p>
      </div>

      <div className="my-auto py-1 overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="p-2.5 rounded-tl-lg font-bold">範疇大綱</th>
              <th className="p-2.5 font-bold">2026 年最新修正重點</th>
              <th className="p-2.5 rounded-tr-lg font-bold">實務重大影響</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-[11px] bg-white">
            <tr className="hover:bg-slate-50">
              <td className="p-2.5 font-bold text-emerald-900 whitespace-nowrap">緒論與體系</td>
              <td className="p-2.5 text-slate-700">
                迎接三軌合一（綠建築＋能效 BERS＋低碳 LEBR），九大指標簡化為六大指標。
              </td>
              <td className="p-2.5 text-emerald-700 font-semibold">一次申請，拿三張證書！</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-2.5 font-bold text-emerald-900 whitespace-nowrap">生態範疇</td>
              <td className="p-2.5 text-slate-700">
                綠化量合併為生物多樣性指標；首度新增「1~12m 鳥類防窗殺」開窗評估。
              </td>
              <td className="p-2.5 text-slate-600">保護都市鳥類生機。</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-2.5 font-bold text-amber-900 whitespace-nowrap">節能範疇</td>
              <td className="p-2.5 text-slate-700">
                廢除分項加權，改由新建住宅能效 R-BERSn 評估能效得分 SCORE<sub>EE</sub>。
              </td>
              <td className="p-2.5 text-amber-700 font-semibold">直奔 1+ 級近零碳目標。</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-2.5 font-bold text-teal-900 whitespace-nowrap">減廢範疇</td>
              <td className="p-2.5 text-slate-700">
                減量與廢棄物整併為「低蘊含碳 LEBR」；RS 版公式 RS4 = 0.425 × CFR%。
              </td>
              <td className="p-2.5 text-teal-700 font-semibold">主抓混凝土與施工碳排。</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-2.5 font-bold text-sky-900 whitespace-nowrap">健康範疇</td>
              <td className="p-2.5 text-slate-700">
                室內環境增至 18 分；新增大樓「當層排氣」與「同層排水」各項高額優惠計分。
              </td>
              <td className="p-2.5 text-sky-700 font-semibold">集合住宅買房大利多！</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-2.5 font-bold text-sky-900 whitespace-nowrap">水資源門檻</td>
              <td className="p-2.5 text-slate-700">
                納入污水設施查核 2 分；門檻分數由原本 1.5 分調升至 3.5 分！
              </td>
              <td className="p-2.5 text-rose-700 font-bold">必須嚴陣以待的死穴。</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        💡 郭邦翔 趣味筆記：大考終極小抄！六大指標、三軌合一、門檻 3.5 分，全部都在這張表格裡！
      </div>
    </div>
  );
};

// Slide 20: Conclusion & Interactive Audience Quiz
export const Slide20: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleQuizSubmit = () => {
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const scoreCount = QUIZ_QUESTIONS.filter(
    (q) => selectedAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-wider text-emerald-700">第 20 頁 · 雙人謝幕 ＆ 互動問答</span>
          <span className="text-xs font-mono text-slate-400">雙人合體 · 19:00 - 20:00</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          邁向 2050 淨零好宅！雙人總結與現場快問快答
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          20 分鐘精準掌握：三軌合一、六大指標、健康舒適！來挑戰 3 題現場隨堂測驗吧！
        </p>
      </div>

      {/* Quiz Container */}
      <div className="my-auto py-2 space-y-2.5">
        {QUIZ_QUESTIONS.map((q, idx) => {
          const userChoice = selectedAnswers[q.id];
          const isCorrect = userChoice === q.correctIndex;

          return (
            <div
              key={q.id}
              className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Q{idx + 1}. {q.question}
                </span>
                {submitted && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {isCorrect ? '✓ 答對了！' : '✗ 答錯囉'}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {q.options.map((opt, oIdx) => {
                  let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';
                  if (userChoice === oIdx) {
                    btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-semibold';
                  }
                  if (submitted) {
                    if (oIdx === q.correctIndex) {
                      btnStyle = 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold';
                    } else if (userChoice === oIdx && !isCorrect) {
                      btnStyle = 'bg-rose-100 text-rose-900 border-rose-300';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(q.id, oIdx)}
                      className={`p-2 text-[11px] rounded-lg border text-left transition-colors cursor-pointer ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                  💡 {q.explanation}
                </div>
              )}
            </div>
          );
        })}

        {/* Submit Bar */}
        <div className="flex items-center justify-between pt-1">
          {!submitted ? (
            <button
              onClick={handleQuizSubmit}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Sparkles className="w-4 h-4" />
              提交測驗答案（看看能得幾分！）
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-800">
                測驗結果：答對 {scoreCount} / 3 題！
              </span>
              <button
                onClick={() => {
                  setSelectedAnswers({});
                  setSubmitted(false);
                }}
                className="text-xs text-emerald-700 font-medium underline cursor-pointer"
              >
                重新挑戰
              </button>
            </div>
          )}

          <div className="text-right text-xs font-bold text-slate-700">
            張玥 ＆ 郭邦翔 感謝大家聆聽！鞠躬致謝！
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
        <span>🎉 結語：綠建築不是冷冰冰的法規，而是給下一代更涼爽、健康、省水、省電的美麗家園！</span>
        <span className="font-semibold text-emerald-700">報告完畢 · 敬請指教</span>
      </div>
    </div>
  );
};
