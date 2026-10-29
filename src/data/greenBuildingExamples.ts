import { GreenBuildingExample } from '../types';

const greenCondo3d = '/src/assets/images/green_residential_render_1793252243793.jpg';
const timberClt3d = '/src/assets/images/low_carbon_timber_3d_1793252269974.jpg';
const energyCutaway3d = '/src/assets/images/energy_systems_3d_1793252284798.jpg';
const verticalForest3d = '/src/assets/images/vertical_forest_3d_1793252300653.jpg';
const magicSchool3d = '/src/assets/images/magic_school_ncku_1793255156410.jpg';
const ecoSponge3d = '/src/assets/images/eco_sponge_biodiversity_1793255171812.jpg';

export const GREEN_BUILDING_EXAMPLES: Record<number, GreenBuildingExample> = {
  1: {
    slideId: 1,
    name: '2026 EEWH-RS 示範型低碳景觀公寓',
    location: '台北市 · 內湖綠能示範基地',
    ratingBadge: '2026 EEWH-RS 鑽石級首選 · BERS 1+ 級',
    imageUrl: greenCondo3d,
    is3dRender: true,
    tagline: '開創三軌合一：深遮陽陽台、屋頂光電板與立體穿堂風',
    structuralHighlights: [
      '立體挑空連續深陽台，降低夏日日射得熱達 42%',
      '雙面發電屋頂太陽能板，社區公設用電全自給',
      '複層中庭生態水景，誘導亞熱帶西南季風穿堂流動',
    ],
    metrics: [
      { label: '建築能效等級', value: 'BERS 1+ 級 (近零碳)', icon: '⚡' },
      { label: '低蘊含碳減量', value: '-35% CO₂e', icon: '🌿' },
      { label: '綠覆率指數', value: '168% 複層立體綠化', icon: '🌳' },
    ],
    description:
      '本案為內政部建築研究所 2026 EEWH-RS 示範住宅設計，完美展現三軌合一架構，融合節能外殼、屋頂創能與健康呼吸換氣工法。',
  },
  2: {
    slideId: 2,
    name: '哥本哈根 Nordhavn 智慧零碳住宅區',
    location: '丹麥 · 哥本哈根 (Nordhavn)',
    ratingBadge: '歐盟 EPBD 零碳先鋒 · DGNB 白金級',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    is3dRender: false,
    tagline: '全球 2050 淨零路徑先行者：全生命週期 WLCA 碳評估住宅',
    structuralHighlights: [
      '從開採、建造到拆解的全生命週期 (WLCA) 碳盤查',
      '外牆模組化預製被動保溫外殼，減少施工廢棄物 60%',
      '結合港灣海水熱泵低溫區域供暖系統',
    ],
    metrics: [
      { label: '營運碳排', value: '0 kgCO₂e/m² (近零碳)', icon: '🎯' },
      { label: '建材蘊含碳', value: '-45% 減量達成', icon: '📉' },
      { label: '再生能源', value: '100% 風能與光電', icon: '💨' },
    ],
    description:
      '國際淨零建築代表案，響應全球氣候協定與國發會 2050 淨零建築三部曲，體現全生命週期低碳建築的實務可行性。',
  },
  3: {
    slideId: 3,
    name: '成功大學「綠色魔法學校」（孫運璿綠建築研究大樓）',
    location: '台南市 · 國立成功大學力行校區',
    ratingBadge: '台灣 EEWH 鑽石級 ｜ 美國 LEED 白金級（全球最高分）',
    imageUrl: magicSchool3d,
    is3dRender: true,
    tagline: '亞洲第一、世界第四的傳奇：亞熱帶氣候被動設計極致',
    structuralHighlights: [
      '三座自然浮力通風節能煙囪，不用開冷氣即享涼爽穿堂風',
      '深邃階梯挑簷與通風百葉，完全阻絕南台灣毒辣西曬',
      '屋頂階梯式亞熱帶耐旱厚葉植栽空中花園',
    ],
    metrics: [
      { label: '節電效益', value: '節能達 86%', icon: '💡' },
      { label: '全球排名', value: 'LEED 白金級世界第一高分', icon: '🏆' },
      { label: '空調節省', value: '全年 4 個月免開冷氣', icon: '❄️' },
    ],
    description:
      '台灣綠建築推行 25 年的指標旗艦！證實不需昂貴高科技，以自然通風與遮陽等被動式建築設計，即可達成世界頂尖節能成效。',
  },
  4: {
    slideId: 4,
    name: '2026 六大指標整合建築系統等角透視 3D 藍圖',
    location: '內政部建築研究所 · 2026 示範架構剖面',
    ratingBadge: '2026 EEWH-RS 六大指標整合系統',
    imageUrl: energyCutaway3d,
    is3dRender: true,
    tagline: '去蕪存菁：生態、節能、減廢、健康四大範疇立體整合',
    structuralHighlights: [
      '整合能效 BERS 與低蘊含碳 LEBR 雙核心評估指標',
      '3D 解構通風熱浮力流場、屋頂太陽能陣列與雨水收集水箱',
      '簡化審查繁複流程，大幅提升指標鑑別敏感度',
    ],
    metrics: [
      { label: '指標整合', value: '9 大精簡為 6 大', icon: '📐' },
      { label: '鑑別敏感度', value: '提升 40%', icon: '📈' },
      { label: '審查行政耗時', value: '減少 35%', icon: '⏱️' },
    ],
    description:
      '全視角 3D 透視圖解構 2026 年新版手冊核心架構：將綠化量與生物多樣性合併、廢棄物減量融入低碳，讓建築評估聚焦核心本質。',
  },
  5: {
    slideId: 5,
    name: '台北市信義區廣慈博愛園區智慧綠公宅',
    location: '台北市 · 信義區大道路',
    ratingBadge: 'EEWH 鑽石級 ｜ 智慧建築鑽石級 ｜ BERS 1+ 級',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    is3dRender: false,
    tagline: '三軌合一神級實踐：綠建築標章 ＋ 能效 BERS ＋ 低碳標示',
    structuralHighlights: [
      '全區導入 BEMS 智慧微電網能源管理系統與能耗可視化',
      '大面積下沉式雨水滯洪滲透花園，削峰暴雨排水壓力',
      '預鑄外牆與低碳混擬土，大幅降低營造階段碳足跡',
    ],
    metrics: [
      { label: '基地規模', value: '全台最大近零碳社宅', icon: '🏢' },
      { label: '綠能發電', value: '年發電 150 萬度', icon: '⚡' },
      { label: '三軌合一', value: '一次申請同步三認證', icon: '📜' },
    ],
    description:
      '台灣公有智慧綠建築代表作，具體示範如何透過 2026 三軌合一流程，同步取得綠建築鑽石級、建築能效 1+ 級與低碳標示。',
  },
  6: {
    slideId: 6,
    name: '新北市央北青年社會住宅（黃金級 EEWH-RS）',
    location: '新北市 · 新店區央北重劃區',
    ratingBadge: '內政部 EEWH-RS 住宿類黃金級標章',
    imageUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    is3dRender: false,
    tagline: '專屬好宅量身打造：RS 手冊聚焦每天生活的舒適節能居所',
    structuralHighlights: [
      '多棟圍塑型中庭綠地，創造亞熱帶微氣候微風循環',
      '全戶梯廳大面採光開窗，杜絕陰暗耗電公共走道',
      '外立面設計深開口立體遮陽格柵，阻隔日射熱能',
    ],
    metrics: [
      { label: '住戶空調節電', value: '年省 28% 空調電費', icon: '❄️' },
      { label: '公共區域照明', value: '自然採光率 85%', icon: '☀️' },
      { label: '社宅滿意度', value: '住戶綠生活滿意度 94%', icon: '😊' },
    ],
    description:
      '展示 EEWH-RS 手冊的住宅專屬特性：不同於商業大樓的集中式空調，住宅強調個別居室自然通風、外遮陽與生活實用性。',
  },
  7: {
    slideId: 7,
    name: '台中水湳經貿園區近零碳建築能效示範公寓',
    location: '台中市 · 水湳低碳經貿示範特區',
    ratingBadge: '建築能效標示 BERS 最高等級 1+ 級 (近零碳)',
    imageUrl: energyCutaway3d,
    is3dRender: true,
    tagline: '建築能效 BERS 核心：節能率達 50% 以上的住宅巔峰技術',
    structuralHighlights: [
      '高效率外遮陽結合 Low-E 雙層中空安全玻璃 (Ki 值最佳化)',
      '冷暖空調一律採用 CSPF 一級能效變頻冷媒系統',
      '全棟中央熱泵循環熱水系統，COP 能效比高達 4.2',
    ],
    metrics: [
      { label: '能效等級', value: 'BERS 1+ 級 (節能 52%)', icon: '⚡' },
      { label: '戶均電費節省', value: '每年省 18,500 元', icon: '💰' },
      { label: '碳排放削減', value: '年減 2.4 噸 CO₂e/戶', icon: '🌱' },
    ],
    description:
      '依據 2026 EEWH-RS 第四章能效標準建立的 3D 能效模擬模型，展示外殼、空調、照明與熱水四大系統如何協同邁向 1+ 級。',
  },
  8: {
    slideId: 8,
    name: '高雄亞洲新灣區雙層呼吸外皮現代好宅',
    location: '高雄市 · 前鎮區亞洲新灣區',
    ratingBadge: 'EEWH 外殼節能 ENVLOAD 頂級評定',
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    is3dRender: false,
    tagline: '外殼與設備四大節能：外遮陽、自然採光、熱泵與高效率空調',
    structuralHighlights: [
      '立體交錯深陽台結合鋁合金外遮陽百葉，有效降溫 3.5°C',
      '地下室設置通風採光天井，白天免開照明與排風機',
      '全戶標配新風全熱交換器，保持室內活氧與冷房效率',
    ],
    metrics: [
      { label: '日射熱獲得', value: '大幅降低 40%', icon: '🛡️' },
      { label: '照明功率密度', value: 'LPD 低於國家標準 35%', icon: '💡' },
      { label: '換氣能量回收', value: '全熱交換效率 75%', icon: '🔄' },
    ],
    description:
      '南台灣熱帶海風氣候下的住宅節能典範，利用外遮陽、深陽台與高效率變頻系統，將夏季酷暑完全阻擋於外。',
  },
  9: {
    slideId: 9,
    name: '大安水圳生態海綿住宅（生物多樣性與防鳥窗殺示範區）',
    location: '台北市 · 大安森林公園生態水圳廊道',
    ratingBadge: '2026 EEWH-RS 生態雙雄指標首選 · 生物多樣性滿分',
    imageUrl: ecoSponge3d,
    is3dRender: true,
    tagline: '生態範疇雙雄：防鳥類窗殺點陣玻璃、透水海綿鋪面與原生雨水花園',
    structuralHighlights: [
      '低樓層全棟玻璃配置 5×10cm 防鳥撞擊點陣印花與霧面格柵',
      '中庭景觀 100% 採用高滲透率連鎖透水磚與礫石保水層',
      '複層式原生種誘蝶誘鳥生態池與雨水滲透草溝',
    ],
    metrics: [
      { label: '防鳥撞擊防護', value: '1m~12m 全覆蓋', icon: '🕊️' },
      { label: '基地保水率 λ', value: '達基準值 2.2 倍', icon: '💧' },
      { label: '綠覆率與多樣性', value: '185% 複層原生林', icon: '🌿' },
    ],
    description:
      '具體示範 2026 EEWH-RS 指標一（生物多樣性 RS1，含首度納入之防窗殺設計）與指標二（基地保水 RS2），實現人與鳥類、水資源和諧共生的海綿綠社區。',
  },
  10: {
    slideId: 10,
    name: '綠活共生城市生態島 3D 鳥瞰示範社區',
    location: '新竹市 · 生醫科技園區生態特區',
    ratingBadge: '2026 EEWH-RS 綜合示範金獎',
    imageUrl: greenCondo3d,
    is3dRender: true,
    tagline: '講者交接棒：前半場能效戰略匯流，下半場低碳健康啟航！',
    structuralHighlights: [
      '前半場 10 頁宏觀戰略：淨零路徑、9變6、三軌合一與能效',
      '後半場 10 頁實戰關鍵：低蘊含碳、當層排氣、同層排水與算分',
      '整合格柵、水景、光電與綠化之複合式城市生態島',
    ],
    metrics: [
      { label: '報告進度', value: '50% 完美換手 (10:00)', icon: '⏱️' },
      { label: '指標覆蓋', value: '已解構 3 大核心範疇', icon: '📊' },
      { label: '下半場重點', value: 'LEBR 低碳與健康居所', icon: '🚀' },
    ],
    description:
      '象徵雙人演說無縫接棒的立體鳥瞰視角：上半場張玥 交棒給郭邦翔，帶領觀眾從宏觀法規深入到具體工法與材料細節。',
  },
  11: {
    slideId: 11,
    name: '現代低碳木結構住宅 3D 建築剖面 (CLT Timber Hybrid)',
    location: '宜蘭縣 · 永續生態木構造園區',
    ratingBadge: '低蘊含碳建築 LEBR 1 級 · EEWH 鑽石級',
    imageUrl: timberClt3d,
    is3dRender: true,
    tagline: '郭邦翔 登場：低蘊含碳 LEBR 剖析，木構造與低碳工法大躍進',
    structuralHighlights: [
      '採用 FSC 認證交叉層積竹木構造 (CLT)，結構自帶固碳效果',
      '全棟工廠預製裝配式模組，現場組裝零粉塵、零廢棄物',
      '木質橫樑露明設計，兼具吸濕調溫與溫潤美學',
    ],
    metrics: [
      { label: '結構體固碳量', value: '850 kgCO₂e/m³', icon: '🪵' },
      { label: '蘊含碳減量', value: '-38% 達成', icon: '📉' },
      { label: '營造工期節省', value: '縮短 40% 工期', icon: '🏗️' },
    ],
    description:
      '超高擬真 3D 物理切面模型，具體展示低蘊含碳 (LEBR) 的木構造工法，顛覆過去鋼筋混凝土高碳排思維，開啟台灣木造住宅新篇章。',
  },
  12: {
    slideId: 12,
    name: '循環低碳耐震混凝土長壽命住宅',
    location: '台北市 · 大安區都市更新示範住宅',
    ratingBadge: '低蘊含碳標籤 LEBR 黃金級 ｜ 耐震綠建築標章',
    imageUrl:
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80',
    is3dRender: false,
    tagline: '減碳三箭：高爐水泥替代熟料、輕量化鋼骨與長壽命設計',
    structuralHighlights: [
      '使用高爐爐石粉與飛灰替代 30% 傳統波特蘭高碳熟料水泥',
      '結構使用年限由傳統 50 年拉長至 100 年，大幅分攤碳排',
      '柱樑節點採用易拆解、易回收可重複利用鋼材配件',
    ],
    metrics: [
      { label: '水泥碳排減少', value: '減碳 30%', icon: '🧱' },
      { label: '結構設計壽命', value: '100 年長壽好宅', icon: '⏳' },
      { label: '再生建材比例', value: '全棟使用率 28%', icon: '♻️' },
    ],
    description:
      '打破「低碳一定要全木造」的迷思！本案示範如何在台灣常見的鋼筋混凝土高樓中，藉由低碳水泥與長壽命工法達成卓越減碳成績。',
  },
  13: {
    slideId: 13,
    name: '台北信義區「陶朱隱園」立體旋轉空中森林 (Tao Zhu Yin Yuan)',
    location: '台北市 · 信義計畫區松高路',
    ratingBadge: '全球九大城市新地標 ｜ LEED 白金級認證 ｜ 鑽石級綠化',
    imageUrl: verticalForest3d,
    is3dRender: true,
    tagline: '生物多樣性與綠化量極致：全棟吸碳 130 噸的立體垂直森林',
    structuralHighlights: [
      '順時針旋轉 4.5 度立體挑空露台，每戶皆享空中私人花園',
      '整棟大樓種植超過 23,000 株台灣原生喬灌木',
      '配置微滴灌雨水澆灌系統與防颱穩固植栽支撐結構',
    ],
    metrics: [
      { label: '年固碳量', value: '約 130 噸 CO₂/年', icon: '🌳' },
      { label: '周邊微氣候', value: '夏季降溫 3.2°C', icon: '🌡️' },
      { label: '原生樹種佔比', value: '超過 80% 誘鳥誘蝶', icon: '🦋' },
    ],
    description:
      '台灣立體綠化指標豪宅，將自然森林直接搬進城市高空，示範 2026 EEWH-RS 生物多樣性指標中「原生植物」與「立體綠化」的最高水準。',
  },
  14: {
    slideId: 14,
    name: '台中市「陸府植深館」生態滯洪庭園住宅',
    location: '台中市 · 南屯區公益路生態圈',
    ratingBadge: 'EEWH-RS 水資源與基地保水特優等級',
    imageUrl:
      'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1600&q=80',
    is3dRender: false,
    tagline: '水資源全循環：雨水地下回存、全區透水鋪面與海綿城市水景',
    structuralHighlights: [
      '地下設置 250 噸雨水收集過濾沉澱池，景觀澆灌 100% 自給',
      '全區步道與中庭採用高滲透率連鎖透水磚，杜絕地面積水',
      '自然蘆葦生質淨化生態池，提供社區降溫與親水休憩',
    ],
    metrics: [
      { label: '雨水回用率', value: '景觀用水平時 100% 自給', icon: '💧' },
      { label: '暴雨逕流削峰', value: '減少 48% 排水洪峰', icon: '🌊' },
      { label: '一級省水器具', value: '全戶標配省水 30%', icon: '🚿' },
    ],
    description:
      '將台中的豪宅庭園化身為「海綿城市」儲水單元，示範 2026 EEWH-RS 水資源指標如何兼顧生活景觀、水生昆蟲生態與防洪效益。',
  },
  15: {
    slideId: 15,
    name: '防疫隔臭·同層排水與當層排氣 3D 管線示範宅',
    location: '新北市 · 板橋新板特區示範社區',
    ratingBadge: '2026 EEWH-RS 健康居所特優指標',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    is3dRender: false,
    tagline: '健康居所重磅變革：同層排水避免漏水擾鄰，當層排氣杜絕氣膠傳播',
    structuralHighlights: [
      '各戶浴室當層獨立排風管道，配備氣密電動逆止閥門',
      '同層降板式或架高地板排水工法，產權維修完全在自戶進行',
      '全棟設置吸氣閥與總存水彎，永久隔絕管道臭氣與害蟲',
    ],
    metrics: [
      { label: '漏水糾紛降低', value: '減少 95% 擾鄰糾紛', icon: '🛡️' },
      { label: '空氣交叉感染', value: '徹底阻絕 100%', icon: '🧼' },
      { label: '維修自主性', value: '室內完全自主修繕', icon: '🔧' },
    ],
    description:
      '疫情後住宅最重要的革新！過去樓上排水管穿過樓下天花板的惡夢徹底走入歷史，新版手冊大力加分同層排水與當層獨立排氣。',
  },
  16: {
    slideId: 16,
    name: '台中七期極致安靜·純淨綠建材健康宅',
    location: '台中市 · 西屯區七期市政特區',
    ratingBadge: '健康綠建材標章認證 ｜ 樓板衝擊音防護特優',
    imageUrl:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    is3dRender: false,
    tagline: '室內環境品質升級：降噪 17dB 隔音地坪與低 VOC 健康綠建材',
    structuralHighlights: [
      '樓板鋪設橡膠減震隔音墊，大幅降低腳步與重物墜落噪音',
      '全室塗裝非甲醛低逸散礦物漆與 FSC 認證竹木地板',
      '大面雙層 Low-E 隔音氣密窗，降噪達 35 分貝以上',
    ],
    metrics: [
      { label: '樓板衝擊音減損', value: 'ΔLw ≥ 17 dB', icon: '🔇' },
      { label: '室內 TVOC 濃度', value: '< 0.05 ppm 頂級健康', icon: '🌿' },
      { label: '健康建材採用率', value: '室內面積高達 65%', icon: '🏷️' },
    ],
    description:
      '守護現代人每天 8~10 小時睡眠生活的好宅！結合內政部最新樓板衝擊音法規與低揮發性有機物標準，打造靜謐無毒的健康綠居所。',
  },
  17: {
    slideId: 17,
    name: '2026 EEWH-RS 鑽石級總評 3D 榮譽獎牌與計分模型',
    location: '桃園市 · 青埔智慧生態綠能園區',
    ratingBadge: '2026 EEWH-RS 鑽石級（總分 88.5 分）',
    imageUrl:
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
    is3dRender: false,
    tagline: '實戰算分指南：80 分以上鑽石級、合格級 30 分階梯攻頂心法',
    structuralHighlights: [
      '能效 BERS 指標佔比最高，掌握能效即掌握 30 分基本盤',
      '低蘊含碳 LEBR 搭配綠建材，穩健進帳 20 分',
      '加分項目：雨水再利用、同層排水、立體複層綠化衝上 80+ 鑽石級',
    ],
    metrics: [
      { label: '鑽石級門檻', value: '得分 ≥ 80 分', icon: '💎' },
      { label: '黃金級門檻', value: '70 ~ 79 分', icon: '🥇' },
      { label: '合格級門檻', value: '30 ~ 49 分', icon: '🥉' },
    ],
    description:
      '系統化解析 2026 年新版階梯式評分標準，提供清晰的「得分計算機」路徑圖，協助建築師與業主精準規劃預算與目標等級。',
  },
  18: {
    slideId: 18,
    name: '台北文山區「松風綠苑」黃金級住宅實算案',
    location: '台北市 · 文山區木柵路',
    ratingBadge: '2026 EEWH-RS 黃金級實算驗證（總分 72.8 分）',
    imageUrl: greenCondo3d,
    is3dRender: true,
    tagline: '真實案例完整試算：造價僅微增 3.2%，享受容積獎勵與綠色房貸優惠',
    structuralHighlights: [
      '基地綠化保水取得 15.2 分、建築能效 1 級斬獲 26.5 分',
      '選用同層排水與隔音地坪取得健康環境 16.3 分',
      '累計實拿 72.8 分，順利獲頒 2026 黃金級綠建築標章',
    ],
    metrics: [
      { label: '總得分', value: '72.8 分 (黃金級)', icon: '⭐' },
      { label: '造價增幅', value: '僅約 3.2%', icon: '💵' },
      { label: '容積獎勵', value: '獲得 6% 獎勵', icon: '📐' },
    ],
    description:
      '以台北文山區真實集合住宅為範本，一筆筆列出各指標得分與投資報酬率，證實綠建築是兼顧住戶福祉與建商價值的雙贏投資。',
  },
  19: {
    slideId: 19,
    name: '荷蘭恩荷芬 Trudo 垂直森林平民社會住宅',
    location: '荷蘭 · 恩荷芬 (Eindhoven)',
    ratingBadge: '歐洲永續社會好宅大獎 ｜ 破除昂貴迷思之作',
    imageUrl:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
    is3dRender: false,
    tagline: '破解四大常見迷思：綠建築不昂貴！租金平民化的綠意奇蹟',
    structuralHighlights: [
      '專為青年與低收入租戶打造，造價完全控制在一般社會住宅標準內',
      '利用預鑄水泥花槽與自動滴灌系統，降低高空園藝維護成本 70%',
      '全棟 125 套公寓種植 135 棵大樹與 5,200 株灌木',
    ],
    metrics: [
      { label: '租金水準', value: '親民社會住宅平價租金', icon: '🏠' },
      { label: '夏季降溫', value: '住戶室溫平均低 3°C', icon: '❄️' },
      { label: '迷思破解', value: '綠建築人人住得起', icon: '✨' },
    ],
    description:
      '義大利建築師 Stefano Boeri 的親民力作，有力擊破「綠建築只是頂級豪宅專利」的刻板印象，證明綠意與節能是每個人的基本居住人權。',
  },
  20: {
    slideId: 20,
    name: '台灣 2050 淨零城鄉未來住宅天際線 (Net-Zero Vision)',
    location: '台灣 · 未來永續淨零生態生活圈',
    ratingBadge: '100% 新建建築近零碳 ｜ 國家 2050 淨零旗艦目標',
    imageUrl: verticalForest3d,
    is3dRender: true,
    tagline: '雙人總結與 Q&A：讓每一棟建築都成為守護地球的綠色避風港！',
    structuralHighlights: [
      '2030 公有建築先行 ｜ 2040 半數既有翻新 ｜ 2050 全面近零碳',
      '智慧感知與建築外皮自適應調控，達到能源產銷完全自給',
      '致敬世代同行：歡迎全場長官與建築夥伴提問交流！',
    ],
    metrics: [
      { label: '2050 目標', value: '100% 新建近零碳', icon: '🎯' },
      { label: '既有建築', value: '85% 綠能低碳轉型', icon: '🔄' },
      { label: '簡報總結', value: '20 分鐘精采完賽！', icon: '👏' },
    ],
    description:
      '雙人演報精彩壓軸：回顧 2026 EEWH-RS 的重大使命，展望台灣 2050 淨零路徑，邀請在座每位建築專業者一同攜手開創綠色好宅新紀元。',
  },
};
