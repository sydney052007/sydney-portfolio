export type ExperienceLink = {
  label: string;
  url: string;
};

export type ExperienceEmbed =
  | { kind: "p5"; url: string }
  | { kind: "youtube"; videoId: string };

export type Experience = {
  title: string;
  description: string;
  tags: string[];
  links: ExperienceLink[];
  embeds?: ExperienceEmbed[];
};

export const experiences: Experience[] = [
  {
    title: "典藏・記憶",
    description:
      "校內自主學習計畫，12 人小組合作。透過光達掃描與 Unity 編輯，將中山女高五個具代表性的校園空間製成朦朧點雲影像，象徵記憶的模糊與空間的永存；成果以 NFT 形式上架至 akaSwap，並在校慶展覽中讓校友以問卷交換作品、重新回顧高中回憶。個人負責選址規劃、點雲拍攝、Discord 社群宣傳與展覽執行。過程中對 3D 建模與空間科技產生興趣，後續開始自學 Blender。",
    tags: ["LiDAR 光達掃描", "Unity", "NFT"],
    links: [{ label: "作品連結（akaSwap）", url: "https://akaswap.com/event/csghs1250" }],
  },
  {
    title: "聽樹木在說話",
    description:
      "跨領域自主學習專案（生物 × 設計 × 科技）。在交大景觀教授與樹醫師帶領下，透過視覺筆記觀察、分類與數位建模三個單元認識校園植物與空間的關係，最終與同組成員合作用 Unity 開發 AR 應用，為校內楓林道的植物賦予個性，行經時觸發不同互動內容。其他組員升高三後，獨自接手整合所有植物模型與互動機制，與教授反覆討論修改三個月完成。",
    tags: ["Unity", "AR", "3D 建模"],
    links: [{ label: "展示影片二", url: "https://www.youtube.com/watch?v=dE76uhe8yB0" }],
    embeds: [{ kind: "youtube", videoId: "LtkxBMrIcHI" }],
  },
  {
    title: "p5.js 手機殼設計課程",
    description:
      "高二選修 p5.js 程式藝術課程後，受邀為台北市長設計並帶領一堂十分鐘體驗課，在 STEAM 啟動記者會上公開教學。從固定圖案模板重新設計為可自由組合互動元件的手機殼創作課程，並製作講義、反覆演練掌握時間節奏與臨場應變能力，最終順利完成教學示範與媒體記者會體驗。",
    tags: ["p5.js"],
    links: [
      {
        label: "p5.js 編輯器（修改前）",
        url: "https://editor.p5js.org/11130130/sketches/M10hIQGi",
      },
      {
        label: "p5.js 編輯器（修改後）",
        url: "https://editor.p5js.org/11130130/sketches/rOoA_hkb7",
      },
      { label: "課程講義", url: "https://reurl.cc/xaADrb" },
    ],
    embeds: [{ kind: "youtube", videoId: "CBCg_8X5azg" }],
  },
  {
    title: "小王子的 B612",
    description:
      "個人 p5.js 生成藝術作品。以《小王子》為主題發想，運用粒子系統打造可互動的星空，點擊螢幕可將星星連線生成星球，並以 L-system 演算法生成巴歐巴樹。過程中學習 noise() 製造有秩序性的隨機效果、用 randomSeed 固定星球樣式、以 graph 方式裁剪出圓形星球。",
    tags: ["p5.js", "noise()", "粒子系統", "L-system"],
    links: [
      {
        label: "在新分頁開啟",
        url: "https://editor.p5js.org/11130130/full/x8a54f3s_",
      },
    ],
    embeds: [{ kind: "p5", url: "https://editor.p5js.org/11130130/full/x8a54f3s_" }],
  },
];
