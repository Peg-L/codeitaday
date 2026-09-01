---
seo:
  title: 阿榮 codeitaday｜前端工程師作品集
  description: 前端工程師林穎茹（阿榮）的作品集與學習筆記。參與過多種網站開發與維護，也有 Vue 專案實作經驗。
---

::u-page-hero
---
orientation: horizontal
class: anim-hero
ui:
  title: leading-[1.2]
---
#headline
[FRONTEND DEVELOPER]{.text-primary .font-semibold .tracking-widest .text-sm}

#title
嗨，我是阿榮，<br>
喜歡把需求想清楚的前端工程師

#description
我參與過不同類型的網站開發與維護，也有 Vue 專案的實作經驗。工作時，我習慣先確認需求，再透過查資料、實際測試與團隊討論找出做法。

  :::div{class="flex flex-wrap gap-2 mt-6"}
    ::::u-badge{color="primary" variant="outline" size="lg"}
    JavaScript
    ::::
    ::::u-badge{color="primary" variant="outline" size="lg"}
    HTML/CSS
    ::::
    ::::u-badge{color="primary" variant="outline" size="lg"}
    Tailwind CSS
    ::::
    ::::u-badge{color="primary" variant="outline" size="lg"}
    Vue 3
    ::::
  :::

#links
  :::u-button
  ---
  to: '#projects'
  size: xl
  trailing-icon: i-lucide-star
  ---
  查看精選專案
  :::

#default
  :::hero-visual
  :::
::

::u-page-section
---
id: projects
class: scroll-mt-24
title: 專案介紹
description: 工作上實際做過的專案
---
  :::u-page-grid
    ::::project-card
    ---
    type: INTERNAL SYSTEM
    title: 昊揚內部管理系統
    role: PM／前端
    start: '2026-06-01'
    range: 2026/06 ～ 現在
    tech:
      - HTML5
      - CSS
      - JavaScript
    ---
    行銷公司的內部營運管理系統，整合客戶、商機報價、專案執行、財務請款到人事績效等十個主要模組，取代原先分散於不同平台、雲端資料夾及 Google Sheets 的作業流程。

    - 參與客戶訪談、釐清作業流程與問題，產出需求文件初稿
    - 開發進度追蹤、任務拆分與派發，協調 SA／設計師與後端工程師
    - 需求階段不做設計稿，改以可互動原型讓客戶實際操作驗證流程
    ::::

    ::::project-card
    ---
    type: BOOKING PLATFORM
    title: 松昱商務中心
    to: https://goldenspace.com.tw/
    linkLabel: 查看網站
    role: 核心前端工程師
    start: '2025-08-01'
    end: '2026-01-31'
    range: 2025/08 ～ 2026/01
    tech:
      - Vue 3
      - TypeScript
      - Vite
      - Pinia
      - Tailwind CSS
    ---
    共享辦公空間的形象官網與會議室線上預約系統，提供分館瀏覽、多條件篩選與線上預約。

    - 建立專案與分層架構，依設計稿建立設計 Token
    - 實作會議室篩選、預約流程與可預約上限等業務規則
    - 開發 usePageSeo、useRoomSeo composable 統一管理 Meta 與結構化資料
    ::::

    ::::project-card
    ---
    type: SAAS PLATFORM
    title: 好金點商圈選址系統
    role: 前端（協作）
    start: '2024-11-01'
    end: '2026-06-30'
    range: 2024/11 ～ 2026/06
    tech:
      - Vue 3
      - TypeScript
      - Shadcn for Vue
      - Zod
      - VeeValidate
    ---
    在地圖上圈選範圍，分析人流、消費力與競業分布的商圈選址評估系統。

    - 負責登入、註冊、Email 驗證與重設密碼的切版與 API 串接
    - 將密碼顯示切換、閒置自動登出封裝為 composable，以 Zod 建立跨欄位驗證
    - 擴充並建置 Toast、Table、Pagination 等 Shadcn for Vue 共用元件
    ::::
  :::
::

::u-page-section
---
id: side-projects
class: scroll-mt-24
title: 自主開發
description: 為了解決自己遇到的問題而做的小工具
---
  :::u-page-grid
    ::::project-card
    ---
    type: BROWSER TOOL
    title: 審核小精靈
    to: https://peg-l.github.io/comment-tool/
    linkLabel: 開啟工具
    role: 個人開發
    tech:
      - JavaScript
      - Bookmarklet
      - localStorage
    ---
    以 bookmarklet 形式運作的網頁標註工具，拖進書籤列後可在任何網站上直接點選元素、寫下修改意見。

    - 解決審核意見散落在通訊軟體、email 與截圖的問題
    - 支援多頁面分組管理，標註自動存在瀏覽器本地
    - 一鍵複製整包專案資料或 AI prompt，直接交接給前端
    ::::

    ::::project-card
    ---
    type: MINI GAME
    title: 打掃抽籤小幫手
    to: https://peg-l.github.io/cleaning-duty-draw/
    linkLabel: 開啟工具
    role: 個人開發
    tech:
      - JavaScript
      - CSS
      - HTML
    ---
    辦公室打掃工作的隨機分配工具，把「誰要掃哪裡」變成抽籤遊戲。

    - 11 種抽籤模式：轉盤、扭蛋機、老虎機、賓果、夾娃娃機等
    - 人員與工作清單可自行維護，支援當日出席勾選
    - 純前端實作，含音效控制與結果累積紀錄
    ::::
  :::
::

::u-page-section
---
id: experience
class: scroll-mt-24
title: 工作經歷
description: 從英文教室走到前端的路
---
  :::u-page-grid
    ::::job-card
    ---
    icon: i-lucide-briefcase
    role: 前端工程師
    company: 筑今數位設計
    start: '2024-06-24'
    range: 2024/06/24 ～ 至今
    ---
    參與網站開發與維護，負責前端實作、既有功能調整與問題排查；部分專案亦參與需求訪談和進度協作。
    ::::

    ::::job-card
    ---
    icon: i-lucide-languages
    role: 英文老師
    company: 樂獅英語
    start: '2020-08-01'
    end: '2022-02-28'
    range: 2020/08 ～ 2022/02
    ---
    負責全英文教學、課前籌備與學生輔導，並與家長溝通學習狀況；也參與招生宣傳及全英活動企劃與主持，培養了資訊拆解、溝通表達與臨場應變能力。
    ::::
  :::
::

::u-page-section
---
id: about
class: scroll-mt-24
title: 關於我
description: Let's Code It A Day!
---
  :::u-page-grid
    ::::u-page-card
    ---
    class: reveal paw
    icon: i-lucide-notebook-pen
    title: 筆記傳送門
    to: /interview/1-1.interview_qlist
    ---
    Vue、JavaScript、TypeScript、CSS 到面試題，學到的都寫成筆記放在這。
    ::::

    ::::u-page-card
    ---
    class: reveal paw
    icon: i-simple-icons-discord
    title: 軟體社群經驗
    to: https://discord.gg/waterballsa
    target: _blank
    ---
    水球軟體學院社群幹部，2022/11 ～ 2024/05，轉職路上的起點。
    ::::

    ::::u-page-card
    ---
    class: reveal paw
    icon: i-lucide-palette
    title: 互動藝術程式「美」日挑戰
    to: https://openprocessing.org/user/352500/?o=41&view=sketches
    target: _blank
    ---
    2024/01 ～ 2025/11，每日一作的 p5.js 互動作品集，練生成式視覺與動畫。
    ::::
  :::
::
