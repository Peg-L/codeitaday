# \[ JavaScript ] 如何解決 AJAX 非同步問題？
<!-- ann
我會使用 async/await。async function 會以同步的方式運行非同步程式碼，await 則能暫停非同步運行，等待 Promise 進入 resolve 或 reject，接著接收 Promise 的回傳值，接著繼續讓程式碼往下執行。
在我的 Vue 專案中，因為有時候要針對後端索取回來的資料作處理，需要等待 API 回應時間。在這個狀況下就很適合使用 async/await，例如我有兩個函式，分別是在 vue mounted 初始化，以及在 pinia store 執行 API 呼叫。我會在 mounted 使用 await API 函式執行，接著在 store 執行 API 呼叫的函式，並使用 return，告知 Promise 已經回傳，再進行資料的處理。 -->

非同步程式碼使用 promise + .then/ .catch
-> async await + try/catch