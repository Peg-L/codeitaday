# \[ CSS ] display: block、inline、inline-block 的差別

## `display: block` 區塊元素
* 會佔滿父元素的寬度
* 會另起一行
* 可以設定 width、height、max-width、max-height 等 CSS 屬性來更改該元素的寬高
* 如：`<div>`、`<p>`、`<ul>`、`<li>`、`<h1>`~`<h6>`...等


## `display: inline` 行內元素
* 會自適應內容大小
* 不能設定 width、height、margin 來改變寬高
* 會與其他行內元素並排在同一列
* 例如：`<a>`、`<span>`、`<img>`... 等


## `display: inline-block` 行內區塊
inline-block 結合了行內元素和區塊元素的特點，會像 inline 元素一樣的同行排列，但同時擁有 block 元素可以設定寬高的特性。


#### 參考資料
* <a href='https://www.explainthis.io/zh-hant/swe/css-center' target='_blank'>CSS 中 display 的值有什麼？inline、block 和 inline-block 有什麼差異？</a>
* <a href='https://eoscreative.co/center-things-on-web-page-html-css/' target='_blank'>水平置中的三種方法，你用對了嗎？</a>