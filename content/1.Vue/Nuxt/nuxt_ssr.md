# \[ Nuxt ] SSR (Server Side Rendering) 伺服器端渲染
伺服器端渲染（SSR）是一種在伺服器端渲染 HTML 頁面的技術，表示伺服器收到瀏覽器的請求之後，在伺服器端生成「完整的 HTML」。因為生成 HTML 的時候會在伺服器端先取得內部或外部 API 資料，所以 SSR 可以省去多次的來回往返。

## SSR 的優點
* 更快的首次渲染時間：SSR 可以更快地向用戶提供內容，因為 HTML 頁面已經在伺服器端渲染完成。
* 更好的 SEO：SSR 可以讓搜尋引擎看到完整的 HTML 頁面，這可以提高搜尋排名。
* 更好的無障礙性：SSR 可以為不使用 JavaScript 的用戶提供更好的體驗。


## SSR 的缺點
* 更複雜的開發：SSR 需要開發人員了解伺服器端渲染技術。
* 潛在的性能問題：SSR 增加了伺服器的負載，如果沒有正確配置，可能會導致性能問題。


## SSR 的兩個流行框架
* Next.js
* Nuxt.js


#### 參考資料
* \[\[教學\] SSR 與 CSR 深度解析：從渲染方式到效能優化\](https://www.shubo.io/rendering-patterns/#ssr-server-side-rendering){target="_blank"}
* Gemini AI