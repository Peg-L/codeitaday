# \[ JavaScript ] 什麼是 event loop?
![event loop](./img/event_loop.png)

JS 是單線程語言，一次只能做一件事。程式碼片段會逐一放進 call stack 中，採用後進先出 (last in first out) 的順序執行。當出現 setTimeout 等非同步事件時，會交給瀏覽器提供的 Web API 處理，完成後再將 callback function 放到 task queue。event loop 會不斷偵測 call stack 的任務是否全部執行完了，再把 task queue 的 callback function 放進 call stack 中執行。


#### 參考資料
* [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://youtu.be/8aGhZQkoFbQ?si=QQCj525Y6qHsRcKU){target="_blank"}
* [理解 JavaScript 中的事件循環、堆疊、佇列和併發模式](https://pjchender.dev/javascript/js-event-loop-stack-queue){target="_blank"}
* [Javascript Event Loop Explained](https://www.webdevolution.com/blog/Javascript-Event-Loop-Explained){target="_blank"}
* [我知道你懂 Event Loop，但你了解到多深？](https://yeefun.github.io/event-loop-in-depth/){target="_blank"}