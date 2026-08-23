export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  // whether `demo` has been tested to render reliably inside an iframe
  livePreview?: boolean;
  statusLabel?: string;
};

export const projects: Project[] = [
  {
    name: "P2P 藝術品租賣平台（Artstore）",
    description:
      "全端 P2P 交易平台，供藝術品供應商上架畫作供用戶租借或購買。實作 Google OAuth 與本地帳號雙重認證、角色權限管理（用戶／供應商／管理員）、圖片上架與處理功能，以 HAProxy 做負載均衡並部署至雲端。",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Google OAuth",
      "HAProxy",
    ],
    github: "https://github.com/sydney052007/artstore",
    demo: "https://artstore-iyld.vercel.app/home",
  },
  {
    name: "農業行情比較網站",
    description:
      "串接農委會開放資料並以爬蟲補充即時資訊，呼叫 Gemini AI 分析當季蔬果價格與供需，產出選購建議。（大一計算機概論課程專題）",
    tech: ["Python", "政府開放資料 API", "網頁爬蟲", "Gemini API"],
    github: "https://github.com/sydney052007/agri-price-compare",
    demo: "https://agri-price-compare.vercel.app/",
    livePreview: true,
  },
  {
    name: "展覽語音導覽系統",
    description:
      "為實際藝術展覽獨立開發的全端語音導覽平台。訪客輸入展品代碼即可查詢說明並自動播放語音；管理員端具備完整 CRUD 功能與雲端音訊管理，部署至 Vercel。",
    tech: ["React", "TypeScript", "Supabase", "Vite", "Vercel"],
    github: "https://github.com/sydney052007/siena_exhibition",
    demo: "https://siena-exhibition.vercel.app/",
    livePreview: true,
  },
  {
    name: "員工出缺勤與工作進度管理系統（Attendance System）",
    description:
      "為一間未滿 10 人的小型企業開發的員工出勤與工作進度管理系統，透過 Claude Code 進行協作開發。實作 RBAC 權限管理（員工／主管／老闆三種角色）、請假與班表管理功能（含月曆檢視），並使用資料庫交易與樂觀鎖（optimistic locking）處理並發請求，確保排班資料一致性。",
    tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "React", "TypeScript"],
    github: "https://github.com/sydney052007/attendance-system",
    demo: "https://attendance-system-theta-two.vercel.app/",
    statusLabel: "2026/7 ~ 2026/8",
  },
  {
    name: "門市銷售與庫存分析 App（Mos Sales App）",
    description:
      "為門市打工經驗開發的銷售與庫存分析行動應用程式，透過 Claude Code 協作開發並部署為 Android APK。具備品項編輯、銷售數據分析頁面，並根據星期別（day-of-week）銷售資料提供庫存/進貨建議功能。",
    tech: ["React", "Capacitor", "Android"],
    github: "https://github.com/sydney052007/mos-sales-app",
    statusLabel: "2026/7 ~ 2026/8",
  },
];
