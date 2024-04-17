# \[ p5.js ] 隨機不重疊的圓形
<a href="https://openprocessing.org/sketch/2234139" target="_blank">點擊查看作品程式碼</a>

> 來源影片：<a href="https://youtu.be/XATr_jdh-44?si=L4hjSjRhpS9je1yX" target="_blank">9.8: Random Circles with No Overlap - p5.js Tutorial</a>


## 目標：畫隨機且不重疊的圓型

如果直接用 random 賦予 x 和 y 的值 (圓的位置)，很難避免重疊。

## 作法
其中一個方法 (影片中教的方法) 是看兩個圓心之間的距離有沒有大於或等於兩個圓的半徑相加，如果有就表示兩個圓沒有重疊。使用 `dist(x1, y1, x2, y2)` 判斷兩點之間的距離。

把圓的資訊 (x, y, r) 存成物件，每個圓跟陣列中的圓依序比對，用 dist 判斷兩個圓是否重疊，沒重疊才加進陣列裡。

