# Node | 核心模組 http.createServer()
目標：透過 node 的 [http](https://nodejs.org/docs/latest/api/http.html){target="_blank"} 模組來建立一個 web 伺服器 (web server)

## web 伺服器 (web server)
web 伺服器又稱為網路伺服器或網頁伺服器。web 伺服器是一台託管一個或多個網站的電腦/電腦軟體。託管通常指的是將網站的文件和數據存在伺服器上，以便通過網路提供用戶訪問。當用戶跟 web 伺服器發送請求時，web 伺服器會傳送託管的網站給用戶。

簡略版：你想看的東西放在 web 伺服器那裡，跟它說一聲我要看，它把東西傳給你。

## http 模組
node 本身就內建很多[模組](https://nodejs.org/docs/latest/api/){target="_blank"}，[http](https://nodejs.org/docs/latest/api/http.html){target="_blank"} 是其中一種，載入內建模組不用特別從資料夾中選擇，還是可以成功載入。

接下來，用 `http.createServer()` 開啟 web 伺服器。

`createServer()` 裡面放匿名函式，函式的參數通常命名為 request 和 response (也可以自訂)，在函式內處理伺服器接收到的請求(request)和發送給客戶端的回應(response)，例如範例中設置回應的標頭以及寫入內容並結束。

執行 [app.js 檔]()，打開 http://localhost:8080/ (localhost 指本地主機) 來查看，就會看到頁面成功顯示 hello!!
```js
var http = require('http'); // 載入 node 內建的 http 模組

http.createServer(function(request, response) {
	console.log(request.url); // 取得請求的 url
	​
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write('hello!!');
	response.end();
}).listen(8080);
```

## request 和 response
`request` 代表客戶端（通常是瀏覽器）向伺服器發送的 HTTP 請求。它包含了客戶端的一些資訊，例如請求的方法（GET、POST 等）、URL、標頭、以及任何在請求主體中包含的資料（比如表單數據）。
➡️客戶端向伺服器發送的請求，其中包含一些相關的資訊。

`response`: 代表伺服器給客戶端的回應。這個回應包含了伺服器要傳遞給客戶端的資源或者資訊，例如頁面的內容、圖片、文件等。回應也包含了 HTTP 狀態碼（例如200表示成功、404 表示找不到資源等）、回應標頭（例如 Content-Type 指定響應的內容類型）以及可能的回應主體（即頁面的內容或資源）。

➡️伺服器給客戶端的回應，其中包含一些相關的資訊。


可以透過瀏覽器的 DevTools 的 Network 查看 response 和 request 的相關資訊 (headers 等)。


## Content-Type 很重要
瀏覽器會根據 server 給的 Content-Type 解析檔案，會影響呈現的結果。

舉例：寫入`<h1>hello!!</h1>`，把 Content-Type 分別寫 `text/plain` 和 `text/html`，最終分別得到 `<h1>hello!!</h1>` 和 hello!!。

備註：前後程式碼省略，實際寫記得打
```js
...​
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write('<h1>hello!!</h1>');
...
```
```js
...
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write('<h1>hello!!</h1>');
...​
```

## 8080 port 通訊埠
伺服器裡面的其中一個軟體，它會佔據電腦中其中一個 port，透過這個 port 來開啟應用程式的內容。

AI 解釋：電腦就像一棟大樓，8080 就像是這棟大樓的其中一個房間號碼。當你想要訪問不同的網路服務時，就需要知道我們要存取哪一個「房間號碼」。通常網頁瀏覽服務會使用 80 號房間，這是一個默認和眾所周知的房間號。但有時候 80 號房間已經被其他服務佔用了，這時我們就需要使用備用的房間號碼，比如 8080 號房間。

有些埠號已經被其他協定和服務佔據了，可以查看[通訊埠列表](https://zh.wikipedia.org/wiki/TCP/UDP%E7%AB%AF%E5%8F%A3%E5%88%97%E8%A1%A8){target="_blank"}。

#### 學習資源
* 六角學院影片
* AI
* [web server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines#web_server_2){target="_blank"}
