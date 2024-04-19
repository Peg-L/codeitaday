# \[ CSS ] CSS 水平置中

## 文字
1. `text-align: center;`
2. absolute + transform
```css
.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```

1. 父層：`display: flex` + 子元素：`justify-content: center`
2. `margin: 0 auto;`
3. 

#### 參考資料
* <a href='https://www.explainthis.io/zh-hant/swe/css-center' target='_blank'>CSS 水平垂直置中的方法 (flex, grid)</a>
