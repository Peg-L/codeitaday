# Nuxt | 讓連結在新分頁開啟
撰寫部落格文章時，常常需要附上外部網站連結。希望即使使用者點選外部連結也不會直接覆蓋我的網站，而是在新的分頁開啟相關資源，減少網站跳出率。

## 外部網站
原本的寫法 1：`<a href="連結" target="_blank">連結文字</a>`，因為 markdown 可以結合 html 語法。<br/>
原本的寫法 2：搭配 VS Code snippet 設定 `alink` 關鍵字來快速產生 a 標籤的格式，再填寫內容。<br/>
目前寫法：看文章發現可以加上 attribute，搭配 [TabCopy](../../Tool/tool_url_copy.md) 快速複製標題和連結，取得目標格式 `[連結文字](連結){target="_blank"}`

## 這個網站
連結到這個網站的其他篇文章：`[連結文字](相對路徑)`