# \[ 效能優化 ] 圖片最佳化

>【shout out to 莫力全✨<a href='https://ithelp.ithome.com.tw/users/20113277/ironman/3877' target='_blank'>今晚，我想來點 Web 前端效能優化大補帖！</a>】 
> 讀後重點整理 & 重述 & 一點點自己的補充


幾乎所有的網站都一定會用到圖片和 icon，甚至可能會需要載入大量的圖片，它們也是**網站中佔比最多的資源**，所以透過優化這些圖片資源，就可能帶來很大的效能提升。能用 CSS 做到就用 CSS，不要輕易使用耗費大量資源的圖片君。


## 不同圖片格式使用時機
### JPEG ＆ PNG
它們是由像素陣列（Pixel Array）來表示的圖像，檔案大小較大，耗能較高。

這時候就會想問，耗能很高怎麼辦~~~ 
就跟我們棉被衣服太厚，很佔空間怎麼辦是一樣的解法：**壓縮它就對了**！圖片壓縮後大小就變小囉。有的公司會建立自己的圖片壓縮服務，或是使用 webpack 等 module bundler 來將壓縮整合到開發流程裡，或是使用線上平台。但先別急著開始壓縮！
* <a href='https://tinypng.com/' target='_blank'>tiny-png</a>
* <a href='https://jpeg-optimizer.com/' target='_blank'>jpeg-optimizer</a>


壓縮前先看看特點跟使用時機：

#### JPG

有損壓縮，會降低圖片的質量，壓縮後是不可逆的。
相同條件下的 JPG 比 PNG 小。
非常大的背景圖片，會選擇使用 JPG，檔案小了許多，實際上的視覺品質也不會差異太大，但要考量下面提到的 PNG 第 2 點。

#### PNG

無損壓縮，壓縮後不影響圖片品質。
PNG 在處理含有文字、線條和輪廓較為明顯的影像表現較好。
如果圖檔未來會一直有更改需求的，使用 PNG，因 JPG 每次修改儲存後可能會導致圖片品質越來越差。


#### SVG (Scalable Vector Graphics)
向量圖

* 放大多少都不會變模糊。
* 比點陣圖還要小。
* SVG 可以透過 Gzip 壓縮。
* <a href='https://jakearchibald.github.io/svgomg/' target='_blank'>最小化優化工具</a>

建議優先使用 SVG 的情境，例如：企業的 Icon、圖表、圖示...等。而 PNG 與 JPG 等點陣圖其實也可以轉為向量圖，但並不是所有的點陣圖都適合轉檔，比較適合的情境有：

* 主要由幾何圖形組成的圖片
* 較小的圖片 （長x寬）
* 不希望產生圖片失真、邊緣會有點模糊的狀況


#### WebP
* 檔案大小比 PNG 與 JPG 小很多，多數情況都更推薦用 WebP。
* 支援動圖，常見的 GIF 也可以轉為 WebP 並且獲得更小的體積。
* 支援度高：現代的網頁瀏覽器，幾乎都<a href='https://caniuse.com/?search=webP' target='_blank'>支援 WebP</a>。

## Responsive Image 響應式圖片
網頁要響應式設計 (RWD)，圖片也需要響應式。響應式圖片的概念就跟 RWD 很像，我們需要依照裝置的變化，調整版面 (圖片)。如果一張圖片用到底，有可能長寬比失衡或解析度失真。另外，如果在小尺寸的裝置下載非常大尺寸的照片，除了會增加 page load time，瀏覽器也會為了縮小大圖而耗費性能。這時候就需要依據不同的瀏覽器視窗大小、裝置解析度，呈現對應大小的圖片。


同一張圖分為 1x、2x、3x 總共三個版本，1x~3x 代表的是圖片解析度，不同裝置需要依照不同的 <a href='https://blog.infolink.com.tw/2021/rediscover-pixel-dpi-ppi-and-pixel-density/' target='_blank'>DPR</a> (device pixel ratio，詳細介紹查看連結文章) 來呈現尺寸適合的圖片。

實際上我的專題該怎麼去處理 1x 2x 3x 這個問題，目前還在嘗試中...

#### 資料來源
* <a href='https://ithelp.ithome.com.tw/articles/10268776' target='_blank'>Day06 X 圖片最佳化</a>
* <a href='https://www.explainthis.io/zh-hant/swe/fe-jpg-png-webp-svg' target='_blank'>前端圖片格式選擇，什麼時候該用JPG、 PNG、WebP 或 SVG 呢?</a>