# p5.js | map()

map() 函式用於將一個數值從一個範圍映射到另一個範圍。
`map(value, start1, stop1, start2, stop2, [withinBounds])` 

value: 要映射的數值。
start1: 原範圍的起始值。
stop1: 原範圍的結束值。
start2: 目標範圍的起始值。
stop2: 目標範圍的結束值。

## mouseX 控制顏色
`map(mouseX, 0, width, 0, 255)` 
滑鼠左右移動，對應到的值會是 0 到 width 之間。透過 map 將 mouseX 的值映設到 0 到 255。當 mouseX 越往右，顏色數值越接近 255 (變白)，滑鼠越往左，顏色數值越接近 0 (變黑)。