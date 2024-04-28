# Node | Node.js 和 V8 引擎簡介
## Node.js 是什麼?
JavaScript 這種傳統上只運行在瀏覽器裡的腳本語言，Node.js (簡稱 node) 為其提供了一個在伺服器端運行的執行環境，而且這個執行環境跨越多種主流操作系統 (Windows、Linux、macOS 等)。有了 node，使用 JavaScript 開發的應用就不再侷限於瀏覽器端，也能運行在伺服器上，例如開發 Web 服務、命令列工具、物聯網應用等等，大大拓展了 JavaScript 的使用範疇。

## V8 引擎
V8 由 Google 開發的開源 JavaScript 引擎，**V8 是 node 的核心**，node 使用 V8 當作它的 JavaScript 引擎，它負責將 JavaScript 代碼編譯成機械碼，並執行這些代碼。而 node 則提供了一個完整的 JavaScript 運行時環境，讓 JavaScript 可以在伺服器端運行。 


## 主要特點
1. 快速執行：V8 引擎被設計為高效率和高性能。
2.即時編譯 JIT：V8 引擎使用即時編譯（Just-In-Time Compilation，JIT）技術將 JavaScript 代碼即時編譯成機械碼，透過這樣來達到更快的執行速度。
3. 垃圾回收：V8 引擎使用了高效的垃圾回收機制 (根本環保小尖兵)，能夠自動回收不再使用的內存，透過這樣來幫助應用程序提高性能和效率。
4. 跨平台：V8 引擎是跨平台的，可以運行在好幾種不同的操作系統上，包括 Linux、Windows、macOS 等。
5. 開源：V8 引擎是一個開源項目，源代碼可以在 GitHub 上找到，任何人都可以查看和修改源代碼，並根據需要自由使用。


> 機械碼是電腦中最基本、最原始的指令形式，由一堆 0 和 1 組成。


#### 參考資料
* 六角學院教學影片
* AI