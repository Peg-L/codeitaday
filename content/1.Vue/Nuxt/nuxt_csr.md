# \[ Nuxt ] CSR (Client Side Rendering) 客戶端渲染
CSR（Client Side Rendering）是一種將渲染資料的過程交由瀏覽器端處理的方法。

瀏覽器向 server 發送 request 後，接收到空的 HTML 頁面和 JS Bundle 等檔案、資源，所有的邏輯、取資料、交互事件、模板都在客戶端進行處理和加載。


## CSR 的優點
* 可以使用 SPA (Single Page Application，單頁應用程式) 的架構，提供更好的用戶體驗和更快的頁面切換速度。
* 可以使用更多的 JS 資源來支持更複雜的交互和動畫效果。
* 可以更好地控制頁面的渲染過程，並且可以更好地利用瀏覽器的性能。


## CSR 的缺點
* 首次加載時可能需要更多的時間，因為需要加載並執行 JS Bundle 文件。
* SEO 問題，搜尋引擎爬蟲可能無法正確爬取和索引頁面內容，因為內容是通過 JS 渲染的
* 對於低端設備和網路慢的環境，可能會出現更長的加載時間和更差的用戶體驗。


#### 參考資料
* <a href='https://www.shubo.io/rendering-patterns/#csr-client-side-rendering' target='_blank'>[教學] SSR 與 CSR 深度解析：從渲染方式到效能優化</a>
* <a href='https://youtu.be/GBdO5myZNsQ?si=FA3NtoDc3R7-d-Ry' target='_blank'>Nuxt 3 Crash Course #1 - What is Nuxt?</a>
* Perplexity AI 