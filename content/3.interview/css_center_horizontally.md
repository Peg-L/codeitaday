# CSS | CSS 水平置中

## text-align: center;
在父元素使用，讓內層 inline / inline-block 元素水平置中

## margin: 0 auto;
讓「有固定寬度」的 block 元素置中。img 原本是可以設定寬度的 inline，但還是需要轉成 block 元素才能透過 `margin: 0 auto` 置中。

## absolute + transform
父層加上 `position: relative`。不管 inline / inline-block / block 元素，有設定寬度還是沒設定寬度，都可以用這段語法來置中。
```css
.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```


## 咒語 df + jcc / df + fxdc + aic
父層：`display: flex` + `justify-content: center`
父層：`display: flex` + `flex-direction: column` + `align-items: center`

#### 參考資料
* [CSS 水平垂直置中的方法 (flex, grid)](https://www.explainthis.io/zh-hant/swe/css-center){target="_blank"}
* [水平置中的三種方法，你用對了嗎？](https://eoscreative.co/center-things-on-web-page-html-css/){target="_blank"}
* [CSS 水平置中 | Ann Chou](https://codepen.io/annchou_illu/pen/ExJdvGm?editors=1100){target="_blank"}