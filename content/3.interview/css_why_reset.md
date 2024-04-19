# \[ CSS ] 什麼是 CSS Reset？

## CSS Reset 的用途
不同的瀏覽器會有自己的預設樣式，這可能會導致我們的網頁在不同瀏覽器中長不一樣，如果針對每個瀏覽器去微調程式碼，光想就覺得很麻煩，也不好維護和管理。為了解決這個問題，大家開始使用「**CSS Reset**」。它讓開發者可以從一個統一的基準開始設計網頁，確保所有元素在所有瀏覽器中都有一致的外觀，這樣可以更準確地控制頁面的排版和樣式。常見的 CSS Reset 有 <a href='https://necolas.github.io/normalize.css/' target='_blank'>Normalize.css</a> 和 <a href='https://meyerweb.com/eric/tools/css/reset/' target='_blank'>Reset.css</a>，它們通過覆蓋瀏覽器的預設樣式來達到這個目的。

## Reset 和 Normalize 比較
### CSS Reset
徹底清除瀏覽器的所有預設樣式。使用 CSS Reset 後，所有 HTML 元素在各個瀏覽器中會有一個完全統一的起點，可是這也代表很多基本樣式都需要開發者重新設定。

### Normalize.css
旨在使瀏覽器的樣式更加一致，同時保留有用的預設值。Normalize.css 會修正瀏覽器之間的差異，同時保持了標準的 HTML 元素樣式，這使得它在不過度重設的情況下提供一個更好的基礎樣式。

## 其他 CSS Reset
除了上述常見的兩個版本外，主流 CSS 框架也會依照框架的需求設計自己的 CSS Reset，例如：Bootstrap 的 <a href='https://getbootstrap.com/docs/5.3/content/reboot/#approach' target='_blank'>Reboot</a> (基於 Normalize)，還有 Tailwind 的 <a href='https://tailwindcss.com/docs/preflight' target='_blank'>Preflight</a> (基於 modern-normalize )，或者我們也可以依照個人或公司的需求設計自己專屬的 CSS Reset。


#### 參考資料
* chatgpt