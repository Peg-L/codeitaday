# \[ Vue ] 你如何處理 JS/Vue 的 API Catch 補捉錯誤？
透過 catch 捕捉錯誤可以讓程式不會因為報錯而中斷。總共有兩種 catch 寫法：
1. 使用 promise，可以搭配 .then 和 .catch。
2. 使用 async、await 可以搭配 try 和 catch，這可以讓非同步程式碼的錯誤處理更直觀，類似同步處理方式。

因為 try、catch 是用來捕捉同步程式碼的錯誤，不能直接搭配 promise，一定要搭配 async await。

<a href='https://youtu.be/NwoAZF66_Go?si=RMfLZawjOL9k8QSR' target='_blank'>JavaScript Error handling in 9 minutes! ⚠</a>