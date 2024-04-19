# \[ 效能優化 ] Code Minimize & Uglify
>【shout out to 莫力全✨<a href='https://ithelp.ithome.com.tw/users/20113277/ironman/3877' target='_blank'>今晚，我想來點 Web 前端效能優化大補帖！</a>】 
> 讀後重點整理 & 重述 & 一點點自己的補充

## Code Minimize & Uglify (程式碼最小化和醜化)
我們寫的程式碼 (HTML、CSS、JS) 可以經過轉譯：Minimize 最小化 和 Uglify 醜化，經過轉譯的程式碼會變得跟原本寫的不一樣，檔案變得更小、變醜就更難被抄襲。

> 1分鐘英文小教室
> 簡單拆解一下 Minimize，mini 這個字一定非常熟悉，就是我們常常講的「迷你」，把它變成動詞後 ➡️ minimize：把東西變迷你，「最小化」的意思。
> ugly 醜陋的 ➡️uglify 醜化


Minimize 是以**程式的功能不受到影響為前提**，移除不必要的字元，例如：空白鍵、註釋、分號...等。Uglify 則是將原本名字很長的變數或函式名稱、參數替換成簡短的字元，犧牲程式可讀性 (變得比較醜) 來換取較低的檔案大小。而且！它還會打亂程式的邏輯，例如改變原本函式的順序，避免程式碼輕鬆的被別人拿去研究或抄襲。

完全沒想到還有這個原因！好酷！

> 檔案大小其實不會差多少，不過當檔案本身很胖時，Minimization 與 Uglify 帶來的載入效能增長也是不可忽略的。


## 怎麼執行 Minimize & Uglify
如果想全部自己想辦法手動改，我們肯定會瘋掉。其實常見的打包工具 (例如：gulp、Webpack) 與框架都預設相關的功能來自動幫忙處理，太棒了！！！


#### 參考資料
* <a href='https://ithelp.ithome.com.tw/articles/10268059' target='_blank'>Day05 X Code Minimize & Uglify</a>