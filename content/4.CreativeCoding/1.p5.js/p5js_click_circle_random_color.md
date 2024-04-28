# p5.js | 點擊圓形隨機變色
<a href="https://openprocessing.org/sketch/2235771" target="_blank">點擊查看作品程式碼</a>

## dist()
[隨機不重疊的圓形 | p5.js](./no_overlay_circle.md) 變化版，`dist()` 除了用來判斷兩個圓是否重疊，也可以拿來判斷滑鼠在哪個圓內。

滑鼠跟圓心的距離如果小於圓形半徑，表示滑鼠在圓內，回傳 boolean 值，用來決定要不要變更顏色。
```js
function mouseInCircle(circle) {
	return dist(mouseX, mouseY, circle.x, circle.y) < circle.r;
}
```

## random()
p5.js 的 `random()` 除了可以隨機取得範圍內的數值，例如：`random(50)`、`random(-10, 100)`，也可以隨機取得陣列的值，這個作品用來隨機取得顏色，先創建色彩陣列，再透過 `random(陣列)` 取隨機值。
```js
const colors = ["#ccd5ae", "#e9edc9", "#fefae0", "#faedcd", "#d4a373"];
random(colors);
```

## mousePressed()
偵測滑鼠點擊，點擊後執行內部程式碼
```js
function mousePressed() {
	for (let a=0; a<circles.length; a++) {
		if (mouseInCircle(circles[a])) {
			circles[a].clr = random(colors2)
		} 
	}
}
```