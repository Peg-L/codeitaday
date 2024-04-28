# Nuxt | Nuxt | 一個框架的框架

對，沒錯。Nuxt 是一個框架 (Vue) 的框架。

Vue 是 [CSR (Client Side Rendering) 客戶端渲染](./nuxt_csr.md)，而 Nuxt 是 Universal Rendering，UR 結合了 SSR 和 CSR 的特點，最初會回傳已經渲染完畢的頁面外加 JS Bundle，一開始就具有完整的頁面內容有助於 SEO，瀏覽器載入頁面的速度也會比較快，等待時間越短，用戶越開心。再透過一個稱為 hydration 的過程將 vue 功能和互動性融入頁面中，這樣網頁又能同時具有 SPA (Single Page Application，單頁式應用) 的優點。


## [自動化和慣例](https://nuxt.com/docs/getting-started/introduction#automation-and-conventions){target="_blank"}
* 根據 `pages/` 結構定義 route：不用自己手動設定路由了！
* ​自動引入：ref、computed、composables 和元件等都不用自己手動引入了！


學到什麼再繼續補充 🤩


#### 參考資料
* [Nuxt 3 Crash Course #1 - What is Nuxt?](https://youtu.be/GBdO5myZNsQ?si=p1qOCuL-JdnOizwa){target="_blank"}