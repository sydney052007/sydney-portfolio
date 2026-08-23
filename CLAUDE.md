# sydney-portfolio — 專案說明（CLAUDE.md）

## 這是什麼專案

這是陳詠歆（Sydney Chen）的個人作品集網站。目的是求職／實習用的線上履歷補充素材：呈現自我介紹、興趣（含實際酸種麵包食譜與照片）、五個主要全端專案與四段自主學習/跨領域經歷，讓面試官／HR 可以快速了解背景與作品。目標讀者主要是台灣的軟體工程 / 資料分析相關職缺招募方。

## 技術方案

- 框架：Next.js（App Router，**真正的多頁路由**，不是錨點單頁）+ TypeScript
- 樣式：Tailwind CSS v4（CSS-first 設定，`src/app/globals.css` 內的 `@theme` 區塊，沒有 `tailwind.config.ts`）
- 視覺風格：編輯設計（editorial）／藝廊質感，不是制式工程師排版。每個頁面各自有獨立的版面邏輯，**沒有共用同一張卡片元件套所有內容**：
  - 首頁最下方：三個頁面（作品集／更多經歷／興趣）的預告區塊，`PagePreviews.tsx`，套用下面的「清單類內容統一規則」
  - 作品集：不對稱網格，有截圖的專案卡片放大佔兩欄，純文字專案維持一欄（`projects/page.tsx` 的 `layoutProjects()` 依序決定每張卡片要不要跟下一張純文字卡片並排，不用 `grid-auto-flow: dense`——dense 會為了補空隙把後面的卡片拉到前面，破壞 01/02/03 的閱讀順序，2026-08-22 已改掉）
  - 更多經歷：左右交錯（zigzag）時間軸，中央/左側一條時間軸縱線 + 圓點連接每個項目
  - `/interests` 興趣頁：4 個可點擊的分類小方塊（繪畫／音樂／織品手作／烘焙），點擊切換下方同一個內容面板；烘焙面板另外有一層縮圖清單 → 點縮圖展開食譜文字的巢狀互動，是全站互動邏輯最複雜的一頁
- **清單類內容統一規則**（2026-08-22 全站巡過一輪定案）：除了 `/experiences` 因為時間軸圓點需要邊框卡片當視覺錨點而保留邊框，**其餘所有「清單/卡片式」內容一律採用 `/projects` 的基準樣式**：無邊框、`border-t border-dashed border-border` 細分隔線區隔每個項目、搭配 `font-serif text-xs text-accent` 的編號（01、02...）或小標籤。新增任何清單類 UI（首頁預告區塊、`/interests` 的分類/媒材清單/食譜展開）都套用這個樣式，不要用圓角陰影卡片或灰框矩形（那是表單/後台介面的視覺語言，不是這個網站的調性）。`/projects` 的「大圖 live 預覽」卡片、`/experiences` 的時間軸卡片是唯二的例外，因為各自有功能性理由（圖片/iframe 畫框、時間軸視覺錨點）需要邊框。
- 字型：**不使用 `next/font/google`**（避免部署環境連不到 Google Fonts 導致建置失敗），改用系統字型堆疊，兩組字體家族做對比：
  - `--font-system`（內文，Tailwind `font-sans`）：`-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", Roboto, Helvetica, Arial, sans-serif`
  - `--font-editorial`（標題，Tailwind `font-serif`）：`"Iowan Old Style", "Palatino Linotype", Palatino, "Songti TC", "PMingLiU", Georgia, "Noto Serif TC", serif`
- 色彩系統：定義在 `globals.css` 的 `:root` / `@theme inline`：
  - `--background`（#faf7f2，微暖米白，不是純白）／`--foreground`（#1c1a17）
  - `--accent`（#2e4a66，墨線藍）：連結文字、技能／興趣標籤、區塊 kicker 標籤、時間軸縱線與圓點、bio 左側裝飾線、專案編號等——這次改版刻意讓強調色在版面配置上有存在感，不是只出現在標籤底色
  - `--accent-soft`（#e9eff4）／`--accent-strong`（#1c3040）：淺底與 hover 狀態
- 頁面轉場：`src/app/template.tsx` 用 CSS `page-fade-in` keyframe 做簡單淡入（App Router 的 `template.tsx` 每次切換路由都會重新掛載，不需要額外的動畫函式庫）
- 部署平台：Vercel（透過 GitHub repo 串接，push 到 main 會自動重新部署）

## 目前進度

- [x] 專案建置（create-next-app，TypeScript + Tailwind + App Router + ESLint）
- [x] 內容資料抽成 `src/data/*.ts`
- [x] **改成三頁式路由架構**：`/`、`/projects`、`/experiences`（見下方程式架構）
- [x] Navbar 改成 client component，用 `usePathname()` 標示目前頁面（底線＋強調色）
- [x] 三個頁面各自獨立版面設計（不對稱網格 / zigzag 時間軸 / 不規則興趣卡片）
- [x] p5.js／YouTube iframe 嵌入，並實際測試過哪些能嵌入、哪些會被擋（見下方「iframe 嵌入測試結果」）
- [x] `npm run lint`、`npm run build` 皆無錯誤
- [x] 本地以 Playwright 檢查 390px（手機）/ 820px（平板）/ 1440px（桌機）三種寬度、三個頁面、頁面間導覽（URL 確實改變）
- [x] Git 初始化並完成第一版 commit / push（單頁版本）
- [x] GitHub repo 建立（public）：`sydney052007/sydney-portfolio`
- [x] 第三輪大改版：多頁架構、editorial 視覺方向、iframe 嵌入、demo 連結更新，已 commit / push
- [x] 作品集大圖卡片改成「即時 live iframe 預覽」（不是靜態截圖），並實測驗證哪些 demo 適合嵌入（見下方表格）
- [x] Vercel 專案建立與正式部署（連結 GitHub repo，非 CLI 檔案式部署），已關閉部署保護，正式網址可公開存取
- [x] 新增 `/interests` 興趣頁（4 個分類切換 + 烘焙食譜清單/展開互動），Navbar 加上「興趣」連結
- [x] `/interests` 頁視覺改成跟 `/projects` 一致的無邊框分隔線風格（4 分類方塊、媒材清單、食譜展開框）
- [x] 首頁最下方從完整興趣區塊改成「作品集／更多經歷／興趣」三頁預告，套用全站統一的清單樣式；刪除不再使用的 `Interests.tsx`、`data/interests.ts`

### 第五輪：首頁三分頁預告 + 全站清單樣式定案

首頁最下方（`About` 之後）原本是完整的興趣區塊（4 個興趣各自完整描述），改成 `src/components/PagePreviews.tsx`：作品集／更多經歷／興趣三個頁面的簡短預告（各頁副標題的縮短版）+「前往 →」連結，直接套用 `/projects` 的無邊框分隔線樣式（`border-t border-dashed`、`01/02/03` 編號、`font-serif` 標題）。因為這個元件取代了原本的首頁興趣預覽，舊的 `src/components/Interests.tsx` 和 `src/data/interests.ts` 已經沒有任何地方引用，直接刪除。**全站清單類內容的視覺風格到這輪算是定案**：baseline 是 `/projects`，唯二例外是 `/experiences` 時間軸卡片和 `/projects` 本身的大圖 live 預覽卡片（原因見上方「清單類內容統一規則」）。

### 第四輪：`/interests` 興趣頁

1. **頁面架構**：`src/app/interests/page.tsx`（頁首 + 開場白）+ `src/components/InterestsExplorer.tsx`（"use client"，管理目前選中的分類 `painting`/`music`/`textile`/`baking`，4 個分類方塊桌機一列、手機 `grid-cols-2` 排成 2x2，選中的分類方塊用強調色標示，下方內容面板用 `page-fade-in`（沿用 `template.tsx` 的同一個 CSS keyframe）在切換分類時重新觸發淡入）。
2. **繪畫／織品手作**：共用 `src/components/MediaList.tsx` 渲染純文字清單，資料在 `src/data/media.ts`（`MediaItem = { name; images?: string[] }`），沒有巢狀點擊互動，`images` 欄位預留但目前皆為空。
3. **音樂**：`src/components/MusicPanel.tsx`，純文字，沒有資料結構可言，就是一個字串常數。
4. **烘焙**：`src/components/BakingPanel.tsx`（"use client"，自己管理選中的食譜），縮圖清單用 `next/image`（本地檔案，非任意來源，適合用 `next/image` 做壓縮/優化），資料在 `src/data/recipes.ts`（`Recipe = { name; image; description; meta }`，`meta` 是「份量／總時間」那行小字，跟主要敘述文字分開排版）。5 張食譜照片存在 `public/images/interests/baking/`，原始檔案單張 2.4~4.4MB（手機直出未壓縮），**沒有事先壓縮**，靠 Next.js／Vercel 的 `next/image` 優化管線在請求時動態產生縮圖，不影響網站呈現，但 git repo 本身會多背 ~18MB 的原始檔案體積，之後如果要精簡 repo 大小可以考慮換成先壓縮過的版本。

### 這一輪（第三輪：多頁 + editorial 改版）做了什麼

1. **多頁路由**：拆成 `src/app/page.tsx`（首頁：自我介紹＋三頁預告）、`src/app/projects/page.tsx`（作品集）、`src/app/experiences/page.tsx`（更多經歷）、`src/app/interests/page.tsx`（興趣）。Navbar／Footer 移到 `src/app/layout.tsx` 全站共用，`src/app/template.tsx` 負責路由切換時的淡入轉場。
2. **視覺方向改成 editorial／藝廊質感**：暖米白背景、標題用 serif／內文用 sans 的字體對比、強調色用在時間軸縱線、bio 裝飾線、專案編號等版面元素上，不只是標籤底色。
3. **作品集不對稱網格 + live 即時預覽**：`Project` 型別新增 `livePreview?: boolean`（是否已實測確認這個 demo 可以安全嵌入 iframe）。`livePreview: true` 的專案（農業行情比較網站、展覽語音導覽系統）用大圖卡片（`md:col-span-2`），卡片左半邊直接嵌入該專案**部署好的真實網站**（用 CSS `scale(0.4)` 把 iframe 內容放大到 250% 再縮小顯示，模擬「桌面版縮圖」效果，`pointer-events-none` 讓它是純預覽不能互動）——好處是內容永遠是最新的，不會因為改版而過期，也不需要另外準備截圖檔案。其餘專案（Artstore、Attendance System、Mos Sales App）維持純文字、較輕量的條列樣式，`ProjectCard` 多一個 `wide` prop 控制純文字卡片要不要佔滿兩欄。**注意：曾經用過 Tailwind `grid-auto-flow: dense` 讓卡片自動排出不對稱網格，但 dense 會為了補空隙把後面的卡片視覺上拉到前面（例如 04 跑到 02 上面），閱讀順序跟編號對不起來，2026-08-22 已經改成 `layoutProjects()` 顯式計算版面，卡片一律照陣列順序排列，不會再有這個問題。**
4. **更多經歷改成 zigzag 時間軸**：`Experience` 型別新增 `embeds?: ExperienceEmbed[]`，項目用 `src/components/ExperienceItem.tsx` 沿中央/左側時間軸縱線左右交錯排列（`src/app/experiences/page.tsx` 畫縱線，手機版收合成單欄、時間軸貼左）。
5. **iframe 嵌入**：新增 `src/components/EmbedFrame.tsx`，YouTube 用 16:9 畫框；p5.js 用 sketch 實際的 `createCanvas()` 尺寸（`nativeWidth`/`nativeHeight`，見 `experiences.ts`）——**p5.js 編輯器的「full」檢視不會自動縮放適應 iframe 大小，而是照畫布原生像素渲染**，如果直接把它塞進一個比例不符的方形/固定尺寸畫框會被裁切。做法是讓 iframe 用畫布原生尺寸（例如 B612 是 500×1000）渲染，外層再用 CSS `transform: scale()` 整個縮小到想要的顯示寬度（預設 300px），這樣才能完整顯示整件作品又不用佔滿版面。外層都有畫廊風格的細邊框＋陰影「相框」效果。
6. **demo 連結更新**：Attendance System 補上新的 demo 連結；展覽語音導覽系統補上 demo 連結；Artstore 在 2026-08-23 也補上新的 demo 連結（`artstore-iyld.vercel.app`），但這個網站自己設定了 CSP `frame-ancestors 'self'`，明確擋掉跨網域 iframe 嵌入，所以只加 `demo` 連結、沒有設 `livePreview`，卡片維持純文字樣式。

### iframe 嵌入測試結果（用無頭瀏覽器實際載入驗證過，不是憑猜測）

更多經歷（p5.js／YouTube／akaSwap）：

| 項目 | 結果 | 處理方式 |
|---|---|---|
| 小王子的 B612（`/full/x8a54f3s_`） | ✅ 正常渲染（但畫布原生尺寸是 500×1000，一開始用固定方形畫框裁切掉大半作品，2026-08-22 改成「原生尺寸 + CSS scale 縮小」才顯示完整） | 嵌入 p5.js iframe，`nativeWidth: 500, nativeHeight: 1000` |
| 聽樹木在說話（YouTube `/embed/LtkxBMrIcHI`） | ✅ 正常渲染 | 直接嵌入 YouTube iframe，另一支影片（`dE76uhe8yB0`）保留為連結 |
| p5.js 手機殼設計課程教學片段（YouTube `/embed/CBCg_8X5azg`） | ✅ 正常渲染 | 直接嵌入 YouTube iframe |
| p5.js 手機殼設計課程「修改後」（`/full/rOoA_hkb7`） | ❌ **不是被 iframe 權限擋住，是這個 p5.js 專案本身有程式錯誤**（`sketch.js` 第 27 行把 `COLOR` 陣列全部註解掉但後面程式碼還在用它，導致畫布空白，console 有 p5.js 自己噴出的錯誤訊息） | 沒有嵌入，改成純連結按鈕（編輯器修改前/修改後、課程講義）。**這是 Sydney 自己 p5.js 專案的既有 bug，不是這個作品集網站的問題**；如果之後想嵌入，需要先回 p5.js 編輯器把那幾行 `COLOR` 相關程式碼修好 |
| 典藏・記憶（akaSwap `event/csghs1250`） | ❌ 回傳 `X-Frame-Options: sameorigin`，瀏覽器直接拒絕顯示 | 沒有嵌入，改成連結按鈕 |

作品集（四個有 demo 連結的專案，測試能不能當成 live 預覽嵌入卡片）：

| 專案 | 結果 | 處理方式 |
|---|---|---|
| 農業行情比較網站（agri-price-compare） | ✅ 正常渲染，反覆測試皆穩定 | `livePreview: true`，大圖卡片嵌入即時預覽 |
| 展覽語音導覽系統（siena-exhibition） | ✅ 正常渲染，反覆測試皆穩定 | `livePreview: true`，大圖卡片嵌入即時預覽 |
| Attendance System（attendance-system-theta-two） | ⚠️ **不穩定**：單獨嵌入測試會正常顯示登入畫面，但放進實際頁面（跟另外兩個 iframe 同時載入）時，該站自己的 client-side 主題初始化邏輯偶爾會失敗，畫面整個空白（DOM 其實有載入，但 CSS 變數沒套上、視覺上什麼都看不到）。這是 Attendance System **自己的程式**在跨網域 iframe 環境下的既有脆弱點（很可能跟第三方 iframe 的 storage 存取限制有關），不是這個作品集網站能修的，而且用戶瀏覽器的第三方隱私限制只會讓這個問題更常出現 | 沒有設 `livePreview`，維持純文字條列卡片，但 `demo` 連結還留著、按下去直接開新分頁正常可用（單獨開啟這個網址完全沒問題，只有「嵌在 iframe 裡」不穩定） |
| Artstore（artstore-iyld，2026-08-23 補上的新 demo） | 一開始 ❌ 被 CSP `frame-ancestors 'self'` 擋掉；Sydney 把 Artstore 的 CSP 改成 `frame-ancestors 'self' https://sydney-portfolio-iota.vercel.app`（白名單加上正式網址）後 ✅ 正常渲染，已在正式網址上實測確認 | `livePreview: true`，大圖卡片嵌入即時預覽。**注意：這個 CSP 白名單是鎖定 `https://sydney-portfolio-iota.vercel.app` 這個確切網域**，所以本地 `npm run dev`（localhost）測試這張卡片時仍然會被擋，這是預期行為不是 bug；如果之後這個 Vercel 網址改變（例如換成自訂網域），要記得回 Artstore 那邊同步更新 CSP 白名單，不然嵌入又會失效 |

### 已知待辦 / 之後可能要補的事

- p5.js「手機殼設計課程（修改後）」的 sketch 本身有 bug（見上表），畫布目前空白。之後如果 Sydney 想把它也嵌入網站，要先去 p5.js 編輯器把 `COLOR` 那幾行改好。
- Attendance System 的 live 預覽不穩定（見上表），目前用純文字卡片 + 正常可用的 demo 連結。如果之後 Sydney 修好那個站台自己的第三方 iframe 相容性問題，可以把 `src/data/projects.ts` 裡 Attendance System 那筆加上 `livePreview: true` 改回大圖即時預覽卡片。
- 自我介紹（`profile.bio`）已在 2026-08-22 更新為新版本（藝術背景 + 走向程式的心路歷程，共 7 段），標點符號統一為全形。之後如果還要再改，直接改 `src/data/profile.ts` 的 `bio` 陣列即可。
- 目前沒有放 LinkedIn 或其他社群連結（尚未提供），之後有的話可以加進 `src/data/profile.ts` 的 `contact` 物件，並在 `About.tsx` / `Footer.tsx` 加上對應連結。
- `/interests` 頁面的繪畫、織品手作目前都沒有照片，`src/data/media.ts` 裡每個 `MediaItem` 已預留 `images?: string[]`，之後補照片把檔案放進 `public/images/interests/` 並在對應項目填上路徑陣列即可，不用改元件邏輯。
- 烘焙食譜清單預期維持 5-6 則、汰換不無限增加，之後要換掉某一則時直接改 `src/data/recipes.ts` 對應物件（換照片記得同時把新檔案放進 `public/images/interests/baking/`）。
- Attendance System、Mos Sales App 標示為「2026/7 ~ 2026/8」（已結束），之後有重大進展或想拿掉時間標示時，記得更新 `statusLabel` 或直接移除該欄位。

## 程式架構

```
src/
  app/
    layout.tsx              # 全站 Metadata、<html>/<body>、掛 Navbar + Footer + <main>
    template.tsx              # 路由切換時的淡入轉場（page-fade-in，純 CSS，不用動畫函式庫）
    globals.css                 # Tailwind 匯入、色彩變數（含強調色）、兩組字體堆疊、page-fade-in keyframe
    page.tsx                     # 首頁「/」：組裝 About + PagePreviews（三頁預告）
    interests/page.tsx            # 「/interests」：興趣頁頁首 + InterestsExplorer
    projects/page.tsx              # 「/projects」：作品集標題 + 不對稱網格（layoutProjects() 顯式計算卡片順序/寬度，不用 grid-auto-flow: dense）
    experiences/page.tsx            # 「/experiences」：更多經歷標題 + zigzag 時間軸（縱線 + ExperienceItem）
  components/
    Navbar.tsx                       # "use client"，sticky 導覽列，usePathname() 判斷 active 頁面（4 個連結）
    About.tsx                         # 首頁自我介紹：姓名（serif）、系級、求職狀態 badge、bio（左側裝飾線）、技能標籤、聯絡方式
    PagePreviews.tsx                    # 首頁最下方三頁預告（作品集/更多經歷/興趣），套用 /projects 基準樣式
    InterestsExplorer.tsx               # "use client"，/interests 頁的 4 分類切換 tab + 內容面板容器
    PaintingPanel.tsx / TextilePanel.tsx  # 繪畫／織品手作內容面板，都是 MediaList 包一層文字說明
    MediaList.tsx                          # 繪畫/織品手作共用的純文字清單元件，讀 data/media.ts，images? 預留擴充
    MusicPanel.tsx                          # 音樂內容面板，純文字，無資料檔
    BakingPanel.tsx                          # "use client"，烘焙縮圖清單 + 點擊展開食譜文字，讀 data/recipes.ts
    ProjectCard.tsx                           # 作品集卡片，依 project.livePreview 切換「大圖 live iframe 預覽卡片」/「純文字條列」兩種樣式
    ExperienceItem.tsx                         # 更多經歷單一項目：時間軸圓點 + 左右交錯定位 + 內容卡片
    EmbedFrame.tsx                              # p5.js（原生尺寸+CSS scale 縮小）/ YouTube（16:9）iframe 畫框，畫廊風格邊框+陰影
    Footer.tsx                                   # 版權資訊 + Email/GitHub 連結
  data/
    profile.ts                                   # 個人資料：姓名、系級、求職狀態（badge/detail）、自我介紹、技能、聯絡方式
    media.ts                                       # /interests 頁的繪畫/織品手作資料（型別 MediaItem：name/images?）+ 音樂文字常數 + 織品手作開場白
    recipes.ts                                      # 烘焙食譜清單（型別 Recipe：name/image/description/meta）
    projects.ts                                      # 主要專案清單（型別 Project：name/description/tech/github/demo?/livePreview?/statusLabel?）
    experiences.ts                                    # 更多經歷清單（型別 Experience：title/description/tags/links[]/embeds?）
```

## 內容資料來源

自我介紹文字（`profile.bio`）、五個主要專案與四段更多經歷的文字內容，皆維持先前規格定案的版本，這輪改版沒有更動文字，只調整版面呈現方式與新增 iframe 嵌入。demo 連結（Attendance System、展覽語音導覽系統）與 `livePreview` 欄位是這輪新增。

**之後要改內容，只需要動 `src/data/*.ts`，不用碰元件程式碼：**

- 修改自我介紹、求職狀態、技能標籤、聯絡方式 → 改 `src/data/profile.ts`
- 修改首頁最下方三頁預告文字 → 改 `src/components/PagePreviews.tsx` 裡的 `previews` 陣列
- 修改 `/interests` 頁的繪畫／織品手作項目或音樂文字 → 改 `src/data/media.ts`；補照片時把檔案放進 `public/images/interests/` 並在對應 `MediaItem` 的 `images` 陣列加上路徑
- 新增／移除／修改烘焙食譜 → 改 `src/data/recipes.ts`，照片放進 `public/images/interests/baking/`（建議先壓縮過再放，原始手機照片單張常常 2-4MB）
- 新增／移除／修改主要作品集卡片 → 改 `src/data/projects.ts`（`livePreview: true` 會變成大圖即時預覽卡片並佔兩欄，記得先照本文件「iframe 嵌入測試結果」的方法實測過該 demo 能不能穩定嵌入再設定；沒有 `livePreview` 就是純文字條列卡片；沒有 demo 連結時不要填 `demo` 欄位）
- 新增／移除／修改更多經歷卡片 → 改 `src/data/experiences.ts`（`links` 陣列可以放 1 個到多個連結；`embeds` 陣列可以放 p5.js 或 YouTube 嵌入，型別是 `{ kind: "p5"; url; nativeWidth; nativeHeight; displayWidth? }` 或 `{ kind: "youtube"; videoId }`。p5.js 的 `nativeWidth`/`nativeHeight` 要填該 sketch `createCanvas()` 的實際尺寸，不然畫面會被裁切，見上方 iframe 測試結果表格的說明；不確定能不能嵌入的來源建議先用本文件「iframe 嵌入測試結果」的方法實測再加）

## 部署資訊

- GitHub repo：`https://github.com/sydney052007/sydney-portfolio`（public，多頁 editorial 改版已 push 上去）
- Vercel 專案網址：`https://sydney-portfolio-iota.vercel.app/`（已連結 GitHub repo，push 到 main 會自動重新部署）
  - 部署時 Vercel 專案預設開啟了「Vercel Authentication」（部署保護），會導致所有訪客（包含面試官）看到 404，Sydney 已在 Vercel Dashboard → Settings → Deployment Protection 手動關閉。**之後如果重新連結專案或建立新專案，記得檢查這個設定沒有被重新打開。**

## 之後的維護方式

1. 改內容 → 改 `src/data/*.ts`（或元件樣式）
2. 本地確認：`npm run lint && npm run build`（有需要的話 `npm run dev` 肉眼檢查，並確認手機/平板/桌機三種寬度 RWD 正常、四個頁面切換 URL 有正確改變）
3. 如果新增/修改 iframe 嵌入來源，先實際在瀏覽器測試能不能顯示（很多網站會用 `X-Frame-Options` 或 CSP 擋 iframe），不要留空白或報錯的 iframe，測不出來就用連結按鈕代替
4. `git add` → `git commit` → `git push`（推送前跟 Sydney 確認一次）
5. Vercel 已連結此 GitHub repo，push 到 main 分支後會自動觸發重新部署，不需要手動操作
