# sydney-portfolio — 專案說明（CLAUDE.md）

## 這是什麼專案

這是陳詠歆（Sydney Chen）的個人作品集網站。目的是求職／實習用的線上履歷補充素材：呈現自我介紹、技能與五個實作專案，讓面試官／HR 可以快速了解背景與作品。目標讀者主要是台灣的軟體工程 / 資料分析相關職缺招募方。

## 技術方案

- 框架：Next.js（App Router）+ TypeScript
- 樣式：Tailwind CSS v4（CSS-first 設定，`src/app/globals.css` 內的 `@theme` 區塊，沒有 `tailwind.config.ts`）
- 視覺風格：極簡風單頁網站，大量留白、清楚排版層級，不用花俏動畫
- 字型：**不使用 `next/font/google`**（避免部署環境連不到 Google Fonts 導致建置失敗），改用系統字型堆疊，定義在 `globals.css` 的 `--font-system`：
  `-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", Roboto, Helvetica, Arial, sans-serif`
- 部署平台：Vercel（透過 GitHub repo 串接，push 到 main 會自動重新部署）

## 目前進度

- [x] 專案建置（create-next-app，TypeScript + Tailwind + App Router + ESLint）
- [x] 內容資料抽成 `src/data/profile.ts`、`src/data/projects.ts`
- [x] 元件開發（Navbar / About / Projects / ProjectCard / Footer）
- [x] `npm run lint`、`npm run build` 皆無錯誤
- [x] 本地以 Playwright 檢查 390px（手機）/ 820px（平板）/ 1440px（桌機）三種寬度的 RWD，確認手機單欄、平板與桌機雙欄卡片網格正常
- [x] Git 初始化並 commit
- [ ] GitHub repo 建立與 push
- [ ] Vercel 專案建立與正式部署（連結 GitHub repo，非 CLI 檔案式部署）

> 部署完成後，請回來把下方「部署資訊」的網址補齊。

### 已知待辦 / 之後可能要補的事

- Artstore（P2P 藝術品租賣平台）目前沒有 demo 連結，之後如果有公開部署，要到 `src/data/projects.ts` 補上 `demo` 欄位。
- 展覽語音導覽系統（siena_exhibition）目前也沒有 demo 連結，之後有的話同上補上。
- Attendance System、Mos Sales App 標示為「2026/7 ~ 仍在進行」，之後專案完成或有重大進展時，記得更新 `statusLabel` 或直接移除該欄位。
- 目前沒有放 LinkedIn 或其他社群連結（尚未提供），之後有的話可以加進 `src/data/profile.ts` 的 `contact` 物件，並在 `About.tsx` / `Footer.tsx` 加上對應連結。

## 程式架構

```
src/
  app/
    layout.tsx      # 全站 Metadata、<html>/<body>、套用系統字型
    page.tsx         # 單頁組裝：Navbar + About + Projects + Footer
    globals.css       # Tailwind 匯入、色彩變數、系統字型堆疊
  components/
    Navbar.tsx        # sticky 頂部導覽列（姓名 + #about / #projects 錨點）
    About.tsx          # #about 區塊：姓名、系級、求職狀態、自我介紹、技能標籤、聯絡方式
    Projects.tsx       # #projects 區塊：讀取 data/projects.ts 並渲染 ProjectCard 網格
    ProjectCard.tsx    # 單張作品卡片：名稱、簡介、技術標籤、GitHub/Demo 連結、狀態標籤
    Footer.tsx         # 版權資訊 + Email/GitHub 連結
  data/
    profile.ts         # 個人資料（姓名、系級、求職狀態、自我介紹、技能、聯絡方式）
    projects.ts         # 專案清單（型別 Project：name/description/tech/github/demo?/statusLabel?）
```

## 內容資料來源

自我介紹文字、求職狀態、五個專案的名稱／簡介／技術標籤／連結，皆直接採用 2026-08-21 建置時給的規格內容定案，沒有額外潤飾或改寫。

**之後要改內容，只需要動這兩個檔案，不用碰元件程式碼：**

- 修改自我介紹、求職狀態、技能標籤、聯絡方式 → 改 `src/data/profile.ts`
- 新增／移除／修改專案卡片 → 改 `src/data/projects.ts`（新增專案直接在陣列裡加一筆符合 `Project` 型別的物件即可；沒有 demo 連結時不要填 `demo` 欄位，卡片會自動不顯示 Demo 按鈕）

## 部署資訊

- GitHub repo：`https://github.com/sydney052007/sydney-portfolio`（待 push 後確認可正常存取）
- Vercel 專案網址：*（待 Vercel 部署完成後補上正式網址，例如 `https://sydney-portfolio-xxxx.vercel.app` 或自訂網域）*

## 之後的維護方式

1. 改內容 → 改 `src/data/profile.ts` 或 `src/data/projects.ts`（或元件樣式）
2. 本地確認：`npm run lint && npm run build`（有需要的話 `npm run dev` 肉眼檢查）
3. `git add` → `git commit` → `git push`
4. Vercel 已連結此 GitHub repo，push 到 main 分支後會自動觸發重新部署，不需要手動操作
