# \[ Node ] 內建模組 path 介紹
執行 node 程式時，有一些預設資訊內容可以取用，例如 __dirname、__filename 等，在 VS Code 設置斷點並使用 debug 時，能夠在左側欄位查看相關資訊。
```js
var a = 1;
var path = require('path');
var b = 2;
console.log(__dirname);
​console.log(__filename);
var c = 3;
```


或是使用 node 內建模組 path

## <a href='https://nodejs.org/docs/latest/api/path.html' target='_blank'>path</a>
載入 path 模組後，透過指令可以取得目錄路徑、合併路徑、分析路徑、取得檔名和副檔名...等，更多語法可以點擊 path 標題連結查看。
```js
var path = require("path"); 
// 抓目錄路徑
console.log(path.dirname('/xx/yy/zz.js'));

// 路徑合併
console.log(path.join(__dirname, '/xx'));

// 抓檔名
console.log(path.basename('/xx/yy/zz.js'));

// 抓副檔名
console.log(path.extname('/xx/yy/zz.js'));

// 分析路徑 -> 回傳物件
console.log(path.parse('/xx/yy/zz.js');
```

> 🗽一分鐘英文小教室
副檔名 Filename <u>Ext</u>ension，或叫做延伸檔名，所以抓副檔名的語法是 extname。

#### 學習資源
* 六角學院影片