# 效能優化 | 為什麼要優化前端效能?

>【shout out to 莫力全✨[今晚，我想來點 Web 前端效能優化大補帖！](https://ithelp.ithome.com.tw/users/20113277/ironman/3877){target="_blank"}】 
> 讀後重點整理 & 重述 & 一點點自己的補充

## 3大主因
* 使用者體驗 (User Experience，UX)
* 影響營收的重要指標
* SEO

### 使用者體驗 UX
能不能「流暢且迅速地」使用一個網站，大大影響使用者體驗。前端效能差的網站，一下這邊卡 2 秒，那邊等 10 秒，功能多、網站美也是沒鹿用。換位思考，如果我們是使用者，肯定直接關掉跟他說聲：掰掰，慢走不送。


### 影響營收的重要指標
從前面 UX 太爛延伸的大問題就是!!! 
**用戶跟我們的網站掰掰，企業 $$$ 也跟著掰掰💸💸💸**
> Amazon：網頁載入的速度每增加 100 ms，營收就減少 1%。

> Akamai：網站沒有在 3 秒內顯示完，40% 的消費者會選擇直接跳離網站。


### SEO 搜尋引擎優化
從 2020 年發的[這篇文章](https://developers.google.com/search/blog/2020/11/timing-for-page-experience?hl=zh-tw){target="_blank"}可以看出網頁體驗的重要性，Google 會在搜尋結果中突顯出提供優質網頁體驗的網頁。(這是我目前找到相關度高且年份離比較近的文章，方針應該不會差距太大?)

莫大也說：會將 Page Speed 納入 SEO Ranking 考量也跟使用者體驗有關，用戶無法忍受一個緩慢且卡頓的網站，這類網站被關掉的機率高，搜尋引擎當然也不希望自己列出來的頁面充斥這類網站。

補充：查到 Google 在講搜尋的運作方式，其中一項就是「[網頁的可用性](https://www.google.com/search/howsearchworks/how-search-works/ranking-results/#usability){target="_blank"}」，有另一個連結連到 Google [網頁體驗](https://developers.google.com/search/docs/appearance/page-experience?hl=zh-tw){target="_blank"}的說明，也有其他如何提升 SEO 的重點。


說到底，雖說是 3 大主因，其實最根本都還是跟**使用者體驗**掛勾，能不能滿足用戶需求，讓用戶開心順暢使用，顧客開心，公司就開心。

## 多參考成功案例
文內有特別提醒：「有時候過早且過度的優化反而不是一件好事」，只能最小限度的避免效能瓶頸的出現，出現了瓶頸也許也沒辦法迅速找出問題在哪。

多參考知名企業的案例，看前人是發現什麼問題，怎麼找到問題，怎麼解決問題，還有效能的前後對比差異。

> 站在巨人肩上，**學習他們的經驗與尋找問題時的脈絡思維**

#### 參考/學習資源
* [Day02 X 為什麼要在前端做效能優化？| 莫力全 Kyle Mo](https://ithelp.ithome.com.tw/articles/10265891){target="_blank"}