# \[ CSS ] 選擇器權重

## CSS 樣式採用規則
當不同的 CSS 會影響同一個元素時，要怎麼判斷誰能被採用呢？先透過權重來判斷誰的優先度較高；那如果優先級相等，接著看順序，後面的樣式會覆蓋過前面的，口訣：「**先看權重，再看誰後**」。這裡的順序指的是 CSS 檔樣式被撰寫的順序，而不是 HTML 的 class 書寫順序。

如下面範例：權重相同，再來判斷 CSS 樣式順序 (HTML 故意寫相反順序，但不造成影響)，最終套用的樣式會是藍字。
```html
<h1 class="blue red"></h1>
```
```css
​.red {
	color: red;
}

​.blue {
	color: blue;
}
```

## 樣式權重彙整 (大到小)
### !important (1 - 0 - 0 - 0 - 0)
寫在 CSS 屬性後方
```css
.red { 
	color: red; !important 
 }
```
看名字就知道 `!important` 是最重要的，優先級比其他樣式高，加了可以確保樣式勝出。看起來很好用？ＢＵＴ！！如果加了，就很難再被其他樣式覆蓋，只能繼續用 `!important` 來壓過它，用太多彈性差且不好維護，應盡量避免使用。


### Inline Styles (1 - 0 - 0 - 0)
寫在 HTML 標籤上的 style
```html
<div style="color:blue"> inline styles </div>
```

### id (0 - 1 - 0 - 0)
```html
<h1 id="green">Hello World!</h1>
```

```css
#green {
  color: green;
}
```

### class / psuedo-class / attribute (0 - 0 - 1 - 0)
#### class (0 - 0 - 1 - 0)
```css
.myclass {
  color: green;
}
```

#### psuedo-class (0 - 0 - 1 - 0)
```css
a:hover {
  color: red;
}
```
這個範例除了 psuedo-class 外，還有a 標籤權重為 (0 - 0 - 0 - 1)，總權重為 (0 - 0 - 1 - 1)。


#### attribute (0 - 0 - 1 - 0)
```css
[title="example"] {
  font-style: italic;
}
```

### element (0 - 0 - 0 - 1)
```css
p {
  color: blue;
}
```

### * 通用選擇器/ 全站預設值 (0 - 0 - 0 - 0)
```css
*{    
	padding: 0     
  margin: 0  
}
```

## 總結
!important > inline style > id> class=psuedo-class=attribute > element > *

#### 資料來源
* <a href="https://siddharam.com.tw/post/20200326/" target="_blank">junior 前端模擬面試：面試官心得</a>
* <a href="https://medium.com/tiffrrr/css%E6%AC%8A%E9%87%8D-e42b5427e38b" target="_blank">【CSS】來談談css權重</a>
* chatgpt