# \[ 效能優化 ] 使用者體驗指標介紹
>【shout out to 莫力全✨<a href='https://ithelp.ithome.com.tw/users/20113277/ironman/3877' target='_blank'>今晚，我想來點 Web 前端效能優化大補帖！</a>】 
> 讀後重點整理 & 重述 & 一點點自己的補充

## Core Web Vitals
這篇介紹 Google Lighthouse (同 PageSpeed) 使用者體驗的三個核心指標 Core Web Vitals：LCP、INP、CLS。原本的 FID 已被 INP 取代，FID 只支援到 2024 年 9 月。

* LCP (Largest Contentful Paint) 最大內容繪製
* INP (Interaction to Next Paint) 與下一個顯示的內容互動
* CLS (Cumulative Layout Shift) 累計版面配置轉移
> Google 指出若 75% 以上的使用者在網站中的瀏覽體驗都能夠通過以上 3 種指標，就能夠大幅的提升使用者的搜尋體驗，甚至能夠讓原本因等待而離開的使用者減少 24%！


### <a href='https://web.dev/articles/lcp?hl=zh-tw' target='_blank'>LCP (Largest Contentful Paint) 最大內容繪製</a>
LCP 會計算網頁可視區 (viewport) 中**最大元素的繪製所需時間**，也就是頁面的最大元素被使用者看到所花費的時間，是速度的指標。最大元素會隨著頁面載入跟著變化，可能本來是標題，後來又變成圖片。

#### 如何優化 LCP

因為她是計算最大元素的繪製所需時間，那解決方法當然就是盡可能加快最大化元素 candidates 的載入速度囉，有以下這 4 點做為改善大方向 (細部建議可參考<a href='https://ithelp.ithome.com.tw/articles/10267350' target='_blank'>原文</a>)。
* 減少伺服器回應時間
* 盡量避免 Blocking Time
* 加快資源載入的時間
* 避免使用客戶端渲染 (CSR)


### <a href='https://web.dev/articles/inp?hl=zh-tw' target='_blank'>INP (Interaction to Next Paint) 與下一個顯示的內容互動</a>
INP 用來觀察網頁載入後，使用者與網頁的互動時間。所有的點擊與按鍵行為都會觸發網頁的互動，效能工具會**將所有行為中「最長的互動時間」計算為 INP**，而前核心指標 FID 只計算使用者在頁面「首次」的互動時間，因此 INP 更能客觀的評估網站是否過度延遲。

優化方式跟 FID 雷同，有以下 4 個方向可以實行：

1. 拆解執行過久的 JavaScript
2. 優化頁面的 JavaScript 載入流程
3. 使用 Web Worker 技術
4. 減少 JavaScript 的執行時間

另外官方也建議，某些互動所需時間會比其他互動更久，但對於互動特別複雜的互動而言，建議您快速呈現一些初始視覺回饋，用來告訴使用者正在發生某些事情。想到之前使用某些網站，他們會顯示灰色粗略的頁面 Layout，加上一點動畫，讓你知道內容正在跑，我想就是應用這樣的概念。


### CLS (Cumulative Layout Shift) 累計版面配置位移
這個指標是評估<a href='https://web.dev/articles/user-centric-performance-metrics?hl=zh-tw#types_of_metrics' target='_blank'>視覺化穩定性</a>的重要指標，因為它可以量化使用者遇到版面配置不如預期變更的頻率。

非預期的版面配置變化可能的情況有：當文字突然移動時，就造成使用者點選錯誤的連結或按鈕，或是會動態調整大小的第三方廣告等等。


## RAIL Model
Google 提出的效能指標，是一個「以使用者為中心」的模式。

RAIL 分別代表 Web App Life Cycle 裡的四個指標：

* R : Response
* A : Animation
* I : Idle
* L : Load

### Response 回應 : 在 50 毫秒內處理事件
研究指出人類從操作行為到感知反應有 100 毫秒的間隔，但瀏覽器還有其他工作要做，又佔用一半時間，所以回應 (Response) 建議在 50 毫秒內。



### Animation 動畫：在 10 毫秒內產生影格
就技術層面而言，每個影格的最大預算為 16 毫秒 (每秒 1000 毫秒 / 每秒 60 個影格)，但瀏覽器需要約 6 毫秒才能轉譯每個影格，因此每影格約 10 毫秒。



### Idle 閒置：最大化閒置時間
目標是將閒置時間最大化，「使用者的輸入事件在 50ms 以內就獲得回應」的可能性就會提升。

使用閒置時間完成延後工作。舉例來說，在初始頁面載入時，請盡量減少資料載入，然後使用閒置時間載入其餘網頁。
在 50 毫秒以內的閒置時間執行工作。如果時間超過，可能會干擾應用程式在 50 毫秒內回應使用者輸入內容的能力。
如果使用者在閒置時間的工作期間與頁面互動，使用者互動一律最優先，並中斷閒置時間工作。


### Load 載入：提供內容並在 5 秒內成為互動體驗
網頁載入不能慢!!! 網頁載入緩慢時，使用者注意力會逐漸減少，使用者會將工作視為毀損。可快速載入的網站平均工作階段較長、跳出率較低，以及更高的廣告可視度。

即使是在網速慢且中低規格裝置上使用網頁，首次載入的理想速度為 5 秒內進行互動，後續載入時，理想的目標是在 2 秒內載入網頁。

總之，網頁載入要快!!!



#### 參考資料
* <a href='https://ithelp.ithome.com.tw/articles/10267350' target='_blank'>Day04 X Core Web Vital & RAIL Model</a>
* <a href='https://ranking.works/knowledge/core-web-vitals/' target='_blank'>網站體驗核心指標(Core Web Vitals)：認識 LCP, CLS, FID, INP 優化技巧</a>
* <a href='https://web.dev/articles/cls?hl=zh-tw' target='_blank'>web.dev CLS INP LCP 等介紹</a>